import {http} from '../../axios-config.js'


export default {
    state:{
        tenders: []
    },
    mutations:{
        updateTenders(state, tenders){
            state.tenders = tenders
        }
    },
    actions:{
        addTender(ctx,crenditials){
            return new Promise((resolve, reject) => {
                http.post('/tenders/', JSON.stringify(crenditials))
                .then((res) => {
                    resolve(res)
                })
                .catch((err) => {
                    reject(err)
                })
            })
        },
        axiosTenders(ctx){
            return new Promise((resolve, reject) => {
                http.get('/tenders/')
                .then((res) => {
                    ctx.commit('updateTenders', res.data)
                    resolve(res)
                })
                .catch((err) => {
                    reject(err)
                })
            })
        },
        deleteTender(ctx,crenditials){
            return new Promise((resolve, reject) => {
                http.delete(`/tenders/${crenditials.id}/`,)
                .then((res) => {
                    resolve(res)
                })
                .catch((err) => {
                    reject(err)
                })
            })
        },
        patchTender(ctx, crenditials){
            return new Promise((resolve, reject) => {
                http.patch(`/tenders/${crenditials.id}/`, JSON.stringify(crenditials))
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
        tenders(state){
            return state.tenders
        },
        tenderInfo: state => id => {
            return state.tenders.find(tender => tender.id == id)
        }
    }
}