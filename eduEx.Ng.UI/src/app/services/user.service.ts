import { HttpClient } from '@angular/common/http';
import { IUserLogin } from './../shared/interfaces/IUserLogin';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { sample_mentors } from './../../data';
import { Injectable } from '@angular/core';
import { User } from '../shared/models/User';
import { USERS_MENTORS_BY_ID_URL, USERS_MENTORS_URL, USER_LOGIN_URL } from '../shared/constants/urls';
import { ToastrService } from 'ngx-toastr';

const USER_KEY = 'User';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private userSubject = new BehaviorSubject<User>(this.getUserFromLocalStorage());
  public userObservable:Observable<User>;

  constructor(private http:HttpClient,
    private toastService:ToastrService) {
    // what we want to expose outside the userService is the :
    // readonly version of the BehaviorSubject aka :
    this.userObservable = this.userSubject.asObservable();
   }

  getAllMentors():Observable<User[]>{
    return this.http.get<User[]>(USERS_MENTORS_URL);
  }

  // getMentorById(mentorId:string):Observable<User>{
  //   return this.http.get<User>(USERS_MENTORS_BY_ID_URL + mentorId);
  // }

  login(userLogin:IUserLogin):Observable<User>{
    return this.http.post<User>(USER_LOGIN_URL, userLogin).pipe(
      tap({
        next: (user) => {
          this.setUserToLocalStorage(user);
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


  logout(){
    this.userSubject.next(new User());
    localStorage.removeItem(USER_KEY);
    window.location.reload(); // to ensure redirection in case we are in checkout-page for expl
  }

  private setUserToLocalStorage(user: User) {
    localStorage.setItem(USER_KEY, JSON.stringify(user));
  }

  private getUserFromLocalStorage(): User {
    const userJson = localStorage.getItem(USER_KEY);
    if (userJson) return JSON.parse(userJson) as User;
    return new User();
  }

}
