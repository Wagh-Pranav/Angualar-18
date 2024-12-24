import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DepartmentService } from '../../../service/department.service';
import { AlertComponent } from "../../reusableComponent/alert/alert.component";

@Component({
  selector: 'app-post-api',
  imports: [FormsModule, AlertComponent],
  templateUrl: './post-api.component.html',
  styleUrl: './post-api.component.css'
})
export class PostApiComponent implements OnInit {

  deptObj: any = {
    "departmentId": 0,
    "departmentName": "",
    "department": ""
  };
  deptList: any[] = [];

  http = inject(HttpClient);

  constructor(private deptSrv: DepartmentService) {

  }

  ngOnInit(): void {
    this.getDepartment();
  }

  // onSave() {
  //   debugger;
  //   this.http.post("https://projectapi.gerasim.in/api/Complaint/AddNewDepartment", this.deptObj).subscribe((res:any)=>{
  //     debugger;
  //     if(res.result) {
  //       alert("Department Created Success");
  //         this.getDepartment();
  //     } else {
  //       alert(res.message)
  //     }
  //   })
  // }

  onSave() {
    this.deptSrv.saveNewDept(this.deptObj).subscribe((res: any) => {
      if (res.result) {
        alert("Department Created Success");
        this.getDepartment();
      } else {
        alert(res.message)
      }
    })
  }




  // getDepartment() {
  //   this.http.get("https://projectapi.gerasim.in/api/Complaint/GetParentDepartment").subscribe((res:any)=>{
  //     this.deptList = res.data;
  //   })
  // }

  getDepartment() {
    this.deptSrv.getAllDept().subscribe((res: any) => {
      this.deptList = res.data;
    })
  }

  onEdit(data: any[]) {
    this.deptObj = data;
  }

  onUpdate() {
    debugger;
    this.http.post("https://projectapi.gerasim.in/api/Complaint/UpdateDepartment", this.deptObj).subscribe((res: any) => {
      debugger;
      if (res.result) {
        alert("Department Updated Success");
        this.getDepartment();
      } else {
        alert(res.message)
      }
    })
  }

  onDelete(id: number) {
    debugger;
    this.http.delete("https://projectapi.gerasim.in/api/Complaint/DeletedepartmentBydepartmentId?departmentId=" + id).subscribe((res: any) => {
      if (res.result) {
        alert("Department Deleted Success");
        this.getDepartment();
      } else {
        alert(res.message)
      }
    })
  }

}
