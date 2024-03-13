import { Routes } from '@angular/router';
import { NotFoundComponent } from './components/not-found/not-found.component';
export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', loadComponent: () => import('../app/components/home-page/home-page.component').then(c => c.HomePageComponent) },
    { path: 'user', loadChildren: () => import('../app/components/user/user.module').then(c => c.UserModule) },
    { path: 'recipe', loadChildren: () => import('../app/components/recipe/recipe.module').then(c => c.RecipeModule) },
    { path: '**', component: NotFoundComponent }
];
