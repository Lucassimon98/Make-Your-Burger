<template> 
  <Navbar :logo="logo_src" :alt="alt_descr" />
  <router-view/>
  <Footer />
</template>

<script>

//Tag Template é dentro dela que definimos noss corpo da página
// Estou definindo nele o NavBar importado abaixo e o footer
//na parte de Router-view é o corpo de tudo o resto

import Navbar from './components/Navbar.vue';
import Footer from './components/Footer.vue';

export default {
  //aqui colocamos os componentes importados para dizer o que o sistema tem que usar
  components: {
    Navbar,
    Footer
  },
  //data é o local onde colocamos todos os dados dinamicos da página
  data() {
    return {
      logo_src: "/img/logo.png",
      alt_descr: "Make Your Burger"
    }
  },
}
</script>

<style>
* {
  font-family: Arial, Helvetica, sans-serif;
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
.main-container {
  margin: 50px;
  height: 585px;
}
h1 {
  text-align: center;
  font-size: 42px;
  margin-bottom: 30px;
  color: #222;
}
</style>
