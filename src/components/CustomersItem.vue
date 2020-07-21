<template>
    <div class="body-item" @click="$router.push(`/customers/${customer.id}/`)">
        <span class="name">{{ customer.name }}</span>
        <span class="date">{{ customer.date }}</span>
        <img src="../assets/image/cross.svg" alt="" class="delete" @click="deleteCust()">
    </div>
</template>

<script>
export default {
    name: 'CustomersItem',
    props: ['customer'],
    methods:{
        deleteCust(){
            this.$store.dispatch('deleteCust',{
                id: this.customer.id
            })
            .then(() => {
                this.$emit('axiosCust')
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