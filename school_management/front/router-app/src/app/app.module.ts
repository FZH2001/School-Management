import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgxPaginationModule } from 'ngx-pagination';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentComponent } from './components/student/student.component';
import { AdminComponent } from './components/admin/admin.component';
import { HomeComponent } from './components/home/home.component';
import { ProfComponent } from './components/prof/prof.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { ErrorComponent } from './components/error/error.component';
import { LoginComponent } from './components/login/login.component';
import { StudentListComponent } from './components/student-list/student-list.component';
import { TeacherListComponent } from './components/teacher-list/teacher-list.component';
import { AddStudentComponent } from './components/add-student/add-student.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AddTeacherComponent } from './components/add-teacher/add-teacher.component';
import { MatDialogModule } from '@angular/material/dialog';
import { DeleteDialogComponent } from './components/delete-dialog/delete-dialog.component';
import { EditDialogComponent } from './components/edit-dialog/edit-dialog.component';
import { EditNoteComponent } from './components/edit-note/edit-note.component';
import { EditStudentComponent } from './components/edit-student/edit-student.component';
import { FormsModule } from '@angular/forms';
import { NotificationComponent } from './components/notification/notification.component';
import { StudentInfosComponent } from './components/student-infos/student-infos.component';



@NgModule({
  declarations: [
    AppComponent,
    StudentComponent,
    AdminComponent,
    HomeComponent,
    ProfComponent,
    NavigationComponent,
    ErrorComponent,
    LoginComponent,
    StudentListComponent,
    TeacherListComponent,
    AddStudentComponent,
    AddTeacherComponent,
    DeleteDialogComponent,
    EditDialogComponent,
    EditNoteComponent,
    EditStudentComponent,
    NotificationComponent,
    StudentInfosComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatDialogModule,
    FormsModule,
    NgxPaginationModule


  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
