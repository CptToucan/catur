import { Router } from '@vaadin/router';

const router = new Router(document.getElementById("main"), { baseUrl: '/catur/' });

const routes = [
  {path: '/', component: 'index-route'},
] 

router.setRoutes([
  {path: '/',
    component: 'application-route',
    children: routes
  }
]);

export { router }