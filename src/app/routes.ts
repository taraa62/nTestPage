import {HomeComponent} from './pages/home/page';
import {RouterModule, Routes} from '@angular/router';
import {AuthGuard} from './pages/login/AuthGuard';
import {LoginComponent} from './pages/login/login';

const appRoutes: Routes = [


  {path: '', component: HomeComponent, canActivate: [AuthGuard]},
  {path: 'login', component: LoginComponent},
  {path: '**', redirectTo: ''},
];


export const routing = RouterModule.forRoot(appRoutes);
