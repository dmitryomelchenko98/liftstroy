<template>
    <div class="task-content">
      <div class="content-header">
          <div class="header-search">
              <img src="../../assets/image/search.svg" alt="">
              <input type="text" name="" id="" placeholder="Search..." v-model="search">
          </div>
      </div>
      <div class="content-table">
        <div class="table-headline">
            <span class="name">НАЗВАНИЕ</span>
            <span class="date">ДАТА</span>
        </div>
        <div class="table-body">
            <TaskItem @axiosTask="axiosTask()" @click="push_info()" v-for="task in tasks" :key="task.id" :task="task"/>
        </div>
        <router-link class="table-footer" tag="div" :to="'task/new_task'">
            <img src="../../assets/image/plus.svg" alt="" class="plus">
        </router-link>
      </div>
    </div>
</template>

<script>
import TaskItem from '../../components/TaskItem.vue'

export default {
    name: 'TaskList',
    components: {
        TaskItem
    },
    data(){
        return{
            search: ''
        }
    },
    computed:{
        tasks(){
            return this.$store.getters.tasks.filter(task => {
                return task.name.toLowerCase().includes(this.search.toLowerCase())
            })
        }
    },
    methods:{
        axiosTask(){
            this.$store.dispatch('axiosTask')
        },
    },
    mounted(){
        this.axiosTask()
    }
}

</script>

<style lang="scss">
@import "../../assets/mixin/_mixin.scss";

.task-content {
  @include pageContent();
  .content-header {
      display: grid;
      grid-template-columns: 50% 50%;
      .content-sort {
          @include flex();
          justify-content: flex-end;
          cursor: pointer;
          img {
              margin-left: 10px;
          }
          .sort-content {
              position: absolute;
              @include flex();
              flex-direction: column;
              align-items: flex-start;
              height: 240px;
              width: 200px;
              top: 275px;
              right: 80px;
              background: $colorWhite;
              border: 1px solid #D4D4D4;
              box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.2);
              span {
                  height: 60px;
                  width: 170px;
                  border-bottom: 1px solid $colorGreyD;
                  padding-left: 30px;
                  padding-top: 20px;
              }
              span:hover {
                  color: $colorTur;
              }
          }
      }
  }
  .content-table {
      .table-headline {
          display: grid;
          grid-template-columns: 40px minmax(200px, calc(80% - 40px)) minmax(100px, calc(20% - 40px)) 40px;
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