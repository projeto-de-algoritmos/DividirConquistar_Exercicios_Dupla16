const buscaBinaria = (arr, sum, diff) => {
  let e1 = 0; // Início do intervalo para busca binária da "condição 2"
  let d1 = arr.length; // Fim do intervalo para busca binária da "condição 2"
  let e2 = 0; // Início do intervalo para busca binária do "j-ésimo" somatório
  let d2 = arr.length; // Fim do intervalo para busca binária do "j-ésimo" somatório
  
  while (e1 < d1 || e2 < d2) {
    // Encontra o índice que satisfaz a "condição 2"
    if (e1 < d1) {
      const meio = Math.floor((e1 + d1) / 2);
      if (arr[meio] <= sum + diff) {
        e1 = meio + 1; // Atualiza o início do intervalo de busca para a direita
      } else {
        d1 = meio; // Atualiza o fim do intervalo de busca para a esquerda
      }
    }  
    // Encontra o índice do "j-ésimo" somatório
    if (e2 < d2) {
      const meio = Math.floor((e2 + d2) / 2);
      if (arr[meio] <= sum) {
        e2 = meio + 1; // Atualiza o início do intervalo de busca para a direita
      } else {
        d2 = meio; // Atualiza o fim do intervalo de busca para a esquerda
      }
    }
  }
  return [e1, e2]; // Retorna os índices encontrados
}

var numberOfPairs = function(nums1, nums2, diff) {
  let pares = 0; // Contador de pares
  const past = []; // Array para armazenar os somatórios já encontrados
  
  for (let i = 0; i < nums1.length; i++) {
    const sum = nums1[i] - nums2[i]; // Calcula o somatório
    // Procura os índices necessários utilizando a função buscaBinaria
    const [cnt, pos] = buscaBinaria(past, sum, diff);
    pares += cnt; // Incrementa o contador de pares
    past.splice(pos, 0, sum); // Insere o valor do somatório na posição correta do array
  }
  return pares; // Retorna o número total de pares encontrados
};
