<template>
    <div class="insuranceNew">
        <div class="insuranceNew-header">
            <div class="header-back" @click="$router.push('/insurance')">
                <img src="../../assets/image/back.svg" alt="">
                <span>СТРАХОВКИ</span>
            </div>
            <div class="header-headline">
                <span>СТРАХОВКА № 0000</span>
            </div>
            <div class="header-button" @click="addIns()">
                <span>ГОТОВО</span>
            </div>
        </div>
        <div class="insuranceNew-content">
            <div class="content-item">
                <span class="item-header">Номер</span>
                <span class="item-entry"><input type="text" name="" id="" placeholder="Введите номер..." v-model="number"></span>
            </div>
            <div class="content-item">
                <span class="item-header">Дата</span>
                <span class="item-entry"><input type="date" name="" id="" placeholder="Введите дату ..." v-model="date"></span>
            </div>
            <div class="content-item">
                <span class="item-header">Ответственный за инженерные работы</span>
                <span class="item-entry"><input type="text" name="" id="" placeholder="Введите ФИО ответственного..." v-model="engineering_responsible"></span>
            </div>
            <div class="content-item">
                <span class="item-header">Ответственный за технические работы</span>
                <span class="item-entry"><input type="text" name="" id="" placeholder="Введите ФИО ответственного..." v-model="technical_responsible"></span>
            </div>
            <div class="content-item">
                <span class="item-header">Ответственный за поставку оборудования</span>
                <span class="item-entry"><input type="text" name="" id="" placeholder="Введите ФИО ответственного..." v-model="equipment_responsible"></span>
            </div>
            <div class="content-item">
                <span class="item-header">Ответственный за пуско-наладке оборудования</span>
                <span class="item-entry"><input type="text" name="" id="" placeholder="Введите ФИО ответственного..." v-model="launch_setup_responsible"></span>
            </div>
            <div class="content-item">
                <span class="item-header">ГОСТы</span>
                <span class="item-entry"><input type="text" name="" id="" placeholder="ГОСТы..." v-model="gosts"></span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'InsuranceNew',
    data(){
        return{
            number: '',
            date: '',
            engineering_responsible: '',
            technical_responsible: '',
            equipment_responsible: '',
            launch_setup_responsible: '',
            gosts: ''
        }
    },
    methods:{
        addIns(){
            this.$store.dispatch('addIns', {
                number: this.number,
                date: this.date,
                engineering_responsible: this.engineering_responsible,
                technical_responsible: this.technical_responsible,
                equipment_responsible: this.equipment_responsible,
                launch_setup_responsible: this.launch_setup_responsible,
                gosts: this.gosts
            })
            .then(() =>{
                this.$router.push('/insurance')
            })
        }
    }
}
</script>

<style lang="scss">
@import "../../assets/mixin/_mixin.scss";

.insuranceNew {
    @include pageContent();
    .insuranceNew-header {
        @include newHeader();
    }
    .insuranceNew-content {
        @include newContent();
    }
}
</style>