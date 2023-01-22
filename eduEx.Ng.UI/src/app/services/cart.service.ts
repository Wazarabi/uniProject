import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { CartItem } from '../shared/models/CartItem';
import { Cart } from '../shared/models/Cart';
import { Course } from '../shared/models/course';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cart:Cart = this.getCartFromLocalStorage();
  private cartSubject:BehaviorSubject<Cart> = new BehaviorSubject(this.cart);

  constructor() { }

  addToCart(course:Course):void{
    if (this.cart.items.length){
      let cartItem = this.cart.items.find(item => item.course.id == course.id);
      if (cartItem) return;
    }
    this.cart.items.push(new CartItem(course));
    this.setCartToLocalStorage();
  }

  removeFromCart(courseId:string):void{
    this.cart.items = this.cart.items.filter(item => item.course.id != courseId);
    this.setCartToLocalStorage();
  }

  // quantity equivalent
  changeSessionLength(courseId:string, length:number){
    let cartItem = this.cart.items.find(item => item.course.id === courseId);
    if (!cartItem) return;

    cartItem.sessionLength = length;
    cartItem.price = length * cartItem.course.baseHrate;

    this.setCartToLocalStorage();
  }

  changeSessionDate(courseId:string, date:Date){
    let cartItem = this.cart.items.find(item => item.course.id === courseId);
    if (!cartItem) return;
    cartItem.date = date;
    this.setCartToLocalStorage();
  }

  clearCart(){
    this.cart = new Cart();
    this.setCartToLocalStorage();
  }

  // to observable so u can't mess with the return outside of the service
  getCartObservable():Observable<Cart>{
    return this.cartSubject.asObservable();
  }

  private setCartToLocalStorage():void{
    this.cart.totalPrice = this.cart.items.reduce((prevSum,currentItem) => prevSum + currentItem.price, 0);
    this.cart.totalCount = this.cart.items.reduce((prevSum,currentItem) => prevSum + currentItem.sessionLength, 0);
    const cartJson = JSON.stringify(this.cart);
    localStorage.setItem('Cart',cartJson);
    // notify subscribers
    this.cartSubject.next(this.cart);
  }

  private getCartFromLocalStorage():Cart{
    const cartJson = localStorage.getItem('Cart');
    return (cartJson)? JSON.parse(cartJson) as Cart: new Cart();
  }
}
