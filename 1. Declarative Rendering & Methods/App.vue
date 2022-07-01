<template>
  <h1>Belajar Vue Js</h1>
  <!-- Declarative Rendering (Render data as a string) -->
  <p>Halo Nama saya {{name}}</p>
  <!-- Declarative Rendering (Render data as a html) -->
  <p v-html="element"></p>
  <!-- Declarative Rendering (Render data as a string) -->
  <p v-text="element"></p>
  <!-- Call a method -->
  <button type="button" @click="increment">Increment {{count}}</button>
</template>

<script>

export default {
  // It's like state in React Js
  data() {
    return {
      name: '<i>Mathius</i>',
      count: 0,
      element: '<b>wkkw</b>'
    }
  },
  // It's like event function in React Js
  methods: {
    increment() {
      this.count++;
    }
  }
}
</script>
