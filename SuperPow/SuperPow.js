var superPow = function(base, expoente) {
  // Caso base: se o expoente for um array vazio, retorne 1
  if (expoente.length === 0) {
    return 1;
  }

  // Obtém o último dígito do expoente
  const ultimoDigito = expoente.pop();

  // Calcula a primeira parte: (base^ultimoDigito) % 1337
  const parte1 = powMod(base, ultimoDigito);

  // Calcula a segunda parte: (superPow(base, expoente)^10) % 1337
  const parte2 = powMod(superPow(base, expoente), 10);

  // Retorna o resultado final: (parte1 * parte2) % 1337
  return (parte1 * parte2) % 1337;
};

// Função auxiliar para calcular (base^expoente) % 1337
function powMod(base, expoente) {
  base %= 1337;
  let resultado = 1;
  for (let i = 0; i < expoente; i++) {
    resultado = (resultado * base) % 1337;
  }
  return resultado;
}
