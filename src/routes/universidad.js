import express from "express";
import UniversidadController from "../controllers/universidadController.js";

const router = express.Router()

router.get("/", UniversidadController.findAll);

export default router;