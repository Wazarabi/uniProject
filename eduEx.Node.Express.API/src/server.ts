import dotenv from 'dotenv';
dotenv.config(); // Loads .env file contents into process.env.X

import express from "express";
import cors from "cors";
import courseRouter from "./routers/course.router";
import userRouter from "./routers/user.router";
import { dbConnect } from './configs/database.config';
dbConnect();


const app = express();

app.use(express.json()); // middleware for parsing request body as JSON

app.use(cors({
    credentials : true,
    origin : ["http://localhost:4200"]
}));


app.use("/api/courses", courseRouter);
app.use("/api/users", userRouter);


const port = 5000;
app.listen(port, () => {
    console.log("Website served on http://localhost:" + port);
})