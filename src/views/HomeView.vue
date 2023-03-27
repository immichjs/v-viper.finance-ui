<template>
  <section class="home">
    <NavBar class="nav"/>
    <DefaultHeader class="header" :data="user"/>
    <MainBoard class="main"/>
  </section>
</template>

<script>
import DefaultHeader from '@/components/DefaultHeader.vue'
import MainBoard from '@/components/MainBoard.vue'
import NavBar from '@/components/NavBar.vue'

export default {
  name: 'HomeView',
  data() {
    return {
      user: null
    }
  },
  components: {
    NavBar,
    DefaultHeader,
    MainBoard
  },
  created() {
    this.user = JSON.parse(localStorage.getItem('USER'))
    this.user.name = this.user.name.toLowerCase()
    this.user.email = this.user.email.toLowerCase()
  }
}
</script>

<style>
.home {
  display: grid;
  grid-template-columns: 5rem;
  grid-template-rows: 4rem 1fr 1fr;
  grid-template-areas:
    "nav header"
    "nav main"
    "nav main"
    "nav main";
}

.nav {
  grid-area: nav;
}

.header {
  grid-area: header;
}

.main {
  grid-area: main;
}
</style>
