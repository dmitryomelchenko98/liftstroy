import {http} from '../../axios-config.js'


export default {
    state:{
        tasks: []
    },
    mutations:{
        updateTask(state, task){
            state.tasks = task
        }
    },
    actions:{
        addTask(ctx,crenditials){
            return new Promise((resolve, reject) => {
                http.post('/tasks/', JSON.stringify(crenditials))
                .then((res) => {
                    resolve(res)
                })
                .catch((err) => {
                    reject(err)
                })
            })
        },
        axiosTask(ctx){
            return new Promise((resolve, reject) => {
                http.get('/tasks/')
                .then((res) => {
                    ctx.commit('updateTask', res.data)
                    resolve(res)
                })
                .catch((err) => {
                    reject(err)
                })
            })
        },
        deleteTask(ctx,crenditials){
            return new Promise((resolve, reject) => {
                http.delete(`/tasks/${crenditials.id}/`,)
                .then((res) => {
                    resolve(res)
                })
                .catch((err) => {
                    reject(err)
                })
            })
        },
        patchTask(ctx,crenditials){
            return new Promise((resolve, reject) => {
                http.patch(`/tasks/${crenditials.id}/`, JSON.stringify(crenditials))
            })
            .then((res) => {
                this.$router.push('/contract')
                ctx.commit('updateTask', res.data)
                resolve(res)
            })
            .catch((err) => {
                reject(err)
            })
        }
    },
    getters:{
        tasks(state){
            return state.tasks
        },
        taskInfo: state => id => {
            return state.tasks.find(task => task.id === id)
        }
    }
}