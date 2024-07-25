<script setup>
import { useValidationStore } from '@/stores/validation'
import Label from './LabelForm.vue'
import Input from './InputForm.vue'
import SelectForm from './SelectForm.vue'
import ButtonSubmit from './ButtonSubmit.vue'

const useValidation = useValidationStore()

const inputInfo = [
  {
    id: 'name',
    text_label: 'Seu nome',
    type: 'text',
    placeholder: 'Escreva seu nome'
  },
  {
    id: 'email',
    text_label: 'Email',
    type: 'email',
    placeholder: 'email@example.com'
  },
  {
    id: 'password',
    text_label: 'Senha',
    type: 'password',
    placeholder: 'Senha1234@'
  },
  {
    id: 'confirm_password',
    text_label: 'Confirmar senha',
    type: 'password',
    placeholder: 'Repita sua senha'
  },
  {
    id: 'date_birth',
    text_label: 'Data de nascimento',
    type: 'date',
    placeholder: ''
  },
  {
    id: 'state',
    text_label: 'Estado',
    type: 'text',
    placeholder: 'Informe seu estado'
  },
  {
    id: 'city',
    text_label: 'Cidade',
    type: 'text',
    placeholder: 'Informe sua cidade'
  },
  {
    id: 'neighbourhood',
    text_label: 'Bairro',
    type: 'text',
    placeholder: 'Informe seu bairro'
  },
  {
    id: 'street',
    text_label: 'Rua',
    type: 'text',
    placeholder: 'Informe sua rua'
  },
  {
    id: 'number',
    text_label: 'Número',
    type: 'text',
    placeholder: 'Informe seu número'
  },
  {
    id: 'cep',
    text_label: 'CEP',
    type: 'text',
    placeholder: 'Informe seu CEP'
  },
  {
    id: 'hobbies',
    text_label: 'Hobbies',
    type: 'text',
    placeholder: 'Escreva um hobbie que você gosta'
  },
  {
    id: 'github',
    text_label: 'Github',
    type: 'text',
    placeholder: 'Escreva seu usuário do Github'
  },
  {
    id: 'language',
    text_label: 'Linguagem de Programação',
    type: 'text',
    placeholder: 'Escreva sua linguagem de programação favorita'
  },
  {
    id: 'biography',
    text_label: 'Biografia',
    type: 'textarea',
    placeholder: 'Escreva uma pequena biografia sua.'
  }
]
</script>

<template>
  <form @submit.prevent="useValidation.validateSubmit()" class="form_cadastro">
    <div class="container-inputs" v-for="(input, index) in inputInfo" :key="index">
      <div class="exception" v-if="index === 5">
        <Label :forId="input.id" :text="input.text_label" />
        <SelectForm type="state" />
      </div>

      <div class="exception" v-else-if="index === 6">
        <Label :forId="input.id" :text="input.text_label" />
        <SelectForm type="city" />
      </div>

      <div class="normal" v-else>
        <Label :forId="input.id" :text="input.text_label" />
        <Input :inputInfo="input" />
      </div>
    </div>
    <ButtonSubmit :isLogged="true ? useValidation.state.isLogged : false" />
  </form>
</template>

<style scoped>
.form_cadastro {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  column-gap: 35px;
  row-gap: 20px;
  width: 100%;
  height: 85%;
  padding: 60px 60px 60px 60px;
}
</style>
