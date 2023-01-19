import { Course } from './course';

export class CartItem{
  constructor(public course:Course){}
  date:string = Date();
  sessionLength:number = 1;
  state:string = "AWaiting payment";
  price:number = this.course.baseHrate;
}
