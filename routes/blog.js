import express from "express"
import { createBlog, updateBlog, deleteBlog, getBlog, getBlogs} from "../controllers/blog.js";

const router = express.Router();

//CREATE
router.post("/", createBlog);
//UPDATE
router.put("/:id", updateBlog)
//DELETE
router.delete("/:id", deleteBlog)
//GET
router.get("/find/:id", getBlog)
//GET ALL
router.get("/", getBlogs)

export default router