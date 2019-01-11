<template>
	<div id="app">
		<HelloWorld :welcome="welcome" />
		<Todos :todos="todos" v-on:del-todo="deleteTodo" v-on:strike-item="toggleCompleted" />
		<AddTodo v-on:add-todo="addTodoToList" />
	</div>
</template>

<script>
import axios from 'axios';
import HelloWorld from './HelloWorld';
import Todos from './Todos';
import AddTodo from './AddTodo';

export default {
	name: 'Home',
	components: {
		HelloWorld,
		Todos,
		AddTodo
	},
	data() {
		return {
			welcome: 'Todos',
			todos: []
		};
	},
	methods: {
		toggleCompleted(todo) {
			const { id, completed } = todo;
			axios
				.put(`https://jsonplaceholder.typicode.com/todos/${id}`, {
					completed: !completed
				})
				.then(res => {
					const { data } = res;
					this.todos = this.todos.map(todoItem => {
						if (todo.id === todoItem.id) {
							return {
								...todoItem,
								...data
							};
						}
						return todoItem;
					});
				})
				.catch(err => console.log(err));
		},
		deleteTodo(id) {
			axios
				.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
				.then(res => (this.todos = this.todos.filter(todo => todo.id !== id)))
				.catch(err => console.log(err));
		},
		addTodoToList(todo) {
			const { title, completed } = todo;
			axios
				.post('https://jsonplaceholder.typicode.com/todos', {
					userId: 1,
					title,
					completed
				})
				.then(res => (this.todos = [...this.todos, res.data]))
				.catch(err => console.log(err));
		}
	},
	created() {
		axios
			.get('https://jsonplaceholder.typicode.com/todos?userId=1')
			.then(res => (this.todos = res.data))
			.catch(err => console.log(err));
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

.btn-primary {
	font-weight: bolder;
	height: 3em;
	width: 3em;
	border-radius: 50%;
	color: white;
	cursor: pointer;
	border-color: transparent;
}
</style>
