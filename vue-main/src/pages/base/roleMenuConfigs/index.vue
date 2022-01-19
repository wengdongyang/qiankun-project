<template>
  <a-config-provider :locale="locale">
    <RoleMenuConfigsComponent />
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
import RoleMenuConfigsComponent from './RoleMenuConfigsComponent';
export default {
  name: 'RoleMenuConfigs',
  components: {RoleMenuConfigsComponent},
  computed: {
    locale() {
      return zhCN;
    },
  },
};
</script>
<style lang="less" scoped></style>
