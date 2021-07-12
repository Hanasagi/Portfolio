<template src="./Template.html">
</template>

<script>
import skills from "./json/skills.json"
import education from "./json/education.json"
import aboutMe from "./json/aboutMe.json"
import project from "./json/project.json"
import './css/Page.scss';
import './css/PageResponsive.scss'
import '../assets/TurretRoad_Kit/stylesheet.css'
import ProgressBar from 'progressbar.js';

export default {
  name: 'Page',
  data() {
    return {
      skills: skills,
      aboutMe: aboutMe,
      publicPath: process.env.BASE_URL
    }
  },
  mounted() {

    this.fillSkillsSection()
    this.fillEducation()
    this.fillAboutMeSection()
    this.fillProjectSection()  
  },
  methods: {
    fillSkillsSection() {
      let wrapperDiv = this.$refs.wrapperDivSkills
      let k = 1
      for (let i in skills) {
        let wrapperGrid = this.$refs.gridSkills
        skills[i].forEach((e, j) => {
          let wrapper = document.createElement("div")
          this.cssText(wrapper, "display:flex;flex-direction:column;justify-content:center;")
          if (i === "language") {
            wrapperDiv = this.fillLanguageSkills(e, j, k, document.createElement("p"), wrapper, wrapperGrid, wrapperDiv)
          }
        })
        k < 2 ? k++ : k = 0
      }
      this.$refs.container2.append(wrapperDiv)
      let levelW = document.querySelector("#writing")
      let levelR = document.querySelector("#reading")
      let maxPoint = 495
      let barW = new ProgressBar.Circle('#writing', {
          strokeWidth: 8,
          easing: 'easeInOut',
          duration: 1000,
          color: '#f39c12',
          trailColor:'#2C2E43',
          trailWidth: 8,
          svgStyle: null
      });
      let barR = new ProgressBar.Circle('#reading', {
          strokeWidth: 8,
          easing: 'easeInOut',
          duration: 1000,
          color: '#f39c12',
          trailColor:'#2C2E43',
          trailWidth: 8,
          svgStyle: null
      });
      barW.animate(((levelW.className/maxPoint)*100)/100); 
      barR.animate(((levelR.className/maxPoint)*100)/100); 
    },
    fillLanguageSkills(e, j, k, name, wrapper, wrapperGrid, wrapperDiv) {
      let yetAnotherDivStrikeBack = document.createElement("div")
      let text = document.createElement("div")
      text.style.cssText = "text-align:center;"
      yetAnotherDivStrikeBack.className = "elemDiv"
      name.innerText = e.name
      if(e.name!="Anglais"){
        text.innerText = e.level
        yetAnotherDivStrikeBack.append(name, text)
        wrapper.append(yetAnotherDivStrikeBack)
        wrapperGrid.append(wrapper)
        wrapperDiv.childNodes[k].append(wrapperGrid)
      }else{
        let writingLevel = document.createElement("div")
        let readingLevel = document.createElement("div")
        let levelText = e.level.match(/ [0-9]* /g)
        let text= e.level.match(/^[a-zA-Z]* [a-zA-Z]*/gm)
        let otherText = e.level.match(/ [a-zA-Z]*:/gm)
        let text1 = document.createElement("p")
        let text2 = document.createElement("p")
        let text3 = document.createElement("p")
        text1.innerHTML = text[0].replace(":"," ").trim()
        this.cssText(text1,"margin:0;")
        text2.innerHTML = otherText[0].replace(":"," ").trim()
        text3.innerHTML = otherText[1].replace(":"," ").trim()
        text2.innerHTML+="<br>"+levelText[0]+"/495<br><span style='color:#f39c12''>B2</span>"
        text3.innerHTML+="<br>"+levelText[1]+"/495<br><span style='color:#f39c12''>C1</span>"
        let yetAgainAnotherDivStrikeBackTheVengeance=document.createElement("div")
        let yetAgainAnotherDivStrikeBackTheVengeanceElectricBoogaloo=document.createElement("div")
        let yetAgainAnotherDivStrikeBackElectricBoogalooTheFinal=document.createElement("div")
        yetAgainAnotherDivStrikeBackElectricBoogalooTheFinal.className="englishLevelTextWrapper"
        yetAgainAnotherDivStrikeBackTheVengeanceElectricBoogaloo.className="englishLevelTextWrapper"
        yetAgainAnotherDivStrikeBackTheVengeance.className="englishLevelWrapper"
        writingLevel.id="writing"
        writingLevel.classList.add(levelText[0].trim())
        readingLevel.id="reading"
        readingLevel.classList.add(levelText[1].trim())

        yetAgainAnotherDivStrikeBackTheVengeanceElectricBoogaloo.append(writingLevel,text2)
        yetAgainAnotherDivStrikeBackElectricBoogalooTheFinal.append(readingLevel,text3)
        yetAgainAnotherDivStrikeBackTheVengeance.append(yetAgainAnotherDivStrikeBackTheVengeanceElectricBoogaloo,yetAgainAnotherDivStrikeBackElectricBoogalooTheFinal)
        yetAnotherDivStrikeBack.append(name,text1,yetAgainAnotherDivStrikeBackTheVengeance)
        wrapper.append(yetAnotherDivStrikeBack)
        wrapperGrid.append(wrapper)
        wrapperDiv.childNodes[k].append(wrapperGrid)
      }
      return wrapperDiv
    },
    fillEducation() {
      let wrapper = document.createElement("div")
      wrapper.className = "educationWrapper"
      education["school"].forEach((e) => {
        let elemDiv = document.createElement("div")
        elemDiv.style.cssText = "width:inherit;box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;"
        let yetAnotherDivAgain = document.createElement("div")
        yetAnotherDivAgain.className = "educationElemWrapper"
        let name = document.createElement('div')
        let where = document.createElement('div')
        let date = document.createElement('div')
        name.className = "education-text educationdiv2"
        where.className = "education-text educationdiv3"
        date.className = "education-text educationdiv1"
        date.style.width = "20%";
        name.style.cssText = "width:40%;font-weight:bold";
        where.style.width = "40%";
        name.innerText = e.name
        where.innerText = e.where
        date.innerText = e.date
        yetAnotherDivAgain.append(date, name, where)
        elemDiv.append(yetAnotherDivAgain)
        wrapper.append(elemDiv)
      })
      this.$refs.container3.append(wrapper)
    },
    fillAboutMeSection() {
      this.$refs.aboutMeText.innerText = aboutMe.about
    },
    fillProjectSection() {
      project["projet"].forEach((e) => {
        let schoolProject = this.createProjectElem(e,this.$refs.schoolProject)
        this.$refs.schoolProject.append(schoolProject)
      })
    },
    createProjectElem(e,p){
      let project = document.createElement("div")
      project.className="projectElem"
      let title1= document.createElement("p")
      let title2= document.createElement("p")
      let language= document.createElement("p")
      language.className="projectLangage"
      this.cssText(title2,"display:none;")
      let nameSplit=e.name.split("-")
      title1.innerText=nameSplit[0]
      title2.innerText=nameSplit[1]
      language.innerText=e.langage
      let projectDesc=this.createProjectDescDiv(title2,e)
      project.addEventListener("mouseover",()=>{
        this.cssText(project,"cursor: pointer;")
        this.cssText(title1,"display:none;")
        this.cssText(title2,"display:flex;")
        this.cssText(language,"display:none;")
      })
      project.addEventListener("mouseleave",()=>{
        this.cssText(title1,"display:flex;")
        this.cssText(title2,"display:none;")
        this.cssText(language,"display:flex;")
      })
      project.addEventListener("click",()=>{
        this.cssText(projectDesc,"display:flex;")
      })
      p.append(projectDesc)
      project.append(title1,title2,language)
      return project
    },
    cssText(elem, css) {
      elem.style.cssText = css
    },
    closeProjectDesc(e){
      if(e.target.nodeName=="path"){
        this.cssText(e.target.parentNode.parentNode,"display:none")
      }else{
        this.cssText(e.target.parentNode,"display:none")
      }
      e.stopPropagation();
    },
    createProjectDescDiv(title2, e){
      let projectDesc= document.createElement("div")
      let svg = document.querySelector("svg#closeButton")
      let clonedSVG=svg.cloneNode(true)
      this.cssText(clonedSVG,"display:initial;cursor:pointer;")
      clonedSVG.onclick=this.closeProjectDesc
      projectDesc.className="projectWrapper projectDesc"
      this.cssText(projectDesc,"display:none;")
      let title = document.createElement("p")
      title.innerText = title2.innerText
      let desc= document.createElement("p")
      let descWrapper = document.createElement("div")
      descWrapper.className="descWrapper"
      desc.innerText=e.desc
      descWrapper.append(desc)
      projectDesc.append(clonedSVG,title,descWrapper)
      if(e.link!=""){
        let link= document.createElement("a")
        link.href=e.link
        link.innerText="Lien du projet"
        projectDesc.append(link)
      }
      return projectDesc
    },
    isElementInViewport (el) {
        var rect = el.getBoundingClientRect();

        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) && /*or $(window).height() */
            rect.right <= (window.innerWidth || document.documentElement.clientWidth) /*or $(window).width() */
        );
    }
  }
}
</script>

