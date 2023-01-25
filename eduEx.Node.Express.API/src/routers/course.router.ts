import { Router } from "express";
import { sample_courses, sample_tags } from "../data";

const router = Router();

router.get("/", ((req,res) => {
    res.send(sample_courses);
}
))

router.get("/search/:searchTerm",(req, res) => {
const searchTerm = req.params.searchTerm;
const courses = sample_courses
.filter(course => course.title.toLocaleLowerCase()
.includes(searchTerm.toLocaleLowerCase()));
res.send(courses);
})

router.get("/tags", (req, res) => {
res.send(sample_tags);
})

router.get("/tag/:tagName", (req, res) => {
const tagName = req.params.tagName;
const courses = sample_courses
.filter(course => course.courseSubjects?.includes(tagName));
res.send(courses);
})

router.get("/:courseId", (req, res) => {
const courseId = req.params.courseId;
const course = sample_courses
.find(course => course.id == courseId);
res.send(course);
})

export default router;