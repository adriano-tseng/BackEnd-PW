import AuthRepository from "../repository/calificacionRepository.js";

const logIn = async (req, res) =>{
    const result = await AuthRepository.logIn(req.body);
    return sendResponse(result,res)
}

const AuthController = {logIn}

export default AuthController;