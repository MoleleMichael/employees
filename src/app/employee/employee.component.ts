import { Component, OnInit } from '@angular/core';
import { EmployeesService } from '../employees.service';
import { DialogComponent } from '../dialog/dialog.component';
import { UpdateDialogComponent } from '../update-dialog/update-dialog.component';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  constructor(private _employeeService: EmployeesService,
    public dialog: MatDialog) { }

  ngOnInit(): void {
    this.EmployeList()
  }

  employees: any

  EmployeList() {
    // return this._employeeService.getAllEmployee();
    this._employeeService.getAllEmployee().subscribe(data => { 
      this.employees = data  
      console.log(this.employees);
      
    });

  }

  updateDialog(id: number) {
    // let dialogRef = this.dialog.open(UpdateDialogComponent);
    // const Employee = this._employeeService.getAllEmployee().find(c => c.id === id);
    //  let dialogRef = this.dialog.open(UpdateDialogComponent ,{ data: Employee});
    //dialogRef.afterClosed().subscribe(result => {this.Company_Employees= result})
  }

  openDialog(employee) {
    const dialogRef = this.dialog.open(DialogComponent, {
      data: {
        message: 'Are you sure want to delete?',
        buttonText: {
          ok: 'Delete',
          cancel: 'No'
        }
      }
    });

    console.log(employee.id);
    this._employeeService.deleteEmployee(employee.id).then(results =>
       {console.log("Deleted");
      this.EmployeList()
    });

    // dialogRef.afterClosed().subscribe((confirmed: boolean) => {
    //   if (confirmed) {
    //     // const index = this.Company_Employees.indexOf(Employee,0)
    //     // if (index >-1) {
    //     //   this.Company_Employees.splice(index,1);
    //     // }
    //     this._employeeService.deleteEmployee(Employee)
    //   }
    // });
  }
}
