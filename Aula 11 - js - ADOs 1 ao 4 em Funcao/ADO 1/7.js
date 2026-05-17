import prompt from 'prompt-sync'
let ler = prompt();

console.log('ÁREA - TRIÂNGULO\n')

let n1 = Number(ler('BASE: '));
let n2 = Number(ler('ALTURA: '));

let r = area(n1, n2);

console.log(`A área do triângulo é ${r.toFixed(1)}`);


////////////////////
//ÁREA DAS FUNÇÕES//
////////////////////

function area(b, c){
    let a = b * c / 2;
    return a;
}
