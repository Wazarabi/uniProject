import { Component } from '@angular/core';
import { CourseService } from 'src/app/services/course.service';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/shared/models/user';
import { Course } from 'src/app/shared/models/course';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  courses:Course[] = [];
  mentors:User[] = [];
  getMentor = (userId:any) => { return this.mentors.find(user => user.id === userId)}

  constructor(private courseService:CourseService,private userService:UserService){
    this.courses = courseService.getAll();
    this.mentors = userService.getAllMentors();
  }

}
