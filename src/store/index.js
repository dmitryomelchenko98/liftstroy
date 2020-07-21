import Vue from 'vue'
import Vuex from 'vuex'

//modules
import user from './modules/user.js'
import customers from './modules/customers.js'
import equipment from './modules/equipment.js'
import insurance from './modules/insurance.js'
import task from './modules/task.js'
import tender from './modules/tender.js'
import contract from './modules/contract.js'
import auth from './modules/auth.js'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    user,customers,equipment,insurance,task,tender,contract,auth
  }
})
