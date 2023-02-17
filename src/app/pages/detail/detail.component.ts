import { Component, OnInit, Input } from '@angular/core';

import { TodoService } from 'src/app/todo.service';
import { Todo } from 'src/app/todo';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  todo: Todo = { id: 0, status: 0, title: '', description: '', startDate: '', endDate: '' };

  private id: number = 0;

  constructor(
    private todoService: TodoService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.paramMap
      .subscribe((params: ParamMap) => {
          this.id = parseInt(params.get('id') ?? '', 10);
          const todo = this.todoService.get(this.id);
          if (todo === undefined) {
            this.router.navigate(['/']);
          }

          this.todo = todo as Todo;
      });
  }

  editTodo(): void {
    if (!this.todo) {
      return;
    }

    this.todoService.edit(this.todo);

    this.router.navigate(['/']);
  }

  deleteTodo(): void {
    this.todoService.delete(this.id);

    this.router.navigate(['/']);
  }
}
