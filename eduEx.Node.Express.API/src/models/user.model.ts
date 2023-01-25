import { model, Schema } from "mongoose";

export interface User {
  id:string;
  firstName:string;
  lastName:string;
  email:string;
  address:string;
  password: string;
  isAdmin:boolean;
  isMentor:boolean;
}

export const UserSchema = new Schema<User>(
  {
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    address: { type: String, required: true },
    password: { type: String, required: true },
    isAdmin: { type: Boolean, required: true },
    isMentor: { type: Boolean, required: true },
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
);

export const UserModel = model<User>('user', UserSchema);