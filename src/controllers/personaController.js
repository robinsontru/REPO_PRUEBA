import { persona } from "../models/personaModel.js";



export async function postaper(req, res) {
    const { nombre, telefono , numeroFicha,comentarios_persona_id } = req.body;
    try {
        const newAprendiz = await persona.create(
            {
         nombre, telefono,numeroFicha,comentarios_persona_id
            }
        );

    } catch (error) {
        res.status(500).json({ message: error.message, });
    }
}