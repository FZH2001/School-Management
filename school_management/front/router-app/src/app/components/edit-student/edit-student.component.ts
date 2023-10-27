import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { StudentService } from 'src/app/services/student-service.service';

@Component({
  selector: 'app-edit-student',
  templateUrl: './edit-student.component.html',
  styleUrls: ['./edit-student.component.css']
})
export class EditStudentComponent {
  student: any; 
  studentId: number;

 

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private http: HttpClient,
    private studentService: StudentService
  ) { 
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        // Reload the component when the route changes
        this.ngOnInit();
      }
    });  }

  ngOnInit(): void {
    this.studentId = this.route.snapshot.params['id'];
console.log('the parameter is '+this.studentId);

this.studentService.get(this.studentId).subscribe((data) => {
  console.log(data);
  this.student = data;
});
 
 
}
updateStudent(): void {
  console.log('i am in the update and the id is '+this.studentId,this.student)
    this.studentService.update(this.studentId,this.student).subscribe((data: any) => {
   console.log(data);
  },
  
);
  this.router.navigate(['/admin']).then(() => {
    window.location.reload();
  });
}

}
