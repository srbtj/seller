<template>
  <div>
    <div class="tab border-onePix">
      <div class="tab-item">
        <router-link v-bind:to="'goods'">商品</router-link>
      </div>
      <div class="tab-item">
        <router-link :to="'ratings'">评价</router-link>
      </div>
      <div class="tab-item">
        <router-link :to="{path: 'sellers'}">商家</router-link>
      </div>
    </div>
    <router-view></router-view>
  </div>

</template>
<style scoped lang="less">
  @import "../../common/styles/tab.less";
</style>
<script type="text/ecmascript-6">
  export default{};
</script>
