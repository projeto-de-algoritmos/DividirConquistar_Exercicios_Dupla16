/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
    if (s.length < 2) {
        return s;
    }

    let inicio = 0;
    let tamanhoMax = 1;

    function expansao(esquerda, direita) {
        while (esquerda >= 0 && direita < s.length && s[esquerda] === s[direita]) {
            const tamanho = direita - esquerda + 1;
            if (tamanho > tamanhoMax) {
                tamanhoMax = tamanho;
                inicio = esquerda;
            }
            esquerda--;
            direita++;
        }
    }

    for (let i = 0; i < s.length; i++) {
        expansao(i, i);
        expansao(i, i + 1);
    }

    return s.substring(inicio, inicio + tamanhoMax);
};