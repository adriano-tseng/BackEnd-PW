import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';

//imports rutas
import docentesRoutes from './src/routes/docentes.js';
import estudiantesRoutes from './src/routes/estudiantes.js';
import citasRoutes from './src/routes/citas.js'
//
const PORT = process.env.PORT || 3000

let app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended : true
}))
app.use(cors({
    origin : "*"
}))

app.use(express.static('public')); 
app.use('/images', express.static('images'));

app.get('/', (req, res) =>{
    return res.json({result: 'OK'});
});
//
//rutas
app.use("/docentes", docentesRoutes);
app.use("/estudiantes", estudiantesRoutes)
app.use("/citas", citasRoutes)

app.listen(PORT, () => {
    console.log('Servidor iniciado.');
});
