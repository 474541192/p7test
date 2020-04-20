import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    list:[],
    tempList:[],
    selectIndex:0,
    classify:[]
  },
  mutations: {
    getClassify:function(state,classify){
      state.classify = classify
    },
    getData:function(state,data){
      state.list = data;
      console.log(state.list)
    },
    select:function(state,index){
      state.selectIndex = index;
      switch (index) {
        case 0:
          
          break;
      
        default:
          break;
      }
    },
    sort:function(state,flag){
      if(flag){
        state.list.sort((a,b)=>{
          return b.price - a.price
        })
      }else{
        state.list.sort((a,b)=>{
          return a.price - b.price
        })
      }
    }
  },
  actions: {
  },
  modules: {
  }
})
