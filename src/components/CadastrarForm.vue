<template>
    <div>
        <Message :msg="msg" v-show="msg" />
        <div>
            <form id="user-form" @submit="createUser">
                <div class="input-container">
                    <label for="nome">Nome</label>
                    <input type="text" id="nome" name="nome" v-model="nome" placeholder="Digite seu nome">
                </div>
                <div class="input-container">
                    <label for="sobrenome">Sobrenome</label>
                    <input type="text" id="sobrenome" name="sobrenome" v-model="sobrenome" placeholder="Digite seu sobrenome">
                </div>
                <div class="input-container">
                    <label for="email">Email</label>
                    <input type="text" id="email" name="email" v-model="email" placeholder="Digite seu email">
                </div>
                <div class="input-container">
                    <label for="senha">Senha</label>
                    <input type="text" id="senha" name="senha" v-model="senha" placeholder="Digite sua senha">
                </div>
                <div class="input-container">
                    <input type="submit" class="submit-btn" value="Cadastrar">
                </div>
            </form>
        </div>
    </div>
</template>

<script>
import Message from './Message.vue';
export default {
    name: 'CadastrarForm',
    components: {
        Message
    },
    data(){//todas as informações dinamicas da aplicação
        return {
            nome: null,
            sobrenome: null,
            email: null,
            senha: null,
            msg: null
        }
    },
    methods: { //funções ficam nessa parte
        async createUser(e) { //aqui criamos o usuario assim qu eo formulario sofre um @submit
            e.preventDefault()

            const data = { //passando para a const data
                nome: this.nome,
                sobrenome: this.sobrenome,
                email: this.email,
                senha: this.senha
            }

            const dataJson = JSON.stringify(data); //transformando em JSON

            const req = await fetch("http://localhost:3000/usuario", { //enviando para o banco como json
                method: "POST",
                headers: { "Content-type": "application/json"},
                body: dataJson
            });

                
            const res = await req.json();

            this.msg = 'Usuário Cadastrado'

            setTimeout(() => window.location.href = "/", 3000)

            

            this.nome = "";
            this.sobrenome = "";
            this.email = "";
            this.senha = ""; 
        }
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