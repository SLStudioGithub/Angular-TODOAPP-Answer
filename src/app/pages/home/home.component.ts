import { Component, OnInit } from '@angular/core';

import { TodoService } from 'src/app/todo.service';
import { Todo } from 'src/app/todo';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  todoList: Todo[] = [];

  constructor(private todoService: TodoService) { }

  ngOnInit(): void {
    this.todoList = this.todoService.getList();
  }

  proceedStatus(id: number): void {
    this.todoList = this.todoService.proceedStatus(id);
  }

  changeFilter(filterType: string): void {
    switch (filterType) {
      case '0':
        this.todoList = this.todoService.getList().filter(t => t.status === 0);
        break;
      case '1':
        this.todoList = this.todoService.getList().filter(t => t.status === 1);
        break;
      case '2':
        this.todoList = this.todoService.getList().filter(t => t.status === 2);
        break;
      case '3':
        this.todoList = this.todoService.getList();
        break;
      default:
        break;
    }
  }

}
