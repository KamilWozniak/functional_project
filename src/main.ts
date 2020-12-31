import { createApp } from 'vue';
import root          from '@/root/root.vue';
import router        from './router';
import store         from './store';

createApp(root).use(store).use(router).mount('#app');
