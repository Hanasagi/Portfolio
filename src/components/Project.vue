<template src="./Project-Template.html">

</template>

<script>
import project from '@/assets/json/project.json';

export default {
  name: 'Project',
  data() {
    return {
      project: project,
      project_elem: []
    }
  },
  mounted() {
    setTimeout(()=>{
      this.$refs.container.classList.remove("root-container-clip-path");
        this.$refs.container.classList.add("root-visible-container-clip-path");
    },500)
  },
  methods: {
    getImgUrl(img) {
      if (img !== "")
        return require('@/assets/' + img)
    },
    setId(id, desc = "") {
      return "project_" + id + desc
    },
    showProjectDesc(e) {
      let current;
      this.project_elem = Object.keys(this.$refs).filter((ref) => {
        if (ref.includes("_desc")) {
          return true
        }
        return false
      }).map((val) => {
        return this.$refs[val]
      })
      this.project_elem.forEach((el) => {
        if (el.id === e.target.id + "_desc")
          current = el;

      })
      this.$refs.project_grid.style.pointerEvents = "none";
      this.$refs.darken_background.style.display = "initial";
      current.classList.add("active")
      current.classList.remove("hidden-project-desc");
      current.classList.add("visible-project-desc");
    },
    closeProjectDesc(e) {
      if (e.target.classList.contains("close_desc")) {
        e.target.parentNode.classList.remove("visible-project-desc");
        e.target.parentNode.classList.add("hidden-project-desc");
        e.target.parentNode.classList.remove("active")
        this.$refs.darken_background.style.display = "none";
        this.$refs.project_grid.style.pointerEvents = "auto";
      } else if (e.target.classList.contains("darken-background")) {
        this.project_elem.forEach((el) => {
          if (el.classList.contains("active")) {
            el.classList.remove("visible-project-desc");
            el.classList.add("hidden-project-desc");
            el.classList.remove("active");
            this.$refs.darken_background.style.display = "none";
            this.$refs.project_grid.style.pointerEvents = "auto";
          }
        })
      }
    }
  }
}
</script>

<style lang="scss">
@import './Project.scss';
@import './Project-Responsive.scss'
</style>

