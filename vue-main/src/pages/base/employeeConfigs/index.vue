<template>
  <a-config-provider :locale="locale">
    <EmployeeConfigsComponent />
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
import EmployeeConfigsComponent from './EmployeeConfigsComponent';
export default {
  name: 'EmployeeConfigs',
  components: {EmployeeConfigsComponent},
  computed: {
    locale() {
      return zhCN;
    },
  },
};
</script>
<style lang="less" scoped></style>
