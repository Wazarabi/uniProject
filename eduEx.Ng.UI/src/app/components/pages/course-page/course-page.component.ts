import { Observable } from 'rxjs';
import { CartService } from './../../../services/cart.service';
import { CourseService } from './../../../services/course.service';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Course } from 'src/app/shared/models/course';

@Component({
  selector: 'app-course-page',
  templateUrl: './course-page.component.html',
  styleUrls: ['./course-page.component.scss'],
})
export class CoursePageComponent {
  course!: Course;

  constructor(
    activatedRoute: ActivatedRoute,
    courseService: CourseService,
    private cartService: CartService,
    private router: Router
  ) {
    activatedRoute.params.subscribe((params) => {
      if (params.id) {
        courseService.getCourseById(params.id).subscribe((nextCourse) => {
          this.course = nextCourse;
        });
      }
    });
  }

  addToCart() {
    this.cartService.addToCart(this.course);
    this.router.navigateByUrl('cart-page');
  }
}
