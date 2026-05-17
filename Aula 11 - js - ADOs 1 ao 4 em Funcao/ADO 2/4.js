import prompt from 'prompt-sync'
let ler = prompt();

let dol = Number(ler('Qantos dolares quer converter?  '))

let dolar = ConverterDol(dol)
console.log(dolar)

////////////////////
//ÁREA DAS FUNÇÕES//
////////////////////

function ConverterDol (a){
    let convertido = a / 5.16
    return convertido
}
