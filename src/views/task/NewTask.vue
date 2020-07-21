<template>
    <div class="newTask">
        <div class="newTask-header">
            <router-link class="header-back" tag="div" :to="'/task'">
                <img src="../../assets/image/back.svg" alt="">
                <span>ЗАДАЧИ</span>
            </router-link>
            <div class="header-button" @click="addTask()">
                <span>ГОТОВО</span>
            </div>
        </div>
        <div class="newTask-date">
            <input type="date" name="date" id="date" v-model="date">
        </div>
        <div class="newTask-info">
            <textarea name="" id="" placeholder="Введите текст задачи..." v-model="name"></textarea>
        </div>
    </div>
</template>

<script>
export default {
    name: 'NewTask',
    data(){
        return{
            date: '',
            name: ''
        }
    },
    methods:{
        async addTask(){
            await this.$store.dispatch('addTask',{
                date: this.date,
                name: this.name
            })
            .then(() =>{
                this.$router.push('/task')
            })
        }
    }
}
</script>

<style lang="scss">
@import "../../assets/mixin/_mixin.scss";

.newTask {
    @include pageContent();
    .newTask-header {
        @include newHeader();
    }
    .newTask-date {
        height: 30px;
        margin-bottom: 10px;
        input {
            font-family: inherit;
            border: none;
            border-bottom: 1px solid $colorBlack;
            height: 30px;
            font-size: 18px;
        }
    }
    .newTask-info {
        height: calc(100% - 120px);
        textarea {
            //border: none;
            outline: none;
            width: calc(100% - 20px);
            height: calc(100% - 20px);
            font-family: inherit;
            font-size: 18px;
            resize: none;
            padding: 10px;
        }
    }
}
</style>