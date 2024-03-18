import { Component, Input, OnInit, Output } from '@angular/core';
import { Recipe } from '../../../models/recipe.model';
import { RecipeService } from '../../../recipe.service';
import { User } from '../../../models/user.model';
import { LoginService } from '../../../login.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-small-recipe',
  templateUrl: './small-recipe.component.html',
  styleUrl: './small-recipe.component.scss'
})


export class SmallRecipeComponent implements OnInit {

  @Input() recipe!: Recipe;
  public isLoggedInanOwner!: any;
  public isLoggedIn!:any;


  usersList: User[] = [];
  authorUser: User | undefined; // נוסיף סוג על המשתנה כדי להתמודד עם אי המצב האפשרי של undefined
  // נניח ש-dateAddedToWebsite הוא אובייקט מסוג Date


  constructor(private _userService: LoginService, private router: Router) { }
  ngOnInit(): void {
    this.getUsers();
   this.isLoggedIn = sessionStorage.getItem('userName') && sessionStorage.getItem('userId');
    const userIdFromStorage = sessionStorage.getItem('userId');
    if (userIdFromStorage !== null) {
      this.isLoggedInanOwner = this.isLoggedIn && (parseInt(userIdFromStorage) === this.recipe?.userCode);
    } else {
      this.isLoggedInanOwner = false;
    }

  }
  getUsers(): void {
    this._userService.getAllusers().subscribe({
      next: (res: User[]) => {
        this.usersList = res;
        this.authorUser = this.usersList.find(user => user.code === this.recipe.userCode)!;

      },
      error: (err) => {
        console.log(err);
      }
    });
  }
  viewRecipe() {
    const isLoggedIn = sessionStorage.getItem('userName') && sessionStorage.getItem('userId');
    if (!isLoggedIn) {
      Swal.fire({
        icon: 'error',
        confirmButtonColor: '#fdca00FF',
        title: 'You must be logged in!'
      }).then(() => {
        this.router.navigate(['/user/login']);
      });
    } else {
      this.router.navigate(['recipe/all-recipes', this.recipe.code]);
    }
  }

  editRecipe() {
    this.router.navigate([`recipe/all-recipes/${this.recipe.code}/edit`]);
  }
}