import { createApp } from 'vue'
import App from './App.vue'
import ChildComponent from './components/ChildComponent.vue'

const app = createApp(App);
// Assign an Global Component
app.component('ChildComponent', ChildComponent).mount('#app')
