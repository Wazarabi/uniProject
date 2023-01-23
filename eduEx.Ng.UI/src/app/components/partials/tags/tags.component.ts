import { Observable } from 'rxjs';
import { CourseService } from 'src/app/services/course.service';
import { Component } from '@angular/core';
import { Tag } from 'src/app/shared/models/Tag';

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.scss']
})
export class TagsComponent {
  tags?:Tag[];
  constructor(courseService:CourseService){
    courseService.getAllTags().subscribe(nextTags => this.tags = nextTags);
  }

}
