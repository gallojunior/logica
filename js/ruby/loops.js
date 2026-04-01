const repeticaoExercises = [
  // NÍVEL 1 - BÁSICO (exercícios 1-5)
  {
    id: 1, nivel: 1,
    title: "Contador Simples",
    statement: "Elabore um programa em Ruby que exiba os números de 1 a 10.",
    input: "Nenhuma entrada",
    output: "1, 2, 3, 4, 5, 6, 7, 8, 9, 10",
    code: `(1..10).each do |i|
  puts i
end`,
    testCases: [{ values: {}, result: "1 2 3 4 5 6 7 8 9 10", stepByStep: "i de 1 a 10" }],
    explanation: "Usamos um range `(1..10)` e o método `each` para iterar e exibir cada número."
  },
  {
    id: 2, nivel: 1,
    title: "Contagem Regressiva",
    statement: "Mostre uma contagem regressiva de 10 até 0, exibindo 'FOGO!' ao final.",
    input: "Nenhuma entrada",
    output: "10, 9, 8, ..., 0, FOGO!",
    code: `10.downto(0) do |i|
  print i
  print ", " if i > 0
end
puts "\nFOGO!"`,
    testCases: [{ values: {}, result: "10,9,8,...,0,FOGO!", stepByStep: "i de 10 a 0" }],
    explanation: "Usamos `downto` para decrementar."
  },
  {
    id: 3, nivel: 1,
    title: "Tabuada de um Número",
    statement: "Leia um número e exiba sua tabuada de 1 a 10.",
    input: "numero = 5",
    output: "5 x 1 = 5, 5 x 2 = 10, ...",
    code: `print "Informe um número: "
num = gets.chomp.to_i

(1..10).each do |i|
  puts "#{num} x #{i} = #{num * i}"
end`,
    testCases: [{ values: { num: 5 }, result: "tabuada do 5", stepByStep: "i de 1 a 10" }],
    explanation: "Laço com `each` sobre o range."
  },
  {
    id: 4, nivel: 1,
    title: "Números Pares",
    statement: "Exiba todos os números pares entre 1 e 20.",
    input: "Nenhuma entrada",
    output: "2, 4, 6, 8, 10, 12, 14, 16, 18, 20",
    code: `(2..20).step(2) do |i|
  print i
  print ", " if i < 20
end`,
    testCases: [{ values: {}, result: "2,4,6,...,20", stepByStep: "i de 2 em 2" }],
    explanation: "Usamos `step(2)` para pular os ímpares."
  },
  {
    id: 5, nivel: 1,
    title: "Números Ímpares Regressivos",
    statement: "Exiba os números ímpares de 15 até 1 em ordem decrescente.",
    input: "Nenhuma entrada",
    output: "15, 13, 11, 9, 7, 5, 3, 1",
    code: `15.downto(1) do |i|
  if i.odd?
    print i
    print ", " if i > 1
  end
end`,
    testCases: [{ values: {}, result: "15,13,11,...,1", stepByStep: "i de 15 a 1, filtra ímpares" }],
    explanation: "`downto` com condição `odd?`."
  },

  // NÍVEL 2 - ACUMULADORES (exercícios 6-10)
  {
    id: 6, nivel: 2,
    title: "Somador de Números",
    statement: "Leia 5 números e calcule a soma total.",
    input: "2, 4, 6, 8, 10",
    output: "Soma = 30",
    code: `soma = 0
(1..5).each do |i|
  print "Informe o #{i}º número: "
  num = gets.chomp.to_i
  soma += num
end
puts "A soma é: #{soma}"`,
    testCases: [{ values: { numeros: [2,4,6,8,10] }, result: 30, stepByStep: "acumulando soma" }],
    explanation: "Variável acumuladora."
  },
  {
    id: 7, nivel: 2,
    title: "Média de uma Turma",
    statement: "Calcule a média das notas de 8 alunos.",
    input: "8 notas: 7.5, 8.0, 6.5, 9.0, 7.0, 8.5, 6.0, 9.5",
    output: "Média = 7.75",
    code: `NUM_ALUNOS = 8
soma = 0.0
(1..NUM_ALUNOS).each do |i|
  print "Informe a nota do #{i}º aluno: "
  nota = gets.chomp.to_f
  soma += nota
end
media = soma / NUM_ALUNOS
puts "A média da turma é: %.2f" % media`,
    testCases: [{ values: { notas: [7.5,8.0,6.5,9.0,7.0,8.5,6.0,9.5] }, result: 7.75, stepByStep: "soma = 62; média = 62/8 = 7.75" }],
    explanation: "Acumula notas e divide pela quantidade."
  },
  {
    id: 8, nivel: 2,
    title: "Fatorial",
    statement: "Calcule o fatorial de um número N.",
    input: "N = 5",
    output: "5! = 120",
    code: `print "Informe um número: "
num = gets.chomp.to_i

fat = 1
(2..num).each do |i|
  fat *= i
end
puts "#{num}! = #{fat}"`,
    testCases: [{ values: { num: 5 }, result: 120, stepByStep: "5×4×3×2×1 = 120" }],
    explanation: "Acumulador multiplicativo."
  },
  {
    id: 9, nivel: 2,
    title: "Soma de Pares e Ímpares",
    statement: "Leia 15 números e exiba soma e quantidade de pares e ímpares.",
    input: "15 números: 1 a 15",
    output: "Soma pares: 56, Soma ímpares: 64, Qtd pares: 7, Qtd ímpares: 8",
    code: `LIMITE = 15
sp = si = qp = qi = 0
(1..LIMITE).each do |i|
  print "Informe o #{i}º número: "
  num = gets.chomp.to_i
  if num.even?
    qp += 1
    sp += num
  else
    qi += 1
    si += num
  end
end
puts "Soma dos pares: #{sp}"
puts "Soma dos ímpares: #{si}"
puts "Quantidade de pares: #{qp}"
puts "Quantidade de ímpares: #{qi}"`,
    testCases: [{ values: { numeros: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15] }, result: "sp=56, si=64, qp=7, qi=8", stepByStep: "classifica e acumula" }],
    explanation: "Quatro acumuladores."
  },
  {
    id: 10, nivel: 2,
    title: "Análise de Números",
    statement: "Leia 10 números e informe maior, menor, soma e média.",
    input: "5, 8, 3, 12, 7, 9, 4, 6, 11, 10",
    output: "Maior: 12, Menor: 3, Soma: 75, Média: 7.5",
    code: `LIMITE = 10
print "Informe o 1º número: "
num = gets.chomp.to_i
maior = menor = num
soma = num
(2..LIMITE).each do |i|
  print "Informe o #{i}º número: "
  num = gets.chomp.to_i
  maior = num if num > maior
  menor = num if num < menor
  soma += num
end
media = soma.to_f / LIMITE
puts "Maior: #{maior}"
puts "Menor: #{menor}"
puts "Soma: #{soma}"
puts "Média: #{media.round(1)}"`,
    testCases: [{ values: { numeros: [5,8,3,12,7,9,4,6,11,10] }, result: "maior=12, menor=3, soma=75, media=7.5", stepByStep: "atualiza maior/menor" }],
    explanation: "Inicializa com primeiro número, atualiza comparando."
  },

  // NÍVEL 3 - VALIDAÇÃO E CONDIÇÕES DE PARADA (exercícios 11-14)
  {
    id: 11, nivel: 3,
    title: "Validação de Senha",
    statement: "Solicite senha até digitar '123456'.",
    input: "tentativas: '000000', '111111', '123456'",
    output: "ACESSO PERMITIDO",
    code: `loop do
  print "Informe a senha: "
  senha = gets.chomp
  break if senha == "123456"
  puts "Senha incorreta! Tente novamente."
end
puts "ACESSO PERMITIDO"`,
    testCases: [{ values: { tentativas: ["000000","111111","123456"] }, result: "ACESSO PERMITIDO", stepByStep: "repete até acertar" }],
    explanation: "Laço `loop` com `break` quando a senha estiver correta."
  },
  {
    id: 12, nivel: 3,
    title: "Validação de Notas",
    statement: "Leia notas de 15 alunos validando entre 0 e 10.",
    input: "notas com validação",
    output: "Média final",
    code: `NUM_ALUNOS = 15
soma = 0.0
(1..NUM_ALUNOS).each do |i|
  loop do
    print "Informe a nota do #{i}º aluno (0-10): "
    nota = gets.chomp.to_f
    if (0..10).include?(nota)
      soma += nota
      break
    else
      puts "Nota inválida! Digite um valor entre 0 e 10."
    end
  end
end
media = soma / NUM_ALUNOS
puts "Média final: %.2f" % media`,
    testCases: [{ values: { notas: [-1,11,7.5] }, result: "aceita 7.5", stepByStep: "repete até nota válida" }],
    explanation: "Laço interno com `loop` e `break` para validação."
  },
  {
    id: 13, nivel: 3,
    title: "Leitura com Condição de Parada",
    statement: "Leia números até digitar 0 e mostre quantos foram digitados.",
    input: "5, 8, 3, 0",
    output: "Foram digitados 3 números",
    code: `contador = 0
loop do
  print "Informe um número (0 para parar): "
  num = gets.chomp.to_i
  break if num == 0
  contador += 1
end
puts "Foram digitados #{contador} números"`,
    testCases: [{ values: { numeros: [5,8,3,0] }, result: "3 números", stepByStep: "conta até receber 0" }],
    explanation: "Laço `loop` com `break` quando o número for zero."
  },
  {
    id: 14, nivel: 3,
    title: "Acumulador Condicional (Vendas)",
    statement: "Leia vendas até digitar 0 e exiba total, vendas acima de 1000 e média.",
    input: "1500, 800, 2000, 0",
    output: "Total: 4300, Acima de 1000: 2, Média: 1433.33",
    code: `total = 0.0
qtde = 0
acima = 0
loop do
  print "Informe o valor da venda (0 para encerrar): R$ "
  valor = gets.chomp.to_f
  break if valor == 0
  qtde += 1
  total += valor
  acima += 1 if valor > 1000
end
if qtde > 0
  media = total / qtde
  puts "Total de vendas: R$ #{total.round(2)}"
  puts "Vendas acima de R$1000: #{acima}"
  puts "Média das vendas: R$ #{media.round(2)}"
end`,
    testCases: [{ values: { vendas: [1500,800,2000,0] }, result: "total=4300, acima=2, media=1433.33", stepByStep: "acumula e conta" }],
    explanation: "Múltiplos acumuladores."
  },

  // NÍVEL 4 - SEQUÊNCIAS MATEMÁTICAS (exercícios 15-17)
  {
    id: 15, nivel: 4,
    title: "Sequência de Fibonacci",
    statement: "Exiba os primeiros 12 termos da sequência de Fibonacci.",
    input: "Nenhuma entrada",
    output: "0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89",
    code: `t1, t2 = 0, 1
print "#{t1}, #{t2}"
(3..12).each do
  proximo = t1 + t2
  print ", #{proximo}"
  t1, t2 = t2, proximo
end`,
    testCases: [{ values: {}, result: "0,1,1,2,3,5,8,13,21,34,55,89", stepByStep: "cada termo = soma dos dois anteriores" }],
    explanation: "Atualização de variáveis a cada iteração."
  },
  {
    id: 16, nivel: 4,
    title: "Números Primos",
    statement: "Verifique se um número N é primo.",
    input: "N = 13",
    output: "13 é PRIMO",
    code: `print "Informe um número: "
num = gets.chomp.to_i

eh_primo = true
if num <= 1
  eh_primo = false
else
  (2..Math.sqrt(num).to_i).each do |i|
    if num % i == 0
      eh_primo = false
      break
    end
  end
end
if eh_primo
  puts "#{num} é PRIMO"
else
  puts "#{num} NÃO é primo"
end`,
    testCases: [{ values: { num: 13 }, result: "PRIMO", stepByStep: "não tem divisores" }],
    explanation: "Testa divisores até a raiz quadrada."
  },
  {
    id: 17, nivel: 4,
    title: "Números Perfeitos",
    statement: "Encontre números perfeitos entre 1 e 1000.",
    input: "Nenhuma entrada",
    output: "6, 28, 496",
    code: `LIMITE = 1000
(2..LIMITE).each do |i|
  soma = 0
  (1...i).each do |j|
    soma += j if i % j == 0
  end
  print i
  print ", " if i < 496 if soma == i
end if soma == i`,
    testCases: [{ values: {}, result: "6, 28, 496", stepByStep: "soma dos divisores = número" }],
    explanation: "Laços aninhados para somar divisores."
  },

  // NÍVEL 5 - LAÇOS ANINHADOS E PADRÕES (exercícios 18-20)
  {
    id: 18, nivel: 5,
    title: "Triângulo de Números",
    statement: "Exiba um triângulo numérico onde na linha i, o número i se repete i vezes.",
    input: "N = 4",
    output: "1\n2 2\n3 3 3\n4 4 4 4",
    code: `print "Informe um número (1-9): "
n = gets.chomp.to_i

(1..n).each do |i|
  i.times { print "#{i} " }
  puts
end`,
    testCases: [{ values: { n: 4 }, result: "1\n2 2\n3 3 3\n4 4 4 4", stepByStep: "laços aninhados" }],
    explanation: "Laço externo para linhas, interno com `times` para colunas."
  },
  {
    id: 19, nivel: 5,
    title: "Jogo de Adivinhação",
    statement: "Jogo onde o computador sorteia um número e o usuário tenta adivinhar.",
    input: "palpites: 50, 75, 62, 70",
    output: "Acertou! Tentativas: 4",
    code: `NS = rand(1..100)
tentativas = 0
puts "Tente adivinhar o número secreto (1-100)!"
loop do
  print "Digite seu palpite: "
  palpite = gets.chomp.to_i
  tentativas += 1
  if palpite > NS
    puts "MUITO ALTO! Tente um número menor."
  elsif palpite < NS
    puts "MUITO BAIXO! Tente um número maior."
  else
    break
  end
end
puts "\nPARABÉNS! Você acertou em #{tentativas} tentativas!"`,
    testCases: [{ values: { NS: 70, palpites: [50,75,62,70] }, result: "acertou em 4", stepByStep: "loop até acertar" }],
    explanation: "Laço `loop` com break ao acertar, dicas a cada tentativa."
  },
  {
    id: 20, nivel: 5,
    title: "Menu Interativo",
    statement: "Menu com opções: 1-Somar, 2-Subtrair, 3-Sair.",
    input: "opções: 1 (10,5), 2 (20,8), 3",
    output: "Soma: 15, Subtração: 12, Encerrando...",
    code: `loop do
  puts "===== MENU DE OPÇÕES ====="
  puts "1 - Somar dois números"
  puts "2 - Subtrair dois números"
  puts "3 - Sair"
  print "Escolha uma opção: "
  opcao = gets.chomp.to_i

  case opcao
  when 1
    print "Informe o primeiro número: "
    a = gets.chomp.to_f
    print "Informe o segundo número: "
    b = gets.chomp.to_f
    puts "Resultado: #{a + b}"
  when 2
    print "Informe o primeiro número: "
    a = gets.chomp.to_f
    print "Informe o segundo número: "
    b = gets.chomp.to_f
    puts "Resultado: #{a - b}"
  when 3
    puts "Encerrando o programa..."
    break
  else
    puts "Opção inválida!"
  end
  puts "\nPressione ENTER para continuar..."
  gets
end`,
    testCases: [{ values: { opcoes: [1,10,5,2,20,8,3] }, result: "soma=15, subtração=12, encerra", stepByStep: "loop até opção 3" }],
    explanation: "Combinação de `loop`, `case` e funções."
  }
];

// Renderiza a seção de conceitos de repetição em Ruby
function renderConceitosRepeticao() {
  return `
    <div class="content-card">
      <h2 class="card-title">🔄 Laços de Repetição em Ruby</h2>
      <p>Ruby oferece diversas formas de laços, incluindo <strong>loop</strong>, <strong>while</strong>, <strong>until</strong>, <strong>for</strong>, <strong>each</strong>, <strong>times</strong>, <strong>upto</strong>, <strong>downto</strong> e <strong>step</strong>. Os mais comuns são <code>each</code> e <code>loop</code>.</p>
    </div>

    <div class="content-card">
      <h2 class="card-title">🔄 each (iterador de coleções)</h2>
      <div class="code-example">
        <pre><code>(1..10).each do |i|
  puts i
end</code></pre>
      </div>
    </div>

    <div class="content-card">
      <h2 class="card-title">🔄 times</h2>
      <div class="code-example">
        <pre><code>10.times do |i|
  puts i + 1
end</code></pre>
      </div>
    </div>

    <div class="content-card">
      <h2 class="card-title">🔄 while</h2>
      <div class="code-example">
        <pre><code>i = 1
while i <= 10
  puts i
  i += 1
end</code></pre>
      </div>
    </div>

    <div class="content-card">
      <h2 class="card-title">🔄 until</h2>
      <div class="code-example">
        <pre><code>i = 1
until i > 10
  puts i
  i += 1
end</code></pre>
      </div>
    </div>

    <div class="content-card">
      <h2 class="card-title">🔄 loop (infinito)</h2>
      <div class="code-example">
        <pre><code>loop do
  puts "Executando"
  break if condicao
end</code></pre>
      </div>
    </div>
  `;
}

// Renderiza a seção de exercícios de repetição
function renderExerciciosRepeticao() {
  const currentEx = repeticaoExercises.find(e => e.id === window.currentRepeticaoExercise) || repeticaoExercises[0];

  const niveis = {
    1: { nome: "⭐ Básico", cor: "#10b981" },
    2: { nome: "⭐⭐ Acumuladores", cor: "#f59e0b" },
    3: { nome: "⭐⭐⭐ Validação", cor: "#3b82f6" },
    4: { nome: "⭐⭐⭐⭐ Sequências Matemáticas", cor: "#8b5cf6" },
    5: { nome: "⭐⭐⭐⭐⭐ Laços Aninhados", cor: "#ef4444" }
  };

  return `
    <div class="exercises-filter">
      <div class="filter-header">
        <span>📋 Exercícios de Repetição (Ruby)</span>
        <span class="filter-count">${repeticaoExercises.length} exercícios disponíveis</span>
      </div>
      <div class="filter-buttons">
        ${repeticaoExercises.map(ex => `
          <button class="filter-btn ${ex.id === window.currentRepeticaoExercise ? 'active' : ''}" data-ex-id="${ex.id}" title="Nível ${ex.nivel}: ${niveis[ex.nivel].nome}">
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
          <span>💻 Código de Resolução (Ruby)</span>
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
              ${test.values && Object.keys(test.values).length > 0 ? `
                <div class="test-values">
                  <strong>Valores de entrada:</strong> ${Object.entries(test.values).map(([k, v]) => `${k} = ${v}`).join(', ')}
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

// Função para renderizar a página completa de repetição
function renderLoopsPage() {
  const currentSubpage = window.currentRepeticaoSubpage || 'conceitos';

  return `
    <div class="page-header">
      <h1 class="page-title"><span>🔄</span> Estruturas de Repetição em Ruby</h1>
      <p class="page-subtitle">Aprenda a criar loops com each, times, while, until, loop e muito mais</p>
    </div>

    <div class="sub-nav">
      <button class="sub-nav-btn ${currentSubpage === 'conceitos' ? 'active' : ''}" data-subpage="conceitos">
        📘 Conceitos
      </button>
      <button class="sub-nav-btn ${currentSubpage === 'exercicios' ? 'active' : ''}" data-subpage="exercicios">
        ✏️ Exercícios
      </button>
    </div>

    <div id="repeticao-content">
      ${currentSubpage === 'conceitos' ? renderConceitosRepeticao() : renderExerciciosRepeticao()}
    </div>
  `;
}