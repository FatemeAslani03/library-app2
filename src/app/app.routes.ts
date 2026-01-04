import { Routes } from '@angular/router';
import { LoginPage } from './+public/+pages/login-page/login-page';
import { parseTemplate } from '@angular/compiler';
import { PrivateTemplate } from './+private/private-template/private-template';
import { BooksPage } from './+private/books-page/books-page';
import { MembersPage } from './+private/members-page/members-page';
import { BorrowsPage } from './+private/borrows-page/borrows-page';
import { ReportsPage } from './+private/reports-page/reports-page';
import { DashboardPage } from './+private/dashboard-page/dashboard-page';
import { privateGuard } from './+private/+shared/private-guard';

export const routes: Routes = [
      {path:'login', component:LoginPage},
      {path:'private', canActivate:[privateGuard],component:PrivateTemplate,children:[
            {path:'books', component:BooksPage},
            {path:'members', component:MembersPage},
            {path:'borrows', component:BorrowsPage},
            {path:'report', component:ReportsPage},
            {path:'dashbord', component:DashboardPage},
            {path:'', redirectTo:'dashbord', pathMatch:'prefix'},
            {path:'**', redirectTo:'dashbord'}

      ]},
      {path:'', redirectTo:'login', pathMatch:'full'},
      {path:'**', redirectTo:'login'}
];
