import { Cart } from './../../../shared/models/Cart';
import { Component } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  cartQuantity = 0;
  constructor(cartService:CartService){
    cartService.getCartObservable().subscribe((nextCart) => {
      this.cartQuantity = nextCart.totalCount;
    })
  }

}
