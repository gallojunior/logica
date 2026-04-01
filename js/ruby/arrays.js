// ========== DADOS DOS EXERCÍCIOS DE ARRAYS E MATRIZES EM RUBY ==========
const vetoresMatrizesExercises = [
  // NÍVEL 1 - VETORES BÁSICOS (exercícios 1-4)
  {
    id: 1,
    nivel: 1,
    title: "Soma de Elementos",
    statement: "Escreva um programa em Ruby que leia 5 números inteiros, armazene em um array e calcule a soma de todos os elementos.",
    input: "5 números: 10, 20, 30, 40, 50",
    output: "Soma = 150",
    code: `# Soma de elementos
numeros = []
soma = 0
(1..5).each do |i|
  print "Digite o #{i}º número: "
  num = gets.chomp.to_i
  numeros << num
  soma += num
end
puts "A soma dos elementos é: #{soma}"`,
    testCases: [
      { values: { numeros: [10, 20, 30, 40, 50] }, result: 150, stepByStep: "soma = 0+10=10; +20=30; +30=60; +40=100; +50=150" }
    ],
    explanation: "Declaramos um array vazio e usamos `<<` para adicionar elementos. Um laço `each` acumula a soma."
  },
  {
    id: 2,
    nivel: 1,
    title: "Média das Notas",
    statement: "Crie um programa em Ruby que leia as notas de 10 alunos, armazene em um array e calcule a média da turma.",
    input: "10 notas: 7.5, 8.0, 6.5, 9.0, 7.0, 8.5, 6.0, 9.5, 8.0, 7.0",
    output: "Média = 7.7",
    code: `# Média das notas
NUM_ALUNOS = 10
notas = []
soma = 0.0
(1..NUM_ALUNOS).each do |i|
  print "Digite a nota do #{i}º aluno: "
  nota = gets.chomp.to_f
  notas << nota
  soma += nota
end
media = soma / NUM_ALUNOS
puts "A média da turma é: %.2f" % media`,
    testCases: [
      { values: { notas: [7.5, 8.0, 6.5, 9.0, 7.0, 8.5, 6.0, 9.5, 8.0, 7.0] }, result: 7.7, stepByStep: "soma = 77.0; média = 77.0 / 10 = 7.7" }
    ],
    explanation: "Criamos um array dinâmico para as notas, acumulamos a soma e depois dividimos pelo número de alunos."
  },
  {
    id: 3,
    nivel: 1,
    title: "Maior Valor",
    statement: "Desenvolva um algoritmo em Ruby que encontre e mostre o maior valor em um array de 8 números reais.",
    input: "8 números: 15, 42, 8, 23, 56, 31, 19, 47",
    output: "Maior valor = 56",
    code: `# Encontrar o maior valor
TAMANHO = 8
numeros = []
(1..TAMANHO).each do |i|
  print "Digite o #{i}º número: "
  num = gets.chomp.to_f
  numeros << num
end
maior = numeros.max
puts "O maior valor é: #{maior}"`,
    testCases: [
      { values: { numeros: [15, 42, 8, 23, 56, 31, 19, 47] }, result: 56, stepByStep: "Usa método `max` do array." }
    ],
    explanation: "Inicializamos o array, depois usamos `max` para obter o maior valor."
  },
  {
    id: 4,
    nivel: 1,
    title: "Inversão de Array",
    statement: "Escreva um programa em Ruby que leia 6 números e os exiba na ordem inversa à da leitura.",
    input: "6 números: 10, 20, 30, 40, 50, 60",
    output: "Ordem inversa: 60, 50, 40, 30, 20, 10",
    code: `# Inversão de array
TAMANHO = 6
numeros = []
(1..TAMANHO).each do |i|
  print "Digite o #{i}º número: "
  num = gets.chomp.to_i
  numeros << num
end
puts "Ordem inversa:"
numeros.reverse.each { |n| puts n }`,
    testCases: [
      { values: { numeros: [10, 20, 30, 40, 50, 60] }, result: "60, 50, 40, 30, 20, 10", stepByStep: "Usa `reverse` para inverter o array." }
    ],
    explanation: "Após preencher, usamos `reverse` para iterar na ordem inversa."
  },

  // NÍVEL 2 - BUSCA E ESTATÍSTICAS (exercícios 5-7)
  {
    id: 5,
    nivel: 2,
    title: "Busca de Elemento",
    statement: "Desenvolva um algoritmo em Ruby que leia um array de 15 números e verifique se um determinado valor existe, mostrando sua posição.",
    input: "Array: 1..15 | Buscar: 7",
    output: "Valor 7 encontrado na posição 6",
    code: `# Busca de elemento
TAMANHO = 15
numeros = []
(1..TAMANHO).each do |i|
  print "Digite o #{i}º número: "
  num = gets.chomp.to_i
  numeros << num
end
print "Digite o valor a ser buscado: "
busca = gets.chomp.to_i
posicao = numeros.index(busca)
if posicao
  puts "Valor #{busca} encontrado na posição #{posicao + 1}"
else
  puts "Valor #{busca} não encontrado"
end`,
    testCases: [
      { values: { numeros: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15], busca: 7 }, result: "posição 7", stepByStep: "Usa `index` para encontrar a posição." }
    ],
    explanation: "O método `index` retorna a posição do elemento ou `nil` se não encontrado."
  },
  {
    id: 6,
    nivel: 2,
    title: "Estatísticas de Temperatura",
    statement: "Leia as temperaturas de uma semana (7 dias), armazene em um array e mostre: média, maior, menor e quantos dias ficaram acima da média.",
    input: "Temperaturas: 23, 25, 22, 28, 26, 24, 27",
    output: "Média: 25.0, Maior: 28, Menor: 22, Acima da média: 3 dias",
    code: `# Estatísticas de temperatura
DIAS = 7
temp = []
soma = 0.0
(1..DIAS).each do |i|
  print "Temperatura do dia #{i}: "
  t = gets.chomp.to_f
  temp << t
  soma += t
end
media = soma / DIAS
maior = temp.max
menor = temp.min
acima = temp.count { |t| t > media }
puts "Média: #{media.round(2)}"
puts "Maior temperatura: #{maior}"
puts "Menor temperatura: #{menor}"
puts "Dias acima da média: #{acima}"`,
    testCases: [
      { values: { temperaturas: [23, 25, 22, 28, 26, 24, 27] }, result: "media=25, maior=28, menor=22, acima=3", stepByStep: "Soma=175, média=25; >25: 28,26,27 = 3 dias" }
    ],
    explanation: "Usamos `max`, `min`, `count` com bloco."
  },
  {
    id: 7,
    nivel: 2,
    title: "Crivo de Eratóstenes",
    statement: "Implemente o Crivo de Eratóstenes usando um array para encontrar todos os números primos até N.",
    input: "N = 30",
    output: "Primos: 2, 3, 5, 7, 11, 13, 17, 19, 23, 29",
    code: `# Crivo de Eratóstenes
print "Informe o valor de N: "
n = gets.chomp.to_i
eh_primo = Array.new(n+1, true)
eh_primo[0] = eh_primo[1] = false

(2..Math.sqrt(n).to_i).each do |i|
  if eh_primo[i]
    (i*i..n).step(i) { |j| eh_primo[j] = false }
  end
end

primos = (2..n).select { |i| eh_primo[i] }
puts "Números primos até #{n}: #{primos.join(', ')}"`,
    testCases: [
      { values: { n: 30 }, result: "2, 3, 5, 7, 11, 13, 17, 19, 23, 29", stepByStep: "Marca todos como primo; remove múltiplos de 2,3,5; restam apenas primos" }
    ],
    explanation: "Criamos um array booleano e aplicamos o algoritmo."
  },

  // NÍVEL 3 - MATRIZES (exercícios 8-10)
  {
    id: 8,
    nivel: 3,
    title: "Matriz Identidade",
    statement: "Crie uma matriz 3x3 onde os elementos da diagonal principal são 1 e os demais são 0.",
    input: "Nenhuma entrada",
    output: "1 0 0\\n0 1 0\\n0 0 1",
    code: `# Matriz Identidade
TAMANHO = 3
matriz = Array.new(TAMANHO) { Array.new(TAMANHO, 0) }
(0...TAMANHO).each { |i| matriz[i][i] = 1 }
puts "Matriz Identidade 3x3:"
matriz.each do |linha|
  puts linha.join(" ")
end`,
    testCases: [
      { values: {}, result: "1 0 0\\n0 1 0\\n0 0 1", stepByStep: "i=j → 1; i≠j → 0" }
    ],
    explanation: "Criamos uma matriz de zeros e atribuímos 1 na diagonal principal."
  },
  {
    id: 9,
    nivel: 3,
    title: "Soma de Matrizes",
    statement: "Crie um programa em Ruby que some duas matrizes 2x3. Leia os valores de ambas as matrizes e mostre a matriz resultante.",
    input: "Matriz A: [[1,2,3],[4,5,6]]; Matriz B: [[7,8,9],[10,11,12]]",
    output: "Matriz Soma: [[8,10,12],[14,16,18]]",
    code: `# Soma de matrizes
def ler_matriz(linhas, colunas, nome)
  matriz = []
  (0...linhas).each do |i|
    linha = []
    (0...colunas).each do |j|
      print "#{nome}[#{i+1}][#{j+1}]: "
      linha << gets.chomp.to_i
    end
    matriz << linha
  end
  matriz
end

LINHAS = 2
COLUNAS = 3

puts "=== MATRIZ A ==="
a = ler_matriz(LINHAS, COLUNAS, "A")
puts "=== MATRIZ B ==="
b = ler_matriz(LINHAS, COLUNAS, "B")

c = Array.new(LINHAS) { Array.new(COLUNAS) }
(0...LINHAS).each do |i|
  (0...COLUNAS).each do |j|
    c[i][j] = a[i][j] + b[i][j]
  end
end

puts "=== MATRIZ SOMA ==="
c.each { |linha| puts linha.join(" ") }`,
    testCases: [
      { values: { A: [[1,2,3],[4,5,6]], B: [[7,8,9],[10,11,12]] }, result: "[[8,10,12],[14,16,18]]", stepByStep: "C[i][j] = A[i][j] + B[i][j]" }
    ],
    explanation: "Usamos arrays de arrays para representar matrizes e somamos elemento a elemento."
  },
  {
    id: 10,
    nivel: 3,
    title: "Multiplicação de Matrizes",
    statement: "Desenvolva um programa em Ruby que multiplique duas matrizes. Leia uma matriz A (2x3) e B (3x2), calcule e mostre a matriz resultante C (2x2).",
    input: "A: [[1,2,3],[4,5,6]]; B: [[7,8],[9,10],[11,12]]",
    output: "C: [[58,64],[139,154]]",
    code: `# Multiplicação de matrizes
def ler_matriz(linhas, colunas, nome)
  matriz = []
  (0...linhas).each do |i|
    linha = []
    (0...colunas).each do |j|
      print "#{nome}[#{i+1}][#{j+1}]: "
      linha << gets.chomp.to_i
    end
    matriz << linha
  end
  matriz
end

LINHAS_A = 2
COLUNAS_A = 3
LINHAS_B = 3
COLUNAS_B = 2

puts "=== MATRIZ A (2x3) ==="
a = ler_matriz(LINHAS_A, COLUNAS_A, "A")
puts "=== MATRIZ B (3x2) ==="
b = ler_matriz(LINHAS_B, COLUNAS_B, "B")

c = Array.new(LINHAS_A) { Array.new(COLUNAS_B, 0) }
(0...LINHAS_A).each do |i|
  (0...COLUNAS_B).each do |j|
    (0...COLUNAS_A).each do |k|
      c[i][j] += a[i][k] * b[k][j]
    end
  end
end

puts "=== MATRIZ RESULTADO C (2x2) ==="
c.each { |linha| puts linha.join(" ") }`,
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
    code: `# Jogo da Velha
TAMANHO = 3
tabuleiro = []

puts "Digite o tabuleiro do jogo da velha:"
(0...TAMANHO).each do |i|
  linha = []
  (0...TAMANHO).each do |j|
    print "Posição [#{i+1}][#{j+1}]: "
    linha << gets.chomp
  end
  tabuleiro << linha
end

vencedor = false
jogador = ' '

# Linhas
(0...TAMANHO).each do |i|
  if tabuleiro[i][0] != ' ' &&
     tabuleiro[i][0] == tabuleiro[i][1] &&
     tabuleiro[i][1] == tabuleiro[i][2]
    vencedor = true
    jogador = tabuleiro[i][0]
  end
end

# Colunas
(0...TAMANHO).each do |j|
  if tabuleiro[0][j] != ' ' &&
     tabuleiro[0][j] == tabuleiro[1][j] &&
     tabuleiro[1][j] == tabuleiro[2][j]
    vencedor = true
    jogador = tabuleiro[0][j]
  end
end

# Diagonal principal
if tabuleiro[0][0] != ' ' &&
   tabuleiro[0][0] == tabuleiro[1][1] &&
   tabuleiro[1][1] == tabuleiro[2][2]
  vencedor = true
  jogador = tabuleiro[0][0]
end

# Diagonal secundária
if tabuleiro[0][2] != ' ' &&
   tabuleiro[0][2] == tabuleiro[1][1] &&
   tabuleiro[1][1] == tabuleiro[2][0]
  vencedor = true
  jogador = tabuleiro[0][2]
end

if vencedor
  puts "#{jogador} venceu!"
else
  puts "Empate ou jogo incompleto!"
end`,
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
      <h2 class="card-title">📦 Arrays em Ruby</h2>
      <p>Em Ruby, arrays são coleções ordenadas de objetos. Eles são dinâmicos e podem conter elementos de diferentes tipos. Para matrizes, usamos arrays de arrays.</p>
      
      <div class="info-callout">
        <span class="info-icon-callout">📌</span>
        <div>
          <strong>Arrays</strong>: podem ser criados com <code>[]</code> ou <code>Array.new</code>.<br>
          <strong>Matrizes</strong>: arrays bidimensionais (arrays de arrays).<br>
          <strong>Métodos comuns</strong>: <code>each</code>, <code>map</code>, <code>select</code>, <code>push</code>/<code>&lt;&lt;</code>, <code>pop</code>, <code>size</code>.
        </div>
      </div>
      
      <div class="code-example">
        <div class="code-example-header">
          <span class="code-icon">📝</span>
          <span>Criando arrays</span>
        </div>
        <pre><code># Array vazio
arr = []

# Array com valores
numeros = [1, 2, 3, 4, 5]

# Array com tamanho pré-definido
zeros = Array.new(5, 0)

# Matriz 2x3
matriz = [
  [1, 2, 3],
  [4, 5, 6]
]</code></pre>
      </div>
    </div>
    
    <div class="content-card">
      <h2 class="card-title">📊 Operações com Arrays</h2>
      <div class="code-example">
        <div class="code-example-header">
          <span class="code-icon">📝</span>
          <span>Acessando elementos</span>
        </div>
        <pre><code>vetor = [15, 22, 8, 10, 11]
puts vetor[0]   # 15
puts vetor[1]   # 22
puts vetor[4]   # 11
puts vetor[-1]  # 11 (último)</code></pre>
      </div>
      <div class="code-example">
        <div class="code-example-header">
          <span class="code-icon">📝</span>
          <span>Adicionando e removendo</span>
        </div>
        <pre><code>vetor << 6        # adiciona no final
vetor.push(7)     # também adiciona
vetor.pop         # remove e retorna o último
vetor.shift       # remove e retorna o primeiro</code></pre>
      </div>
      <div class="code-example">
        <div class="code-example-header">
          <span class="code-icon">📝</span>
          <span>Iteração</span>
        </div>
        <pre><code>vetor.each do |elemento|
  puts elemento
end

# Com índice
vetor.each_with_index do |elemento, indice|
  puts "índice #{indice}: #{elemento}"
end</code></pre>
      </div>
    </div>
    
    <div class="content-card">
      <h2 class="card-title">📊 Matrizes em Ruby</h2>
      <div class="code-example">
        <div class="code-example-header">
          <span class="code-icon">📝</span>
          <span>Criando e acessando matrizes</span>
        </div>
        <pre><code>matriz = [
  [1, 2, 3],
  [4, 5, 6]
]
puts matriz[0][1]  # 2 (linha 0, coluna 1)

# Percorrendo
matriz.each do |linha|
  linha.each do |valor|
    puts valor
  end
end</code></pre>
      </div>
    </div>
    
    <div class="content-card">
      <h2 class="card-title">💡 Dicas Importantes</h2>
      <div class="info-callout">
        <span class="info-icon-callout">⚠️</span>
        <div>
          • Índices começam em <strong>0</strong>.<br>
          • Use <code>array.size</code> ou <code>array.length</code> para obter o tamanho.<br>
          • Métodos como <code>max</code>, <code>min</code>, <code>sum</code> são muito úteis.<br>
          • Para copiar arrays, use <code>array.dup</code> ou <code>array.clone</code>.<br>
          • Arrays podem conter elementos de tipos diferentes, mas é boa prática manter tipos consistentes.
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
        <span>📋 Exercícios de Arrays e Matrizes (Ruby)</span>
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