<template>
    <div class="tendersNew">
        <div class="tendersNew-header">
            <router-link class="header-back" tag="div" :to="'/tenders'">
                <img src="../../assets/image/back.svg" alt="">
                <span>Тендеры</span>
            </router-link>
            <div class="header-back" @click="addTender()">
                <span>Готово</span>
            </div>
        </div>
        <div class="tendersNew-content">
            <div class="content-item">
                <span class="item-header">Номер</span>
                <span class="item-entry"><input type="text" name="" id="" placeholder="Введите номер производителя..." v-model="number"></span>
            </div>
            <div class="content-item">
                <span class="item-header">Дата</span>
                <span class="item-entry"><input type="date" name="" id="" placeholder="Введите дату производителя..." v-model="date"></span>
            </div>
            <div class="content-item">
                <span class="item-header">Производитель лифта</span>
                <span class="item-entry"><input type="text" name="" id="" placeholder="Введите наименование производителя..." v-model="lift_manufacturer"></span>
            </div>
            <div class="content-item">
                <span class="item-header">Комплектация лифта</span>
                <span class="item-entry"><input type="text" name="" id="" placeholder="Введите комплектацию лифта..." v-model="lift_equipment"></span>
            </div>
            <div class="content-item">
                <span class="item-header">Цена</span>
                <span class="item-entry"><input type="text" name="" id="" placeholder="Введите данные о цене..." v-model="cost"></span>
            </div>
            <div class="content-item">
                <span class="item-header">Условия формирования</span>
                <span class="item-entry"><input type="text" name="" id="" placeholder="Введите данные о условиях..." v-model="cost_condition"></span>
            </div>
            <div class="content-item">
                <span class="item-header">Условия оплаты</span>
                <span class="item-entry"><input type="text" name="" id="" placeholder="Введите условия оплаты..." v-model="payment_condition"></span>
            </div>
            <div class="content-item">
                <span class="item-header">Гарантия</span>
                <span class="item-entry"><input type="text" name="" id="" placeholder="Гарантия..." v-model="guarantee"></span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'TendersNew',
    data(){
        return{
            number: '',
            date: '',
            lift_manufacturer: '',
            lift_equipment: '',
            cost: '',
            cost_condition: '',
            payment_condition: '',
            guarantee: ''
        }
    },
    methods:{
        addTender(){
            this.$store.dispatch('addTender', {
                number: this.number,
                date: this.date,
                lift_manufacturer: this.lift_manufacturer,
                lift_equipment: this.lift_equipment,
                cost: this.cost,
                cost_condition: this.cost_condition,
                payment_condition: this.payment_condition,
                guarantee: this.guarantee
            })
            .then(() =>{
                this.$router.push('/tenders')
            })
        }
    }
}
</script>

<style lang="scss">
@import "../../assets/mixin/_mixin.scss";

.tendersNew {
    @include pageContent();
    .tendersNew-header {
        @include newHeader();
    }
    .tendersNew-content {
        @include newContent();
    }
}
</style>