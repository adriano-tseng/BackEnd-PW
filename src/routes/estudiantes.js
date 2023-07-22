import express from "express";
import EstudianteController from '../controllers/estudianteController.js'

const router = express.Router()

router.get("/", EstudianteController.findAll);
router.post("/", EstudianteController.create);
router.put("/", EstudianteController.update);
// router.delete("/:id", EstudianteController.remove);
router.get("/:id", EstudianteController.findOne);

export default router;