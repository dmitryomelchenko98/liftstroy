import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/login',
    name: 'Login',
    meta: {
      layout : 'login'
    },
    component: () => import('../views/Login.vue')
  },
  {
    path: '/',
    name: 'Main',
    meta: {
      layout : 'main'
    },
    component: () => import('../views/Task.vue')
  },
  {
    path: '/task',
    name: 'Task',
    meta: { layout : 'main' },
    component: () => import('../views/Task.vue'),
    children:[
      {
        path: '/',
        meta: { layout : 'main' },
        component: () => import('../views/task/TaskList.vue')
      },
      {
        path: 'new_task',
        meta: { layout : 'main' },
        component: () => import('../views/task/NewTask.vue')
      },
      {
        path: ':id',
        meta: { layout : 'main' },
        component: () => import('../views/task/TaskInfo.vue')
      }
    ]
  }, 
  {
    path: '/contract',
    name: 'Contract',
    meta: { layout : 'main' },
    component: () => import('../views/Contract.vue'),
    children:[
      {
        path: '/',
        meta: { layout : 'main' },
        component: () => import('../views/contract/ContractList.vue')
      },
      {
        path: 'new_contract',
        meta: { layout : 'main' },
        component: () => import('../views/contract/ContractNew.vue')
      },
      {
        path: '/contract/:id',
        meta: { layout : 'main' },
        component: () => import('../views/contract/ContractInfo.vue')
      },
      {
        path: 'new_attachment',
        meta: { layout : 'main' },
        component: () => import('../views/contract/AttachmentNew.vue')
      },
      {
        path: 'info_attachment',
        meta: { layout : 'main' },
        component: () => import('../views/contract/AttachmentInfo.vue')
      }
    ]
  },
  {
    path: '/customers',
    name: 'Customers',
    meta: { layout : 'main' },
    component: () => import('../views/Customers.vue'),
    children:[
      {
        path: '/',
        meta: { layout : 'main' },
        component: () => import('../views/customers/CustomersList.vue')
      },
      {
        path: 'new_customers',
        meta: { layout : 'main' },
        component: () => import('../views/customers/CustomersNew.vue')
      },
      {
        path: '/customers/:id',
        meta: { layout : 'main' },
        component: () => import('../views/customers/CustomersInfo.vue')
      }
    ]
  },
  {
    path: '/tenders',
    name: 'Tenders',
    meta: { layout : 'main' },
    component: () => import('../views/Tenders.vue'),
    children:[
      {
        path: '/',
        meta: { layout : 'main' },
        component: () => import('../views/tenders/TendersList.vue')
      },
      {
        path: 'new_tenders',
        meta: { layout : 'main' },
        component: () => import('../views/tenders/TendersNew.vue')
      },
      {
        path: '/tenders/:id',
        meta: { layout : 'main' },
        component: () => import('../views/tenders/TendersInfo.vue')
      }
    ]
  },
  {
    path: '/equipment',
    name: 'Equipment',
    meta: { layout : 'main' },
    component: () => import('../views/Equipment.vue'),
    children:[
      {
        path: '/',
        meta: { layout : 'main' },
        component: () => import('../views/equipment/EquipmentList.vue')
      },
      {
        path: 'new_equipment',
        meta: { layout : 'main' },
        component: () => import('../views/equipment/EquipmentNew.vue')
      },
      {
        path: '/equipment/:id',
        meta: { layout : 'main' },
        component: () => import('../views/equipment/EquipmentInfo.vue')
      }
    ]
  },
  {
    path: '/insurance',
    name: 'Insurance',
    meta: { layout : 'main' },
    component: () => import('../views/Insurance.vue'),
    children:[
      {
        path: '/',
        meta: { layout : 'main' },
        component: () => import('../views/insurance/InsuranceList.vue')
      },
      {
        path: 'new_insurance',
        meta: { layout : 'main' },
        component: () => import('../views/insurance/InsuranceNew.vue')
      },
      {
        path: '/insurance/:id',
        meta: { layout : 'main' },
        component: () => import('../views/insurance/InsuranceInfo.vue')
      }
    ]
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
