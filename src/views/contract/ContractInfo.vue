<template>
    <div class="contractInfo">
        <div class="contractInfo-header">
            <router-link tag="div" class="header-back" to="/contract">
                <img src="../../assets/image/back.svg" alt="" @click="$router.push('/contracts')">
                <span>ДОГОВОРА</span>
            </router-link>
            <div class="header-headline">
                <span>ДОГОВОР №000</span>
            </div>
            <div class="header-options">
                <img src="../../assets/image/attachment.svg" alt="" class="attachment" v-if="modal =! modal">
                <img src="../../assets/image/change.svg" alt="" class="change">
                <img src="../../assets/image/delete.svg" alt="" class="delete">
            </div>
        </div>
        <div class="contractInfo-content">
            <div class="content-item">
                <span class="item-header">Организация</span>
                <span class="item-entry" v-if="!cont_edit">{{ contInfo.organization }}</span>
                <span class="item-entry" v-else><input type="text" v-model="organization"></span>
            </div>
            <div class="content-item">
                <span class="item-header">Стоимость договора</span>
                <span class="item-entry" v-if="!cont_edit">{{ contInfo.contract_cost | currency }}</span>
                <span class="item-entry" v-else><input type="text" v-model="contract_cost"></span>
            </div>
            <div class="content-item">
                <span class="item-header detail">Стоимость оборудования</span>
                <span class="item-entry" v-if="!cont_edit">{{ contInfo.equipment_cost }}</span>
                <span class="item-entry" v-else><input type="text" v-model="equipment_cost"></span>
            </div>
            <div class="content-item">
                <span class="item-header detail">Стимость работ по доставке/монтажу/отделке и пуско-наладке оборудования</span>
                <span class="item-entry" v-if="!cont_edit">{{ contInfo.shipping_cost }}</span>
                <span class="item-entry" v-else><input type="text" v-model="shipping_cost"></span>
            </div>
            <div class="content-item">
                <span class="item-header">Сроки выполнения работ</span>
                <span class="item-entry" v-if="!cont_edit">{{ contInfo.turnaround_time }}</span>
                <span class="item-entry" v-else><input type="text" v-model="turnaround_time"></span>
            </div>
            <div class="content-item">
                <span class="item-header">Сдача-приёмка работ</span>
                <span class="item-entry" v-if="!cont_edit">{{ contInfo.delivery_acceptance_work }}</span>
                <span class="item-entry" v-else><input type="text" v-model="delivery_acceptance_work"></span>
            </div>
            <div class="content-item">
                <span class="item-header">Ответственные стороны</span>
                <span class="item-entry" v-if="!cont_edit">{{ contInfo.responsible_parties }}</span>
                <span class="item-entry" v-else><input type="text" v-model="responsible_parties"></span>
            </div>
            <div class="content-item">
                <span class="item-header">Реквизиты</span>
                <span class="item-entry" v-if="!cont_edit">{{ contInfo.requisites }}</span>
                <span class="item-entry" v-else><input type="text" v-model="requisites"></span>
            </div>
            <div class="content-item">
                <span class="item-header">Гарантия</span>
                <span class="item-entry" v-if="!cont_edit">{{ contInfo.guarantee }}</span>
                <span class="item-entry" v-else><input type="text" v-model="guarantee"></span>
            </div>
            <div class="content-item">
                <span class="item-header">ГОСТы</span>
                <span class="item-entry" v-if="!cont_edit">{{ contInfo.guests}}</span>
                <span class="item-entry" v-else><input type="text" v-model="guests" @change="patchCon()"></span>
            </div>
        </div>
        <div class="modal-doc" v-show="modal">
            <label for="file">Выберите документ:</label>
            <input type="file" ref="contract">
            <button @click="addDocument()">Добавить</button>
        </div>
        <div class="fil" v-show="modal" @click="modal = !modal"></div>
    </div>
</template>

<script>
import { http } from '../../axios-config.js';
import FormData from 'form-data'

export default {
    name: 'ContractInfo',
    data(){
        return{
            modal: false,
            contract: '',
            edit_con: false,
            organization: '',
            contract_cost: '',
            equipment_cost: '',
            shipping_cost: '',
            turnaround_time: '',
            delivery_acceptance_work: '',
            responsible_parties: '',
            requisites: '',
            guarantee: '',
            guests: ''
        }
    },
    methods:{
        addDocument(){
            this.contract = this.$refs.contract.files[0];
            let formData = new FormData;
            formData.append('document', this.contract)
            this.$store.dispatch('addDoc', {
                id: this.contInfo.id,
                document: formData
            })
        },
        patchCon(){
            this.$store.dispatch('patchCon', {
                id: this.contInfo.id,
                organization: this.organization,
                contract_cost: this.contract_cost,
                equipment_cost: this.equipment_cost,
                shipping_cost: this.shipping_cost,
                turnaround_time: this.turnaround_time,
                delivery_acceptance_work: this.delivery_acceptance_work,
                responsible_parties: this.responsible_parties,
                requisites: this.requisites,
                guarantee: this.guarantee,
                guests: this.guests
            })
            .then(() => {
                this.$router.push('/contract')
            })
            this.taskEdit = false
        },
    },
    computed:{
        contInfo(){
            return this.$store.getters.contInfo(parseInt(this.$route.params.id))
        }
    }
}
</script>

<style lang="scss">
@import "../../assets/mixin/_mixin.scss";

.contractInfo {
    @include pageContent();
    .modal-doc{
        display: flex;
        justify-content: center;
        flex-direction: column;
        position: absolute;
        top: 50%;
        left: 50%;
        width: 250px;
        height: 150px;
        border: 1px solid black;
        background: white;
        z-index: 9;
        label{
            margin: 10px;
        }
    }
    .fil{
        position: absolute;top: 0;left: 0;
        width: 100%;
        height: 100vh;
        background: rgba($color: #000000, $alpha: .5);
        z-index: 1;
    }
    .contractInfo-header {
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
            .change, .download {
                margin-right: 10px;
            }
            .attachment {
                margin-right: 30px;
            }   
            img {
                height: 22px;
                width: auto;
            }

        }
    }
    .contractInfo-content {
        height: calc(100% - 70px);
        width: 100%;
        overflow-y: auto;
        @include tableContract();
    }
}
</style>