// Importar el modelo de Sequelize y la instancia de Sequelize
import { comentarios } from "../models/comentariosModel.js";
import { sequelize } from "../database/database.js";

// Definir los métodos del controlador

// Controlador para obtener todos los comentarios
export async function obtenerComentarios(req, res) {
  try {
    // Obtener todos los comentarios de la base de datos
    const comment = await comentarios.findAll(
      {
        atributes: ["id_Comentarios","nombre", "comentario"]
      });
    res.json(comment);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error al obtener los comentarios" });
  }
}

//controlador para obtener comentarios por id
export async function obtenerComentario(req, res) {
  const { id_Comentarios } = req.params;
  try {
    const comment = await comentarios.findOne(
      {
        where: {
          id_Comentarios,
        }
      }
    );
    res.json(comment);
  } catch (error) {
    return res.status(500).json({ message: "Error al obtener el comentario" });
  }
}
// Método para crear un comentario
export async function crearComentarios(req, res) {
  const { nombre,comentario } = req.body;
  try {
    const comment = await comentarios.create({ nombre, comentario }, {
      fields: ["nombre", "comentario"]
    });
    return res.status(200).json({ message: 'Comentario creado correctamente' })
    // return res.json(comment)
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error al crear el comentario" });
  }
}

// Controlador para eliminar un comentario forma 1
export async function eliminarComentario(req, res) {
  const { id_Comentarios } = req.params;
  try {
    // Buscar el comentario en la base de datos y eliminarlo
    const comment = await comentarios.destroy({
      where: { id_Comentarios },
    });
    // Si el comentario no existe, enviar una respuesta 202
    if (!comment) {
      return res.status(202).json({ message: "Comentario no encontrado" });
    }

    return res.status(200).json({ message: 'Comentario eliminado correctamente' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error al eliminar el comentario" });
  }
}
//Controlador de herencia
export const getproducto = async (req, res) => {
  try {
    
    const new_producto = await sequelize.query("SELECT comentarios.nombre,comentario FROM comentarios JOIN personas ON personas.id_persona = comentarios.comentarios_persona_id");
    
    res.status(200).json({ succes: true, message: "listado", new_producto });
  } catch (error) {
    return res.status(400).json({message: error.message});
  }
    
    };
