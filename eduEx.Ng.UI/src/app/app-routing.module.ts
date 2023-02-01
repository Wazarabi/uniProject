import { RegisterPageComponent } from './components/pages/register-page/register-page.component';
import { LoginPageComponent } from './components/pages/login-page/login-page.component';
import { CoursePageComponent } from './components/pages/course-page/course-page.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/pages/home/home.component';
import { CartPageComponent } from './components/pages/cart-page/cart-page.component';

const routes: Routes = [
  {path:'', component:HomeComponent}, //Once we have a landing page we add it here
  {path:'search/:searchTerm', component:HomeComponent},
  {path:'tag/:tag', component:HomeComponent},
  {path:'course/:id', component:CoursePageComponent},
  {path:'cart-page', component:CartPageComponent},
  {path:'login', component:LoginPageComponent},
  {path:'register', component:RegisterPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
