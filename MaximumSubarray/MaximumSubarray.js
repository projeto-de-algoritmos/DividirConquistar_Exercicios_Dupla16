var maxSubArray = function(nums) {
  // Função auxiliar para encontrar a maior soma atravessando o meio do array
  const maxSomaCruzada = (nums, esquerda, meio, direita) => {
    let somaEsquerda = -Infinity;
    let soma = 0;
    for (let i = meio; i >= esquerda; i--) {
      soma += nums[i];
      if (soma > somaEsquerda) {
        somaEsquerda = soma;
      }
    }
    let somaDireita = -Infinity;
    soma = 0;
    for (let i = meio + 1; i <= direita; i++) {
      soma += nums[i];
      if (soma > somaDireita) {
        somaDireita = soma;
      }
    }
    return somaEsquerda + somaDireita;
  };
  // Função principal de divisão e conquista
  const maxSubArrayDivisaoConquista = (nums, esquerda, direita) => {
    // Caso base: se o subarray possui apenas um elemento, retorna esse elemento
    if (esquerda === direita) {
      return nums[esquerda];
    }
    const meio = Math.floor((esquerda + direita) / 2);
    // Encontra a maior soma do subarray atravessando o meio do array
    const somaCruzada = maxSomaCruzada(nums, esquerda, meio, direita);
    // Encontra a maior soma recursivamente nos subarrays da esquerda e direita
    const somaEsquerda = maxSubArrayDivisaoConquista(nums, esquerda, meio);
    const somaDireita = maxSubArrayDivisaoConquista(nums, meio + 1, direita);
    // Retorna o máximo entre a maior soma atravessando o meio, a maior soma na metade esquerda e a maior soma na metade direita
    return Math.max(somaCruzada, somaEsquerda, somaDireita);
  };
  // Chamada inicial para a função de divisão e conquista
  return maxSubArrayDivisaoConquista(nums, 0, nums.length - 1);
};
