<template>
	<p>{{ text }}</p>
</template>

<script>
	export default {
		props: {
			text: {
				// Data Type of the props
				type: String,
				// Default Value of the props
				default: 'Empty'
			}
		}
	}
</script>