<template>
	<!-- It's like React Children -->
	<ChildComponent>
		<template v-slot:default="props">
			<h1>Belajar Slot dengan {{ props.nama }}</h1>
		</template>

		<template v-slot:gfriend="{data}">
			{{ data }}
		</template>
	</ChildComponent>
</template>

<script>

	export default {
		name: 'App',
	}
</script>