import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Employee} from "./employee.mode";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(public httpClient: HttpClient) { }


  api = "http://localhost:8080";

  public saveEmployee(employee:Employee): Observable<Employee> {
   return  this.httpClient.post<Employee>(`${this.api}/save/employee`,employee);
  }

  public getEmployees():Observable<Employee[]> {
    return this.httpClient.get<Employee[]>(`${this.api}/get/employee`);
  }


  public deleteEmployee(employeeId: number){
    return this.httpClient.delete(`${this.api}/delete/employee/${employeeId}`)
  }







}
