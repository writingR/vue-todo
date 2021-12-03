<template>
  <div id="app">
    <AppHeader></AppHeader>
    <AppInput
        v-on:addTodoItem="addOneItem"
    >
    </AppInput>
    <AppList
        v-bind:propsdata="todoItems"
        v-on:removeTodoItem="removeOneItem"
        v-on:toggleTodoItem="toggleItem"
    >
    </AppList>
    <AppFooter
        v-on:clearItem="clearAllItem"
    >
    </AppFooter>
  </div>
</template>

<script>
import AppHeader from './components/AppHeader';
import AppInput from './components/AppInput';
import AppList from './components/AppList';
import AppFooter from './components/AppFooter';

export default {
  name: 'App',
  data: function() {
    return {
      todoItems: []
    }
  },
  methods: {
    addOneItem: function(todoItem) {
      var obj = {
        completed: false,
        item: todoItem
      }
      localStorage.setItem(todoItem, JSON.stringify(obj));
      this.todoItems.push(obj);
    },
    removeOneItem: function(todoItem,index) {
      localStorage.removeItem(todoItem.item);
      this.todoItems.splice(index,1);
      // todoItem.splice(index,1);
    },
    toggleItem: function(todoItem, index) {
      this.todoItems[index].completed = !this.todoItems[index].completed;
      localStorage.removeItem(todoItem.item);
      localStorage.setItem(todoItem.item, JSON.stringify(todoItem));
    },
    clearAllItem: function() {
      localStorage.clear();
      this.todoItems = [];
    }
  },
  // 인스턴스가 생성되자마자 호출되는 함수
  created: function(){
    if(localStorage.length > 0) {
      for(var i = 0; i<localStorage.length; i++) {
        if(localStorage.key(i) != "loglevel:webpack-dev-server") {
          // this.todoItems.push(localStorage.key(i));
          this.todoItems.push(JSON.parse(localStorage.getItem(localStorage.key(i))));
        }
      }
    }
  },
  components: {
    AppHeader,
    AppInput,
    AppList,
    AppFooter
  }
}
</script>

<style>

  body {
    text-align: center;
    background-color: aliceblue;
    padding: 0 80px 0 50px;
  }

  input {
    border-style: groove;
    width: 200px;
  }

  button {
    border-style: groove;
  }

  .shadow {
    box-shadow: 5px 10px 10px rgba(0, 0, 0, 0.03);
  }

</style>
