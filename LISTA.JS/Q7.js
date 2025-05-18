function somaArray(number) {
  return number.reduce((acumulador, valorAtual) => acumulador + valorAtual, 0);
}

const array = [1, 2, 3, 4, 5];
const resultado = somaArray(array);
console.log(resultado);