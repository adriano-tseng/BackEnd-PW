import { Calificacion } from "../db/index.js"

const findAll = async () => {
    const calificaciones = await Calificacion.findAll()
    return calificaciones;
}

const create = async (calificacion) =>{
    const nuevoCal = await Calificacion.create(calificacion)
    return nuevoCal;
}

const ranking = async () =>{
    const listaRanking = await Calificacion.findAll({
        attributes: ['usuario_id', [sequelize.fn('AVG', sequelize.col('calificacion')), 'promedio_calificacion']],
        group: ['usuario_id'],
        order: [[sequelize.fn('AVG', sequelize.col('calificacion')), 'DESC']],
        include: [{ model: Usuario, attributes: ['id', 'nombres', 'apellidos'] }]
    });

    return listaRanking;
}

const CalificacionRepository = {findAll, create, ranking}

export default CalificacionRepository;