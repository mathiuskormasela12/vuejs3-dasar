<template>
	<h1>Belajar Vue Js Life Cycle</h1>
	<button @click="count++">Click {{ count }}</button>
</template>

<script>
	export default {
		// 1. This one will be run when component has not been created yet
		beforeCreate() {
			console.log('Before Create')
		},

		// 2. This one will be run when component has been created
		created() {
			console.log('Created')
		},

		// 3. This one will be run when component has not been installed yet
		beforeMount() {
			console.log('Before Mount')
		},

		// 4. This one will be run when component has installed
		mounted() {
			console.log('Mounted')
		},

		// 5. This ine will be run when data or props will not be updated yet
		beforeUpdate() {
			console.log('Before Update')
		},

		// 6. This one will be run when the data or props has been updated
		updated() {
			console.log('Updated')
		},
		
		data() {
			return {
				count: 0
			}
		}
	}
</script>