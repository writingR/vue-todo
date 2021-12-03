import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const storage = {
  // 인스턴스가 생성되자마자 호출되는 함수
  fetch() {
    const arr = [];
    if(localStorage.length > 0) {
      for(let i = 0; i<localStorage.length; i++) {
        if(localStorage.key(i) != "loglevel:webpack-dev-server") {
          // this.todoItems.push(localStorage.key(i));
          arr.push(JSON.parse(localStorage.getItem(localStorage.key(i))));
        }
      }
    }
    return arr;
  },
};

export const store = new Vuex.Store ({
  state: {
    headerTitle: 'TodoList - 나의 할 일',
    todoItems: storage.fetch(),
  },
  mutations: {

  }
});