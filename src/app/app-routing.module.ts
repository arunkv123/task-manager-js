import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { AddTaskComponent } from './add-task/add-task.component';
import { ViewTaskComponent } from './view-task/view-task.component';
import { EditTaskComponent } from './edit-task/edit-task.component';
import { DeleteTaskComponent } from './delete-task/delete-task.component';
import { HttpModule } from '@angular/http';
import { Ng5SliderModule } from 'ng5-slider';

const routes: Routes = [
  { path: '', redirectTo: '/add', pathMatch: 'full' },
  { path: 'add', component: AddTaskComponent },
  { path: 'view', component: ViewTaskComponent },
];


@NgModule({
  imports: [
    Ng5SliderModule,
    RouterModule.forRoot(routes), CommonModule, FormsModule,
    ReactiveFormsModule, HttpModule
  ],

  exports: [RouterModule],
  declarations: [AddTaskComponent, ViewTaskComponent, EditTaskComponent,
    DeleteTaskComponent]
})
export class AppRoutingModule {

}
