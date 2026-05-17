import prompt from 'prompt-sync'
let ler = prompt();

console.log('ÁREA - RETÂNGULO\n')

let n1 = Number(ler('BASE: '));
let n2 = Number(ler('ALTURA: '));

let r = area(n1, n2);

console.log(`A área do retanângulo (${n1} por ${n2}) é ${r}`);


////////////////////
//ÁREA DAS FUNÇÕES//
////////////////////

function area(b, c){
    let a = b * c;
    return a;
}
