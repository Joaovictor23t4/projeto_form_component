import { reactive } from 'vue';
import axios from 'axios';
import { useUserStore } from './user';
import { defineStore } from 'pinia';

export const useValidationStore = defineStore('validation', () => {
  const state = reactive({
    isLogged: false,
    isLoading: true
  });

  const useUser = useUserStore();
  
  const inputValidations = reactive({
    name: { validated: true, message: '' },
    email: { validated: true, message: '' },
    password: { validated: true, message: '' },
    confirm_password: { validated: true, message: '' },
    date_birth: { validated: true, message: '' },
    state: { validated: true, message: '' },
    city: { validated: true, message: '' },
    neighbourhood: { validated: true, message: '' },
    street: { validated: true, message: '' },
    number: { validated: true, message: '' },
    cep: { validated: true, message: '' },
    hobbies: { validated: true, message: '' },
    github: { validated: true, message: '' },
    language: { validated: true, message: '' },
    biography: { validated: true, message: '' }
  });
  
  if (localStorage.getItem('isLogged')) {
    state.isLogged = Boolean(localStorage.getItem('isLogged'));
  } else {
    const properties = Object.keys(inputValidations);

    for (let propety of properties) {
      inputValidations[propety].validated = false;
    }
  };
  
  state.isLoading = false;

  const validateLettersOnly = (id) => {
    const regex = /^[A-Za-zÀ-ÖØ-öø-ÿ ]+$/;
    inputValidations[id].validated = regex.test(useUser.user[id]);
    inputValidations[id].message = '';

    if (!inputValidations[id].validated) {
      inputValidations[id].message = 'Este campo deve conter somente letras!';
    };
  };

  const validateEmail = () => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    inputValidations['email'].validated = regex.test(useUser.user['email']);
    inputValidations['email'].message = '';
    
    if (!inputValidations['email'].validated) {
      inputValidations['email'].message = 'Você deve inserir um email válido!';
    };
  };

  const validatePassword = () => {
    const regex = /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    inputValidations['password'].validated = regex.test(useUser.user['password']);
    inputValidations['password'].message = '';

    if (!inputValidations['password'].validated) {
      inputValidations['password'].message = 'Este campo deve conter no mínimo 8 dígitos, 1 letra Maiúscula, 1 letra minúscula, 1 número e 1 caractere especial (!@#&$%*)'
    }
  };

  const validateNumberOnly = (id) => {
    const regex = /^\d+$/;
    inputValidations[id].validated = regex.test(useUser.user[id]);
    inputValidations[id].message = '';
    
    if (!inputValidations[id].validated) {
      inputValidations[id].message = 'Este campo deve conter apenas números';
    };
  };

  const validatePasswordConfirmation = () => {
    inputValidations['confirm_password'].validated = useUser.user['password'] === useUser.user['confirm_password'];
    inputValidations['confirm_password'].message = '';
    
    if (!inputValidations['confirm_password'].validated) {
      inputValidations['confirm_password'].message = 'As senhas precisam ser iguais';
    };
  };

  const validateGithub = async () => {
    try {
      const { data } = await axios.get(`https://api.github.com/users/${useUser.user['github']}`);
      inputValidations['github'].validated = true;
      inputValidations['github'].message = '';

      useUser.user['photo'] = data['avatar_url'];
    } catch(error) {
      inputValidations['github'].validated = false;
      inputValidations['github'].message = 'Usuário do Github inexistente';
    }
  }

  async function validateInput(id) {
    if (id === 'name' || id === 'neighbourhood' ||id === 'street' || id === 'hobbies' || id === 'biography' || id === 'state' || id === 'city') {
      validateLettersOnly(id);
    }
    else if (id === 'email') {
      validateEmail();
    }
    else if (id === 'password') {
      validatePassword();
    }
    else if (id === 'confirm_password') {
      validatePasswordConfirmation();
    }
    else if (id === 'number' || id === 'cep') {
      validateNumberOnly(id);
    }
    else if (id === 'github') {
      validateGithub(id);
    }
    else if (id === 'date_birth') {
        if (useUser.user['date_birth']) {
          inputValidations['date_birth'].validated = true;
          inputValidations['date_birth'].message = '';
        }
        else {
          inputValidations['date_birth'].validated = false;
          inputValidations['date_birth'].message = 'Por favor, informe sua data de nascimento!';
        };
      }
      else {
        if (useUser.user['language']) {
          inputValidations['language'].validated = true;
          inputValidations['language'].message = '';
        }
        else {
          inputValidations['language'].validated = false;
          inputValidations['language'].message = 'Por favor, informe sua linguagem de programação preferida!';
        };
      };
    };
    function validateSubmit() {
      const properties = Object.keys(inputValidations);
      let isAllValidated = true;

      for (let property of properties) {
        if (!inputValidations[property].validated) {
          isAllValidated = false;
          break;
        };
      };

      if (isAllValidated) {
        localStorage.setItem('isLogged', true);
        localStorage.setItem('user', JSON.stringify(useUser.user));
        spinnerLoading();
      }
    };
  
    function spinnerLoading() {
      state.isLoading = true;
      setTimeout(() => {
        state.isLoading = false;
        state.isLogged = true;
        useUser.showProfile = true;
      }, 1500);
    }
  
    return { state, inputValidations, validateInput, validateSubmit, spinnerLoading }
  }
);
