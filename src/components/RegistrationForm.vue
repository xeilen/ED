<template>
  <div class="register flex-full-center">
    <div class="register__wrapper">
      <logo class="register__logo" />

      <h3 class="register__title">Registration form</h3>

      <n-form @submit.prevent="registerNewAccount">
        <n-form-item label="Email">
          <n-input v-model:value="email" />
        </n-form-item>

        <n-form-item label="Password">
          <n-input v-model:value="password" />
        </n-form-item>

        <n-button attr-type="submit" type="primary" :block="true"
          >Register</n-button
        >
      </n-form>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useAuthStore } from '@/stores/auth'

const router = useRouter()
const authStore = useAuthStore()

const email = ref('')
const password = ref('')

const registerNewAccount = async () => {
  const isRegistrationSuccess = await authStore.register(
    email.value,
    password.value
  )

  if (isRegistrationSuccess) router.push('/confirm-register')
}
</script>

<style scoped lang="sass">
.register
  height: 100vh

  &__wrapper
    display: flex
    flex-direction: column
    min-width: 320px

  &__logo
    align-self: center

  &__title
    text-align: center
</style>
