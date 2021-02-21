/*Utilizamos el operador de etapa $lookup 
para comprobar que las 2 colecciones están bien relacionadas*/

db.alumno.aggregate(
    [
        {
            $lookup: {
                from: "idioma",
localField: "detalle.cod_idioma",
                foreignField: "cod_idioma",
                as: "idioma_cursado"
            }
        }
    ]
).pretty()


/*Sacamos ficha del alumno con su curso, usando $project*/

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

/*Lo que le está costando al alumno el curso de idioma, 
sacando datos de 2 colecciones*/

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
                _id:0,
                "identificador alumno": "$cod_alumno",
                "día de inicio": {$dayOfMonth: "$fecha_comienzo"},
                "mes de inicio": { $month: "$fecha_comienzo" },
                "año de inicio": { $year: "$fecha_comienzo" },
                "nombre y apellidos": "$nombre_alumno",
                "cantidad de horas": "$detalle.horas_cursadas",
                "precio por hora": {$arrayElemAt: ["$idioma_cursado.precio_hora", 0]},
                "total gastado": {$multiply: 
                ["$detalle.horas_cursadas", {$arrayElemAt: ["$idioma_cursado.precio_hora", 0]}]}
            }
        }
    ]
).pretty()

/*Lo que le está costando al alumno el curso de idioma, 
sacando datos de 2 colecciones, con $SET*/

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