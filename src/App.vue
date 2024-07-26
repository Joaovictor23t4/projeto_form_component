<script setup>
import { useValidationStore } from './stores/validation';
import { useUserStore } from './stores/user';
import DisplayProfile from './components/DisplayProfile.vue';
import EditProfile from './components/EditProfile.vue';
import Loading from './components/global/LoadingSpinner.vue';

const { state } = useValidationStore();
const useUser = useUserStore();
</script>

<template>
  <div class="main-container">
    <div class="container-description">
      <h1 class="title">
        {{ useUser.showProfile === true ? 'Obrigado por logar' : 'Cadastrar-se' }}
      </h1>
      <h2 class="subtitle">Serei eternamente grato pelo seu cadastro &#10084;</h2>
    </div>
    <Loading v-if="state.isLoading" />
    <DisplayProfile v-if="useUser.showProfile === true && state.isLoading === false" />
    <EditProfile v-else-if="useUser.showProfile === false && state.isLoading === false" />
  </div>
</template>

<style>
.main-container {
  width: 100%;
  height: 100vh;
  background-color: #f1f1f1;
}
.container-description {
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 45%;
  background: rgb(2, 0, 36);
  background: linear-gradient(
    160deg,
    rgba(2, 0, 36, 1) 0%,
    rgba(37, 165, 247, 1) 0%,
    rgba(16, 16, 199, 1) 100%
  );
}
.title {
  margin-top: 50px;
  font-size: 2.5rem;
  color: #fdfdfd;
}
.subtitle {
  width: 700px;
  line-height: 1.5em;
  letter-spacing: 0.05em;
  margin-top: 10px;
  font-size: 1.2rem;
  font-weight: 400;
  text-align: center;
  color: #fcf2f2;
}
</style>
