<template>
    <div class="insuranceInfo">
        <div class="insuranceInfo-header">
            <div class="header-back" @click="$router.push('/insurance')">
                <img src="../../assets/image/back.svg" alt="">
                <span>СТРАХОВКИ</span>
            </div>
            <div class="header-headline">
                <span>СТРАХОВКА № {{insInfo.number}}</span>
            </div>
            <div class="header-options">
                <img src="../../assets/image/change.svg" alt="" class="change" @click="ins_edit = !ins_edit">
                <img src="../../assets/image/delete.svg" alt="" class="delete" @click="deleteIns()">
            </div>
        </div>
        <div class="insuranceInfo-content">
            <div class="content-item">
                <span class="item-header">Ответственный за инженерные работы</span>
                <span class="item-entry" v-if="!ins_edit">{{insInfo.engineering_responsible}}</span>
                <span class="item-entry" v-else><input type="text" v-model="engineering_responsible"></span>
            </div>
            <div class="content-item">
                <span class="item-header">Ответственный за технические работы</span>
                <span class="item-entry" v-if="!ins_edit">{{insInfo.technical_responsible}}</span>
                <span class="item-entry" v-else><input type="text" v-model="technical_responsible"></span>
            </div>
            <div class="content-item">
                <span class="item-header">Ответственный за поставку оборудования</span>
                <span class="item-entry" v-if="!ins_edit">{{insInfo.equipment_responsible}}</span>
                <span class="item-entry" v-else><input type="text" v-model="equipment_responsible"></span>
            </div>
            <div class="content-item">
                <span class="item-header">Ответственный за пуско-наладке оборудования</span>
                <span class="item-entry" v-if="!ins_edit">{{insInfo.launch_setup_responsible}}</span>
                <span class="item-entry" v-else><input type="text" v-model="launch_setup_responsible"></span>
            </div>
            <div class="content-item">
                <span class="item-header">ГОСТы</span>
                <span class="item-entry" v-if="!ins_edit">{{insInfo.gosts}}</span>
                <span class="item-entry" v-else><input type="text" v-model="gosts" @blur="patchIns()"></span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'InsuranceInfo',
    data(){
        return{
            ins_edit: false,
            engineering_responsible: '',
            technical_responsible: '',
            equipment_responsible: '',
            launch_setup_responsible: '',
            gosts: ''
        }
    },
    computed:{
        insInfo(){
            return this.$store.getters.insInfo(parseInt(this.$route.params.id))
        }
    },
    methods:{
        patchIns(){
            this.$store.dispatch('patchIns', {
                id: this.insInfo.id,
                engineering_responsible: this.engineering_responsible,
                technical_responsible: this.technical_responsible,
                equipment_responsible: this.equipment_responsible,
                launch_setup_responsible: this.launch_setup_responsible,
                gosts: this.gosts
            })
            .then(() => {
                this.$router.push('/insurance')
            })
            this.ins_edit = false
        },
        deleteIns(){
            this.$store.dispatch('deleteIns', {
                id: this.insInfo.id
            })
            .then(() => {
                this.$router.push('/insurance')
            })
        }
    }
}
</script>

<style lang="scss">
@import "../../assets/mixin/_mixin.scss";

.insuranceInfo {
    @include pageContent();
    .insuranceInfo-header {
        @include infoHeader();
    }
    .insuranceInfo-content {
        height: calc(100% - 70px);
        width: 100%;
        overflow-y: auto;
        @include tableContract();
    }
}
</style>