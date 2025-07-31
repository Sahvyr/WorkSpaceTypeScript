type Pessoa = {
  nome: string;
  dataNascimento: Date;
  endereco: string;
  foto: string;
  ensinoMedioConcluido: boolean;
  valeTransporte: boolean;
  passagemDiaria: number;
  salario: number;
  sexo: "masculino" | "feminino" | "Masculino" | "Feminino";
};

let pessoa: Pessoa[] = [
  {
    nome: "João",
    dataNascimento: new Date("2000-01-01"),
    endereco: "Rua A, 123",
    foto: "foto1.jpg",
    ensinoMedioConcluido: true,
    valeTransporte: true,
    passagemDiaria: 4.5,
    salario: 1500,
    sexo: "masculino",
  },
  {
    nome: "Maria",
    dataNascimento: new Date("1998-05-15"),
    endereco: "Avenida B, 456",
    foto: "foto2.jpg",
    ensinoMedioConcluido: true,
    valeTransporte: false,
    passagemDiaria: 0,
    salario: 2000,
    sexo: "Feminino",
  },
];

console.log(pessoa);
