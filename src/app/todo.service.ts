import { Injectable } from '@angular/core';

import { Todo } from './todo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  todoList: Todo[] = [];

  constructor() { }

  /**
   * 新規登録
   */
  addToList(todo: Todo): void {
    let maxId: number = 0;
    this.todoList.forEach((todo: Todo) => {
      if (!maxId || todo.id > maxId ) {
        maxId = todo.id;
      }
    })

    this.todoList.push(Object.assign({}, todo, {id: maxId + 1}));
  }

  /**
   * 一件取得
   */
  get(id: number): Todo|undefined {
    return this.todoList.find(t => t.id === id);
  }

  /**
   * 更新
   */
  edit(todo: Todo): void {
    const index = this.todoList.findIndex(t => t.id === todo.id);
    this.todoList.splice(index, 1, todo);
  }

  /**
   * ステータス変更
   */
  proceedStatus(id: number): Todo[] {
    const todo = this.todoList.find(t => t.id === id);
    if (!todo) {
      return this.todoList;
    }

    todo.status = Math.min(todo.status + 1, 2);

    return this.todoList;
  }

  /**
   * 一件削除
   */
  delete(id: number): void {
    this.todoList = this.todoList.filter(todo => todo.id !== id);
  }

  /**
   * 全件取得
   */
  getList(): Todo[] {
    return this.todoList.sort((a, b) => a.startDate > b.startDate ? 1 : -1);
  }

  /**
   * 全件削除
   */
  clearList(): Todo[] {
    this.todoList = [];
    return this.todoList;
  }
}
