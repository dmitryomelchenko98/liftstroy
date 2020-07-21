<template>
    <div class="tendersList">
      <div class="content-header">
          <div class="header-search">
              <img src="../../assets/image/search.svg" alt="">
              <input type="text" name="" id="" placeholder="Search...">
          </div>
      </div>
      <div class="content-table">
        <div class="table-headline">
            <span class="name">ИМЯ</span>
            <span class="date">ДАТА</span>
        </div>
        <div class="table-body">
            <TendersItem @axiosTenders="axiosTenders()" v-for="tender in tenders" :key="tender.id" :tender="tender" />
        </div>
        <router-link class="table-footer" tag="div" :to="'/tenders/new_tenders'">
            <img src="../../assets/image/plus.svg" alt="" class="plus">
        </router-link>
      </div>
    </div>
</template>

<script>
import TendersItem from '../../components/TendersItem.vue'

export default {
  name: 'TendersList',
  components: {
    TendersItem
  },
  computed:{
      tenders(){
          return this.$store.getters.tenders
      }
  },
  methods:{
      axiosTenders(){
          this.$store.dispatch('axiosTenders')
      }
  },
  mounted(){
      this.axiosTenders()
  }
}
</script>

<style lang="scss">
@import "../../assets/mixin/_mixin.scss";

.tendersList {
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