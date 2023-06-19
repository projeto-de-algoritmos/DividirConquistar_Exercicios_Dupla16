# Number of pairs satisfying inequality

Você recebe duas listas de inteiros indexadas a partir de 0, nums1 e nums2, cada uma com tamanho n, e um inteiro diff. Encontre o número de pares (i, j) que satisfazem as seguintes condições:

0 <= i < j <= n - 1 e
nums1[i] - nums1[j] <= nums2[i] - nums2[j] + diff.

Retorne o número de pares que satisfazem essas condições.

Exemplo 1:

Entrada: nums1 = [3,2,5], nums2 = [2,2,1], diff = 1
Saída: 3
Explicação:
Existem 3 pares que satisfazem as condições:

i = 0, j = 1: 3 - 2 <= 2 - 2 + 1. Como i < j e 1 <= 1, esse par satisfaz as condições.
i = 0, j = 2: 3 - 5 <= 2 - 1 + 1. Como i < j e -2 <= 2, esse par satisfaz as condições.
i = 1, j = 2: 2 - 5 <= 2 - 1 + 1. Como i < j e -3 <= 2, esse par satisfaz as condições.
Portanto, retornamos 3.
Exemplo 2:

Entrada: nums1 = [3,-1], nums2 = [-2,2], diff = -1
Saída: 0
Explicação:
Não existe nenhum par que satisfaça as condições, portanto retornamos 0.

Restrições:

n == nums1.length == nums2.length
2 <= n <= 105
-104 <= nums1[i], nums2[i] <= 104
-104 <= diff <= 104
