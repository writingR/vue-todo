import Vue from 'vue';
import Vuex from 'vuex';
import todoApp from './modules/todoApp'

Vue.use(Vuex);

export const store = new Vuex.Store ({
  // state: {
  //   // headerTitle: 'TodoList - 나의 할 일',
  //   todoItems: storage.fetch(),
  // },
  // getters,
  // mutations,
  modules: {
    todoApp
  }
});