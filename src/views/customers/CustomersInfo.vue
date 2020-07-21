<template>
    <div class="customersInfo">
        <div class="customersInfo-header">
            <div class="header-back" @click="$router.push('/customers')">
                <img src="../../assets/image/back.svg" alt="">
                <span>КЛИЕНТЫ</span>
            </div>
            <div class="header-headline">
                <span>{{ custInfo.name }}</span>
            </div>
            <div class="header-options">
                <img src="../../assets/image/change.svg" alt="" class="change" @click="cust_edit= !cust_edit">
                <img src="../../assets/image/delete.svg" alt="" class="delete" @click="deleteCust()">
            </div>
        </div>
        <div class="customersInfo-content">
            <div class="content-item">
                <span class="item-header detail">Юридический адрес</span>
                <span class="item-entry detailEntry" v-if="!cust_edit">{{ custInfo.legal_address }}</span>
                <span class="item-entry detailEntry" v-else><input type="text" v-model="legal_address"></span>
            </div>
            <div class="content-item">
                <span class="item-header detail">Стоимость договора</span>
                <span class="item-entry detailEntry" v-if="!cust_edit">{{ custInfo.contract_cost }}</span>
                <span class="item-entry detailEntry" v-else><input type="text" v-model="contract_cost"></span>
            </div>
            <div class="content-item">
                <span class="item-header detail">Электронный адрес</span>
                <span class="item-entry detailEntry" v-if="!cust_edit">{{ custInfo.email }}</span>
                <span class="item-entry detailEntry" v-else><input type="text" v-model="email"></span>
            </div>
            <div class="content-item">
                <span class="item-header detail">БИК</span>
                <span class="item-entry detailEntry" v-if="!cust_edit">{{ custInfo.bik }}</span>
                <span class="item-entry detailEntry" v-else><input type="text" v-model="bik"></span>
            </div>
            <div class="content-item">
                <span class="item-header detail">ОГРН</span>
                <span class="item-entry detailEntry" v-if="!cust_edit">{{ custInfo.ogrn }}</span>
                <span class="item-entry detailEntry" v-else><input type="text" v-model="ogrn"></span>
            </div>
            <div class="content-item">
                <span class="item-header detail">ИНН</span>
                <span class="item-entry detailEntry" v-if="!cust_edit">{{ custInfo.inn }}</span>
                <span class="item-entry detailEntry" v-else><input type="text" v-model="inn"></span>
            </div>
            <div class="content-item">
                <span class="item-header detail">КПП</span>
                <span class="item-entry detailEntry" v-if="!cust_edit">{{ custInfo.kpp }}</span>
                <span class="item-entry detailEntry" v-else><input type="text" v-model="kpp"></span>
            </div>
            <div class="content-item">
                <span class="item-header">Генеральный директор</span>
                <span class="item-entry" v-if="!cust_edit">{{ custInfo.general_director }}</span>
                <span class="item-entry" v-else><input type="text" v-model="general_director"></span>
            </div>
            <div class="content-item">
                <span class="item-header">Контактный телефон</span>
                <span class="item-entry" v-if="!cust_edit">{{ custInfo.phone_number }}</span>
                <span class="item-entry" v-else><input type="text" v-model="phone_number" @blur="patchCust()"></span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'CustomersInfo',
    data(){
        return{
            cust_edit: false,
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
    computed:{
        custInfo(){
            return this.$store.getters.custInfo(parseInt(this.$route.params.id))
        }
    },
    methods:{
        patchCust(){
            this.$store.dispatch('patchCust', {
                id: this.custInfo.id,
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
                this.custInfo.legal_address = this.legal_address ,
                this.custInfo.contract_cost = this.contract_cost,
                this.custInfo.email = this.email,
                this.custInfo.bik = this.bik,
                this.custInfo.ogrn = this.ogrn,
                this.custInfo.inn = this.inn,
                this.custInfo.kpp = this.kpp,
                this.custInfo.general_director = this.general_director,
                this.custInfo.phone_number = this.phone_number
            })
            this.cust_edit = false
        },
        deleteCust(){
            this.$store.dispatch('deleteCust', {
                id: this.custInfo.id
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

.customersInfo {
    @include pageContent();
    .customersInfo-header {
        @include infoHeader();
    }
    .customersInfo-content {
        height: calc(100% - 70px);
        width: 100%;
        overflow-y: auto;
        @include tableContract();
    }
}
</style>