/*MIS REQUIREDS */
const argv = require("./config/yargs").argv;
const porHacer = require("./por-hacer/por-hacer");

/*REQUIREDS DE NODE*/


/*REQUIREDS EXTERNOS*/
const colors = require("colors");


//Termino de requires


let comando = argv._[0];


switch(comando){
    case "Crear":
    let tarea = porHacer.crear(argv.d);
    console.log(tarea);
    break;
    case "Listar":
     let listado = porHacer.getListado();
     for(let tarea of listado){
         console.log("================".green);
         console.log(`=====${tarea.descripcion}=====`);
         console.log(`=====${tarea.completado}=====`);
         console.log("=================".green);
     }
    break;
    case "Actualizar":
    let actualizado = porHacer.actualizar(argv.d,argv.c);
    console.log(actualizado);
    break;
    case "Borrar":
    let borrado = porHacer.borrar(argv.d);
    console.log(borrado);
    break;
    default: console.log("Comando no reconocido");
}