import { CourseService } from './../../../services/course.service';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Course } from 'src/app/shared/models/course';

@Component({
  selector: 'app-course-page',
  templateUrl: './course-page.component.html',
  styleUrls: ['./course-page.component.scss']
})
export class CoursePageComponent {
  course!:Course;

  constructor( activatedRoute:ActivatedRoute, courseService:CourseService,
               private router:Router)
  {
    activatedRoute.params.subscribe(params => {
      if(params.id) {this.course = courseService.getCourseById(params.id);}
    })
  }
}