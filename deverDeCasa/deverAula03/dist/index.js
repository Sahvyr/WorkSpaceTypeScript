"use strict";
var Status;
(function (Status) {
    Status[Status["emAndamento"] = 0] = "emAndamento";
    Status[Status["emAtraso"] = 1] = "emAtraso";
    Status[Status["criado"] = 2] = "criado";
    Status[Status["cancelado"] = 3] = "cancelado";
    Status[Status["finalizado"] = 4] = "finalizado";
})(Status || (Status = {}));
function pegarStatus(status) {
    switch (status) {
        case 0:
        case Status.emAtraso:
        case Status.criado:
            return "Estamos avaliando o seu pedido";
        case Status.cancelado:
            return "Seu pedido foi cancelado. Ligue para XXXXX";
        case Status.finalizado:
            return "Seu pedido foi finalizado na data XX/XXX";
        default:
            return "Status desconhecido";
    }
}
console.log(pegarStatus(4));
