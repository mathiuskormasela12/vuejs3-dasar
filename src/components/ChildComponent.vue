<template>
	<!-- <input  
		:value="modelValue"
		@input="$emit('update:model-value', $event.target.value)"
	/> -->
	<!-- The Best Way -->
	<input v-model="value" />
</template>

<script>
	export default {
		name: 'ChildComponent',
		props: {
			modelValue: {
				type: String,
				default: ''
			}
		},
		computed: {
			value: {
				get () {
					return this.modelValue;
				},
				set(val) {
					this.$emit('update:model-value', val)
				}
			}
		}
	}
</script>