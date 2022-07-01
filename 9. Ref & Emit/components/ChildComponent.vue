<template>
	<div>
		<p>Child Component</p>
		<button type="button" @click="onClickParentMethod">Click Me</button>
	</div>
</template>

<script>
	export default {
		name: 'ChildComponent',
		emits: ['parent-method'],
		methods: {
			onClickParentMethod() {
				this.$emit('parent-method', 'tes')
			},
			childMethod() {
				alert('This method is called from child component')
			}
		}
	}
</script>