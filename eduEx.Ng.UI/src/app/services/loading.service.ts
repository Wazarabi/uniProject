import { BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {
  // throu this subject every class using this service will be informed of the state of the loading
  // we could have made this public but it breaks the ecapsulation of the class
  private isLoadingSubject = new BehaviorSubject<boolean>(false);

  constructor() { }

  // it's always a good idea to expose methodes for the behavior that you want to be done
  showLoading(){ this.isLoadingSubject.next(true); }
  hideLoading(){ this.isLoadingSubject.next(false); }

  // read only
  // by returning the subject as an observable we can ensure that no one can change it's value from the outside
  get isLoading(){ return this.isLoadingSubject.asObservable(); }
}
