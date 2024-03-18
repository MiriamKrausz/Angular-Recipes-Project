import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoryService } from '../../../category.service';
import { Category } from '../../../models/category.model';
import { Recipe } from '../../../models/recipe.model';
import { RecipeService } from '../../../recipe.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-recipe',
  templateUrl: './add-recipe.component.html',
  styleUrls: ['./add-recipe.component.scss']
})
export class AddRecipeComponent implements OnInit {
  recipeForm!: FormGroup;
  newRecipe!: Recipe
  categoryList: Category[] = [];
  userCode!: any;
  constructor(private formBuilder: FormBuilder, private route: ActivatedRoute, private router: Router, private _categoryService: CategoryService, private _recipeService: RecipeService) { }

  ngOnInit(): void {
    const isLoggedIn = sessionStorage.getItem('userName') && sessionStorage.getItem('userId');
    if (!isLoggedIn) {
      Swal.fire({
        icon: 'error',
        confirmButtonColor: '#fdca00FF',
        title: 'You must be logged in!'
      })
      this.router.navigate(['/user/login'])
    }
    this.recipeForm = this.formBuilder.group({
      name: ['', Validators.required],
      categoryCode: ['', Validators.required],
      preparationTime: ['', Validators.required],
      difficultyLevel: ['', Validators.required],
      ingredients: this.formBuilder.array([]),
      preparation: this.formBuilder.array([]),
      userCode: ['1', Validators.required],
      imageRoute: ['../../../../assets/images/food/5.jpg', Validators.required]
    });
    this._categoryService.getAllCategorys().subscribe({
      next: (res) => {
        this.categoryList = res;
        console.log("Fetching categories...");
        console.log(this.categoryList);
      },
      error: (err) => {
        console.log(err);
      }
    })
  }

  get ingredients(): FormArray {
    return this.recipeForm.get('ingredients') as FormArray;
  }
  get preparation(): FormArray {
    return this.recipeForm.get('preparation') as FormArray;
  }
  addIngredient(): void {
    (this.recipeForm.get('ingredients') as FormArray).push(this.formBuilder.control(''));
  }
  removeIngredient(index: number): void {
    (this.recipeForm.get('ingredients') as FormArray).removeAt(index);
  }

  addPreparationStep(): void {
    (this.recipeForm.get('preparation') as FormArray).push(this.formBuilder.control(''));
  }
  removePreparationStep(index: number): void {
    (this.recipeForm.get('preparation') as FormArray).removeAt(index);
  }


  addRecipe(): void {
    if (this.recipeForm.valid) {


      this.userCode = sessionStorage.getItem('userId');
      let userCodeNumber = parseInt(this.userCode);
      const name = this.recipeForm.get('name')?.value;
      const categoryCode = this.recipeForm.get('categoryCode')?.value;
      const preparationTime = this.recipeForm.get('preparationTime')?.value;
      const difficultyLevel = this.recipeForm.get('difficultyLevel')?.value;
      const dateAddedToWebsite = new Date();
      const ingredients = this.recipeForm.get('ingredients')?.value;
      const preparation = this.recipeForm.get('preparation')?.value;
      const userCode = userCodeNumber;
      const imageRoute = this.recipeForm.get('imageRoute')?.value;
      this.newRecipe = new Recipe(0,name, categoryCode, preparationTime, difficultyLevel, dateAddedToWebsite, ingredients, preparation, userCode, imageRoute)
      this._recipeService.addRecipe(this.newRecipe).subscribe({
        next: (res) => {
          Swal.fire({
            icon: 'success',
            title: 'Your is recipe is successfully added!',
          })
          this.router.navigate(['/recipe']);
          console.log(res)
        },
        error: (err) => {
          console.log(err);

        }
      })
    }

    else {
      Swal.fire("The form is invalid!");
    }
  }
}

