import Vue from 'vue';
import Router from 'vue-router';
import Home from './components/Home';

Vue.use(Router);

export default new Router({
	routes: [
		{
			path: '/',
			component: Home
		},
		{
			path: '/about',
			// This ensures that the component is lazy loaded only when the path is visited
			component: () => import('./About.vue')
		}
	]
});
