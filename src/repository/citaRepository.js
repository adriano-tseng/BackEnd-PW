import { Cita } from "../db/index.js"

const findAllEst = async (userid) =>{
    const citas = await Cita.findAll({
        where : {
            usuario_est_id: userid
        }
    })
    return citas;
}

const findAllDoc = async (userid) =>{
    const citas = await Cita.findAll({
        where : {
            usuario_doc_id: userid
        }
    })
    return citas;
}

const create = async (cita) =>{
    const nuevaCita = await Cita.create(cita)
    return nuevaCita
}

// const findOne = (id) =>{
//     const result = citas.find(x => x.id == id)
//     return result
// }

// const update = (cita) =>{
//     const index = citas.findIndex(item => item.id === cita.id)
//     if (index > -1) {
//         citas[index] = cita
//         return true
//     }
//     return false
// }

const remove = async (id) =>{
    await Cita.destroy({
        where : {
            id : id
        }
    })

    return true;
}

const CitasRepository = {findAllDoc, findAllEst, create, remove};
export default CitasRepository;