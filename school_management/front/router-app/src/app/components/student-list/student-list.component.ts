import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DeleteDialogComponent } from 'src/app/components/delete-dialog/delete-dialog.component';
import { StudentService } from 'src/app/services/student-service.service';
import { AddStudentComponent } from '../add-student/add-student.component';
import { MatPaginatorModule } from '@angular/material/paginator';


@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css'],
})
export class StudentListComponent {
  students: any[] = [];
  isLoading:boolean=true
  p: number = 1;
  itemsPerPage: number = 5;
  constructor(private studentService: StudentService, private dialogRef: MatDialog) {}

  ngOnInit() {
    this.studentService.findAll().subscribe((data) => {

      this.isLoading=false

      this.students = data;

    });
  }
  deleteStudent(studentId: any) {
    this.dialogRef.open(DeleteDialogComponent, {
      width: '40%',
      data: { studentId: studentId }, 

    });
  }
  addStudent(){
    this.dialogRef.open(AddStudentComponent, {
      width: '50%',
    });
  }



}
