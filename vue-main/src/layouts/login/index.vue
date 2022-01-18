<template>
  <a-config-provider :locale="locale">
    <LoginComponent />
  </a-config-provider>
</template>

<script>
import zhCN from 'ant-design-vue/es/locale/zh_CN';
import LoginComponent from './LoginComponent.vue';
export default {
  name: 'login',
  components: {
    LoginComponent,
  },
  computed: {
    locale() {
      return zhCN;
    },
  },
};
</script>

<style lang="less" scoped></style>
