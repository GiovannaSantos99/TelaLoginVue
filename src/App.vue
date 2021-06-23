<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>

import login from './view/login.vue'
import cadastro from './view/cadastro.vue'

export default {
  name: 'App',
  login,
  cadastro
}
</script>

