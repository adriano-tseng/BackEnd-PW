import { Curso } from "../db/index.js"

const findAll = async () => {
    const cursos = await Curso.findAll()
    return cursos;
}

const CursoRepository = {findAll}

export default CursoRepository;