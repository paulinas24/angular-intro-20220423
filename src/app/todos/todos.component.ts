import { Component, OnInit } from '@angular/core';
import {Todo} from './model/todo';
import { StorageService } from './storage.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {

  public todos: Todo[] = [];
  public text: string = '';
  public addTodo() {
    const todo: Todo = {
      text: this.text,
      created: Date.now(),
      done: false, 
      priority: Math.ceil(Math.random() * 3),
    }
    this.todos.push(todo);
    this.clear();
    this.storageService.saveTodos(this.todos);
  }
  public clear() {
    this.text = ""
  }
public deleteTodo(todo: Todo) {
const index = this.todos.indexOf(todo);
this.todos.splice(index,1);
this.storageService.saveTodos(this.todos);

}

public style = {
}
  constructor(private storageService : StorageService) {}

  ngOnInit(): void {
    this.todos = this.storageService.loadTodos();
  }

}
