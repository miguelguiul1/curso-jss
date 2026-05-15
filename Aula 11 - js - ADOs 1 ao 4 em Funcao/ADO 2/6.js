import prompt from 'prompt-sync'
let ler = prompt();

// COLETA DE DADOS
let cap = Number(ler('Capacidade do tanque de combustível (em litros): '));
let con = Number(ler('Autonomia do veículo (km por litro): '));
let dis = Number(ler('Distância a ser percorrida (em km): '));

// PROCESSAMENTO e APRESENTAÇÃO





////////////////////
//Área das Funções//
////////////////////




function tabuada(numero) {
  for (let cont = 1; cont <= 10; cont++) {
    let mult = numero * cont;
    console.log(`${numero} x ${cont} = ${mult}`);
  }
}