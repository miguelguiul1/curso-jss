/*06 | 
Implementar um programa em Java que calcule quantas paradas para abastecimento 
são necessárias para realizar uma viagem, a partir da capacidade do tanque de 
combustível (em litros), do consumo do veículo (km por litros) e da distância da 
viagem (km).
* Você deve partir do principio que o tanque está vazio.
* Os valores de entrada devem ser entendidos como inteiros.
* Não usar o Math.ceil(n).
* No caso da distância bater exatamente com a capacidade de viagem do veículo, considerar um 
abastecimento a mais.
Entrada
Saída
50
10
400
“Você precisará fazer 1 paradas para abastecer.”
50
10
700
“Você precisará fazer 2 paradas para abastecer.”
*/
import prompt from 'prompt-sync'
let ler = prompt();

console.log('PROGRAMA DE ABASTECIMENTO');
console.log('...');

console.log('Me informe a capacidade do tanque:');
let cap = Number(ler());

console.log('Me informe o consumo do veículo (km por litro):');
let cons = Number(ler());

console.log('Me informe a distância da viagem:');
let dist = Number(ler());

let km = cap * cons;

let paradas = parseInt(dist / km);

if (dist % km != 0) {
    paradas = paradas + 1;
}

console.log('Você precisará fazer ' + paradas + ' paradas para abastecer.');