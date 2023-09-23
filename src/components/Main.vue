<template>
  <div>
    <!-- ********************************************PC HEADER************************************************-->
    <header class="pc-header" style="display: none">
      <div class="head-wrapper">
        <div>
          <a ref="top" href="#Home"
            ><img src="@/assets/iconmonstr-caret-up-filled.svg" alt="top"
          /></a>
          <a ref="about" href="#About">A propos de moi</a>
          <a ref="illust" href="#Illust">Mes illustrations</a>
          <a ref="web" href="#Web">Mes projets web</a>
        </div>
        <div class="header-contact">
          <a href="https://www.instagram.com/kurosag1_">
            <img
              src="@/assets/iconmonstr-instagram-11.svg"
              alt="icon Instagram"
            />
          </a>
          <a href="https://twitter.com/PyroKuro">
            <img src="@/assets/iconmonstr-twitter-1.svg" alt="icon Twitter" />
          </a>
        </div>
      </div>
    </header>
    <!-- ********************************************MOBILE HEADER************************************************-->
    <header class="mobile-header" ref="mobileHeader">
      <div>
        <a ref="top" href="#Home"
          ><img src="@/assets/iconmonstr-caret-up-filled.svg" alt="top"
        /></a>
        <a ref="about" href="#About">A propos</a>
        <a ref="illust" href="#Illust">illustrations</a>
        <a ref="web" href="#Web">projets web</a>
        <div class="mobile-contact">
          <a href="https://www.instagram.com/kurosag1_">
            <img
              src="@/assets/iconmonstr-instagram-11.svg"
              alt="icon Instagram"
            />
          </a>
          <a href="https://twitter.com/PyroKuro">
            <img src="@/assets/iconmonstr-twitter-1.svg" alt="icon Twitter" />
          </a>
        </div>
      </div>
    </header>
    <main>
      <section id="Home">
        <h1>bonjour</h1>
        <h2>Je m'appelle <span>Quentin LEVENARD.</span></h2>
      </section>
      <section id="About">
        <div>
          <div class="text-background"></div>
          <h3>A propos <span>de moi.</span></h3>
        </div>
        <p>
          D'aussi loin que je me souvienne, j'ai toujours été intéressé par l'Art
          de manière général, bien que j'ai plus souvent créer des choses dans
          le domaine de l'Art visuel notamment le dessin, la retouche/montage
          photo, le montage vidéo.<br />
          Il y a un peu plus d'un an, pendant que je réalisais un Service
          Civique à la Mission Locale, j'ai commencé à consacrer une très grande
          partie de mon temps à dessiner, dans le but de me perfectionner et de
          pouvoir à terme vivre de cette passion. À ces fins, je poste mes
          créations à la fois sur Twitter et Instagram, en essayant d'en poster
          au mieux un par semaine.<br />

          J'ai obtenu un DUT en Informatique, mais ces derniers temps, la
          création de sites web est passée au second plan, bien que je continue
          à travailler sur des projets de temps en temps, et que les idées sont
          toujours présentes.
        </p>
      </section>
      <section id="Illust">
        <h3>Mes illustrations</h3>
        <div>
          <div :key="i" v-for="i in illust">
            <img
              class="illust"
              :src="getImg(i)"
              v-bind:alt="i"
              @click="clickIllust"
            />
            <div class="imgLink">
              <a :href="getImgUrl(i)" target="_blank">
                <img
                  src="../assets/iconmonstr-instagram-11.svg"
                  alt="Icone Instagram"
                />
              </a>
            </div>
          </div>
        </div>
      </section>
      <section id="Web">
        <div>
          <h3 tabindex="0">mes projets web</h3>
          <div class="project-wrapper">
            <div
              tabindex="0"
              v-for="el in project['project']"
              :key="el"
              @click="goTo(el.url)"
              @keydown.enter="goTo(el.url)"
            >
              <a>{{ el.name }}</a>
              <h5>{{ el.type }}</h5>
            </div>
          </div>
        </div>
      </section>
    </main>
  </div>
</template>

<script>
import project from "@/assets/project.json";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
export default {
  name: "Main",
  data() {
    return {
      project: project,
      illust: null,
      illustLink: {
        gothina: "https://www.instagram.com/p/CwiPIDrscXc/?img_index=1",
        inamikapikazo: "https://www.instagram.com/p/CseTRDQMlhf/?hl=en",
        kiwawa: "https://www.instagram.com/p/CxVvCEjMfFw/?img_index=1",
        malina2: "https://www.instagram.com/p/CtUChkXsN3O/?hl=en",
        marineglasses: "https://www.instagram.com/p/CucXZXCsvxk/?hl=en",
        pkmnbunnygirl: "https://www.instagram.com/p/Cs9HAaWs4tN/?hl=en",
        riko: "https://www.instagram.com/p/CrlUWsHMkMH/?hl=en",
        towaglasses: "https://www.instagram.com/p/CuFIeZhsj4k/?hl=en",
        towascream: "https://www.instagram.com/p/Cp0NgyysH2H/?hl=en",
        towatechwear: "https://www.instagram.com/p/CvVBBYrs3BQ/?hl=en",
        yohaneFullSize: "https://www.instagram.com/p/CvDI49Ns7Yx/?hl=en",
      },
      allIllust: null,
      headerAnimationFired: false,
    };
  },
  created() {
    this.getImgName();
    gsap.registerPlugin(ScrollTrigger);
  },
  mounted() {
    if (window.innerWidth > 1100) {
      let header = document.querySelector(".pc-header");
      this.addHeaderScroll(header);
    } else {
      let header = document.querySelector(".mobile-header");
      this.addHeaderScroll(header, true);
    }
  },
  methods: {
    addHeaderScroll(header, mobile = false) {
      let className = "animate-header";
      let classNameReverse = "animate-header-reverse";
      if (mobile) {
        className += "-mobile";
        classNameReverse += "-mobile";
      }
      window.addEventListener("scroll", () => {
        console.log(this.headerAnimationFired);
        if (
          window.scrollY >= window.innerHeight + header.clientHeight &&
          !this.headerAnimationFired
        ) {
          if (header.classList.contains(classNameReverse))
            header.classList.remove(classNameReverse);
          this.headerAnimationFired = true;
          header.style.display = "block";
          header.classList.add(className);
        } else if (
          window.scrollY <= window.innerHeight / 2 &&
          this.headerAnimationFired
        ) {
          this.headerAnimationFired = false;
          header.classList.remove(className);
          header.classList.add(classNameReverse);
        }
      });
    },
    getImgName() {
      let context = require.context("../assets/illust", false, /\.webp$/);
      let illust = context.keys();
      for (let i = 0; i < illust.length; i++) {
        illust[i] = illust[i].replace("./", "");
      }

      this.illust = illust;
      this.shuffleArray();
    },
    getImg(pic) {
      return require("../assets/illust/" + pic);
    },
    getImgUrl(pic) {
      return this.illustLink[pic.replace(".webp", "")];
    },
    shuffleArray() {
      console.log(this.illust);
      for (let i = 0; i < this.illust.length; i++) {
        let j = Math.floor(Math.random() * (i + 1));
        let temp = this.illust[i];
        this.illust[i] = this.illust[j];
        this.illust[j] = temp;
      }
      console.log(this.illust);
    },
    goTo(url) {
      this.$router.push({ name: url });
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
section {
  width: 100vw;
  height: 100vh;
  position: relative;
}
h1,
h2,
h3,
h4,
h5,
h6,
p {
  color: var(--main-text-color);
}

h3 {
  font-size: var(--font-size-xl);
  font-family: "Inter";
}

header,
.mobile-header {
  position: fixed;
  z-index: 50;
}
header ~ a:focus {
  outline: 1px solid var(--first-color);
}
.pc-header {
  max-width: 100vw;
  height: 4vw;
  width: 100vw;
}
.pc-header:focus-within {
  outline: 1px solid var(--first-color);
}
.mobile-header {
  display: none;
  width: 100vw;
}
.mobile-header > div {
  position: fixed;
  bottom: 0;
  width: 100%;
  background: var(--background-accent-transparent);
  display: flex;
}
.mobile-header a {
  display: block;
  margin: 1vw;
}
.mobile-header a img {
  filter: invert(1);
}
.mobile-contact {
  display: flex;
  position: absolute;
  right: 0;
  top: 0;
  bottom: 0;
  margin: auto;
  align-items: center;
}
.mobile-contact svg {
  width: 5vw;
  margin: 0 1vw;
}
header > .head-wrapper {
  position: fixed;
  display: flex;
  width: 100%;
  background-color: var(--background-accent-transparent);
  align-items: center;
}
.header-contact {
  right: 2vw;
  position: absolute;
}
header a {
  cursor: pointer;
  font-size: var(--font-size-xsm);
  text-decoration: none;
  color: white;
  font-family: "Inter";
  text-transform: uppercase;
}
.pc-header a:hover {
  color: var(--main-text-color);
}
header > .head-wrapper > div:not([class="scrolltoTop"]),
.header-contact {
  display: flex;
}
header > .head-wrapper > div {
  align-items: center;
}
header > .head-wrapper > div:first-of-type a {
  margin: 0.5vw 1vw;
}
.header-contact > * {
  margin: 0.5vw;
}
.pc-header a img {
  filter: invert(1);
}
.pc-header a:hover img {
  filter: unset;
}

#Home {
  display: grid;
  place-content: center;
  text-align: left;
}
#Home > h1 {
  font-size: var(--font-size-xxxl);
  font-family: "Kempton";
  font-weight: lighter;
  line-height: 0.8;
}
#Home > h2 {
  font-family: "Helvetica Neue";
  font-size: var(--font-size-lg);
  font-weight: lighter;
}
#Home > h2 > span {
  color: var(--main-text-color-accent);
}
#About {
  display: grid;
  grid-template-columns: 50% 50%;
  place-content: center;
  text-align: center;
}
#About > * {
  display: flex;
  align-items: center;
  justify-content: center;
  margin: auto;
}
#About > div {
  width: 80%;
  height: 100%;
  overflow: hidden;
  position: relative;
}
.text-background {
  background: url("../assets/towaframe.png");
  background-size: cover;
  height: 100%;
  width: 100%;
  mix-blend-mode: soft-light;
  position: absolute;
  transform: scale(1.5);
  z-index: -1;
}
#About > div > h3 {
  width: 19vw;
  text-align: right;
}
#About > div > h3 > span {
  opacity: 50%;
}
#About > p {
  width: 30vw;
  text-align: justify;
  font-size: var(--font-size-sm);
}
#Illust {
  height: 100%;
  position: relative;
}
#Illust > div {
  column-count: 4;
  padding: 5vw;
  position: relative;
}

#Illust > div > div {
  margin-bottom: 1vw;
  display: flex;
  justify-content: center;
  width: 24vw;
  position: relative;
}

#Illust > div > div > img {
  width: 90%;
  height: 90%;
  border-radius: 5px;
}

#Illust > div > div:hover > img {
  filter: brightness(60%);
  transition: filter 0.2s ease-in-out;
}
#Illust > div > div:hover .imgLink {
  visibility: visible;
  height: fit-content;
}

#Illust > h3,
#Web h3 {
  text-transform: uppercase;
}

#closeupView {
  position: absolute;
  margin: auto;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  z-index: 2;
  visibility: hidden;
  width: 0;
  height: 0;
}
.closeView {
  position: absolute;
  right: 0;
  background: rgba(0, 0, 0, 0.3);
  border: none;
  border-radius: 0;
  color: #ff2828;
  font-weight: 800;
  font-size: var(--font-size-sm);
  cursor: pointer;
}

.imgLink {
  width: 90%;
  background: var(--main-text-color-accent);
  padding: 1vw 0;
  border-radius: 0 0 5px 5px;
  display: grid;
  position: absolute;
  bottom: 0;
  visibility: hidden;
}
.imgLink > a {
  margin: auto;
}

.imgLink > a > img {
  scale: 1.5;
  filter: invert(1);
}
.imgLink > a:hover {
  filter: unset;
}
.project-wrapper {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1vw;
  text-align: left;
  width: 100%;
  height: 100%;
  margin-top: 2vw;
}
.project-wrapper > div {
  padding: 3vw 0;
  position: relative;
  cursor: pointer;
  width: 90%;
  margin-left: 7vw;
}

.project-wrapper > div > a {
  transition: margin 0.3s ease-out;
  font-size: var(--font-size-lg);
  font-family: "Helvetica Neue", sans-serif;
  text-transform: uppercase;
  font-weight: bold;
  z-index: 2;
  position: relative;
  color: var(--main-text-color);
}
.project-wrapper > div > h5 {
  font-size: var(--font-size-xsm);
  color: var(--main-text-color-highlight);
  font-family: "Inter";
  margin: 0;
}
.project-wrapper > div:hover > a,
.project-wrapper > div:focus > a {
  margin-left: 1vw;
  color: var(--main-text-color-highlight);
}
.project-wrapper > div:hover > h5,
.project-wrapper > div:focus > h5 {
  color: var(--main-text-color-accent);
}
.project-wrapper > div > img {
  filter: grayscale(30%);
  opacity: 0.8;
  width: 22vw;
  position: absolute;
  top: 0;
  right: 0;
  z-index: 1;
}

.filterBlur {
  filter: blur(4px);
  pointer-events: none;
}
.animate-header {
  animation: slideIn 0.5s ease-in-out forwards;
}
.animate-header-reverse {
  animation: slideIn 0.5s ease-in-out forwards reverse;
}
.animate-header-mobile {
  animation: slideInMobile 0.5s ease-in-out forwards;
}
.animate-header-reverse-mobile {
  animation: slideInMobile 0.5s ease-in-out forwards reverse;
}
@keyframes slideIn {
  0% {
    display: none;
  }
  1% {
    display: block;
  }
  2% {
    transform: translateY(-100%);
  }

  100% {
    transform: translateY(0);
  }
}
@keyframes slideInMobile {
  0% {
    display: none;
  }
  1% {
    display: block;
  }
  2% {
    transform: translateY(90vh);
  }

  100% {
    transform: translateY(100vh);
  }
}

@media screen and (max-width: 2560px) {
}
@media screen and (max-width: 2400px) {
}

@media screen and (max-width: 2000px) {
}

@media screen and (max-width: 1500px) {
}
@media screen and (max-width: 1500px) {
}

@media screen and (max-width: 1300px) {
}

@media screen and (max-width: 1100px) {
  #Home {
    text-align: center;
  }
  #Illust > div {
    column-count: 2;
  }
  #Illust > div > div {
    width: 45vw;
  }
  .project-wrapper {
    grid-template-columns: unset;
  }
  .pc-header {
    display: none;
  }
  #About {
    display: flex;
    flex-direction: column;
  }
  #About > div {
    height: unset;
    width: unset;
  }
  #About > div > h3 {
    text-align: center;
  }
  #About > div > h3,
  #About > p {
    width: 80vw;
  }
  #About > * {
    margin: 5vh auto;
  }
  .text-background {
    display: none;
  }
  .imgLink > a > img {
    scale: unset;
  }
  #Web h3 {
    margin-top: 5vw 0;
  }
}
</style>
