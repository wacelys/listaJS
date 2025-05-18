const numeros = [3, 8, 12, 5, 7, 10, 15, 20];

function numerosPorDois(numeros){
    return numeros.filter (numero => numero % 2 === 0).map (numero => numero * 2);
}

console.log(numerosPorDois(numeros));