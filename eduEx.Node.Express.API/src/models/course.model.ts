// to create the mongoose model in TS we need to create an interface of model
// so we can have the auto-completion, then create the schema and finaly the model.

import { Schema, model } from "mongoose";

export interface Course{
    id: string;
    userId:string;
    title: string;
    aboutCourse: string;
    aboutUser: string;
    imageUrl: string;
    baseHrate: number;
    courseLanguages: string[];
    courseSubjects: string[];
    firstCourseFree:boolean;
    favorite: boolean;
    responseTime:number;
    stars: number;
}
  

// _id is default memember of this schema later we convert _id -> id we have using
// virtuals which are values not saved on the database they are generated
// setting virtuals to true will do the trick of setting _id to id
// +superFancyFeature : timestanp -> get timeofcreation and update
export const CourseSchema = new Schema<Course>(
    {
        userId:{type:String, required:true},
        title:{type:String, required:true},
        aboutCourse:{type:String, required:true},
        aboutUser:{type:String, required:true},
        imageUrl:{type:String, required:true},
        baseHrate:{type:Number, required:true},
        courseLanguages:{type:[String]},
        courseSubjects:{type:[String], required:true},
        firstCourseFree:{type:Boolean, default:true},
        favorite:{type:Boolean, default:false},
        responseTime:{type:Number, required:true},
        stars:{type:Number, required:true}
    },
    {
      toJSON: {
        virtuals: true,
      },
      toObject: {
        virtuals: true,
      },
      timestamps: true,
    }
)

// 'course' is the name of the model in the database
// model inables use to do CRUD operations to the Db
export const CourseModel = model<Course>('course', CourseSchema);
