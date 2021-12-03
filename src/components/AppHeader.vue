<template>
  <div>
<!--    <h1>{{ this.$store.state.headerTitle }}</h1>-->
    <h1>TodoList - 나의 할 일</h1>
  </div>
</template>

<script>
export default {
  name: 'AppHeader',
};
</script>

<style scoped>
  h1 {
    font-size: 40px;
    color: #000;
    font-weight: 900;
    margin: 2.5rem 0 1.5rem;
  }
</style>