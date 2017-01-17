<template>
  <div id="app">
    <v-header></v-header>
    <v-tab></v-tab>
  </div>
</template>
<style lang="less" rel="stylesheet/less">
  @import "common/styles/index.less";
</style>
<script type="text/ecmascript-6">
  import Header from './components/header/Header.vue';
  import Tab from './components/header/Tab.vue';
  export default {
    components: {
      'v-header': Header,
      'v-tab': Tab
    }
  };
</script>
