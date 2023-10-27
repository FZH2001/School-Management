import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './components/admin/admin.component';
import { HomeComponent } from './components/home/home.component';
import { StudentComponent } from './components/student/student.component';
import { ProfComponent } from './components/prof/prof.component';
import { ErrorComponent } from './components/error/error.component';
import { AuthGuard } from './services/auth.guard';
import { LoginComponent } from './components/login/login.component';
import { AddStudentComponent } from './components/add-student/add-student.component';
import { AddTeacherComponent } from './components/add-teacher/add-teacher.component';
import { StudentListComponent } from './components/student-list/student-list.component';
import { EditStudentComponent } from './components/edit-student/edit-student.component';
import { StudentInfosComponent } from './components/student-infos/student-infos.component';
import { EditNoteComponent } from './components/edit-note/edit-note.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
  },
  { path: 'students', component: StudentListComponent },
  { path: 'student', component: StudentComponent,
  children:[
    { path:'view/:id', component: StudentInfosComponent },
    { path: '**', redirectTo: 'error' },

  ]
},

  { path: 'prof', component: ProfComponent ,
  children: [
    { path:'editNote/:inscriptionId', component:EditNoteComponent },

  ]},
  { path: 'login', component: LoginComponent },
  {
    path: 'admin',
    component: AdminComponent,
    children: [
      { path: '', redirectTo: 'admin', pathMatch: 'full' },
      { path: 'addStudent', component: AddStudentComponent },
      { path: 'editStudent/:id', component: EditStudentComponent },
      { path: '**', redirectTo: 'error' },
      { path: 'addTeacher', component: AddTeacherComponent },
    ],
  },
  { path: '**', redirectTo: 'home' },
  { path: 'error', component: ErrorComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
