import { Component, OnInit } from '@angular/core';
import { Todo } from '../../interfaces/todo';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})

export class TodoListComponent implements OnInit {

  todos: Todo[];
  todoTitle: string;

  constructor() { }

  ngOnInit() {
    this.todoTitle = '';
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

  // addTodo(): void {
  //   if (this.todoTitle.trim().length === 0) {
  //     return;
  //   }

  //   this.todos.push( {
  //     id: this.id,

  //   })
  // }

  deleteTodo(id: number): void {
    this.todos = this.todos.filter(todo => todo.id !== id);
  }

}
