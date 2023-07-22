import express from "express";
import AuthController from "../controllers/authController.js";

const router = express.Router()

router.post("/", AuthController.logIn);

export default router;