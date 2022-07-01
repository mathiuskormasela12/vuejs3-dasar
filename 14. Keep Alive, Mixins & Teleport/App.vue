<template>
	<h1>Belajar Keep Alive, Mixins & Teleport</h1>
	<!-- 
			 When the component is rendered at the first time, 
			 the data in the keep-alive component will be saved 
			 to the browser cache  and when we try to access the component,
			 it will not fetch the data again, becaus the data already
			 in the browser cache
	-->
	<keep-alive>
		<ChildComponent text="Ini adalah data dari provide" />
	</keep-alive>
	<teleport to="#teleport-target">
		<p>Test</p>
	</teleport>
</template>

<script>
	import ChildComponent from './components/ChildComponent.vue'
	import mixins from './mixins/mixins'

	export default {
		name: 'App',
		// Mixins
		mixins: [mixins],
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