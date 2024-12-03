import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BreakfastComponent } from './breakfast/breakfast.component';
import { DinnerComponent } from './dinner/dinner.component';
import { LunchComponent } from './lunch/lunch.component';
import { RecipeComponent } from './recipe/recipe.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { RedirectComponent } from './redirect/redirect.component';

const routes: Routes = [
  { path: '', redirectTo: '/breakfast/all', pathMatch: 'full' },
  { path: 'breakfast/:difficulty', component: BreakfastComponent },
  { path: 'lunch/:difficulty', component: LunchComponent },
  { path: 'dinner/:difficulty', component: DinnerComponent },
  { path: 'recipe/:id', component: RecipeComponent },
  { path: '**', component: NotFoundComponent }, // для обработки неверных путей
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
