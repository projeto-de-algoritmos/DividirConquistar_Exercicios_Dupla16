var kthSmallest = function (matrix, k) {
    const n = matrix.length;
    let baixo = matrix[0][0];
    let alto = matrix[n - 1][n - 1];

    while (baixo < alto) {
        const meio = Math.floor((baixo + alto) / 2);
        const count = menorIgual(matrix, meio);

        if (count < k) {
            baixo = meio + 1;
        } else {
            alto = meio;
        }
    }

    return baixo;
};

const menorIgual = (matrix, numero) => {
    const n = matrix.length;
    let count = 0;
    let linha = 0;
    let coluna = n - 1;

    while (linha < n && coluna >= 0) {
        if (matrix[linha][coluna] <= numero) {
            count += coluna + 1;
            linha++;
        } else {
            coluna--;
        }
    }

    return count;
};
