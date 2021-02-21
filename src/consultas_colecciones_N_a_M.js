/*Sacamos ficha del alumno con todos los cursos que tiene, usando $project*/

db.alumno.aggregate(
    [
        {
            $lookup: {
                from: "idioma",
                localField: "detalle.cod_idioma",
                foreignField: "cod_idioma",
                as: "idioma_cursado"
            }
        },
        {
            $project: {
                _id: 0,
                "cod_alumno": 1,
                "fecha_comienzo": 1,
                "nombre_alumno": 1,
                "facultad": 1,
                "detalle.cod_idioma": 1,
                "detalle.horas_cursadas": 1,
                "idioma_cursado.nombre_curso": 1,
                "idioma_cursado.horas_requeridas": 1,
                "idioma_cursado.precio_hora": 1
            }
        }
    ]
).pretty()


/*con operador $unwind, sacamos un documento 
por cada elemento del conjunto (array), 
en este caso, "detalle" y con todos los datos del documento original*/

db.alumno.aggregate([
    {
        $unwind: "$detalle"
    }
]).pretty()


/*Con a $unwind, nos sale el coste por idioma, de cada alumno, por separado*/

db.alumno.aggregate(
    [
    {
        $unwind: "$detalle"
    },
        {
            $lookup: {
                from: "idioma",
                localField: "detalle.cod_idioma",
                foreignField: "cod_idioma",
                as: "idioma_cursado"
            }
        },
        {
            $set: {
                precio_cada_hora: {$arrayElemAt: ["$idioma_cursado", 0]}
            }
        },

        {
            $project: {
                _id:0,
                "identificador alumno": "$cod_alumno",
                "día de inicio": {$dayOfMonth: "$fecha_comienzo"},
                "mes de inicio": { $month: "$fecha_comienzo" },
                "año de inicio": { $year: "$fecha_comienzo" },
                "nombre y apellidos": "$nombre_alumno",
                "cantidad de horas": "$detalle.horas_cursadas",
                "precio por hora": "$precio_cada_hora.precio_hora",
                "total gastado": {$multiply: 
                   ["$detalle.horas_cursadas", "$precio_cada_hora.precio_hora"]}
            }
        }
    ]
).pretty()


/*Debido al $unwind, nos sale el coste por idioma, de cada alumno, por separado
por ello tenemos que usar $group al final 
para que nos salga la suma total del coste*/

db.alumno.aggregate(
    [
    {
        $unwind: "$detalle"
    },
        {
            $lookup: {
                from: "idioma",
                localField: "detalle.cod_idioma",
                foreignField: "cod_idioma",
                as: "idioma_cursado"
            }
        },
        {
            $set: {
                precio_cada_hora: {$arrayElemAt: ["$idioma_cursado", 0]}
            }
        },

        {
            $project: {
                _id:0,
                "identificador_alumno": "$cod_alumno",
                "día de inicio": {$dayOfMonth: "$fecha_comienzo"},
                "mes de inicio": { $month: "$fecha_comienzo" },
                "año de inicio": { $year: "$fecha_comienzo" },
                "nombre y apellidos": "$nombre_alumno",
                "cantidad de horas": "$detalle.horas_cursadas",
                "precio por hora": "$precio_cada_hora.precio_hora",
                "total_por_idioma": {$multiply: 
                   ["$detalle.horas_cursadas", "$precio_cada_hora.precio_hora"]}
            }
        },
{
        $group: {
            _id: "$identificador_alumno",
            "total_gastado": { $sum: "$total_por_idioma" },
        }
    }

    ]
).pretty()


/*Todo lo gastado por alumno que supere los 5000 euros*/


db.alumno.aggregate(
    [
    {
        $unwind: "$detalle"
    },
        {
            $lookup: {
                from: "idioma",
                localField: "detalle.cod_idioma",
                foreignField: "cod_idioma",
                as: "idioma_cursado"
            }
        },
        {
            $set: {
                precio_cada_hora: {$arrayElemAt: ["$idioma_cursado", 0]}
            }
        },

        {
            $project: {
                _id:0,
                "identificador_alumno": "$cod_alumno",
                "día de inicio": {$dayOfMonth: "$fecha_comienzo"},
                "mes de inicio": { $month: "$fecha_comienzo" },
                "año de inicio": { $year: "$fecha_comienzo" },
                "nombre y apellidos": "$nombre_alumno",
                "cantidad de horas": "$detalle.horas_cursadas",
                "precio por hora": "$precio_cada_hora.precio_hora",
                "total_por_idioma": {$multiply: 
                   ["$detalle.horas_cursadas", "$precio_cada_hora.precio_hora"]}
            }
        },    
{
        $group: {
            _id: "$identificador_alumno",
            "total_gastado": { $sum: "$total_por_idioma" },
        }
    },
{
            $match: {
                "total_gastado": { $gt: 5000 }
            }
        }
    ]
).pretty()




/*Todo lo gastado por alumno que supere los 5000 euros y ordenado (DESCENDENTE)*/




db.alumno.aggregate(
    [
    {
        $unwind: "$detalle"
    },
        {
            $lookup: {
                from: "idioma",
                localField: "detalle.cod_idioma",
                foreignField: "cod_idioma",
                as: "idioma_cursado"
            }
        },
        {
            $set: {
                precio_cada_hora: {$arrayElemAt: ["$idioma_cursado", 0]}
            }
        },

        {
            $project: {
                _id:0,
                "identificador_alumno": "$cod_alumno",
                "día de inicio": {$dayOfMonth: "$fecha_comienzo"},
                "mes de inicio": { $month: "$fecha_comienzo" },
                "año de inicio": { $year: "$fecha_comienzo" },
                "nombre y apellidos": "$nombre_alumno",
                "cantidad de horas": "$detalle.horas_cursadas",
                "precio por hora": "$precio_cada_hora.precio_hora",
                "total_por_idioma": {$multiply: ["$detalle.horas_cursadas", "$precio_cada_hora.precio_hora"]}
            }
        }, 
{
        $group: {
            _id: "$identificador_alumno",
            "total_gastado": { $sum: "$total_por_idioma" },
        }
    },
        {
            $sort: {
                "total_gastado": -1
            }
        },
{
            $match: {
                "total_gastado": { $gt: 5000 }
            }
        }
    ]
).pretty()