import { Component } from '@angular/core';

@Component({
  selector: 'app-for-loop',
  imports: [],
  templateUrl: './for-loop.component.html',
  styleUrl: './for-loop.component.css'
})
export class ForLoopComponent {

  studentList:any[]=
  [
    { id:10,name:'Pranav',city:'Denver',isActive:false},
    { id:11,name:'Abhi',city:'Los Angeles',isActive:false},
    { id:12,name:'Hansel',city:'Chicago',isActive:true},
    { id:13,name:'Vinayak',city:'San Fancisco',isActive:false}
  ]
}
