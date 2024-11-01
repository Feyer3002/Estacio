function primo(num){
    if (num<=1) return 'Não é primo.';
    for(let i = 2; i<=Math.sqrt(num);i++){
        if(num % i === 0) return 'Não é primo.';
    }
    return 'O numero é primo';
}
 
console.log(primo(3))


