import express from "express";
import { getAllPosts } from "../controllers/Posts.js"; // Added the .js extension

const router = express.Router();

router.get("/", getAllPosts);

export default router;
