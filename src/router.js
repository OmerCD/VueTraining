import { createRouter, createWebHistory } from 'vue-router';
import CoachesList from '@/pages/coaches/CoachesList';
import CoachDetail from '@/pages/coaches/CoachDetail';
import ContactCoach from '@/pages/requests/ContactCoach';
import CoachRegistration from '@/pages/coaches/CoachRegistration';
import RequestReceived from '@/pages/requests/RequestReceived';
// import NotFound from '@/pages/NotFound';


const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', redirect: '/coaches' },
    { path: '/coaches', component: CoachesList },
    {
      path: '/coaches/:id', component: CoachDetail, props:true, children: [
        { path: 'contact', component: ContactCoach }
      ]
    },
    { path: '/register', component: CoachRegistration },
    { path: '/requests', component: RequestReceived },
    // { path: '/:notFound(.*)', component: NotFound }
  ]
});

export default router;