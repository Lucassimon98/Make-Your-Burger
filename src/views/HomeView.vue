<template>
    <div class="main-container">
        <div class="container">
            <h1>Tela HOME</h1>
            <div class="btn-action">
                <router-link to="/entrar">Entrar</router-link>
                <router-link to="/cadastrar">Cadastrar</router-link>
            </div>
        </div>
    </div>
  </template>
  
  <script>
  
  export default {
    name: 'Home',
  }
  
  </script>
  
  <style scoped>
    .main-container {
        text-align:center;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }
    .btn-action a{
        padding: 5px;
        background-color: blue;
        color: white;
        font-size: 16px;
        font-weight: bold;
        text-decoration: none;
        margin: 12px;
        transition: .5s;
    }
    .btn-action a:hover {
        background-color: transparent;
        color: #000;
    }
  </style>