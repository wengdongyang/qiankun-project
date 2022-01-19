/*
 * @Author: wdy
 * @Date: 2022-01-19 17:15:57
 * @Last Modified by: wdy
 * @Last Modified time: 2022-01-19 17:39:08
 */
const templateIndexVue = View => {
  return `<template>
  <a-config-provider :locale="locale">
    <${View}Component />
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
import ${View}Component from './${View}Component';
export default {
  name: '${View}',
  components: {${View}Component},
  computed: {
    locale() {
      return zhCN;
    },
  },
};
</script>
<style lang="less" scoped></style>
`;
};
/**
 * HomeComponent.tsx
 * @param {*} ViewComponent
 */
const templatePageComponentVue = ViewName => {
  return `<template>
  <section>${ViewName}</section>
</template>
<script>
// apis
// utils
// types
// stores
// configs
// components
export default {
  name: '${ViewName}',
  components: {},
  data() {
    return {};
  },
  computed: {},
  methods: {},
  mounted() {
    const _this = this;
    _this.$nextTick(() => {});
  },
  destroyed() {},
};
</script>
<style lang="less" scoped>
@import './${ViewName}.less';
</style>
`;
};
const templateEmptyFileTsFun = FileName => {
  return `// apis
// utils
// types
// stores
// configs
// components
const base${FileName} = '';
export {base${FileName}};
`;
};
/**
 * Test.module.less
 * @param {*} ViewComponent
 */
const templateComponentModuleLessFun = () => {
  return `@import '@src/styles/configs/index.less';
@import '@src/styles/mixins/index.less';
`;
};

module.exports = {
  templateIndexVue,
  templateEmptyFileTsFun,
  templatePageComponentVue,
  templateComponentModuleLessFun,
};
