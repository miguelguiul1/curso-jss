import prompt from 'prompt-sync'
let ler = prompt();

let v = Number(ler('Qual o valor da sua comora? '));
let d = Number(ler('De quanto é o cupom de desconto em R$? '))

let total = CalcularDesconto(v, d);
console.log(`Compra finalizada! O total é de R$ ${total.toFixed(1)}`);

////////////////////
//ÁREA DAS FUNÇÕES//
////////////////////

function CalcularDesconto(a, b){
    let desc = (a - b) ;
    return desc;
}
