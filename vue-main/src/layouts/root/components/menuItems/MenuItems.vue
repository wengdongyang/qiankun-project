<template>
  <div>
    6696
    <template v-for="menuItem in menuTree">
      <template v-if="menuItem.children">
        <a-sub-menu :key="menuItem.id">
          <span slot="title">{{ menuItem.name }}</span>
          <menuItems :menuTree="menuItem.children" />
        </a-sub-menu>
      </template>
      <a-menu-item v-else :key="menuItem.id" :title="menuItem.name">
        {{ menuItem.name }}
      </a-menu-item>
    </template>
  </div>
</template>

<script>
// apis
// utils
// types
// stores
// configs
// components
export default {
  name: 'menuItems',
  props: {
    menuTree: Array,
  },
};
</script>

<style lang="less" scoped></style>
