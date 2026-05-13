import prompt from 'prompt-sync'
let ler = prompt();

console.log('PROGRAMA DO DOBRO');
console.log();

console.log('Informe um número!!!');
let num = Number(ler());

let dobro = num * 2;

console.log('O dobro de ' + num + ' é ' + dobro);

