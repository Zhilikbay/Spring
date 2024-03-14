import {Component, Input} from '@angular/core';
import {products} from "../products";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})

export class ProductListComponent {
  @Input() category: string | undefined

  products = products;
  deleteFunc(productid:number){
    this.products=this.products.filter(p=>p.id!==productid);
  }

}

