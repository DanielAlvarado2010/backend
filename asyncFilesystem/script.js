const fs = require('fs/promises');
const path = require('path/posix');

const encoding = 'utf8';

async function crearArchivo(nombre, contenido) {

    await fs.writeFile(nombre, contenido, encoding, (error) => {
        if (error) { 
            console.error(error)
        } else {
            console.log('Se creo el archivo correctamente');
        }
    });
}
 
// crearArchivo('ejercicio.txt', 'Se creó el archivo');

async function leer(archivo) {
   
    await fs.readFile(archivo, 'utf-8', (err, data) => {
        if(err){
            console.log('error al leer el archivo')
        }else{
            console.log(data)
        }
    })
}

async function editar(archivo, nuevoContenido) {
   
    await fs.appendFile(archivo, nuevoContenido, (err) => {
        if(err){
            console.log('error al editor el archivo')
        }else{
            console.log(`${nuevoContenido} ha sido agregado a ${archivo}`)
        }
} )
}

async function borrar(archivo) {
    
    await  fs.unlink(archivo, (err) =>{
        if(err){
            console.log('error al eliminar el archivo')
        }else{
            console.log('el archivo ha sido eliminado')
        }
    })
}

async function crearDirectorio(archivo) {
    await fs.mkdir(archivo, (err) => {
        if(err) 
            console.log(err.message)
        else
            console.log(`${archivo} creado correctamente`)
    })
}

async function eliminarDirectorio(archivo) {
    await fs.rmdir(archivo, (err) =>{
        if(err)
        console.log(err.message)
        else
        console.log(`${archivo} eliminado correctamente`)
    })  
}

async function leerDirectorio(archivo) {
    await fs.readdir(archivo, (err, files) => {
        if (err) {
            console.log(err.message);
        }else {
            console.log(files);
        }
    })
}