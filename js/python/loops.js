const repeticaoExercises = [
  // NÍVEL 1 - BÁSICO (exercícios 1-5)
  {
    id: 1, nivel: 1,
    title: "Contador Simples",
    statement: "Elabore um programa em Python que exiba os números de 1 a 10.",
    input: "Nenhuma entrada",
    output: "1, 2, 3, 4, 5, 6, 7, 8, 9, 10",
    code: `# Contador Simples
for i in range(1, 11):
    print(i)`,
    testCases: [{ values: {}, result: "1 2 3 4 5 6 7 8 9 10", stepByStep: "i = 1 a 10" }],
    explanation: "Laço for com range(1, 11) que gera números de 1 a 10."
  },
  {
    id: 2, nivel: 1,
    title: "Contagem Regressiva",
    statement: "Mostre uma contagem regressiva de 10 até 0, exibindo 'FOGO!' ao final.",
    input: "Nenhuma entrada",
    output: "10, 9, 8, ..., 0, FOGO!",
    code: `# Contagem Regressiva
for i in range(10, -1, -1):
    print(i, end=", " if i > 0 else "\\n")
print("FOGO!")`,
    testCases: [{ values: {}, result: "10,9,8,...,0,FOGO!", stepByStep: "i de 10 a 0" }],
    explanation: "Laço for com range decrescente: range(início, fim, passo)."
  },
  {
    id: 3, nivel: 1,
    title: "Tabuada de um Número",
    statement: "Leia um número e exiba sua tabuada de 1 a 10.",
    input: "numero = 5",
    output: "5 x 1 = 5, 5 x 2 = 10, ...",
    code: `# Tabuada
num = int(input("Informe um número: "))

for i in range(1, 11):
    print(f"{num} x {i} = {num * i}")`,
    testCases: [{ values: { num: 5 }, result: "tabuada do 5", stepByStep: "i de 1 a 10" }],
    explanation: "Laço for com multiplicação a cada iteração."
  },
  {
    id: 4, nivel: 1,
    title: "Números Pares",
    statement: "Exiba todos os números pares entre 1 e 20.",
    input: "Nenhuma entrada",
    output: "2, 4, 6, 8, 10, 12, 14, 16, 18, 20",
    code: `# Números Pares
for i in range(2, 21, 2):
    print(i, end=", " if i < 20 else "")`,
    testCases: [{ values: {}, result: "2,4,6,...,20", stepByStep: "i incrementa de 2 em 2" }],
    explanation: "Range com passo 2 para gerar apenas pares."
  },
  {
    id: 5, nivel: 1,
    title: "Números Ímpares Regressivos",
    statement: "Exiba os números ímpares de 15 até 1 em ordem decrescente.",
    input: "Nenhuma entrada",
    output: "15, 13, 11, 9, 7, 5, 3, 1",
    code: `# Números Ímpares Regressivos
for i in range(15, 0, -1):
    if i % 2 != 0:
        print(i, end=", " if i > 1 else "")`,
    testCases: [{ values: {}, result: "15,13,11,...,1", stepByStep: "i de 15 a 1, filtra ímpares" }],
    explanation: "Laço decrescente com filtro de números ímpares."
  },

  // NÍVEL 2 - ACUMULADORES (exercícios 6-10)
  {
    id: 6, nivel: 2,
    title: "Somador de Números",
    statement: "Leia 5 números e calcule a soma total.",
    input: "2, 4, 6, 8, 10",
    output: "Soma = 30",
    code: `# Somador de Números
soma = 0
for i in range(1, 6):
    num = int(input(f"Informe o {i}º número: "))
    soma += num
print(f"A soma é: {soma}")`,
    testCases: [{ values: { numeros: [2,4,6,8,10] }, result: 30, stepByStep: "acumulando soma" }],
    explanation: "Variável acumuladora."
  },
  {
    id: 7, nivel: 2,
    title: "Média de uma Turma",
    statement: "Calcule a média das notas de 8 alunos.",
    input: "8 notas: 7.5, 8.0, 6.5, 9.0, 7.0, 8.5, 6.0, 9.5",
    output: "Média = 7.75",
    code: `# Média de uma Turma
NUM_ALUNOS = 8
soma = 0

for i in range(1, NUM_ALUNOS + 1):
    nota = float(input(f"Informe a nota do {i}º aluno: "))
    soma += nota

media = soma / NUM_ALUNOS
print(f"A média da turma é: {media:.2f}")`,
    testCases: [{ values: { notas: [7.5,8.0,6.5,9.0,7.0,8.5,6.0,9.5] }, result: 7.75, stepByStep: "soma = 62; média = 62/8 = 7.75" }],
    explanation: "Acumula notas e divide pela quantidade."
  },
  {
    id: 8, nivel: 2,
    title: "Fatorial",
    statement: "Calcule o fatorial de um número N.",
    input: "N = 5",
    output: "5! = 120",
    code: `# Fatorial
num = int(input("Informe um número: "))

fat = 1
for i in range(num, 1, -1):
    fat *= i

print(f"{num}! = {fat}")`,
    testCases: [{ values: { num: 5 }, result: 120, stepByStep: "5×4×3×2×1 = 120" }],
    explanation: "Acumulador multiplicativo."
  },
  {
    id: 9, nivel: 2,
    title: "Soma de Pares e Ímpares",
    statement: "Leia 15 números e exiba soma e quantidade de pares e ímpares.",
    input: "15 números: 1 a 15",
    output: "Soma pares: 56, Soma ímpares: 64, Qtd pares: 7, Qtd ímpares: 8",
    code: `# Soma de Pares e Ímpares
LIMITE = 15
sp = si = qp = qi = 0

for i in range(1, LIMITE + 1):
    num = int(input(f"Informe o {i}º número: "))
    
    if num % 2 == 0:
        qp += 1
        sp += num
    else:
        qi += 1
        si += num

print(f"Soma dos pares: {sp}")
print(f"Soma dos ímpares: {si}")
print(f"Quantidade de pares: {qp}")
print(f"Quantidade de ímpares: {qi}")`,
    testCases: [{ values: { numeros: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15] }, result: "sp=56, si=64, qp=7, qi=8", stepByStep: "classifica e acumula" }],
    explanation: "Quatro acumuladores: dois para somas e dois para contagens."
  },
  {
    id: 10, nivel: 2,
    title: "Análise de Números",
    statement: "Leia 10 números e informe maior, menor, soma e média.",
    input: "5, 8, 3, 12, 7, 9, 4, 6, 11, 10",
    output: "Maior: 12, Menor: 3, Soma: 75, Média: 7.5",
    code: `# Análise de Números
LIMITE = 10
soma = 0

num = int(input("Informe o 1º número: "))
maior = menor = num
soma = num

for i in range(2, LIMITE + 1):
    num = int(input(f"Informe o {i}º número: "))
    
    if num > maior:
        maior = num
    if num < menor:
        menor = num
    soma += num

media = soma / LIMITE
print(f"Maior: {maior}")
print(f"Menor: {menor}")
print(f"Soma: {soma}")
print(f"Média: {media:.1f}")`,
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
    code: `# Validação de Senha
senha = ""
while senha != "123456":
    senha = input("Informe a senha: ")
    if senha != "123456":
        print("Senha incorreta! Tente novamente.")

print("ACESSO PERMITIDO")`,
    testCases: [{ values: { tentativas: ["000000","111111","123456"] }, result: "ACESSO PERMITIDO", stepByStep: "repete até acertar" }],
    explanation: "Laço while com condição de parada."
  },
  {
    id: 12, nivel: 3,
    title: "Validação de Notas",
    statement: "Leia notas de 15 alunos validando entre 0 e 10.",
    input: "notas com validação",
    output: "Média final",
    code: `# Validação de Notas
NUM_ALUNOS = 15
soma = 0

for i in range(1, NUM_ALUNOS + 1):
    while True:
        nota = float(input(f"Informe a nota do {i}º aluno (0-10): "))
        if 0 <= nota <= 10:
            break
        print("Nota inválida! Digite um valor entre 0 e 10.")
    soma += nota

media = soma / NUM_ALUNOS
print(f"Média final: {media:.2f}")`,
    testCases: [{ values: { notas: [-1,11,7.5] }, result: "aceita 7.5", stepByStep: "repete até nota válida" }],
    explanation: "Laço aninhado com break para validação."
  },
  {
    id: 13, nivel: 3,
    title: "Leitura com Condição de Parada",
    statement: "Leia números até digitar 0 e mostre quantos foram digitados.",
    input: "5, 8, 3, 0",
    output: "Foram digitados 3 números",
    code: `# Leitura com Condição de Parada
contador = 0
num = 1

while num != 0:
    num = int(input("Informe um número (0 para parar): "))
    if num != 0:
        contador += 1

print(f"Foram digitados {contador} números")`,
    testCases: [{ values: { numeros: [5,8,3,0] }, result: "3 números", stepByStep: "conta até receber 0" }],
    explanation: "Laço while com condição de parada."
  },
  {
    id: 14, nivel: 3,
    title: "Acumulador Condicional (Vendas)",
    statement: "Leia vendas até digitar 0 e exiba total, vendas acima de 1000 e média.",
    input: "1500, 800, 2000, 0",
    output: "Total: 4300, Acima de 1000: 2, Média: 1433.33",
    code: `# Acumulador Condicional (Vendas)
totalVendas = 0
qtdeVendas = 0
qtdeVendas1000 = 0

while True:
    valorVenda = float(input("Informe o valor da venda (0 para encerrar): R$ "))
    if valorVenda == 0:
        break
    
    qtdeVendas += 1
    totalVendas += valorVenda
    if valorVenda > 1000:
        qtdeVendas1000 += 1

if qtdeVendas > 0:
    mediaVendas = totalVendas / qtdeVendas
    print(f"Total de vendas: R$ {totalVendas:.2f}")
    print(f"Vendas acima de R$1000: {qtdeVendas1000}")
    print(f"Média das vendas: R$ {mediaVendas:.2f}")`,
    testCases: [{ values: { vendas: [1500,800,2000,0] }, result: "total=4300, acima=2, media=1433.33", stepByStep: "acumula e conta" }],
    explanation: "Múltiplos acumuladores com break."
  },

  // NÍVEL 4 - SEQUÊNCIAS MATEMÁTICAS (exercícios 15-17)
  {
    id: 15, nivel: 4,
    title: "Sequência de Fibonacci",
    statement: "Exiba os primeiros 12 termos da sequência de Fibonacci.",
    input: "Nenhuma entrada",
    output: "0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89",
    code: `# Sequência de Fibonacci
t1, t2 = 0, 1
print(t1, t2, end="")

for i in range(3, 13):
    proximo = t1 + t2
    print(f", {proximo}", end="")
    t1, t2 = t2, proximo`,
    testCases: [{ values: {}, result: "0,1,1,2,3,5,8,13,21,34,55,89", stepByStep: "cada termo = soma dos dois anteriores" }],
    explanation: "Atualização de variáveis a cada iteração."
  },
  {
    id: 16, nivel: 4,
    title: "Números Primos",
    statement: "Verifique se um número N é primo.",
    input: "N = 13",
    output: "13 é PRIMO",
    code: `# Números Primos
num = int(input("Informe um número: "))

ehPrimo = True

if num <= 1:
    ehPrimo = False
else:
    for i in range(2, num):
        if num % i == 0:
            ehPrimo = False
            break

if ehPrimo:
    print(f"{num} é PRIMO")
else:
    print(f"{num} NÃO é primo")`,
    testCases: [{ values: { num: 13 }, result: "PRIMO", stepByStep: "não tem divisores" }],
    explanation: "Testa divisores de 2 até N-1."
  },
  {
    id: 17, nivel: 4,
    title: "Números Perfeitos",
    statement: "Encontre números perfeitos entre 1 e 1000.",
    input: "Nenhuma entrada",
    output: "6, 28, 496",
    code: `# Números Perfeitos
LIMITE = 1000

for i in range(2, LIMITE + 1):
    soma = 0
    for j in range(1, i):
        if i % j == 0:
            soma += j
    if soma == i:
        print(i, end=", " if i < 496 else "")`,
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
    code: `# Triângulo de Números
n = int(input("Informe um número (1-9): "))

for i in range(1, n + 1):
    for j in range(1, i + 1):
        print(i, end=" ")
    print()`,
    testCases: [{ values: { n: 4 }, result: "1\n2 2\n3 3 3\n4 4 4 4", stepByStep: "laços aninhados" }],
    explanation: "Laço externo para linhas, interno para colunas."
  },
  {
    id: 19, nivel: 5,
    title: "Jogo de Adivinhação",
    statement: "Jogo onde o computador sorteia um número e o usuário tenta adivinhar.",
    input: "palpites: 50, 75, 62, 70",
    output: "Acertou! Tentativas: 4",
    code: `# Jogo de Adivinhação
import random

NS = random.randint(1, 100)
tentativas = 0

print("Tente adivinhar o número secreto (1-100)!")

while True:
    palpite = int(input("Digite seu palpite: "))
    tentativas += 1
    
    if palpite > NS:
        print("MUITO ALTO! Tente um número menor.")
    elif palpite < NS:
        print("MUITO BAIXO! Tente um número maior.")
    else:
        break

print(f"\\nPARABÉNS! Você acertou em {tentativas} tentativas!")`,
    testCases: [{ values: { NS: 70, palpites: [50,75,62,70] }, result: "acertou em 4", stepByStep: "loop até acertar" }],
    explanation: "While True com break ao acertar."
  },
  {
    id: 20, nivel: 5,
    title: "Menu Interativo",
    statement: "Menu com opções: 1-Somar, 2-Subtrair, 3-Sair.",
    input: "opções: 1 (10,5), 2 (20,8), 3",
    output: "Soma: 15, Subtração: 12, Encerrando...",
    code: `# Menu Interativo
while True:
    print("\\n===== MENU DE OPÇÕES =====")
    print("1 - Somar dois números")
    print("2 - Subtrair dois números")
    print("3 - Sair")
    op = int(input("Escolha uma opção: "))
    
    if op == 1:
        print("\\nOPÇÃO 1 - SOMAR")
        num1 = float(input("Informe o primeiro número: "))
        num2 = float(input("Informe o segundo número: "))
        print(f"Resultado: {num1 + num2}")
    elif op == 2:
        print("\\nOPÇÃO 2 - SUBTRAIR")
        num1 = float(input("Informe o primeiro número: "))
        num2 = float(input("Informe o segundo número: "))
        print(f"Resultado: {num1 - num2}")
    elif op == 3:
        print("Encerrando o programa...")
        break
    else:
        print("Opção inválida!")
    
    input("\\nPressione ENTER para continuar...")`,
    testCases: [{ values: { opcoes: [1,10,5,2,20,8,3] }, result: "soma=15, subtração=12, encerra", stepByStep: "loop até opção 3" }],
    explanation: "While True com break na opção de sair."
  }
];

// Renderiza a seção de conceitos de repetição em Python
function renderConceitosRepeticao() {
  return `
    <div class="content-card">
      <h2 class="card-title">🔄 Laços de Repetição em Python</h2>
      <p>Em Python existem dois tipos principais de laços de repetição:</p>
      <ul style="margin-left: 1.5rem; color: var(--text-secondary);">
        <li><strong>for</strong> – quando sabemos o número exato de repetições ou queremos iterar sobre uma sequência</li>
        <li><strong>while</strong> – quando a repetição depende de uma condição</li>
      </ul>
    </div>
    
    <div class="content-card">
      <h2 class="card-title">🔄 Laço for</h2>
      <div class="code-example">
        <div class="code-example-header">
          <span class="code-icon">📝</span>
          <span>Sintaxe do for</span>
        </div>
        <pre><code>for variavel in range(inicio, fim, passo):
    # instruções

# Exemplo
for i in range(1, 11):
    print(i)</code></pre>
      </div>
    </div>
    
    <div class="content-card">
      <h2 class="card-title">🔄 Laço while</h2>
      <div class="code-example">
        <div class="code-example-header">
          <span class="code-icon">📝</span>
          <span>Sintaxe do while</span>
        </div>
        <pre><code>while condicao:
    # instruções

# Exemplo
i = 1
while i <= 10:
    print(i)
    i += 1</code></pre>
      </div>
    </div>
    
    <div class="content-card">
      <h2 class="card-title">🔄 Comandos de Controle</h2>
      <div class="operators-table">
        <div class="operator-row header"><div>Comando</div><div>Descrição</div></div>
        <div class="operator-row"><div><code>break</code></div><div>Sai imediatamente do laço</div></div>
        <div class="operator-row"><div><code>continue</code></div><div>Pula para a próxima iteração</div></div>
        <div class="operator-row"><div><code>else</code></div><div>Executado se o laço não foi interrompido por break</div></div>
      </div>
    </div>
  `;
}

// Renderiza a seção de exercícios de repetição
function renderExerciciosRepeticao() {
  const currentEx = repeticaoExercises.find(e => e.id === currentRepeticaoExercise) || repeticaoExercises[0];
  
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
        <span>📋 Exercícios de Repetição (Python)</span>
        <span class="filter-count">${repeticaoExercises.length} exercícios disponíveis</span>
      </div>
      <div class="filter-buttons">
        ${repeticaoExercises.map(ex => `
          <button class="filter-btn ${ex.id === currentRepeticaoExercise ? 'active' : ''}" data-ex-id="${ex.id}" title="Nível ${ex.nivel}: ${niveis[ex.nivel].nome}">
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
          <div class="input-example"><strong>📥 Entrada:</strong> ${currentEx.input}</div>
          <div class="output-example"><strong>📤 Saída:</strong> ${currentEx.output}</div>
        </div>
      </div>
      
      <div class="exercise-code">
        <div class="code-header-custom">
          <span>💻 Código de Resolução (Python)</span>
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
              <div class="test-step"><strong>🔍 Passo a passo:</strong> ${test.stepByStep}</div>
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
  return `
    <div class="page-header">
      <h1 class="page-title"><span>🔄</span> Estruturas de Repetição em Python</h1>
      <p class="page-subtitle">Aprenda a criar loops com for e while</p>
    </div>
    
    <div class="sub-nav">
      <button class="sub-nav-btn ${currentRepeticaoSubpage === 'conceitos' ? 'active' : ''}" data-subpage="conceitos">
        📘 Conceitos
      </button>
      <button class="sub-nav-btn ${currentRepeticaoSubpage === 'exercicios' ? 'active' : ''}" data-subpage="exercicios">
        ✏️ Exercícios
      </button>
    </div>
    
    <div id="repeticao-content">
      ${currentRepeticaoSubpage === 'conceitos' ? renderConceitosRepeticao() : renderExerciciosRepeticao()}
    </div>
  `;
}