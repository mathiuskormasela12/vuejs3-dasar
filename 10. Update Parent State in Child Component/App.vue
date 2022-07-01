<template>
	<h1>Belajar Mengupdate Parent State dari Child Component</h1>
	{{ text }}
	<br />
	<!-- <ChildComponent 
		:model-value="text"
		@update:model-value="text = $event"
	/> -->
	<!-- Short Hand -->
	<ChildComponent v-model="text" />
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
				text: ''
			}
		}
	}
</script>