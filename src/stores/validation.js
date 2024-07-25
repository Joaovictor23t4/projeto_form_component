import { reactive } from 'vue';
import { useUserStore } from './user';
import { defineStore } from 'pinia';

export const useValidationStore = defineStore('validation', () => {
  const state = reactive({
    isLogged: false,
    isLoading: false
  });

  const useUser = useUserStore();

  const inputValidations = reactive({
    name: { validated: false, message: '' },
    email: { validated: false, message: '' },
    password: { validated: false, message: '' },
    confirm_password: { validated: false, message: '' },
    date_birth: { validated: false, message: '' },
    state: { validated: false, message: '' },
    city: { validated: false, message: '' },
    neighbourhood: { validated: false, message: '' },
    street: { validated: false, message: '' },
    number: { validated: false, message: '' },
    cep: { validated: false, message: '' },
    hobbies: { validated: false, message: '' },
    github: { validated: false, message: '' },
    language: { validated: false, message: '' },
    biography: { validated: false, message: '' }
  });
  
  const validatedLettersOnly = (id, value) => {
    const regex = /^[À-Úà-ú\w ]+$/;
    inputValidations[id].validated = regex.test(value);
    if (!inputValidations[id].validated) {
      inputValidations[id].message = 'Este campo deve conter somente letras!';
    };
  };

  function validationSubmit() {
    alert('SignIn')
  }

  return { state, inputValidations, validationSubmit }
})
