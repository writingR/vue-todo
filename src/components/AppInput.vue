<template>
  <div class="inputBox shadow">
    <input type="text" v-model="newTodoItem" v-on:keypress.enter="addTodo">
<!--    <button class=""  v-on:click="addTodo">Add</button>-->
    <span class="addContainer" v-on:click="addTodo" >
      <i class="addBtn fas fa-plus" aria-hidden="true"></i>
    </span>

    <Modal v-if="showModal" @close="showModal = false">
      <!--
        you can use custom content here to overwrite
        default content
      -->
      <h3 slot="header">
        경고!
        <i
           class="closeModalBtn fas fa-times"
           @click="showModal = false"
        >
        </i>
      </h3>
      <p slot="body">아무것도 입력하지 않으셨습니다.입력해주세요.</p>
    </Modal>
  </div>
</template>

<script>
import Modal from './common/Modal';

export default {
  name: 'AppInput',
  data() {
    return {
      newTodoItem: "",
      showModal: false,
    }
  },
  methods: {
    addTodo() {
      if(this.newTodoItem !== "") {
        const text = this.newTodoItem.trim();
        this.$store.commit('addOneItem',text);
        this.clearInput('addOneItem');
      } else {
        this.showModal = !this.showModal;
      }
    },
    clearInput() {
      this.newTodoItem = '';
    },
  },
  components: {
    Modal,
  }
};
</script>

<style scoped>

  input:focus {
    outline: none;
  }

  .inputBox {
    background-color: #fff;
    height: 50px;
    line-height: 50px;
    border-radius: 5px;
  }

  .inputBox input {
    border-style: none;
    font-size: 0.9rem;
  }

  .addContainer {
    float: right;
    background: linear-gradient(to right, #6478FB, #8763FB);
    display: block;
    width: 3rem;
    border-radius: 0 5px 5px 0;
  }

  .addBtn {
    color: #fff;
    vertical-align: middle;
  }

  .closeModalBtn {
    color: #42b983;
  }

</style>