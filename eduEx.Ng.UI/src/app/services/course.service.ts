import { sample_courses } from './../../data';
import { Injectable } from '@angular/core';
import { Course } from '../shared/models/course';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  constructor() { }

  getAll():Course[]{
    return sample_courses;
  }

  getAllCoursesBySearchTerm(searchTerm:string):Course[]{
    return this.getAll().filter((course) => course.title.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase()));
  }
}
