<template>
    <Welcome @changeCurrent="changeComponent" v-if="currentProps==='welcome'"/>
    <Home @changeCurrent="changeComponent" v-if="currentProps==='home'"/>
    <Project @changeCurrent="changeComponent" v-if="currentProps==='project'"/>
</template>

<script type="text/javascript">
  import Home from './components/Home'
  import Welcome from './components/Welcome'
  import Project from './components/Project'

    export default{
    name:'App',
  props: {
    current:{
      type: String,
      required:true,
      default:"welcome"
    }
  },
  data(){
    return{
      currentProps: this.current,
    }
    
  },
  components:{
    Home, Welcome, Project
  },
  methods:{
    changeComponent(component){
      this.currentProps=component
    }
  }
  }
</script>

<style lang="scss">
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin: 0;
}
.height-enter-active, .height-leave-active {
  transition: height 1s;
}
.height-enter, .height-leave-to /* .fade-leave-active below version 2.1.8 */ {
  height: 0;
}
.fade-enter-active, .fade-leave-active {
  transition: opacity 1s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
