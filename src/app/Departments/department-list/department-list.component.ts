import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {
  Department,
  DepartmentService,
} from '../../Services/departments.service';

@Component({
  selector: 'app-department-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './department-list.component.html',
  styleUrl: './department-list.component.css',
})
export class DepartmentListComponent implements OnInit {
  departments: Department[] = [];

  constructor(private departmentService: DepartmentService) {}

  ngOnInit(): void {
    this.departmentService.getAll().subscribe((data) => {
      this.departments = data;
      console.log('Departments:', data);
    });
  }

  delete(id: number) {
    if (!confirm('Are you sure you want to delete this Department?')) return;
    this.departmentService
      .delete(id)
      .subscribe({
        next: () => this.departments.filter((dept) => dept.id !== id),
      });
  }

  update(id: number, department: Department) {
    /////
  }
}
