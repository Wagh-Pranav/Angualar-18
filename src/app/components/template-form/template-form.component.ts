import { JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

const Constant = {
  VALIDATION_MESSAGE: {
    required: 'This field is required',
    minlength: 'Minimum length not met',
  },
};

@Component({
  selector: 'app-template-form',
  imports: [FormsModule,JsonPipe],
  templateUrl: './template-form.component.html',
  styleUrl: './template-form.component.css'
})
export class TemplateFormComponent {

  

  studentObj: any = {
    firstName: '',
    lastName: '',
    userName:'',
    city: '',
    state: '',
    zipCode:'',
    isAcceptTerms: false
  }

  validationMessage: any =  Constant.VALIDATION_MESSAGE;
  formValue: any;

  onSubmit() {
    debugger;
    this.formValue  = this.studentObj;
  }
  resetForm() {
    this.studentObj = {
      firstName: '',
      lastName: '',
      userName:'',
      city: '',
      state: '',
      zipCode:'',
      isAcceptTerms: false
    }
  }

}
