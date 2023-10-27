import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class TeacherService {
  private professorUrl: string =
    'http://localhost:2000/admin/professors';

  constructor(private http: HttpClient) {}
  public findAll(): Observable<any[]> {
    return this.http.get<any[]>(this.professorUrl);
  }
  public save(teacher: any): Observable<any> {
    console.log(teacher);
    return this.http.post<any>(this.professorUrl, teacher);
  }

  public getCourses(profId: number): Observable<any[]> {
    console.log(profId);
    return this.http.get<any[]>('http://localhost:2000/prof/'+profId+'/courses');
  }

  public getInscriptions(profId:number,courseId:number): Observable<any[]> {
    return this.http.get<any[]>('http://localhost:2000/prof/'+profId+'/courses/'+courseId);
  }

  public updateStudentNote(inscriptionId:number,note:number):Observable<any> {
    return this.http.put<any>(this.professorUrl+'/editNote',{'inscriptionId':inscriptionId,'note':note} );

  }
}
