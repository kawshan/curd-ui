import {Component, OnInit} from '@angular/core';
import {EmployeeService} from "../employee.service";
import {Employee} from "../employee.mode";
import {HttpErrorResponse} from "@angular/common/http";
import {
  MatCell,
  MatCellDef,
  MatColumnDef,
  MatHeaderCell,
  MatHeaderCellDef,
  MatHeaderRow, MatHeaderRowDef, MatRow, MatRowDef,
  MatTable
} from "@angular/material/table";
import {MatButton, MatFabButton} from "@angular/material/button";
import {RouterLink} from "@angular/router";
import {MatIcon} from "@angular/material/icon";

@Component({
  selector: 'app-employee-list',
  standalone: true,
  imports: [
    MatTable,
    MatColumnDef,
    MatHeaderCell,
    MatCell,
    MatHeaderCellDef,
    MatCellDef,
    MatHeaderRow,
    MatRow,
    MatRowDef,
    MatHeaderRowDef,
    MatButton,
    RouterLink,
    MatIcon,
    MatFabButton
  ],
  templateUrl: './employee-list.component.html',
  styleUrl: './employee-list.component.css'
})
export class EmployeeListComponent implements OnInit {

  dataSource: Employee[] = [];


  displayedColumns: string[] = [
    'employeeId',
    'employeeName',
    'employeeContactNUmber',
    'employeeAddress',
    'employeeGender',
    'employeeDepartment',
    'employeeSkills',
    'delete'
  ];

  constructor(private employeeService: EmployeeService) {
    this.getEmployeeList();
  }

  ngOnInit(): void {
  }


  getEmployeeList(): void {
    this.employeeService.getEmployees().subscribe({
      next: (res: Employee[]) => {
        console.log(res);
        this.dataSource = res;
      },
      error: (err: HttpErrorResponse) => {
        console.log(err);
      }
    })
  }


  deleteEmployee(employeeId: number): void {
    console.log(employeeId);
    this.employeeService.deleteEmployee(employeeId).subscribe({
      next:(res)=>{
        console.log(res);
        this.getEmployeeList();
      },
      error:(err:HttpErrorResponse)=>{
        console.log(err);
      }
    })
  }


}
