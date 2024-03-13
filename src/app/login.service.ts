import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { User } from './models/user.model'
import { GlobalService } from './global.service';
@Injectable({
  providedIn: 'root'
})
export class LoginService {
  public baseUrl!:string; 
  constructor(private http: HttpClient,private globalService: GlobalService) {
    this.baseUrl = `${globalService.domainUrl}/User`;
   }
  getAllusers(): Observable<User[]> {
    return this.http.get<User[]>(this.baseUrl)
  }
  getUserById(id: number): Observable<User> {
    return this.http.get<User>(`${this.baseUrl}/${id}`)
 }
 addUser(user: User): Observable<User[]> {
  return this.http.post<User[]>(this.baseUrl, user)
 }

}
