<template>
  <div>
    <input v-model.trim="newTodoText" placeholder="New todo"
			@keyup.enter="addTodo" />
    <ul v-if="todos.length">
      <TodoListItem @remove="removeTodo" v-for="(todo,index) of todos" :todo="todo" :key="todo.id" :index="index">
      </TodoListItem>
    </ul>
    <p v-else>
			Nothing left in the list. Add a new todo in the input above.
    </p>
  </div>
</template>

<script>
import TodoListItem from './TodoListItem';
let nextTodoId = 1;
export default {
  components: {
    TodoListItem,
  },
  data(){
    return {
      newTodoText: '',
      todos: [
				{
					id: nextTodoId++,
					text: 'Learn Vue'
				},
				{
					id: nextTodoId++,
					text: 'Learn about single-file components'
				},
				{
					id: nextTodoId++,
					text: 'Fall in love'
				}
			]
    }
  },
  methods: {
    addTodo(){
      this.todos.push({
        id: nextTodoId++,
        text: this.newTodoText,
      });
      this.newTodoText='';
    },
    removeTodo(todoId){
      this.todos.splice(todoId,1);
      nextTodoId--;
      // this.todos = this.todos.filter(todo => {
			// 	return todo.id !== todoId;
			// });
    }
  }
}
</script>

<style>

</style>