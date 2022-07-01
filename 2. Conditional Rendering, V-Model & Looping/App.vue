<template>
	<h1>Belajar V-Model & Conditional</h1>
	<!-- Conditional -->
	<p v-if="nilai >= 90">Luar biasa</p>
	<p v-else-if="nilai >= 80 && nilai < 90">Bagus</p>
	<p v-else-if="nilai >= 70 && nilai < 80">Cukup</p>
	<p v-else>Belajar Lagi</p>
	<!-- Shorthand with V-Model -->
	<input type="number" placeholder="Masukan Nilai Mu" v-model="nilai" />
	<!-- Another way -->
	<input type="number" placeholder="Masukan Lagi..." :value="nilai" @input="nilai = $event.target.value" />

	<p>My Skills</p>
	<!-- Looping -->
	<ol>
		<li v-for="(skill, index) in skills" key="index">{{index}} - {{ skill }}</li>
	</ol>
</template>

<script>
	export default {
		data() {
			return {
				nilai: 80,
				skills: ['HTML', 'CSS', 'Javascript']
			}
		}
	}
</script>