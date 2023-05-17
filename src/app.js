//IMPORTAMOS EXPRESS
import express from "express";
import path from 'path';
//importamos cors
import  cors  from "cors";
//Importamos Morgan desde express
import morgan from "morgan";

//Importamos Rutas
import enfermeraRouter from './routes/enfermeraRouter.js'
import personaRouter from './routes/personaRouter.js'
// import psicologaRouter from "./routes/psicologaRouter.js"




const app = express();
//Middlewares, esto para que el servidor interprete los datos en formato json
app.use(morgan('dev'));
app.use(express.json());
//Usamos la ruta aprendiz
import { fileURLToPath } from 'url';
const filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(filename);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// app.use(express.json());
// app.use(express.urlencoded({ extended: false }));
// app.use(express.static(path.join(__dirname, 'public/images/')));
app.use(cors())
app.use('/',enfermeraRouter);
// import comentariosRouter from './routes/aprendizRouter.js'
import comentarioRoutes from "./routes/comentariosRouter.js";

//Ruta comentarios
app.use("/", comentarioRoutes);
//Ruta persona
app.use("/",personaRouter);
export default app;