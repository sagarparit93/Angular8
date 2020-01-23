import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ListComponent } from './list/list.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent} from './register/register.component';
import { from } from 'rxjs';

const routes: Routes = [
  {path: '', component: HomeComponent },
  {path: 'list', component: ListComponent },
  {path: 'aboutus', component: AboutusComponent},
  {path: 'contactus', component: ContactusComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
