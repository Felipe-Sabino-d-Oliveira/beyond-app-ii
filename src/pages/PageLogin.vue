<template>
  <v-container>
    <v-card
      class="cartao_login d-flex  align-center justify-center"
      elevation="5"
      rounded="lg"
      width="calc(50% + 75px)"
      height="calc(25% + 75px)"
      
    >
      <v-form class=" d-flex flex-column align-center justify-center">
        <h1>LOGIN</h1>
        <v-text-field
          v-model="email"
          :error-messages="emailErrors"
          label="E-mail"
          required
          @input="$v.email.$touch()"
          @blur="$v.email.$touch()"
        >
        </v-text-field>
        <v-text-field
          v-model="password"
          :error-messages="passwordErrors"
          label="Senha"
          type="password"
          required
          @input="$v.password.$touch()"
          @blur="$v.password.$touch()"
        >
        </v-text-field>
          <v-btn class="mr-4" v-on:click="login()"> Entrar </v-btn>
          <router-link to="cadastro">Não tem uma conta?</router-link>

      </v-form>
    </v-card>
  </v-container>
</template>

<script>
import { required, email } from "vuelidate/lib/validators";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

export default {
  name: "Login",
  data: () => ({
    email: "",
    password: "",
    emailErrors: [],
    passwordErrors: [],
  }),
  validations: {
    email: { required, email },
    password: { required },
  },
  methods: {
    async login() {
      try {
        const auth = getAuth();
        await signInWithEmailAndPassword(auth, this.email, this.password);
        alert("Login realizado!");
        this.mail = "";
        this.password = "";
        // Redirecionar para a página de início
        this.$router.push("/home");
      } catch (error) {
        alert("Erro ao realizar login:", error.message);
        console.error("Erro ao realizar login:", error.message);
      }
    },
  },
  computed: {
    isLoggedIn() {
      return this.$store.getters["auth/isLoggedIn"];
    },
  },
};
</script>

<style>

.cartao_login{
  background: radial-gradient(circle at 12.3% 19.3%, rgb(85, 88, 218) 0%, rgb(95, 209, 249) 100.2%);
}
</style>