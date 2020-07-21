<template>
    <div class="equipmentInfo">
        <div class="equipmentInfo-header">
            <div class="header-back" @click="$router.push('/equipment')">
                <img src="../../assets/image/back.svg" alt="">
                <span>ОБОРУДОВАНИЕ</span>
            </div>
            <div class="header-headline">
                <span>ОБОРУДОВАНИЕ К Д. № {{equipInfo.number}}</span>
            </div>
            <div class="header-options">
                <img src="../../assets/image/change.svg" alt="" class="change" @click="equip_edit = !equip_edit">
                <img src="../../assets/image/delete.svg" alt="" class="delete" @click="deleteEquip()">
            </div>
        </div>
        <div class="equipmentInfo-content">
            <div class="content-item">
                <span class="item-header">Производитель</span>
                <span class="item-entry" v-if="!equip_edit">{{equipInfo.manufacturer}}</span>
                <span class="item-entry" v-else><input type="text" v-model="manufacturer"></span>
            </div>
            <div class="content-item">
                <span class="item-header">Комплектация лифта</span>
                <span class="item-entry" v-if="!equip_edit">{{equipInfo.lift_equipment}}</span>
                <span class="item-entry" v-else><input type="text" v-model="lift_equipment"></span>
            </div>
            <div class="content-item">
                <span class="item-header">Вид лифта</span>
                <span class="item-entry" v-if="!equip_edit">{{equipInfo.lift_type}}</span>
                <span class="item-entry" v-else><input type="text" v-model="lift_type"></span>
            </div>
            <div class="content-item">
                <span class="item-header">Скорость движения</span>
                <span class="item-entry" v-if="!equip_edit">{{equipInfo.speed}}</span>
                <span class="item-entry" v-else><input type="text" v-model="speed"></span>
            </div>
            <div class="content-item">
                <span class="item-header">Грузоподъемность</span>
                <span class="item-entry" v-if="!equip_edit">{{equipInfo.carrying_capacity}}</span>
                <span class="item-entry" v-else><input type="text" v-model="carrying_capacity"></span>
            </div>
            <div class="content-item">
                <span class="item-header">Максимальная высота подъема кабины</span>
                <span class="item-entry" v-if="!equip_edit">{{equipInfo.max_height}}</span>
                <span class="item-entry" v-else><input type="text" v-model="max_height"></span>
            </div>
            <div class="content-item">
                <span class="item-header">Количество остановок</span>
                <span class="item-entry" v-if="!equip_edit">{{equipInfo.stops}}</span>
                <span class="item-entry" v-else><input type="text" v-model="stops"></span>
            </div>
            <div class="content-item">
                <span class="item-header">Площадь пола кабины</span>
                <span class="item-entry" v-if="!equip_edit">{{equipInfo.square}}</span>
                <span class="item-entry" v-else><input type="text" v-model="square"></span>
            </div>
            <div class="content-item">
                <span class="item-header">Вместимость кабины</span>
                <span class="item-entry" v-if="!equip_edit">{{equipInfo.cabin_capacity}}</span>
                <span class="item-entry" v-else><input type="text" v-model="cabin_capacity" @blur="patchEquip()"></span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'EquipmentInfo',
    data(){
        return{
            equip_edit: false,
            manufacturer: '',
            lift_equipment: '', 
            lift_type: '',
            speed: '',
            carrying_capacity: '',
            max_height: '',
            stops: '',
            square: '',
            cabin_capacity: ''
        }
    },
    computed:{
        equipInfo(){
            return this.$store.getters.equipInfo(parseInt(this.$route.params.id))
        }
    },
    methods:{
        patchEquip(){
            this.$store.dispatch('patchEquip', {
                id: this.equipInfo.id,
                manufacturer: this.manufacturer,
                lift_equipment: this.lift_equipment, 
                lift_type: this.lift_type,
                speed: this.speed,
                carrying_capacity: this.carrying_capacity,
                max_height: this.max_height,
                stops: this.stops,
                square: this.square,
                cabin_capacity: this.cabin_capacity
            })
            .then(() => {
                this.$router.push('/equipment')
            })
            this.equip_edit = false
        },
        deleteEquip(){
            this.$store.dispatch('deleteEquip', {
                id: this.equipInfo.id
            })
            .then(() => {
                this.$router.push('/equipment')
            })
        }
    }
}
</script>

<style lang="scss">
@import "../../assets/mixin/_mixin.scss";

.equipmentInfo {
    @include pageContent();
    .equipmentInfo-header {
        @include infoHeader();
    }
    .equipmentInfo-content {
        height: calc(100% - 70px);
        width: 100%;
        overflow-y: auto;
        @include tableContract();
    }
}
</style>