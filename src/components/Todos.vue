<template>
	<div class="todos">
		<ul v-bind:key="todo.userId" v-for="todo in todos">
			<li>{{ todo.title }}</li>
		</ul>
	</div>
</template>

<script>
export default {
	name: 'Todos',
	props: ['todos']
};
</script>

<style scoped></style>
