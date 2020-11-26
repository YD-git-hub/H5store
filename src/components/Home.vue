
<template>
  <div id="home">
    <header id="header">
      <van-search
        v-model="value"
        shape="round"
        background="#fff"
        placeholder="粘贴宝贝标题或输入关键词"
      />
      <div class="header_type">
        <van-tabs @click="activenav">
          <van-tab v-for="(item, index) in navtype" :key="index" :title="item">
          </van-tab>
        </van-tabs>
      </div>
    </header>
    <section id="mian">
      <transition name="van-slide-left">
        <router-view :headerSohw="headerSohw" :option1="option1" :option2="option2" :option3="option3"/>
      </transition>
    </section>
    <footer id="footer">
      <ul class="footer_type">
        <li
          :class="fooreractive == '首页' ? 'footer_option' : ''"
          @click="activefooter('首页')"
        >
          <img
            src="../assets/nav_ic_nav_home_sel.png"
            alt="首页"
            v-if="fooreractive == '首页'"
          />
          <img src="../assets/nav_ic_nav_home_nor.png" alt="首页" v-else />
          <span>首页</span>
        </li>
        <li
          :class="fooreractive == '京东' ? 'footer_option' : ''"
          @click="activefooter('京东')"
        >
          <img
            src="../assets/nav_ic_nav_jd_sel.png"
            alt="京东"
            v-if="fooreractive == '京东'"
          />
          <img src="../assets/nav_ic_nav_jd_nor.png" alt="京东" v-else />
          <span>京东</span>
        </li>
        <li
          :class="fooreractive == '拼多多' ? 'footer_option' : ''"
          @click="activefooter('拼多多')"
        >
          <img
            src="../assets/nav_ic_nav_pdd_sel.png"
            alt="拼多多"
            v-if="fooreractive == '拼多多'"
          />
          <img src="../assets/nav_ic_nav_pdd_nor.png" alt="拼多多" v-else />
          <span>拼多多</span>
        </li>
        <li
          :class="fooreractive == '唯品会' ? 'footer_option' : ''"
          @click="activefooter('唯品会')"
        >
          <img
            src="../assets/nav_ic_nav_wph_sel.png"
            alt="唯品会"
            v-if="fooreractive == '唯品会'"
          />
          <img src="../assets/nav_ic_nav_wph_nor.png" alt="唯品会" v-else />
          <span>唯品会</span>
        </li>
      </ul>
    </footer>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      value: "",
      navactive: "全部", //顶部导航选择类别
      navtype: ["全部", "女装", "男装", "水果", "数码", "运动", "百货", "食品"], //顶部导航展示内容
      fooreractive: "首页",
      headerSohw:false,//头部切换
      // 综合选项，价格，销量
      option1: [
        { text: "综合", value: 0 },
        { text: "新款商品", value: 1 },
        { text: "活动商品", value: 2 },
      ],
      option2: [
        { text: "价格", value: "0" },
        { text: "升序", value: "1" },
        { text: "降序", value: "2" },
      ],
      option3: [
        { text: "销量", value: "0" },
        { text: "升序", value: "1" },
        { text: "降序", value: "2" },
      ],
    };
  },
  created() {
    this.fooreractive = localStorage.getItem('fooreractive') || '首页'
  },
  methods: {
    // 顶部导航
    activenav(id, title) {
      console.log(id,title)
      if(title=="全部"){
        this.headerSohw=false
      }else{
        this.headerSohw=true
      }
    },
    //页脚导航
    activefooter(name) {
      this.fooreractive = name;
      switch (name) {
        case "首页":
          this.$router.push({ name: "Index" });
          break;
        case "京东":
          this.$router.push({ name: "jd" });
          break;
        case "拼多多":
          this.$router.push({ name: "pdd" });
          break;
        case "唯品会":
          this.$router.push({ name: "wph", params: { name: "wph" } });
          break;
      }
    },
  },
  beforeUpdate() {
    //把当前页的页码数，以及页码条数存储起来，刷新的时候还可以展示在本地。
    localStorage.setItem("fooreractive", this.fooreractive);
  },
  beforeDestroy() {
    //页面销毁的时候，把每页的页码，以及当前的每页条数恢复成默认。
    localStorage.setItem("fooreractive", "首页");
  },
};
</script>
<style lang="less" scoped>
#home {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background: #f4f4f4;
  #mian {
    flex: 1;
    overflow: hidden;
    overflow: auto;
  }
  #footer {
    background: #fff;
    .footer_type {
      display: flex;
      justify-content: space-around;
      padding-top: 0.3125rem;
      box-sizing: border-box;
      color: #686868;
      li {
        display: flex;
        flex-direction: column;
        align-items: center;
        font-size: 0.75rem;
        line-height: 1.675rem;
        img {
          width: 1.575rem;
          height: 1.575rem;
        }
      }
      .footer_option {
        color: #282828;
        font-weight: bold;
      }
    }
  }
}
</style>
