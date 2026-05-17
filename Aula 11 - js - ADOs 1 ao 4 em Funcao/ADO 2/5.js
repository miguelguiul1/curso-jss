import prompt from 'prompt-sync'
let ler = prompt();

let v = Number(ler('Qual o valor da compra? '))
let p = Number(ler('Quer parcelar em quantas vezes? '))

let total = Parcela(v, p)

console.log(`Sua compra de R$ ${v.toFixed(1)} em ${p}x de R$ ${total.toFixed(1)} foi concluída`)

////////////////////
//ÁREA DAS FUNÇÕES//
////////////////////

function Parcela (a, b){
    let cal = a / b
    return cal
}
