import { Tag } from './../shared/models/Tag';
import { sample_courses, sample_tags } from './../../data';
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

  getAllTags():Tag[]{
    return sample_tags;
  }

  getAllCoursesByTag(tag:string):Course[]{
    return tag === "All"?
    this.getAll():
    this.getAll().filter(course => course.courseSubjects?.includes(tag));
  }

  getCourseById(courseId:string):Course{
    return this.getAll().find(course => course.id == courseId) ?? new Course();
  }
}
