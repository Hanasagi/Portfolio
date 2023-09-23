<template>
  <div class="project" ref="project">
    <div v-if="loading" class="loading"></div>
    <main v-else>
      <h1>{{ title }}</h1>
      <p class="desc">{{ description }}</p>
      <div class="info-wrapper">
        <div class="stack">
          <h3>Stack</h3>
          <p v-for="lang in stack" :key="lang">{{ lang.name }}</p>
        </div>
        <button
          v-if="website !== ''"
          class="button-link website"
          @click="goTo(website)"
        >
          Site web
        </button>
        <button class="button-link github" @click="goTo(github)">Github</button>
      </div>
      <div class="goals">
        <video
          v-if="type === 'mp4'"
          controls
          class="mockupImg"
          alt="Video montrant le site en utilisation"
        >
          <source
            :src="require('@/assets/project-screenshot/' + images[0].name)"
            type="video/mp4"
          />
        </video>
        <img
          v-else
          class="mockupImg"
          :src="require('@/assets/project-screenshot/' + images[0].name)"
        />
        <div>
          <h2 tabindex="0">Objectifs du projet</h2>
          <p>{{ goals }}</p>
        </div>
      </div>
      <div v-if="problems !== undefined" class="problems">
        <img
          class="mockupImg"
          :src="require('@/assets/project-screenshot/' + images[1].name)"
          alt="Mockup du site"
        />
        <h2 tabindex="0">Problèmes rencontrés</h2>
        <p>{{ problems }}</p>
      </div>
      <div v-if="lessons !== undefined" class="lessons">
        <img
          class="mockupImg"
          :src="require('@/assets/project-screenshot/' + images[2].name)"
          alt="Mockup du site mobile"
        />
        <h2 tabindex="0">Ce que j'ai appris</h2>
        <p>{{ lessons }}</p>
      </div>
      <button class="button-link home-button" @click="goHome">
        Retourner sur la page d'accueil
      </button>
    </main>
  </div>
</template>


<script>
import project from "@/assets/project.json";
export default {
  name: "Project",
  data() {
    return {
      project: project,
      loading: true,
      title: null,
      description: null,
      goals: null,
      problems: null,
      lessons: null,
      stack: null,
      images: null,
      github: null,
      website: null,
      type: null,
    };
  },
  mounted() {
    let obj = Array.from(Object.values(this.project))[0].find(
      (el) => el["url"] === this.$route.name
    );
    this.title = obj.name;
    this.description = obj.description;
    this.stack = obj.stack;
    this.images = obj.images;
    obj.images[0].name.includes("mp4")
      ? (this.type = "mp4")
      : (this.type = "png");
    this.goals = obj.goals;
    this.problems = obj.problems;
    this.lessons = obj.lessons;
    this.github = obj.github;
    this.website = obj.website;

    this.$refs.project.setAttribute("theme", "fourth");
    this.loading = false;
    window.scrollTo(0, 0);
  },
  methods: {
    goTo(url) {
      window.open(url, "_blank");
    },
    goHome() {
      this.$router.go(-1);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.project h1,
.project h2,
.project h3,
.project p {
  margin: 0;
}
.project h1,
.project h2,
.project h3 {
  color: var(--main-text-color);
  font-family: "Helvetica Neue";
  text-transform: uppercase;
}
.project p {
  font-family: "Inter";
  font-size: var(--font-size-sm);
  color: var(--main-text-color);
  line-height: 1.8vw;
  white-space: pre-line;
}
.project main div p:not(.stack > p) {
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 2vw;
}
.project h2 {
  font-size: var(--font-size-lg);
  margin-left: auto;
  margin-right: auto;
  margin-top: 3vw;
  margin-bottom: 1vw;
  width: 50vw;
}
.project h2:focus {
  outline: 1px solid var(--first-color);
}
.project main {
  margin-left: 1vmax;
}

.project main > h1 {
  font-size: var(--font-size-xl);

  margin: 0.5vw 0;
  text-transform: uppercase;
}
.project main > .desc {
  width: 60vw;
}
.info-wrapper {
  margin-top: 2vw;
  display: flex;
  align-items: flex-start;
}
.info-wrapper * {
  margin: 0 3vw;
}
.stack {
  width: 10vw;
  height: 10vw;
}
.stack > h3 {
  margin: 0.5vmax 0;
}
.stack p {
  color: var(--main-text-color-accent);
  margin: 0.3vmax 0;
}
.button-link {
  padding: 1vw;
  font-size: var(--font-size-base);
  margin: 1vw;
  background: none;
  font-family: "Inter", sans-serif;
  text-transform: uppercase;
  cursor: pointer;
  border: 1px solid var(--main-text-color);
  transition: border 0.2s ease-in,
    color 0.2s ease-in;
}
.button-link:hover:not(.home-button),
.button-link:focus:not(.home-button){
  color: var(--main-text-color-highlight);
  border:1px solid var(--main-text-color-highlight);
}
video.mockupImg {
  margin-bottom: 3vw;
}
video.mockupImg:focus {
  outline: 1px solid white;
}
.mockupImg {
  margin: 0 auto;
  display: block;
  width: 70vw;
}

.project div > p:not(.stack > p) {
  width: 50vw;
}
.home-button {
  border: 1px solid var(--second-color);
  color: var(--second-color);
  transition: background 0.2s ease-in, box-shadow 0.2s ease-in,
    color 0.2s ease-in;
}
.home-button:hover,
.home-button:focus {
  color: var(--main-text-color-highlight);
}

@media screen and (max-width: 1100px) {
  .project main > h1 {
    font-size: 5vw;
  }
  .stack {
    width: 10vw;
    height: 20vw;
  }
  .project main > .desc {
    width: 90vw;
  }
  .project div > p {
    width: 90vw;
  }
  .info-wrapper * {
    margin: 0 6vw;
  }
  .project p {
    font-size: 3.5vw;
    line-height: 4vw;
  }
  .project h2 {
    font-size: 4.5vw;
    width: 90vw;
  }
  .mockupImg {
    width: 100vw;
  }
  .stack > h3 {
    font-size: 4vw;
  }
  .button-link {
    padding: 3vw;
    font-size: var(--font-size-lg);
    margin: 3vw;
    background: none;
    font-family: "Helvetica Neue", sans-serif;
    text-transform: uppercase;
    cursor: pointer;
  }
}
</style>
