function somarIdade(idade){
    if (idade < 18){
        return "Menor de idade";
    }
    else if (idade >= 18){
        return "Maior de idade";
    }
}

console.log(somarIdade(15));
console.log(somarIdade(18));