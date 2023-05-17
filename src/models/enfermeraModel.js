import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";
//Importa la constante evento del modelo eventoModel para hacer la relacion.
import { evento } from "./eventoModel.js";

export const enfermera = sequelize.define('enfermera',{
    rethus:{
        type: DataTypes.STRING,
        allowNull: false,
        primaryKey: true,
    },
},{
    timestamps: false
},{
     //Herencia Modelo personaHerencia a Aprendiz
     inheritance:{
        type: DataTypes.STRING,
        modelName: 'personaHerencia'
    }
});

//Relacion una a muchos enfermera - evento
enfermera.hasMany(evento,{
    foreignKey: 'enfermeraId',
    sourcekey: 'idEvento',
})
evento.belongsTo(enfermera,{
    foreignKey: 'enfermeraId',
    targetId: 'rethus',
});