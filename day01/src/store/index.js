import Vue from 'vue'
import Vuex from 'vuex'
import vuexPersist from "vuex-persist"

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    obj:[],
  },
  mutations: {
    add(state,obj){
      var i = 0;
      state.obj.forEach((item,index)=>{
        if(item.name == obj.name){
          i++;
        }
      });
      console.log(i);
      if(i<=0){
        state.obj.push(obj);
      }else{
        alert("已存在");
      }
    },
    remove(state,index){
      state.obj.splice(index,1);
    },
    dbenter(state,nam){
      state.obj[nam.index].name = nam.nam;
    },
  },
  actions: {
  },
  modules: {
  },
  plugins: [
    new vuexPersist({
      storage: window.localStorage,
    }).plugin,
  ],
})
