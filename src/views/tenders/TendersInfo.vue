<template>
    <div class="tendersInfo">
        <div class="tendersInfo-header">
            <div class="header-back" @click="$router.push('/tenders')">
                <img src="../../assets/image/back.svg" alt="">
                <span>ТЕНДЕРЫ</span>
            </div>
            <div class="header-headline">
                <span>ТЕНДЕР №{{tenderInfo.number}}</span>
            </div>
            <div class="header-options">
                <img src="../../assets/image/change.svg" alt="" class="change" @click="tender_edit = !tender_edit">
                <img src="../../assets/image/delete.svg" alt="" class="delete" @click="deleteTender()">
            </div>
        </div>
        <div class="tendersInfo-content">
            <div class="content-item">
                <span class="item-header">Производитель лифта</span>
                <span class="item-entry" v-if="!tender_edit">{{tenderInfo.lift_manufacturer}}</span>
                <span class="item-entry" v-else><input type="text" v-model="lift_manufacturer"></span>
            </div>
            <div class="content-item">
                <span class="item-header">Комплектация лифта</span>
                <span class="item-entry" v-if="!tender_edit">{{tenderInfo.lift_equipment}}</span>
                <span class="item-entry" v-else><input type="text" v-model="lift_equipment"></span>
            </div>
            <div class="content-item">
                <span class="item-header">Цена и условия ее формирования</span>
                <span class="item-entry" v-if="!tender_edit">{{tenderInfo.cost}}</span>
                <span class="item-entry" v-else><input type="text" v-model="cost"></span>
            </div>
            <div class="content-item">
                <span class="item-header">Условия оплаты</span>
                <span class="item-entry" v-if="!tender_edit">{{tenderInfo.cost_condition}}</span>
                <span class="item-entry" v-else><input type="text" v-model="cost_condition"></span>
            </div>
            <div class="content-item">
                <span class="item-header">Гарантия</span>
                <span class="item-entry" v-if="!tender_edit">{{tenderInfo.guarantee}}</span>
                <span class="item-entry" v-else><input type="text" v-model="guarantee" @blur="patchTender()"></span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'TendersInfo',
    data(){
        return{
            tender_edit: false,
            lift_manufacturer: '',
            lift_equipment: '',
            cost: '',
            cost_condition: '',
            guarantee: ''
        }
    },
    computed:{
        tenderInfo(){
            return this.$store.getters.tenderInfo(parseInt(this.$route.params.id))
        }
    },
    methods:{
        patchTender(){
            this.$store.dispatch('patchTender', {
                id: this.tenderInfo.id,
                lift_manufacturer: this.lift_manufacturer,
                lift_equipment: this.lift_equipment,
                cost: this.cost,
                cost_condition: this.cost_condition,
                guarantee: this.guarantee,
            })
            .then(() => {
                this.$router.push('/tenders')
            })
            this.tender_edit = false
        },
        deleteTender(){
            this.$store.dispatch('deleteTender', {
                id: this.tenderInfo.id
            })
            .then(() => {
                this.$router.push('/tenders')
            })
        }
    }
}
</script>

<style lang="scss">
@import "../../assets/mixin/_mixin.scss";

.tendersInfo {
    @include pageContent();
    .tendersInfo-header {
        @include infoHeader();
    }
    .tendersInfo-content {
        height: calc(100% - 70px);
        width: 100%;
        overflow-y: auto;
        @include tableContract();
    }
}
</style>