import { Usuario } from "../db/index.js"

const findAll = async () =>{
    const docentes = await Usuario.findAll({
        where : {
            rol: "doc"
        }
    })
    return docentes;
}

const create = async (docente) =>{
    const nuevoDoc = await Usuario.create(docente)
    return nuevoDoc;
}

const findOne = async (id) =>{
    const docente = await Usuario.findOne({
        where : {
            id: id
        }
    })
    return docente;
}

const update = async (docente) =>{
    const id = docente.id;

    const actDoc = await Usuario.update(docente,{
        where : {
            id : id
        }
    })
    
    return actDoc;
}

// const remove = (id) =>{
//     const index = docentes.findIndex(item => item.id == id)
//     if(index > -1){
//         docentes.splice(index, 1)
//         return true
//     }

//     return false
// }

const DocenteRepository = { findAll, create, findOne, update}

export default DocenteRepository;