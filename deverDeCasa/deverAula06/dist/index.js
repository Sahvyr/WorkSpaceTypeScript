"use strict";
let numeros = [1, 2, 3, 4];
let nomes = ["Ana", "João", "Maria"];
nomes.forEach((nome) => {
    console.log("Olá, " + nome);
});
let maiores = numeros.filter((n) => n > 2);
console.log(`os maiores valores do filter foram ${maiores}`); // [3, 4]
let dobrados = numeros.map((n) => n * 2);
console.log(`Novo array com os valores da variavel numeros só que dobrados:${dobrados}`); // [2, 4, 6, 8]
let pessoas = [
    { nome: "Carlos", idade: 30 },
    { nome: "Ana", idade: 25 },
];
console.log(`A primeira pessoa é ${pessoas[0].nome} e ela tem ${pessoas[0].idade} anos`); // A primeira pessoa é Carlos e ela tem 30 anos
