import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { AddComponent } from './pages/add/add.component';
import { DetailComponent } from './pages/detail/detail.component';
import { HomeComponent } from './pages/home/home.component';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { FilterListComponent } from './components/filter-list/filter-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AddComponent,
    DetailComponent,
    HomeComponent,
    TodoListComponent,
    FilterListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
