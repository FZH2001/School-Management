import { Component } from '@angular/core';
import { TeacherService } from 'src/app/services/teacher-service.service';

@Component({
  selector: 'app-teacher-list',
  templateUrl: './teacher-list.component.html',
  styleUrls: ['./teacher-list.component.css'],
})
export class TeacherListComponent {
  teachers: any[] = [];
  isLoading:boolean=true

  constructor(private teacherService: TeacherService) {}
  ngOnInit() {
    this.teacherService.findAll().subscribe((data) => {
      console.log(data);
      this.teachers = data;
      this.isLoading=false
    });
  }
}
