<template>
  <a-config-provider :locale="locale">
    <HomeComponent />
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
import HomeComponent from './HomeComponent';
export default {
  name: 'Home',
  components: {HomeComponent},
  computed: {
    locale() {
      return zhCN;
    },
  },
};
</script>
<style lang="less" scoped></style>
