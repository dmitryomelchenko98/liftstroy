<template>
    <div class="contractNew">
        <div class="contractNew-header">
            <router-link class="header-back" tag="div" to="/contract">
                <img src="../../assets/image/back.svg" alt="">
                <span>ДОГОВОРА</span>
            </router-link>
            <div class="header-headline">
                <span>ДОГОВОР</span>
            </div>
            <div class="header-options" >
                <div class="options-attachment" @click="modal = !modal">
                    <img src="../../assets/image/plusTur.svg" alt="" class="attachment">
                    <span>Приложение</span>
                </div>
                <span @click="addContact()">ГОТОВО</span>
            </div>
        </div>
        <div class="contractNew-content">
            <div class="content-item">
                <span class="item-header">Номер договора</span>
                <span class="item-entry"><input type="text" name="" id="" placeholder="Введите номер договора..." v-model="number"></span>
            </div>
            <div class="content-item">
                <span class="item-header">Организация</span>
                <span class="item-entry"><input type="text" name="" id="" placeholder="Введите название организации..." v-model="organization"></span>
            </div>
            <div class="content-item">
                <span class="item-header">Стоимость договора</span>
                <span class="item-entry"><input type="text" name="" id="" placeholder="Введите стоимость договора..." v-model="contract_cost"></span>
            </div>
            <div class="content-item">
                <span class="item-header detail">Стоимость оборудования</span>
                <span class="item-entry"><input type="text" name="" id="" placeholder="Введите стоимость оборудования..." v-model="equipment_cost"></span>
            </div>
            <div class="content-item">
                <span class="item-header detail">Стимость работ по доставке/монтажу/отделке и пуско-наладке оборудования</span>
                <span class="item-entry"><input type="text" name="" id="" placeholder="Введите стоимость работ..." v-model="shipping_cost"></span>
            </div>
            <div class="content-item">
                <span class="item-header">Сроки выполнения работ</span>
                <span class="item-entry"><input type="text" name="" id="" placeholder="Введите сроки..." v-model="turnaround_time"></span>
            </div>
            <div class="content-item">
                <span class="item-header">Сдача-приёмка работ</span>
                <span class="item-entry"><input type="text" name="" id="" placeholder="Сдача-приемка работ..." v-model="delivery_acceptance_work"></span>
            </div>
            <div class="content-item">
                <span class="item-header">Ответственные стороны</span>
                <span class="item-entry"><input type="text" name="" id="" placeholder="Введите ответственные стороны..." v-model="responsible_parties"></span>
            </div>
            <div class="content-item">
                <span class="item-header">Реквизиты</span>
                <span class="item-entry"><input type="text" name="" id="" placeholder="Введите реквизиты..." v-model="requisites"></span>
            </div>
            <div class="content-item">
                <span class="item-header">Гарантия</span>
                <span class="item-entry"><input type="text" name="" id="" placeholder="Гарантиян..." v-model="guarantee"></span>
            </div>
            <div class="content-item">
                <span class="item-header">ГОСТы</span>
                <span class="item-entry"><input type="text" name="" id="" placeholder="ГОСТы..." v-model="guests"></span>
            </div>
            <div class="content-item">
                <span class="item-header">Документ</span>
                <span class="item-entry"><input type="file" name="" id="" placeholder="ГОСТы..." ref="doc"></span>
            </div>
        </div>
        <div class="modal-attachment" v-show="modal">
            <Attachment @addAttach="addAttachment"/>
        </div>
        <div class="fil" v-show="modal" @click="modal =! modal"></div>
    </div>
</template>

<script>
import Attachment from './AttachmentNew.vue'

export default {
    name: 'ContractNew',components:{Attachment},
    data(){
        return {
            modal: false,
            number: '',
            organization :'',
            contract_cost : '',
            equipment_cost :'',
            shipping_cost: '',
            turnaround_time: '',
            delivery_acceptance_work: '',
            responsible_parties: '',
            requisites: '',
            guarantee: '',
            guests: '',
            payment: '',
            specifications: '',
            documentation: '',
            technical_task: '',
            equipment: '',
            doc: ''
        }
    },
    methods:{
        addContact(){
            this.$store.dispatch('addContract', {
                number: this.number,
                organization :this.organization,
                contract_cost : this.contract_cost,
                equipment_cost :this.equipment_cost,
                shipping_cost: this.shipping_cost,
                turnaround_time: this.turnaround_time,
                delivery_acceptance_work: this.delivery_acceptance_work,
                responsible_parties: this.responsible_parties,
                requisites: this.requisites,
                guarantee: this.guarantee,
                guests: this.guests,
                payment: this.payment,
                specifications: this.specifications,
                documentation: this.documentation,
                technical_task: this.technical_task,
                equipment: this.equipment
            })
        },
        addAttachment(data){
            this.modal = false;
            this.payment = data.payment,
            this.specifications = data.specifications,
            this.documentation = data.documentation,
            this.technical_task = data.technical_task,
            this.equipment = data.equipment
        }
    }
}
</script>

<style lang="scss">
@import "../../assets/mixin/_mixin.scss";

.contractNew {
    @include pageContent();
    .modal-attachment{
        position: absolute;
        background: white;
        border: 1px solid black;
        top: 20%;
        left: 20%;
        z-index: 9;
    }
    .fil{
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100vh;
        background-color: rgba($color: #000000, $alpha: .5);
        z-index: 1;
    }
    .contractNew-header {
        height: 40px;
        margin-bottom: 30px;
        @include flex();
        justify-content: space-between;
        .header-back {
            @include flex();
            cursor: pointer;
            img {
                margin-right: 10px;
            }
            span {
                font-weight: bold;
            }
        }
        .header-options {
            cursor: pointer;
            @include flex();
            span {
                font-weight: bold;
            }
            .options-attachment {
                margin-right: 40px;
                @include flex();
                span {
                    color: $colorTur;
                    font-weight: normal;
                }
                .attachment {
                    margin-right: 5px;
                }   
            }
            

        }
    }
    .contractNew-content {
        @include newContent();
    }
}
</style>