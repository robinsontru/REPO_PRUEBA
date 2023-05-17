import { Router } from "express";
//Importa el controlador aprendizController
import { postaper,  } from "../controllers/personaController.js";
const router = Router()
//  router.get("/aprendiz",getAprendizes);
//router.get("/aprendiz", getaprendiz);
// router.get("/aprendiz/:id", getOneAprendices);
router.post("/persona",postaper);
//router.post("/aprendiz", postaprendiz);
// router.put("/aprendiz/:id", updateAprendiz);
// router.delete("/aprendiz/:id", deleteAprendiz);
export default router;
