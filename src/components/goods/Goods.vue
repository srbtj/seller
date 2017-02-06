<template>
  <div class="goods">
    <div class="menu-wrapper">
      <ul>
        <li v-for="good in goods" class="li-item">
          <span class="text">
            <span v-show="good.type > 0" class="icon" :class="clazzMap[good.type]"></span>
            <!--<Icon :iconType="good.type" v-show="good.type > 0"></Icon>-->
            {{ good.name }}
          </span>
        </li>
      </ul>
    </div>
    <div class="foods-wrapper">菜单详情</div>
  </div>
</template>
<style lang="less" rel="stylesheet/less">
  @import "../../common/styles/goods.less";
</style>
<script type="text/ecmascript-6">
  import Icon from 'components/icon/Icon';
  export default{
    data(){
      return {
        goods: []
      };
    },
    created(){
      this.clazzMap = ['decrease', 'discount', 'special', 'invoice', 'guarantee'];
      this.$http.get('/api/goods').then((response) => {
        let data = response.data;
        if(data.errno === 0){
          this.goods = data.data;
        }
      });
    },
    components: {
      Icon
    }
  };
</script>
