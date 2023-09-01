<template>
    <div id="burger-table">
        <div>
            <div id="burger-table-heading">
                <div class="order-id">#:</div>
                <div class="">Cliente:</div>
                <div class="">Pão:</div>
                <div class="">Carne</div>
                <div class="">Opcionais</div>
                <div class="">Ações</div>
            </div>
            <div id="burger-table-rows">
                <div class="burger-table-row" v-for="burger in burgers" :key="burger.id">
                    <div class="order-number">{{ burger.id }}</div>
                    <div>{{burger.nome}}</div>
                    <div>{{burger.pao}}</div>
                    <div>{{burger.carne}}</div>
                    <div>
                        <ul>
                            <li v-for="(opcional, index) in burger.opcionais" :key="index">{{ opcional }}</li>
                        </ul>
                    </div>
                    <div>
                        <select name="status" class="status" @change="updateBurger($event, burger.id)">
                            <option value="">Selecione</option>
                            <option v-for="s in status" :key="s.id" :value="s.tipo" :selected="burger.status == s.tipo">{{ s.tipo }}</option>
                        </select>
                    </div>
                    <button class="delete-btn" @click="deleteBurger(burger.id)">Cancelar</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Dashboard",//definindo o nome do componente
    data() { //todas as informações dinamicas e que vem do BD
        return {
            burgers: null,
            burgers_id: null,
            status: []
        }
    },
    methods: {
        async getPedidos() { //aqui busca no banco de dados os burger e devolve na variavél de data()
            const req = await fetch("http://localhost:3000/burgers");
            const data = await req.json();

            this.burgers = data;

            this.getStatus();
        },
        async getStatus() { //aqui recuperamos o status
            const req = await fetch("http://localhost:3000/status");
            const data = await req.json();

            this.status = data;
        },
        async deleteBurger(id) { //função para deletar
            const req = await fetch("http://localhost:3000/burgers/"+id, {
                method: "DELETE" //metodo de deletar é DELETE
            });
            const res = await req.json();

            //msg

            this.getPedidos(); //aqui chamamos a primeira função para atualizar a lista
        },
        async updateBurger(event, id) { //função para atualizar informações
            const option = event.target.value;

            const dataJson = JSON.stringify({ status: option}); //stringify é para transformar a const em json

            const req = await fetch("http://localhost:3000/burgers/"+id, {
                method: "PATCH", //methodo aqui é PATCH
                headers: {"Content-Type": "application/json"},
                body: dataJson
            });

            const res = await req.json();
        }
    },
    mounted() { //Definimos aqui tudo que faz parte do lyfecicle, ao iniciar a aplicação vai ser carregada a função abaixo
        this.getPedidos();
    }
}
</script>

<style scoped>
    #burger-table {
    max-width: 1200px;
    margin: 0 auto;
  }

  #burger-table-heading,
  #burger-table-rows,
  .burger-table-row {
    display: flex;
    flex-wrap: wrap;
  }

  #burger-table-heading {
    font-weight: bold;
    padding: 12px;
    border-bottom: 3px solid #333;
  }

  .burger-table-row {
    width: 100%;
    padding: 12px;
    border-bottom: 1px solid #CCC;
  }

  #burger-table-heading div,
  .burger-table-row div {
    width: 17%;
  }

  #burger-table-heading .order-id,
  .burger-table-row .order-number {
    width: 5%;
  }

  select {
    padding: 12px 6px;
    margin-right: 12px;
  }

  .delete-btn {
    background-color: #222;
    color:#fcba03;
    font-weight: bold;
    border: 2px solid #222;
    padding: 10px;
    font-size: 16px;
    margin: 0 auto;
    cursor: pointer;
    transition: .5s;
  }
  
  .delete-btn:hover {
    background-color: transparent;
    color: #222;
  }
</style>