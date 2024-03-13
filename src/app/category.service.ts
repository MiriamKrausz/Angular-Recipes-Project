import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { GlobalService } from './global.service';
import { Category } from './models/category.model';


@Injectable({
  providedIn: 'root'
})
export class CategoryService {

    public baseUrl!:string; 
  constructor(private http: HttpClient,private globalService: GlobalService) {
    this.baseUrl = `${globalService.domainUrl}/Category`;
   }
  getAllCategorys(): Observable<Category[]> {
    return this.http.get<Category[]>(this.baseUrl)
  }
  getCategoryById(id: number): Observable<Category> {
    return this.http.get<Category>(`${this.baseUrl}/${id}`)
 }
 addCategory(recipe: Category): Observable<Category[]> {
  return this.http.post<Category[]>(this.baseUrl, recipe)
 }
}
