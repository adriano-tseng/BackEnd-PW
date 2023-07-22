import { Horario } from "../db/index.js"

const findAll = async (userid) =>{
    const docentes = await Horario.findAll({
        where : {
            usuario_id: userid
        }
    })
    return docentes;
}

const create = async (horario) =>{
    const nuevoHorario = await Horario.create(horario)
    return nuevoHorario;
}

const remove = async (id) =>{
    await Horario.destroy({
        where : {
            id : id
        }
    })

    return true;
}

const HorarioRepository = {findAll, create, remove}

export default HorarioRepository;