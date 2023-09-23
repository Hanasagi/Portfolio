<template>
  <router-view/>
</template>

<style>
@import "./components/css/theme.css";

:root{
  --background:#FFF5FD;
  --main-text-color:#191308;
  --main-text-color-accent:#6F7FC9;
  --main-text-color-highlight:#FF8C42;
  --background-accent-transparent:rgba(111,127,201,0.8);
--font-size-xsm: clamp(0.8rem, 0.39vw + 0.7rem, 1.64rem);
--font-size-sm: clamp(0.8rem, 0.94vw + 0.57rem, 2.81rem);
--font-size-base: clamp(1rem, 1.28vw + 0.68rem, 3.75rem);
--font-size-md: clamp(1.25rem, 1.74vw + 0.81rem, 5rem);
--font-size-lg: clamp(1.56rem, 2.37vw + 0.97rem, 6.66rem);
--font-size-xl: clamp(1.95rem, 3.22vw + 1.15rem, 8.88rem);
--font-size-xxl: clamp(2.44rem, 4.37vw + 1.35rem, 11.84rem);
--font-size-xxxl: clamp(3.05rem, 5.92vw + 1.57rem, 15.78rem);
}

html{
  scroll-behavior: smooth;
}
body {
  background-color:var(--background);
  overflow-x:hidden;
  overflow:hidden;
  overflow-y: scroll;
}


#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height:100vh;
}
/*
  1. Use a more-intuitive box-sizing model.
*/
*, *::before, *::after {
  box-sizing: border-box;
}

/*
  2. Remove default margin
*/
* {
  margin: 0;
  padding:0;
}
/*
  Typographic tweaks!
  3. Add accessible line-height
  4. Improve text rendering
*/
body {
  line-height: 1.5;
  -webkit-font-smoothing: antialiased;
}
/*
  5. Improve media defaults
*/
img, picture, video, canvas, svg {
  display: block;
  max-width: 100%;
}
/*
  6. Remove built-in form typography styles
*/
input, button, textarea, select {
  font: inherit;
}
/*
  7. Avoid text overflows
*/
p, h1, h2, h3, h4, h5, h6 {
  overflow-wrap: break-word;
}
/*
  8. Create a root stacking context
*/
#root, #__next {
  isolation: isolate;
}
</style>
