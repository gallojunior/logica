// ========== DADOS DOS EXERCÍCIOS DE VETORES E MATRIZES EM R ==========
const vetoresMatrizesExercises = [
  // NÍVEL 1 - VETORES BÁSICOS (exercícios 1-4)
  {
    id: 1,
    nivel: 1,
    title: "Soma de Elementos",
    statement: "Escreva um programa em R que leia 5 números inteiros, armazene em um vetor e calcule a soma de todos os elementos.",
    input: "5 números: 10, 20, 30, 40, 50",
    output: "Soma = 150",
    code: `# Soma de elementos de um vetor
numeros <- numeric(5)
soma <- 0
for (i in 1:5) {
    cat("Digite o", i, "º número: ")
    numeros[i] <- as.numeric(readline())
    soma <- soma + numeros[i]
}
cat("A soma dos elementos é:", soma, "\n")`,
    testCases: [
      { values: { numeros: [10, 20, 30, 40, 50] }, result: 150, stepByStep: "soma = 0+10=10; +20=30; +30=60; +40=100; +50=150" }
    ],
    explanation: "Declaramos um vetor com `numeric(5)`. Usamos um laço `for` para preencher cada posição e acumular a soma."
  },
  {
    id: 2,
    nivel: 1,
    title: "Média das Notas",
    statement: "Crie um programa em R que leia as notas de 10 alunos, armazene em um vetor e calcule a média da turma.",
    input: "10 notas: 7.5, 8.0, 6.5, 9.0, 7.0, 8.5, 6.0, 9.5, 8.0, 7.0",
    output: "Média = 7.7",
    code: `# Média das notas
NUM_ALUNOS <- 10
notas <- numeric(NUM_ALUNOS)
soma <- 0.0
for (i in 1:NUM_ALUNOS) {
    cat("Digite a nota do", i, "º aluno: ")
    notas[i] <- as.numeric(readline())
    soma <- soma + notas[i]
}
media <- soma / NUM_ALUNOS
cat("A média da turma é:", round(media, 2), "\n")`,
    testCases: [
      { values: { notas: [7.5, 8.0, 6.5, 9.0, 7.0, 8.5, 6.0, 9.5, 8.0, 7.0] }, result: 7.7, stepByStep: "soma = 77.0; média = 77.0 / 10 = 7.7" }
    ],
    explanation: "Criamos um vetor para armazenar as notas, acumulamos a soma e dividimos pelo número de alunos."
  },
  {
    id: 3,
    nivel: 1,
    title: "Maior Valor",
    statement: "Desenvolva um algoritmo em R que encontre e mostre o maior valor em um vetor de 8 números reais.",
    input: "8 números: 15, 42, 8, 23, 56, 31, 19, 47",
    output: "Maior valor = 56",
    code: `# Encontrar o maior valor
TAMANHO <- 8
numeros <- numeric(TAMANHO)
for (i in 1:TAMANHO) {
    cat("Digite o", i, "º número: ")
    numeros[i] <- as.numeric(readline())
}
maior <- max(numeros)
cat("O maior valor é:", maior, "\n")`,
    testCases: [
      { values: { numeros: [15, 42, 8, 23, 56, 31, 19, 47] }, result: 56, stepByStep: "Usa função `max` do R." }
    ],
    explanation: "Armazenamos os números e usamos a função `max` para obter o maior."
  },
  {
    id: 4,
    nivel: 1,
    title: "Inversão de Vetor",
    statement: "Escreva um programa em R que leia 6 números e os exiba na ordem inversa à da leitura.",
    input: "6 números: 10, 20, 30, 40, 50, 60",
    output: "Ordem inversa: 60, 50, 40, 30, 20, 10",
    code: `# Inversão de vetor
TAMANHO <- 6
numeros <- numeric(TAMANHO)
for (i in 1:TAMANHO) {
    cat("Digite o", i, "º número: ")
    numeros[i] <- as.numeric(readline())
}
cat("Ordem inversa:\n")
for (i in TAMANHO:1) {
    cat(numeros[i], "\n")
}`,
    testCases: [
      { values: { numeros: [10, 20, 30, 40, 50, 60] }, result: "60, 50, 40, 30, 20, 10", stepByStep: "Percorre o vetor do último índice ao primeiro." }
    ],
    explanation: "Após preencher, percorremos de trás para frente usando um laço `for` decrescente."
  },

  // NÍVEL 2 - BUSCA E ESTATÍSTICAS (exercícios 5-7)
  {
    id: 5,
    nivel: 2,
    title: "Busca de Elemento",
    statement: "Desenvolva um algoritmo em R que leia um vetor de 15 números e verifique se um determinado valor existe, mostrando sua posição.",
    input: "Vetor: 1..15 | Buscar: 7",
    output: "Valor 7 encontrado na posição 6",
    code: `# Busca de elemento
TAMANHO <- 15
numeros <- numeric(TAMANHO)
for (i in 1:TAMANHO) {
    cat("Digite o", i, "º número: ")
    numeros[i] <- as.numeric(readline())
}
cat("Digite o valor a ser buscado: ")
busca <- as.numeric(readline())
posicao <- which(numeros == busca)
if (length(posicao) > 0) {
    cat("Valor", busca, "encontrado na posição", posicao[1], "\n")
} else {
    cat("Valor", busca, "não encontrado\n")
}`,
    testCases: [
      { values: { numeros: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15], busca: 7 }, result: "posição 7", stepByStep: "Usa `which` para encontrar a posição." }
    ],
    explanation: "`which(numeros == busca)` retorna um vetor com os índices onde a condição é verdadeira."
  },
  {
    id: 6,
    nivel: 2,
    title: "Estatísticas de Temperatura",
    statement: "Leia as temperaturas de uma semana (7 dias), armazene em um vetor e mostre: média, maior, menor e quantos dias ficaram acima da média.",
    input: "Temperaturas: 23, 25, 22, 28, 26, 24, 27",
    output: "Média: 25.0, Maior: 28, Menor: 22, Acima da média: 3 dias",
    code: `# Estatísticas de temperatura
DIAS <- 7
temp <- numeric(DIAS)
soma <- 0.0
for (i in 1:DIAS) {
    cat("Temperatura do dia", i, ": ")
    temp[i] <- as.numeric(readline())
    soma <- soma + temp[i]
}
media <- soma / DIAS
maior <- max(temp)
menor <- min(temp)
acima <- sum(temp > media)
cat("Média:", round(media, 2), "\n")
cat("Maior temperatura:", maior, "\n")
cat("Menor temperatura:", menor, "\n")
cat("Dias acima da média:", acima, "\n")`,
    testCases: [
      { values: { temperaturas: [23, 25, 22, 28, 26, 24, 27] }, result: "media=25, maior=28, menor=22, acima=3", stepByStep: "Soma=175, média=25; >25: 28,26,27 = 3 dias" }
    ],
    explanation: "Usamos `max`, `min` e `sum(temp > media)` para contar os acima da média."
  },
  {
    id: 7,
    nivel: 2,
    title: "Crivo de Eratóstenes",
    statement: "Implemente o Crivo de Eratóstenes usando um vetor para encontrar todos os números primos até N.",
    input: "N = 30",
    output: "Primos: 2, 3, 5, 7, 11, 13, 17, 19, 23, 29",
    code: `# Crivo de Eratóstenes
cat("Informe o valor de N: ")
n <- as.integer(readline())
eh_primo <- rep(TRUE, n+1)
eh_primo[1] <- FALSE
if (n >= 1) eh_primo[1] <- FALSE
for (i in 2:floor(sqrt(n))) {
    if (eh_primo[i]) {
        eh_primo[seq(i^2, n, by = i)] <- FALSE
    }
}
primos <- (2:n)[eh_primo[2:n]]
cat("Números primos até", n, ":", paste(primos, collapse = ", "), "\n")`,
    testCases: [
      { values: { n: 30 }, result: "2, 3, 5, 7, 11, 13, 17, 19, 23, 29", stepByStep: "Marca todos como TRUE; remove múltiplos de 2,3,5; restam primos." }
    ],
    explanation: "Criamos um vetor lógico com `rep(TRUE, n+1)` e aplicamos o algoritmo."
  },

  // NÍVEL 3 - MATRIZES (exercícios 8-10)
  {
    id: 8,
    nivel: 3,
    title: "Matriz Identidade",
    statement: "Crie uma matriz 3x3 onde os elementos da diagonal principal são 1 e os demais são 0.",
    input: "Nenhuma entrada",
    output: "1 0 0\\n0 1 0\\n0 0 1",
    code: `# Matriz identidade
TAMANHO <- 3
matriz <- diag(TAMANHO)
cat("Matriz Identidade 3x3:\n")
for (i in 1:TAMANHO) {
    cat(matriz[i, ], "\n")
}`,
    testCases: [
      { values: {}, result: "1 0 0\\n0 1 0\\n0 0 1", stepByStep: "`diag(3)` cria matriz identidade." }
    ],
    explanation: "A função `diag(n)` cria uma matriz identidade de dimensão n."
  },
  {
    id: 9,
    nivel: 3,
    title: "Soma de Matrizes",
    statement: "Crie um programa em R que some duas matrizes 2x3. Leia os valores de ambas as matrizes e mostre a matriz resultante.",
    input: "Matriz A: [[1,2,3],[4,5,6]]; Matriz B: [[7,8,9],[10,11,12]]",
    output: "Matriz Soma: [[8,10,12],[14,16,18]]",
    code: `# Soma de matrizes
ler_matriz <- function(linhas, colunas, nome) {
    mat <- matrix(0, nrow = linhas, ncol = colunas)
    for (i in 1:linhas) {
        for (j in 1:colunas) {
            cat(nome, "[", i, "][", j, "]: ", sep = "")
            mat[i, j] <- as.numeric(readline())
        }
    }
    return(mat)
}
LINHAS <- 2
COLUNAS <- 3
cat("=== MATRIZ A ===\n")
a <- ler_matriz(LINHAS, COLUNAS, "A")
cat("=== MATRIZ B ===\n")
b <- ler_matriz(LINHAS, COLUNAS, "B")
c <- a + b
cat("=== MATRIZ SOMA ===\n")
print(c)`,
    testCases: [
      { values: { A: [[1,2,3],[4,5,6]], B: [[7,8,9],[10,11,12]] }, result: "[[8,10,12],[14,16,18]]", stepByStep: "C[i,j] = A[i,j] + B[i,j]" }
    ],
    explanation: "Usamos `matrix` e a adição é feita elemento a elemento."
  },
  {
    id: 10,
    nivel: 3,
    title: "Multiplicação de Matrizes",
    statement: "Desenvolva um programa em R que multiplique duas matrizes. Leia uma matriz A (2x3) e B (3x2), calcule e mostre a matriz resultante C (2x2).",
    input: "A: [[1,2,3],[4,5,6]]; B: [[7,8],[9,10],[11,12]]",
    output: "C: [[58,64],[139,154]]",
    code: `# Multiplicação de matrizes
ler_matriz <- function(linhas, colunas, nome) {
    mat <- matrix(0, nrow = linhas, ncol = colunas)
    for (i in 1:linhas) {
        for (j in 1:colunas) {
            cat(nome, "[", i, "][", j, "]: ", sep = "")
            mat[i, j] <- as.numeric(readline())
        }
    }
    return(mat)
}
LINHAS_A <- 2
COLUNAS_A <- 3
LINHAS_B <- 3
COLUNAS_B <- 2
cat("=== MATRIZ A (2x3) ===\n")
a <- ler_matriz(LINHAS_A, COLUNAS_A, "A")
cat("=== MATRIZ B (3x2) ===\n")
b <- ler_matriz(LINHAS_B, COLUNAS_B, "B")
c <- a %*% b
cat("=== MATRIZ RESULTADO C (2x2) ===\n")
print(c)`,
    testCases: [
      { values: { A: [[1,2,3],[4,5,6]], B: [[7,8],[9,10],[11,12]] }, result: "[[58,64],[139,154]]", stepByStep: "Usa operador `%*%` para multiplicação matricial." }
    ],
    explanation: "Em R, a multiplicação de matrizes é feita com o operador `%*%`."
  },
  {
    id: 11,
    nivel: 4,
    title: "Jogo da Velha - Verificação",
    statement: "Leia uma matriz 3x3 representando um jogo da velha ('X', 'O', ' ') e verifique se há um vencedor.",
    input: "X O X\\nO X O\\nX O X",
    output: "X venceu!",
    code: `# Verificação do Jogo da Velha
TAMANHO <- 3
tabuleiro <- matrix(" ", nrow = TAMANHO, ncol = TAMANHO)
for (i in 1:TAMANHO) {
    for (j in 1:TAMANHO) {
        cat("Posição [", i, "][", j, "]: ", sep = "")
        tabuleiro[i, j] <- readline()
    }
}
vencedor <- FALSE
jogador <- " "
# Linhas
for (i in 1:TAMANHO) {
    if (tabuleiro[i,1] != " " &&
        tabuleiro[i,1] == tabuleiro[i,2] &&
        tabuleiro[i,2] == tabuleiro[i,3]) {
        vencedor <- TRUE
        jogador <- tabuleiro[i,1]
    }
}
# Colunas
for (j in 1:TAMANHO) {
    if (tabuleiro[1,j] != " " &&
        tabuleiro[1,j] == tabuleiro[2,j] &&
        tabuleiro[2,j] == tabuleiro[3,j]) {
        vencedor <- TRUE
        jogador <- tabuleiro[1,j]
    }
}
# Diagonal principal
if (tabuleiro[1,1] != " " &&
    tabuleiro[1,1] == tabuleiro[2,2] &&
    tabuleiro[2,2] == tabuleiro[3,3]) {
    vencedor <- TRUE
    jogador <- tabuleiro[1,1]
}
# Diagonal secundária
if (tabuleiro[1,3] != " " &&
    tabuleiro[1,3] == tabuleiro[2,2] &&
    tabuleiro[2,2] == tabuleiro[3,1]) {
    vencedor <- TRUE
    jogador <- tabuleiro[1,3]
}
if (vencedor) {
    cat(jogador, "venceu!\n")
} else {
    cat("Empate ou jogo incompleto!\n")
}`,
    testCases: [
      { values: { tabuleiro: [['X','O','X'],['O','X','O'],['X','O','X']] }, result: "X venceu!", stepByStep: "Diagonal principal com X: posições (1,1),(2,2),(3,3) são X" }
    ],
    explanation: "Testa todas as combinações possíveis de vitória usando condicionais."
  }
];

// ========== RENDERIZAÇÃO DOS CONCEITOS ==========
function renderConceitosVetoresMatrizes() {
  const langText = getLanguageDisplayName();
  
  return `
    <div class="content-card">
      <h2 class="card-title">📦 Vetores e Matrizes em R</h2>
      <p>Em R, as estruturas principais para conjuntos de dados são <strong>vetores</strong> e <strong>matrizes</strong>. Vetores são sequências unidimensionais, e matrizes são vetores com dimensões (linhas e colunas).</p>
      
      <div class="info-callout">
        <span class="info-icon-callout">📌</span>
        <div>
          <strong>Vetores</strong>: criados com <code>c()</code>, <code>vector()</code> ou <code>numeric()</code>.<br>
          <strong>Matrizes</strong>: criadas com <code>matrix()</code>, <code>rbind()</code> ou <code>cbind()</code>.<br>
          <strong>Operações vetorizadas</strong>: a maioria das funções opera em vetores inteiros.
        </div>
      </div>
      
      <div class="code-example">
        <div class="code-example-header">
          <span class="code-icon">📝</span>
          <span>Criando vetores e matrizes</span>
        </div>
        <pre><code># Vetores
v <- c(1, 2, 3, 4, 5)
v <- 1:5                  # sequência
v <- numeric(10)          # vetor de zeros

# Matrizes
m <- matrix(1:6, nrow = 2, ncol = 3)  # 2x3, preenchimento por coluna
m <- matrix(1:6, nrow = 2, ncol = 3, byrow = TRUE)

# Acesso
v[3]          # terceiro elemento
m[2, 1]       # linha 2, coluna 1
m[, 2]        # segunda coluna
m[1, ]        # primeira linha</code></pre>
      </div>
    </div>
    
    <div class="content-card">
      <h2 class="card-title">📊 Operações com Vetores</h2>
      <div class="code-example">
        <div class="code-example-header">
          <span class="code-icon">📝</span>
          <span>Funções úteis</span>
        </div>
        <pre><code>sum(v)      # soma
mean(v)     # média
max(v)      # maior
min(v)      # menor
length(v)   # tamanho
which(v > 5) # índices onde condição é verdadeira</code></pre>
      </div>
    </div>
    
    <div class="content-card">
      <h2 class="card-title">📊 Matrizes</h2>
      <div class="code-example">
        <div class="code-example-header">
          <span class="code-icon">📝</span>
          <span>Operações matriciais</span>
        </div>
        <pre><code>m1 + m2            # soma elemento a elemento
m1 %*% m2          # multiplicação matricial
t(m)               # transposta
diag(n)            # matriz identidade n x n
solve(m)           # inversa (se existir)</code></pre>
      </div>
    </div>
    
    <div class="content-card">
      <h2 class="card-title">🔄 Percorrendo Vetores e Matrizes</h2>
      <div class="code-example">
        <div class="code-example-header">
          <span class="code-icon">📝</span>
          <span>Laços for</span>
        </div>
        <pre><code># Vetor
for (i in 1:length(v)) {
    cat(v[i], " ")
}
# Matriz
for (i in 1:nrow(m)) {
    for (j in 1:ncol(m)) {
        cat(m[i, j], " ")
    }
    cat("\n")
}</code></pre>
      </div>
    </div>
    
    <div class="content-card">
      <h2 class="card-title">💡 Dicas Importantes</h2>
      <div class="info-callout">
        <span class="info-icon-callout">⚠️</span>
        <div>
          • Os índices em R começam em <strong>1</strong> (diferente da maioria das linguagens).<br>
          • Use <code>c()</code> para combinar elementos em um vetor.<br>
          • Operações com vetores são vetorizadas, o que as torna muito eficientes.<br>
          • Para matrizes, use <code>nrow()</code> e <code>ncol()</code> para obter as dimensões.<br>
          • R permite indexação por nome se a matriz tiver nomes de linhas/colunas.
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
        <span>📋 Exercícios de Vetores e Matrizes (R)</span>
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

// ========== PÁGINA COMPLETA DE VETORES E MATRIZES ==========
function renderArraysPage() {
  const currentSubpage = window.currentArraysSubpage || 'conceitos';
  
  return `
    <div class="page-header">
      <h1 class="page-title"><span>📊</span> ${getArraysText()}</h1>
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