import {Component, OnInit} from '@angular/core';
import {MatFormFieldModule} from '@angular/material/form-field';
//MatFormFieldModule eka import karahama aniwaryenma MatInputModule ekath import karanna one
import {MatInputModule} from "@angular/material/input";
import {MatIconModule} from '@angular/material/icon'; //icon tika import karagannawa
import {MatSelectModule} from '@angular/material/select';
import {MatRadioModule} from "@angular/material/radio";
import {MatCheckboxModule} from '@angular/material/checkbox';
//devider eka use karanne ui eka divide karala hadanna one nisa
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from "@angular/material/button";
import {Employee} from "../employee.mode";
import {FormsModule, NgForm} from "@angular/forms";
import {HttpClient, HttpClientModule, HttpErrorResponse} from "@angular/common/http";
import {EmployeeService} from "../employee.service";
import {Router, RouterLink} from "@angular/router";


@Component({
  selector: 'app-employee',
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, MatIconModule, MatSelectModule, MatRadioModule, MatCheckboxModule, MatDividerModule, MatButtonModule, FormsModule, HttpClientModule, RouterLink],
  templateUrl: './employee.component.html',
  styleUrl: './employee.component.css'
})
export class EmployeeComponent implements OnInit{

  employee:Employee = {
    employeeAddress: "",
    employeeContactNUmber: "",
    employeeDepartment: "",
    employeeGender: "",
    employeeId: 0,
    employeeName: "",
    employeeSkills: ""

  }

  skills: string[] =[];


  constructor(private employeeService:EmployeeService,private router:Router) {
  }

  ngOnInit(): void {
  }


  selectGender(gender: string):void{
    this.employee.employeeGender=gender;
  }

  checkSkills(skill: string){
    return this.employee.employeeSkills != null && this.employee.employeeSkills.includes(skill);
  }

  //no need to check gender because cleaning gender select is normally working
  // checkGender(gender:string){
  //   return this.employee.employeeGender != null && this.employee.employeeGender == gender;
  //
  // }


  saveEmployee(employeeForm:NgForm):void{
  this.employeeService.saveEmployee(this.employee).subscribe(
    {
      next:(res:Employee)=>{
        console.log(res);
        employeeForm.reset();
        this.employee.employeeGender='';
        this.router.navigate(["/employee-list"]);
      },
      error:(err:HttpErrorResponse)=>{
        console.log(err);
      }
    }
  );
  }


  onSkillsChanges(event: any):void{
    console.log(event);
    if (event.checked){
      this.skills.push(event.source.value);
    }else {
      this.skills.forEach(
        (item,index)=>{
          if (item==event.source.value){
            this.skills.splice(index,1);
          }
      }
      );
    }
    this.employee.employeeSkills=this.skills.toString();
  }






}
