import { Component } from '@angular/core';
import { CourseService } from 'src/app/services/course.service';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/shared/models/user';
import { Course } from 'src/app/shared/models/course';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  courses:Course[] = [];
  mentors:User[] = [];
  getMentor = (userId:any) => { return this.mentors.find(user => user.id === userId)}

  constructor(private courseService:CourseService,
              private userService:UserService,
              private activatedRoute:ActivatedRoute)
  {
    activatedRoute.params.subscribe((params)=>{
      if(params.searchTerm) {this.courses = this.courseService.getAllCoursesBySearchTerm(params.searchTerm);}
      else if(params.tag) {this.courses = this.courseService.getAllCoursesByTag(params.tag);}
      else {this.courses = courseService.getAll();}
    })
    this.mentors = userService.getAllMentors();
  }

}
