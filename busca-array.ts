
import * as readlineSync from 'readline-sync';

const array: number[] = [2, 5, 1, 3, 4, 9, 7, 8, 10, 6];

console.log("Índices:");
for (let i = 0; i < array.length; i++) {
  console.log(i);
}

console.log("\nArray:");
for (let i = 0; i < array.length; i++) {
  console.log(array[i]);
}

const input: string = readlineSync.question('\nDigite o número que você deseja encontrar: ');
const numero: number = parseInt(input);

let encontrado = false;

for (let i = 0; i < array.length; i++) {
  if (array[i] === numero) {
    console.log(`\nO número ${numero} está localizado na posição: ${i}`);
    encontrado = true;
    break;
  }
}

if (!encontrado) {
  console.log(`\nO número ${numero} não foi encontrado!`);
}
