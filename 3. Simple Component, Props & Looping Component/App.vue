<template>
	<h1>Belajar Membuat Component Sederhana, Props & Looping Pada Component</h1>
	<my-text v-for="(item, index) in skills" :key="index" :text="item" />
</template>

<script>
	import MyText from './components/MyText.vue';

	export default {
		components: {
			MyText
		},
		data() {
			return {
				skills: ['HTML', 'CSS', 'Javascript']
			}
		}
	}
</script>