import { User, UserModel } from './../models/user.model';
import { Router } from 'express';
import jwt from "jsonwebtoken";
import { sample_users } from '../data';
import expressAsyncHandler from 'express-async-handler';
import { HTTP_BAD_REQUEST } from '../constants/http_status';
import bcrypt from 'bcryptjs';

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
            res.status(HTTP_BAD_REQUEST).send("User name or password is not valide, try again please.");
        }
    }
))

router.post("/register", expressAsyncHandler(
    async (req, res) => {
        const {firstName, lastName, email, password, address} = req.body;
        const user = await UserModel.findOne({email}); //email is unique according to dB schema defined earlier
        if (user){
            res.status(HTTP_BAD_REQUEST).send('User already exists, please login');
            return;
        }

        // encrypt | hash the password before saving to the Db + 10 as the salt of the hash basicaly how hard u want it (ocntrainte : ressources)
        const encryptedPassword = await bcrypt.hash(password, 10);

        // id will be generated automaticaly anyway in the Db
        const newUser: User = {
            id:'',
            firstName,
            lastName,
            email: email.toLowerCase(),
            password: encryptedPassword,
            address,
            isAdmin : false,
            isMentor : false,
        }

        const dbUser = await UserModel.create(newUser);
        res.send(generateTokenResponse(dbUser));
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