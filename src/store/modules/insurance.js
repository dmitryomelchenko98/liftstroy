import {http} from '../../axios-config.js'


export default {
    state:{
        ins: []
    },
    mutations:{
        updateIns(state, ins){
            state.ins = ins
        }
    },
    actions:{
        addIns(ctx,crenditials){
            return new Promise((resolve, reject) => {
                http.post('/insurances/', JSON.stringify(crenditials))
                .then((res) => {
                    resolve(res)
                })
                .catch((err) => {
                    reject(err)
                })
            })
        },
        axiosIns(ctx){
            return new Promise((resolve, reject) => {
                http.get('/insurances/')
                .then((res) => {
                    ctx.commit('updateIns', res.data)
                    resolve(res)
                })
                .catch((err) => {
                    reject(err)
                })
            })
        },
        deleteIns(ctx,crenditials){
            return new Promise((resolve, reject) => {
                http.delete(`/insurances/${crenditials.id}/`,)
                .then((res) => {
                    resolve(res)
                })
                .catch((err) => {
                    reject(err)
                })
            })
        },
        patchIns(ctx, crenditials){
            return new Promise((resolve, reject) => {
                http.patch(`/insurances/${crenditials.id}/`, JSON.stringify(crenditials))
            })
            .then((res) => {
                resolve(res)
            })
            .catch((err) => {
                reject(err)
            })
        }
    },
    getters:{
        ins(state){
            return state.ins
        },
        insInfo: state => id => {
            return state.ins.find(ins => ins.id === id)
        }
    }
}