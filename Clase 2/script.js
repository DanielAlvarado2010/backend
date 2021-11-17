// Descomposición del método filter par arreglos.
const arreglo1 = [1,2,3,4,5];

function filter (array, callback) {
    let resultado =[];
    for (i=0;i<array.length;i++){
        if(callback(array[i]) ===true){
            resultado.push(array[i])
        }
    }

    return resultado;
}

const resultado1 = filter(arreglo1, x => x % 2 ==0)
console.log(resultado1)