<template>
  <div id="app">
    <v-header :seller="seller"></v-header>
    <v-tab></v-tab>
  </div>
</template>
<style lang="less" rel="stylesheet/less">
  @import "common/styles/index.less";
</style>
<script type="text/ecmascript-6">
  import Header from './components/header/Header.vue';
  import Tab from './components/header/Tab.vue';

  const ERR_OK = 0;
  export default {
    components: {
      'v-header': Header,
      'v-tab': Tab
    },
    data(){
      return {
        seller: {}
      };
    },
    created(){
      this.$http.get('/api/sellers').then((response) => {
        let data = response.body;
        if(data.errno === ERR_OK){
          this.seller = data.data;
        }
      });
    }
  };
</script>
