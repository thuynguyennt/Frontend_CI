import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoffeeComponent } from './home/coffee/coffee.component';
import { ContactUsComponent } from './home/contact-us/contact-us.component';
import { DiscoverComponent } from './home/discover/discover.component';
import { HomeCoffeeComponent } from './home/home-coffee/home-coffee.component';
import { LoginComponent } from './home/login/login.component';
import { SigninComponent } from './home/signin/signin.component';
import { TeaComponent } from './home/tea/tea.component';

const routes: Routes = [
  {
    path: 'home-coffee', 
    component: HomeCoffeeComponent,
  },
  {
    path: 'coffee', 
    component: CoffeeComponent,
  },
  {
    path: 'tea',
    component: TeaComponent,
  },
  {
    path: 'contact',
    component: ContactUsComponent,
  },
  {
    path: 'discover',
    component: DiscoverComponent,
  },
  {
    path: 'signin',
    component: SigninComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: ' ', 
    redirectTo: '/home-coffee',
    pathMatch: 'full',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
