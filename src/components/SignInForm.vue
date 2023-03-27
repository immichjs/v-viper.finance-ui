<template>
  <section class="flex flex-col gap-6 bg-slate-50 w-80 sm:w-96 h-96 rounded px-6 pt-6 pb-6 font-rubik">
    <div class="flex flex-col justify-center items-center gap-2">
      <img src="../assets/images/viper.finance-logo.png" class="w-11 opacity-80 rotate-12">
      <h1 class="text-sm font-medium text-zinc-900 uppercase">Viper.Finance</h1>
    </div>

    <form class="flex flex-col items-center box-border h-full" @submit.prevent="submitSignIn">
      <div class=" flex w-full flex-col gap-4">
        <div class="flex">
          <div
            class="text-xl w-12 h-full flex items-center justify-center text-zinc-500 bg-zinc-200 border border-zinc-200 rounded-tl rounded-bl">
            <i class='bx bx-envelope'></i>
          </div>
          <input type="email"
            class="w-full font-medium tracking-widest text-xs bg-slate-50 rounded-tr rounded-br focus:bg-zinc-100 outline-none border transition duration-200 p-3 hover:bg-zinc-100 placeholder:font-light"
            placeholder="Email" v-model="credentials.email">
        </div>
        <div class="flex justify-center items-center">
          <div
            class="text-xl w-12 h-full flex items-center justify-center text-zinc-500 bg-zinc-200 border border-zinc-200 rounded-tl rounded-bl">
            <i class='bx bx-lock-alt'></i>
          </div>
          <input :type="passwordType"
            class="w-full font-medium tracking-widest text-xs bg-slate-50 rounded-tr rounded-br focus:bg-zinc-100 outline-none border transition duration-200 p-3 hover:bg-zinc-100 placeholder:font-light"
            placeholder="Senha" v-model="credentials.password">
        </div>
        <div class="w-full flex justify-end gap-1 text-xs">
          <input id="showPassword" type="checkbox" class="w-4 h-4 accent-purple-600" v-model="passwordInputType">
          <label for="showPassword">Mostrar senha</label>
        </div>
      </div>

      <div class="w-full mt-auto flex justify-between items-center" v-if="!loading">
        <div class="flex flex-col">
          <routerLink class="hover:underline text-xs text-zinc-500 hover:text-purple-600"
            to="/authentication/signup">Não tenho cadastro</routerLink>
          <router-link to="" class="hover:underline text-xs text-zinc-500 cursor-not-allowed">Esqueci minha senha</router-link>
        </div>

        <button
          class="flex justify-center items-center w-32 transition ease-in-out duration-300 text-slate-50 p-3 rounded mt-auto uppercase font-medium text-xs bg-purple-600 hover:bg-purple-700 cursor-pointer disabled:cursor-not-allowed tracking-wider"
          :disabled="!credentials.email || !credentials.password">
          Entrar
        </button>
      </div>
      <img src="../assets/images/viper.finance-loading.png" class="w-8 rotate animate-spin mt-auto" v-else>
    </form>
  </section>

</template>

<script>
import { axios } from '../configs/axios'

export default {
  data() {
    return {
      user: null,
      credentials: {},
      passwordInputType: false,
      loading: false
    }
  },
  computed: {
    passwordType() {
      return this.passwordInputType ? 'text' : 'password'
    }
  },
  methods: {
    async submitSignIn() {
      if (!this.credentials.email || !this.credentials.password) {
        window.alert('Preencha todos os campos.')
        return
      }
      
      this.loading = true

      const user = await axios
        .post('/auth/signin', this.credentials)
        .then(({ data }) => {
          if (data.id) return data
        }).catch(({ response }) => {
          alert(response.data.message)
          this.loading = false
          this.credentials.password = ''
        })
        
      if (user) {
        const { token: jwt } = user
        user.token = undefined

        localStorage.setItem('JWT', jwt)
        localStorage.setItem('USER', JSON.stringify(user))

        this.credentials = {}
        this.loading = false
        this.$router.push('/')
      }
    }
  }
}
</script>
