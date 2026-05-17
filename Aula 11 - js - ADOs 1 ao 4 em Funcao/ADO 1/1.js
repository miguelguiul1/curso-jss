import prompt from 'prompt-sync'
let ler = prompt();

console.log('SOMA\n');

let n1 = Number(ler('Primeiro número: '));
let n2 = Number(ler('Segundo número: '));

let r = SOMA(n1, n2);

console.log(`A soma de ${n1} + ${n2} é ${r}`);


////////////////////
//ÁREA DAS FUNÇÕES//
////////////////////
function SOMA(a, b) {
    let s = a + b;
    return s;
}