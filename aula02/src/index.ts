enum NivelDeAcesso {
  usuario = 1,
  moderador = 2,
  administrador = 3,
}

function temPermissao(nivel: NivelDeAcesso): boolean {
  return nivel >= NivelDeAcesso.moderador;
}

console.log(`O usuario tem permissão? ${temPermissao(NivelDeAcesso.usuario)}`); // false
console.log(temPermissao(NivelDeAcesso.moderador)); // true
