import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Todo } from 'src/app/todo';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  @Input() todo: Todo;

  @Output() proceedStatus: EventEmitter<number> = new EventEmitter();

  statusNameList: { [key: number]: string } = {
    0: '未着手',
    1: '作業中',
    2: '完了'
  }

  buttonClass: string = 'secondary';
  buttonClassList: { [key: number]: string } = {
    0: 'secondary',
    1: 'warning',
    2: 'critical'
  };

  constructor() {
    this.todo = {
      id: 0, status: 0, title: '', description: '', startDate: '', endDate: ''
    }
  }

  ngOnInit(): void {
  }

  onClickProceedStatus(): void {
    this.proceedStatus.emit(this.todo.id);
  }

  getStatusName(): string {
    return this.statusNameList[this.todo.status];
  }

  getButtonClass(): string {
    return this.buttonClassList[this.todo.status];
  }
}
