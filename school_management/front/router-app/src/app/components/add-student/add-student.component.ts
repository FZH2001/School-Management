import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { StudentService } from 'src/app/services/student-service.service';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css'],
})
export class AddStudentComponent implements OnInit {
  student: any;
  studentForm: FormGroup;

  constructor(
    private studentService: StudentService,
    private formBuilder: FormBuilder,
    private http: HttpClient,
 //   private dialogErrorRef: MatDialog,
 //   private dialogRef: MatDialogRef<AddStudentComponent>,
    private router: Router
  ) {
    this.studentForm = this.formBuilder.group({
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$')]],
      phone: ['', [Validators.required, Validators.pattern('[0-9]{10}')]]})
  }
  ngOnInit(): void {
    this.studentForm = this.formBuilder.group({
      firstName: [''],
      lastName: [''],
      email: [''],
      phone:['']
    });
  }
  addStudent() {
    this.studentService.create(this.studentForm.value).subscribe((student) => student);
    this.router.navigate(['/admin']).then(() => {
      window.location.reload();
    });
  }

  // onClose() {
  // //  this.dialogRef.close();
  // }

}
