import { Component, OnInit } from '@angular/core';
import { Todo } from '../../interfaces/todo';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})

export class TodoListComponent implements OnInit {

  todos: Todo[];
  todoTheme: string;
  todoTitle: string;
  idForTodo: number;
  filter: string;

  constructor() { }

  ngOnInit() {
    this.todoTheme = '';
    this.todoTitle = '';
    this.idForTodo = 5;
    this.filter = 'all';
    this.todos = [
        {
          id: 1,
          theme: 'опционально',
          title: '3 блока todo, done, trash',
          completed: false,
          editing: false,
        },
        {
          id: 2,
          theme: 'обязательно',
          title: 'можно помечать как done/undone, вытаскивать из корзины',
          completed: false,
          editing: false,
        },
        {
          id: 3,
          theme: 'обязательно',
          title: 'у каждого item есть тема',
          completed: false,
          editing: false,
        },
        {
          id: 4,
          theme: 'обязательно',
          title: 'в todo блоке есть переключатель вид списком/вид группированным списком',
          completed: false,
          editing: false,
        },
    ];
  }

  addTodo(): void {
    if (this.todoTitle.trim().length === 0) {
      return;
    }

    this.todos.push({
      id: this.idForTodo,
      theme: this.todoTheme,
      title: this.todoTitle,
      completed: false,
      editing: false
    })

    this.todoTitle = '';
    this.idForTodo++;
  }

  editTodo(todo: Todo): void {
    todo.editing = true;
  }

  deleteTodo(id: number): void {
    this.todos = this.todos.filter(todo => todo.id !== id);
  }

  doneEdit(todo: Todo): void {
    todo.editing = false;
  }

  remaining(): number {
    return this.todos.filter(todo => !todo.completed).length;
  }

  atLeastOneCompleted(): boolean {
    return this.todos.filter(todo => !todo.completed).length > 0;
  }

  clearCompleted(): void {
    this.todos = this.todos.filter(todo => !todo.completed);
  }

  checkAllTodos(): void {
    this.todos.forEach(todo => todo.completed = (event.target as HTMLInputElement).checked);
  }

  todosFiltered(): Todo[] {
    if (this.filter === 'all') {
      return this.todos;
    } else if (this.filter === 'active') {
      return this.todos.filter(todo => !todo.completed);
    } else if (this.filter === 'completed') {
      return this.todos.filter(todo => todo.completed);
    }

    return this.todos;
  }
}
