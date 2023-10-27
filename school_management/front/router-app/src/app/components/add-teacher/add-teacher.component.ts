import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { TeacherService } from 'src/app/services/teacher-service.service';

@Component({
  selector: 'app-add-teacher',
  templateUrl: './add-teacher.component.html',
  styleUrls: ['./add-teacher.component.css'],
})
export class AddTeacherComponent {
  teacher: any;
  teacherForm: FormGroup;

  constructor(
    private teacherService: TeacherService,
    private formBuilder: FormBuilder
  ) {}
  ngOnInit(): void {
    this.teacherForm = this.formBuilder.group({
      firstName: [''],
      lastName: [''],
    });
  }
  addTeacher() {
    console.log(this.teacherForm.value);
    this.teacherService.save(this.teacherForm.value).subscribe((teacher) => {
      console.log(teacher);
    });
  }
}
