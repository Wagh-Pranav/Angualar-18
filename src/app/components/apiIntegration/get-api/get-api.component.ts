import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { AlertComponent } from "../../reusableComponent/alert/alert.component";

@Component({
  selector: 'app-get-api',
  imports: [AlertComponent],
  templateUrl: './get-api.component.html',
  styleUrl: './get-api.component.css'
})
export class GetApiComponent 
{
  userList: any [] = [];
  customerList: any [] = [];
  alertMsg : string = ''

  constructor(private http: HttpClient) {
    this.getAllUser();
  } 

  changeMSg() {
    this.alertMsg = 'THHJJHJ'
  }

  getAllUser() {
    debugger;
    this.http.get("https://jsonplaceholder.typicode.com/users").subscribe((result:any)=>{
      debugger;
      this.userList = result;
    })
  }

  getAllCustomer() {
    debugger;
    this.http.get("https://projectapi.gerasim.in/api/PropertyBookingController/GetAllCustomer").subscribe((res:any)=>{
      debugger;
      this.customerList =  res.data;
    }, error=>{
      debugger;
    })
  }

}
