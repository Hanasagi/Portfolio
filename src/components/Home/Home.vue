<template>
  <div class="home">
    <!-- ********************************************PC HEADER************************************************-->
    <header class="pc-header">
      <div class="wrapper">
        <div>
          <h3>Quentin.</h3>
          <a ref="aboutMe" href="#about-me" data-text="A PROPOS DE MOI"
            >A PROPOS DE MOI</a
          >
          <a ref="skill" href="#skills" data-text="COMPETENCES">COMPETENCES</a>
          <a ref="project" href="#project" data-text="PROJETS">PROJETS</a>
        </div>
        <div class="header-contact">
          <a ref="contact" href="#contact" data-text="CONTACT">CONTACT</a>
          <a
            href="https://www.linkedin.com/in/quentinlevenard/"
            aria-label="Mon Linkedin"
            target="_blank"
          >
            <svg
              width="36"
              height="36"
              viewBox="0 0 36 36"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M18 0C8.0595 0 0 8.0595 0 18C0 27.9405 8.0595 36 18 36C27.9405 36 36 27.9405 36 18C36 8.0595 27.9405 0 18 0ZM15 24H12V15H15V24ZM13.5 13.6635C12.5895 13.6635 11.85 12.9195 11.85 12C11.85 11.082 12.588 10.3365 13.5 10.3365C14.412 10.3365 15.15 11.082 15.15 12C15.15 12.9195 14.4105 13.6635 13.5 13.6635ZM25.5 24H22.503V19.7085C22.503 16.887 19.5 17.1255 19.5 19.7085V24H16.5V15H19.5V16.6395C20.808 14.2155 25.5 14.0355 25.5 18.9615V24Z"
                fill="white"
              />
            </svg>
          </a>
          <a href="#mail" aria-label="Envoyez moi un mail">
            <svg
              width="36"
              height="36"
              viewBox="0 0 36 36"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_41_28)">
                <path
                  d="M18 3.03003C26.271 3.03003 33 9.75903 33 18.03C33 26.301 26.271 33.03 18 33.03C9.729 33.03 3 26.301 3 18.03C3 9.75903 9.729 3.03003 18 3.03003ZM18 0.0300293C8.0595 0.0300293 0 8.08953 0 18.03C0 27.9706 8.0595 36.03 18 36.03C27.9404 36.03 36 27.9706 36 18.03C36 8.08953 27.9404 0.0300293 18 0.0300293ZM18 18.855L9.012 12H26.9864L18 18.855ZM18 20.7871L9 13.8435V24.0001H27V13.8435L18 20.7871Z"
                  fill="white"
                />
              </g>
            </svg>
          </a>
        </div>
        <div
          tabindex="0"
          @click="scrollTop"
          style="display: none"
          ref="scrolltoTop"
          class="scrolltoTop"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path
              d="M23.677 18.52c.914 1.523-.183 3.472-1.967 3.472h-19.414c-1.784 0-2.881-1.949-1.967-3.472l9.709-16.18c.891-1.483 3.041-1.48 3.93 0l9.709 16.18z"
            />
          </svg>
        </div>
      </div>
    </header>
    <!-- ********************************************MOBILE HEADER************************************************-->
    <header class="mobile-header" ref="mobileHeader">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        @click="openMobileHeader(true)"
        width="24"
        height="24"
        viewBox="0 0 24 24"
      >
        <path d="M24 6h-24v-4h24v4zm0 4h-24v4h24v-4zm0 8h-24v4h24v-4z" />
      </svg>
      <div style="display: none">
        <svg
          @click="openMobileHeader(false)"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
        >
          <path
            d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z"
          />
        </svg>
        <a href="#about-me" data-text="A PROPOS DE MOI">A PROPOS DE MOI</a>
        <a href="#skills" data-text="COMPETENCES">COMPETENCES</a>
        <a href="#project" data-text="PROJETS">PROJETS</a>
        <div class="mobile-contact">
          <a href="#contact" data-text="CONTACT">CONTACT</a>
          <a
            href="https://www.linkedin.com/in/quentinlevenard/"
            target="_blank"
          >
            <svg
              width="36"
              height="36"
              viewBox="0 0 36 36"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M18 0C8.0595 0 0 8.0595 0 18C0 27.9405 8.0595 36 18 36C27.9405 36 36 27.9405 36 18C36 8.0595 27.9405 0 18 0ZM15 24H12V15H15V24ZM13.5 13.6635C12.5895 13.6635 11.85 12.9195 11.85 12C11.85 11.082 12.588 10.3365 13.5 10.3365C14.412 10.3365 15.15 11.082 15.15 12C15.15 12.9195 14.4105 13.6635 13.5 13.6635ZM25.5 24H22.503V19.7085C22.503 16.887 19.5 17.1255 19.5 19.7085V24H16.5V15H19.5V16.6395C20.808 14.2155 25.5 14.0355 25.5 18.9615V24Z"
                fill="white"
              />
            </svg>
          </a>
          <a href="mailto:quentin.levenard@gmail.com">
            <svg
              width="36"
              height="36"
              viewBox="0 0 36 36"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_41_28)">
                <path
                  d="M18 3.03003C26.271 3.03003 33 9.75903 33 18.03C33 26.301 26.271 33.03 18 33.03C9.729 33.03 3 26.301 3 18.03C3 9.75903 9.729 3.03003 18 3.03003ZM18 0.0300293C8.0595 0.0300293 0 8.08953 0 18.03C0 27.9706 8.0595 36.03 18 36.03C27.9404 36.03 36 27.9706 36 18.03C36 8.08953 27.9404 0.0300293 18 0.0300293ZM18 18.855L9.012 12H26.9864L18 18.855ZM18 20.7871L9 13.8435V24.0001H27V13.8435L18 20.7871Z"
                  fill="white"
                />
              </g>
            </svg>
          </a>
        </div>
      </div>
    </header>
    <main>
      <!-- ********************************************INTRO************************************************-->
      <section class="intro">
        <h1>
          <div>Bonjour.</div>
          <div>
            Je m'appelle <span>Quentin Levenard</span> et je suis
            <span>Développeur Front-End</span>
          </div>
        </h1>
        <div>
          <button @click="href('#project')" class="button my-project">
            mes projets
          </button>
          <button @click="href('#contact')" class="button contact-me">
            me contacter
          </button>
          <a
            class="button dl-cv"
            v-bind:href="`${publicPath}CV.pdf`"
            download="CV - Quentin Levenard.pdf"
            >télécharger mon cv</a
          >
        </div>
      </section>
      <!-- ********************************************ABOUT ME************************************************-->
      <section class="about-me" id="about-me">
        <h2 tabindex="0" class="section-title">à propos de moi</h2>
        <div ref="aboutMeText">
          <p class="aboutMeNotInViewport">
            J'ai choisi de m'orienter vers le développement Front-End parce que
            j'ai toujours eux une passion pour ce qui est de l'art, que ce soit
            du dessin comme du web design. J'ai découvert une nouvelle passion
            pour le développement après avoir effectué en DUT Informatique. Le
            développement Front-End apparaît donc comme le parfait choix pour
            moi !
          </p>
          <p class="aboutMeNotInViewport">
            Je suis toujours partant pour réaliser de nouveaux projets pour en
            apprendre de nouvelles choses autant en terme de design que de
            développement. On dit aussi de moi que je suis quelqu'un
            d'astucieux, de curieux et persévérant, j'ajouterais à cela que je
            suis calme et tout à fait apte à travailler en équipe.
          </p>
          <p class="aboutMeNotInViewport">
            Si mon profil vous intéresse, vous pouvez trouver mes informations
            de contact
            <a href="#contact" style="color: var(--second-color)">ici</a> !
          </p>
        </div>
      </section>
      <!-- ********************************************SKILLS************************************************-->
      <section class="skills" id="skills">
        <h2 tabindex="0" class="section-title">compétences</h2>
        <div class="skills-wrapper skillsWrapperNotInViewport" ref="skills">
          <h3>Informatique</h3>
          <div>
            <h4>Web</h4>
            <div
              v-for="el in skills['web']"
              :key="el"
              :class="el.color + ' skillsElement skillsNotInViewport'"
            >
              <p>{{ el.name }}</p>
            </div>
          </div>

          <div>
            <h4>Autre</h4>
            <div
              v-for="el in skills['autre']"
              :key="el"
              :class="el.color + ' skillsElement skillsNotInViewport'"
            >
              <p>{{ el.name }}</p>
            </div>
          </div>
        </div>
        <div class="lang skillsWrapperNotInViewport" ref="lang">
          <h3>Langue</h3>
          <p>
            Ayant obtenu <span class="first">905 points</span> au TOEIC en 2020,
            je possède un très bon niveau d’<span class="second">Anglais</span>.
            Je possède aussi des notions à l’écrit et à l’oral en
            <span class="second">Japonais</span> et
            <span class="second">Italien</span>.
          </p>
        </div>
      </section>
      <!-- ********************************************PROJETS************************************************-->
      <section class="projects" id="project">
        <h2 tabindex="0" class="section-title">projets</h2>
        <div class="project-wrapper">
          <div
            tabindex="0"
            v-for="el in project['project']"
            :key="el"
            @click="goTo(el.url)"
            @keydown.enter="goTo(el.url)"
          >
            <a>{{ el.name }}</a>
            <h3>{{ el.type }}</h3>
          </div>
        </div>
      </section>
      <!-- ********************************************CONTACT************************************************-->
      <section class="contact" id="contact">
        <h2 tabindex="0" class="section-title">contact</h2>
        <div class="contact-grid">
          <div>
            <a
              href="https://www.linkedin.com/in/quentinlevenard/"
              target="_blank"
              >Linkedin</a
            >
            <a href="https://github.com/Hanasagi" target="_blank">Github</a>
            <a href="mailto:quentin.levenard@gmail.com">Email</a>
          </div>
        </div>
      </section>
    </main>
  </div>
</template>


<script>
import skills from "@/assets/skills.json";
import project from "@/assets/project.json";
export default {
  name: "Home",
  data() {
    return {
      skills: skills,
      project: project,
      publicPath: process.env.BASE_URL,
    };
  },
  mounted() {
    if (window.scrollY >= window.innerHeight) {
      if (this.$refs.scrolltoTop.style.display === "none")
        this.$refs.scrolltoTop.style.display = "flex";
    }
    this.viewportBreakpoint();
    window.addEventListener("scroll", this.viewportBreakpoint);
  },
  methods: {
    goTo(url) {
      this.$router.push({ name: url });
    },
    href(breakpoint) {
      window.location.hash = breakpoint;
    },
    scrollTop() {
      window.scrollTo(0, 0);
    },
    openMobileHeader(bool) {
      if (bool) {
        this.$refs.mobileHeader.children[1].style.display = "block";
      } else {
        this.$refs.mobileHeader.children[1].style.display = "none";
      }
    },
    viewportBreakpoint() {
      let current = document.querySelector(".current");
      if (current != null) {
        current.classList.remove("current");
      }
      if (window.scrollY > 0 && window.scrollY <= window.innerHeight) {
        document.body.removeAttribute("theme");
        if (this.$refs.scrolltoTop.style.display === "flex")
          this.$refs.scrolltoTop.style.display = "none";
      } else if (
        window.scrollY > window.innerHeight &&
        window.scrollY < window.innerHeight * 2
      ) {
        if (this.$refs.scrolltoTop.style.display === "none")
          this.$refs.scrolltoTop.style.display = "flex";

        document.body.setAttribute("theme", "second");
        this.$refs.aboutMe.classList.add("current");

        if (
          !this.$refs.aboutMeText.children[0].classList.contains(
            "aboutMeTransitionViewport"
          )
        ) {
          for (let i = 0; i < this.$refs.aboutMeText.childElementCount; i++) {
            this.$refs.aboutMeText.children[i].classList.remove(
              "aboutMeNotInViewport"
            );
            this.$refs.aboutMeText.children[i].classList.add(
              "aboutMeTransitionViewport"
            );
          }
        }
      } else if (
        window.scrollY > window.innerHeight * 2 &&
        window.scrollY < window.innerHeight * 3
      ) {
        if (this.$refs.scrolltoTop.style.display === "none")
          this.$refs.scrolltoTop.style.display = "flex";

        document.body.setAttribute("theme", "third");
        this.$refs.skill.classList.add("current");

        if (!this.$refs.skills.classList.contains("skillsWrapperInViewport")) {
          for (let i = 0; i < this.$refs.aboutMeText.childElementCount; i++) {
            this.$refs.skills.classList.remove("skillsWrapperNotInViewport");
            this.$refs.skills.classList.add("skillsWrapperInViewport");
            this.$refs.lang.classList.remove("skillsWrapperNotInViewport");
            this.$refs.lang.classList.add("skillsWrapperInViewport");

            let checkPresence = setInterval(() => {
              let skills = document.querySelectorAll(".skillsElement");
              if (skills !== null && skills !== undefined) {
                for (let i = 0; i < skills.length; i++) {
                  skills[i].style.transition =
                    "transform " +
                    (i + 3) * 100 +
                    "ms ease-out 1s,border 0.3s ease-out,background 0.3s ease-out 0.5s,box-shadow 0.3s ease-out 0.5s";
                  skills[i].classList.remove("skillsNotInViewport");
                  skills[i].classList.add("skillsInViewport");
                }

                clearInterval(checkPresence);
              }
            }, 100);
          }
        }
      } else if (
        window.scrollY > window.innerHeight * 3 &&
        window.scrollY < window.innerHeight * 4
      ) {
        if (this.$refs.scrolltoTop.style.display === "none")
          this.$refs.scrolltoTop.style.display = "flex";
        document.body.setAttribute("theme", "fourth");
        this.$refs.project.classList.add("current");
      } else if (window.scrollY > window.innerHeight * 4) {
        if (this.$refs.scrolltoTop.style.display === "none")
          this.$refs.scrolltoTop.style.display = "flex";
        document.body.setAttribute("theme", "fifth");
        this.$refs.contact.classList.add("current");
      }
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import "./Home.css";
@import "./Home_Responsive.css";
</style>
