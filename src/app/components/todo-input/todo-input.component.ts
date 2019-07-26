import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-todo-input',
  templateUrl: './todo-input.component.html',
  styleUrls: ['./todo-input.component.scss']
})
export class TodoInputComponent {
  @Output() addTodo = new EventEmitter<string>();
  todoText = '';

  onAddTodo(): void {
    this.addTodo.emit(this.todoText);
    this.todoText = '';
  }

}
