import { Component, OnInit } from '@angular/core';
import { Recipe } from '../../../models/recipe.model';
import { RecipeService } from '../../../recipe.service';
import { Category } from '../../../models/category.model';
import { CategoryService } from '../../../category.service';

@Component({
  selector: 'app-all-recipes',
  templateUrl: './all-recipes.component.html',
  styleUrls: ['./all-recipes.component.scss'],
})
export class AllRecipesComponent implements OnInit {

  isLoading: boolean = true;
  sidebarVisible: boolean = false;
  selectedCategories: { [key: string]: boolean } = {};
  preparationTimes: string[] = [];
  selectedPreparationTime: number = 0;
  public categories: Category[] = [];
  public recipesList: Recipe[] = [];
  public filteredRecipes: Recipe[] = [];
  searchTerm: string = '';

  constructor(private _recipeService: RecipeService, private _categoryService: CategoryService) { }

  ngOnInit(): void {
    setTimeout(() => { // נעצור את ההצגה של הנתונים במשך 1 שניות
      this.isLoading = false; // ברגע שהזמן יעבור, נסיר את האייקון של loading
    }, 1000);

    this._recipeService.getAllRecipes().subscribe({
      next: (res: Recipe[]) => {
        this.recipesList = res;
        this.filteredRecipes = this.recipesList;
      },
      error: (err) => {
        console.log(err);
      }
    });

    this._categoryService.getAllCategorys().subscribe({
      next: (res: Category[]) => {
        this.categories = res;
      },
      error: (err) => {
        this.isLoading = false; // אם יש שגיאה בקריאה לשרת, נסיר את האייקון של loading
      }
    });
  }

  filterRecipes() {
    this.filteredRecipes = this.recipesList.filter(recipe => {
      let passCategory = true;
      let passPreparationTime = true;

      if (Object.values(this.selectedCategories).includes(true)) {
        passCategory = Object.keys(this.selectedCategories).some(categoryKey => {
          return this.selectedCategories[categoryKey] && recipe.categoryCode.toString() === categoryKey;
        });
      }

      if (this.selectedPreparationTime > 0) {
        passPreparationTime = recipe.preparationTime <= this.selectedPreparationTime;
      }

      return passCategory && passPreparationTime;
    });
    this.sidebarVisible = false;
  }

  searchRecipes() {
    this.filteredRecipes = [...this.recipesList];
    this.filteredRecipes = this.filteredRecipes.filter(recipe => {
      return recipe.name.toLowerCase().includes(this.searchTerm.toLowerCase());
    });
  }  
}
