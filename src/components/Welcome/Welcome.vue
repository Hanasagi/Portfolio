<template>
  <div class="message-wrapper">
    <router-link to="/home"><button type="button" ref="router" style="visibility:hidden;"></button></router-link>
    <div ref="container" class="message root-container-clip-path">Bonjour, je m'appelle <br /><span class="name">Quentin Levenard</span></div>
    <div class="progressBar">
      <div ref="progressValue" class="progressValue"></div>
    </div>
  </div>
</template>


<script type="text/javascript">
	export default{
		name:'Welcome',
		mounted(){
		setTimeout(()=>{
      this.$refs.container.classList.remove("root-container-clip-path");
        this.$refs.container.classList.add("root-visible-container-clip-path");
    },600)
		setTimeout(()=>{
			let progress=0;
			let loading = setInterval(()=>{
				progress+=5;
				this.$refs.progressValue.style.width=progress+"%";
				if(progress===100){
					clearInterval(loading);
					setTimeout(()=>{
						this.$refs.router.click()
					},500)
					
				}
			},100)
		},800)
	}
	}
	
</script>
<style lang="scss">
body{
	margin:0;
	font-family: 'Montserrat';
}
	.message-wrapper{
		width:100vw;
		height:100vh;
		background:#222222;
		color:white;
		display:grid;
		place-content:center;
	}
	.message{
		text-align:center;
		font-size:3em;
			}
	.name{
		color:#FF4E00;
		font-weight:bold;
	}

	.progressBar{
		margin-top:1rem;
		width:40vw;
		height:0.8em;
		border-radius:50px;
		overflow:hidden;
	}
	.progressValue{
		background:#FF4E00;
		width:0;
		height:100%;
		border-radius:50px;
		transition:width 0.5s ease;
	}
@media screen and (max-width:2600px) {
	.message-wrapper{
		font-size:30px;
	}
}
@media screen and (max-width:2000px) {
	.message-wrapper{
		font-size:24px;
	}
}
@media screen and (max-width:1700px) {
	.message-wrapper{
		font-size:20px;
	}
}
@media screen and (max-width:1500px) {
	.message-wrapper{
		font-size:18px;
	}
}
@media screen and (max-width:1400px) {
	.message-wrapper{
		font-size:17px;
	}
}
@media screen and (max-width:1300px) {
	.message-wrapper{
		font-size:16px;
	}
}
@media screen and (max-width:1100px) {
	.message-wrapper{
		font-size:16px;
	}
	.progressBar{
		width:50vw;
	}
}
@media screen and (max-width:800px) {
	.message-wrapper{
		font-size:16px;
	}
	.progressBar{
		width:70vw;
	}
}
@media screen and (max-width:600px) {
	.message-wrapper{
		font-size:12px;
	}
	.progressBar{
		width:75vw;
	}
}

@media screen and (max-width:500px) {
	.message-wrapper{
		font-size:12px;
	}
	.progressBar{
		width:90vw;
	}
}
@media screen and (max-width:400px) {
	.message-wrapper{
		font-size:10px;
	}
	.progressBar{
		width:90vw;
	}
}
@media screen and (max-width:350px) {
	.message-wrapper{
		font-size:9px;
	}
	.progressBar{
		width:90vw;
	}
}
@media screen and (max-width:300px) {
	.message-wrapper{
		font-size:8px;
	}
	.progressBar{
		width:90vw;
	}
}
</style>