import {http} from '../../axios-config.js'


export default {
    state:{
        equip: []
    },
    mutations:{
        updateEquip(state, equip){
            state.equip = equip
        }
    },
    actions:{
        addEquip(ctx,crenditials){
            return new Promise((resolve, reject) => {
                http.post('/equipments/', JSON.stringify(crenditials))
                .then((res) => {
                    resolve(res)
                })
                .catch((err) => {
                    reject(err)
                })
            })
        },
        axiosEquip(ctx){
            return new Promise((resolve, reject) => {
                http.get('/equipments/')
                .then((res) => {
                    ctx.commit('updateEquip', res.data)
                    resolve(res)
                })
                .catch((err) => {
                    reject(err)
                })
            })
        },
        deleteEquip(ctx,crenditials){
            return new Promise((resolve, reject) => {
                http.delete(`/equipments/${crenditials.id}/`,)
                .then((res) => {
                    resolve(res)
                })
                .catch((err) => {
                    reject(err)
                })
            })
        },
        patchEquip(ctx, crenditials){
            return new Promise((resolve, reject) => {
                http.patch(`/equipments/${crenditials.id}/`, JSON.stringify(crenditials))
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
        equip(state){
            return state.equip
        },
        equipInfo: state => id => {
            return state.equip.find(ins => ins.id === id)
        }
    }
}