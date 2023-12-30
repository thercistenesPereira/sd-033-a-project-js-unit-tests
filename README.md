# Desenvolvimento Orientado a Testes (TDD) com Assert no Node.js
Neste projeto, adotaremos uma abordagem de Desenvolvimento Orientado a Testes (TDD) utilizando o módulo Assert do Node.js. O objetivo é escrever testes unitários para funções específicas e, em seguida, implementar as funções para garantir que elas atendam aos requisitos dos testes.

## Lista de funções

### 1. Função `average`
A função average foi projetada para operar sobre um array de valores de tamanho variável, calculando e retornando a média aritmética desses valores. Se a função receber algum valor que não seja do tipo numérico ou se o array estiver vazio, o retorno será indefinido (undefined). Todos os resultados produzidos pela função serão arredondados para o valor inteiro mais próximo. Em resumo, a função busca fornecer uma maneira robusta e eficiente de calcular a média de um conjunto de valores, lidando adequadamente com casos de entrada inválida ou vazia.

### 2. Função `numbers`
A função numbers opera em um array de tamanho variável, e sua finalidade é retornar true se todos os elementos nesse array forem do tipo 'number' e false caso contrário. A implementação atual dessa função pode ser encontrada no arquivo src/numbers.js.

### 3. Função `vqv`
A função que aceita como entrada o seu nome e idade, retornando um parágrafo.

### 4. Função `circle`
A função circle aceita o raio de um círculo como parâmetro e devolve um objeto que inclui detalhes sobre o círculo, tais como Raio, Área e Circunferência. Caso nenhum raio seja especificado, a função retorna undefined.

### 5. Função `createStudent`
A função createStudent aceita um nome como parâmetro e produz um objeto que possui duas propriedades:

`name`: Armazena o nome fornecido como parâmetro.
`feedback`: Contém uma função que, quando invocada, retorna a expressão 'Eita pessoa boa!'.
