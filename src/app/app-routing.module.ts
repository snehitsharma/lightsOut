import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './login-page/login-page.component';
import { HomeComponent } from './home/home.component';
import { MovieComponent } from './movie/movie.component';

const routes: Routes = [
  { path: '', redirectTo: 'LoginPageComponent',pathMatch:'full'},
   { path: 'login', component: LoginPageComponent},
   { path: 'home', component: HomeComponent},
   { path: 'movie', component: MovieComponent},
   {path: '**',component: LoginPageComponent} 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
