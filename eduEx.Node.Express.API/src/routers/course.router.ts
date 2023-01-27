import { CourseModel } from './../models/course.model';
import { Router } from "express";
import { sample_courses, sample_tags } from "../data";
import expressAsyncHandler from "express-async-handler";

const router = Router();


router.get("/seed", expressAsyncHandler(
    async (req,res) => {
        const courseCount = await CourseModel.countDocuments();
        if (courseCount > 0) {
            res.send("Seed already done !!");
            return;
        }
        await CourseModel.create(sample_courses);
        res.send("Seed Is Done !");
    }
))


router.get("/", expressAsyncHandler(
    async (req,res) => {
        const courses = await CourseModel.find();
        res.send(courses);
    }
))


router.get("/search/:searchTerm", expressAsyncHandler(
    async (req, res) => {
        // we use a regular expression to have the search case insensitive
        const searchRegX = new RegExp(req.params.searchTerm, 'i');
        const courses = await CourseModel.find({title: {$regex:searchRegX}});
        res.send(courses);     
}))


router.get("/tags", expressAsyncHandler(
    async (req,res) => {
        const tags = await CourseModel.aggregate([
            // 2 foods food.tags.length == 3  --unwind--> 6 foods food.tags.lenght == 1*
            // we do this to group similar ones
            {
                $unwind: '$courseSubjects'
            },
            {
                $group: {
                    _id: '$courseSubjects',
                    count: {$sum :1}
                }
            },
            {
                $project: {
                    _id: 0,
                    name: '$_id',
                    count: '$count'
                }
            }
        ]).sort({count: -1}); // -1 sort descending highest->lowest

        const all = {
            name: 'All',
            count: await CourseModel.countDocuments()
        }

        tags.unshift(all);

        res.send(tags);
    }
)) 


router.get("/tag/:tagName", expressAsyncHandler(
    async (req, res) => {
        const courses = await CourseModel.find({courseSubjects : req.params.tagName});
        res.send(courses);
    }
))  



router.get("/:courseId", expressAsyncHandler(
    async (req,res) => {
        const course = await CourseModel.findById(req.params.courseId);
        res.send(course);
    }
))


export default router;