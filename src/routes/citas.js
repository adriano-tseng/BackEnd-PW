import express from "express";
import CitaController from "../controllers/citaController.js";

const router = express.Router()

router.get("/:id", CitaController.findAll);
router.post("/", CitaController.create);
// router.put("/", CitaController.update);
router.delete("/:id", CitaController.remove);
// router.get("/:id", CitaController.findOne);

export default router;