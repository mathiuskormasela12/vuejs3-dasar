<template>
	<p>{{ text }} {{ name }}</p>
</template>

<script>
	export default {
		name: 'ChildComponent',
		inject: ['name'],
		// Props without data type
		// props: ['text']
		// props with data type but without default value
		// props: {
		// 	text: String
		// }
		// Props with data type and default props
		props: {
			text: {
				type: String,
				default: '-'
			}
		}
	}
</script>