"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const readline_sync_1 = __importDefault(require("readline-sync"));
const numbersSet = new Set([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
console.log('Conjunto (Set) inicial:');
numbersSet.forEach(num => console.log(num));
const numbersArray = [2, 5, 1, 3, 4, 9, 7, 8, 10, 6];
console.log('\nList');
numbersArray.forEach(num => console.log(num));
const inputNumber = readline_sync_1.default.questionInt('\nDigite o número que você deseja encontrar: ');
if (numbersSet.has(inputNumber)) {
    console.log(`\nO número ${inputNumber} foi encontrado!`);
}
else {
    console.log(`\nO número ${inputNumber} não foi encontrado!`);
}
