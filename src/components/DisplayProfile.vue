<script setup>
import { useUserStore } from '@/stores/user';
import DataProfile from './display/DataProfile.vue'
import ButtonEdit from './display/ButtonEdit.vue';

const useUser = useUserStore().user;
</script>

<template>
  <div class="main-container-display">
    <div class="container-of-container-profile">
      <div class="container-profile">
            <div class="container-photo">
              <img :src="useUser.photo" alt="" class="photo">
            </div>
            <DataProfile :user="useUser" />
            <div class="buttonSave">
              <ButtonEdit />
            </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.main-container-display {
  position: relative;
  display: grid;
  justify-items: center;
  bottom: 100px;
}
.container-of-container-profile {
  width: 30%;
  margin-bottom: 20px;
}
.container-profile {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  flex-direction: column;
  width: 100%;
  padding: 20px;
  border-radius: 8px;
  background: #fff;
  box-shadow: 0 0 16px rgba(0, 0, 0, 0.1);
}
.container-photo {
  display: flex;
  justify-content: center;
  margin-bottom: 30px;
}
.photo {
  width: 150px;
  border-radius: 50%;
}
.buttonSave {
  display: flex;
  justify-content: center;
}
@media (max-width: 1660px) {
  .container-of-container-profile {
    width: 40%;
  }
}
</style>