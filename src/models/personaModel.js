import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";
import {citas  } from "./citasModel.js";
import { Producto } from "./eventoModel.js";
import { juego } from "./juegosModel.js";
import { comentarios } from "./comentariosModel.js";
export const persona = sequelize.define('persona', {
    id_persona: {
        type: DataTypes.INTEGER.UNSIGNED,
        primaryKey: true,
        autoIncrement :true
        // allowNull: false
    },
    constraseña: {
        type: DataTypes.INTEGER.UNSIGNED,

        // allowNull: false
    },
    email: {
        type: DataTypes.INTEGER.UNSIGNED,
        // allowNull: false
    },

    apellido: {
        type: DataTypes.INTEGER.UNSIGNED,

        // allowNull: false
    },
    tipo_documento: {
    type: DataTypes.INTEGER.UNSIGNED,
    // allowNull: false
    },
    N_documento: {
        type: DataTypes.INTEGER.UNSIGNED,
        // allowNull: false
    },
    nombre: {
        type: DataTypes.INTEGER.UNSIGNED,

        // allowNull: false
    },
    telefono: {
        type: DataTypes.INTEGER.UNSIGNED,
        // allowNull: false
    },
    correo: {
        type: DataTypes.INTEGER.UNSIGNED,

        //  allowNull: false
    },
    n_ficha: {
        type: DataTypes.INTEGER.UNSIGNED,

        // allowNull: false
    },
    rol: {
        type: DataTypes.ENUM('AP','EN','SP'),
    },
    
});

//Relaciones de rol con cita
persona.belongsTo(citas, {foreignkey: "id_persona"});
citas.hasOne(persona, {foreignkey: " cita_id"});

//Relaciones de rol con juegos
persona.belongsTo(juego, {foreignkey: "id_persona"});
juego.hasOne(persona, {foreignkey: "id_juego"});

//Relaciones de rol con evento
persona.belongsTo(Producto, {foreignkey: "id_persona"});
Producto.hasOne(persona, {foreignkey: "id_Evento"});

//Relaciones de rol con comentarios
// persona.belongsTo(comentarios, {foreignkey: "id_Comentarios"});
// comentarios.hasOne(persona, {foreignkey: " id_persona"});