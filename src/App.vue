<template>
  <div id="app">
    <AppHeader></AppHeader>
    <AppInput></AppInput>
    <AppList></AppList>
    <AppFooter></AppFooter>
  </div>
</template>

<script>
import AppHeader from './components/AppHeader';
import AppInput from './components/AppInput';
import AppList from './components/AppList';
import AppFooter from './components/AppFooter';

export default {
  name: 'App',
  components: {
    AppHeader,
    AppInput,
    AppList,
    AppFooter
  }
}
</script>

<style>
</style>
