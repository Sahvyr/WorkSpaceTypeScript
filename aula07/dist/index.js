"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pessoas_1 = require("./mock/pessoas");
const filtrarPorId = (id) => pessoas_1.pessoas.filter((pessoa) => pessoa.id === id);
console.log(filtrarPorId(1));
