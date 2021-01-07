import { createApp } from 'vue';
import root          from '@/root/root.vue';
import store         from '@/store/application.store';
import router        from './router';

createApp(root).use(store).use(router).mount('#app');
