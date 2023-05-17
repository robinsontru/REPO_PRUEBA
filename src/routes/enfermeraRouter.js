import { Router } from "express";
import multer from 'multer';
//Importa el controlador aprendizController
import {  get , post,getimg,eliminarimg } from "../controllers/enfermeraController.js";
const router = Router()
const storage = multer({ dest: 'public/images/' });
router.get('/enfermera', get);
router.get('/evento', getimg);
router.delete('/evento/:idEvento ',eliminarimg);
// router.post('/upload', storage.single('imagen'), update);

router.post('/upload', storage.single('imagen'), post);
router.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "*");
    res.header("Access-Control-Allow-Headers", "*");
    next();});


export default router;