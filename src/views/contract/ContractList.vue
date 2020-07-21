<template>
    <div class="contractList">
        <div class="content-header">
            <div class="header-search">
                <img src="../../assets/image/search.svg" alt="">
                <input type="text" name="" id="" placeholder="Search...">
            </div>
        </div>
        <div class="content-table">
            <div class="table-headline">
                <span class="name">ИМЯ</span>
                <span class="attachment">ПРИЛОЖЕНИЕ</span>
                <span class="date">ДАТА</span>
            </div>
            <div class="table-body">
                <ContractItem @axiosContract="axiosContract" v-for="(contract,index) in contracts" :key="index" :contract="contract"/>
            </div>
            <router-link class="table-footer" tag="div" to="contract/new_contract">
                <img src="../../assets/image/plus.svg" alt="" class="plus">
            </router-link>
        </div>
    </div>
</template>

<script>
import ContractItem from '../../components/ContractItem.vue'

export default {
    name: 'ContractList',
    components: {
        ContractItem
    },
    computed:{
        contracts(){
            return this.$store.getters.contracts
        }
    },
    methods:{
        axiosContract(){
            this.$store.dispatch('axiosContract')
        }
    },
    async mounted(){
        await this.$store.dispatch('axiosContract')
    }
}
</script>

<style lang="scss">
@import "../../assets/mixin/_mixin.scss";

.contractList {
    @include pageContent();
    .content-table {
      .table-headline {
          display: grid;
          grid-template-columns: 60px minmax(200px, calc(50% - 60px)) minmax(100px, 30%) minmax(100px, calc(20% - 60px)) 60px;
          .name {
              grid-column: 2/3;
          }
          .attachment {
              grid-column: 3/4;
              text-align: center;
          }
          .date {
              grid-column: 4/5;
              text-align: center;
          }
      }
  }
}
</style>