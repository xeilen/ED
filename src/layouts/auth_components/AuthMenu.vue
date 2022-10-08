<template>
  <n-layout-sider
    bordered
    collapse-mode="width"
    :collapsed-width="64"
    :width="240"
    :collapsed="collapsed"
    show-trigger
    @collapse="collapsed = true"
    @expand="collapsed = false"
  >
    <logo :collapsed="collapsed" />
    <n-menu
      :value="activeKey"
      :collapsed="collapsed"
      :options="menuItemsOptions"
      :collapsed-width="64"
    />
  </n-layout-sider>
</template>

<script setup lang="ts">
import { computed, ref, h } from 'vue'
import { menuItems } from '@/settings/menu'
import { RouterLink, useRoute } from "vue-router";
import { NIcon } from 'naive-ui'

const route = useRoute()

const collapsed = ref(false)
const activeKey = computed(() => route.fullPath)

const renderMenuLabel = (item) => {
  return h(RouterLink, { to: item.path }, { default: () => item.label })
}

const renderIcon = (icon) => {
  return h(NIcon, null, { default: () => h(icon)})
}

const menuItemsOptions = computed(() =>
  menuItems.map((item) => {
    return {
      label: () => renderMenuLabel(item),
      key: item.path,
      icon: () => renderIcon(item.icon),
    }
  })
)
</script>

<style scoped>

</style>
