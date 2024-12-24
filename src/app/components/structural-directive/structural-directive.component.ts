import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-structural-directive',
  imports: [CommonModule,FormsModule],
  templateUrl: './structural-directive.component.html',
  styleUrl: './structural-directive.component.css'
})
export class StructuralDirectiveComponent {

  isDiv1Visible:boolean =true;
  Div2:boolean=true;
  num1:string='';
  num2:string='';
  selectedState: string='';
  isActive:boolean=false; 

  constructor(private router: Router )
  {

  }

  cityArray:string[]=['Chicago','Los Angeles','San Francisco','Seattle'];

  studentList:any[]=
  [
    { id:10,name:'Pranav',city:'Denver',isActive:false},
    { id:11,name:'Abhi',city:'Los Angeles',isActive:false},
    { id:12,name:'Hansel',city:'Chicago',isActive:true},
    { id:13,name:'Vinayak',city:'San Fancisco',isActive:false}
  ]

  showDiv1()
  {
    this.isDiv1Visible=true;
  }
  hideDiv1()
  {
    this.isDiv1Visible=false;
  }
  toggleDiv2()
  {
    this.Div2= !this.Div2;
  }

  navigateToAttribute()
  {
    this.router.navigateByUrl('Attribute-Directive');
  }
 
}
