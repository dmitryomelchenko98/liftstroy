<template>
    <div class="equipmentNew">
        <div class="equipmentNew-header">
            <router-link class="header-back" tag="div" :to="'/equipment'">
                <img src="../../assets/image/back.svg" alt="">
                <span>ЗАДАЧИ</span>
            </router-link>
            <div class="header-back" @click="addEquip()">
                <span>ГОТОВО</span>
            </div>
        </div>
        <div class="equipmentNew-content">
            <div class="content-item">
                <span class="item-header">Номер</span>
                <span class="item-entry"><input type="text" name="" id="" placeholder="Введите номер производителя..." v-model="number"></span>
            </div>
            <div class="content-item">
                <span class="item-header">Дата</span>
                <span class="item-entry"><input type="date" name="" id="" placeholder="Введите дату производителя..." v-model="date"></span>
            </div>
            <div class="content-item">
                <span class="item-header">Производитель</span>
                <span class="item-entry"><input type="text" name="" id="" placeholder="Введите наименование производителя..." v-model="manufacturer"></span>
            </div>
            <div class="content-item">
                <span class="item-header">Комплектация лифта</span>
                <span class="item-entry"><input type="text" name="" id="" placeholder="Введите комплектацию лифта..." v-model="lift_equipment"></span>
            </div>
            <div class="content-item">
                <span class="item-header">Вид лифта</span>
                <span class="item-entry"><input type="text" name="" id="" placeholder="Введите вид лифта..." v-model="lift_type"></span>
            </div>
            <div class="content-item">
                <span class="item-header">Скорость движения</span>
                <span class="item-entry"><input type="text" name="" id="" placeholder="Введите скорость движения..." v-model="speed"></span>
            </div>
            <div class="content-item">
                <span class="item-header">Грузоподъемность</span>
                <span class="item-entry"><input type="text" name="" id="" placeholder="Введите грузоподъемность..." v-model="carrying_capacity"></span>
            </div>
            <div class="content-item">
                <span class="item-header">Максимальная высота подъема кабины</span>
                <span class="item-entry"><input type="text" name="" id="" placeholder="Введите макс. высоту подъема кабины..." v-model="max_height"></span>
            </div>
            <div class="content-item">
                <span class="item-header">Количество остановок</span>
                <span class="item-entry"><input type="text" name="" id="" placeholder="Введите количество остановок..." v-model="stops"></span>
            </div>
            <div class="content-item">
                <span class="item-header">Площадь пола кабины</span>
                <span class="item-entry"><input type="text" name="" id="" placeholder="Введите площадь пола кабины..." v-model="square"></span>
            </div>
            <div class="content-item">
                <span class="item-header">Вместимость кабины</span>
                <span class="item-entry"><input type="text" name="" id="" placeholder="Введите вместимость кабины..." v-model="cabin_capacity"></span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'EquipmentNew',
    data(){
        return{
            number: '',
            date: '',
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
    methods: {
        addEquip(){
            this.$store.dispatch('addEquip', {
                number: this.number,
                date: this.date,
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
            .then(() =>{
                this.$router.push('/equipment')
            })
        }
    }
}
</script>

<style lang="scss">
@import "../../assets/mixin/_mixin.scss";

.equipmentNew {
    @include pageContent();
    .equipmentNew-header {
        @include newHeader();
    }
    .equipmentNew-content {
        @include newContent();
    }
}
</style>