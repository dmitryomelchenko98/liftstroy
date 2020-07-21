<template>
    <div class="body-item" @click="$router.push(`/insurance/${insurance.id}/`)">
        <span class="name">Страховка №{{insurance.number}}</span>
        <span class="date">{{insurance.date}}</span>
        <img src="../assets/image/cross.svg" alt="" class="delete" @click="deleteIns()">
    </div>
</template>

<script>
export default {
    name: 'InsuranceItem',
    props: ['insurance'],
    methods:{
        deleteIns(){
            this.$store.dispatch('deleteIns', {
                id: this.insurance.id
            })
            .then(() => {
                this.$emit('axiosIns')
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