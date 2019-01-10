<template>
	<div id="app">
		<img width="10%" src="./assets/logo.png" /> <HelloWorld :welcome="welcome" />
		<Todos :todos="todos" />
	</div>
</template>

<script>
import HelloWorld from './components/HelloWorld';
import Todos from './components/Todos';

export default {
	name: 'App',
	components: {
		HelloWorld,
		Todos
	},
	data() {
		return {
			welcome: 'Todos',
			todos: [
				{
					userId: 1,
					id: 1,
					title: 'delectus aut autem',
					completed: false
				},
				{
					userId: 1,
					id: 2,
					title: 'quis ut nam facilis et officia qui',
					completed: false
				},
				{
					userId: 2,
					id: 1,
					title: 'fugiat veniam minus',
					completed: false
				}
			]
		};
	}
};
</script>

<style>
#app {
	font-family: 'Avenir', Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
	margin-top: 60px;
}
</style>
