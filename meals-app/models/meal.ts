import { IMealItem } from "../interfaces/Interfaces";

class Meal {
  id: string;
  categoryIds: string[];
  title: string;
  imageUrl: string;
  ingredients: string[];
  steps: string[];
  duration: number;
  complexity: string;
  affordability: string;
  isGlutenFree: boolean;
  isVegan: boolean;
  isVegetarian: boolean;
  isLactoseFree: boolean;
  constructor(
    item: IMealItem
  ) {
    this.id = item.id;
    this.categoryIds = item.categoryIds;
    this.title = item.title;
    this.imageUrl = item.imageUrl;
    this.ingredients = item.ingredients;
    this.steps = item.steps;
    this.duration = item.duration;
    this.complexity = item.complexity;
    this.affordability = item.affordability;
    this.isGlutenFree = item.isGlutenFree;
    this.isVegan = item.isVegan;
    this.isVegetarian = item.isVegetarian;
    this.isLactoseFree = item.isLactoseFree;
  }
}

export default Meal;
