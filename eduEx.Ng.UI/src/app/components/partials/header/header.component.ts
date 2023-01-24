import { UserService } from 'src/app/services/user.service';
import { Component } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { User } from 'src/app/shared/models/User';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  cartQuantity = 0;
  user!:User;

  constructor(cartService:CartService, private userService:UserService)
  {
    cartService.getCartObservable().subscribe((nextCart) => {
      this.cartQuantity = nextCart.totalCount;
    })

    userService.userObservable.subscribe((nextUser) => {
      this.user = nextUser;
    })
  }

  logout(){
    this.userService.logout();
  }

  get isAuth(){
    return this.user.token;
  }
}
