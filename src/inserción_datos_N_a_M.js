/* Insertar datos en las colecciones IDIOMA y ALUMNO 
creadas por el propio alumno */

db.idioma.drop()

db.idioma.insertMany([

{ cod_idioma : "idiom001",
  nombre_curso: "Lengua_inglesa",  
  precio_hora: 22.50,
  horas_requeridas: 345
},{
  cod_idioma :  "idiom002",
  nombre_curso: "Lengua_francesa",
  precio_hora: 10.75,
  horas_requeridas: 180
},{
  cod_idioma :  "idiom003",
  nombre_curso: "Lengua_italiana",
  precio_hora: 15,
  horas_requeridas: 190
},{
  cod_idioma : "idiom004",
  nombre_curso: "Lengua_alemana",
  precio_hora: 28,
  horas_requeridas: 300
},{
  cod_idioma : "idiom005",
  nombre_curso: "Lengua_rusa",
  precio_hora: 30,
  horas_requeridas: 350
},{
  cod_idioma : "idiom006",
  nombre_curso: "Lengua_polaca",
  precio_hora: 20.75,
  horas_requeridas: 320
},{
  cod_idioma : "idiom007",
  nombre_curso: "Lengua_arabiga",
  precio_hora:  25.50,
  horas_requeridas: 330
},{
  cod_idioma : "idiom008",
  nombre_curso: "Lengua_japonesa",
  precio_hora:  48.50,
  horas_requeridas: 700
},{
  cod_idioma : "idiom009",
  nombre_curso: "Lengua_china",
  precio_hora:  50.50,
  horas_requeridas: 800
}
])


db.alumno.drop()

db.alumno.insertMany([

{ cod_alumno : "alum001",
  fecha_comienzo: ISODate("2021-02-02T08:00:00Z"),
  nombre_alumno: "Francisco Romero",
  facultad: "Medicina",
  detalle: 
[
  {cod_idioma : "idiom001", "horas_cursadas":20},
  {cod_idioma : "idiom008", "horas_cursadas":10},
  {cod_idioma : "idiom009", "horas_cursadas":12}
]
},{
  cod_alumno :  "alum002",
  fecha_comienzo: ISODate("2020-05-22T08:00:00Z"),
  nombre_alumno: "Soledad Sanz",
  facultad: "Arquitectura",
  detalle: 
[
  {cod_idioma : "idiom001", "horas_cursadas":100},
  {cod_idioma : "idiom004", "horas_cursadas":80}
]
},{
  cod_alumno : "alum003",
  fecha_comienzo: ISODate("2020-03-12T08:00:00Z"),
  nombre_alumno: "Laura Vaz",
  facultad: "Empresariales",
  detalle: 
[
  {cod_idioma : "idiom002", "horas_cursadas":150},
  {cod_idioma : "idiom004", "horas_cursadas":150},
  {cod_idioma : "idiom009", "horas_cursadas":80}
]
},{
  cod_alumno : "alum004",
  fecha_comienzo: ISODate("2020-08-22T08:00:00Z"),
  nombre_alumno: "Manuel Escudero",
  facultad: "Empresariales",
  detalle: 
[
  {cod_idioma : "idiom001", "horas_cursadas":120},
  {cod_idioma : "idiom008", "horas_cursadas":70}
]
},{
  cod_alumno : "alum005",
  fecha_comienzo: ISODate("2020-03-12T08:00:00Z"),
  nombre_alumno: "Sonia Lara",
  facultad: "Medicina",
  detalle: 
[
  {cod_idioma : "idiom001", "horas_cursadas":150},
  {cod_idioma : "idiom004", "horas_cursadas":150},
  {cod_idioma : "idiom007", "horas_cursadas":80}
]
},{
  cod_alumno : "alum006",
  fecha_comienzo: ISODate("2020-03-12T08:00:00Z"),
  nombre_alumno: "Rodrigo Bernabeu",
  facultad: "Empresariales",
  detalle: 
[
  {cod_idioma : "idiom002", "horas_cursadas":150},
  {cod_idioma : "idiom007", "horas_cursadas":80},
  {cod_idioma : "idiom009", "horas_cursadas":80}
]
},{
  cod_alumno : "alum007",
  fecha_comienzo: ISODate("2020-03-12T08:00:00Z"),
  nombre_alumno: "Felipe Ramos",
  facultad: "Empresariales",
  detalle: 
[
  {cod_idioma : "idiom001", "horas_cursadas":150},
  {cod_idioma : "idiom004", "horas_cursadas":150},
  {cod_idioma : "idiom009", "horas_cursadas":80}
]
},{
  cod_alumno : "alum008",
  fecha_comienzo: ISODate("2020-05-22T08:00:00Z"),
  nombre_alumno: "Martina Klein",
  facultad: "Arquitectura",
  detalle: 
[
  {cod_idioma : "idiom001", "horas_cursadas":90},
  {cod_idioma : "idiom004", "horas_cursadas":100}
]
},{
  cod_alumno : "alum009",
  fecha_comienzo: ISODate("2020-05-22T08:00:00Z"),
  nombre_alumno: "Irina Putin",
  facultad: "Arquitectura",
  detalle: 
[
  {cod_idioma : "idiom005", "horas_cursadas":90},
  {cod_idioma : "idiom004", "horas_cursadas":80}
]
}
])