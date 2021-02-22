import { Injectable } from '@angular/core';
import { Employee } from './employee';
import { AngularFirestore } from '@angular/fire/firestore';


@Injectable({
  providedIn: 'root'
})
export class EmployeesService {

  constructor(private db: AngularFirestore) { }

  employeesList: Employee[] =[
    {id:1, empName:"Vusi",empSurname:"Ngomane",empPosition:"front-end Developer",empAge:19,   empImage:"https://images.pexels.com/photos/1648413/pexels-photo-1648413.jpeg?cs=srgb&dl=pexels-victoria-borodinova-1648413.jpg&fm=jpg"},
    {id:2, empName:"Lucky",empSurname:"Ndlami",empPosition:"Developer",empAge:20,empImage:"https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?cs=srgb&dl=pexels-justin-shaifer-1222271.jpg&fm=jpg"},
    {id:3, empName:"December",empSurname:"Makhanya",empPosition:"Mobile Developer",empAge:24,empImage:"https://images.pexels.com/photos/3775534/pexels-photo-3775534.jpeg?cs=srgb&dl=pexels-andrea-piacquadio-3775534.jpg&fm=jpg"},
    {id:4, empName:"Lwandle",empSurname:"Khoza",empPosition:"Developer",empAge:29,empImage:"https://images.pexels.com/photos/1081188/pexels-photo-1081188.jpeg?cs=srgb&dl=pexels-graham-wizardo-1081188.jpg&fm=jpg"},
    {id:5, empName:"Evans",empSurname:"Mabaso",empPosition:"Senior Developer",empAge:30,empImage:"https://images.pexels.com/photos/3785077/pexels-photo-3785077.jpeg?cs=srgb&dl=pexels-andrea-piacquadio-3785077.jpg&fm=jpg"},
    {id:6, empName:"Goodman",empSurname:"Mhlongo",empPosition:"Back-end Developer",empAge:25,empImage:"https://images.pexels.com/photos/842569/pexels-photo-842569.jpeg?cs=srgb&dl=pexels-andrea-piacquadio-842569.jpg&fm=jpg"},
    {id:7, empName:"Fayve",empSurname:"Malale",empPosition:"Devs Ops",empAge:31,empImage:"https://images.pexels.com/photos/903661/pexels-photo-903661.jpeg?cs=srgb&dl=pexels-tim-savage-903661.jpg&fm=jpg"},
    {id:8, empName:"Wandile",empSurname:"Nyoni",empPosition:"Developer",empAge:28,empImage:"https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?cs=srgb&dl=pexels-stefan-stefancik-91227.jpg&fm=jpg"},
    {id:9,empName:"Thabo",empSurname:"Mbatha",empPosition:"Senior Developer",empAge:27,empImage:"https://images.pexels.com/photos/1445527/pexels-photo-1445527.jpeg?cs=srgb&dl=pexels-doug-bolton-1445527.jpg&fm=jpg"}
  ]

  getAllEmployee() {
    //return this.employeesList;
    // ********Firebase**********
    return this.db.collection("employees").valueChanges();
  }

  updateEmployee(emp: Employee) {
    const index = this.employeesList.findIndex(c => c.id === emp.id);
    if ( index  >-1) {
      this.employeesList[index] = emp;
    }
  }
  
  deleteEmployee(id) {
    const emp = this.employeesList.findIndex(c => c.id == id);
    if (emp >-1) {
      this.employeesList.splice(emp,1);}
      
      // ********Firebase**********
      let empid = id
      return this.db.collection("employees").doc(id.toString()).delete();

    //   this.db.collection("employees").doc("employes").delete().then(function() {
    //     console.log("Document successfully deleted!");
    // }).catch(function(error) {
    //     console.error("Error removing document: ", error);
    // });
     
  }
  addEmployee(employee: Employee) {
        this.employeesList.push({
      id: this.employeesList.length ,
      empName: employee.empName,
      empSurname:employee.empSurname,
      empPosition: employee.empPosition,
      empAge: employee.empAge,
      empImage: employee.empImage
    });

     // ********Firebase**********
     var id = employee.id+1
    this.db.collection("employees").doc(id.toString()).set({
      id: this.employeesList.length ,
      empName: employee.empName,
      empSurname:employee.empSurname,
      empPosition: employee.empPosition,
      empAge: employee.empAge,
      empImage: employee.empImage
    })
      .then(function () {
        console.log("Document successfully written!");
      })
      .catch(function (error) {
        console.error("Error writing document: ", error);
      });
        
      // var docRef = db.collection("employees").doc("employes");

      // docRef.get().then(function(doc) {
      //     if (doc.exists) {
      //         console.log("Document data:", doc.data());
      //     } else {
      //         // doc.data() will be undefined in this case
      //         console.log("No such document!");
      //     }
      // }).catch(function(error) {
      //     console.log("Error getting document:", error);
      // });
  }
  
  // getEmployee(){
    

  //    var docRef = this.db.collection("employees").doc("employes");

  //     docRef.get().then(function(doc) {
  //         if (doc.exists) {
  //             console.log("Document data:", doc.data());
  //         } else {
  //             // doc.data() will be undefined in this case
  //             console.log("No such document!");
  //         }
  //     }).catch(function(error) {
  //         console.log("Error getting document:", error);
  //     });

  // };
  // DltEmployee(){

  //   this.db.collection("employees").doc("employes").delete().then(function() {
  //     console.log("Document successfully deleted!");
  // }).catch(function(error) {
  //     console.error("Error removing document: ", error);
  // });
  // }
}
