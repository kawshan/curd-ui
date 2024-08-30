import { Routes } from '@angular/router';
import {HeaderComponent} from "./header/header.component";
import {HomeComponent} from "./home/home.component";
import {EmployeeComponent} from "./employee/employee.component";
import {EmployeeListComponent} from "./employee-list/employee-list.component";

export const routes: Routes = [
  {path:'header',component:HeaderComponent},
  {path:'employee',component:EmployeeComponent},
  {path:'',component:HomeComponent},
  {path:'employee-list',component:EmployeeListComponent}
];
