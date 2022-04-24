import {HttpClientModule} from '@angular/common/http';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {CounterComponent} from './counter/counter.component';
import {TimerComponent} from './timer/timer.component';
import {TodoComponent} from './todos/todo/todo.component';
import {TodosComponent} from './todos/todos.component';
import {UsersComponent} from './users/users.component';
import { HighlightDirective } from './users/hilight.directive';
import { ReversePipe } from './reverse.pipe';

@NgModule({
  declarations: [
    AppComponent,
    CounterComponent,
    TodosComponent,
    TodoComponent,
    TimerComponent,
    UsersComponent,
    HighlightDirective,
    HighlightDirective,
    ReversePipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}