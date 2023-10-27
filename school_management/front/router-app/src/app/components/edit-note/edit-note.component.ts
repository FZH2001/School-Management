import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { StudentService } from 'src/app/services/student-service.service';
import { TeacherService } from 'src/app/services/teacher-service.service';

@Component({
  selector: 'app-edit-note',
  templateUrl: './edit-note.component.html',
  styleUrls: ['./edit-note.component.css']
})
export class EditNoteComponent {
   note: any;
  student:any
  inscriptionId:any
  isLoading:boolean
  myForm: FormGroup;

  ngOnInit(): void {
    {

    this.inscriptionId = this.route.snapshot.params['inscriptionId'];

    }
  
    
  }
  constructor(private profService:TeacherService,private fb: FormBuilder,  
     private route: ActivatedRoute,
    private router: Router) {
    this.myForm = this.fb.group({
      note: ['', [Validators.required]]});

    }

  editNote(){

    this.profService.updateStudentNote(this.inscriptionId,this.note).subscribe((data: any[]) => {
      console.log('the data is '+data)
    });
    this.router.navigate(['/prof']).then(() => {
      window.location.reload();
    });
  }

}
