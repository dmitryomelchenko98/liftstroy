<template>
    <div class="body-item" @click="$router.push(`/task/${task.id}/`)">
        <img src="../assets/image/checkGreen.svg" alt="" class="check">
        <span class="name">{{task.name}}</span>
        <span class="date">{{task.date}}</span>
        <img src="../assets/image/cross.svg" alt="" class="delete" @click="deleteTask()">
    </div>
</template>

<script>
export default {
    name: 'TaskItem',
    props: ['task'],
    methods:{
        deleteTask(){
            this.$store.dispatch('deleteTask',{
                id: this.task.id
            })
            .then(() => {
                this.$emit('axiosTask')
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