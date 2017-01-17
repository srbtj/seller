<template>
  <div class="header">
    <div class="content-wrap">
      <div class="avatar">
        <img width="64" height="64" :src="seller.avatar" />
      </div>
      <div class="content">
        <div class="title">
          <span class="icon"></span>
          <span class="name">{{ seller.name }}</span>
        </div>
        <div class="desc">
          {{ seller.description }}/{{ seller.deliveryTime }}分钟送达
        </div>
        <div v-if="seller.supports" class="discount">
          <span class="icon"></span>
          <span class="text">{{ seller.supports[0].description }}</span>
        </div>
      </div>
    </div>
    <div class="ad-wrap"></div>
  </div>
</template>
<style lang="less" type="text/less">
  
</style>
<script type="text/ecmascript-6">
  export default {
//    props: ['seller']
    props: {
      seller: {
        type: Object
      }
    }
  };
</script>
