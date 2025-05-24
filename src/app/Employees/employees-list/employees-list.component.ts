import { Component, OnInit } from '@angular/core';
import { Employee, EmployeesService } from '../../Services/employees.service';
import { error } from 'console';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-employees-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './employees-list.component.html',
  styleUrl: './employees-list.component.css'
})
export class EmployeesListComponent implements OnInit {

  employees: Employee[] = [];

  constructor(private employeesService: EmployeesService) {}

  ngOnInit(): void {
    this.employeesService.getAll().subscribe(data=>{
      this.employees=data;
    });
  }

  delete(id:number){
    if (!confirm('Are you sure you want to delete this employee?')) return;
      this.employeesService.delete(id).subscribe({
        next:()=>this.employees=this.employees.filter(emp=>emp.id !== id)
      });
  }

  update(id:number,employee:Employee){

  }
}
