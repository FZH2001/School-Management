import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { StudentService } from 'src/app/services/student-service.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent {
  studentCNE:any=''
  notes: any[];
  student:any
studentId:any
isLoading:boolean
myForm: FormGroup;

  ngOnInit(): void {
    
  }
  constructor(private studentService:StudentService,private fb: FormBuilder) {
    this.myForm = this.fb.group({
      cne: ['', [Validators.required]]});

       this.myForm = this.fb.group({
        cne: ['', [Validators.required]] // Use Validators.required to make it required
      });
    }



  getStudent(){
    console.log(this.studentCNE)

    this.studentService.getNotes(this.studentId).subscribe((data: any[]) => {
      console.log('the data is '+data)
      this.notes = data; 
    });
  }
  getId(studentCNE:string){
    return studentCNE.substring(1)
  }
}
