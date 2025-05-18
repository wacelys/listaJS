const alunos = [ { nome: 'Ana', nota: 8 }, { nome: 'Carlos', nota: 5 }, { nome:
'João', nota: 7 } ];
const notaMaiorQueSete = alunos.filter((estudante) => estudante.nota >= 7);
const notaMenorQueSete = alunos.filter((estudante) => estudante.nota < 7);

console.log("Estudantes aprovados:", notaMaiorQueSete);
console.log("Estudantes reprovados:", notaMenorQueSete);