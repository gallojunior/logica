// ========== DADOS DOS EXERCÍCIOS DE VETORES E MATRIZES ==========
const vetoresMatrizesExercises = [
  // NÍVEL 1 - VETORES BÁSICOS (exercícios 1-4)
  {
    id: 1,
    nivel: 1,
    title: "Soma de Elementos",
    statement: "Escreva um algoritmo que leia 5 números inteiros, armazene em um vetor e calcule a soma de todos os elementos.",
    input: "5 números: 10, 20, 30, 40, 50",
    output: "Soma = 150",
    code: `programa {
  funcao inicio() {
    const inteiro TAMANHO = 5
    inteiro numeros[TAMANHO]
    inteiro soma = 0
    
    para (inteiro i = 0; i < TAMANHO; i++) {
      escreva("Digite o ", i + 1, "º número: ")
      leia(numeros[i])
      soma = soma + numeros[i]
    }
    
    escreva("A soma dos elementos é: ", soma)
  }
}`,
    testCases: [
      { values: { numeros: [10, 20, 30, 40, 50] }, result: 150, stepByStep: "soma = 0+10=10; +20=30; +30=60; +40=100; +50=150" },
      { values: { numeros: [1, 2, 3, 4, 5] }, result: 15, stepByStep: "soma = 1+2+3+4+5 = 15" }
    ],
    explanation: "Declaramos um vetor de 5 posições. Usamos um laço 'para' para preencher cada posição com um valor lido do usuário. Simultaneamente, acumulamos a soma em uma variável. Ao final, exibimos o resultado."
  },
  {
    id: 2,
    nivel: 1,
    title: "Média das Notas",
    statement: "Crie um programa que leia as notas de 10 alunos, armazene em um vetor e calcule a média da turma.",
    input: "10 notas: 7.5, 8.0, 6.5, 9.0, 7.0, 8.5, 6.0, 9.5, 8.0, 7.0",
    output: "Média = 7.7",
    code: `programa {
  funcao inicio() {
    const inteiro NUM_ALUNOS = 10
    real notas[NUM_ALUNOS]
    real soma = 0, media
    
    para (inteiro i = 0; i < NUM_ALUNOS; i++) {
      escreva("Digite a nota do ", i + 1, "º aluno: ")
      leia(notas[i])
      soma = soma + notas[i]
    }
    
    media = soma / NUM_ALUNOS
    escreva("A média da turma é: ", media)
  }
}`,
    testCases: [
      { values: { notas: [7.5, 8.0, 6.5, 9.0, 7.0, 8.5, 6.0, 9.5, 8.0, 7.0] }, result: 7.7, stepByStep: "soma = 77.0; média = 77.0 / 10 = 7.7" }
    ],
    explanation: "Criamos um vetor para armazenar as 10 notas. Após preencher, calculamos a soma e depois a média dividindo pelo número de alunos."
  },
  {
    id: 3,
    nivel: 1,
    title: "Maior Valor",
    statement: "Desenvolva um algoritmo que encontre e mostre o maior valor em um vetor de 8 números reais.",
    input: "8 números: 15, 42, 8, 23, 56, 31, 19, 47",
    output: "Maior valor = 56",
    code: `programa {
  funcao inicio() {
    const inteiro TAMANHO = 8
    real numeros[TAMANHO]
    real maior
    
    para (inteiro i = 0; i < TAMANHO; i++) {
      escreva("Digite o ", i + 1, "º número: ")
      leia(numeros[i])
      
      se (i == 0) {
        maior = numeros[i]
      } senao se (numeros[i] > maior) {
        maior = numeros[i]
      }
    }
    
    escreva("O maior valor é: ", maior)
  }
}`,
    testCases: [
      { values: { numeros: [15, 42, 8, 23, 56, 31, 19, 47] }, result: 56, stepByStep: "maior = 15; 42 > 15 → maior=42; 8 não; 23 não; 56 > 42 → maior=56; 31,19,47 não" }
    ],
    explanation: "Inicializamos a variável 'maior' com o primeiro elemento do vetor. Depois, percorremos os demais elementos comparando se cada um é maior que o valor atual de 'maior'. Se for, atualizamos."
  },
  {
    id: 4,
    nivel: 1,
    title: "Inversão de Vetor",
    statement: "Escreva um programa que leia 6 números e os exiba na ordem inversa à da leitura.",
    input: "6 números: 10, 20, 30, 40, 50, 60",
    output: "Ordem inversa: 60, 50, 40, 30, 20, 10",
    code: `programa {
  funcao inicio() {
    const inteiro TAMANHO = 6
    inteiro numeros[TAMANHO]
    
    para (inteiro i = 0; i < TAMANHO; i++) {
      escreva("Digite o ", i + 1, "º número: ")
      leia(numeros[i])
    }
    
    escreva("Ordem inversa: ")
    para (inteiro i = TAMANHO - 1; i >= 0; i--) {
      escreva(numeros[i])
      se (i > 0) {
        escreva(", ")
      }
    }
  }
}`,
    testCases: [
      { values: { numeros: [10, 20, 30, 40, 50, 60] }, result: "60, 50, 40, 30, 20, 10", stepByStep: "Percorre o vetor do último índice (5) até o primeiro (0)" }
    ],
    explanation: "Primeiro preenchemos o vetor normalmente. Depois, para exibir na ordem inversa, percorremos o vetor do último índice (TAMANHO-1) até o primeiro (0)."
  },

  // NÍVEL 2 - BUSCA E ESTATÍSTICAS (exercícios 5-7)
  {
    id: 5,
    nivel: 2,
    title: "Busca de Elemento",
    statement: "Desenvolva um algoritmo que leia um vetor de 15 números e verifique se um determinado valor (também lido) existe no vetor, mostrando sua posição.",
    input: "Vetor: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15 | Buscar: 7",
    output: "Valor 7 encontrado na posição 6",
    code: `programa {
  funcao inicio() {
    const inteiro TAMANHO = 15
    inteiro numeros[TAMANHO]
    inteiro busca, posicao = -1
    
    para (inteiro i = 0; i < TAMANHO; i++) {
      escreva("Digite o ", i + 1, "º número: ")
      leia(numeros[i])
    }
    
    escreva("Digite o valor a ser buscado: ")
    leia(busca)
    
    para (inteiro i = 0; i < TAMANHO; i++) {
      se (numeros[i] == busca) {
        posicao = i
        pare
      }
    }
    
    se (posicao != -1) {
      escreva("Valor ", busca, " encontrado na posição ", posicao + 1)
    } senao {
      escreva("Valor ", busca, " não encontrado no vetor")
    }
  }
}`,
    testCases: [
      { values: { numeros: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15], busca: 7 }, result: "posição 7", stepByStep: "Percorre o vetor até encontrar 7 na posição 6 (índice 6, posição 7)" },
      { values: { numeros: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15], busca: 20 }, result: "não encontrado", stepByStep: "Percorre todo vetor e não encontra" }
    ],
    explanation: "Percorremos o vetor comparando cada elemento com o valor buscado. Se encontrar, guardamos a posição e usamos 'pare' para interromper o laço. Se não encontrar, posição permanece -1."
  },
  {
    id: 6,
    nivel: 2,
    title: "Estatísticas de Temperatura",
    statement: "Leia as temperaturas de uma semana (7 dias), armazene em um vetor e mostre: média, maior, menor e quantos dias ficaram acima da média.",
    input: "Temperaturas: 23, 25, 22, 28, 26, 24, 27",
    output: "Média: 25.0, Maior: 28, Menor: 22, Acima da média: 3 dias",
    code: `programa {
  funcao inicio() {
    const inteiro DIAS = 7
    real temperaturas[DIAS]
    real soma = 0, media, maior, menor
    inteiro acimaMedia = 0
    
    para (inteiro i = 0; i < DIAS; i++) {
      escreva("Temperatura do dia ", i + 1, ": ")
      leia(temperaturas[i])
      soma = soma + temperaturas[i]
      
      se (i == 0) {
        maior = temperaturas[i]
        menor = temperaturas[i]
      } senao {
        se (temperaturas[i] > maior) {
          maior = temperaturas[i]
        }
        se (temperaturas[i] < menor) {
          menor = temperaturas[i]
        }
      }
    }
    
    media = soma / DIAS
    
    para (inteiro i = 0; i < DIAS; i++) {
      se (temperaturas[i] > media) {
        acimaMedia++
      }
    }
    
    escreva("Média: ", media, "\\n")
    escreva("Maior temperatura: ", maior, "\\n")
    escreva("Menor temperatura: ", menor, "\\n")
    escreva("Dias acima da média: ", acimaMedia)
  }
}`,
    testCases: [
      { values: { temperaturas: [23, 25, 22, 28, 26, 24, 27] }, result: "media=25, maior=28, menor=22, acima=3", stepByStep: "Soma=175, média=25; >25: 28,26,27 = 3 dias" }
    ],
    explanation: "Em um primeiro laço, acumulamos a soma e encontramos maior e menor. Depois calculamos a média. Em um segundo laço, contamos quantos valores são maiores que a média."
  },
  {
    id: 7,
    nivel: 2,
    title: "Crivo de Eratóstenes",
    statement: "Implemente o Crivo de Eratóstenes usando um vetor para encontrar todos os números primos até N.",
    input: "N = 30",
    output: "Primos: 2, 3, 5, 7, 11, 13, 17, 19, 23, 29",
    code: `programa {
  funcao inicio() {
    inteiro n
    
    escreva("Informe o valor de N: ")
    leia(n)
    
    logico ehPrimo[n + 1]
    
    // Inicializa todos como verdadeiro
    para (inteiro i = 2; i <= n; i++) {
      ehPrimo[i] = verdadeiro
    }
    
    // Crivo de Eratóstenes
    para (inteiro i = 2; i * i <= n; i++) {
      se (ehPrimo[i]) {
        para (inteiro j = i * i; j <= n; j = j + i) {
          ehPrimo[j] = falso
        }
      }
    }
    
    escreva("Números primos até ", n, ": ")
    para (inteiro i = 2; i <= n; i++) {
      se (ehPrimo[i]) {
        escreva(i)
        se (i < n) {
          escreva(", ")
        }
      }
    }
  }
}`,
    testCases: [
      { values: { n: 30 }, result: "2, 3, 5, 7, 11, 13, 17, 19, 23, 29", stepByStep: "Marca todos como primo; remove múltiplos de 2,3,5; restam apenas primos" }
    ],
    explanation: "O Crivo de Eratóstenes é um algoritmo eficiente para encontrar primos. Criamos um vetor booleano onde cada posição indica se o número é primo. Começamos com todos como verdadeiro. Para cada número i, se ele é primo, marcamos seus múltiplos como falso."
  },

  // NÍVEL 3 - MATRIZES (exercícios 8-10)
  {
    id: 8,
    nivel: 3,
    title: "Matriz Identidade",
    statement: "Crie uma matriz 3x3 onde os elementos da diagonal principal são 1 e os demais são 0.",
    input: "Nenhuma entrada",
    output: "1 0 0\\n0 1 0\\n0 0 1",
    code: `programa {
  funcao inicio() {
    const inteiro LINHAS = 3
    const inteiro COLUNAS = 3
    inteiro matriz[LINHAS][COLUNAS]
    
    para (inteiro i = 0; i < LINHAS; i++) {
      para (inteiro j = 0; j < COLUNAS; j++) {
        se (i == j) {
          matriz[i][j] = 1
        } senao {
          matriz[i][j] = 0
        }
      }
    }
    
    escreva("Matriz Identidade 3x3:\\n")
    para (inteiro i = 0; i < LINHAS; i++) {
      para (inteiro j = 0; j < COLUNAS; j++) {
        escreva(matriz[i][j], " ")
      }
      escreva("\\n")
    }
  }
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
    statement: "Crie um programa que some duas matrizes 2x3. Leia os valores de ambas as matrizes e mostre a matriz resultante.",
    input: "Matriz A: 1 2 3 / 4 5 6; Matriz B: 7 8 9 / 10 11 12",
    output: "Matriz Soma: 8 10 12 / 14 16 18",
    code: `programa {
  funcao inicio() {
    const inteiro LINHAS = 2
    const inteiro COLUNAS = 3
    inteiro A[LINHAS][COLUNAS]
    inteiro B[LINHAS][COLUNAS]
    inteiro C[LINHAS][COLUNAS]
    
    escreva("=== MATRIZ A ===\\n")
    para (inteiro i = 0; i < LINHAS; i++) {
      para (inteiro j = 0; j < COLUNAS; j++) {
        escreva("A[", i + 1, "][", j + 1, "]: ")
        leia(A[i][j])
      }
    }
    
    escreva("=== MATRIZ B ===\\n")
    para (inteiro i = 0; i < LINHAS; i++) {
      para (inteiro j = 0; j < COLUNAS; j++) {
        escreva("B[", i + 1, "][", j + 1, "]: ")
        leia(B[i][j])
      }
    }
    
    // Soma das matrizes
    para (inteiro i = 0; i < LINHAS; i++) {
      para (inteiro j = 0; j < COLUNAS; j++) {
        C[i][j] = A[i][j] + B[i][j]
      }
    }
    
    escreva("=== MATRIZ SOMA ===\\n")
    para (inteiro i = 0; i < LINHAS; i++) {
      para (inteiro j = 0; j < COLUNAS; j++) {
        escreva(C[i][j], " ")
      }
      escreva("\\n")
    }
  }
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
    statement: "Desenvolva um programa que multiplique duas matrizes. Leia uma matriz A (2x3) e B (3x2), calcule e mostre a matriz resultante C (2x2).",
    input: "A: [[1,2,3],[4,5,6]]; B: [[7,8],[9,10],[11,12]]",
    output: "C: [[58,64],[139,154]]",
    code: `programa {
  funcao inicio() {
    const inteiro LINHAS_A = 2
    const inteiro COLUNAS_A = 3
    const inteiro LINHAS_B = 3
    const inteiro COLUNAS_B = 2
    inteiro A[LINHAS_A][COLUNAS_A]
    inteiro B[LINHAS_B][COLUNAS_B]
    inteiro C[LINHAS_A][COLUNAS_B]
    
    // Leitura da matriz A
    escreva("=== MATRIZ A (2x3) ===\\n")
    para (inteiro i = 0; i < LINHAS_A; i++) {
      para (inteiro j = 0; j < COLUNAS_A; j++) {
        escreva("A[", i + 1, "][", j + 1, "]: ")
        leia(A[i][j])
      }
    }
    
    // Leitura da matriz B
    escreva("=== MATRIZ B (3x2) ===\\n")
    para (inteiro i = 0; i < LINHAS_B; i++) {
      para (inteiro j = 0; j < COLUNAS_B; j++) {
        escreva("B[", i + 1, "][", j + 1, "]: ")
        leia(B[i][j])
      }
    }
    
    // Inicializa matriz C com zeros
    para (inteiro i = 0; i < LINHAS_A; i++) {
      para (inteiro j = 0; j < COLUNAS_B; j++) {
        C[i][j] = 0
      }
    }
    
    // Multiplicação de matrizes
    para (inteiro i = 0; i < LINHAS_A; i++) {
      para (inteiro j = 0; j < COLUNAS_B; j++) {
        para (inteiro k = 0; k < COLUNAS_A; k++) {
          C[i][j] = C[i][j] + (A[i][k] * B[k][j])
        }
      }
    }
    
    // Exibe o resultado
    escreva("=== MATRIZ RESULTADO C (2x2) ===\\n")
    para (inteiro i = 0; i < LINHAS_A; i++) {
      para (inteiro j = 0; j < COLUNAS_B; j++) {
        escreva(C[i][j], " ")
      }
      escreva("\\n")
    }
  }
}`,
    testCases: [
      { values: { A: [[1,2,3],[4,5,6]], B: [[7,8],[9,10],[11,12]] }, result: "[[58,64],[139,154]]", stepByStep: "C[0][0] = 1×7+2×9+3×11=7+18+33=58; C[0][1]=1×8+2×10+3×12=8+20+36=64; C[1][0]=4×7+5×9+6×11=28+45+66=139; C[1][1]=4×8+5×10+6×12=32+50+72=154" }
    ],
    explanation: "A multiplicação de matrizes requer um laço triplo. Para cada posição (i,j) da matriz resultado, somamos o produto dos elementos da linha i de A com a coluna j de B. O número de colunas de A deve ser igual ao número de linhas de B."
  },
  {
    id: 11,
    nivel: 4,
    title: "Jogo da Velha - Verificação",
    statement: "Leia uma matriz 3x3 representando um jogo da velha ('X', 'O', ' ') e verifique se há um vencedor (linha, coluna ou diagonal completa).",
    input: "X O X\\nO X O\\nX O X",
    output: "X venceu!",
    code: `programa {
  funcao inicio() {
    const inteiro TAMANHO = 3
    caracter tabuleiro[TAMANHO][TAMANHO]
    logico vencedor = falso
    caracter jogadorVencedor = ' '
    
    // Leitura do tabuleiro
    escreva("Digite o tabuleiro do jogo da velha:\\n")
    para (inteiro i = 0; i < TAMANHO; i++) {
      para (inteiro j = 0; j < TAMANHO; j++) {
        escreva("Posição [", i + 1, "][", j + 1, "]: ")
        leia(tabuleiro[i][j])
      }
    }
    
    // Verifica linhas
    para (inteiro i = 0; i < TAMANHO; i++) {
      se (tabuleiro[i][0] != ' ' e
          tabuleiro[i][0] == tabuleiro[i][1] e
          tabuleiro[i][1] == tabuleiro[i][2]) {
        vencedor = verdadeiro
        jogadorVencedor = tabuleiro[i][0]
      }
    }
    
    // Verifica colunas
    para (inteiro j = 0; j < TAMANHO; j++) {
      se (tabuleiro[0][j] != ' ' e
          tabuleiro[0][j] == tabuleiro[1][j] e
          tabuleiro[1][j] == tabuleiro[2][j]) {
        vencedor = verdadeiro
        jogadorVencedor = tabuleiro[0][j]
      }
    }
    
    // Verifica diagonal principal
    se (tabuleiro[0][0] != ' ' e
        tabuleiro[0][0] == tabuleiro[1][1] e
        tabuleiro[1][1] == tabuleiro[2][2]) {
      vencedor = verdadeiro
      jogadorVencedor = tabuleiro[0][0]
    }
    
    // Verifica diagonal secundária
    se (tabuleiro[0][2] != ' ' e
        tabuleiro[0][2] == tabuleiro[1][1] e
        tabuleiro[1][1] == tabuleiro[2][0]) {
      vencedor = verdadeiro
      jogadorVencedor = tabuleiro[0][2]
    }
    
    // Exibe resultado
    se (vencedor) {
      escreva(jogadorVencedor, " venceu!")
    } senao {
      escreva("Empate ou jogo incompleto!")
    }
  }
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
  const vetorText = getArraysText();
  
  return `
    <div class="content-card">
      <h2 class="card-title">📦 Vetores e Matrizes</h2>
      <p>Quando precisamos guardar vários valores do mesmo tipo, como as notas de uma turma ou os preços de uma lista de produtos, não é prático criar uma variável diferente para cada dado. Para isso usamos <strong>Vetores e Matrizes</strong>.</p>
      
      <div class="info-callout">
        <span class="info-icon-callout">📌</span>
        <div>
          <strong>Vetores</strong> permitem armazenar vários valores em uma única variável, organizados em posições numeradas.<br>
          <strong>Matrizes</strong> são como tabelas, com linhas e colunas, permitindo guardar dados em duas dimensões.
        </div>
      </div>
    </div>
    
    <div class="content-card">
      <h2 class="card-title">📊 Vetores</h2>
      <p>Guardar a nota de um aluno é simples: basta usar uma variável do tipo real. Mas como armazenar as notas de toda uma turma? Criar muitas variáveis deixaria o programa confuso e difícil de controlar.</p>
      <p>Para resolver isso, usamos uma estrutura de dados que agrupa vários valores em um único nome: o <strong>vetor</strong>. Um vetor pode ser entendido como uma variável com várias posições, onde cada posição guarda um valor do mesmo tipo.</p>
      
      <div class="code-example">
        <div class="code-example-header">
          <span class="code-icon">📝</span>
          <span>Sintaxe de declaração de vetores em ${langText}</span>
        </div>
        <pre><code>// Declaração de vetores
inteiro vetor[5]
caracter vetor2[200]

// Vetores inicializados
real vetor3[2] = {1.4, 2.5}
logico vetor4[4] = {verdadeiro, falso, verdadeiro, verdadeiro}
cadeia vetor5[] = {"Questão", "Fundamental"}

// Acessando elementos (índice começa em 0)
vetor5[0] = "Pergunta"  // Altera o primeiro elemento</code></pre>
      </div>
      
      <div class="info-callout">
        <span class="info-icon-callout">⚠️</span>
        <div>
          <strong>Importante:</strong> O índice do vetor começa em <strong>0</strong> (zero). Portanto, um vetor com 5 posições tem índices de 0 a 4.
        </div>
      </div>
      
      <div class="code-example">
        <div class="code-example-header">
          <span class="code-icon">📝</span>
          <span>Exemplo de uso de vetor</span>
        </div>
        <pre><code>programa {
  funcao inicio() {
    inteiro vetor[5] = {15, 22, 8, 10, 11}
    
    escreva(vetor[0])  // Imprime 15
    escreva(vetor[1])  // Imprime 22
    escreva(vetor[4])  // Imprime 11
  }
}</code></pre>
      </div>
    </div>
    
    <div class="content-card">
      <h2 class="card-title">📊 Matrizes</h2>
      <p>Um vetor nos ajuda a guardar vários valores, mas ele é linear (uma única linha de dados). Agora imagine que precisamos guardar as três notas de quatro alunos diferentes. Para esse tipo de situação existe uma estrutura mais adequada: a <strong>matriz</strong>.</p>
      <p>Uma matriz pode ser vista como um vetor com mais de uma dimensão (normalmente duas). Enquanto o vetor organiza os dados em uma linha, a matriz organiza em forma de tabela, com linhas e colunas.</p>
      
      <div class="code-example">
        <div class="code-example-header">
          <span class="code-icon">📝</span>
          <span>Sintaxe de declaração de matrizes em ${langText}</span>
        </div>
        <pre><code>// Declaração de uma matriz de números reais com 5 linhas e 3 colunas
real nome_da_variavel[5][3]

// Acessando um elemento (linha 0, coluna 1)
nome_da_variavel[0][1] = 2.5

// Matriz inicializada
inteiro matriz[2][2] = {{15, 22}, {10, 11}}

// Matriz de caracteres com inicialização
caracter jogo_velha[][] = {{'x', 'o', 'x'}, {'o', 'x', 'o'}, {' ', ' ', 'x'}}</code></pre>
      </div>
      
      <div class="code-example">
        <div class="code-example-header">
          <span class="code-icon">📝</span>
          <span>Exemplo de uso de matriz</span>
        </div>
        <pre><code>programa {
  funcao inicio() {
    inteiro matriz[2][2] = {{15, 22}, {10, 11}}
    
    matriz[0][1] = -1  // Altera elemento da linha 0, coluna 1
    
    escreva(matriz[0][0])  // Imprime 15
    escreva(matriz[1][1])  // Imprime 11
  }
}</code></pre>
      </div>
    </div>
    
    <div class="content-card">
      <h2 class="card-title">🔄 Percorrendo Vetores e Matrizes</h2>
      <p>Para percorrer todos os elementos de um vetor ou matriz, usamos <strong>laços de repetição</strong>.</p>
      
      <div class="code-example">
        <div class="code-example-header">
          <span class="code-icon">📝</span>
          <span>Percorrendo um vetor</span>
        </div>
        <pre><code>inteiro vetor[10]
para (inteiro i = 0; i < 10; i++) {
  vetor[i] = i + 1
  escreva(vetor[i])
}</code></pre>
      </div>
      
      <div class="code-example">
        <div class="code-example-header">
          <span class="code-icon">📝</span>
          <span>Percorrendo uma matriz (laços aninhados)</span>
        </div>
        <pre><code>inteiro matriz[3][4]
para (inteiro i = 0; i < 3; i++) {
  para (inteiro j = 0; j < 4; j++) {
    matriz[i][j] = i + j
    escreva(matriz[i][j], " ")
  }
  escreva("\\n")
}</code></pre>
      </div>
    </div>
    
    <div class="content-card">
      <h2 class="card-title">📋 Resumo</h2>
      <div class="operators-table">
        <div class="operator-row header">
          <div>Estrutura</div>
          <div>Descrição</div>
          <div>Acesso</div>
        </div>
        <div class="operator-row">
          <div><strong>Vetor</strong></div>
          <div>Lista linear de elementos do mesmo tipo</div>
          <div><code>vetor[indice]</code></div>
        </div>
        <div class="operator-row">
          <div><strong>Matriz</strong></div>
          <div>Tabela com linhas e colunas</div>
          <div><code>matriz[linha][coluna]</code></div>
        </div>
      </div>
      
      <div class="info-callout" style="margin-top: 1rem;">
        <span class="info-icon-callout">💡</span>
        <div>
          <strong>Dica do Professor:</strong> 
          <br>• Os índices sempre começam em <strong>0</strong>!
          <br>• Use laços <strong>PARA</strong> para percorrer vetores e matrizes
          <br>• Para matrizes, use <strong>laços aninhados</strong> (um para linhas, outro para colunas)
        </div>
      </div>
    </div>
  `;
}

// ========== RENDERIZAÇÃO DOS EXERCÍCIOS ==========
function renderExerciciosVetoresMatrizes() {
  // Usa os estados globais do main.js
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
        <span>📋 Exercícios de ${getArraysText()}</span>
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

// Função para renderizar a página completa
function renderArraysPage() {
  const langText = getArraysText();
  const currentSubpage = window.currentArraysSubpage || 'conceitos';
  
  return `
    <div class="page-header">
      <h1 class="page-title"><span>📊<span> ${langText}</h1>
      <p class="page-subtitle">Aprenda a trabalhar com conjuntos de dados usando vetores e matrizes em ${getLanguageDisplayName()}</p>
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