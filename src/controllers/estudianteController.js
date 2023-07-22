import EstudianteRepository from "../repository/estudianteRepository.js";

const findAll = async (req, res) =>{
    const result = await EstudianteRepository.findAll();
    return sendResponse(result, res);
}

const findOne = async (req, res) =>{
    const id = req.params.id;
    const result = await EstudianteRepository.findOne(id);

    return sendResponse(result, res);
}

const create = async (req, res) =>{
    const result = await EstudianteRepository.create(req.body);
    return sendResponse(result, res);
}

const update = async (req, res) =>{
    const result = await EstudianteRepository.update(req.body)
    return sendResponse(result, res);
}

// const remove = (req, res) => {
//     const id = req.params.id;
//     const result = EstudianteRepository.remove(id);
//     return sendResponse(result, res);
// }

const sendResponse = (result, res) => {
    if (result)
        return res.status(200).json(result);
    else
        return res.status(500).json({ message: 'Ha ocurrido un error'})
}

const EstudianteController = {findAll, create, findOne, update}
export default EstudianteController;