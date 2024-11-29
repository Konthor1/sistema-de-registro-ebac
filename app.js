console.log("Sistema EBAC de Registro de Alumnos");

var registro = [ 
    {nombre: "Salvador mora", edad: "30", zonaResidencia: "CDMX", nombrePrograma: "Desarrollador Front End de Cero a pro", email: "salvadormora@ebac.mx"},
    {nombre: "Maria Hubert", edad: "34", zonaResidencia: "Edo mex", nombrePrograma: "Desarrollador Back end con Python", email: "mariaH@ebac.mx"},
    {nombre: "Santiago Torres", edad: "20", zonaResidencia: "CDMX", nombrePrograma: "Desarrollador Full Stack Python", email: "SantiagoT@ebac.mx"},
    {nombre: "Carlos Sosa", edad: "25", zonaResidencia: "Jalisco", nombrePrograma: "Desarrollador Full Srack Java", email: "CarlosSosa@ebac.mx"},
    {nombre: "Mario martinez", edad: "24", zonaResidencia: "Tabasco", nombrePrograma: "SQL para análisis de datos", email: "MarioM@ebac.mx"},
];

function AgregarAlumno(){
var nombre = prompt("ingresa el nombre del nuevo alumno");
var zonaResidencia = prompt("ingresa la zona de residencia del alumno");
var edad = prompt("ingresa al edad del alumno");
var nombrePrograma = prompt("ingresa el nombre del programa a estudiar alumno");
var email = prompt("ingresa el correo email del alumno");

var nuevoAlumno = {nombre: nombre, edad: edad, zonaResidencia: zonaResidencia, nombrePrograma: nombrePrograma, email:email};

registro.push(nuevoAlumno)

}
function consultarRegistros(){
    for (var i = 0; i < registro.length; i++){
        console.log("Nombre: " + registro[i].nombre);
        console.log("Edad: " + registro[i].edad);
        console.log("Zona de residencia: " + registro[i].zonaResidencia);
        console.log("Nombre del programa: " + registro[i].nombrePrograma);
        console.log("Email: " + registro[i].email);
    };
}


do{

var opcion = prompt ("seleccione una opcion: \n1. Agregar registro \n2. Consultar registro de alumnos \n3.Eliminar registo \n4. Salir");

if (opcion === "1"){
    AgregarAlumno();
} else if(opcion === "2"){
    consultarRegistros();
} else if(opcion === "3"){
    alert("Eliminar el registro de alumno");
} else if("salida"){
    alert("Salir del sistema");
} else {
    alert("Opción inválida, elige otra");
}

var continuar = prompt("¿Deseas hacer otra acción? (S/N)");

} while (continuar === "s" );

