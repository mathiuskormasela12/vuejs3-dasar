<template>
	<h1>Belajar V-Once & V-HTML</h1>
	<button @click="count++">Click {{ count }}</button>
	<!-- The data will not update if we want to render the data using v-once -->
	<p v-once>{{ count }}</p>
	<!-- This one will render the data as html -->
	<p v-html="element"></p>
</template>

<script>
	export default {
		data() {
			return {
				count: 0,
				element: "<span style='color: red;'>wkwk</span>"
			}
		}
	}
</script>