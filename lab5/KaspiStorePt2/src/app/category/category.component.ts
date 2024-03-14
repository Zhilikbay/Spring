import { Component } from '@angular/core';
import {categories} from "../categories";

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})

export class CategoryComponent {
  categories = categories;
  currCat : string | undefined;

  Show(category: string) {
    this.currCat = category;
  }
}
