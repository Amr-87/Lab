import { Component } from '@angular/core';
import { StudentListComponent } from '../student-list/student-list.component';

@Component({
  selector: 'app-student-details',
  standalone: true,
  imports: [StudentListComponent],
  templateUrl: './student-details.component.html',
  styleUrl: './student-details.component.css'
})
export class StudentDetailsComponent {
  id:number = 20;
  name: string = "hamada";
  age: number = 15;
  //  constructor(public id:number=20, public name:string){}
  
}
