import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";
import { persona } from "./personaModel.js";
export const comentarios = sequelize.define('comentarios', {
    id_Comentarios: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
   
    nombre: {
      type:DataTypes.STRING(50),
    },

    comentario: {
        type: DataTypes.TEXT,
    },


    comentarios_persona_id:{
    type:DataTypes.INTEGER,
    references:{
        model:'personas',
        key:'id_persona'
    }
}}
);
