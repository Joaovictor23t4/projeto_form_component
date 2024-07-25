<script setup>
import { useValidationStore } from '@/stores/validation.js';
import Loading from './global/LoadingSpinner.vue'
import FormTemplate from './form/FormTemplate.vue'

const useValidation = useValidationStore();
</script>

<template>
  <div v-if="useValidation.state.isLoading === false" class="container-of-container-form">
    <div class="container-form">
        <FormTemplate />
    </div>
  </div>
  <Loading v-else />
</template>

<style scoped>
.container-of-container-form {
  position: relative;
  display: grid;
  justify-items: center;
  bottom: 100px;
}
.container-form {
  display: flex;
  justify-content: center;
  width: 40%;
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 0 16px rgba(0, 0, 0, 0.1);
}
</style>