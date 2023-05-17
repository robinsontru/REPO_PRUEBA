import multer from 'multer';
import fs from 'fs';
import path from 'path';
import { Producto } from "../models/eventoModel.js";

import { fileURLToPath } from 'url';
const filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(filename);

const storage = multer({ dest: 'public/images/' });



 export const get=('/evento/:5/imagen', async (req, res) => {
  // const producto = await Producto.findByPk(req.params.id);
  // if (!producto) {
  //   return res.status(404).send('Producto no encontrado');
  // }
  // res.sendFile(producto.imagen);
  res.render('index');
});

// export const update = (req, res) => {
//    // console.log(req.file);
//    fs.renameSync(req.file.path, req.file.path + '.' + req.file.mimetype.split('/')
//     [1]);
//     res.send('Se ha subido');
// };


export const post=('/upload', storage.single('imagen'), async (req, res) => {
  try {
    fs.renameSync(req.file.path, req.file.path + '.' + req.file.mimetype.split('/')
    [1]);
    const { originalname, mimetype,path } = req.file;
    const producto = await Producto.create({
      nombre: originalname,
      imagen: path,
    });
    // res.send('Se ha subido');
  } catch (error) {
    console.error(error);

    res.status(500).json({ message: 'Error al subir la imagen.' });
  }
  res.render('post');
});


//constrollers de eliminar img
export async function eliminarimg(req, res) {
  const { idEvento  } = req.params;
  try {
    // Buscar el comentario en la base de datos y eliminarlo
    const even = await Producto.destroy({
      where: {
        Producto: idEvento 
      },
    });
    return res.status(200).json({ message: 'Comentario eliminado correctamente' });
  } catch (error) {
    console.error(error);
    res.status(400).json({ message: error.message });
  }
}


//controller para miar img
export async function getimg(req, res) {
  try {
    const projects = await Producto.findAll({
      atributes: ["idEvento", "nombre", "image"],
    });
    res.json(projects);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
}