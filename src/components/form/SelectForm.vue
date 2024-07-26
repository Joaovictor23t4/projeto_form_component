<script setup>
import { useUserStore } from '@/stores/user';
import { useValidationStore } from '@/stores/validation';

defineProps(['type'])

const useUser = useUserStore();
const useValidation = useValidationStore();

const states = [
  { uf: 'AC', name: 'Acre' },
  { uf: 'AL', name: 'Alagoas' },
  { uf: 'AP', name: 'Amapá' },
  { uf: 'AM', name: 'Amazonas' },
  { uf: 'BA', name: 'Bahia' },
  { uf: 'CE', name: 'Ceará' },
  { uf: 'DF', name: 'Distrito Federal' },
  { uf: 'ES', name: 'Espírito Santo' },
  { uf: 'GO', name: 'Goiás' },
  { uf: 'MA', name: 'Maranhão' },
  { uf: 'MT', name: 'Mato Grosso' },
  { uf: 'MS', name: 'Mato Grosso do Sul' },
  { uf: 'MG', name: 'Minas Gerais' },
  { uf: 'PA', name: 'Pará' },
  { uf: 'PB', name: 'Paraíba' },
  { uf: 'PR', name: 'Paraná' },
  { uf: 'PE', name: 'Pernambuco' },
  { uf: 'PI', name: 'Piauí' },
  { uf: 'RJ', name: 'Rio de Janeiro' },
  { uf: 'RN', name: 'Rio Grande do Norte' },
  { uf: 'RS', name: 'Rio Grande do Sul' },
  { uf: 'RO', name: 'Rondônia' },
  { uf: 'RR', name: 'Roraima' },
  { uf: 'SC', name: 'Santa Catarina' },
  { uf: 'SP', name: 'São Paulo' },
  { uf: 'SE', name: 'Sergipe' },
  { uf: 'TO', name: 'Tocantins' }
]
</script>

<template>
  <select v-if="type === 'state'" :id="type" v-model="useUser.user.state" @change="useValidation.validateInput(type)">
    <option disabled value="Selecione um estado">Selecione um estado</option>
    <option v-for="(state, index) in states" :key="index" :value="state.uf">
      {{ state.name }}
    </option>
  </select>
  <select v-else :id="type" v-model="useUser.user.city" @change="useValidation.validateInput(type)">
    <option disabled value="Selecione uma cidade">Selecione uma cidade</option>
    <option v-for="(city, index) in useUser.listCities" :key="index" :value="city.nome">
      {{ city.nome }}
    </option>
  </select>
</template>

<style scoped>
#state,
#city {
  width: 300px;
  padding: 10px 20px 10px 20px;
  outline: none;
  font-size: 1.1rem;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-shadow: 0 0 2px rgba(0, 0, 0, 0.2);
  color: #4d4c4c;
}
</style>
