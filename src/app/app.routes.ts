import { Routes } from '@angular/router';
import { EmployeesListComponent } from './Employees/employees-list/employees-list.component';
import { EmployeeFormComponent } from './Employees/employee-form/employee-form.component';
import { DepartmentListComponent } from './Departments/department-list/department-list.component';
import { DepartmentFormComponent } from './Departments/department-form/department-form.component';
import { PositionListComponent } from './Positions/position-list/position-list.component';
import { PositionFormComponent } from './Positions/position-form/position-form.component';
import { NotfoundComponent } from './Shared/notfound/notfound.component';

export const routes: Routes = [
  { path: '', redirectTo: 'employees', pathMatch: 'full' },
  { path: 'employees', component: EmployeesListComponent ,title:"Employees"},
  { path: 'employee/add', component: EmployeeFormComponent,title:"Add Employee" },
  { path: 'employees/edit/:id', component: EmployeeFormComponent, title:"Edit Employee" },
  { path: 'departments', component: DepartmentListComponent , title:"Departments" },
  { path: 'departments/add', component: DepartmentFormComponent, title:"Add Department" },
  { path: 'departments/edit/:id', component: DepartmentFormComponent,title:"Edit Department" },
  { path: 'positions', component: PositionListComponent , title:"Positions" },
  { path: 'positions/add', component: PositionFormComponent,title:"Add Position" },
  { path: 'positions/edit/:id', component: PositionFormComponent ,title:"Edit Position"  },


  { path: '**', component: NotfoundComponent ,title:"Page Not Found"  },
];
