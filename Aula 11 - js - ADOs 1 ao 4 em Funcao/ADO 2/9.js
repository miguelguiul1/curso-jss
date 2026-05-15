import prompt from 'prompt-sync'
let ler = prompt();

// COLETA DE DADOS
let p = Number(ler('Quantos açais pequeno você quer? '));
let m = Number(ler('Quantos açais médio você quer? '));
let g = Number(ler('Quantos açais grande você quer? '));
let d = Number(ler('Qual cupom de desconto por %? '));

// PROCESSAMENTO e APRESENTAÇÃO
let total = PrecoAcai(p, m, g, d);
console.log(`Total à pagar é R$ ${total.toFixed(1)}`);


////////////////////
//Área das Funções//
////////////////////

function PrecoAcai(pequeno, médio, grande, cupom) {
  let preço = (pequeno * 13.50) + (médio * 15.00) + (grande * 17.50);
  let desconto = preço * (cupom / 100);
  let total = preço - desconto;
  return total
}