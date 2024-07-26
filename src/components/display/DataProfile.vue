<script setup>
defineProps({
    user: {
        type: Object,
        required: true
    }
})
</script>

<template>
    <div class="container-data">
        <p><strong>Nome:</strong> {{ user.name }}</p>
        <p><strong>Email:</strong> {{ user.email }}</p>
        <p><strong>Senha:</strong> {{ user.password }}</p>
        <p><strong>Data de Nascimento:</strong> {{ user.date_birth }}</p>
        <p><strong>Estado:</strong> {{ user.state }}</p>
        <p><strong>Cidade:</strong> {{ user.city }}</p>
        <p><strong>Bairro:</strong> {{ user.neighbourhood }}</p>
        <p><strong>Rua:</strong> {{ user.street }}</p>
        <p><strong>Número:</strong> {{ user.number }}</p>
        <p><strong>CEP:</strong> {{ user.cep }}</p>
        <p><strong>Hobbies:</strong> {{ user.hobbies }}</p>
        <p><strong>Github:</strong> {{ user.github }}</p>
        <p><strong>Linguagem de Programação:</strong> {{ user.language }}</p>
        <p><strong>Biografia:</strong> {{ user.biography }}</p>
    </div>
</template>

<style scoped>
p {
  margin: 0 0 15px 120px;
}
</style>