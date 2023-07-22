import express from "express";
import HorarioController from "../controllers/horarioController.js";

const router = express.Router()

router.get("/:id", HorarioController.findAll);
router.post("/", HorarioController.create);
router.delete("/:id", HorarioController.remove);

export default router;