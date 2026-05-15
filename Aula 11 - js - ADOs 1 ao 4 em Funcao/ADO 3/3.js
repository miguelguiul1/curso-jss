import prompt from 'prompt-sync'
let ler = prompt();

// COLETA DE DADOS
let b1 = Number(ler('Comprimento da base1: '));
let a1 = Number(ler('Comprimento da altura1: '));

let b2 = Number(ler('Comprimento da base2: '));
let a2 = Number(ler('Comprimento da altura2: '));

// PROCESSAMENTO e APRESENTAÇÃO
let area1 = Área(b1, a1);
let area2 = Área(b2, a2);
let final = MesmaÁrea(area1, area2);

console.log(`O primeiro retângulo possui área ${area1}`);
console.log(`O segundo retângulo possui área ${area2}`);
console.log(`Eles são iguais? ${final}`);

////////////////////
//Área das Funções//
////////////////////

function Área(base, altura){
  let área = base * altura;
  return área
}
function MesmaÁrea(área1, área2){
  if(área1 === área2){
    return true
  }
  else{
    return false
  }
}
