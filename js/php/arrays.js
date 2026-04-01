// ========== DADOS DOS EXERCÍCIOS DE ARRAYS E MATRIZES EM PHP ==========
const vetoresMatrizesExercises = [
  // NÍVEL 1 - VETORES BÁSICOS (exercícios 1-4)
  {
    id: 1,
    nivel: 1,
    title: "Soma de Elementos",
    statement: "Escreva um programa em PHP que leia 5 números inteiros, armazene em um array e calcule a soma de todos os elementos.",
    input: "5 números: 10, 20, 30, 40, 50",
    output: "Soma = 150",
    code: `<?php
$numeros = [];
$soma = 0;
for ($i = 0; $i < 5; $i++) {
    echo "Digite o " . ($i + 1) . "º número: ";
    $num = (int) trim(fgets(STDIN));
    $numeros[] = $num;
    $soma += $num;
}
echo "A soma dos elementos é: $soma\n";
?>`,
    testCases: [
      { values: { numeros: [10, 20, 30, 40, 50] }, result: 150, stepByStep: "soma = 0+10=10; +20=30; +30=60; +40=100; +50=150" }
    ],
    explanation: "Declaramos um array vazio e usamos `[]` para adicionar elementos. Um laço `for` acumula a soma."
  },
  {
    id: 2,
    nivel: 1,
    title: "Média das Notas",
    statement: "Crie um programa em PHP que leia as notas de 10 alunos, armazene em um array e calcule a média da turma.",
    input: "10 notas: 7.5, 8.0, 6.5, 9.0, 7.0, 8.5, 6.0, 9.5, 8.0, 7.0",
    output: "Média = 7.7",
    code: `<?php
$NUM_ALUNOS = 10;
$notas = [];
$soma = 0.0;
for ($i = 0; $i < $NUM_ALUNOS; $i++) {
    echo "Digite a nota do " . ($i + 1) . "º aluno: ";
    $nota = (float) trim(fgets(STDIN));
    $notas[] = $nota;
    $soma += $nota;
}
$media = $soma / $NUM_ALUNOS;
echo "A média da turma é: " . round($media, 2) . "\n";
?>`,
    testCases: [
      { values: { notas: [7.5, 8.0, 6.5, 9.0, 7.0, 8.5, 6.0, 9.5, 8.0, 7.0] }, result: 7.7, stepByStep: "soma = 77.0; média = 77.0 / 10 = 7.7" }
    ],
    explanation: "Criamos um array dinâmico para as notas, acumulamos a soma e depois dividimos pelo número de alunos."
  },
  {
    id: 3,
    nivel: 1,
    title: "Maior Valor",
    statement: "Desenvolva um algoritmo em PHP que encontre e mostre o maior valor em um array de 8 números reais.",
    input: "8 números: 15, 42, 8, 23, 56, 31, 19, 47",
    output: "Maior valor = 56",
    code: `<?php
$TAMANHO = 8;
$numeros = [];
for ($i = 0; $i < $TAMANHO; $i++) {
    echo "Digite o " . ($i + 1) . "º número: ";
    $num = (float) trim(fgets(STDIN));
    $numeros[] = $num;
}
$maior = max($numeros);
echo "O maior valor é: $maior\n";
?>`,
    testCases: [
      { values: { numeros: [15, 42, 8, 23, 56, 31, 19, 47] }, result: 56, stepByStep: "Usa função `max` do PHP." }
    ],
    explanation: "Usamos `max()` que retorna o maior valor do array."
  },
  {
    id: 4,
    nivel: 1,
    title: "Inversão de Array",
    statement: "Escreva um programa em PHP que leia 6 números e os exiba na ordem inversa à da leitura.",
    input: "6 números: 10, 20, 30, 40, 50, 60",
    output: "Ordem inversa: 60, 50, 40, 30, 20, 10",
    code: `<?php
$TAMANHO = 6;
$numeros = [];
for ($i = 0; $i < $TAMANHO; $i++) {
    echo "Digite o " . ($i + 1) . "º número: ";
    $num = (int) trim(fgets(STDIN));
    $numeros[] = $num;
}
echo "Ordem inversa:\n";
for ($i = $TAMANHO - 1; $i >= 0; $i--) {
    echo $numeros[$i] . "\n";
}
?>`,
    testCases: [
      { values: { numeros: [10, 20, 30, 40, 50, 60] }, result: "60, 50, 40, 30, 20, 10", stepByStep: "Percorre o array do último índice ao primeiro." }
    ],
    explanation: "Após preencher, percorremos de trás para frente usando índice decrescente."
  },

  // NÍVEL 2 - BUSCA E ESTATÍSTICAS (exercícios 5-7)
  {
    id: 5,
    nivel: 2,
    title: "Busca de Elemento",
    statement: "Desenvolva um algoritmo em PHP que leia um array de 15 números e verifique se um determinado valor existe, mostrando sua posição.",
    input: "Array: 1..15 | Buscar: 7",
    output: "Valor 7 encontrado na posição 6",
    code: `<?php
$TAMANHO = 15;
$numeros = [];
for ($i = 0; $i < $TAMANHO; $i++) {
    echo "Digite o " . ($i + 1) . "º número: ";
    $num = (int) trim(fgets(STDIN));
    $numeros[] = $num;
}
echo "Digite o valor a ser buscado: ";
$busca = (int) trim(fgets(STDIN));
$posicao = array_search($busca, $numeros);
if ($posicao !== false) {
    echo "Valor $busca encontrado na posição " . ($posicao + 1) . "\n";
} else {
    echo "Valor $busca não encontrado\n";
}
?>`,
    testCases: [
      { values: { numeros: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15], busca: 7 }, result: "posição 7", stepByStep: "Usa `array_search` para encontrar a posição." }
    ],
    explanation: "`array_search` retorna o índice do elemento ou `false` se não encontrado."
  },
  {
    id: 6,
    nivel: 2,
    title: "Estatísticas de Temperatura",
    statement: "Leia as temperaturas de uma semana (7 dias), armazene em um array e mostre: média, maior, menor e quantos dias ficaram acima da média.",
    input: "Temperaturas: 23, 25, 22, 28, 26, 24, 27",
    output: "Média: 25.0, Maior: 28, Menor: 22, Acima da média: 3 dias",
    code: `<?php
$DIAS = 7;
$temp = [];
$soma = 0.0;
for ($i = 0; $i < $DIAS; $i++) {
    echo "Temperatura do dia " . ($i + 1) . ": ";
    $t = (float) trim(fgets(STDIN));
    $temp[] = $t;
    $soma += $t;
}
$media = $soma / $DIAS;
$maior = max($temp);
$menor = min($temp);
$acima = 0;
foreach ($temp as $t) {
    if ($t > $media) $acima++;
}
echo "Média: " . round($media, 2) . "\n";
echo "Maior temperatura: $maior\n";
echo "Menor temperatura: $menor\n";
echo "Dias acima da média: $acima\n";
?>`,
    testCases: [
      { values: { temperaturas: [23, 25, 22, 28, 26, 24, 27] }, result: "media=25, maior=28, menor=22, acima=3", stepByStep: "Soma=175, média=25; >25: 28,26,27 = 3 dias" }
    ],
    explanation: "Usamos `max()`, `min()` e `foreach` para contar acima da média."
  },
  {
    id: 7,
    nivel: 2,
    title: "Crivo de Eratóstenes",
    statement: "Implemente o Crivo de Eratóstenes usando um array para encontrar todos os números primos até N.",
    input: "N = 30",
    output: "Primos: 2, 3, 5, 7, 11, 13, 17, 19, 23, 29",
    code: `<?php
echo "Informe o valor de N: ";
$n = (int) trim(fgets(STDIN));
$ehPrimo = array_fill(0, $n + 1, true);
$ehPrimo[0] = $ehPrimo[1] = false;
$limite = (int) sqrt($n);
for ($i = 2; $i <= $limite; $i++) {
    if ($ehPrimo[$i]) {
        for ($j = $i * $i; $j <= $n; $j += $i) {
            $ehPrimo[$j] = false;
        }
    }
}
$primos = [];
for ($i = 2; $i <= $n; $i++) {
    if ($ehPrimo[$i]) $primos[] = $i;
}
echo "Números primos até $n: " . implode(", ", $primos) . "\n";
?>`,
    testCases: [
      { values: { n: 30 }, result: "2, 3, 5, 7, 11, 13, 17, 19, 23, 29", stepByStep: "Marca todos como primo; remove múltiplos de 2,3,5; restam apenas primos" }
    ],
    explanation: "Criamos um array booleano com `array_fill` e aplicamos o algoritmo."
  },

  // NÍVEL 3 - MATRIZES (exercícios 8-10)
  {
    id: 8,
    nivel: 3,
    title: "Matriz Identidade",
    statement: "Crie uma matriz 3x3 onde os elementos da diagonal principal são 1 e os demais são 0.",
    input: "Nenhuma entrada",
    output: "1 0 0\\n0 1 0\\n0 0 1",
    code: `<?php
$TAMANHO = 3;
$matriz = [];
for ($i = 0; $i < $TAMANHO; $i++) {
    $linha = [];
    for ($j = 0; $j < $TAMANHO; $j++) {
        $linha[] = ($i == $j) ? 1 : 0;
    }
    $matriz[] = $linha;
}
echo "Matriz Identidade 3x3:\n";
foreach ($matriz as $linha) {
    echo implode(" ", $linha) . "\n";
}
?>`,
    testCases: [
      { values: {}, result: "1 0 0\\n0 1 0\\n0 0 1", stepByStep: "i=j → 1; i≠j → 0" }
    ],
    explanation: "Criamos uma matriz de arrays, preenchendo a diagonal principal com 1."
  },
  {
    id: 9,
    nivel: 3,
    title: "Soma de Matrizes",
    statement: "Crie um programa em PHP que some duas matrizes 2x3. Leia os valores de ambas as matrizes e mostre a matriz resultante.",
    input: "Matriz A: [[1,2,3],[4,5,6]]; Matriz B: [[7,8,9],[10,11,12]]",
    output: "Matriz Soma: [[8,10,12],[14,16,18]]",
    code: `<?php
function lerMatriz($linhas, $colunas, $nome) {
    $matriz = [];
    for ($i = 0; $i < $linhas; $i++) {
        $linha = [];
        for ($j = 0; $j < $colunas; $j++) {
            echo "$nome[$i+1][$j+1]: ";
            $val = (int) trim(fgets(STDIN));
            $linha[] = $val;
        }
        $matriz[] = $linha;
    }
    return $matriz;
}
$LINHAS = 2;
$COLUNAS = 3;
echo "=== MATRIZ A ===\n";
$a = lerMatriz($LINHAS, $COLUNAS, "A");
echo "=== MATRIZ B ===\n";
$b = lerMatriz($LINHAS, $COLUNAS, "B");
$c = [];
for ($i = 0; $i < $LINHAS; $i++) {
    $linha = [];
    for ($j = 0; $j < $COLUNAS; $j++) {
        $linha[] = $a[$i][$j] + $b[$i][$j];
    }
    $c[] = $linha;
}
echo "=== MATRIZ SOMA ===\n";
foreach ($c as $linha) {
    echo implode(" ", $linha) . "\n";
}
?>`,
    testCases: [
      { values: { A: [[1,2,3],[4,5,6]], B: [[7,8,9],[10,11,12]] }, result: "[[8,10,12],[14,16,18]]", stepByStep: "C[i][j] = A[i][j] + B[i][j]" }
    ],
    explanation: "Usamos arrays bidimensionais (array de arrays) e somamos elemento a elemento."
  },
  {
    id: 10,
    nivel: 3,
    title: "Multiplicação de Matrizes",
    statement: "Desenvolva um programa em PHP que multiplique duas matrizes. Leia uma matriz A (2x3) e B (3x2), calcule e mostre a matriz resultante C (2x2).",
    input: "A: [[1,2,3],[4,5,6]]; B: [[7,8],[9,10],[11,12]]",
    output: "C: [[58,64],[139,154]]",
    code: `<?php
function lerMatriz($linhas, $colunas, $nome) {
    $matriz = [];
    for ($i = 0; $i < $linhas; $i++) {
        $linha = [];
        for ($j = 0; $j < $colunas; $j++) {
            echo "$nome[$i+1][$j+1]: ";
            $val = (int) trim(fgets(STDIN));
            $linha[] = $val;
        }
        $matriz[] = $linha;
    }
    return $matriz;
}
$LINHAS_A = 2;
$COLUNAS_A = 3;
$LINHAS_B = 3;
$COLUNAS_B = 2;
echo "=== MATRIZ A (2x3) ===\n";
$a = lerMatriz($LINHAS_A, $COLUNAS_A, "A");
echo "=== MATRIZ B (3x2) ===\n";
$b = lerMatriz($LINHAS_B, $COLUNAS_B, "B");
$c = array_fill(0, $LINHAS_A, array_fill(0, $COLUNAS_B, 0));
for ($i = 0; $i < $LINHAS_A; $i++) {
    for ($j = 0; $j < $COLUNAS_B; $j++) {
        for ($k = 0; $k < $COLUNAS_A; $k++) {
            $c[$i][$j] += $a[$i][$k] * $b[$k][$j];
        }
    }
}
echo "=== MATRIZ RESULTADO C (2x2) ===\n";
foreach ($c as $linha) {
    echo implode(" ", $linha) . "\n";
}
?>`,
    testCases: [
      { values: { A: [[1,2,3],[4,5,6]], B: [[7,8],[9,10],[11,12]] }, result: "[[58,64],[139,154]]", stepByStep: "C[0][0] = 1×7+2×9+3×11=58; C[0][1]=1×8+2×10+3×12=64; C[1][0]=4×7+5×9+6×11=139; C[1][1]=4×8+5×10+6×12=154" }
    ],
    explanation: "Multiplicação com laço triplo; matrizes como arrays de arrays."
  },
  {
    id: 11,
    nivel: 4,
    title: "Jogo da Velha - Verificação",
    statement: "Leia uma matriz 3x3 representando um jogo da velha ('X', 'O', ' ') e verifique se há um vencedor.",
    input: "X O X\\nO X O\\nX O X",
    output: "X venceu!",
    code: `<?php
$TAMANHO = 3;
$tabuleiro = [];
echo "Digite o tabuleiro do jogo da velha:\n";
for ($i = 0; $i < $TAMANHO; $i++) {
    $linha = [];
    for ($j = 0; $j < $TAMANHO; $j++) {
        echo "Posição [$i+1][$j+1]: ";
        $linha[] = trim(fgets(STDIN));
    }
    $tabuleiro[] = $linha;
}
$vencedor = false;
$jogador = ' ';
// Linhas
for ($i = 0; $i < $TAMANHO; $i++) {
    if ($tabuleiro[$i][0] != ' ' &&
        $tabuleiro[$i][0] == $tabuleiro[$i][1] &&
        $tabuleiro[$i][1] == $tabuleiro[$i][2]) {
        $vencedor = true;
        $jogador = $tabuleiro[$i][0];
    }
}
// Colunas
for ($j = 0; $j < $TAMANHO; $j++) {
    if ($tabuleiro[0][$j] != ' ' &&
        $tabuleiro[0][$j] == $tabuleiro[1][$j] &&
        $tabuleiro[1][$j] == $tabuleiro[2][$j]) {
        $vencedor = true;
        $jogador = $tabuleiro[0][$j];
    }
}
// Diagonal principal
if ($tabuleiro[0][0] != ' ' &&
    $tabuleiro[0][0] == $tabuleiro[1][1] &&
    $tabuleiro[1][1] == $tabuleiro[2][2]) {
    $vencedor = true;
    $jogador = $tabuleiro[0][0];
}
// Diagonal secundária
if ($tabuleiro[0][2] != ' ' &&
    $tabuleiro[0][2] == $tabuleiro[1][1] &&
    $tabuleiro[1][1] == $tabuleiro[2][0]) {
    $vencedor = true;
    $jogador = $tabuleiro[0][2];
}
if ($vencedor) {
    echo "$jogador venceu!\n";
} else {
    echo "Empate ou jogo incompleto!\n";
}
?>`,
    testCases: [
      { values: { tabuleiro: [['X','O','X'],['O','X','O'],['X','O','X']] }, result: "X venceu!", stepByStep: "Diagonal principal com X: posições (0,0),(1,1),(2,2) são X" }
    ],
    explanation: "Testa todas as combinações possíveis de vitória."
  }
];

// ========== RENDERIZAÇÃO DOS CONCEITOS ==========
function renderConceitosVetoresMatrizes() {
  const langText = getLanguageDisplayName();
  
  return `
    <div class="content-card">
      <h2 class="card-title">📦 Arrays e Matrizes em PHP</h2>
      <p>Em PHP, arrays são estruturas muito versáteis. Podem ser indexados numericamente ou associativos, e podem conter elementos de diferentes tipos. Para matrizes, usamos arrays de arrays.</p>
      
      <div class="info-callout">
        <span class="info-icon-callout">📌</span>
        <div>
          <strong>Arrays indexados</strong>: criados com <code>[]</code> ou <code>array()</code>.<br>
          <strong>Arrays associativos</strong>: com chaves nomeadas.<br>
          <strong>Matrizes</strong>: arrays de arrays.<br>
          <strong>Funções úteis</strong>: <code>count()</code>, <code>array_push()</code>, <code>array_pop()</code>, <code>array_sum()</code>, <code>max()</code>, <code>min()</code>, <code>implode()</code>, <code>array_search()</code>.
        </div>
      </div>
      
      <div class="code-example">
        <div class="code-example-header">
          <span class="code-icon">📝</span>
          <span>Criando arrays</span>
        </div>
        <pre><code>// Array vazio
$arr = [];

// Array com valores
$numeros = [1, 2, 3, 4, 5];

// Array associativo
$pessoa = ["nome" => "João", "idade" => 25];

// Matriz 2x3
$matriz = [
    [1, 2, 3],
    [4, 5, 6]
];</code></pre>
      </div>
    </div>
    
    <div class="content-card">
      <h2 class="card-title">📊 Operações com Arrays</h2>
      <div class="code-example">
        <div class="code-example-header">
          <span class="code-icon">📝</span>
          <span>Acessando elementos</span>
        </div>
        <pre><code>$vetor = [15, 22, 8, 10, 11];
echo $vetor[0];   // 15
echo $vetor[1];   // 22
echo $vetor[4];   // 11
echo $vetor[count($vetor)-1]; // último</code></pre>
      </div>
      <div class="code-example">
        <div class="code-example-header">
          <span class="code-icon">📝</span>
          <span>Adicionando e removendo</span>
        </div>
        <pre><code>$vetor[] = 6;        // adiciona no final
array_push($vetor, 7); // também adiciona
$ultimo = array_pop($vetor);   // remove e retorna o último
$primeiro = array_shift($vetor); // remove e retorna o primeiro</code></pre>
      </div>
      <div class="code-example">
        <div class="code-example-header">
          <span class="code-icon">📝</span>
          <span>Iteração</span>
        </div>
        <pre><code>foreach ($vetor as $valor) {
    echo $valor;
}
// Com índice
foreach ($vetor as $indice => $valor) {
    echo "índice $indice: $valor\n";
}</code></pre>
      </div>
    </div>
    
    <div class="content-card">
      <h2 class="card-title">📊 Matrizes em PHP</h2>
      <div class="code-example">
        <div class="code-example-header">
          <span class="code-icon">📝</span>
          <span>Criando e acessando matrizes</span>
        </div>
        <pre><code>$matriz = [
    [1, 2, 3],
    [4, 5, 6]
];
echo $matriz[0][1]; // 2 (linha 0, coluna 1)

// Percorrendo
foreach ($matriz as $linha) {
    foreach ($linha as $valor) {
        echo "$valor ";
    }
    echo "\n";
}</code></pre>
      </div>
    </div>
    
    <div class="content-card">
      <h2 class="card-title">💡 Dicas Importantes</h2>
      <div class="info-callout">
        <span class="info-icon-callout">⚠️</span>
        <div>
          • Índices começam em <strong>0</strong>.<br>
          • Use <code>count($array)</code> para obter o tamanho.<br>
          • Para verificar se um valor existe, use <code>in_array()</code>.<br>
          • Para ordenar arrays, existem várias funções: <code>sort()</code>, <code>rsort()</code>, <code>asort()</code>, etc.<br>
          • Em PHP, arrays são passados por cópia por padrão; para passar por referência, use <code>&</code>.
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
        <span>📋 Exercícios de Arrays e Matrizes (PHP)</span>
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