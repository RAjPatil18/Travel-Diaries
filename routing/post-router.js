import { Router } from "express";
import { addPost, deletePostById, getAllPosts, getPostById, updatePost } from "../controllers/post-controllers";

const postRouter=Router();

postRouter.get("/",getAllPosts);
postRouter.get("/:id",getPostById);
postRouter.post("/",addPost);
postRouter.put("/:id",updatePost);
postRouter.delete("/:id",deletePostById);


export default postRouter;