import { pool } from 'tu_archivo_de_conexion_a_la_base_de_datos.js';

export const create_producto = async (req, res) => {
  const {
    productos_imagen,
    productos_titulo,
    productos_ano,
    productos_tipo,
    productos_subtipo,
    productos_idioma,
    productos_linea,
    productos_autor,
    puntajes_valor
  } = req.body;
  
  const createProductoQuery = `INSERT INTO productos (
    productos_titulo,
    productos_ano,
    productos_tipo,
    productos_subtipo,
    productos_idioma,
    productos_linea,
    productos_imagen,
    productos_autor
  ) VALUES ($1, $2, $3, $4, $5, $6, $7, $8) RETURNING *`;

  const createPuntajeQuery = `INSERT INTO puntajes (
    producto_id,
    puntajes_valor
  ) VALUES ($1, $2) RETURNING *`;

  const values = [
    productos_titulo,
    productos_ano,
    productos_tipo,
    productos_subtipo,
    productos_idioma,
    productos_linea,
    productos_imagen,
    productos_autor,
  ];

  try {
    await pool.query('BEGIN');

    const productoResult = await pool.query(createProductoQuery, values);
    const newProducto = productoResult.rows[0];
    const productoId = newProducto.producto_id;

    const puntajeResult = await pool.query(createPuntajeQuery, [productoId, puntajes_valor]);
    const newPuntaje = puntajeResult.rows[0];

    await pool.query('COMMIT');

    res.status(200).json({
      message: "Se creó el producto y el puntaje correctamente",
      new_producto: newProducto,
      new_puntaje: newPuntaje
    });
  } catch (error) {
    await pool.query('ROLLBACK');
    res.status(400).json({ message: error.message });
  }
};



//Controlador
export const getproducto = async (req, res) => {
try {
  
  const new_producto = await sequelize.query("SELECT productos.productos_titulo,puntajes.puntaje_puntuacion FROM productos JOIN puntajes ON puntajes.producto_id = productos.producto_id");
  
  res.status(200).json({ succes: true, message: "listado", new_producto });
} catch (error) {
  return res.status(400).json({message: error.message});
}
  
  };