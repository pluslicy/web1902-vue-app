import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
import category from './category'
import product from './product'
import customer from './customer'
import address from './address'

export default new Vuex.Store({
  modules:{
    category,
    product,
    customer,
    address
  }
})
