<template>
  <Page/>
</template>

<script>
import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'
import Page from './components/Page.vue'

export default {
  name: 'App',
  components: {
    Page
  }
}
</script>

<style>

body::-webkit-scrollbar {
  display: none;
}
</style>
