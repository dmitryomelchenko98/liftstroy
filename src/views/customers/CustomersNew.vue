<template>
    <div class="customersNew">
        <div class="customersNew-header">
            <div class="header-back" @click="$router.push('/customers')">
                <img src="../../assets/image/back.svg" alt="">
                <span>КЛИЕНТЫ</span>
            </div>
            <div class="header-headline">
                <span>НАЗВАНИЕ ОРГАНИЗАЦИИ</span>
            </div>
            <div class="header-button" @click="addCust()">
                <span>ГОТОВО</span>
            </div>
        </div>
        <div class="customersNew-content">            
            <div class="content-item">
                <span class="item-header">Наименование</span>
                <span class="item-entry"><input type="text" name="" id="" placeholder="Введите наименование..." v-model="name"></span>
            </div>            
            <div class="content-item">
                <span class="item-header">Дата</span>
                <span class="item-entry"><input type="date" name="" id="" placeholder="Введите дату..." v-model="date"></span>
            </div>
            <div class="content-item">
                <span class="item-header detail">Юридический адрес</span>
                <span class="item-entry detailEntry"><input type="text" name="" id="" placeholder="Введите юридический адрес..." v-model="legal_address"></span>
            </div>
            <div class="content-item">
                <span class="item-header detail">Стоимость договора</span>
                <span class="item-entry detailEntry"><input type="text" name="" id="" placeholder="Введите стоимость договора..." v-model="contract_cost"></span>
            </div>
            <div class="content-item">
                <span class="item-header detail">Электронный адрес</span>
                <span class="item-entry detailEntry"><input type="text" name="" id="" placeholder="Введите электронный адрес..." v-model="email"></span>
            </div>
            <div class="content-item">
                <span class="item-header detail">БИК</span>
                <span class="item-entry detailEntry"><input type="text" name="" id="" placeholder="Введите БИК..." v-model="bik"></span>
            </div>
            <div class="content-item">
                <span class="item-header detail">ОГРН</span>
                <span class="item-entry detailEntry"><input type="text" name="" id="" placeholder="Введите ОГРН..." v-model="ogrn"></span>
            </div>
            <div class="content-item">
                <span class="item-header detail">ИНН</span>
                <span class="item-entry detailEntry"><input type="text" name="" id="" placeholder="Введите ИНН..." v-model="inn"></span>
            </div>
            <div class="content-item">
                <span class="item-header detail">КПП</span>
                <span class="item-entry detailEntry"><input type="text" name="" id="" placeholder="Введите КПП..." v-model="kpp"></span>
            </div>
            <div class="content-item">
                <span class="item-header">Генеральный директор</span>
                <span class="item-entry"><input type="text" name="" id="" placeholder="Генеральный директор..." v-model="general_director"></span>
            </div>
            <div class="content-item">
                <span class="item-header">Контактный телефон</span>
                <span class="item-entry"><input type="text" name="" id="" placeholder="Введите контактный телефон..." v-model="phone_number"></span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'customersNew',
    data(){
        return{
            name: '',
            date: '',
            legal_address: '',
            contract_cost: '',
            email: '',
            bik: '',
            ogrn: '',
            inn: '',
            kpp: '',
            general_director: '',
            phone_number: ''
        }
    },
    methods:{
        addCust(){
            this.$store.dispatch('addCust', {
                name: this.name,
                date: this.date,
                legal_address: this.legal_address,
                contract_cost: this.contract_cost,
                email: this.email,
                bik: this.bik,
                ogrn: this.ogrn,
                inn: this.inn,
                kpp: this.kpp,
                general_director: this.general_director,
                phone_number: this.phone_number
            })
            .then(() => {
                this.$router.push('/customers')
            })
        } 
    }
}
</script>

<style lang="scss">
@import "../../assets/mixin/_mixin.scss";

.customersNew {
    @include pageContent();
    .customersNew-header {
        @include newHeader();
    }
    .customersNew-content {
        @include newContent();
    }
}
</style>