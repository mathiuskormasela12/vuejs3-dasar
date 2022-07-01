<template>
	<h1>Belajar Computed Properties, Setter & Getter</h1>
	<p>Nama saya {{ printName }}</p>
	<!-- We assign computed name with 'Jung Yerin' strinf -->
	<button type="button" @click="computedName = 'Jung Yerin'">Change Name</button>
	<p>Nama saya {{ computedName }} (It's from setter)</p>
</template>

<script>
	export default {
		data() {
			return {
				name: 'Mathius'
			}
		},

		/* 
			Computed property is a method 
			that will return a data.
		*/
		computed: {
			printName() {
				return this.name;
			},

			computedName: {
				get () {
					return this.name;
				},

				set (value) {
					this.name = value;
				}
			}
		}
	}
</script>