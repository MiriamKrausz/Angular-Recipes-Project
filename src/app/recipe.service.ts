import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { GlobalService } from './global.service';
import { Recipe } from './models/recipe.model';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

    public baseUrl!:string; 
  constructor(private http: HttpClient,private globalService: GlobalService) {
    this.baseUrl = `${globalService.domainUrl}/Recipe`;
   }
  getAllRecipes(): Observable<Recipe[]> {
    return this.http.get<Recipe[]>(this.baseUrl)
  }
  getRecipeById(id: number): Observable<Recipe> {
    return this.http.get<Recipe>(`${this.baseUrl}/${id}`)
 }
 addRecipe(recipe: Recipe): Observable<Recipe> {
  return this.http.post<Recipe>(this.baseUrl, recipe)
 }
 updateRecipe(recipe:Recipe): Observable<Recipe> {
  return this.http.put<Recipe>(`${this.baseUrl}/${recipe.code}`, recipe)
 }

 deleteRecipe(id: number): Observable<void> {
  return this.http.delete<void>(`${this.baseUrl}/${id}`);
}
}
