<template>
  <section>
    <!-- <header>
      <ul>
        <li @click="go('/root/qiankun')">to qiankun</li>
        <li @click="go('/root/home')">to home</li>
      </ul>
    </header> -->
    <section class="qiankun-container" id="qiankunContainer" />
  </section>
</template>

<script>
import {registerMicroApps, start} from 'qiankun';
export default {
  name: 'qiankun',
  components: {},
  computed: {},
  methods: {
    initQiankun() {
      registerMicroApps([
        {name: 'react-micro', entry: 'http://localhost:3333/', container: '#qiankunContainer', activeRule: '/root/qiankun'},
        {name: 'vue-micro', entry: 'http://localhost:8888/', container: '#qiankunContainer', activeRule: '/root/qiankun/qiankunVue'},
      ]);
      start();
    },
    go(href) {
      history.pushState({}, 'title', href);
    },
  },
  created() {
    this.initQiankun();
  },
  mounted() {
    try {
      // const _this = this;
      // _this.$nextTick(() => {
      //   _this.initQiankun();
      // });
    } catch (error) {}
  },
};
</script>

<style lang="less" scoped>
.qiankun-container {
  width: 1000px;
  height: 600px;
  background-color: #ddd;
}
</style>
