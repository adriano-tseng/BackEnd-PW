import express from "express";
import CursoController from "../controllers/cursoController.js";

const router = express.Router()

router.get("/", CursoController.findAll);

export default router;