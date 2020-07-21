import {http} from '../../axios-config.js'

export default {
    state:{
        user: []
    },
    mutations:{
        updateUser(state, user){
            state.user = user
        }
    },
    actions:{
        async axiosUser(context){
            const user = await http.get('/users/' + localStorage.getItem('id') + '/')
            context.commit('updateUser', user.data)
        },
        userPut(ctx, crenditials){
            return new Promise((resolve,reject) => {
                const user = {
                    last_name: crenditials.last_name,
                    first_name: crenditials.first_name,
                    patronymic: crenditials.patronymic,
                    email: crenditials.email
                }
                const a = {user}
                let json = JSON.stringify(a)
                http.put('/users/' + localStorage.getItem('id') + '/', json)
                .then(res=> {
                    resolve(res)
                })
                .catch(err => {
                    reject(err)
                })
            })
        }
    },
    getters:{
        userData(state){
            return state.user
        },
        setDepart(state){
            const position = {
                'LS' : 'Отдел логистики',
                'TL' : 'Технический отдел',
                'ZO' : 'Пользователь',
                'DT' : 'Департамент разработки'
            }
            return position[state.user.departament] || 'none'
        }
    }
}