import { Component, Input, OnInit } from '@angular/core';
import { Recipe } from '../../../models/recipe.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { RecipeService } from '../../../recipe.service';
import Swal from 'sweetalert2';
import { Category } from '../../../models/category.model';
import { CategoryService } from '../../../category.service';

@Component({
  selector: 'app-edit-recipe',
  templateUrl: './edit-recipe.component.html',
  styleUrls: ['./edit-recipe.component.scss']
})
export class EditRecipeComponent implements OnInit {
  recipeToEdit!: Recipe;
  editRecipeForm!: FormGroup;
  categoryList: Category[] = [];
  constructor(private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private _recipeService: RecipeService, private _categoryService: CategoryService) { }
  ngOnInit(): void {
    this.editRecipeForm = this.formBuilder.group({
      name: ['', Validators.required],
      categoryCode: ['', Validators.required],
      preparationTime: ['', Validators.required],
      difficultyLevel: ['', Validators.required],
      ingredients: ['', Validators.required],
      preparation: ['', Validators.required],
    });

    const recipeId = parseInt(this.route.snapshot.paramMap.get('id') || '0'); // משתמש ב-parseInt ומגדיר 0 כברירת המחדל אם הערך הוא null

    this._recipeService.getRecipeById(recipeId).subscribe(recipe => {
      this.recipeToEdit = recipe;
      this.categories();
      this.initForm();
    });
  }



  categories(): void {
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
  initForm(): void {
    console.log(this.recipeToEdit.preparationTime, this.recipeToEdit.categoryCode);
    this.editRecipeForm = this.formBuilder.group({
      name: [this.recipeToEdit.name, Validators.required],
      categoryCode: [this.recipeToEdit.categoryCode, Validators.required],
      preparationTime: [this.recipeToEdit.preparationTime, Validators.required],
      difficultyLevel: [this.recipeToEdit.difficultyLevel, Validators.required],
      ingredients: [this.recipeToEdit.ingredients.join(','), Validators.required],
      preparation: [this.recipeToEdit.preparation.join('\n'), Validators.required],
    });
  }

  saveChanges(): void {
    if (this.editRecipeForm.valid) {
      const updatedRecipe = new Recipe(
        this.recipeToEdit.code,
        this.editRecipeForm.value.name,
        this.editRecipeForm.value.categoryCode,
        this.editRecipeForm.value.preparationTime,
        this.editRecipeForm.value.difficultyLevel,
        this.recipeToEdit.dateAddedToWebsite, // Keeping the original date
        this.editRecipeForm.value.ingredients.split(','),
        this.editRecipeForm.value.preparation.split('\n'),
        this.recipeToEdit.userCode, // Keeping the original user code
        this.recipeToEdit.imageRoute
      );
      Swal.fire({
        title: 'Are you sure you want to save changes?',
        icon: 'question',
        showCancelButton: true,
        confirmButtonColor: 'black',
        cancelButtonColor: 'yellow',
        confirmButtonText: 'Yes, save!',
        cancelButtonText: 'No, cancel',
      }).then((result) => {
        if (result.isConfirmed) {
          this._recipeService.updateRecipe(updatedRecipe).subscribe({
            next: () => {
              Swal.fire({
                icon: 'success',
                title: 'Recipe updated successfully!'
              });
              this.router.navigate(['/recipe']);
            },
            error: (err) => {
              console.error('Error updating recipe:', err);
            }
          });
        } else {
          // אם המשתמש ביטל, מוחזר לדף הקודם
          window.history.back();
        }
        });
      }
       else {
      Swal.fire('The form is invalid!');
    }
  }
}
