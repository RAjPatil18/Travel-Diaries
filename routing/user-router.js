import { Router } from "express";
import { addUsers, getallUsers, getUser, loginUser } from "../controllers/user-controllers";
const userRouter= Router();

userRouter.get("/",getallUsers);
userRouter.get("/:id",getUser);
userRouter.post("/signup",addUsers);
userRouter.post("/login",loginUser);


export default userRouter;