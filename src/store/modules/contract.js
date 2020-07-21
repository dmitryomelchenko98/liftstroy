import {http} from '../../axios-config.js'

export default {
    state:{
        contracts: []
    },
    mutations:{
        updateContract(state, contracts){
            state.contracts = contracts
        }
    },
    actions:{
        addContract(ctx,crenditials){
            return new Promise((resolve, reject) => {
                http.post('/contracts/', JSON.stringify(crenditials))
                .then((res) => {
                    resolve(res)
                })
                .catch((err) => {
                    reject(err)
                })
            })
        },
        axiosContract(ctx){
            return new Promise((resolve, reject) => {
                http.get('/contracts/')
                .then((res) => {
                    ctx.commit('updateContract', res.data)
                    resolve(res)
                })
                .catch((err) => {
                    reject(err)
                })
            })
        },
        deleteContract(ctx,crenditials){
            return new Promise((resolve, reject) => {
                http.delete(`/contracts/${crenditials.id}/`,)
                .then((res) => {
                    resolve(res)
                })
                .catch((err) => {
                    reject(err)
                })
            })
        },
        addDoc(ctx, crenditials) {
            return new Promise((resolve, reject) => {
                console.log(crenditials)
                http.patch(`/contracts/${crenditials.id}/`, {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                        'Authorization': 'Token ' + `${localStorage.getItem('authorization_token')}`,
                        'Content-Disposition': 'attachment'
                    }
                }, JSON.stringify(crenditials))
                .then((res) => {
                    resolve(res)
                })
                .catch((err) => {
                    reject(err)
                })
            })
        },
        patchCon(ctx,crenditials){
            return new Promise((resolve, reject) => {
                http.patch(`/tasks/${crenditials.id}/`, JSON.stringify(crenditials))
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
        contracts(state){
            return state.contracts
        },
        contInfo: state => id => {
            return state.contracts.find(contracts => contracts.id === id)
        }
    }
}