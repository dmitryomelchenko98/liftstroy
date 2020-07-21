<template>
    <div class="equipmentList">
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
            <EquipmentItem @axiosEquip="axiosEquip()" v-for="equip in equips" :key="equip.id" :equip="equip"/>
        </div>
        <router-link class="table-footer" tag="div" :to="'/equipment/new_equipment'">
            <img src="../../assets/image/plus.svg" alt="" class="plus">
        </router-link>
      </div>
    </div>
</template>

<script>
import EquipmentItem from '../../components/EquipmentItem.vue'

export default {
    name: 'EquipmentList',
    components: {
        EquipmentItem
    },
    data(){
        return{
            search: ''
        }
    },
    computed:{
        equips(){
            return this.$store.getters.equip.filter(equip => {
                return equip.lift_equipment.toLowerCase().includes(this.search.toLowerCase())
            })
        }
    },
    methods:{
        axiosEquip(){
            this.$store.dispatch('axiosEquip')
        },
    },
    mounted(){
        this.axiosEquip()
    }
}
</script>

<style lang="scss">
@import "../../assets/mixin/_mixin.scss";

.equipmentList {
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