import { Component } from '@angular/core';

import { products } from '../products';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  products = products;

  share(product: {url: string}) {
    window.open('https://telegram.me/share/url?url=' + product.url)
  }

  stars(num: number, check: boolean): string  {
    var text = "";
    for (let i = 0; i < num; i++) {
      if(check){
        text += '⭐';
      } else {
        text += '☆'
      }
    }
    return text;
  }
}
