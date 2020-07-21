import {http} from '../../axios-config.js'

export default {
    state: {
        token: localStorage.getItem('authorization_token') || null,
        id: localStorage.getItem('id') || null,
        departament: localStorage.getItem('departament') || null
    },
    mutations: {
        sing_in(state, token, id, departament){
            state.token = token;
            state.id = id;
            state.departament = departament;
        },
        sign_out(state){
            state.token = null;
            state.id = null;
        }
    },
    actions:{
        async sing_in(context, credentials){
            return new Promise((resolve,reject) => {
              http.post('/auth/signin/',{
                email: credentials.email,
                password: credentials.password
              })
              .then(res => {
                const token = res.data.authorization_token;
                const id = res.data.id;
                const departament = res.data.departament;
                localStorage.setItem('authorization_token', token);
                localStorage.setItem('departament', departament);
                localStorage.setItem('id', id)
                context.commit('sing_in', { token, id, departament })
                resolve(res)
              })
              .catch(error => {
                reject(error)
              })
            })
        },
        sign_up(context,credentials){
            return new Promise((resolve, reject) => {
              http.post('/auth/signup/', {
                last_name: credentials.last_name,
                first_name: credentials.first_name,
                patronymic: credentials.patronymic,
                email: credentials.email,
                password: credentials.password
              })
              .then(res=>{
                resolve(res)
              })
              .catch(err=>{
                reject(err)
              })
            })
        },
        sign_out(context){
            localStorage.clear();
            context.commit('sign_out')
        }
    },
    getters: {
      isLogged(state){
        return state.token
      } 
    }
}