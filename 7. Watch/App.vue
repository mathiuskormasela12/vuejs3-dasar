<template>
	<h1>Belajar Watch</h1>
	<p v-if="name.length > 0">Nama nya adalah {{ name }}</p>
	<input type="text" v-model="name" />
</template>

<script>
	export default {
		data() {
			return {
				name: ''
			}
		},

		// This one will watch the data changing
		watch: {
			// The property must have same name with the data
			name() {
				console.log('The name has been updated to', this.name)
			}
		}
	}
</script>