<script setup>
import { useValidationStore } from '@/stores/validation';
const isLogged = useValidationStore().state.isLogged;
</script>

<template>
  <button v-if="isLogged" type="submit" class="buttonSignIn">Salvar alterações</button>
  <input v-else type="submit" class="buttonSignIn" value="Cadastrar-se" />
</template>

<style scoped>
.buttonSignIn {
  width: 250px;
  padding: 20px;
  margin-top: 20px;
  color: #fff;
  font-size: 1rem;
  font-weight: bold;
  background: rgb(2, 0, 36);
  background: linear-gradient(
    160deg,
    rgba(2, 0, 36, 1) 0%,
    rgba(37, 165, 247, 1) 0%,
    rgba(16, 16, 199, 1) 100%
  );
  border: none;
  border-radius: 3px;
  outline: none;
  cursor: pointer;
}
</style>
