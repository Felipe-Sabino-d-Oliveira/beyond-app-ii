<template>
  <v-container>
    <section>
      <div>
        <div>
          <h1>CADASTRO</h1>
          <v-form>
            <v-text-field
              v-model="registerEmail"
              :error-messages="emailErrors"
              label="E-mail"
              required
              @input="$v.email.$touch()"
              @blur="$v.email.$touch()"
            >
            </v-text-field>
            <v-text-field
              v-model="registerPassword"
              :error-messages="passwordErrors"
              label="Senha"
              type="password"
              required
              @input="$v.password.$touch()"
              @blur="$v.password.$touch()"
            >
            </v-text-field>
            <div >
              <v-btn class="mr-4 botao" v-on:click="register()">
                cadastrar
              </v-btn>
              <router-link to="/">
                <v-btn class="mr-4 botao">
                  <v-icon>
                    {{ icons.mdiArrowLeft }}
                  </v-icon>
                </v-btn>
              </router-link>
            </div>
          </v-form>
        </div>
        <div>
          <img
            src="../assets/login.png"
            alt="imagem login"
          />
        </div>
      </div>
    </section>
  </v-container>
</template>

<script>
import { mdiArrowLeft } from "@mdi/js";
import { required, email } from "vuelidate/lib/validators";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { app } from "../config/index";

export default {
  name: "Cadastro",
  data: () => ({
    emailErrors: [],
    passwordErrors: [],
    registerEmail: "",
    registerPassword: "",
    icons: {
      mdiArrowLeft,
    },
  }),
  validations: {
    registerEmail: { required, email },
    registerPassword: { required },
  },
  methods: {
    async register() {
      // Use createUserWithEmailAndPassword for registration
      try {
        const { registerEmail, registerPassword } = this;
        const auth = getAuth(app);
        await createUserWithEmailAndPassword(
          auth,
          registerEmail,
          registerPassword
        );
        alert("Usuário registrado com sucesso!");
        this.registerEmail = "";
        this.registerPassword = "";
        // Redirecionar para a página de login
        this.$router.push("/");
      } catch (error) {
        alert("Erro ao registrar usuário:", error.message);
        console.error("Erro ao registrar usuário:", error.message);
      }
    },
  },
};
</script>

<style>
</style>
