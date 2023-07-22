import { Calificacion } from "../db/index.js"

const findAll = async () => {
    const calificaciones = await Calificacion.findAll()
    return calificaciones;
}

const create = async (calificacion) =>{
    const nuevoCal = await Calificacion.create(calificacion)
    return nuevoCal;
}

const CalificacionRepository = {findAll, create}

export default CalificacionRepository;