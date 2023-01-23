import { Observable } from 'rxjs';
import { COURSES_BY_SEARCH_URL, COURSES_URL, COURSES_TAGS_URL, COURSES_BY_TAG_URL, COURSE_BY_ID_URL } from './../shared/models/constants/urls';
import { HttpClient } from '@angular/common/http';
import { Tag } from './../shared/models/Tag';
import { Injectable } from '@angular/core';
import { Course } from '../shared/models/course';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  constructor(private http:HttpClient) {}

  getAll():Observable<Course[]>{
    return this.http.get<Course[]>(COURSES_URL);
  }

  getAllCoursesBySearchTerm(searchTerm:string):Observable<Course[]>{
    return this.http.get<Course[]>(COURSES_BY_SEARCH_URL + searchTerm);
  }

  getAllTags():Observable<Tag[]>{
    return this.http.get<Tag[]>(COURSES_TAGS_URL);
  }

  getAllCoursesByTag(tag:string):Observable<Course[]>{
    return tag === "All"?
    this.getAll():
    this.http.get<Course[]>(COURSES_BY_TAG_URL + tag);
  }

  getCourseById(courseId:string):Observable<Course>{
    return this.http.get<Course>(COURSE_BY_ID_URL + courseId);
  }
}
