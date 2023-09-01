<template>
    <div>
        <Message :msg="msg" v-show="msg" />
        <div>
            <form id="user-form">
                <div class="input-container">
                    <label for="email">Email</label>
                    <input type="text" id="email" name="email" v-model="email" placeholder="Digite seu email">
                </div>
                <div class="input-container">
                    <label for="senha">Senha</label>
                    <input type="text" id="senha" name="senha" v-model="senha" placeholder="Digite sua senha">
                </div>
                <div class="input-container">
                    <input @click="entrarUser()" type="button" class="submit-btn" value="Entrar">
                </div>
            </form>
        </div>
    </div>
</template>

<script>

//Aqui usamos o componente mensagem recebido em data

import Message from './Message.vue';
export default {
    name: 'EntrarForm',
    //na parte de data informamos todos os valores dinamicos da aplicação
    data(){
        return {
            email: null,
            senha: null,
            msg: null
        }
    },//Aqui são os componentes usados na aplicação
    components: {
        Message
    },//Aqui é criado os metodos ou funções
    methods: {
        async entrarUser() {

            const req = await fetch("http://localhost:3000/usuario");//aqui é a request para o banco
            const data = await req.json();//aqui recebemos a request e passamos o json para a const data
            
            const dataES = { //aqui eu criei a const dataES para receber os valores do que foi definico que vem do front
                email: this.email,
                senha: this.senha
            }
            
            let bEmail = false;//criação de variaveis
            let bSenha = false;

            data.forEach(email => { //aqui eu pego informações do email que vem do banco e verifico com as do sistema para retornar um boolean
                if(email.email == dataES.email) {
                    bEmail = true
                } else {
                    bEmail = false
                }
            });
            data.forEach(senha => {//aqui eu pego informações do email que vem do banco e verifico com as do sistema para retornar um boolean
                if(senha.senha == dataES.senha) {
                    bSenha = true
                } else {
                    bSenha = false
                }
            });

            if(bEmail != false && bSenha != false) {//os booleans retornados passam por essa verificação para autorizar ou não o acesso.
                window.location = "/criar-pedidos"
            } else {
                window.location = "/entrar"
            }
        },
    }, 
    mounted() {//aqui faz parte do lyfecicle da aplicação onde posso definir funções para iniciar junto com a aplicação
    }
}
</script>

<style scoped>
    #user-form {
        max-width: 400px;
        margin: 0 auto;
    }

    .input-container {
        display: flex;
        flex-direction: column;
        margin-bottom: 20px;
    }

    label {
        font-weight: bold;
        margin-bottom: 15px;
        color: #222;
        padding: 5px 10px;
        border-left: 4px solid #fcba03;
    }

    input, select {
        padding: 5px 10px;
        width: 300px;
    }
    .submit-btn {
        background-color: #222;
        color: #fcba03;
        font-weight: bold;
        border: 2px solid #222;
        padding: 10px;
        font-size: 16px;
        margin: 0 auto;
        cursor: pointer;
    }

    .submit-btn:hover {
        background: transparent;
        color: #222;
    }
</style>