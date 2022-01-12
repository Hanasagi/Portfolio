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
@import "./Project.css";
</style>
