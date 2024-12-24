import { Component, signal, Signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-data-binding',
  imports: [FormsModule],
  templateUrl: './data-binding.component.html',
  styleUrl: './data-binding.component.css'
})
export class DataBindingComponent {


  //string,number,boolean,date

  courseName:string="Angular";
  inputType="checkbox";
  rollNo :number=123;
  isIndian:boolean=true;
  currentDate:Date=new Date();
  myClassName="Pranav";
  Location :string= "";
  fullName = signal("Pranav Wagh");


  constructor()
  {

  }

  changeClassName(message:string)
  { 
    this.courseName="Hello Pranav";
  }

  showAlert(message:string)
  {
    alert(message)
  }


}
