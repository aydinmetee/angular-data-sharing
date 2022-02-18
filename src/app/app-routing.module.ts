import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HobbiesFormComponent } from './hobbies-form/hobbies-form.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'hobies',
    pathMatch: 'full',
  },
  {
    path: 'hobies',
    component: HobbiesFormComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
