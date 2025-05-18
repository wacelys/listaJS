function quadradoDosMaioresQueDez(numeros) {
  return numeros
    .filter(n => n > 10).map(n => n * n);
}
const numeros = [3, 8, 12, 5, 7, 10, 15, 20];

console.log(quadradoDosMaioresQueDez(numeros));