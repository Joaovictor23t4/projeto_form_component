<script setup>
import { useUserStore } from '@/stores/user';

const useUser = useUserStore();
</script>

<template>
    <button type="button" class="buttonSignIn" @click="useUser.changeView()">Editar informações</button>
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