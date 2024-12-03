import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RecipeService } from '../services/recipe.service';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css']
})
export class RecipeComponent implements OnInit {
  recipe: any;

  constructor(private route: ActivatedRoute, private recipeService: RecipeService) { }

  ngOnInit(): void {
    const recipeId = this.route.snapshot.paramMap.get('id');
    this.recipeService.getRecipes().subscribe(recipes => {
      this.recipe = recipes.find(r => r.id == recipeId);
    });
  }
}
