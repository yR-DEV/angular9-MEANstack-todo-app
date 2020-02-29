import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TaskCreateComponent } from './components/task-create/task-create.component';
import { TaskListComponent } from './components/task-list/task-list.component';
import { TaskEditComponent } from './components/task-edit/task-edit.component';


const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'create-task' },
  { path: 'create-task', component: TaskCreateComponent },
  { path: 'edit-task/:id', component: TaskEditComponent },
  { path: 'task-list', component: TaskListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
