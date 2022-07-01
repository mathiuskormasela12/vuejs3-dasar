<template>
	<h1 @click="onClickChildMethod">Belajar Ref</h1>
	<ChildComponent @parent-method="parentMethod" ref="childComponent" />
</template>

<script>
import ChildComponent from './components/ChildComponent.vue'
	export default {
		components: {
			ChildComponent
		},

		methods: {
			parentMethod(msg) {
				alert('This method is called from parent component ' + msg)
			},

			onClickChildMethod() {
				this.$refs.childComponent.childMethod()
			}
		}
	}
</script>