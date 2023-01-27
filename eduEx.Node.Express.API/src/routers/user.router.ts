import { UserModel } from './../models/user.model';
import { Router } from 'express';
import jwt from "jsonwebtoken";
import { sample_users } from '../data';
import expressAsyncHandler from 'express-async-handler';

const router = Router();


router.get("/seed", expressAsyncHandler(
    async (req,res) => {
        const courseCount = await UserModel.countDocuments();
        if (courseCount > 0) {
            res.send("Seed already done !!");
            return;
        }
        await UserModel.create(sample_users);
        res.send("Seed Is Done !");
    }
))


router.get("/mentors", expressAsyncHandler(
    async (req,res) => {
        const mentors = await UserModel.find({isMentor:true});
        res.send(mentors);
    }
))

// router.get("/mentors/:mentorId", expressAsyncHandler(
//     async (req,res) => {
//         const mentor = await UserModel.findById(req.params.courseId);
//         res.send(mentor);
//     }
// ))

router.post("/login",expressAsyncHandler(
    async (req,res) => {
        const {email, password} = req.body;
        const user = await UserModel.findOne({email, password});
        if(user){
            res.send(generateTokenResponse(user));
        }else{
            res.status(400).send("User name or password is not valide, try again please.");
        }
    }
))

const generateTokenResponse = (user:any) => {
    const token = jwt.sign({
        email:user.email, isAdmin:user.isAdmin
    },"SecretText",{
        expiresIn:"30d"
    });

    return {
        id: user.id,
        firstName:user.firstName,
        lastName:user.lastName,
        email: user.email,
        address: user.adress,
        isAdmin: user.isAdmin,
        isMentor: user.isMentor,
        token: token
    };
}

export default router;