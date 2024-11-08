import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PromiseComponent } from './errorCode/promise/promise.component';
import { ObservableComponent } from './errorCode/observable/observable.component';


const routes: Routes = [
{path:'promise',component: PromiseComponent},
{path:'observable',component:ObservableComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
