<template>
	<img class="logo" v-for="s in imgSource" :key="s" :src="require('@/assets/'+s.image)" width="24" height="24" defer/>
	<div></div>
</template>

<script type="text/javascript">
	export default{
		name:"skillsIMG",
		inheritAttrs: false,
		data(){
			return{
				imgSource: this.$attrs.imgSource
			}
		},
	}
</script>