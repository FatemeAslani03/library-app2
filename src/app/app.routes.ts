import { Routes } from '@angular/router';
import { LoginPage } from './+public/+pages/login-page/login-page';
import { parseTemplate } from '@angular/compiler';
import { PrivateTemplate } from './+private/private-template/private-template';

export const routes: Routes = [
      {path:'login', component:LoginPage},
      {path:'private',component:PrivateTemplate,children:[

      ]},
      {path:'', redirectTo:'login', pathMatch:'full'},
      {path:'**', redirectTo:'login'}
];
