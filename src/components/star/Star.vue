<template>
  <!-- starType : 指定星星尺寸 : 48 36 24-->
  <div class="star" :class="starType">
    <!-- starItem : 指定星星的形状: 全星 半星 空星 on half off-->
    <span class="starClass" v-for="starItem in starItems" :class="starItem"></span>
  </div>
</template>
<style lang="less">
  @import "../../common/styles/star.less";
</style>
<script type="text/ecmascript-6">
  const STAR_LEN = 5;
  const STAR_ON = 'on';
  const STAR_HALF = 'half';
  const STAR_OFF = 'off';
  export default {
    props: {
      size: {
        type: Number
      },
      score: {
        type: Number
      }
    },
    computed: {
      starType() {
        return 'star-' + this.size;
      },
      starItems() {
        let starArr = [];
        // 根据评分 显示对应的星数
        let score = Math.floor(this.score * 2) / 2;
        // 判断是否有半星
        let hasHalf = score % 1 === 0;
        for (let i = 0; i < Math.floor(score); i++) {
          starArr.push(STAR_ON); // 添加全星
        }
        // 添加半星
        if (!hasHalf) {
          starArr.push(STAR_HALF);
        }
        while (starArr.length < STAR_LEN) {
          starArr.push(STAR_OFF);
        }
        return starArr;
      }
    }
  };
</script>
