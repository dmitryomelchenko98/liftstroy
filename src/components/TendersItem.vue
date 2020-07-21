<template>
    <div class="body-item"  @click="$router.push(`/tenders/${tender.id}/`)">
        <span class="name">Тендер №{{tender.number}}</span>
        <span class="date">{{tender.date}}</span>
        <img src="../assets/image/cross.svg" alt="" class="delete" @click="deleteTender()">
    </div>
</template>

<script>
export default {
    name: 'TendersItem',
    props: ['tender'],
    methods:{
        deleteTender(){
            this.$store.dispatch('deleteTender', {
                id: this.tender.id
            })
            .then(() => {
                this.$emit('axiosTenders')
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