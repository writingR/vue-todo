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
    // headerTitle: 'TodoList - 나의 할 일',
    todoItems: storage.fetch(),
  },
  getters: {
    getTodoItems(state) {
      return state.todoItems;
    }
  },
  mutations: {
    addOneItem(state,todoItem) {
      const obj = { completed: false, item: todoItem };
      localStorage.setItem(todoItem, JSON.stringify(obj));
      state.todoItems.push(obj);
    },
    removeOneItem(state,payload) {
      localStorage.removeItem(payload.todoItem.item);
      state.todoItems.splice(payload.index,1);
      // todoItem.splice(index,1);
    },
    toggleOneItem(state,payload) {
      state.todoItems[payload.index].completed = !state.todoItems[payload.index].completed;
      localStorage.removeItem(payload.todoItem.item);
      localStorage.setItem(payload.todoItem.item, JSON.stringify(payload.todoItem.item));
    },
    clearAllItem(state) {
      localStorage.clear();
      state.todoItems = [];
    }
  },
  actions: {

  }
});