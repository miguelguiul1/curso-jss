import prompt from 'prompt-sync'
let ler = prompt();

console.log('ÁREA - QUADRADO\n')

let n1 = Number(ler('Lado: '));

let r = area(n1);

console.log(`A área do quadrado é ${r}`);


////////////////////
//ÁREA DAS FUNÇÕES//
////////////////////

function area(b){
    let a = b * b;
    return a;
}
