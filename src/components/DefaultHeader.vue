<template>
  <header class="flex justify-center items-center px-8 border-b">
    <div class="flex justify-between gap-2 items-center text-sm font-rubik text-zinc-700 tracking-wider pr-8 h-full w-full truncate">
      <div class="flex items-center gap-4">
        <img src="../assets/images/viper.finance-logo.png" class="w-10 rotate-12 opacity-80">
        <span class="capitalize truncate">Olá, <strong class="text-purple-600">{{ data.name.split(' ').slice(0, 2).join(' ') }}</strong>!</span>
      </div>
      
      <div class="flex text-zinc-600 h-full">
        <button class="gap-2 px-4 h-full flex justify-center items-center border-b border-transparent hover:bg-zinc-50 hover:border-purple-400 transition duration-200">
          <i class='bx bx-cog text-xl'></i>
          <span>Configurações</span>
        </button>
        
        <button class="gap-2 px-4 py-1 flex justify-center items-center border-b border-transparent hover:bg-zinc-50 hover:border-purple-400 transition duration-200"  @click="logout">
          <i class='bx bx-log-out-circle text-xl'></i>
          <span>Sair</span>
        </button>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  props: {
    data: { required: true }
  },
  methods: {
    logout() {
      localStorage.removeItem('JWT')
      localStorage.removeItem('USER')

      this.$router.push('/signin')
    }
  }
}
</script>
