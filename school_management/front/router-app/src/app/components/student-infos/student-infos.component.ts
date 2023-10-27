import { Component } from '@angular/core';
import { StudentService } from 'src/app/services/student-service.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-student-infos',
  templateUrl: './student-infos.component.html',
  styleUrls: ['./student-infos.component.css']
})
export class StudentInfosComponent {
  notes: any[];
  studentId:number
  student:any

isLoading:boolean
ngOnInit(): void {
  this.isLoading=true
   this.route.params.subscribe(params => {
    this.studentId = params['id'];
    this.getStudent(this.studentId)
  })
}
constructor(private studentService:StudentService
  ,    private route: ActivatedRoute,
  private router: Router){
    console.log('i am called')
  this.studentId = this.route.snapshot.params['id'];
  this.getStudent(this.studentId)
  }


getStudent(studentId:number){
  this.isLoading=true

  this.studentService.getNotes(studentId).subscribe((data: any[]) => {
    console.log('the data is '+data)
    this.notes = data; 
    this.isLoading=false

  });
}
}
