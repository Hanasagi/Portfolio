<template>
  <div class="notfound">
      <h1>Cette page n'existe pas.</h1>
      <button>Retourner sur la page d'accueil</button>
  </div>
</template>


<script>
export default {
  name: "PageNotFound",
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.notfound{
    width:100vw;
    height:100vh;
    display: flex;
    flex-direction:column;
    justify-content: center;
    align-items: center;
}
.notfound h1{
    font-family:'Manrope';
    font-size:4vmax;
    margin:0;
}
.notfound button{
     padding: 1vw;
  font-size: 2vw;
  margin: 1vw;
  font-size:2vmax;
  background: none;
  font-family: "Raleway", sans-serif;
  text-transform: uppercase;
  cursor: pointer;
  border: 1px solid var(--first-color);
  color: var(--first-color);
   transition: background 0.2s ease-in, box-shadow 0.2s ease-in,
    color 0.2s ease-in;
}
.notfound button:hover,
.notfound button:focus {
  color: white;
  background: var(--first-color);
  box-shadow: 0 0 0.5vw var(--first-color), 0 0 1.2vw var(--first-color),
    0 0 2.5vw var(--first-color);
  -moz-box-shadow: 0 0 0.5vw var(--first-color), 0 0 1.2vw var(--first-color),
    0 0 2.5vw var(--first-color);
}
</style>
