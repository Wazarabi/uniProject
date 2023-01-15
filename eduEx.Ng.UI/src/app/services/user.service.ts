import { sample_mentors } from './../../data';
import { Injectable } from '@angular/core';
import { User } from '../shared/models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  getAllMentors():User[]{
    return sample_mentors;
  }
}
