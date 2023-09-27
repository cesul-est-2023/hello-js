const { dizerOla, somar, dividir } = require("../funcoes");

test("retorna corretamente mensagem de olá", () => {
  const mensagem = dizerOla('Joao');
  expect(mensagem).toBe("Olá, Joao!");
});

test("retorna 3 ao somar 1 e 2", () => {
  const result = somar(1, 2);
  expect(result).toBe(3);
});

test("retorna 0 ao tentar dividir por 0", () => {
  const result = dividir(3, 0);
  expect(result).toBe(0);
})

test("retorna 2 ao tentar dividir 4 por 2", () => {
  const result = dividir(4, 2);
  expect(result).toBe(2);
})