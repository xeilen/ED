<template>
  <layout-wrapper>
    <n-layout position="absolute" has-sider>
      <auth-menu />
      <n-layout>
        <auth-header />
        <main>
          <slot />
        </main>
      </n-layout>
    </n-layout>
  </layout-wrapper>
</template>

<script setup lang="ts">
import LayoutWrapper from '@/layouts/LayoutWrapper.vue'
import AuthMenu from '@/layouts/auth_components/AuthMenu.vue'
import AuthHeader from '@/layouts/auth_components/AuthHeader.vue'
</script>

<style lang="sass">
#app
  display: flex
  flex-direction: column
  min-height: 100vh
#app main
  padding: 20px
#app > header,
#app > footer,
#app > div
  min-width: 100%
#app footer
  align-self: flex-end
</style>
