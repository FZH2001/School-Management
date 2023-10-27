import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class StudentService {

  private studentUrl: string =
    'http://localhost:2000/admin/students';

  constructor(private http: HttpClient) {}
  public findAll(): Observable<any[]> {
    return this.http.get<any[]>(this.studentUrl);
  }
  public create(student: any): Observable<any> {
    console.log(student);
    return this.http.post<any>(this.studentUrl, student);
  }
  public delete(studentId: number): void {
    this.http.delete(this.studentUrl +'/delete/'+ studentId).subscribe((response) => {
      console.log(response);
    });
  }

  public get(studentId: number):Observable<any>{
    console.log(this.http.get<any>(this.studentUrl+studentId));
    return this.http.get<any>(this.studentUrl+'/'+studentId);

  }

  public update(studentId: number,student: any): Observable<any> {
    return this.http.put<any>(this.studentUrl+'/edit/'+studentId, student);
  }

  public getNotes(studentId: number): Observable<any[]> {
    return this.http.get<any[]>('http://localhost:2000/student/'+studentId);
  }
}
