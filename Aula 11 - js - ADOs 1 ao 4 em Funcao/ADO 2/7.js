import prompt from 'prompt-sync'
let ler = prompt();

// COLETA DE DADOS
let q = Number(ler('Quantos açais você quer? '));
let p = 13.5

// PROCESSAMENTO e APRESENTAÇÃO
let total = PrecoAcai(q, p);
console.log(`Total à pagar é R$ ${total.toFixed(1)}`);


////////////////////
//Área das Funções//
////////////////////

function PrecoAcai(quantidade, preço) {
  let total = quantidade * preço
  return total
}