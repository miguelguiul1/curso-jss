import prompt from 'prompt-sync'
let ler = prompt();

// COLETA DE DADOS
let temp = Number(ler('Qual sua temperatura? '));

// PROCESSAMENTO e APRESENTAÇÃO
let febre = SaberFebre(temp);
console.log(`Você está com febre? ${febre}`);


////////////////////
//Área das Funções//
////////////////////

function SaberFebre(temperatura){
  if(temperatura >= 37.5){
    return true
  }
  else{
    return false
  }
}
