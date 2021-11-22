<template>
  <router-view/>
</template>

<script type="text/javascript">
  export default{
    name:'App',
    created() {
      const html = document.documentElement // returns the html tag
      html.setAttribute('lang', 'fr')
    }
  }
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Montserrat&display=swap');
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin: 0;
}
</style>
