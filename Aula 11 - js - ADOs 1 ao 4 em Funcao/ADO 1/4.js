import prompt from 'prompt-sync'
let ler = prompt();

console.log('METADE\n')

let n1 = Number(ler('Número: '));

let r = metade(n1);

console.log(`Metade de ${n1} é ${r}`);


////////////////////
//ÁREA DAS FUNÇÕES//
////////////////////

function metade(a){
    let m = a / 2;
    return m;
}

