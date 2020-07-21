<template>
    <div class="customersList">
      <div class="content-header">
          <div class="header-search">
              <img src="../../assets/image/search.svg" alt="">
              <input type="text" name="" id="" placeholder="Search..." v-model="search">
          </div>
      </div>
      <div class="content-table">
        <div class="table-headline">
            <span class="name">ИМЯ</span>
            <span class="date">ДАТА</span>
        </div>
        <div class="table-body">
            <CustomersItem @axiosCust="axiosCust()" v-for="customer in customers" :key="customer.id" :customer="customer"/>
        </div>
        <router-link class="table-footer" tag="div" :to="'customers/new_customers'">
            <img src="../../assets/image/plus.svg" alt="" class="plus">
        </router-link>
      </div>
    </div>
</template>

<script>
import CustomersItem from '../../components/CustomersItem.vue'

export default {
    name: 'CustomersList',
    components: {
        CustomersItem
    },
    data() {
        return {
            search: ''
        }
    },
    computed:{
        customers(){
            return this.$store.getters.cust.filter(customers => {
                return customers.name.toLowerCase().includes(this.search.toLowerCase())
            })
        }
    },
    methods:{
        axiosCust(){
            this.$store.dispatch('axiosCust')
        }
    },
        mounted(){
            this.axiosCust()
    }
}
</script>

<style lang="scss">
@import "../../assets/mixin/_mixin.scss";

.customersList {
    @include pageContent();
    .content-header {
        display: grid;
        grid-template-columns: 50% 50%;
    }
    .content-table {
        .table-headline {
            display: grid;
            grid-template-columns: 60px minmax(200px, calc(80% - 60px)) minmax(100px, calc(20% - 60px)) 60px;
            .name {
                grid-column: 2/3;
            }
            .date {
                grid-column: 3/4;
                text-align: center;
            }
        }
    }
}
</style>