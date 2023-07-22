import express from "express";
import CalificacionController from "../controllers/calificacionController.js";

const router = express.Router()

router.get("/", CalificacionController.findAll);
router.post("/", CalificacionController.create);

export default router;