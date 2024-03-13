import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RecipeService } from '../../../recipe.service';
import { Recipe } from '../../../models/recipe.model';
import { CategoryService } from '../../../category.service';
import { Category } from '../../../models/category.model';
import { User } from '../../../models/user.model';
import { LoginService } from '../../../login.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.scss']
})
export class RecipeDetailsComponent implements OnInit {

  recipeId!: number;
  recipeToShow!: Recipe;
  category!: Category;
  author!: User;


  constructor(
    private route: ActivatedRoute,
    private recipeService: RecipeService,
    private categoryService: CategoryService,
    private userService: LoginService
  ) { }

  ngOnInit(): void {
    window.scrollTo(0, 0);
    this.route.paramMap.subscribe(params => {
      this.recipeId = +params.get('id')!;
    });

    this.recipeService.getRecipeById(this.recipeId).subscribe(recipe => {
      this.recipeToShow = recipe;
      this.categoryService.getCategoryById(recipe.categoryCode).subscribe(category => {
        this.category = category;
      });

      this.userService.getUserById(this.recipeToShow.userCode).subscribe(user => {
        this.author = user;
      });
    });

  }

  deleteRecipe(): void {
    const isLoggedIn = sessionStorage.getItem('userName') && sessionStorage.getItem('userId');
    if (!isLoggedIn) {
      Swal.fire({
        icon: 'error',
        title: 'You must be logged in!'
      });
      return;
    }

    const userIdFromStorage = sessionStorage.getItem('userId');
    const isLoggedInAsOwner = userIdFromStorage !== null && parseInt(userIdFromStorage) === this.recipeToShow.userCode;

    if (isLoggedInAsOwner) {
      Swal.fire({
        title: 'Are you sure?',
        text: 'Do you want to delete this recipe?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#d33',
        cancelButtonColor: '#3085d6',
        confirmButtonText: 'Yes, delete it!'
      }).then((result) => {
        if (result.isConfirmed) {
          this.recipeService.deleteRecipe(this.recipeToShow.code).subscribe(() => {
            Swal.fire(
              'Deleted!',
              'Your recipe has been deleted.',
              'success'
            );
            // Optionally, you can navigate the user to another page after deletion
          });
        }
      });
    } else {
      Swal.fire({
        icon: 'error',
        title: 'You are not authorized to delete this recipe!'
      });
    }

  }


 
  
}
