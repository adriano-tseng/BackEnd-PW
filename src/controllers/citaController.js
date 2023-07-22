import CitasRepository from "../repository/citaRepository.js";
import DocenteRepository from "../repository/docenteRepository.js";
import EstudianteRepository from "../repository/estudianteRepository.js";
import { Usuario } from "../db/index.js"


const findAll = async (req, res) =>{
    const userid = req.params.id;
    let result = null;

    const estudiante = await Usuario.findOne({
        where : {
            id : userid
        }
    })

    const docente = await Usuario.findOne({
        where : {
            id : userid
        }
    })

    if(estudiante){
        result = CitasRepository.findAllDoc(userid)
    } else if (docente) {
        result = CitasRepository.findAllEst(userid)
    }
}

const create = async (req, res) =>{
    const result = await CitasRepository.create(req.body);

    return sendResponse(result, res);
}

// const update = (req, res) =>{
//     const result = CitasRepository.update(req.body);
//     return sendResponse(result, res)
// }

const remove = async (req, res) =>{
    const id = req.params.id;
    const result = await CitasRepository.remove(id);
    return sendResponse(result, res)
}

const sendResponse = (result, res) => {
    if (result)
        return res.status(200).json(result);
    else
        return res.status(500).json({ message: 'Ha ocurrido un error'})
} 

const CitaController = {findAll, create, remove}

export default CitaController;