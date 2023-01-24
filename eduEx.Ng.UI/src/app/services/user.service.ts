import { HttpClient } from '@angular/common/http';
import { IUserLogin } from './../shared/interfaces/IUserLogin';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { sample_mentors } from './../../data';
import { Injectable } from '@angular/core';
import { User } from '../shared/models/User';
import { USER_LOGIN_URL } from '../shared/constants/urls';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private userSubject = new BehaviorSubject<User>(new User());
  public userObservable:Observable<User>;

  constructor(private http:HttpClient,
    private toastService:ToastrService) {
    // what we want to expose outside the userService is the :
    // readonly version of the BehaviorSubject aka :
    this.userObservable = this.userSubject.asObservable();
   }

  getAllMentors():User[]{
    return sample_mentors;
  }


  login(userLogin:IUserLogin):Observable<User>{
    return this.http.post<User>(USER_LOGIN_URL, userLogin).pipe(
      tap({
        next: (user) => {
          this.userSubject.next(user);
          this.toastService.success(
            `Welcome to EduX ${user.firstName}!`,
            `Login Successful`
          )
        },
        error: (errorResponse) => {
          // error is coming from server
          this.toastService.error(errorResponse.error, 'Login Failed');
        }
      })
    );
    // we want to check if the login was succesful but subscribing
    // to it returns a Subscription Object so in cases like these when
    // we want to tap the result without changing it's value
    // without breaking the flow of the observable
    // we can pipe our observable with tje tap function RXJS
  }














}
