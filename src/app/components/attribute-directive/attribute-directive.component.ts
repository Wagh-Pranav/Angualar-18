import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-attribute-directive',
  imports: [CommonModule,FormsModule,RouterLink],
  templateUrl: './attribute-directive.component.html',
  styleUrl: './attribute-directive.component.css'
})
export class AttributeDirectiveComponent {

  div1BgColor:string='bg-danger';
  isDiv2Active:boolean=false;
  num1:string='';
  num2:string='';
  isActive:boolean=false;
  studentList:any[]=
  [
    { id:10,name:'Pranav',city:'Denver',isActive:false},
    { id:11,name:'Abhi',city:'Los Angeles',isActive:false},
    { id:12,name:'Hansel',city:'Chicago',isActive:true},
    { id:13,name:'Vinayak',city:'San Fancisco',isActive:false}
  ]

  addRedClass(){
    this.div1BgColor='bg-danger';
  }

  addBlueClass(){
    this.div1BgColor='bg-primary';
  }

  toggleDiv2Class(){
    this.isDiv2Active=! this.isDiv2Active;
  }



}
