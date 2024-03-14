import { Component, Input, Output, EventEmitter } from '@angular/core';
import {Product} from '../products';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})

export class ProductItemComponent {
  @Input() product: Product | undefined;
  @Output() delete = new EventEmitter();

  status : boolean = false

  share(product: Product): void {
    window.open('https://telegram.me/share/url?url=' + product.url)
  }


  stars(num: number, check: boolean): string  {
    var text = "";
    for (let i = 0; i < num; i++) {
      if(check){
        text += '⭐️';
      } else {
        text += '☆'
      }
    }
    return text;
  }


  cnt : number = 0
  increase(product: {likes: number}) {
    if(this.cnt != 1) {
      product.likes++;
      this.cnt++;
    }
  }
  decrease(product: {likes: number}) {
    if(this.cnt != -1) {
      product.likes--; this.cnt--;
    }
  }


  remove(id: number){
    this.delete.emit(id)
  }
}
