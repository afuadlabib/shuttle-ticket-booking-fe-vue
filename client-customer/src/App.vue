<script>
import { mapWritableState } from 'pinia';
import NavBarBase from './components/NavBarBase.vue'
import LoginPage from './views/LoginPage.vue'
import { useTravelState } from './stores/travel';

export default {
  name: 'App',
  components: {
    NavBarBase,
    LoginPage
  },
  computed:{
    ...mapWritableState(useTravelState, ['isLogin'])
  },
  created(){
    if(localStorage.access_token){
      this.isLogin = true
    }
  }
}
</script>

<template>
  <div class="flex flex-wrap h-screen w-screen">
    <section class="relative mx-auto max-w-full">
      <NavBarBase />
      <RouterView />
    </section>
  </div>
</template>

<style scoped></style>
