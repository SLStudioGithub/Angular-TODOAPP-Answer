import { Component, OnInit } from '@angular/core';

import { TodoService } from 'src/app/todo.service';
import { Todo } from 'src/app/todo';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  todo: Todo = { id: 0, status: 0, title: '', description: '', startDate: '', endDate: '' };

  constructor(
    private todoService: TodoService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  addTodo(): void {
    this.todoService.addToList(Object.assign({}, this.todo));

    this.router.navigate(['/']);
  }

}
