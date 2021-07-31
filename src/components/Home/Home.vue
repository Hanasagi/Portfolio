<template src="./Home-Template.html">
</template>

<script>
import aboutMe from '@/assets/json/aboutMe.json';
import skillsIMG from '../ImgLoader/skillsIMG';
import skills from '@/assets/json/skills.json';
import education from '@/assets/json/education.json';

export default {
  name: 'Home',
  data() {
    return {
      aboutMe: aboutMe,
      education: education,
      skills,
      shownElement: [],
      container: [],
      publicPath: process.env.BASE_URL
    }
  },
  components:{
    skillsIMG
  },
  inheritAttrs: false,
  mounted() {
    this.shownElement.push(this.$refs.aboutMe, this.$refs.skills, this.$refs.formations, this.$refs.contact)
    this.container.push(this.$refs.aboutMe, this.$refs.skills, this.$refs.formations, this.$refs.contact,this.$refs.cv,this.$refs.project)
    this.hoverPopper()
  },
  methods: {
    showContainerElement(e) {
      e.stopPropagation();
      if(e.target===this.shownElement[0]){
        this.$refs.main.setAttribute("theme","orange");
      }else if(e.target===this.shownElement[1]){
        this.$refs.main.setAttribute("theme","blue");
      }else if(e.target===this.shownElement[2]){
        this.$refs.main.setAttribute("theme","red");
      }else if(e.target===this.shownElement[3]){
        this.$refs.main.setAttribute("theme","yellow");
      }
      if(this.shownElement.includes(e.target)){
      if (!e.target.classList.contains("visible")) {
        this.shownElement.forEach((el) => {
            el.classList.remove("visible")
            if(el.childNodes[1].classList.contains("visible-container-clip-path")){
            el.childNodes[1].classList.remove("visible-container-clip-path");
            el.childNodes[1].classList.add("container-clip-path");
          }
        })
        e.target.classList.add("visible")
        e.target.childNodes[1].classList.remove("container-clip-path");
        e.target.childNodes[1].classList.add("visible-container-clip-path");
      } else {
        e.target.classList.remove("visible")
        e.target.childNodes[1].classList.remove("visible-container-clip-path");
        e.target.childNodes[1].classList.add("container-clip-path");
      }
    }
    },
    copyToClipboard(e){
      e.stopPropagation();
      const el = document.createElement('textarea');
    el.value = e.target.innerText;
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
    },
    toNext(e){
      e.stopPropagation()
      let parentNode = e.target.parentNode;
      parentNode.classList.remove("visible-it-clip-path")
      parentNode.classList.add("hidden-it-clip-path")
      let nextNode=this.$refs.toPrevious.parentNode;
      nextNode.classList.add("visible-lang-clip-path")
      nextNode.classList.remove("hidden-lang-clip-path")
    },
    toPrevious(e){
      e.stopPropagation()
      let parentNode = e.target.parentNode;
      parentNode.classList.remove("visible-lang-clip-path")
      parentNode.classList.add("hidden-lang-clip-path")
      let nextNode=this.$refs.toNext.parentNode;
      nextNode.classList.add("visible-it-clip-path")
      nextNode.classList.remove("hidden-it-clip-path")
    },
    disableBlur(e){
      if(e.target.checked){
        this.container.forEach((el)=>{
          el.classList.remove("noblur")
          el.classList.add("blur")
        })
      }else{
        this.container.forEach((el)=>{
          el.classList.add("noblur")
          el.classList.remove("blur")
        })
      }
    },
    hoverPopper(){
      this.popperTextChange(this.$refs.switch_input,'mouseover',"Désactiver le flou")
      this.popperTextChange(this.$refs.contact_icon1,'mouseover',"Copier dans le presse-papier")
      this.popperTextChange(this.$refs.contact_icon2,'mouseover',"Copier dans le presse-papier")
      this.popperTextChange(this.$refs.contact_icon1,'click',"Copié !")
      this.popperTextChange(this.$refs.contact_icon2,'click',"Copié !")
    },
    popperTextChange(element,event,text){
      let popper=this.$refs.popper;
      element.addEventListener(event,()=>{
        popper.innerText=text;
        popper.style.display="block";
        setTimeout(()=>{
        popper.style.display="none";
      },1000);
      })
    },
    scrollToContact(){
      var element = this.$refs.contact;
      var top = element.offsetTop;
      window.scrollTo(0, top);
      element.click()
    }
  }
}

</script>

<style lang="scss">
@import './Home.scss';
@import './Home-Responsive.scss'
</style>
