// ========== DADOS DOS EXERCÍCIOS DE CONDICIONAIS EM PYTHON ==========
const condicionaisExercises = [
  {
    id: 1,
    title: "Verificação de Positivo/Negativo/Zero",
    statement: "Escreva um programa em Python que receba um número e determine se ele é positivo, negativo ou zero.",
    input: "num = -5",
    output: "O número é negativo.",
    code: `# Verificação de Positivo/Negativo/Zero
num = int(input("Informe um número: "))

if num > 0:
    print(f"O número {num} é POSITIVO")
elif num < 0:
    print(f"O número {num} é NEGATIVO")
else:
    print("O número é ZERO")`,
    testCases: [
      { values: { num: 5 }, result: "POSITIVO", stepByStep: "5 > 0 → POSITIVO" },
      { values: { num: -3 }, result: "NEGATIVO", stepByStep: "-3 < 0 → NEGATIVO" },
      { values: { num: 0 }, result: "ZERO", stepByStep: "0 → ZERO" }
    ],
    explanation: "Utilizamos a estrutura if-elif-else para verificar três possibilidades."
  },
  {
    id: 2,
    title: "Aprovação por Média",
    statement: "Receba três notas, calcule a média e determine se o aluno foi aprovado (média ≥ 7), em recuperação (5 ≤ média < 7) ou reprovado (média < 5).",
    input: "nota1 = 6, nota2 = 7, nota3 = 8",
    output: "Média = 7.0. Aprovado!",
    code: `# Aprovação por Média
nota1 = float(input("Informe a primeira nota: "))
nota2 = float(input("Informe a segunda nota: "))
nota3 = float(input("Informe a terceira nota: "))

media = (nota1 + nota2 + nota3) / 3

print(f"Média: {media:.1f}")

if media >= 7:
    print("APROVADO!")
elif media >= 5:
    print("RECUPERAÇÃO")
else:
    print("REPROVADO")`,
    testCases: [
      { values: { nota1: 7, nota2: 8, nota3: 9 }, result: "APROVADO", stepByStep: "média = 8.0 → APROVADO" },
      { values: { nota1: 5, nota2: 6, nota3: 7 }, result: "RECUPERAÇÃO", stepByStep: "média = 6.0 → RECUPERAÇÃO" },
      { values: { nota1: 4, nota2: 5, nota3: 3 }, result: "REPROVADO", stepByStep: "média = 4.0 → REPROVADO" }
    ],
    explanation: "Calculamos a média e usamos if-elif-else para classificar."
  },
  {
    id: 3,
    title: "Classificação de Triângulos",
    statement: "Receba três lados e classifique o triângulo em Equilátero, Isósceles ou Escaleno.",
    input: "a = 5, b = 5, c = 5",
    output: "Triângulo Equilátero",
    code: `# Classificação de Triângulos
a = float(input("Informe o primeiro lado: "))
b = float(input("Informe o segundo lado: "))
c = float(input("Informe o terceiro lado: "))

trianguloValido = (a + b > c) and (a + c > b) and (b + c > a)

if trianguloValido:
    if a == b == c:
        print("Triângulo EQUILÁTERO")
    elif a == b or a == c or b == c:
        print("Triângulo ISÓSCELES")
    else:
        print("Triângulo ESCALENO")
else:
    print("Os lados NÃO formam um triângulo válido")`,
    testCases: [
      { values: { a: 5, b: 5, c: 5 }, result: "EQUILÁTERO", stepByStep: "todos iguais → EQUILÁTERO" },
      { values: { a: 5, b: 5, c: 8 }, result: "ISÓSCELES", stepByStep: "dois iguais → ISÓSCELES" },
      { values: { a: 3, b: 4, c: 5 }, result: "ESCALENO", stepByStep: "todos diferentes → ESCALENO" }
    ],
    explanation: "Primeiro verificamos se forma um triângulo, depois classificamos."
  },
  {
    id: 4,
    title: "Cálculo de Descontos em Compras",
    statement: "Aplique descontos: 10% se valor ≥ 500, 5% se 300 ≤ valor < 500, sem desconto caso contrário.",
    input: "valor = 600",
    output: "Valor com desconto: 540",
    code: `# Cálculo de Descontos
valor = float(input("Informe o valor total da compra: R$ "))

if valor >= 500:
    valorFinal = valor * 0.90
    print(f"Valor com desconto de 10%: R$ {valorFinal}")
elif valor >= 300:
    valorFinal = valor * 0.95
    print(f"Valor com desconto de 5%: R$ {valorFinal}")
else:
    print(f"Nenhum desconto aplicado. Valor: R$ {valor}")`,
    testCases: [
      { values: { valor: 600 }, result: 540, stepByStep: "≥500 → 10% → 540" },
      { values: { valor: 400 }, result: 380, stepByStep: "≥300 → 5% → 380" },
      { values: { valor: 200 }, result: 200, stepByStep: "sem desconto → 200" }
    ],
    explanation: "Faixas de desconto com if-elif-else."
  },
  {
    id: 5,
    title: "Verificação de Ano Bissexto",
    statement: "Determine se um ano é bissexto. Regras: divisível por 4 e não divisível por 100, ou divisível por 400.",
    input: "ano = 2024",
    output: "2024 é bissexto",
    code: `# Verificação de Ano Bissexto
ano = int(input("Informe o ano: "))

bissexto = (ano % 4 == 0 and ano % 100 != 0) or (ano % 400 == 0)

if bissexto:
    print(f"{ano} é BISSEXTO")
else:
    print(f"{ano} NÃO é bissexto")`,
    testCases: [
      { values: { ano: 2024 }, result: "BISSEXTO", stepByStep: "2024 % 4 = 0 e % 100 ≠ 0 → BISSEXTO" },
      { values: { ano: 1900 }, result: "NÃO BISSEXTO", stepByStep: "1900 % 100 = 0 → NÃO BISSEXTO" },
      { values: { ano: 2000 }, result: "BISSEXTO", stepByStep: "2000 % 400 = 0 → BISSEXTO" }
    ],
    explanation: "Condição composta com and e or."
  },
  {
    id: 6,
    title: "Classificação por Idade",
    statement: "Classifique: Criança (0-12), Adolescente (13-17), Adulto (18-59), Idoso (60+).",
    input: "idade = 25",
    output: "Adulto",
    code: `# Classificação por Idade
idade = int(input("Informe a idade: "))

if idade < 0:
    print("Idade inválida!")
elif idade <= 12:
    print("CRIANÇA")
elif idade <= 17:
    print("ADOLESCENTE")
elif idade <= 59:
    print("ADULTO")
else:
    print("IDOSO")`,
    testCases: [
      { values: { idade: 8 }, result: "CRIANÇA", stepByStep: "≤12 → CRIANÇA" },
      { values: { idade: 15 }, result: "ADOLESCENTE", stepByStep: "13-17 → ADOLESCENTE" },
      { values: { idade: 30 }, result: "ADULTO", stepByStep: "18-59 → ADULTO" },
      { values: { idade: 70 }, result: "IDOSO", stepByStep: "≥60 → IDOSO" }
    ],
    explanation: "Múltiplas condições em sequência."
  },
  {
    id: 7,
    title: "Operações Matemáticas com Escolha",
    statement: "Receba dois números e um código de operação: 1=soma, 2=subtração, 3=multiplicação, 4=divisão.",
    input: "num1 = 10, num2 = 5, op = 3",
    output: "Resultado: 50",
    code: `# Operações Matemáticas
num1 = float(input("Informe o primeiro número: "))
num2 = float(input("Informe o segundo número: "))
print("1 - Soma\n2 - Subtração\n3 - Multiplicação\n4 - Divisão")
op = int(input("Escolha a operação: "))

if op == 1:
    resultado = num1 + num2
    print(f"Soma: {resultado}")
elif op == 2:
    resultado = num1 - num2
    print(f"Subtração: {resultado}")
elif op == 3:
    resultado = num1 * num2
    print(f"Multiplicação: {resultado}")
elif op == 4:
    if num2 != 0:
        resultado = num1 / num2
        print(f"Divisão: {resultado}")
    else:
        print("Erro: divisão por zero!")
else:
    print("Operação inválida!")`,
    testCases: [
      { values: { num1: 10, num2: 5, op: 3 }, result: 50, stepByStep: "op=3 → multiplicação → 50" },
      { values: { num1: 10, num2: 5, op: 1 }, result: 15, stepByStep: "op=1 → soma → 15" },
      { values: { num1: 10, num2: 5, op: 4 }, result: 2, stepByStep: "op=4 → divisão → 2" }
    ],
    explanation: "Estrutura if-elif-else para múltiplas opções."
  },
  {
    id: 8,
    title: "Verificação de Usuário e Senha",
    statement: "Verifique se o nome de usuário e senha estão corretos. Usuário: 'aluno', Senha: '123456'.",
    input: "nome = 'aluno', senha = '123456'",
    output: "Acesso Permitido",
    code: `# Verificação de Usuário e Senha
nome = input("Informe o nome de usuário: ")
senha = input("Informe a senha: ")

if nome == "aluno" and senha == "123456":
    print("ACESSO PERMITIDO")
else:
    print("ACESSO NEGADO")`,
    testCases: [
      { values: { nome: "aluno", senha: "123456" }, result: "PERMITIDO", stepByStep: "ambos corretos → PERMITIDO" },
      { values: { nome: "aluno", senha: "senha123" }, result: "NEGADO", stepByStep: "senha incorreta → NEGADO" }
    ],
    explanation: "Operador lógico and para verificar ambas condições."
  },
  {
    id: 9,
    title: "Cálculo de IMC e Classificação",
    statement: "Calcule o IMC e classifique: Abaixo do peso (<18.5), Normal (18.5-24.9), Sobrepeso (25-29.9), Obesidade (≥30).",
    input: "peso = 70, altura = 1.75",
    output: "IMC = 22.86. Peso normal",
    code: `# Cálculo de IMC
peso = float(input("Informe o peso (kg): "))
altura = float(input("Informe a altura (m): "))

imc = peso / (altura ** 2)

print(f"IMC: {imc:.2f}")

if imc < 18.5:
    print("Abaixo do peso")
elif imc < 25:
    print("Peso normal")
elif imc < 30:
    print("Sobrepeso")
else:
    print("Obesidade")`,
    testCases: [
      { values: { peso: 70, altura: 1.75 }, result: "Peso normal", stepByStep: "IMC=22.86 → Normal" },
      { values: { peso: 50, altura: 1.70 }, result: "Abaixo do peso", stepByStep: "IMC=17.30 → Abaixo" },
      { values: { peso: 85, altura: 1.75 }, result: "Sobrepeso", stepByStep: "IMC=27.76 → Sobrepeso" }
    ],
    explanation: "Condições sequenciais para classificar IMC."
  },
  {
    id: 10,
    title: "Simulador de Calculadora de Produtos",
    statement: "Leia o código do produto e a quantidade, calcule o valor a pagar conforme a tabela.",
    input: "código = 102, quantidade = 2",
    output: "Total a Pagar: R$ 20,00",
    code: `# Simulador de Calculadora de Produtos
codigo = int(input("Informe o código do produto: "))
quantidade = int(input("Informe a quantidade: "))

if codigo == 100:
    valorUnitario = 10.00
elif codigo == 101:
    valorUnitario = 12.00
elif codigo == 102:
    valorUnitario = 10.00
elif codigo == 103:
    valorUnitario = 12.00
elif codigo == 104:
    valorUnitario = 15.00
elif codigo == 105:
    valorUnitario = 25.00
elif codigo == 106:
    valorUnitario = 6.00
else:
    print("Código inválido!")
    valorUnitario = 0

if valorUnitario > 0:
    total = valorUnitario * quantidade
    print(f"Total a pagar: R$ {total:.2f}")`,
    testCases: [
      { values: { codigo: 102, quantidade: 2 }, result: 20, stepByStep: "código 102 → R$10 × 2 = R$20" },
      { values: { codigo: 100, quantidade: 3 }, result: 30, stepByStep: "código 100 → R$10 × 3 = R$30" }
    ],
    explanation: "If-elif-else para selecionar valor unitário."
  }
];

// ========== FUNÇÕES DE RENDERIZAÇÃO ==========

// Renderiza a seção de conceitos de condicionais em Python
function renderConceitosCondicionais() {
  return `
    <div class="content-card">
      <h2 class="card-title">🎮 Estruturas de Controle em Python</h2>
      <p>Em Python, as estruturas condicionais são fundamentais para criar programas que tomam decisões.</p>
      
      <div class="info-callout">
        <span class="info-icon-callout">⚡</span>
        <div><strong>Estruturas Condicionais em Python:</strong><br>
        • <strong>if</strong> - execução condicional simples<br>
        • <strong>if-else</strong> - dois caminhos possíveis<br>
        • <strong>if-elif-else</strong> - múltiplas condições</div>
      </div>
    </div>
    
    <div class="content-card">
      <h2 class="card-title">✅ if - Execução Condicional</h2>
      <div class="code-example">
        <div class="code-example-header">
          <span class="code-icon">📝</span>
          <span>Sintaxe do if</span>
        </div>
        <pre><code>if condicao:
    # Executa se condição for True</code></pre>
      </div>
    </div>
    
    <div class="content-card">
      <h2 class="card-title">✅ if-else - Dois Caminhos</h2>
      <div class="code-example">
        <div class="code-example-header">
          <span class="code-icon">📝</span>
          <span>Sintaxe do if-else</span>
        </div>
        <pre><code>if condicao:
    # Executa se True
else:
    # Executa se False</code></pre>
      </div>
    </div>
    
    <div class="content-card">
      <h2 class="card-title">✅ if-elif-else - Múltiplas Condições</h2>
      <div class="code-example">
        <div class="code-example-header">
          <span class="code-icon">📝</span>
          <span>Sintaxe do if-elif-else</span>
        </div>
        <pre><code>if condicao1:
    # Executa se condicao1 for True
elif condicao2:
    # Executa se condicao1 for False e condicao2 for True
else:
    # Executa se todas as condições forem False</code></pre>
      </div>
    </div>
    
    <div class="content-card">
      <h2 class="card-title">✅ Operador Ternário</h2>
      <div class="code-example">
        <div class="code-example-header">
          <span class="code-icon">📝</span>
          <span>Sintaxe do operador ternário</span>
        </div>
        <pre><code>resultado = valor_se_verdadeiro if condicao else valor_se_falso</code></pre>
      </div>
    </div>
  `;
}

// Renderiza a seção de exercícios de condicionais
function renderExerciciosCondicionais() {
  const currentEx = condicionaisExercises.find(e => e.id === window.currentCondicionalExercise) || condicionaisExercises[0];
  
  return `
    <div class="exercises-filter">
      <div class="filter-header">
        <span>📋 Exercícios de Condicionais (Python)</span>
        <span class="filter-count">${condicionaisExercises.length} exercícios disponíveis</span>
      </div>
      <div class="filter-buttons">
        ${condicionaisExercises.map(ex => `
          <button class="filter-btn ${ex.id === window.currentCondicionalExercise ? 'active' : ''}" data-ex-id="${ex.id}">
            ${ex.id.toString().padStart(2, '0')}
          </button>
        `).join('')}
      </div>
    </div>
    
    <div class="exercise-card">
      <div class="exercise-header">
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
              <div class="test-values">
                <strong>Valores de entrada:</strong> ${Object.entries(test.values).map(([k, v]) => `${k} = ${v}`).join(', ')}
              </div>
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

// Função para renderizar a página completa de condicionais
function renderConditionalsPage() {
  const currentSubpage = window.currentCondicionalSubpage || 'conceitos';
  
  return `
    <div class="page-header">
      <h1 class="page-title"><span>🔀</span> Estruturas Condicionais em Python</h1>
      <p class="page-subtitle">Aprenda a criar decisões inteligentes com if, elif, else</p>
    </div>
    
    <div class="sub-nav">
      <button class="sub-nav-btn ${currentSubpage === 'conceitos' ? 'active' : ''}" data-subpage="conceitos">
        📘 Conceitos
      </button>
      <button class="sub-nav-btn ${currentSubpage === 'exercicios' ? 'active' : ''}" data-subpage="exercicios">
        ✏️ Exercícios
      </button>
    </div>
    
    <div id="condicionais-content">
      ${currentSubpage === 'conceitos' ? renderConceitosCondicionais() : renderExerciciosCondicionais()}
    </div>
  `;
}