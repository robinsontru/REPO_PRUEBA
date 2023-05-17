// Importar el modelo de Sequelize y la instancia de Sequelize
import citas, { citas } from "../models/citasModel.js"


// Definir los métodos del controlador

// Controlador para obtener todas las citas
export async function obtenerCitas(req, res) {
  try {
    // Obtén todas las citas de la base de datos utilizando el modelo de citas
    const appointment  = await citas.findAll();

    res.status(200).json({ appointment  }); 
  } catch (error) {
    res.status(500).json({ error: 'No se pudieron obtener las citas' });
  }
}
//Controlador para obtener una cita por id
export async function obtenerCita(req, res) {
  try {
    const { cita_id } = req.params; // Obtén el ID de la cita de los parámetros de la solicitud

    // Busca la cita por su ID en la base de datos utilizando el modelo de citas
    const appointment  = await citas.findByPk(cita_id);

    if (!appointment ) {
      res.status(404).json({ error: 'Cita no encontrada' });
      return;
    }

    res.status(200).json({ appointment  }); // Devuelve la cita encontrada en la respuesta
  } catch (error) {
    res.status(500).json({ error: 'No se pudo obtener la cita, ocurrio algun error.' });
  }

}
// Controlador para eliminar una cita específica por su ID
export async function eliminarCita(req, res) {
  try {
    const { cita_id } = req.params;

    // Busca la cita por su ID en la base de datos utilizando el modelo de citas
    const appointment  = await citas.findByPk(cita_id);

    if (!appointment ) {
      res.status(404).json({ error: 'Cita no encontrada' });
      return;
    }
    // Elimina la cita de la base de datos
    await cita.destroy();
    res.status(200).json({ message: 'Cita eliminada exitosamente' });
  } catch (error) {
    res.status(500).json({ error: 'No se pudo eliminar la cita, algo salio mal' });
  }
}

//Controlador para crear la cita
export async function crearCitas(req, res) {
  try {
    const { cita_id, fecha, hora_id, Asistencia } = req.body; // Obtén los datos de la solicitud
    const appointment  = await citas.create({ cita_id, fecha, hora_id, Asistencia });

    res.status(201).json({ appointment  }); // Devuelve la cita creada en la respuesta
  } catch (error) {
    res.status(500).json({ error: 'No se pudo crear la cita' });
  }
}

// Controlador para actualizar una cita por su ID
export async function actualizarCita(req, res) {
  try {
    const { cita_id } = req.params; // Obtén el ID de la cita de los parámetros de la solicitud
    const { fecha, hora_id, Asistencia } = req.body; // Obtén los datos actualizados de la solicitud

    // Busca la cita por su ID en la base de datos utilizando el modelo de citas
    const appointment = await citas.findByPk(cita_id);

    if (!appointmentappointment) {
      res.status(404).json({ error: 'Cita no encontrada' });
      return;
    }

    // Actualiza los datos de la cita y guárdala en la base de datos
    appointment.fecha = fecha;
    appointment.hora_id = hora_id;
    appointment.Asistencia = Asistencia;
    await appointment.save();

    res.status(200).json({ appointment }); // Devuelve la cita actualizada en la respuesta
  } catch (error) {
    res.status(500).json({ error: 'No se pudo actualizar la cita' });
  }
}