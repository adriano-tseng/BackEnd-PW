import CalificacionRepository from "../repository/calificacionRepository.js";

const findAll = async (req, res) =>{
    const result = await CalificacionRepository.findAll();
    return sendResponse(result,res)
}

const create = async (req, res) =>{

    const result = await CalificacionRepository.create(req.body);

    return sendResponse(result, res);
}

const sendResponse = (result, res) => {
    if (result)
        return res.status(200).json(result);
    else
        return res.status(500).json({ message: 'Ha ocurrido un error'})
}

const CalificacionController = {findAll, create}

export default CalificacionController;