<template>
  <div class="main-container">
    <h1>Gerenciar pedidos:</h1>
    <Dashboard />
  </div>
</template>

<script>
// Aqui é a piew de Pedidos onde temos o Dashboard importado
import Dashboard from '@/components/Dashboard.vue'
export default {
  components: { Dashboard },
  //a parte de name é para colocar o nome do componente
  name: "Pedidos"
}
</script>
