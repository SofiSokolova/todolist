import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  todos: Map<symbol, string> = new Map();

  addTodo(text: string) {
    this.todos.set(Symbol(text), text);
  }

  removeTodo(id: symbol) {
    this.todos.delete(id);
  }
}
