import { booleanAttribute, Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-if-else',
  imports: [FormsModule],
  templateUrl: './if-else.component.html',
  styleUrl: './if-else.component.css'
})
export class IfElseComponent {

  div1Visible:boolean=  false;
  isPrimaryDivVisible:boolean=true;
  num1:string='';
  num2:string='';
  selectedStatus:string='';

  showDiv1(){
    this.div1Visible=true;
  }
  hideDiv1(){
    this.div1Visible=false;
  }

  toggleDiv2()
  {
    this.isPrimaryDivVisible=!this.isPrimaryDivVisible;
  }
}
