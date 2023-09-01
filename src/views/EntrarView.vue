<template>
    <div class="main-container">
      <h1>Entrar</h1>
      <EntrarForm />
    </div>
  </template>
  
  <script>
  import EntrarForm from '@/components/EntrarForm.vue';
  
  export default {
    // definição do nome e do componente usado
    name: 'Entrar',
    components: {
        EntrarForm
    }
  }
  
  </script>
  