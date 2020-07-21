import {http} from '../../axios-config.js'


export default {
    state:{
        customers: []
    },
    mutations:{
        updateCust(state, customers){
            state.customers = customers
        }
    },
    actions:{
        addCust(ctx,crenditials){
            return new Promise((resolve, reject) => {
                http.post('/clients/', JSON.stringify(crenditials))
                .then((res) => {
                    resolve(res)
                })
                .catch((err) => {
                    reject(err)
                })
            })
        },
        axiosCust(ctx){
            return new Promise((resolve, reject) => {
                http.get('/clients/')
                .then((res) => {
                    ctx.commit('updateCust', res.data)
                    resolve(res)
                })
                .catch((err) => {
                    reject(err)
                })
            })
        },
        deleteCust(ctx,crenditials){
            return new Promise((resolve, reject) => {
                http.delete(`/clients/${crenditials.id}/`,)
                .then((res) => {
                    resolve(res)
                })
                .catch((err) => {
                    reject(err)
                })
            })
        },
        patchCust(ctx, crenditials){
            return new Promise((resolve, reject) => {
                http.patch(`/clients/${crenditials.id}/`, JSON.stringify(crenditials))
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
        cust(state){
            return state.customers
        },
        custInfo: state => id => {
            return state.customers.find(customers => customers.id === id)
        }
    }
}