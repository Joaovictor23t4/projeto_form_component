import { ref, reactive, watch } from 'vue'
import { useValidationStore } from './validation'
import axios from 'axios'
import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', () => {
  const user = reactive({
    name: '',
    email: '',
    password: '',
    confirm_password: '',
    date_birth: '',
    state: 'Selecione um estado',
    city: 'Selecione uma cidade',
    neighbourhood: '',
    street: '',
    number: '',
    cep: '',
    hobbies: '',
    github: '',
    photo: '',
    language: '',
    biography: ''
  });

  const useValidation = useValidationStore();

  const showProfile = ref(false);

  const listCities = ref([])
  
  watch(() => user.state, async () => {
    try {
      const { data } = await axios.get(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${user.state}/municipios`)
      listCities.value = data
    } catch (error) {
      console.error(error)
    }
  }
);

let userSave = localStorage.getItem('user');

if (userSave) {
    userSave = JSON.parse(userSave);
    const properties = Object.keys(user);
    for (let property of properties) {
      user[property] = userSave[property]
    }
    showProfile.value = true;
}

function changeView() {
  useValidation.state.isLoading = true;
  setTimeout(() => {
    showProfile.value = !showProfile.value;
    useValidation.state.isLoading = false;
  }, 1500);
}

return { user, listCities, showProfile, changeView }
})