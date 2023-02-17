import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-filter-list',
  templateUrl: './filter-list.component.html',
  styleUrls: ['./filter-list.component.css']
})
export class FilterListComponent implements OnInit {

  constructor() { }

  @Output()
  changeFilter: EventEmitter<string> = new EventEmitter();

  filter: string = '3';

  ngOnInit(): void {
  }

  onChangeFilter(_: Event): void {
    this.changeFilter.emit(this.filter);
  }

}
