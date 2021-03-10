import { createApp } from 'vue';
import App from '@/App';
import router from '@/router';
import store from '@/store';
import BaseCard from '@/components/ui/BaseCard';
import BaseButton from '@/components/ui/BaseButton';
import BaseBadge from '@/components/ui/BaseBadge';

const app = createApp(App);

app.use(router);
app.use(store);

app.component('base-card', BaseCard);
app.component('base-button', BaseButton);
app.component('base-badge',BaseBadge)

app.mount('#app');
