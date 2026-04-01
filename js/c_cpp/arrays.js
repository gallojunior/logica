// ========== DADOS DOS EXERCÍCIOS DE VETORES E MATRIZES EM C/C++ ==========
const vetoresMatrizesExercises = [
  // NÍVEL 1 - VETORES BÁSICOS (exercícios 1-4)
  {
    id: 1,
    nivel: 1,
    title: "Soma de Elementos",
    statement: "Escreva um programa em C/C++ que leia 5 números inteiros, armazene em um array e calcule a soma de todos os elementos.",
    input: "5 números: 10, 20, 30, 40, 50",
    output: "Soma = 150",
    code: `#include <stdio.h>

int main() {
    int numeros[5];
    int soma = 0;
    for (int i = 0; i < 5; i++) {
        printf("Digite o %dº número: ", i+1);
        scanf("%d", &numeros[i]);
        soma += numeros[i];
    }
    printf("A soma dos elementos é: %d\n", soma);
    return 0;
}`,
    testCases: [
      { values: { numeros: [10, 20, 30, 40, 50] }, result: 150, stepByStep: "soma = 0+10=10; +20=30; +30=60; +40=100; +50=150" }
    ],
    explanation: "Declaramos um array de 5 posições. Usamos um laço 'for' para preencher cada posição e acumular a soma."
  },
  {
    id: 2,
    nivel: 1,
    title: "Média das Notas",
    statement: "Crie um programa em C/C++ que leia as notas de 10 alunos, armazene em um array e calcule a média da turma.",
    input: "10 notas: 7.5, 8.0, 6.5, 9.0, 7.0, 8.5, 6.0, 9.5, 8.0, 7.0",
    output: "Média = 7.7",
    code: `#include <stdio.h>

int main() {
    const int NUM_ALUNOS = 10;
    double notas[NUM_ALUNOS];
    double soma = 0.0;
    for (int i = 0; i < NUM_ALUNOS; i++) {
        printf("Digite a nota do %dº aluno: ", i+1);
        scanf("%lf", &notas[i]);
        soma += notas[i];
    }
    double media = soma / NUM_ALUNOS;
    printf("A média da turma é: %.2f\n", media);
    return 0;
}`,
    testCases: [
      { values: { notas: [7.5, 8.0, 6.5, 9.0, 7.0, 8.5, 6.0, 9.5, 8.0, 7.0] }, result: 7.7, stepByStep: "soma = 77.0; média = 77.0 / 10 = 7.7" }
    ],
    explanation: "Criamos um array para armazenar as 10 notas. Após preencher, calculamos a soma e depois a média dividindo pelo número de alunos."
  },
  {
    id: 3,
    nivel: 1,
    title: "Maior Valor",
    statement: "Desenvolva um algoritmo em C/C++ que encontre e mostre o maior valor em um array de 8 números reais.",
    input: "8 números: 15, 42, 8, 23, 56, 31, 19, 47",
    output: "Maior valor = 56",
    code: `#include <stdio.h>

int main() {
    const int TAMANHO = 8;
    double numeros[TAMANHO];
    for (int i = 0; i < TAMANHO; i++) {
        printf("Digite o %dº número: ", i+1);
        scanf("%lf", &numeros[i]);
    }
    double maior = numeros[0];
    for (int i = 1; i < TAMANHO; i++) {
        if (numeros[i] > maior) maior = numeros[i];
    }
    printf("O maior valor é: %.2f\n", maior);
    return 0;
}`,
    testCases: [
      { values: { numeros: [15, 42, 8, 23, 56, 31, 19, 47] }, result: 56, stepByStep: "maior = 15; 42 > 15 → maior=42; 8 não; 23 não; 56 > 42 → maior=56; 31,19,47 não" }
    ],
    explanation: "Inicializamos a variável 'maior' com o primeiro elemento do array. Depois, percorremos os demais elementos comparando se cada um é maior que o valor atual. Se for, atualizamos."
  },
  {
    id: 4,
    nivel: 1,
    title: "Inversão de Array",
    statement: "Escreva um programa em C/C++ que leia 6 números e os exiba na ordem inversa à da leitura.",
    input: "6 números: 10, 20, 30, 40, 50, 60",
    output: "Ordem inversa: 60, 50, 40, 30, 20, 10",
    code: `#include <stdio.h>

int main() {
    const int TAMANHO = 6;
    int numeros[TAMANHO];
    for (int i = 0; i < TAMANHO; i++) {
        printf("Digite o %dº número: ", i+1);
        scanf("%d", &numeros[i]);
    }
    printf("Ordem inversa:\n");
    for (int i = TAMANHO - 1; i >= 0; i--) {
        printf("%d\n", numeros[i]);
    }
    return 0;
}`,
    testCases: [
      { values: { numeros: [10, 20, 30, 40, 50, 60] }, result: "60, 50, 40, 30, 20, 10", stepByStep: "Percorre o array do último índice (5) até o primeiro (0)" }
    ],
    explanation: "Primeiro preenchemos o array normalmente. Depois, para exibir na ordem inversa, percorremos o array do último índice (TAMANHO-1) até o primeiro (0)."
  },

  // NÍVEL 2 - BUSCA E ESTATÍSTICAS (exercícios 5-7)
  {
    id: 5,
    nivel: 2,
    title: "Busca de Elemento",
    statement: "Desenvolva um algoritmo em C/C++ que leia um array de 15 números e verifique se um determinado valor existe no array, mostrando sua posição.",
    input: "Array: 1..15 | Buscar: 7",
    output: "Valor 7 encontrado na posição 6",
    code: `#include <stdio.h>

int main() {
    const int TAMANHO = 15;
    int numeros[TAMANHO];
    for (int i = 0; i < TAMANHO; i++) {
        printf("Digite o %dº número: ", i+1);
        scanf("%d", &numeros[i]);
    }
    int busca;
    printf("Digite o valor a ser buscado: ");
    scanf("%d", &busca);
    int posicao = -1;
    for (int i = 0; i < TAMANHO; i++) {
        if (numeros[i] == busca) {
            posicao = i;
            break;
        }
    }
    if (posicao != -1) {
        printf("Valor %d encontrado na posição %d\n", busca, posicao+1);
    } else {
        printf("Valor %d não encontrado\n", busca);
    }
    return 0;
}`,
    testCases: [
      { values: { numeros: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15], busca: 7 }, result: "posição 7", stepByStep: "Percorre o array até encontrar 7 na posição 6 (índice 6, posição 7)" }
    ],
    explanation: "Percorremos o array comparando cada elemento com o valor buscado. Se encontrar, guardamos a posição e usamos 'break' para interromper o laço."
  },
  {
    id: 6,
    nivel: 2,
    title: "Estatísticas de Temperatura",
    statement: "Leia as temperaturas de uma semana (7 dias), armazene em um array e mostre: média, maior, menor e quantos dias ficaram acima da média.",
    input: "Temperaturas: 23, 25, 22, 28, 26, 24, 27",
    output: "Média: 25.0, Maior: 28, Menor: 22, Acima da média: 3 dias",
    code: `#include <stdio.h>

int main() {
    const int DIAS = 7;
    double temp[DIAS];
    double soma = 0.0;
    for (int i = 0; i < DIAS; i++) {
        printf("Temperatura do dia %d: ", i+1);
        scanf("%lf", &temp[i]);
        soma += temp[i];
    }
    double media = soma / DIAS;
    double maior = temp[0], menor = temp[0];
    int acima = 0;
    for (int i = 0; i < DIAS; i++) {
        if (temp[i] > maior) maior = temp[i];
        if (temp[i] < menor) menor = temp[i];
        if (temp[i] > media) acima++;
    }
    printf("Média: %.2f\n", media);
    printf("Maior temperatura: %.2f\n", maior);
    printf("Menor temperatura: %.2f\n", menor);
    printf("Dias acima da média: %d\n", acima);
    return 0;
}`,
    testCases: [
      { values: { temperaturas: [23, 25, 22, 28, 26, 24, 27] }, result: "media=25, maior=28, menor=22, acima=3", stepByStep: "Soma=175, média=25; >25: 28,26,27 = 3 dias" }
    ],
    explanation: "Em um primeiro laço, acumulamos a soma. Depois calculamos a média. Em um segundo laço, encontramos maior, menor e contamos quantos valores são maiores que a média."
  },
  {
    id: 7,
    nivel: 2,
    title: "Crivo de Eratóstenes",
    statement: "Implemente o Crivo de Eratóstenes usando um array para encontrar todos os números primos até N.",
    input: "N = 30",
    output: "Primos: 2, 3, 5, 7, 11, 13, 17, 19, 23, 29",
    code: `#include <stdio.h>
#include <stdlib.h>
#include <math.h>

int main() {
    int n;
    printf("Informe o valor de N: ");
    scanf("%d", &n);
    int *ehPrimo = (int*)malloc((n+1) * sizeof(int));
    for (int i = 2; i <= n; i++) ehPrimo[i] = 1;
    for (int i = 2; i * i <= n; i++) {
        if (ehPrimo[i]) {
            for (int j = i * i; j <= n; j += i) {
                ehPrimo[j] = 0;
            }
        }
    }
    printf("Números primos até %d: ", n);
    for (int i = 2; i <= n; i++) {
        if (ehPrimo[i]) {
            printf("%d", i);
            if (i < n) printf(", ");
        }
    }
    printf("\n");
    free(ehPrimo);
    return 0;
}`,
    testCases: [
      { values: { n: 30 }, result: "2, 3, 5, 7, 11, 13, 17, 19, 23, 29", stepByStep: "Marca todos como primo; remove múltiplos de 2,3,5; restam apenas primos" }
    ],
    explanation: "O Crivo de Eratóstenes é um algoritmo eficiente para encontrar primos. Criamos um array alocado dinamicamente onde cada posição indica se o número é primo. Começamos com todos como 1 (true). Para cada número i, se ele é primo, marcamos seus múltiplos como 0 (false)."
  },

  // NÍVEL 3 - MATRIZES (exercícios 8-10)
  {
    id: 8,
    nivel: 3,
    title: "Matriz Identidade",
    statement: "Crie uma matriz 3x3 onde os elementos da diagonal principal são 1 e os demais são 0.",
    input: "Nenhuma entrada",
    output: "1 0 0\\n0 1 0\\n0 0 1",
    code: `#include <stdio.h>

int main() {
    const int TAMANHO = 3;
    int matriz[TAMANHO][TAMANHO];
    for (int i = 0; i < TAMANHO; i++) {
        for (int j = 0; j < TAMANHO; j++) {
            if (i == j) matriz[i][j] = 1;
            else matriz[i][j] = 0;
        }
    }
    printf("Matriz Identidade 3x3:\n");
    for (int i = 0; i < TAMANHO; i++) {
        for (int j = 0; j < TAMANHO; j++) {
            printf("%d ", matriz[i][j]);
        }
        printf("\n");
    }
    return 0;
}`,
    testCases: [
      { values: {}, result: "1 0 0\\n0 1 0\\n0 0 1", stepByStep: "i=j → 1; i≠j → 0" }
    ],
    explanation: "Uma matriz identidade tem valor 1 na diagonal principal (onde linha = coluna) e 0 nas demais posições. Usamos laços aninhados para percorrer todas as posições."
  },
  {
    id: 9,
    nivel: 3,
    title: "Soma de Matrizes",
    statement: "Crie um programa em C/C++ que some duas matrizes 2x3. Leia os valores de ambas as matrizes e mostre a matriz resultante.",
    input: "Matriz A: [[1,2,3],[4,5,6]]; Matriz B: [[7,8,9],[10,11,12]]",
    output: "Matriz Soma: [[8,10,12],[14,16,18]]",
    code: `#include <stdio.h>

int main() {
    const int LINHAS = 2;
    const int COLUNAS = 3;
    int A[LINHAS][COLUNAS], B[LINHAS][COLUNAS], C[LINHAS][COLUNAS];
    printf("=== MATRIZ A ===\n");
    for (int i = 0; i < LINHAS; i++) {
        for (int j = 0; j < COLUNAS; j++) {
            printf("A[%d][%d]: ", i+1, j+1);
            scanf("%d", &A[i][j]);
        }
    }
    printf("=== MATRIZ B ===\n");
    for (int i = 0; i < LINHAS; i++) {
        for (int j = 0; j < COLUNAS; j++) {
            printf("B[%d][%d]: ", i+1, j+1);
            scanf("%d", &B[i][j]);
        }
    }
    for (int i = 0; i < LINHAS; i++) {
        for (int j = 0; j < COLUNAS; j++) {
            C[i][j] = A[i][j] + B[i][j];
        }
    }
    printf("=== MATRIZ SOMA ===\n");
    for (int i = 0; i < LINHAS; i++) {
        for (int j = 0; j < COLUNAS; j++) {
            printf("%d ", C[i][j]);
        }
        printf("\n");
    }
    return 0;
}`,
    testCases: [
      { values: { A: [[1,2,3],[4,5,6]], B: [[7,8,9],[10,11,12]] }, result: "[[8,10,12],[14,16,18]]", stepByStep: "C[i][j] = A[i][j] + B[i][j] para cada posição" }
    ],
    explanation: "Para somar duas matrizes, percorremos todas as posições e somamos os elementos correspondentes. Usamos laços aninhados para acessar cada elemento."
  },
  {
    id: 10,
    nivel: 3,
    title: "Multiplicação de Matrizes",
    statement: "Desenvolva um programa em C/C++ que multiplique duas matrizes. Leia uma matriz A (2x3) e B (3x2), calcule e mostre a matriz resultante C (2x2).",
    input: "A: [[1,2,3],[4,5,6]]; B: [[7,8],[9,10],[11,12]]",
    output: "C: [[58,64],[139,154]]",
    code: `#include <stdio.h>

int main() {
    const int LINHAS_A = 2;
    const int COLUNAS_A = 3;
    const int LINHAS_B = 3;
    const int COLUNAS_B = 2;
    int A[LINHAS_A][COLUNAS_A];
    int B[LINHAS_B][COLUNAS_B];
    int C[LINHAS_A][COLUNAS_B] = {0};
    printf("=== MATRIZ A (2x3) ===\n");
    for (int i = 0; i < LINHAS_A; i++) {
        for (int j = 0; j < COLUNAS_A; j++) {
            printf("A[%d][%d]: ", i+1, j+1);
            scanf("%d", &A[i][j]);
        }
    }
    printf("=== MATRIZ B (3x2) ===\n");
    for (int i = 0; i < LINHAS_B; i++) {
        for (int j = 0; j < COLUNAS_B; j++) {
            printf("B[%d][%d]: ", i+1, j+1);
            scanf("%d", &B[i][j]);
        }
    }
    for (int i = 0; i < LINHAS_A; i++) {
        for (int j = 0; j < COLUNAS_B; j++) {
            for (int k = 0; k < COLUNAS_A; k++) {
                C[i][j] += A[i][k] * B[k][j];
            }
        }
    }
    printf("=== MATRIZ RESULTADO C (2x2) ===\n");
    for (int i = 0; i < LINHAS_A; i++) {
        for (int j = 0; j < COLUNAS_B; j++) {
            printf("%d ", C[i][j]);
        }
        printf("\n");
    }
    return 0;
}`,
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
    code: `#include <stdio.h>

int main() {
    const int TAMANHO = 3;
    char tabuleiro[TAMANHO][TAMANHO];
    printf("Digite o tabuleiro do jogo da velha:\n");
    for (int i = 0; i < TAMANHO; i++) {
        for (int j = 0; j < TAMANHO; j++) {
            printf("Posição [%d][%d]: ", i+1, j+1);
            scanf(" %c", &tabuleiro[i][j]);
        }
    }
    int vencedor = 0;
    char jogadorVencedor = ' ';
    // Linhas
    for (int i = 0; i < TAMANHO; i++) {
        if (tabuleiro[i][0] != ' ' &&
            tabuleiro[i][0] == tabuleiro[i][1] &&
            tabuleiro[i][1] == tabuleiro[i][2]) {
            vencedor = 1;
            jogadorVencedor = tabuleiro[i][0];
        }
    }
    // Colunas
    for (int j = 0; j < TAMANHO; j++) {
        if (tabuleiro[0][j] != ' ' &&
            tabuleiro[0][j] == tabuleiro[1][j] &&
            tabuleiro[1][j] == tabuleiro[2][j]) {
            vencedor = 1;
            jogadorVencedor = tabuleiro[0][j];
        }
    }
    // Diagonal principal
    if (tabuleiro[0][0] != ' ' &&
        tabuleiro[0][0] == tabuleiro[1][1] &&
        tabuleiro[1][1] == tabuleiro[2][2]) {
        vencedor = 1;
        jogadorVencedor = tabuleiro[0][0];
    }
    // Diagonal secundária
    if (tabuleiro[0][2] != ' ' &&
        tabuleiro[0][2] == tabuleiro[1][1] &&
        tabuleiro[1][1] == tabuleiro[2][0]) {
        vencedor = 1;
        jogadorVencedor = tabuleiro[0][2];
    }
    if (vencedor) {
        printf("%c venceu!\n", jogadorVencedor);
    } else {
        printf("Empate ou jogo incompleto!\n");
    }
    return 0;
}`,
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
      <h2 class="card-title">📦 Arrays e Matrizes em C/C++</h2>
      <p>Em C/C++, arrays são coleções de elementos do mesmo tipo, armazenados em posições consecutivas de memória. Para matrizes, usamos arrays multidimensionais.</p>
      
      <div class="info-callout">
        <span class="info-icon-callout">📌</span>
        <div>
          <strong>Arrays</strong>: podem ser declarados com tamanho fixo ou alocados dinamicamente.<br>
          <strong>Matrizes</strong>: arrays de arrays (bidimensionais).<br>
          <strong>Acesso</strong>: <code>nome[indice]</code> para vetores, <code>nome[linha][coluna]</code> para matrizes.
        </div>
      </div>
      
      <div class="code-example">
        <div class="code-example-header">
          <span class="code-icon">📝</span>
          <span>Declaração de arrays e matrizes</span>
        </div>
        <pre><code>// Array de 5 inteiros
int numeros[5];

// Inicialização
int vetor[5] = {15, 22, 8, 10, 11};

// Matriz 2x3
int matriz[2][3] = {
    {1, 2, 3},
    {4, 5, 6}
};

// Acessando elementos
vetor[0] = 10;
matriz[0][1] = -1;</code></pre>
      </div>
    </div>
    
    <div class="content-card">
      <h2 class="card-title">📊 Arrays</h2>
      <div class="code-example">
        <div class="code-example-header">
          <span class="code-icon">📝</span>
          <span>Exemplo de uso</span>
        </div>
        <pre><code>int vetor[5] = {15, 22, 8, 10, 11};
printf("%d\n", vetor[0]); // 15
printf("%d\n", vetor[1]); // 22
printf("%d\n", vetor[4]); // 11</code></pre>
      </div>
      <div class="info-callout">
        <span class="info-icon-callout">⚠️</span>
        <div>Os índices começam em <strong>0</strong>. Use <code>sizeof(vetor)/sizeof(vetor[0])</code> para obter o tamanho (em elementos).</div>
      </div>
    </div>
    
    <div class="content-card">
      <h2 class="card-title">📊 Matrizes</h2>
      <div class="code-example">
        <div class="code-example-header">
          <span class="code-icon">📝</span>
          <span>Exemplo de uso</span>
        </div>
        <pre><code>int matriz[2][2] = {{15, 22}, {10, 11}};
matriz[0][1] = -1;
printf("%d\n", matriz[0][0]); // 15
printf("%d\n", matriz[1][1]); // 11</code></pre>
      </div>
    </div>
    
    <div class="content-card">
      <h2 class="card-title">🔄 Percorrendo Arrays e Matrizes</h2>
      <div class="code-example">
        <div class="code-example-header">
          <span class="code-icon">📝</span>
          <span>Laços for aninhados</span>
        </div>
        <pre><code>// Vetor
int vetor[5] = {1,2,3,4,5};
for (int i = 0; i < 5; i++) {
    printf("%d ", vetor[i]);
}

// Matriz
int matriz[3][4];
for (int i = 0; i < 3; i++) {
    for (int j = 0; j < 4; j++) {
        printf("%d ", matriz[i][j]);
    }
    printf("\n");
}</code></pre>
      </div>
    </div>
    
    <div class="content-card">
      <h2 class="card-title">💡 Dicas Importantes</h2>
      <div class="info-callout">
        <span class="info-icon-callout">⚠️</span>
        <div>
          • Os índices começam em <strong>0</strong>.<br>
          • Em C/C++, arrays são passados como ponteiros para funções; o tamanho deve ser informado separadamente.<br>
          • Para alocar arrays dinamicamente, use <code>malloc()</code> e <code>free()</code>.<br>
          • Matrizes podem ser armazenadas em ordem de linha (row-major) – acesse sempre linha depois coluna.<br>
          • Sempre verifique os limites do array para evitar estouro de buffer.
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
        <span>📋 Exercícios de Arrays e Matrizes (C/C++)</span>
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
      <h1 class="page-title"><span>📊</span> ${getArraysText()}</h1>
      <p class="page-subtitle">Aprenda a trabalhar com conjuntos de dados usando arrays e matrizes em ${getLanguageDisplayName()}</p>
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