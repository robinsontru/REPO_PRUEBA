// {import { aprendiz } from "../models/aprendizModel.js";
// import {personaHerencia} from "../models/personaHerenciaModel.js"
export async function getAprendizes(req, res) {
    try {
        const aprendices = await aprendiz.query('select * from  comentarios innert join cita cita.id = comentarios.id ') 
        
        res.json(aprendices);
    } catch (error) {
  res.status(400).json({message:error.message})

    }

}
// export async function createAprendiz(req, res) {
//     //console.log(req.body) //verificamos si estan llegando los datos.
//     const {numeroFicha,nombre,apellido,tipoDocumento,numeroDocuemto,telefono,fechaNacimiento,correoElectronico,contraseñaLogin, persona_id } = req.body;
//     try {
//         const newAprendiz = aprendiz.create({
//             include:{
//                 model: personaHerencia,
//                 atributes: ['nombre', 'apellido', 'tipoDocumento', 'numeroDocumento', 'telefono', 'fechaNacimiento', 'correoElectronico', 'contraseñaLogin']
//             },
//             numeroFicha,
//             nombre,
//             apellido,
//             tipoDocumento,
//             numeroDocuemto,
//             telefono,
//             fechaNacimiento,
//             correoElectronico,
//             contraseñaLogin,
//             persona_id
//         }, {
//             fields: ['numeroFicha','nombre', 'apellido', 'tipoDocumento', 'numeroDocumento', 'telefono', 'fechaNacimiento', 'correoElectronico', 'contraseñaLogin', 'persona_id']
//         });
//         if (newAprendiz) {
//             return res.json(newAprendiz,{
//                 message : 'Aprendiz Creado Satisfactoriamente'

//             });
//             // return res.json({
//             //     message: 'Aprendiz Creado Satisfactoriamente',
//             // });
           
//         }
//     } catch (error) {
//         console.log(error)
//         res.status(400).json({message:error.message})

//     }
// }
// export async function getOneAprendices(req, res) {
//     try {
//         const { id } = req.params;
//         const apreendiz = await aprendiz.findOne({
//             where: {
//                 id
//             }
//         });
//         res.json(apreendiz);
//     } catch (error) {
//         res.status(500).json({
//             message: 'Algo salio mal, Intenta Nuevamente.'
//         });

//     }
// }
// export async function deleteAprendiz(req, res) {
//     try {
//         const { id } = req.params;
//         const deleteRowCount = await aprendiz.destroy({
//             where: {
//                 id
//             }
//         });
//         res.json({
//             message: 'Aprendiz eliminado satisfactoriamente',
//             count: deleteRowCount
//         });
//     } catch (error) {
//         res.status(500).json({
//             message: 'Algo salio mal, Intenta Nuevamente.'
//         });
//     }
// }
// export async function updateAprendiz(req, res) {
//     try {
//         const { id } = req.params;
//         const { nombre, apellido, tipoDocumento, numeroDocuemto, telefono, fechaNacimiento, correoElectronico, contraseñaLogin, numeroFicha } = req.body;
//         const aprendiiz = await aprendiz.findAll({
//             attributes: ['id', 'nombre', 'apellido', 'tipoDocumento', 'numeroDocumento', 'telefono', 'fechaNacimiento', 'correoElectronico', 'contraseñaLogin', 'numeroFicha'],
//             where: {
//                 id
//             }
//         });
//         if (aprendiz.length > 0) {
//             aprendiz.forEach(async aprendiz => {
//                 await aprendiz.update({
//                     nombre,
//                     apellido,
//                     tipoDocumento,
//                     numeroDocuemto,
//                     telefono,
//                     fechaNacimiento,
//                     correoElectronico,
//                     contraseñaLogin,
//                     numeroFicha

//                 });
//             })
//         }
//         return res.json({
//             message: 'Los datos del Aprendiz han sido actualizados satisfactoriamente.',
//             data: aprendiiz
//         });

//     } catch (error) {
//         res.status(500).json({
//             message: 'Algo salio mal, Intenta Nuevamente.',
//             data: {}
//         });

//     }


// }




// export async function postaprendiz(req, res) {
//     const { nombre, apellido, tipoDocumento,numeroDocumento, telefono, fechaNacimiento, correoElectronico, contraseñaLogin, numeroFicha } = req.body;
//     try {
//         const newAprendiz = aprendiz.create(
//             {
//                 nombre,
//                 apellido,
//                 tipoDocumento,
//                 numeroDocumento,
//                 telefono,
//                 fechaNacimiento,
//                 correoElectronico,
//                 contraseñaLogin,
//                 numeroFicha
//             }, {
//             fields: 
//              ['nombre', 'apellido', 'tipoDocumento', 'numeroDocumento', 'telefono', 'fechaNacimiento', 'correoElectronico', 'contraseñaLogin', 'numeroFicha']
//         }
//         );
//         return res.json(newAprendiz);
//     } catch (error) {
//         res.status(500).json({ message: error.message, });
//     }
// }}



