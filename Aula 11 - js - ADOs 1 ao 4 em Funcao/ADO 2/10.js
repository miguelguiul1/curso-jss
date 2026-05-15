import prompt from 'prompt-sync'
let ler = prompt();

// COLETA DE DADOS
let sal = Number(ler('Qual seu salário? '));
let bon = Number(ler('Quanto de bônus você recebeu(em %)? '));
let des = Number(ler('Qual o valor do desconto do seu salário(em R$)? '));

// PROCESSAMENTO e APRESENTAÇÃO
let total = SalárioLiquido(sal, bon, des);
console.log(`Total à pagar é R$ ${total.toFixed(1)}`);


////////////////////
//Área das Funções//
////////////////////

function SalárioLiquido(salário, bônus, desconto) {
  let ValorBônus = salário * (bônus / 100);
  let SalárioBônus = ValorBônus + salário;
  let total = SalárioBônus - desconto;
  return total
}