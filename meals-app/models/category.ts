import { ICategory } from "../interfaces/Interfaces";

class Category {
  id: string;
  title: string;
  color: string;
  constructor({id, title, color}:ICategory) {
    this.id = id;
    this.title = title;
    this.color = color;
  }
}

export default Category;
