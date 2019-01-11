<template>
	<div class="todos">
		<ul>
			<TodoItem
				v-bind:key="todo.id"
				v-for="todo in todos"
				:todo="todo"
				v-on:del-todo="$emit('del-todo', todo.id);"
				v-on:strike-item="$emit('strike-item', todo);"
			/>
		</ul>
	</div>
</template>

<script>
import TodoItem from './TodoItem';

export default {
	name: 'Todos',
	components: {
		TodoItem
	},
	props: {
		todos: Array
	}
};
</script>

<style scoped>
ul {
	// margin: 0;
	text-align: left;
}
</style>
