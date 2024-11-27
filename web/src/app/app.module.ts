import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ChildComponent } from './child/child.component';
import { ParentComponent } from './parent/parent.component';
import { BsCompComponent } from './BehaviourSubject/bs-comp/bs-comp.component';
import { ChildCompComponent } from './BehaviourSubject/child-comp/child-comp.component';
import { BindingComponent } from './Binding/binding/binding.component';
import { UsersService } from './Binding/users.service';
import { HeaderComponent } from './errorCode/header/header.component';
import { PromiseComponent } from './errorCode/promise/promise.component';
import { ObservableComponent } from './errorCode/observable/observable.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    AppComponent,
    ChildComponent,
    ParentComponent,
    BsCompComponent,
    ChildCompComponent,
    BindingComponent,
    HeaderComponent,
    PromiseComponent,
    ObservableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [UsersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
