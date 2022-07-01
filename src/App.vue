<template>
	<h1>Belajar Dynamic Class</h1>
	<p :class="status ? 'success' : 'danger'">wwkwwk</p>
	<button type="button" @click="changeStatus">Update</button>
	<p :class="[status ? 'success' : 'danger', bold]">This one how to merge two classes</p>
</template>

<style scoped>
	.success {
		color: blue;
	}

	.danger {
		color: red;
	}

	.bold {
		font-weight: bold;
	}
</style>

<script>
	export default {
		data() {
			return {
				status: false,
				bold: 'bold'
			}
		},

		methods: {
			changeStatus() {
				this.status = !this.status
			}
		}
	}
</script>