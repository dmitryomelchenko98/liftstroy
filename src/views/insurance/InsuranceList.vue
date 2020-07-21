<template>
    <div class="insuranceList">
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
            <InsuranceItem @axiosIns="axiosIns()" v-for="insurance in ins" :key="insurance.id" :insurance="insurance"/>
        </div>
        <router-link class="table-footer" tag="div" :to="'/insurance/new_insurance'">
            <img src="../../assets/image/plus.svg" alt="" class="plus">
        </router-link>
      </div>
    </div>
</template>

<script>
import InsuranceItem from '../../components/InsuranceItem.vue'

export default {
    name: 'InsuranceList',
    components: {
        InsuranceItem
    },
    data(){
        return{
            search: ''
        }
    },
    computed:{
        ins(){
            return this.$store.getters.ins.filter(ins => {
                return ins.technical_responsible.toLowerCase().includes(this.search.toLowerCase())
            })
        }
    },
    methods:{
        axiosIns(){
            this.$store.dispatch('axiosIns')
        },
    },
    mounted(){
        this.axiosIns()
    }
}
</script>

<style lang="scss">
@import "../../assets/mixin/_mixin.scss";

.insuranceList {
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