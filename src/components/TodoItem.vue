<template>
	<li class="todo-item">
		<p class="todo-text" v-bind:class="{ 'is-completed': todo.completed }">
			<input
				type="checkbox"
				v-on:change="$emit('strike-item', todo);"
				:checked="todo.completed ? true : false"
			/>
			{{ todo.title }}
		</p>
		<button class="btn-primary del" @click="$emit('del-todo', todo.id);">X</button>
	</li>
</template>

<script>
export default {
	name: 'TodoItem',
	props: ['todo']
};
</script>

<style scoped>
.todo-item {
	list-style: none;
	margin: 1em 0;
	padding: 1.25em 2em;
	background: #dcdcdc;
	border-radius: 10em;
	display: flex;
	justify-content: space-between;
	align-items: center;
}

.is-completed {
	text-decoration: line-through;
}

.del {
	background: #ea3232;
}
</style>
