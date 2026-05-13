import prompt from 'prompt-sync'
let ler = prompt();
let int = prompt();

console.log('Olá! Sejá Bem - Vindo!!!');

console.log('Qual seu nome?');
let nome = ler();

console.log('Quantos anos você tem?');
let idade = int();

console.log('Seu nome é ' + nome + ' e você tem ' + idade + ' anos.');
