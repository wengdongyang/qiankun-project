<template>
  <a-layout class="main-layout">
    <a-layout-sider class="main-layout-sider" collapsible>
      <aside class="aside">
        <header class="header">
          <div class="logo" />
        </header>
        <section class="body">
          <a-menu mode="inline" @click="({key}) => onClickMenu(key)">
            <template v-for="menuItem in menuTree">
              <a-menu-item v-if="!menuItem.children" :key="menuItem.id" :title="menuItem.name"> {{ menuItem.name }}</a-menu-item>
              <a-sub-menu v-else :key="menuItem.id" :title="menuItem.name">
                <a-menu-item v-for="menu in menuItem.children" :key="menu.id" :title="menuItem.name">{{ menu.name }} </a-menu-item>
              </a-sub-menu>
            </template>
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
import {isEmpty} from 'lodash';
import {mapGetters} from 'vuex';
// apis
import {apiGetAuthMenuTree} from '@src/apis/auth';
// utils
import {getTreeDataByKey} from '@src/utils';
// types
// stores
// configs
// components

export default {
  name: 'rootComponent',
  components: {},
  data() {
    return {
      menuTree: [], // 菜单树
    };
  },
  computed: {
    ...mapGetters(['userInfo']),
  },
  methods: {
    checkIsLogin() {
      try {
        const _this = this;
        const {userInfo} = this;
        // if (!userInfo.user_id) {
        //   _this.$router.replace({path: '/login'});
        // }
      } catch (error) {}
    },
    /**
     * 获取菜单树
     */
    async getAuthMenuTree() {
      try {
        const _this = this;
        const {code, data} = await apiGetAuthMenuTree();
        _this.$set(_this, 'menuTree', code === '200' && data?.length ? data : []);
      } catch (error) {}
    },
    /**
     * 点击指定菜单
     */
    onClickMenu(key) {
      try {
        const _this = this;
        const {menuTree} = _this;
        const selectMenu = getTreeDataByKey(menuTree, key, {keyKey: 'id', childrenKey: 'children'});
        const {route = {}} = selectMenu;

        console.error(key, selectMenu, route);
        if (!isEmpty(route)) {
          const {type, path = ''} = route;
          switch (type) {
            case 'self':
              _this.$router.push({path: `/root${path}`});
              break;
            case 'qiankun':
              window.history.pushState({}, '', `/root${path}`);
              break;
            default:
              break;
          }
        }
      } catch (error) {
        console.error(error);
      }
    },
  },
  created() {},
  mounted() {
    try {
      const _this = this;
      _this.$nextTick(() => {
        _this.checkIsLogin();
        _this.getAuthMenuTree();
      });
    } catch (error) {}
  },
  destroyed() {},
};
</script>

<style lang="less" scoped>
@import './RootComponent.less';
</style>
