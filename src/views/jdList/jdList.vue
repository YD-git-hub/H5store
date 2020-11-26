<template>
  <div>
    <van-dropdown-menu active-color="#1989fa" v-show="headerSohw">
      <van-dropdown-item v-model="synthesis" :options="option1" />
      <van-dropdown-item v-model="inprice" :options="option2" />
      <van-dropdown-item v-model="sales" :options="option3" />
    </van-dropdown-menu>
    <div id="index">
      <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
        <header v-show="!headerSohw">
          <div class="index_banner">
            <img src="@/assets/mall_jd.png" alt="banner" />
          </div>
          <div class="list_title">每日推荐</div>
        </header>
          <div class="commonlist">
            <van-list
              v-model="loading"
              :finished="finished"
              finished-text="没有更多了"
              @load="onLoad"
            >
              <ul class="content">
                <li class="content_list" v-for="i in 10" :key="i">
                  <img src="@/assets/nz.jpg" class="list_have" />
                  <div class="list_introduce">
                    <p class="van-multi-ellipsis--l2">
                      <img src="@/assets/jd.png" alt="" />
                      夏季修身韩国复古米白色v领百搭短款上衣镂空薄
                    </p>
                  </div>
                  <div class="list_price">
                    <p><span>￥</span>36000.00</p>
                    <p>￥10卷</p>
                  </div>
                  <div class="list_original">
                    <p><span>￥</span>36000.00</p>
                    <p>已售1000</p>
                  </div>
                </li>
              </ul>
            </van-list>
          </div>
      </van-pull-refresh>
    </div>
  </div>
</template>

<script>
export default {
  props:['headerSohw','option1','option2','option3'],
  data() {
    return {
      loading: false,
      finished: false,
      isLoading: false,
      synthesis: 0,//综合
      inprice: "0",//价格
      sales:'0',//销量
    };
  },
  methods: {
    onLoad() {
      setTimeout(() => {
        // 加载状态结束
        this.loading = false;
        // 数据全部加载完成
        this.finished = true;
      }, 1000);
    },
    //刷新
    onRefresh() {
      setTimeout(() => {
        this.$toast("成功文案");
        console.log("刷新成功");
        this.isLoading = false;
      }, 1000);
    },
  },
};
</script>

<style lang="less" scoped>
.index_banner {
  margin-bottom: 1.25rem;
}
</style>