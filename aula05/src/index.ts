//FUNÇÕES,TIPOS DE FUNÇÃO E FUNÇÕES GENÉRICAS

//exemplo de função que retorna uma saudação para o nome fornecido
function saudacao(nome: string): string {
  return `Olá, ${nome}!`;
}

console.log(saudacao("Mundo"));

//exemplo de função que soma dois números e retorna o resultado
function somar(a: number, b: number): number {
  return a + b;
}

console.log(somar(5, 3));

//exemplo de função que apresenta o nome e a idade, onde a idade é opcional
function apresentar(nome: string, idade?: number): string {
  return idade ? `${nome}, ${idade} anos` : nome;
}

console.log(apresentar("Alice", 30));
console.log(apresentar("Bob"));

//exemplo de função que retorna uma saudação com um nome padrão se nenhum nome for fornecido
function cumprimentar(nome: string = "visitante"): string {
  return `Olá, ${nome}!`;
}

console.log(cumprimentar());
console.log(cumprimentar("Carlos"));

//Reduzir o array
//exemplo de uso do método reduce para somar os elementos de um array
//O método reduce recebe uma função de callback que recebe o acumulador e o valor atual,
//e um valor inicial para o acumulador
//Neste caso, estamos somando os números de um array e retornando o total
//O resultado é 6, que é a soma de 1 + 2 + 3
//O método reduce é útil para transformar um array em um único valor, como uma soma,
//um produto, ou até mesmo um objeto ou string
const numero = [1, 2, 3];
const soma = numero.reduce((acum, atual) => acum + atual, 0);
console.log(soma);
console.log(`Exemplo reduce:${numero}`);

//exemplo de função que soma uma quantidade variável de números usando rest parameters
function somarTudo(...numeros: number[]): number {
  return numeros.reduce((total, n) => total + n, 0);
}

console.log(somarTudo(1, 2, 3, 4, 5));
console.log(somarTudo(10, 20));

//exemplo de função que retorna o dobro de um número
function dobro(x: number): number {
  return x * 2;
}

console.log(dobro(4));

//exemplo de função que não retorna nada (void) e imprime uma mensagem no console
function mostrar(valor: number): void;
function mostrar(valor: string): void;
function mostrar(valor: any): void {
  console.log(valor);
}

mostrar("Oi");
mostrar(10);

//TIPOS DE FUNÇÃO

//Definindo um tipo para uma função que recebe dois números e retorna um número
type Operacao = (a: number, b: number) => number;

//exemplo de função atribuída a uma variável com o tipo definido
let multiplicar: Operacao = (x, y) => x * y;
console.log(multiplicar(3, 4)); // 12

//exemplo de função que recebe outra função como argumento
function executarOperacao(a: number, b: number, operacao: Operacao): number {
  return operacao(a, b);
}
console.log(executarOperacao(4, 5, multiplicar)); // 20

//exemplo de função anônima atribuída a uma variável
const dividir = function (a: number, b: number): number {
  return a / b;
};
console.log(dividir(20, 4)); // 5

//exemplo de função arrow atribuída a uma variável
const subtrair = (a: number, b: number): number => a - b;
console.log(dividir(10, 2)); // 5

//FUNÇÕES GENERICAS

//exemplo de função genérica que retorna o argumento fornecido
function echo<T>(arg: T): T {
  return arg;
}
console.log(echo<string>("Olá"));
console.log(echo<number>(123));

//exemplo de função genérica que concatena dois arrays do mesmo tipo
function concatArrays<T>(a: T[], b: T[]): T[] {
  return a.concat(b);
}
console.log(concatArrays<number>([1, 2], [3, 4]));
console.log(concatArrays<string>(["A", "B"], ["C", "D"]));

//exemplo de função genérica que troca os elementos de uma tupla
function swap<T, U>(tuple: [T, U]): [U, T] {
  return [tuple[1], tuple[0]];
}

console.log(swap<number, string>([1, "um"]));
console.log(swap<boolean, number>([true, 0]));
