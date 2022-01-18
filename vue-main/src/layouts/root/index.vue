<template>
  <a-config-provider :locale="locale">
    <RootComponent />
  </a-config-provider>
</template>

<script>
import zhCN from 'ant-design-vue/es/locale/zh_CN';
import RootComponent from './RootComponent.vue';
export default {
  name: 'root',
  components: {
    RootComponent,
  },
  computed: {
    locale() {
      return zhCN;
    },
  },
};
</script>

<style lang="less" scoped></style>
