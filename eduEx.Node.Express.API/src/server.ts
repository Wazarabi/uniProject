import { Course } from './../../eduEx.Ng.UI/src/app/shared/models/course';
import express, { response } from "express";
import cors from "cors";
import { sample_courses, sample_tags, sample_users } from './data';
import jwt from "jsonwebtoken";

const app = express();

app.use(express.json());

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

app.post("/api/users/login", (req,res) => {
    const {email, password} = req.body;
    const user = sample_users.find(user => user.email === email && user.password === password);

    if(user){
        res.send(generateTokenResponse(user));
    }else{
        res.status(400).send("User name or password is not valide, try again please.");
    }
})

const generateTokenResponse = (user:any) => {
    const token = jwt.sign({
        email:user.email, isAdmin:user.isAdmin
    },"SecretText",{
        expiresIn:"30d"
    });

    user.token = token;
    return user;
}


const port = 5000;
app.listen(port, () => {
    console.log("Website served on http://localhost:" + port);
})