<template>
  <a-config-provider :locale="locale">
    <HomeSettingComponent />
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
import HomeSettingComponent from './HomeSettingComponent';
export default {
  name: 'HomeSetting',
  components: {HomeSettingComponent},
  computed: {
    locale() {
      return zhCN;
    },
  },
};
</script>
<style lang="less" scoped></style>
