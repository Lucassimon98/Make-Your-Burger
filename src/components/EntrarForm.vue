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
import Message from './Message.vue';
export default {
    name: 'EntrarForm',
    data(){
        return {
            email: null,
            senha: null,
            msg: null
        }
    },
    components: {
        Message
    },
    methods: {
        async entrarUser() {

            const req = await fetch("http://localhost:3000/usuario");
            const data = await req.json();
            
            const dataES = {
                email: this.email,
                senha: this.senha
            }
            
            let bEmail = false;
            let bSenha = false;

            data.forEach(email => {
                if(email.email == dataES.email) {
                    bEmail = true
                } else {
                    bEmail = false
                }
            });
            data.forEach(senha => {
                if(senha.senha == dataES.senha) {
                    bSenha = true
                } else {
                    bSenha = false
                }
            });

            if(bEmail != false && bSenha != false) {
                window.location = "/criar-pedidos"
            } else {
                window.location = "/entrar"
            }
        },
    }, 
    mounted() {
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