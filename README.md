# Github de **ANTONIO ÁVILA DELGADO** (1º ASIR)
En este proyecto  tenemos 2 colecciones, una de cursos de idiomas y otra de alumnos, que usaremos simultáneamente gracias a **$LOOKUP**.
Vamos a explorar 2 situaciones:
* Situación 1:N, en la que un alumno solo puede asistir a un curso de idiomas, pero en cada  curso de idiomas hay muchos alumnos.
* Situación N:M, en la que un alumno puede asistir a varios cursos de idiomas, y en cada curso puede haber muchos alumnos.
Los campos son variados: numéricos (incluyendo decimales), cadenas de caracteres, booleanos, tipo fecha, etc. 
Después  haremos distintas operaciones de búsqueda/consultas sobre  dichos datos.
Usaremos **aggregate** y **$lookup** junto con **$group**, **$match**, **$project**, **$multiply**, **$sort** y operadores de fechas.