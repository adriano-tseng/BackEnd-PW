import { Universidad } from "../db/index.js"

const findAll = async () => {
    const universidades = await Universidad.findAll()
    return universidades;
}

const UniversidadRepository = {findAll}

export default UniversidadRepository;