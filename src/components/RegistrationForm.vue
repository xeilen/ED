<template>
  <div class="register flex-full-center">
    <pre>{{ model }}</pre>
    <div class="register__wrapper">
      <logo class="register__logo" />

      <h3 class="register__title">Registration form</h3>

      <n-form @submit.prevent="registerNewAccount">
        <n-form-item label="Organization name">
          <n-input v-model:value="model.organization_name" />
        </n-form-item>

        <n-form-item label="Organization type">
          <n-select
            v-model:value="model.organization_type"
            :options="organizationTypes"
          />
        </n-form-item>

        <n-form-item label="Email">
          <n-input v-model:value="model.email" />
        </n-form-item>

        <n-form-item label="Fist name">
          <n-input v-model:value="model.first_name" />
        </n-form-item>

        <n-form-item label="Last name">
          <n-input v-model:value="model.last_name" />
        </n-form-item>

        <n-form-item label="Phone number">
          <n-input v-model:value="model.phone_number" />
        </n-form-item>

        <n-form-item label="Password">
          <n-input v-model:value="model.password" />
        </n-form-item>

        <n-button attr-type="submit" type="primary" :block="true"
          >Register</n-button
        >
      </n-form>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue'
import { useRouter } from 'vue-router'
import { useAuthStore } from '@/stores/auth'

const router = useRouter()
const authStore = useAuthStore()

const model = reactive({
  email: '',
  password: '',
  first_name: '',
  last_name: '',
  phone_number: '',
  organization_name: '',
  organization_type: null,
})

const organizationTypes = [
  {
    label: "I'm selling",
    value: 'client',
  },
  {
    label: "I'm provider",
    value: 'provider',
  },
  {
    label: 'root',
    value: 'root',
  },
]

const registerNewAccount = async () => {
  const isRegistrationSuccess = await authStore.register(model)

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
