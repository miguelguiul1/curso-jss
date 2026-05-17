import prompt from 'prompt-sync'
let ler = prompt();

let p = Number(ler('Quantos KILOS quer converter para GRAMAS? '))

let gramas = ConverterKgG(p)
console.log(gramas.toFixed(1))

////////////////////
//ÁREA DAS FUNÇÕES//
////////////////////

function ConverterKgG (a){
    let g = a * 1000
    return g
}
