<template>
  <a-config-provider :locale="locale">
    <MenuConfigsComponent />
  </a-config-provider>
</template>
<script>
import zhCN from 'ant-design-vue/es/locale/zh_CN';
// apis
// utils
// types
// stores
// configs
// components
import MenuConfigsComponent from './MenuConfigsComponent';
export default {
  name: 'MenuConfigs',
  components: {MenuConfigsComponent},
  computed: {
    locale() {
      return zhCN;
    },
  },
};
</script>
<style lang="less" scoped></style>
