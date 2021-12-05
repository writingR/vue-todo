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
  mutations: {
    addOneItem(state,todoItem) {
      const obj = { completed: false, item: todoItem };
      localStorage.setItem(todoItem, JSON.stringify(obj));
      state.todoItems.push(obj);
    },
    removeOneItem(state,todoItem,index) {
      localStorage.removeItem(todoItem.item);
      state.todoItems.splice(todoItem[index],1);
      // todoItem.splice(index,1);
    },
    toggleItem(state,todoItem, index) {
      state.todoItems[index].completed = !this.todoItems[index].completed;
      localStorage.removeItem(todoItem.item);
      localStorage.setItem(todoItem.item, JSON.stringify(todoItem));
    },
    clearAllItem(state) {
      localStorage.clear();
      state.todoItems = [];
    }
  }
});