function substLin(matriz, numLin){
    if(numLin >= 0 && numLin<matriz.length){
        matriz[numLin] = matriz[numLin].map(() => 0);
    }
    else{
        console.log ("Numero da linha invalido");
    }
    return matriz;
}
     const matriz = [
        [1,2,3],
        [4,5,6],
        [7,8,9]
    ];
    const novaMatriz=substLin(matriz,1);
    console.table(novaMatriz);

