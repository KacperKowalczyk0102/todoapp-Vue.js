import { createApp } from 'vue';
import App from './App.vue';
import './main.scss';
import Apka from './components/Apka.vue';

import { createRouter, createWebHistory } from 'vue-router'; // Zmieniony import
import Login from './components/Login.vue';
import Kontakt from './components/Kontakt.vue';

const routes = [
    { path: '/', component: Login,},
    { path: '/kontakt', component: Kontakt },
    { path: '/apka', component: Apka }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

createApp(App).use(router).mount('#app'); // Użyj createApp do tworzenia aplikacji Vue i dodaj router przed montowaniem aplikacji
