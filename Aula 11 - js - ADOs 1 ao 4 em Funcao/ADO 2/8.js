import prompt from 'prompt-sync'
let ler = prompt();

// COLETA DE DADOS
let p = Number(ler('Quantos açais pequeno você quer? '));
let m = Number(ler('Quantos açais médio você quer? '));
let g = Number(ler('Quantos açais grande você quer? '));

// PROCESSAMENTO e APRESENTAÇÃO
let total = PrecoAcai(p, m, g,);
console.log(`Total à pagar é R$ ${total.toFixed(1)}`);


////////////////////
//Área das Funções//
////////////////////

function PrecoAcai(pequeno, médio, grande) {
  let total = (pequeno * 13.50) + (médio * 15.00) + (grande * 17.50);
  return total
}