<template>
  <router-view/>
</template>

<style>
  @import './fonts.css';
  @import './theme.css';
  html{
    scroll-behavior: smooth;
  }
  *{
    box-sizing: border-box;
    user-select: none;
  }
  html{
    scroll-snap-type: y mandatory;
  }
  a{
    color: unset;
    text-decoration: none;
  }
  body{
    margin: 0;
    background: var(--background-color);
    overflow-y: scroll;
    overflow-x: hidden;
    
  }
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  color: white;
}
::-webkit-scrollbar{
  width:1vw;
}
::-webkit-scrollbar-thumb{
  background:linear-gradient(to bottom, var(--first-color) 0%, var(--second-color) 100%);
  border-radius:2vw;
}
</style>
