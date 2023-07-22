import { Usuario } from "../db/index.js"

const logIn = async (cuenta) => {
    const email = cuenta.email;
    const password = cuenta.password;
    
    const usuario = await Usuario.findOne({
        where: {
            email: email,
            password: password
        }
    })
    return usuario;
}

const AuthRepository = {logIn}

export default AuthRepository;