import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddStudentComponent } from '../add-student/add-student.component';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {

  // students:any


  constructor(private http: HttpClient, private dialogRef: MatDialog) {}

  openDialog(formId: number): void {
    console.log('the form id is ' + formId);


    this.dialogRef.open(AddStudentComponent, {
      width: '40%',
    });
  }
  activeTab: string = 'students'; // Default to 'students' tab

  // Dummy data for students and teachers
  students= [
    { firstName: 'John', lastName: 'Doe', email: 'john@example.com', id: '1' },
    { firstName: 'Jane', lastName: 'Smith', email: 'jane@example.com', id: '2' }
  ];

  teachers = [
    { firstName: 'David', lastName: 'Johnson', email: 'david@example.com', id: '1' },
    { firstName: 'Emily', lastName: 'Brown', email: 'emily@example.com', id: '2' }
  ];

  toggleTab(tab: string) {
    this.activeTab = tab;
  }

deleteStudent(id:number){}
addStudent(){}
updateStudent(){}
}
