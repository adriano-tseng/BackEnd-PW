import DocenteRepository from "../repository/docenteRepository.js";

const findAll = async (req, res) =>{
    const result = await DocenteRepository.findAll();
    return sendResponse(result, res);
}

const findOne = async (req, res) => {
    const id = req.params.id;
    const result = await DocenteRepository.findOne(id);
    
    return sendResponse(result, res);
}

const create = async (req, res) =>{
    const result = await DocenteRepository.create(req.body);
    return sendResponse(result, res);
}

const update = async (req, res) =>{
    const result = await DocenteRepository.update(req.body)
    return sendResponse(result, res);
}

// const remove = (req, res) => {
//     const id = req.params.id;
//     const result = DocenteRepository.remove(id);
//     return sendResponse(result, res);
// }

const sendResponse = (result, res) => {
    if (result)
        return res.status(200).json(result);
    else
        return res.status(500).json({ message: 'Ha ocurrido un error'})
}

const DocenteController = {findAll, create, findOne, update}
export default DocenteController;