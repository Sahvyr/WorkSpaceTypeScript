"use strict";
var NivelDeAcesso;
(function (NivelDeAcesso) {
    NivelDeAcesso[NivelDeAcesso["usuario"] = 1] = "usuario";
    NivelDeAcesso[NivelDeAcesso["moderador"] = 2] = "moderador";
    NivelDeAcesso[NivelDeAcesso["administrador"] = 3] = "administrador";
})(NivelDeAcesso || (NivelDeAcesso = {}));
function temPermissao(nivel) {
    return nivel >= NivelDeAcesso.moderador;
}
console.log(temPermissao(NivelDeAcesso.usuario)); // false
console.log(temPermissao(NivelDeAcesso.moderador)); // true
