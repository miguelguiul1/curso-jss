import prompt from 'prompt-sync'
let ler = prompt();

console.log('-- PROGRAMA DA TABUADA --');

// COLETA DE DADOS
console.log('Informe um número:');
let n = Number(ler());

// PROCESSAMENTO e APRESENTAÇÃO
tabuada(n);




////////////////////
//Área das Funções//
////////////////////




function tabuada(numero) {
  for (let cont = 1; cont <= 10; cont++) {
    let mult = numero * cont;
    console.log(`${numero} x ${cont} = ${mult}`);
  }
}