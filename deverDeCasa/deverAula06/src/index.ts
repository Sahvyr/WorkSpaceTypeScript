let numeros: number[] = [1, 2, 3, 4];
let nomes: string[] = ["Ana", "João", "Maria"];

nomes.forEach((nome) => {
  console.log("Olá, " + nome);
});

let maiores: number[] = numeros.filter((n) => n > 2);
console.log(`os maiores valores do filter foram ${maiores}`); // [3, 4]

let dobrados: number[] = numeros.map((n) => n * 2);
console.log(
  `Novo array com os valores da variavel numeros só que dobrados:${dobrados}`
); // [2, 4, 6, 8]

type Pessoa = {
  nome: string;
  idade: number;
};

let pessoas: Pessoa[] = [
  { nome: "Carlos", idade: 30 },
  { nome: "Ana", idade: 25 },
];

console.log(
  `A primeira pessoa é ${pessoas[0].nome} e ela tem ${pessoas[0].idade} anos`
); // A primeira pessoa é Carlos e ela tem 30 anos

