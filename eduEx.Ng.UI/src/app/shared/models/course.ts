export class Course{
  id!: string;
  userId!:string;

  mentorFullName?:string;
  title!: string;
  aboutCourse!: string;
  aboutUser!: string;

  imageUrl!: string; // user profile pic

  baseHrate!: number;
  //packsRates!: string[]; // ["5h:100$",...]

  courseLanguages?: string[]; // this course is despensed in
  courseSubjects!: string[]; // maths, stat, bigdata ...

  firstCourseFree!:boolean;
  favorite!: boolean;

  responseTime!:number;

  stars!: number;
}
