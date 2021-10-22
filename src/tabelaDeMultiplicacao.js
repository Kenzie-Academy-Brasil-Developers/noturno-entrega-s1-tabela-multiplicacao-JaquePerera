
function tabelaMult(n) { 
    // Substitua "nomeDaSuaFuncao" por um nome mais apropriado
    var x = new Array(n);
    x = [];
    let multiplicador = ''
    // todo: escrever dois loops aninhados para desenhar o array bidimensional e monstar o restante da tabela no console.
    for (let linha = 0; linha <= n; linha++) {
        let count =0
        x[linha] = new Array(n);
        for(let coluna =0; coluna <= n; coluna++){
            x[linha][coluna]= linha * count
            count +=1
        }
    }
    console.table(x)
}
console.log(tabelaMult(12))
