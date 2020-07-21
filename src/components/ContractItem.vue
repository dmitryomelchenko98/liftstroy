<template>
    <div class="body-contract">
        <span class="name" @click="$router.push(`/contract/${contract.id}/`)">Договор № {{contract.number}} </span>
        <span class="attachment">Приложение</span>
        <span class="date">{{contract.date}}</span>
        <img src="../assets/image/cross.svg" alt="" class="delete" @click="deleteContacts()">
    </div>
</template>

<script>
export default {
    name: 'ContractItem',
    props:['contract'],
    methods:{
        deleteContacts(){
            this.$store.dispatch('deleteContract', {
                id: this.contract.id
            })
            .then(() => {
                this.$emit('axiosContract')
            })
        }
    }
}
</script>

<style lang="scss">
@import "../assets/mixin/_mixin.scss";

.body-contract {
    width: 100%;
    height: 30px;
    margin-bottom: 30px;
    border-bottom: 1px solid $colorGreyD;
    align-items: center;
    display: grid;
    grid-template-columns: 60px minmax(200px, calc(50% - 60px)) minmax(100px, 30%) minmax(100px, calc(20% - 60px)) 60px;
    img {
        margin: 0 auto;
    }
    .date {
        text-align: center;
    }
    .attachment {
        text-align: center;
        color: $colorTur;
        cursor: pointer;
    }
    .name {
        cursor: pointer;
        font-weight: bolder;
    }
    .delete {
        cursor: pointer;
    }
}
</style>