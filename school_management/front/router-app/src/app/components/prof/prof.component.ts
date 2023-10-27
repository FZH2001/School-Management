import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { EditNoteComponent } from '../edit-note/edit-note.component';
import { TeacherService } from 'src/app/services/teacher-service.service';

@Component({
  selector: 'app-prof',
  templateUrl: './prof.component.html',
  styleUrls: ['./prof.component.css']
})
export class ProfComponent {
  selectedProfessor: any = null;
  courses: any[] = []; 
  activeCourse: any;
  students: any[] = []; 
  isLoading = false;
  inscriptions:any[]
  profId:any
  professors:any[]


  constructor(private http: HttpClient,
    private route: ActivatedRoute,
    private router: Router,
     private dialogRef: MatDialog,private profService:TeacherService) {}

  ngOnInit(): void {
    if(this.route.snapshot.params['profId']){
      console.log('the param exists')
      this.isLoading = true;
      this.profId=this.route.snapshot.params['profId']
      this.profService.getCourses(this.profId).subscribe((data)=>{
        this.courses = data
        this.activeCourse= this.courses[0];
        console.log('course id'+this.courses[0].id)
        this.getCourseStudents(this.courses[0].id);
        this.isLoading = false; 
  
      });
    }
    else{
      console.log(this.route.snapshot.params['profId'])
    }
   
      this.profService.findAll().subscribe((data)=>{
        this.professors = data
  
      });
    


    // this.profService.getCourses(this.profId).subscribe((data)=>{
    //   this.courses = data
    //   this.activeCourse= this.courses[0];

    //  // this.isLoading = false; 
    //  console.log(data)
    // console.log('iddddddd'+this.courses[0].id)
    // this.getCourseStudents(this.courses[0].id);

    // });

  }
  onProfessorSelected(event:Event) {

    // Set isLoading to true
    this.isLoading = true;
    this.profId=(event.target as HTMLSelectElement).value
    this.profService.getCourses(this.profId).subscribe((data)=>{
      this.courses = data
      this.activeCourse= this.courses[0];
      console.log('course id'+this.courses[0].id)
      this.getCourseStudents(this.courses[0].id);
      this.isLoading = false; 

    });
  }
  getCourseStudents(courseId:number){
    this.profService.getInscriptions(this.profId,courseId).subscribe((data)=>{
      console.log(data)
      this.inscriptions = data
      this.isLoading = false; 

    });

  }



  openDialog(): void {


    this.dialogRef.open(EditNoteComponent, {
      width: '40%',
    });
  }
  setActiveCourse(course: any): void {
    console.log('the current course is '+course.name)
    this.activeCourse = course;
    this.getCourseStudents(course.id)
  }
}
