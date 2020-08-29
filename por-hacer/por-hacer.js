/*MIS REQUIREDS */


/*REQUIREDS DE NODE*/


/*REQUIREDS EXTERNOS*/
const fs = require("fs");


//Termino de requires


let listadoPorHacer = [];

const guardarDB= () =>{
    let data = JSON.stringify(listadoPorHacer);//Convierte un objeto a un json

    fs.writeFile("db/data.json",data,err => {
        if (err) throw new Error("No se pudo grabar",err);
    })//Manda a escribir la data en el json 
} 

const cargarDB = () => {

    try{
        listadoPorHacer = require("../db/data.json");
    }catch(error){
        listadoPorHacer = [];
    }

}



//Funciones necesarias en el app directamente
const crear = (descripcion) => {

    cargarDB();

    let porHacer ={//Esto se guarda en el paquete jspn
        descripcion,
        completado: false
};

    listadoPorHacer.push(porHacer); //inyecta los datos de porHacer
                                    //en en el objeto de ListaPorHacer
    guardarDB();//Manda a llamar la promesa
    return porHacer; //retorna lo que se a guardado

}

const getListado = () => {
    cargarDB();
    return listadoPorHacer;
}

const actualizar = (descripcion,completado=true) => {
    cargarDB();
    
    let index = listadoPorHacer.findIndex(tarea => {
        return tarea.descripcion ===descripcion
    }) //Si no coincide la comparacion mandara un -1

    if(index >=0){
        listadoPorHacer[index].completado =  completado;
        guardarDB();
        return true;
    }else{
        return false;
    }

}

const borrar = (descripcion) => {
    cargarDB();
    
    let nuevoListado = listadoPorHacer.filter(
        tarea => 
        {
            return tarea.descripcion !== descripcion
        }
    );

    if (listadoPorHacer.length === nuevoListado.length){
        return false;
    }else{
        listadoPorHacer = nuevoListado;
        guardarDB()
        return true;
    }

}

module.exports = {
    crear,
    getListado,
    actualizar,
    borrar
}