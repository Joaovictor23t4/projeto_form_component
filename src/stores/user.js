import { ref, reactive, watch } from 'vue'
import axios from 'axios'
import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', () => {
  const user = reactive({
    name: '',
    email: '',
    password: '',
    date_birth: '',
    state: 'Selecione um estado',
    city: 'Selecione uma cidade',
    neighbourhood: '',
    street: '',
    number: '',
    cep: '',
    hobbies: '',
    github: '',
    language: '',
    biography: ''
  })

  const listCities = ref([])

  watch(
    () => user.state,
    async () => {
      try {
        const { data } = await axios.get(
          `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${user.state}/municipios`
        )
        listCities.value = data
      } catch (error) {
        console.error(error)
      }
    }
  )

  return { user, listCities }
})
