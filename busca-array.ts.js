"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readlineSync = require("readline-sync");
var array = [2, 5, 1, 3, 4, 9, 7, 8, 10, 6];
console.log("Índices:");
for (var i = 0; i < array.length; i++) {
    console.log(i);
}
console.log("\nArray:");
for (var i = 0; i < array.length; i++) {
    console.log(array[i]);
}
var input = readlineSync.question('\nDigite o número que você deseja encontrar: ');
var numero = parseInt(input);
var encontrado = false;
for (var i = 0; i < array.length; i++) {
    if (array[i] === numero) {
        console.log("\nO n\u00FAmero ".concat(numero, " est\u00E1 localizado na posi\u00E7\u00E3o: ").concat(i));
        encontrado = true;
        break;
    }
}
if (!encontrado) {
    console.log("\nO n\u00FAmero ".concat(numero, " n\u00E3o foi encontrado!"));
}
