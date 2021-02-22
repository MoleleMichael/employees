import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { EmployeesService } from '../employees.service';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {
  message: string = "Employee Details"
    public contactForm: FormGroup;

  constructor(private _formBuilder: FormBuilder, private employeeService: EmployeesService, private router: Route) { }

  ngOnInit(): void {
    this.contactForm = this._formBuilder.group({
      id: 10,
       empName: "",
       empSurname: "",
       empPosition: "",
       empAge: "",
       empImage: ""
     });
  }
  onSubmit() {
    this.employeeService.addEmployee(this.contactForm.value);
    
  }
  // Edit(){
  //   this.employeeService.getEmployee();
  // }
  // Delete(){
  //   this.employeeService.DltEmployee();
  // }
}
