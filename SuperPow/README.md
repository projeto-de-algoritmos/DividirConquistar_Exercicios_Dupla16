# Super Pow
Sua tarefa é calcular ab mod 1337, onde a é um inteiro positivo e b é um inteiro positivo extremamente grande dado na forma de um array. <br>

Exemplo 1: <br>

Entrada: a = 2, b = [3] <br>
Saída: 8 <br>
Explicação: 2^3 mod 1337 = 8 <br>

Exemplo 2: 

Entrada: a = 2, b = [1,0] <br>
Saída: 1024 <br>
Explicação: 2^10 mod 1337 = 1024 <br>

Exemplo 3:

Entrada: a = 1, b = [4,3,3,8,5,2] <br>
Saída: 1 <br>
Explicação: 1^433852 mod 1337 = 1 <br>

Restrições:

1 <= a <= 2^31 - 1 <br>
1 <= b.length <= 2000 <br>
0 <= b[i] <= 9 <br>
O array b não contém zeros à esquerda.
