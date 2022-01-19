<template>
  <a-config-provider :locale="locale">
    <EmployeeServerPermissionsComponent />
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
import EmployeeServerPermissionsComponent from './EmployeeServerPermissionsComponent';
export default {
  name: 'EmployeeServerPermissions',
  components: {EmployeeServerPermissionsComponent},
  computed: {
    locale() {
      return zhCN;
    },
  },
};
</script>
<style lang="less" scoped></style>
