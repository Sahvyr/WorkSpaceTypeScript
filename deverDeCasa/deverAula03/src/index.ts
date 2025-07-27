enum Status {
  emAndamento,
  emAtraso,
  criado,
  cancelado,
  finalizado,
}

function pegarStatus(status: Status): string {
  switch (status) {
    case Status.emAndamento:
    case Status.emAtraso:
    case Status.criado:
      return "Estamos avaliando o seu pedido";
    case Status.cancelado:
      return "Seu pedido foi cancelado. Ligue para XXXXX";

    case Status.finalizado:
      return "Seu pedido foi finalizado na data XX/XXXX";

    default:
      return "Status desconhecido";
  }
}

console.log(pegarStatus(Status.cancelado));
