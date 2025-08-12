import { pessoas } from "./mock/pessoas";

const filtrarPorId = (id: number) =>
  pessoas.filter((pessoa) => pessoa.id === id);

console.log(filtrarPorId(1));
