import { AsyncPipe, JsonPipe, DatePipe, UpperCasePipe, LowerCasePipe, TitleCasePipe } from '@angular/common';
import { Component } from '@angular/core';
import { Observable,interval, map } from 'rxjs';
import { NaPipe } from '../../pipes/na.pipe';


@Component({
  selector: 'app-pipe',
  imports: [NaPipe,AsyncPipe,JsonPipe,DatePipe,UpperCasePipe,LowerCasePipe,TitleCasePipe],
  templateUrl: './pipe.component.html',
  styleUrl: './pipe.component.css'
})
export class PipeComponent {

  firstName: string = "this is a demo session";
  currentDate: Date = new Date();
  currentTime: Observable<Date>;
  student: any = {
    name: 'Pranav',
    city: 'Pune',
    empId: 323,
    state: undefined
  };
  currentRole: string = '';

  constructor() {

    this.currentTime = interval(1000).pipe(map(() => new Date()));
  }

}
