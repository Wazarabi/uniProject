import { Course } from './../../eduEx.Ng.UI/src/app/shared/models/course';
import express from "express";
import cors from "cors";
import { sample_courses, sample_tags } from './data';

const app = express();

app.use(cors({
    credentials : true,
    origin : ["http://localhost:4200"]
}));

app.get("/api/courses", ((req,res) => {
        res.send(sample_courses);
    }
))

app.get("/api/courses/search/:searchTerm",(req, res) => {
    const searchTerm = req.params.searchTerm;
    const courses = sample_courses
    .filter(course => course.title.toLocaleLowerCase()
    .includes(searchTerm.toLocaleLowerCase()));
    res.send(courses);
})

app.get("/api/courses/tags", (req, res) => {
    res.send(sample_tags);
})

app.get("/api/courses/tag/:tagName", (req, res) => {
    const tagName = req.params.tagName;
    const courses = sample_courses
    .filter(course => course.courseSubjects?.includes(tagName));
    res.send(courses);
})

app.get("/api/courses/:courseId", (req, res) => {
    const courseId = req.params.courseId;
    const course = sample_courses
    .find(course => course.id == courseId);
    res.send(course);
})

const port = 5000;
app.listen(port, () => {
    console.log("Website served on http://localhost:" + port);
})