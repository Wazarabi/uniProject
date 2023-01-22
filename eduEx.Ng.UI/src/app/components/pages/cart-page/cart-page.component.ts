import { Component } from '@angular/core';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';
import { CartService } from 'src/app/services/cart.service';
import { Cart } from 'src/app/shared/models/Cart';
import { CartItem } from 'src/app/shared/models/CartItem';


@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.scss']
})
export class CartPageComponent {
  cart!:Cart;
  constructor(private cartService: CartService) {
    this.cartService.getCartObservable().subscribe((cart) => {
      this.cart = cart;
    })
  }

  removeFromCart(cartItem:CartItem){
    this.cartService.removeFromCart(cartItem.course.id);
  }

  changeSessionLength(cartItem:CartItem,lengthInString:string){
    const length = parseInt(lengthInString);
    this.cartService.changeSessionLength(cartItem.course.id, length);
  }

  changeSessionDate(cartItem:CartItem, event: MatDatepickerInputEvent<Date>){
    this.cartService.changeSessionDate(cartItem.course.id, (event.value)?event.value:new Date());
  }
}
