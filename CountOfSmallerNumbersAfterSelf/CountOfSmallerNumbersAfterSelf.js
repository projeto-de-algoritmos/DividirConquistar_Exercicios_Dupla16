var countSmaller = function (nums) {
    const resultado = [];
    const ordenados = [];

    for (let i = nums.length - 1; i >= 0; i--) {
        const num = nums[i];
        const indice = buscaBinaria(ordenados, num);
        resultado.unshift(indice);
        ordenados.splice(indice, 0, num);
    }

    return resultado;
};

function buscaBinaria(nums, numero) {
    let esq = 0;
    let dir = nums.length;

    while (esq < dir) {
        const mid = Math.floor((esq + dir) / 2);

        if (nums[mid] < numero) {
            esq = mid + 1;
        } else {
            dir = mid;
        }
    }

    return esq;
}
