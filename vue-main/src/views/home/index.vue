<template>
  <a-config-provider :locale="locale">
    <HomeComponent />
  </a-config-provider>
</template>

<script>
import zhCN from 'ant-design-vue/es/locale/zh_CN';
import HomeComponent from './HomeComponent.vue';
export default {
  name: 'home',
  components: {
    HomeComponent,
  },
  computed: {
    locale() {
      return zhCN;
    },
  },
};
</script>

<style lang="less" scoped></style>
