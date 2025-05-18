const frutas = ['maçã', 'laranja', 'banana']
function ordenarFrutas(lista){
    return lista.sort((a,b)=>{
        if (a < b) return -1;
        if (a > b) return 1;
        return 0;
    });
}
console.log (ordenarFrutas(frutas))