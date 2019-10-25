import {get} from '../http/axios'
export default {
  namespaced:true,
  state:{
    address:[]
  },
  mutations:{
    refreshAddress(state,address){
      state.address = address;
    }
  },
  actions:{
    async findAddressByCustomerId(context,id){
      let response = await get("/address/findByCustomerId?id="+id);
      context.commit("refreshAddress",response.data)
    }
  }
}