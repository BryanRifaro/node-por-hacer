/*MIS REQUIREDS */


/*REQUIREDS DE NODE*/
const descripcionIguales = {
    demand : true,
    alias: "d",
    desc: "Descripcion de la tarea por hacer"
};

const completado = {
    default: true,
    alias: "c",
    desc:"Marca como completado o pendiente la tarea"
};



const argv = require("yargs")
    .command(
        "Crear", //Comando
        "Crear un elemnto por hacer",    
        {descripcion:descripcionIguales})
    .command(
        "Actualizar",
        "Actualiza el estado de una tarea",
        {descripcion:descripcionIguales,
        completado:completado
        })
    .command(
            "Borrar",
            "Borra una tarea",
            {
                descripcion:descripcionIguales
            }
        )
        .help()
        .argv

/*REQUIREDS EXTERNOS*/



//Termino de requires




module.exports = {

    argv

}