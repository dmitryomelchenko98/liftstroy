<template>
    <div class="body-item" @click="$router.push(`/equipment/${equip.id}/`)">
        <span class="name">Оборудование к д. №{{equip.number}}</span>
        <span class="date">{{equip.date}}</span>
        <img src="../assets/image/cross.svg" alt="" class="delete" @click="deleteEquip()">
    </div>
</template>

<script>
export default {
    name: 'EquipmentItem',
    props: ['equip'],
    methods:{
        deleteEquip(){
            this.$store.dispatch('deleteEquip', {
                id: this.equip.id
            })
            .then(() => {
                this.$emit('axiosEquip')
            })
        }
    }
}
</script>

<style lang="scss">
@import "../assets/mixin/_mixin.scss";

.body-item {
    @include tableList();
}
</style>