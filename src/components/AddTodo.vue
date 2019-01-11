<template>
	<form @submit="addTodo">
		<input class="add-todo" v-model="title" type="text" placeholder="What do you want to do" />
		<button class="btn-primary add-btn" type="submit">+</button>
	</form>
</template>

<script>
import uuid from 'uuid';

export default {
	name: 'AddTodo',
	data() {
		return {
			title: ''
		};
	},
	methods: {
		addTodo(e) {
			e.preventDefault();
			const newTodo = {
				// id: uuid.v4(),
				title: this.title,
				completed: false
			};
			const immutableNewTodo = Object.freeze(newTodo);
			this.title = '';
			// Send up to parent
			this.$emit('add-todo', immutableNewTodo);
		}
	}
};
</script>

<style scoped>
form {
	display: flex;
	justify-content: space-around;
}

.add-todo {
	width: 70%;
	border-radius: 10em;
	border-color: solid 1 px rgba(0, 0, 0, 0.2);
	padding: 1.25em;
}

.add-btn {
	background: #3cb371;
	font-size: 0.75em;
}
</style>
