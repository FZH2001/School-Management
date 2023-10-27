import { Component, Inject, OnInit } from '@angular/core';
import { StudentService } from '../../services/student-service.service';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-delete-dialog',
  templateUrl: './delete-dialog.component.html',
  styleUrls: ['./delete-dialog.component.css']
})
export class DeleteDialogComponent {

  constructor(@Inject(MAT_DIALOG_DATA) public data: { studentId: number },
  private route: ActivatedRoute,
  private router: Router,
     private dialogErrorRef: MatDialog,
   private dialogRef: MatDialogRef<DeleteDialogComponent>,
  private studentService:StudentService ) {}

  ngOnInit(){
    console.log('the id that i received is '+this.data.studentId)
  }
  submit(){
    this.studentService.delete(this.data.studentId);
    this.router.navigate(['/admin']).then(() => {
      window.location.reload();
    });
  }

close() {
   this.dialogRef.close();
  }
}
