<template>
	<h1>Belajar Type of Component Props, Provide & Inject</h1>
	<ChildComponent text="Ini adalah data dari provide" />
</template>

<script>
	import ChildComponent from './components/ChildComponent.vue'

	export default {
		name: 'App',
		components: {
			ChildComponent
		},
		data() {
			return {
				name: 'Mathius'
			}
		},
		provide() {
			return {
				name: this.name
			}
		}
	}
</script>