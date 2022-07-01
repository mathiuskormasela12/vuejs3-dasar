<template>
	<div class="container">
		<slot :nama="name" />
		<!-- Give a name to the a slot -->
		<p>Gfriend</p>
		<slot name="gfriend" :data="yj" />
		<p>Viviz</p>
	</div>
</template>

<script>
	export default {
		name: 'ChildComponent',
		data() {
			return {
				name: 'Mathius',
				age: 21,
				yj: 'Yeoja Chingu'
			}
		}
	}
</script>

<style scoped>
	.container {
		width: 90%;
		margin: 0 auto;
	}
</style>