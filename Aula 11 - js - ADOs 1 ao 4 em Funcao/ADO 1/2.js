import prompt from 'prompt-sync'
let ler = prompt();

console.log('DOBRO\n');

let n1 = Number(ler('Digite um número: '));

let r = dobro(n1);

console.log(`O dobro de ${n1} é ${r}`);


////////////////////
//ÁREA DAS FUNÇÕES//
////////////////////
function dobro(a) {
    let s = a * 2;
    return s;
}


