<template>
    <div class="taskInfo">
        <div class="taskInfo-header">
            <div class="header-back" @click="$router.push(`/task`)">
                <img src="../../assets/image/back.svg" alt="">
                <span>ЗАДАЧИ</span>
            </div>
            <div class="header-options">
                <img src="../../assets/image/change.svg" alt="" class="change" @click="taskEdit = !taskEdit">
                <img src="../../assets/image/delete.svg" alt="" class="delete" @click="deleteTask()">
            </div>
        </div>
        <span class="taskInfo-date" v-if="!taskEdit">{{taskInfo.date}}</span>
        <span class="taskInfo-date" v-else><input type="date" v-model="date"></span>
        <p class="taskInfo-text" v-if="!taskEdit">{{taskInfo.name}}</p>
        <p class="taskInfo-text" v-else><input type="text" v-model="name" @change="patchTask()"></p>
    </div>
</template>
<script>
export default {
    name: 'TaskInfo',
    data(){
        return {
            taskEdit: false,
            date: '',
            name: ''
        }
    },
    computed:{
        taskInfo(){
            return this.$store.getters.taskInfo(parseInt(this.$route.params.id))
        }
    },
    methods: {
        patchTask(){
            this.$store.dispatch('patchTask', {
                id: this.taskInfo.id,
                date: this.date,
                name: this.name
            })
            .then(() => {
                this.taskInfo.date = this.date,
                this.taskInfo.name = this.name
            })
            this.taskEdit = false
        },
        deleteTask(){
            this.$store.dispatch('deleteTask', {
                id: this.taskInfo.id
            })
            .then(() => {
                this.$router.push('/task')
            })
        }
    }
}
</script>

<style lang="scss">
@import "../../assets/mixin/_mixin.scss";

.taskInfo {
    @include pageContent();
    .taskInfo-header {
        height: 40px;
        margin-bottom: 20px;
        @include flex();
        justify-content: space-between;
        .header-back {
            @include flex();
            cursor: pointer;
            img {
                margin-right: 10px;
            }
            span {
                font-weight: bold;
            }
        }
        .header-options {
            cursor: pointer;
            .change {
                margin-right: 15px;
            }

        }
    }

}
</style>