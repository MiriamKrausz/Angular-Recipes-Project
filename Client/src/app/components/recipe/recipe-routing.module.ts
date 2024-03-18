import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { AllRecipesComponent } from './all-recipes/all-recipes.component';
import { AddRecipeComponent } from './add-recipe/add-recipe.component';
import { EditRecipeComponent } from './edit-recipe/edit-recipe.component';
import { RecipeDetailsComponent } from './recipe-details/recipe-details.component';
import { SmallRecipeComponent } from './small-recipe/small-recipe.component';


const RECIPE_ROUTER: Route[] = [
  { path: '', redirectTo: 'all-recipes', pathMatch: 'full' },
  { path: 'all-recipes', component: AllRecipesComponent }, 
  { path: 'add', component: AddRecipeComponent },
  { path: 'all-recipes/:id/edit', component: EditRecipeComponent },
  { path: 'all-recipes/:id', component: RecipeDetailsComponent }]
@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(RECIPE_ROUTER)
  ],
  exports: [RouterModule]
})
export class RecipeRoutingModule { }
