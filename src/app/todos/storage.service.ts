import { Injectable } from '@angular/core';
import { Todo } from './model/todo';

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  storageKey = 'savedTodos';

  constructor() {}

  public saveTodos(todos: Todo[]): void{
    const savedTodos = JSON.stringify(todos);
    localStorage.setItem(this.storageKey, savedTodos);
  }
  public loadTodos(): Todo[] {
    const savedTodos = localStorage.getItem(
      this.storageKey,
      );
      if (savedTodos === null){
    return [];
  }
const todosObjects: Todo[] = JSON.parse(savedTodos)
return todosObjects
  }
}
