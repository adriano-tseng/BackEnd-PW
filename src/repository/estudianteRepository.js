import { Usuario } from "../db/index.js"

const findAll = async () => {
    const estudiantes = await Usuario.findAll({
        where : {
            rol: "est"
        }
    })
    return estudiantes;
}

const create = async (estudiante) =>{
    const nuevoEst = await Usuario.create(estudiante)
    return nuevoEst;
}

const findOne = async (id) =>{
    const estudiante = await Usuario.findOne({
        where : {
            id: id
        }
    })
    return estudiante;
}

const update = async (estudiante) =>{
    const id = estudiante.id;

    const actEst = await Usuario.update(estudiante,{
        where : {
            id : id
        }
    })
    
    return actEst;
}

// const remove = (id) =>{
//     const index = estudiantes.findIndex(item => item.id == id)
//     if(index > -1){
//         estudiantes.splice(index, 1)
//         return true
//     }

//     return false
// }

const EstudianteRepository = { findAll, create, findOne, update}

export default EstudianteRepository;