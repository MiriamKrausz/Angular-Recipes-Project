import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddRecipeComponent } from './add-recipe/add-recipe.component';
import { EditRecipeComponent } from './edit-recipe/edit-recipe.component';
import { AllRecipesComponent } from './all-recipes/all-recipes.component';
import { RecipeDetailsComponent } from './recipe-details/recipe-details.component';
import { RecipeRoutingModule } from './recipe-routing.module';
import { SmallRecipeComponent } from './small-recipe/small-recipe.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { DifficultyLevelPipe } from "./difficulty-level.pipe";
import { DurationFormatPipe } from './recipe-details/duration-format.pipe';
import { MatSliderModule } from '@angular/material/slider';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSidenavModule } from '@angular/material/sidenav';
import { SidebarModule } from 'primeng/sidebar'; // Import p-sidebar here
import { MatCheckboxModule } from '@angular/material/checkbox';
import {MatCardModule} from '@angular/material/card';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';

@NgModule({
    declarations: [AddRecipeComponent, EditRecipeComponent, AllRecipesComponent, RecipeDetailsComponent, SmallRecipeComponent], // Add SidebarModule to declarations
    exports: [CommonModule, RecipeRoutingModule],
    imports: [
        CommonModule,
        RecipeRoutingModule,
        ReactiveFormsModule,
        FormsModule,
        MatIconModule,
        MatInputModule,
        MatFormFieldModule,
        DifficultyLevelPipe,
        DurationFormatPipe,
        MatSidenavModule,
        MatSliderModule,
        MatFormFieldModule,
        MatSelectModule,
        MatButtonModule,
        SidebarModule,
        MatCheckboxModule,
        MatCardModule,
        MatTooltipModule,
        
    ]
})
export class RecipeModule { }