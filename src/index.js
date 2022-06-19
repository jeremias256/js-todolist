import './styles.css';

import { Todo,TodoList } from './classes';
import { crearTodoHtml } from './js/componentes';
// import { TodoList } from './classes/todo-list.class';
// import { Todo } from './classes/todo.class';

export const todoList = new TodoList();

todoList.todos.forEach( todo => crearTodoHtml( todo ));

const newTodo = new Todo('Aprender javascript');

// -todoList.nuevoTodo(newTodo);
console.log('todos', todoList.todos);









//? todoList.todos[0].imprimirClase();
//? todoList.todos.forEach( crearTodoHtml()); solo si tiene un argumento el forEach
// 
//const tarea2 = new Todo('Aprender Bootstrap');

//gtodoList.nuevoTodo(tarea);
//gtodoList.nuevoTodo(tarea2);

//crearTodoHtml(tarea);

// localStorage.setItem('mi-key', 'ABC123');
// sessionStorage.setItem('mi-key','ABC123');
// setTimeout(() => {
//     localStorage.removeItem('mi-key');
// }, 1500);