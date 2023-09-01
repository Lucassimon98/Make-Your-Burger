<template>
    <div class="main-container">
      <h1>Cadastrar</h1>
      <CadastrarForm />
    </div>
  </template>
  
  <script>
  import CadastrarForm from '@/components/CadastrarForm.vue';
  
  export default {
    name: 'Cadastrar',
    components: {
        CadastrarForm
    }
  }
  
  </script>
  