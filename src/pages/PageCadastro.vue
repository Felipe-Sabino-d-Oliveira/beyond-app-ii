<template>
  <v-container class="d-flex justify-center align-center">
      <v-card dark class="card__cadastro d-flex flex-column justify-center align-center" width="500" height="550">
          <h1>CADASTRO</h1>
          <v-form class="formulario__cadastro">
              <v-text-field v-model="registerEmail" :error-messages="emailErrors" label="E-mail" required
                  @input="$v.email.$touch()" @blur="$v.email.$touch()">
              </v-text-field>
              <v-text-field v-model="registerPassword" :error-messages="passwordErrors" label="Senha" type="password"
                  required @input="$v.password.$touch()" @blur="$v.password.$touch()">
              </v-text-field>
              <div class="d-flex justify-center">
                  <v-btn light class="mr-4 align-self-center" v-on:click="register()">
                      cadastrar
                  </v-btn>
                  <router-link to="/">
                      <v-btn light class="mr-4 align-self-center">
                          <v-icon>
                              {{ icons.mdiArrowLeft }}
                          </v-icon>
                      </v-btn>
                  </router-link>
              </div>
          </v-form>
      </v-card>
  </v-container>
</template>

<script>
import { mdiArrowLeft } from '@mdi/js';
import { required, email } from 'vuelidate/lib/validators'
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth'
import { app } from '../config/index'

export default {
  name: 'PageCadastro',
  data: () => ({
      emailErrors: [],
      passwordErrors: [],
      registerEmail: '',
      registerPassword: '',
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
              await createUserWithEmailAndPassword(auth, registerEmail, registerPassword);
              alert('Usuário registrado com sucesso!');
              this.registerEmail = '';
              this.registerPassword = '';
              // Redirecionar para a página de login
              this.$router.push('/home');
          } catch (error) {
              alert('Erro ao registrar usuário:', error.message);
              console.error('Erro ao registrar usuário:', error.message);
          }
      },
  },
}
</script>


<style scoped>
/* classes comuns */
.container {
  max-width: 100%;
  height: 100% !important;
  background: var(--gradient-blue-3);
}

.card__cadastro {
  background: var(--gradient-blue-4);
  color: var(--color-white) !important;
}

.formulario__cadastro {
  width: 60%;
}
</style>