<template>
  <div class="header clear">
    <div class="content-wrap">
      <div class="avatar">
        <img :src="seller.avatar"/>
      </div>
      <div class="content">
        <div class="title">
          <span class="icon"></span>
          <span class="name">{{ seller.name }}</span>
        </div>
        <div class="desc">
          {{ seller.description }}/{{ seller.deliveryTime }}分钟送达
        </div>
        <div v-if="seller.supports" class="support">
          <span class="icon" :class="clazzMap[seller.supports[0].type]"></span>
          <span class="text">{{ seller.supports[0].description }}</span>
        </div>
        <div class="person" @click="showMask">
          <span>5个</span>
          <i class="icon-keyboard_arrow_right"></i>
        </div>
      </div>
    </div>
    <div class="ad-wrap" @click="showMask">
      <span class="icon"></span>
      <span class="desc">{{ seller.bulletin }}</span>
      <i class="icon-keyboard_arrow_right"></i>
    </div>
    <div class="bg-img">
      <img :src="seller.avatar" width="100%" height="100%">
    </div>
    <!-- 显示详情图层 -->
    <transition name="maskFade">
      <div class="mask" v-show="hasShowMask">
        <div class="mask-wrap">
          <div class="mask-content">
            <div class="title">{{ seller.name }}</div>
            <div class="price">
              <Star :size="48" :score="1.5"></Star>
            </div>
            <div class="supports">
              <div class="support-title">
                <span class="line"></span>
                <span class="text">优惠信息</span>
                <span class="line"></span>
              </div>
              <ul class="supportList" v-if="seller.supports">
                <li v-for="support in seller.supports">
                  <span class="icon" :class="clazzMap[support.type]"></span>
                  <span class="info">{{ support.description }}</span>
                </li>
              </ul>
            </div>
            <div class="sellerAd">
              <div class="sellerAd-title">
                <span class="line"></span>
                <span class="text">商家公告</span>
                <span class="line"></span>
              </div>
              <div class="sellerAd-desc">{{ seller.bulletin }}</div>
            </div>
          </div>
        </div>
        <div class="mask-close">
          <i class="icon-close" @click="maskClose"></i>
        </div>
      </div>
    </transition>
  </div>
</template>
<style lang="less" type="text/less">
  @import "../../common/styles/header.less";
</style>
<script type="text/ecmascript-6">
  import Star from 'components/star/Star';
  export default {
//    props: ['seller']
    props: {
      seller: {
        type: Object
      }
    },
    data(){
      return {
        hasShowMask: false
      };
    },
    created() {
      this.clazzMap = ['decrease', 'discount', 'special', 'invoice', 'guarantee'];
    },
    methods: {
      showMask() {
        this.hasShowMask = true;
      },
      maskClose() {
        this.hasShowMask = false;
      }
    },
    components: {
      Star
    }
  };
</script>
