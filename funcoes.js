function dizerOla(nome) {
  return `Olá, ${nome}!`;
}

function somar(x, y) {
  return x + y;
}

function dividir(x, y) {
  if (y == 0) {
    return 0;
  }

  return x / y;
}

module.exports = {
  dizerOla,
  somar,
  dividir
}