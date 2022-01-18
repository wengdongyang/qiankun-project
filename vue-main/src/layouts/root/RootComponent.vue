<template>
  <a-layout class="main-layout">
    <a-layout-sider class="main-layout-sider" collapsible>
      <aside class="aside">
        <header class="header">
          <div class="logo" />
        </header>
        <section class="body">
          <a-menu theme="dark">
            <a-menu-item key="1">
              <a-icon type="user" />
              <span>nav 1</span>
            </a-menu-item>
            <a-menu-item key="2">
              <a-icon type="video-camera" />
              <span>nav 2</span>
            </a-menu-item>
            <a-menu-item key="3">
              <a-icon type="upload" />
              <span>nav 3</span>
            </a-menu-item>
          </a-menu>
        </section>
      </aside>
    </a-layout-sider>
    <a-layout class="layout">
      <a-layout-header class="layout-header">Header</a-layout-header>
      <a-layout-content class="layout-content">
        <router-view />
      </a-layout-content>
      <a-layout-footer class="layout-footer">Footer</a-layout-footer>
    </a-layout>
  </a-layout>
</template>

<script>
import {mapGetters} from 'vuex';
// apis
// utils
// types
// stores
// configs
// components
export default {
  name: 'rootComponent',
  components: {},
  computed: {
    ...mapGetters(['userinfo']),
  },
  methods: {
    checkIsLogin() {
      try {
        const _this = this;
        const {userinfo} = this;
        // if (!userinfo.user_id) {
        //   _this.$router.replace({path: '/login'});
        // }
      } catch (error) {}
    },
  },
  created() {},
  mounted() {
    try {
      const _this = this;
      _this.$nextTick(() => {
        _this.checkIsLogin();
      });
    } catch (error) {}
  },
  destroyed() {},
};
</script>

<style lang="less" scoped>
@import './RootComponent.less';
</style>
