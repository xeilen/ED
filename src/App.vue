<template>
  <template v-if="route.matched.length">
    <auth-layout v-if="needAuth">
      <router-view v-slot="{ Component }">
        <transition name="zoom-fade" mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>
    </auth-layout>
    <public-layout v-else>
      <router-view v-slot="{ Component }">
        <transition name="zoom-fade" mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>
    </public-layout>
  </template>
</template>
<script setup lang="ts">
import PublicLayout from '@/layouts/PublicLayout.vue'
import AuthLayout from '@/layouts/AuthLayout.vue'
import { useRoute } from 'vue-router'
import { computed } from 'vue'
import { PUBLIC_PAGES } from '@/settings/constants'
import {useAuthStore} from '@/stores/auth';

const route = useRoute()

const authStore = useAuthStore()

authStore.checkIsLoggedIn()


const needAuth = computed(() => !PUBLIC_PAGES.includes(route.name as string))
</script>
