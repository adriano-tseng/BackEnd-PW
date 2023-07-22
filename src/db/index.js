import { Sequelize, DataTypes } from "sequelize";

const CADENA_CONEXION = process.env.DATABASE_URL

const sequelize = new Sequelize(CADENA_CONEXION, {
    dialectOptions : {
        ssl : {
            require : true,
            rejectUnauthorized : false
        }
    }
})

export const Usuario = sequelize.define("usuario", {
    id : {
        primaryKey : true,
        type : DataTypes.UUID,
        defaultValue : Sequelize.UUIDV4
    },
    dni : {
        type : DataTypes.INTEGER,
        allowNull : false
    },
    nombres : {
        type : DataTypes.STRING(50),
        allowNull : false
    },
    apellidos : {
        type : DataTypes.STRING(50),
        allowNull : false
    },
    tipo_documento : {
        type : DataTypes.STRING(15),
        allowNull : false
    },
    documento : {
        type : DataTypes.STRING(50),
        allowNull : false
    },
    rol : {
        type : DataTypes.STRING(15),
        allowNull : false
    },
    carrera_id : {
        type : DataTypes.UUID,
        allowNull : true
    },
    imagen : {
        type : DataTypes.STRING(150),
        allowNull : true
    }
}, {
    timestamps : false,
    freezeTableName : true
})

export const Universidad = sequelize.define("universidad", {
    id : {
        primaryKey : true,
        type : DataTypes.UUID,
        defaultValue : Sequelize.UUIDV4
    },
    nombre : {
        type : DataTypes.STRING(40),
        allowNull : false
    }
}, {
    timestamps : false,
    freezeTableName : true
})

export const Carrera = sequelize.define("carrera", {
    id : {
        primaryKey : true,
        type : DataTypes.UUID,
        defaultValue : Sequelize.UUIDV4
    },
    universidad_id : {
        type : DataTypes.UUID,
        allowNull : false
    },
    nombre : {
        type : DataTypes.STRING(40),
        allowNull : false
    }
}, {
    timestamps : false,
    freezeTableName : true
})

export const Curso = sequelize.define("curso", {
    id : {
        primaryKey : true,
        type : DataTypes.UUID,
        defaultValue : Sequelize.UUIDV4
    },
    carrera_id : {
        type : DataTypes.UUID,
        allowNull : false
    },
    nombre : {
        type : DataTypes.STRING(40),
        allowNull : false
    }
}, {
    timestamps : false,
    freezeTableName : true
})

export const UsuarioCurso = sequelize.define("usuariocurso", {
    id : {
        primaryKey : true,
        type : DataTypes.UUID,
        defaultValue : Sequelize.UUIDV4
    },
    usuario_id : {
        type : DataTypes.UUID,
        allowNull : false
    },
    curso_id : {
        type : DataTypes.UUID,
        allowNull : false
    }
}, {
    timestamps : false,
    freezeTableName : true
})

export const Horario = sequelize.define("horario", {
    id : {
        primaryKey : true,
        type : DataTypes.UUID,
        defaultValue : Sequelize.UUIDV4
    },
    usuario_id : {
        type : DataTypes.UUID,
        allowNull : false
    },
    hinicio : {
        type : DataTypes.STRING(40),
        allowNull : false
    },
    hfin : {
        type : DataTypes.STRING(40),
        allowNull : false
    },
    dia : {
        type : DataTypes.STRING(40),
        allowNull : false
    }
}, {
    timestamps : false,
    freezeTableName : true
})

export const Cita = sequelize.define("cita", {
    id : {
        primaryKey : true,
        type : DataTypes.UUID,
        defaultValue : Sequelize.UUIDV4
    },
    usuario_est_id : {
        type : DataTypes.UUID,
        allowNull : false
    },
    usuario_doc_id : {
        type : DataTypes.UUID,
        allowNull : false
    },
    curso_id : {
        type : DataTypes.UUID,
        allowNull : false
    },
    hinicio : {
        type : DataTypes.STRING(40),
        allowNull : false
    },
    hfin : {
        type : DataTypes.STRING(40),
        allowNull : false
    },
    dia : {
        type : DataTypes.STRING(40),
        allowNull : false
    },
    enlace : {
        type : DataTypes.STRING(150),
        allowNull : false
    },
    estado : {
        type : DataTypes.STRING(40),
        allowNull : false
    }
}, {
    timestamps : false,
    freezeTableName : true
})

export const Calificacion = sequelize.define("calificacion", {
    id : {
        primaryKey : true,
        type : DataTypes.UUID,
        defaultValue : Sequelize.UUIDV4
    },
    usuario_id : {
        type : DataTypes.UUID,
        allowNull : false
    },
    cita_id : {
        type : DataTypes.UUID,
        allowNull : false
    },
    calificacion : {
        type : DataTypes.INTEGER,
        allowNull : false
    },
    comentario : {
        type : DataTypes.STRING(300),
        allowNull : false
    }
}, {
    timestamps : false,
    freezeTableName : true
})

//RELACIONES
//Usuario * <-> 1 Carrera
Usuario.belongsTo(Carrera, {
    foreignKey : "carrera_id"
})
Carrera.hasMany(Usuario,{
    foreignKey : "id"
})

//Usuario 1 <-> * UsuarioCurso
UsuarioCurso.belongsTo(Usuario, {
    foreignKey : "usuario_id"
})
Usuario.hasMany(UsuarioCurso,{
    foreignKey : "id"
})

//Usuario 1 <-> * Horario
Usuario.hasMany(Horario,{
    foreignKey : "id"
})
Horario.belongsTo(Usuario, {
    foreignKey : "usuario_id"
})

//Usuario 1 <-> * Cita (Est)
Usuario.hasMany(Cita,{
    foreignKey : "id"
})
Cita.belongsTo(Usuario, {
    foreignKey : "usuario_est_id"
})

//Usuario 1 <-> * Cita (Doc)
Cita.belongsTo(Usuario, {
    foreignKey : "usuario_doc_id"
})

//Curso 1 <-> * UsuarioCurso
Curso.hasMany(UsuarioCurso,{
    foreignKey : "id"
})
UsuarioCurso.belongsTo(Curso, {
    foreignKey : "curso_id"
})

//Carrera * <-> 1 Universidad
Universidad.hasMany(Carrera,{
    foreignKey : "id"
})
Carrera.belongsTo(Universidad, {
    foreignKey : "universidad_id"
})

//Cita 1 <-> 1 Calificación
Calificacion.belongsTo(Cita, {
    foreignKey : "cita_id"
})
Cita.hasOne(Calificacion)
