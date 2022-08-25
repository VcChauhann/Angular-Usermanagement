import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EnterDetailsComponent } from './components/enter-details/enter-details.component';
import { HomeComponent } from './components/home/home.component';
import { RxjsComponent } from './components/rxjs/rxjs/rxjs.component';
import { ShowEmployeesComponent } from './components/show-employees/show-employees.component';

const routes: Routes = [
  {
    path:'',
    component: HomeComponent,
    pathMatch: "full"
  },
  {
    path:"enterDetail",
    component: EnterDetailsComponent,
    pathMatch: "full"
  },
  {
    path:"allUsers",
    component: ShowEmployeesComponent,
    pathMatch: "full"
  },
  {
    path:"rxjs",
    component: RxjsComponent,
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
