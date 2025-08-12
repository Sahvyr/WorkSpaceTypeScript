type historicoCargosESalarios = {
  cargo: string;
  salario: number;
  dataInicio: string;
  dataFim: string | null;
};

type Pessoa = {
  id: number;
  nome: string;
  sobrenome: string;
  dtNascimento: string;
  sexo: "Masculino" | "Feminino";
  grauEscolaridade: string;
  endereco: string;
  foto: string;
  optouVT: boolean;
  salarioAtual: number;
  valorPassagem: number;
  historicoCargosESalarios: historicoCargosESalarios[];
};
