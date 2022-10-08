<template>
  <div class="login flex-full-center">
    <div class="login__wrapper">
      <logo class="login__logo" />

      <h3 class="login__title">Login in to EasyDropshipping</h3>

      <n-form @submit.prevent="initLogin">
        <n-form-item label="Email">
          <n-input v-model:value="email" />
        </n-form-item>

        <n-form-item label="Password">
          <n-input v-model:value="password" />
        </n-form-item>

        <n-button attr-type="submit" type="primary" :block="true">
          Login
        </n-button>
      </n-form>

      <p class="login__create-account">
        Don't have an account yet?
        <router-link
          class="login__register-link"
          to="/register"
        >
          Create an account
        </router-link>
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useAuthStore } from '@/stores/auth'
import { useRouter } from 'vue-router'

const { login } = useAuthStore()

const router = useRouter()

const email = ref('')
const password = ref('')

const initLogin = async () => {
  try {
    await login(email.value, password.value)
    await router.push('./dashboard')
  } catch (e) {
    console.error('Error when login', e)
  }
}
</script>

<style scoped lang="sass">
.login
  height: 100vh

  &__wrapper
    display: flex
    flex-direction: column
    min-width: 320px

  &__logo
    align-self: center

  &__title
    text-align: center

  &__create-account
    text-align: center

  &__register-link
    color: #18A058
</style>
