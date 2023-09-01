<template>
    <div class="main-container">
      <h1>Cadastrar</h1>
      <CadastrarForm />
    </div>
  </template>
  
  <script>
  import CadastrarForm from '@/components/CadastrarForm.vue';
  // definição do nome e do componente usado
  export default {
    name: 'Cadastrar',
    components: {
        CadastrarForm
    }
  }
  
  </script>
  