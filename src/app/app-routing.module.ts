import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {EventListComponent} from './component/event-list/event-list.component';

const routes: Routes = [
  {path:'event-list',component:EventListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
