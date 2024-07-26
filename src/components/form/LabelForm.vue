<script setup>
defineProps({
  text: {
    type: String
  },
  forId: {
    type: String
  }
})
</script>

<template>
  <label :for="forId">{{ text }}</label>
</template>

<style scoped>
label {
  display: block;
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 15px;
  color: #3a3838;
}
</style>
