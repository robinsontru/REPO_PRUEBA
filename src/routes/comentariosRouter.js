// Importar el Router de Express y el controlador de comentarios
import { Router } from "express";
import { crearComentarios, eliminarComentario, obtenerComentario, obtenerComentarios,getproducto } from "../controllers/comentariosController.js";

// Crear un router para las rutas de comentarios
const router = Router();

// Definir las rutas para obtener y agregar comentarios
router.post("/comentario", crearComentarios);
router.delete("/comentario/:id_Comentarios", eliminarComentario);
router.get("/comentario", obtenerComentarios);
router.get("/comentario/:id_Comentarios", obtenerComentario);
router.get("/comentarios", getproducto);

// Exportar el router
export default router;
