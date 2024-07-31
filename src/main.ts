import './assets/base.css';

import { createApp } from 'vue';
import App from './App.vue';
import PrimeVue from 'primevue/config';
// import 'primevue/resources/themes/saga-blue/theme.css'; // Puedes cambiar el tema si lo deseas
// import 'primevue/resources/primevue.min.css';
// import 'primeicons/primeicons.css';
// import 'primeflex/primeflex.css';

const app = createApp(App);
app.use(PrimeVue);
app.mount('#app');
