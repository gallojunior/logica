// js/python/arrays.js

// ========== DADOS DOS EXERCÍCIOS DE VETORES E MATRIZES EM PYTHON ==========
const vetoresMatrizesExercises = [
  // NÍVEL 1 - VETORES BÁSICOS (exercícios 1-4)
  {
    id: 1,
    nivel: 1,
    title: "Soma de Elementos",
    statement: "Escreva um algoritmo que leia 5 números inteiros, armazene em uma lista e calcule a soma de todos os elementos.",
    input: "5 números: 10, 20, 30, 40, 50",
    output: "Soma = 150",
    code: `# Soma de elementos de uma lista
numeros = []
soma = 0

for i in range(5):
    valor = int(input(f"Digite o {i + 1}º número: "))
    numeros.append(valor)
    soma += valor

print(f"A soma dos elementos é: {soma}")`,
    testCases: [
      { values: { numeros: [10, 20, 30, 40, 50] }, result: 150, stepByStep: "soma = 0+10=10; +20=30; +30=60; +40=100; +50=150" }
    ],
    explanation: "Declaramos uma lista vazia. Usamos um laço 'for' para ler 5 valores, adicioná-los à lista e acumular a soma. Ao final, exibimos o resultado."
  },
  {
    id: 2,
    nivel: 1,
    title: "Média das Notas",
    statement: "Crie um programa que leia as notas de 10 alunos, armazene em uma lista e calcule a média da turma.",
    input: "10 notas: 7.5, 8.0, 6.5, 9.0, 7.0, 8.5, 6.0, 9.5, 8.0, 7.0",
    output: "Média = 7.7",
    code: `# Média das notas
notas = []
soma = 0

for i in range(10):
    nota = float(input(f"Digite a nota do {i + 1}º aluno: "))
    notas.append(nota)
    soma += nota

media = soma / 10
print(f"A média da turma é: {media:.2f}")`,
    testCases: [
      { values: { notas: [7.5, 8.0, 6.5, 9.0, 7.0, 8.5, 6.0, 9.5, 8.0, 7.0] }, result: 7.7, stepByStep: "soma = 77.0; média = 77.0 / 10 = 7.7" }
    ],
    explanation: "Criamos uma lista para armazenar as 10 notas. Após preencher, calculamos a soma e depois a média dividindo pelo número de alunos."
  },
  {
    id: 3,
    nivel: 1,
    title: "Maior Valor",
    statement: "Desenvolva um algoritmo que encontre e mostre o maior valor em uma lista de 8 números reais.",
    input: "8 números: 15, 42, 8, 23, 56, 31, 19, 47",
    output: "Maior valor = 56",
    code: `# Encontrar o maior valor
numeros = []

for i in range(8):
    valor = float(input(f"Digite o {i + 1}º número: "))
    numeros.append(valor)

maior = numeros[0]

for valor in numeros[1:]:
    if valor > maior:
        maior = valor

print(f"O maior valor é: {maior}")`,
    testCases: [
      { values: { numeros: [15, 42, 8, 23, 56, 31, 19, 47] }, result: 56, stepByStep: "maior = 15; 42 > 15 → maior=42; 8 não; 23 não; 56 > 42 → maior=56; 31,19,47 não" }
    ],
    explanation: "Inicializamos a variável 'maior' com o primeiro elemento da lista. Depois, percorremos os demais elementos comparando se cada um é maior que o valor atual. Se for, atualizamos."
  },
  {
    id: 4,
    nivel: 1,
    title: "Inversão de Lista",
    statement: "Escreva um programa que leia 6 números e os exiba na ordem inversa à da leitura.",
    input: "6 números: 10, 20, 30, 40, 50, 60",
    output: "Ordem inversa: 60, 50, 40, 30, 20, 10",
    code: `# Inversão de lista
numeros = []

for i in range(6):
    valor = int(input(f"Digite o {i + 1}º número: "))
    numeros.append(valor)

print("Ordem inversa:")
for valor in reversed(numeros):
    print(valor)`,
    testCases: [
      { values: { numeros: [10, 20, 30, 40, 50, 60] }, result: "60, 50, 40, 30, 20, 10", stepByStep: "Percorre a lista do último índice até o primeiro" }
    ],
    explanation: "Primeiro preenchemos a lista normalmente. Depois, para exibir na ordem inversa, usamos a função 'reversed()' que retorna um iterador invertido."
  },

  // NÍVEL 2 - BUSCA E ESTATÍSTICAS (exercícios 5-7)
  {
    id: 5,
    nivel: 2,
    title: "Busca de Elemento",
    statement: "Desenvolva um algoritmo que leia uma lista de 15 números e verifique se um determinado valor existe na lista, mostrando sua posição.",
    input: "Lista: 1..15 | Buscar: 7",
    output: "Valor 7 encontrado na posição 6",
    code: `# Busca de elemento
numeros = []

for i in range(15):
    valor = int(input(f"Digite o {i + 1}º número: "))
    numeros.append(valor)

busca = int(input("Digite o valor a ser buscado: "))

posicao = -1
for i, valor in enumerate(numeros):
    if valor == busca:
        posicao = i
        break

if posicao != -1:
    print(f"Valor {busca} encontrado na posição {posicao + 1}")
else:
    print(f"Valor {busca} não encontrado na lista")`,
    testCases: [
      { values: { numeros: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15], busca: 7 }, result: "posição 7", stepByStep: "Percorre a lista até encontrar 7 na posição 6 (índice 6, posição 7)" }
    ],
    explanation: "Percorremos a lista comparando cada elemento com o valor buscado. Usamos 'enumerate' para obter o índice. Se encontrar, guardamos a posição e usamos 'break' para interromper o laço."
  },
  {
    id: 6,
    nivel: 2,
    title: "Estatísticas de Temperatura",
    statement: "Leia as temperaturas de uma semana (7 dias), armazene em uma lista e mostre: média, maior, menor e quantos dias ficaram acima da média.",
    input: "Temperaturas: 23, 25, 22, 28, 26, 24, 27",
    output: "Média: 25.0, Maior: 28, Menor: 22, Acima da média: 3 dias",
    code: `# Estatísticas de temperatura
temperaturas = []
soma = 0

for i in range(7):
    temp = float(input(f"Temperatura do dia {i + 1}: "))
    temperaturas.append(temp)
    soma += temp

media = soma / 7
maior = max(temperaturas)
menor = min(temperaturas)
acima_media = sum(1 for temp in temperaturas if temp > media)

print(f"Média: {media:.2f}")
print(f"Maior temperatura: {maior}")
print(f"Menor temperatura: {menor}")
print(f"Dias acima da média: {acima_media}")`,
    testCases: [
      { values: { temperaturas: [23, 25, 22, 28, 26, 24, 27] }, result: "media=25, maior=28, menor=22, acima=3", stepByStep: "Soma=175, média=25; >25: 28,26,27 = 3 dias" }
    ],
    explanation: "Python oferece funções nativas como `max()`, `min()` e `sum()`. Usamos uma list comprehension para contar os valores acima da média."
  },
  {
    id: 7,
    nivel: 2,
    title: "Crivo de Eratóstenes",
    statement: "Implemente o Crivo de Eratóstenes usando uma lista para encontrar todos os números primos até N.",
    input: "N = 30",
    output: "Primos: 2, 3, 5, 7, 11, 13, 17, 19, 23, 29",
    code: `# Crivo de Eratóstenes
n = int(input("Informe o valor de N: "))

# Inicializa uma lista com todos como True (primo)
eh_primo = [True] * (n + 1)
eh_primo[0] = eh_primo[1] = False

# Crivo de Eratóstenes
for i in range(2, int(n ** 0.5) + 1):
    if eh_primo[i]:
        for j in range(i * i, n + 1, i):
            eh_primo[j] = False

primos = [i for i in range(2, n + 1) if eh_primo[i]]

print(f"Números primos até {n}: {', '.join(map(str, primos))}")`,
    testCases: [
      { values: { n: 30 }, result: "2, 3, 5, 7, 11, 13, 17, 19, 23, 29", stepByStep: "Marca todos como primo; remove múltiplos de 2,3,5; restam apenas primos" }
    ],
    explanation: "O Crivo de Eratóstenes é um algoritmo eficiente para encontrar primos. Criamos uma lista booleana onde cada posição indica se o número é primo. Para cada número i, se ele é primo, marcamos seus múltiplos como False."
  },

  // NÍVEL 3 - MATRIZES (exercícios 8-10)
  {
    id: 8,
    nivel: 3,
    title: "Matriz Identidade",
    statement: "Crie uma matriz 3x3 onde os elementos da diagonal principal são 1 e os demais são 0.",
    input: "Nenhuma entrada",
    output: "1 0 0\\n0 1 0\\n0 0 1",
    code: `# Matriz Identidade 3x3
TAMANHO = 3
matriz = []

for i in range(TAMANHO):
    linha = []
    for j in range(TAMANHO):
        if i == j:
            linha.append(1)
        else:
            linha.append(0)
    matriz.append(linha)

print("Matriz Identidade 3x3:")
for linha in matriz:
    print(' '.join(map(str, linha)))`,
    testCases: [
      { values: {}, result: "1 0 0\\n0 1 0\\n0 0 1", stepByStep: "i=j → 1; i≠j → 0" }
    ],
    explanation: "Uma matriz identidade tem valor 1 na diagonal principal (onde linha = coluna) e 0 nas demais posições. Usamos laços aninhados para percorrer todas as posições."
  },
  {
    id: 9,
    nivel: 3,
    title: "Soma de Matrizes",
    statement: "Crie um programa que some duas matrizes 2x3. Leia os valores de ambas as matrizes e mostre a matriz resultante.",
    input: "Matriz A: [[1,2,3],[4,5,6]]; Matriz B: [[7,8,9],[10,11,12]]",
    output: "Matriz Soma: [[8,10,12],[14,16,18]]",
    code: `# Soma de matrizes
def ler_matriz(linhas, colunas, nome):
    matriz = []
    for i in range(linhas):
        linha = []
        for j in range(colunas):
            valor = float(input(f"{nome}[{i + 1}][{j + 1}]: "))
            linha.append(valor)
        matriz.append(linha)
    return matriz

LINHAS = 2
COLUNAS = 3

print("=== MATRIZ A ===")
A = ler_matriz(LINHAS, COLUNAS, "A")

print("=== MATRIZ B ===")
B = ler_matriz(LINHAS, COLUNAS, "B")

# Soma das matrizes
C = []
for i in range(LINHAS):
    linha = []
    for j in range(COLUNAS):
        linha.append(A[i][j] + B[i][j])
    C.append(linha)

print("=== MATRIZ SOMA ===")
for linha in C:
    print(' '.join(map(str, linha)))`,
    testCases: [
      { values: { A: [[1,2,3],[4,5,6]], B: [[7,8,9],[10,11,12]] }, result: "[[8,10,12],[14,16,18]]", stepByStep: "C[i][j] = A[i][j] + B[i][j] para cada posição" }
    ],
    explanation: "Para somar duas matrizes, percorremos todas as posições e somamos os elementos correspondentes. Usamos laços aninhados para acessar cada elemento."
  },
  {
    id: 10,
    nivel: 3,
    title: "Multiplicação de Matrizes",
    statement: "Desenvolva um programa que multiplique duas matrizes. Leia uma matriz A (2x3) e B (3x2), calcule e mostre a matriz resultante C (2x2).",
    input: "A: [[1,2,3],[4,5,6]]; B: [[7,8],[9,10],[11,12]]",
    output: "C: [[58,64],[139,154]]",
    code: `# Multiplicação de matrizes
def ler_matriz(linhas, colunas, nome):
    matriz = []
    for i in range(linhas):
        linha = []
        for j in range(colunas):
            valor = float(input(f"{nome}[{i + 1}][{j + 1}]: "))
            linha.append(valor)
        matriz.append(linha)
    return matriz

LINHAS_A = 2
COLUNAS_A = 3
LINHAS_B = 3
COLUNAS_B = 2

print("=== MATRIZ A (2x3) ===")
A = ler_matriz(LINHAS_A, COLUNAS_A, "A")

print("=== MATRIZ B (3x2) ===")
B = ler_matriz(LINHAS_B, COLUNAS_B, "B")

# Inicializa matriz C com zeros
C = [[0 for _ in range(COLUNAS_B)] for _ in range(LINHAS_A)]

# Multiplicação de matrizes
for i in range(LINHAS_A):
    for j in range(COLUNAS_B):
        for k in range(COLUNAS_A):
            C[i][j] += A[i][k] * B[k][j]

print("=== MATRIZ RESULTADO C (2x2) ===")
for linha in C:
    print(' '.join(map(str, linha)))`,
    testCases: [
      { values: { A: [[1,2,3],[4,5,6]], B: [[7,8],[9,10],[11,12]] }, result: "[[58,64],[139,154]]", stepByStep: "C[0][0] = 1×7+2×9+3×11=7+18+33=58; C[0][1]=1×8+2×10+3×12=8+20+36=64; C[1][0]=4×7+5×9+6×11=28+45+66=139; C[1][1]=4×8+5×10+6×12=32+50+72=154" }
    ],
    explanation: "A multiplicação de matrizes requer um laço triplo. Para cada posição (i,j) da matriz resultado, somamos o produto dos elementos da linha i de A com a coluna j de B."
  },
  {
    id: 11,
    nivel: 4,
    title: "Jogo da Velha - Verificação",
    statement: "Leia uma matriz 3x3 representando um jogo da velha ('X', 'O', ' ') e verifique se há um vencedor.",
    input: "X O X\\nO X O\\nX O X",
    output: "X venceu!",
    code: `# Verificação do Jogo da Velha
TAMANHO = 3
tabuleiro = []

print("Digite o tabuleiro do jogo da velha:")
for i in range(TAMANHO):
    linha = []
    for j in range(TAMANHO):
        valor = input(f"Posição [{i + 1}][{j + 1}]: ")
        linha.append(valor)
    tabuleiro.append(linha)

vencedor = False
jogador_vencedor = ' '

# Verifica linhas
for i in range(TAMANHO):
    if (tabuleiro[i][0] != ' ' and
        tabuleiro[i][0] == tabuleiro[i][1] and
        tabuleiro[i][1] == tabuleiro[i][2]):
        vencedor = True
        jogador_vencedor = tabuleiro[i][0]

# Verifica colunas
for j in range(TAMANHO):
    if (tabuleiro[0][j] != ' ' and
        tabuleiro[0][j] == tabuleiro[1][j] and
        tabuleiro[1][j] == tabuleiro[2][j]):
        vencedor = True
        jogador_vencedor = tabuleiro[0][j]

# Verifica diagonal principal
if (tabuleiro[0][0] != ' ' and
    tabuleiro[0][0] == tabuleiro[1][1] and
    tabuleiro[1][1] == tabuleiro[2][2]):
    vencedor = True
    jogador_vencedor = tabuleiro[0][0]

# Verifica diagonal secundária
if (tabuleiro[0][2] != ' ' and
    tabuleiro[0][2] == tabuleiro[1][1] and
    tabuleiro[1][1] == tabuleiro[2][0]):
    vencedor = True
    jogador_vencedor = tabuleiro[0][2]

if vencedor:
    print(f"{jogador_vencedor} venceu!")
else:
    print("Empate ou jogo incompleto!")`,
    testCases: [
      { values: { tabuleiro: [['X','O','X'],['O','X','O'],['X','O','X']] }, result: "X venceu!", stepByStep: "Diagonal principal com X: posições (0,0),(1,1),(2,2) são X" }
    ],
    explanation: "Para verificar o vencedor no jogo da velha, precisamos testar todas as 8 possibilidades: 3 linhas, 3 colunas e 2 diagonais. Se alguma delas tiver o mesmo caractere (X ou O) em todas as posições, aquele jogador venceu."
  }
];

// ========== RENDERIZAÇÃO DOS CONCEITOS ==========
function renderConceitosVetoresMatrizes() {
  const langText = getLanguageDisplayName();
  
  return `
    <div class="content-card">
      <h2 class="card-title">📦 Listas e Matrizes em Python</h2>
      <p>Quando precisamos guardar vários valores do mesmo tipo, como as notas de uma turma ou os preços de uma lista de produtos, não é prático criar uma variável diferente para cada dado. Para isso usamos <strong>Listas</strong>.</p>
      
      <div class="info-callout">
        <span class="info-icon-callout">📌</span>
        <div>
          <strong>Listas</strong> permitem armazenar vários valores em uma única variável, organizados em posições numeradas.<br>
          <strong>Matrizes (Listas de listas)</strong> são listas que contêm outras listas, formando tabelas com linhas e colunas.
        </div>
      </div>
    </div>
    
    <div class="content-card">
      <h2 class="card-title">📊 Listas</h2>
      <p>Guardar a nota de um aluno é simples: basta usar uma variável. Mas como armazenar as notas de toda uma turma? Criar muitas variáveis deixaria o programa confuso e difícil de controlar.</p>
      <p>Para resolver isso, usamos <strong>listas</strong>. Uma lista pode ser entendida como uma variável com várias posições, onde cada posição guarda um valor.</p>
      
      <div class="code-example">
        <div class="code-example-header">
          <span class="code-icon">📝</span>
          <span>Sintaxe de declaração de listas em Python</span>
        </div>
        <pre><code># Declaração de listas
numeros = [1, 2, 3, 4, 5]     # Lista inicializada
vazia = []                      # Lista vazia
com_repeticao = [0] * 10        # Lista com 10 zeros

# Acessando elementos (índice começa em 0)
numeros[0] = 10  # Altera o primeiro elemento
print(numeros[0])  # Imprime 10

# Adicionando elementos
numeros.append(6)  # Adiciona no final
numeros.insert(0, 0)  # Insere na posição 0</code></pre>
      </div>
      
      <div class="info-callout">
        <span class="info-icon-callout">⚠️</span>
        <div>
          <strong>Importante:</strong> O índice da lista começa em <strong>0</strong> (zero). Portanto, uma lista com 5 elementos tem índices de 0 a 4. Use <code>len(lista)</code> para obter o tamanho.
        </div>
      </div>
      
      <div class="code-example">
        <div class="code-example-header">
          <span class="code-icon">📝</span>
          <span>Exemplo de uso de lista</span>
        </div>
        <pre><code>vetor = [15, 22, 8, 10, 11]

print(vetor[0])  # 15
print(vetor[1])  # 22
print(vetor[4])  # 11

# Slicing (fatiamento)
print(vetor[1:4])  # [22, 8, 10]</code></pre>
      </div>
    </div>
    
    <div class="content-card">
      <h2 class="card-title">📊 Matrizes (Listas de Listas)</h2>
      <p>Uma lista nos ajuda a guardar vários valores, mas ela é linear (uma única linha de dados). Agora imagine que precisamos guardar as três notas de quatro alunos diferentes. Para isso usamos <strong>listas de listas (matrizes)</strong>.</p>
      <p>Uma matriz é uma lista que contém outras listas, organizada em forma de tabela, com linhas e colunas.</p>
      
      <div class="code-example">
        <div class="code-example-header">
          <span class="code-icon">📝</span>
          <span>Sintaxe de declaração de matrizes em Python</span>
        </div>
        <pre><code># Declaração de uma matriz 2x2
matriz = [
    [15, 22],
    [10, 11]
]

# Matriz 3x3 vazia (preenchida com zeros)
matriz_zeros = [[0 for _ in range(3)] for _ in range(3)]

# Matriz de caracteres
jogo_velha = [
    ['x', 'o', 'x'],
    ['o', 'x', 'o'],
    [' ', ' ', 'x']
]

# Acessando um elemento (linha 0, coluna 1)
matriz[0][1] = -1</code></pre>
      </div>
      
      <div class="code-example">
        <div class="code-example-header">
          <span class="code-icon">📝</span>
          <span>Exemplo de uso de matriz</span>
        </div>
        <pre><code>matriz = [
    [15, 22],
    [10, 11]
]

matriz[0][1] = -1  # Altera elemento da linha 0, coluna 1

print(matriz[0][0])  # 15
print(matriz[1][1])  # 11</code></pre>
      </div>
    </div>
    
    <div class="content-card">
      <h2 class="card-title">🔄 Percorrendo Listas e Matrizes</h2>
      <p>Para percorrer todos os elementos de uma lista ou matriz, usamos <strong>laços de repetição</strong>.</p>
      
      <div class="code-example">
        <div class="code-example-header">
          <span class="code-icon">📝</span>
          <span>Percorrendo uma lista</span>
        </div>
        <pre><code>vetor = [1, 2, 3, 4, 5]

# Com índice
for i in range(len(vetor)):
    print(vetor[i])

# Direto nos elementos
for valor in vetor:
    print(valor)

# Com índice e valor
for i, valor in enumerate(vetor):
    print(f"Índice {i}: {valor}")</code></pre>
      </div>
      
      <div class="code-example">
        <div class="code-example-header">
          <span class="code-icon">📝</span>
          <span>Percorrendo uma matriz (laços aninhados)</span>
        </div>
        <pre><code>matriz = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]

for i in range(len(matriz)):
    for j in range(len(matriz[i])):
        print(matriz[i][j], end=" ")
    print()

# Usando list comprehension
[[print(valor, end=" ") for valor in linha] or print() for linha in matriz]</code></pre>
      </div>
    </div>
    
    <div class="content-card">
      <h2 class="card-title">📋 Métodos Úteis de Lista em Python</h2>
      <div class="operators-table">
        <div class="operator-row header">
          <div>Método/Função</div>
          <div>Descrição</div>
          <div>Exemplo</div>
        </div>
        <div class="operator-row">
          <div><code>append()</code></div>
          <div>Adiciona elemento no final</div>
          <div><code>lista.append(10)</code></div>
        </div>
        <div class="operator-row">
          <div><code>insert()</code></div>
          <div>Insere em posição específica</div>
          <div><code>lista.insert(0, 10)</code></div>
        </div>
        <div class="operator-row">
          <div><code>pop()</code></div>
          <div>Remove último elemento</div>
          <div><code>lista.pop()</code></div>
        </div>
        <div class="operator-row">
          <div><code>remove()</code></div>
          <div>Remove primeiro elemento com valor</div>
          <div><code>lista.remove(10)</code></div>
        </div>
        <div class="operator-row">
          <div><code>sort()</code></div>
          <div>Ordena a lista</div>
          <div><code>lista.sort()</code></div>
        </div>
        <div class="operator-row">
          <div><code>reverse()</code></div>
          <div>Inverte a ordem</div>
          <div><code>lista.reverse()</code></div>
        </div>
        <div class="operator-row">
          <div><code>len()</code></div>
          <div>Retorna o tamanho</div>
          <div><code>len(lista)</code></div>
        </div>
        <div class="operator-row">
          <div><code>max() / min()</code></div>
          <div>Maior/Menor valor</div>
          <div><code>max(lista)</code></div>
        </div>
        <div class="operator-row">
          <div><code>sum()</code></div>
          <div>Soma dos elementos</div>
          <div><code>sum(lista)</code></div>
        </div>
      </div>
      
      <div class="info-callout" style="margin-top: 1rem;">
        <span class="info-icon-callout">💡</span>
        <div>
          <strong>Dica do Professor:</strong> 
          <br>• Os índices sempre começam em <strong>0</strong>!
          <br>• Use <code>len(lista)</code> para obter o tamanho
          <br>• Use <code>lista.append()</code> para adicionar elementos dinamicamente
          <br>• Python oferece funções nativas poderosas como <code>max()</code>, <code>min()</code>, <code>sum()</code> e <code>sorted()</code>
          <br>• Use <strong>list comprehension</strong> para criar listas de forma elegante: <code>[x**2 for x in range(10)]</code>
        </div>
      </div>
    </div>
  `;
}

// ========== RENDERIZAÇÃO DOS EXERCÍCIOS ==========
function renderExerciciosVetoresMatrizes() {
  const currentEx = vetoresMatrizesExercises.find(e => e.id === window.currentArraysExercise) || vetoresMatrizesExercises[0];
  
  const niveis = {
    1: { nome: "⭐ Básico", cor: "#10b981" },
    2: { nome: "⭐⭐ Busca e Estatísticas", cor: "#f59e0b" },
    3: { nome: "⭐⭐⭐ Matrizes", cor: "#3b82f6" },
    4: { nome: "⭐⭐⭐⭐ Avançado", cor: "#8b5cf6" }
  };
  
  return `
    <div class="exercises-filter">
      <div class="filter-header">
        <span>📋 Exercícios de Listas e Matrizes</span>
        <span class="filter-count">${vetoresMatrizesExercises.length} exercícios disponíveis</span>
      </div>
      <div class="filter-buttons">
        ${vetoresMatrizesExercises.map(ex => `
          <button class="filter-btn ${ex.id === window.currentArraysExercise ? 'active' : ''}" data-ex-id="${ex.id}" title="Nível ${ex.nivel}: ${niveis[ex.nivel].nome}">
            ${ex.id.toString().padStart(2, '0')}
          </button>
        `).join('')}
      </div>
      <div class="filter-levels">
        ${Object.entries(niveis).map(([nivel, info]) => `
          <span class="level-badge" style="background: ${info.cor}20; color: ${info.cor};">
            ${info.nome}
          </span>
        `).join('')}
      </div>
    </div>
    
    <div class="exercise-card">
      <div class="exercise-header">
        <span class="exercise-badge" style="background: ${niveis[currentEx.nivel].cor}20; color: ${niveis[currentEx.nivel].cor}">
          Nível ${currentEx.nivel} • ${niveis[currentEx.nivel].nome}
        </span>
        <span class="exercise-badge">Exercício ${currentEx.id.toString().padStart(2, '0')}</span>
        <h3 class="exercise-title">${currentEx.title}</h3>
      </div>
      
      <div class="exercise-statement">
        <h4>📖 Enunciado</h4>
        <p>${currentEx.statement}</p>
        <div class="exercise-io">
          <div class="input-example">
            <strong>📥 Entrada:</strong> ${currentEx.input}
          </div>
          <div class="output-example">
            <strong>📤 Saída:</strong> ${currentEx.output}
          </div>
        </div>
      </div>
      
      <div class="exercise-code">
        <div class="code-header-custom">
          <span>💻 Código de Resolução (${getLanguageDisplayName()})</span>
          <button class="copy-code-btn" data-code="${currentEx.code.replace(/"/g, '&quot;')}">📋 Copiar código</button>
        </div>
        <pre><code>${escapeHtml(currentEx.code)}</code></pre>
      </div>
      
      <div class="exercise-test-table">
        <h4>📊 Teste de Mesa</h4>
        <div class="test-cases">
          ${currentEx.testCases.map((test, idx) => `
            <div class="test-case">
              <div class="test-header">
                <span class="test-number">Teste ${idx + 1}</span>
                <span class="test-result">Resultado: ${test.result}</span>
              </div>
              ${test.values ? `
                <div class="test-values">
                  <strong>Valores de entrada:</strong> ${Object.entries(test.values).map(([k, v]) => `${k} = ${Array.isArray(v) ? JSON.stringify(v) : v}`).join(', ')}
                </div>
              ` : ''}
              <div class="test-step">
                <strong>🔍 Passo a passo:</strong> ${test.stepByStep}
              </div>
            </div>
          `).join('')}
        </div>
      </div>
      
      <div class="exercise-explanation">
        <h4>📝 Explicação</h4>
        <p>${currentEx.explanation}</p>
      </div>
    </div>
  `;
}

// ========== PÁGINA COMPLETA DE ARRAYS ==========
function renderArraysPage() {
  const currentSubpage = window.currentArraysSubpage || 'conceitos';
  
  return `
    <div class="page-header">
      <h1 class="page-title">📊 ${getArraysText()}</h1>
      <p class="page-subtitle">Aprenda a trabalhar com conjuntos de dados usando listas e matrizes em ${getLanguageDisplayName()}</p>
    </div>
    
    <div class="sub-nav">
      <button class="sub-nav-btn ${currentSubpage === 'conceitos' ? 'active' : ''}" data-subpage="conceitos">
        📘 Conceitos
      </button>
      <button class="sub-nav-btn ${currentSubpage === 'exercicios' ? 'active' : ''}" data-subpage="exercicios">
        ✏️ Exercícios
      </button>
    </div>
    
    <div id="arrays-content">
      ${currentSubpage === 'conceitos' ? renderConceitosVetoresMatrizes() : renderExerciciosVetoresMatrizes()}
    </div>
  `;
}