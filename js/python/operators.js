const operadoresExercises = [
  {
    id: 1,
    title: "Cálculo de Área do Retângulo",
    statement: "Escreva um programa em Python que calcule a área de um retângulo, dados seu comprimento e largura.",
    input: "comprimento = 5, largura = 3",
    output: "Área = 15",
    code: `# Cálculo da área do retângulo
comprimento = int(input("Informe o comprimento: "))
largura = int(input("Informe a largura: "))

area = comprimento * largura

print(f"A área do retângulo é: {area}")`,
    testCases: [
      { values: { comprimento: 5, largura: 3 }, result: 15, stepByStep: "área = 5 × 3 = 15" },
      { values: { comprimento: 10, largura: 4 }, result: 40, stepByStep: "área = 10 × 4 = 40" },
      { values: { comprimento: 7, largura: 2 }, result: 14, stepByStep: "área = 7 × 2 = 14" }
    ],
    explanation: "A área do retângulo é calculada multiplicando o comprimento pela largura."
  },
  {
    id: 2,
    title: "Conversão de Temperatura",
    statement: "Converta Celsius para Fahrenheit: °F = (°C × 9/5) + 32",
    input: "tempC = 30",
    output: "tempF = 86",
    code: `# Conversão de temperatura
tempC = float(input("Informe a temperatura em Celsius: "))

tempF = (tempC * 9 / 5) + 32

print(f"{tempC}°C equivalem a {tempF}°F")`,
    testCases: [
      { values: { tempC: 30 }, result: 86, stepByStep: "tempF = (30 × 9 ÷ 5) + 32 = 86" },
      { values: { tempC: 0 }, result: 32, stepByStep: "tempF = 32" },
      { values: { tempC: 100 }, result: 212, stepByStep: "tempF = 212" }
    ],
    explanation: "Conversão utilizando operadores aritméticos."
  },
  {
    id: 3,
    title: "Média Aritmética",
    statement: "Calcule a média aritmética de três notas.",
    input: "nota1 = 7, nota2 = 8, nota3 = 9",
    output: "Média = 8",
    code: `# Cálculo da média
nota1 = float(input("Informe a primeira nota: "))
nota2 = float(input("Informe a segunda nota: "))
nota3 = float(input("Informe a terceira nota: "))

media = (nota1 + nota2 + nota3) / 3

print(f"A média é: {media}")`,
    testCases: [
      { values: { nota1: 7, nota2: 8, nota3: 9 }, result: 8, stepByStep: "média = (7+8+9)/3 = 8" }
    ],
    explanation: "Soma das notas dividido pela quantidade."
  },
  {
    id: 4,
    title: "Cálculo de Distância",
    statement: "Calcule a distância percorrida: distância = velocidade × tempo",
    input: "velocidade = 60, tempo = 2",
    output: "Distância = 120 km",
    code: `# Cálculo de distância
velocidade = float(input("Informe a velocidade (km/h): "))
tempo = float(input("Informe o tempo (horas): "))

distancia = velocidade * tempo

print(f"A distância percorrida é: {distancia} km")`,
    testCases: [
      { values: { velocidade: 60, tempo: 2 }, result: 120, stepByStep: "distância = 60 × 2 = 120" }
    ],
    explanation: "Distância = velocidade × tempo."
  },
  {
    id: 5,
    title: "Verificação de Número Par",
    statement: "Verifique se um número é par.",
    input: "num = 6",
    output: "O número 6 é PAR",
    code: `# Verificação de número par
num = int(input("Informe um número: "))

if num % 2 == 0:
    print(f"O número {num} é PAR")
else:
    print(f"O número {num} é ÍMPAR")`,
    testCases: [
      { values: { num: 6 }, result: "PAR", stepByStep: "6 % 2 = 0 → PAR" }
    ],
    explanation: "Usamos o operador módulo (%) para verificar divisibilidade por 2."
  },
  {
    id: 6,
    title: "Equação do Segundo Grau (Delta)",
    statement: "Calcule o delta: Δ = b² - 4ac",
    input: "a = 1, b = -5, c = 6",
    output: "Delta = 1",
    code: `# Cálculo do delta
a = float(input("Informe o valor de a: "))
b = float(input("Informe o valor de b: "))
c = float(input("Informe o valor de c: "))

delta = (b * b) - (4 * a * c)

print(f"O valor de delta é: {delta}")`,
    testCases: [
      { values: { a: 1, b: -5, c: 6 }, result: 1, stepByStep: "Δ = (-5)² - 4×1×6 = 1" }
    ],
    explanation: "Fórmula do delta usando operadores aritméticos."
  },
  {
    id: 7,
    title: "Comparação de Valores",
    statement: "Retorne True se o primeiro for maior que o segundo E a diferença > 10.",
    input: "num1 = 25, num2 = 10",
    output: "True",
    code: `# Comparação de valores
num1 = int(input("Informe o primeiro número: "))
num2 = int(input("Informe o segundo número: "))

resultado = (num1 > num2) and ((num1 - num2) > 10)

print(f"Resultado: {resultado}")`,
    testCases: [
      { values: { num1: 25, num2: 10 }, result: true, stepByStep: "25>10 e 15>10 → True" }
    ],
    explanation: "Combinamos operadores relacionais com o operador lógico and."
  },
  {
    id: 8,
    title: "Cálculo de Salário Líquido",
    statement: "Calcule salário líquido com desconto de 10% INSS e 15% IR.",
    input: "salario_bruto = 5000",
    output: "Salário líquido = 3825",
    code: `# Cálculo de salário líquido
salarioBruto = float(input("Informe o salário bruto: R$ "))

inss = salarioBruto * 0.10
salarioAposINSS = salarioBruto - inss
ir = salarioAposINSS * 0.15
salarioLiquido = salarioAposINSS - ir

print(f"Salário líquido: R$ {salarioLiquido:.2f}")`,
    testCases: [
      { values: { salarioBruto: 5000 }, result: 3825, stepByStep: "INSS=500; após=4500; IR=675; líquido=3825" }
    ],
    explanation: "Descontos aplicados sequencialmente."
  },
  {
    id: 9,
    title: "Verificação de Triângulo Válido",
    statement: "Verifique se três lados formam um triângulo válido.",
    input: "a = 5, b = 7, c = 10",
    output: "Válido",
    code: `# Verificação de triângulo válido
a = float(input("Informe o primeiro lado: "))
b = float(input("Informe o segundo lado: "))
c = float(input("Informe o terceiro lado: "))

valido = (a + b > c) and (a + c > b) and (b + c > a)

if valido:
    print("Os lados formam um triângulo válido")
else:
    print("Os lados NÃO formam um triângulo válido")`,
    testCases: [
      { values: { a: 5, b: 7, c: 10 }, result: true, stepByStep: "5+7=12>10, 5+10=15>7, 7+10=17>5 → válido" }
    ],
    explanation: "A soma de dois lados deve ser maior que o terceiro."
  },
  {
    id: 10,
    title: "Resistência Equivalente em Paralelo",
    statement: "Calcule a resistência equivalente de dois resistores em paralelo.",
    input: "r1 = 6, r2 = 3",
    output: "Resistência equivalente = 2",
    code: `# Resistência equivalente em paralelo
r1 = float(input("Informe o valor do primeiro resistor (Ω): "))
r2 = float(input("Informe o valor do segundo resistor (Ω): "))

req = (r1 * r2) / (r1 + r2)

print(f"A resistência equivalente é: {req} Ω")`,
    testCases: [
      { values: { r1: 6, r2: 3 }, result: 2, stepByStep: "req = (6×3)/(6+3) = 18/9 = 2" }
    ],
    explanation: "Fórmula para resistores em paralelo."
  }
];

// Renderiza a seção de conceitos em Python
function renderConceitosOperadores() {
  return `
    <div class="content-card">
      <h2 class="card-title">📌 Expressões em Python</h2>
      <p>Uma expressão em Python é uma <strong>combinação de valores, variáveis, operadores e funções</strong> que são interpretados e produzem um valor.</p>
    </div>
    
    <div class="content-card">
      <h2 class="card-title">🔧 Operador de Atribuição</h2>
      <div class="code-example">
        <div class="code-example-header">
          <span class="code-icon">📝</span>
          <span>Atribuição em Python</span>
        </div>
        <pre><code>x = 10
y = x
z = x + y
resultado = int(input("Digite um valor: "))</code></pre>
      </div>
    </div>
    
    <div class="content-card">
      <h2 class="card-title">➕ Operadores Aritméticos em Python</h2>
      <div class="operators-table">
        <div class="operator-row header">
          <div>Operador</div>
          <div>Descrição</div>
          <div>Exemplo</div>
        </div>
        <div class="operator-row"><div><code>+</code></div><div>Adição</div><div><code>5 + 3 # 8</code></div></div>
        <div class="operator-row"><div><code>-</code></div><div>Subtração</div><div><code>10 - 4 # 6</code></div></div>
        <div class="operator-row"><div><code>*</code></div><div>Multiplicação</div><div><code>6 * 7 # 42</code></div></div>
        <div class="operator-row"><div><code>/</code></div><div>Divisão</div><div><code>15 / 3 # 5.0</code></div></div>
        <div class="operator-row"><div><code>//</code></div><div>Divisão inteira</div><div><code>17 // 5 # 3</code></div></div>
        <div class="operator-row"><div><code>%</code></div><div>Resto da divisão</div><div><code>17 % 5 # 2</code></div></div>
        <div class="operator-row"><div><code>**</code></div><div>Exponenciação</div><div><code>2 ** 3 # 8</code></div></div>
      </div>
    </div>
    
    <div class="content-card">
      <h2 class="card-title">⚖️ Operadores de Comparação em Python</h2>
      <div class="operators-table">
        <div class="operator-row header"><div>Operador</div><div>Descrição</div><div>Exemplo</div></div>
        <div class="operator-row"><div><code>==</code></div><div>Igual</div><div><code>5 == 5 # True</code></div></div>
        <div class="operator-row"><div><code>!=</code></div><div>Diferente</div><div><code>5 != 3 # True</code></div></div>
        <div class="operator-row"><div><code>&gt;</code></div><div>Maior</div><div><code>10 > 5 # True</code></div></div>
        <div class="operator-row"><div><code>&lt;</code></div><div>Menor</div><div><code>3 < 8 # True</code></div></div>
        <div class="operator-row"><div><code>&gt;=</code></div><div>Maior ou igual</div><div><code>5 >= 5 # True</code></div></div>
        <div class="operator-row"><div><code>&lt;=</code></div><div>Menor ou igual</div><div><code>4 <= 3 # False</code></div></div>
      </div>
    </div>
    
    <div class="content-card">
      <h2 class="card-title">🔀 Operadores Lógicos em Python</h2>
      <div class="operators-table">
        <div class="operator-row header"><div>Operador</div><div>Descrição</div><div>Exemplo</div></div>
        <div class="operator-row"><div><code>and</code></div><div>E lógico</div><div><code>True and False # False</code></div></div>
        <div class="operator-row"><div><code>or</code></div><div>OU lógico</div><div><code>True or False # True</code></div></div>
        <div class="operator-row"><div><code>not</code></div><div>NÃO lógico</div><div><code>not True # False</code></div></div>
      </div>
    </div>
  `;
}

// Renderiza a seção de exercícios
function renderExerciciosOperadores() {
  const currentEx = operadoresExercises.find(e => e.id === currentOperadorExercise) || operadoresExercises[0];
  
  return `
    <div class="exercises-filter">
      <div class="filter-header">
        <span>📋 Exercícios de Operadores (Python)</span>
        <span class="filter-count">${operadoresExercises.length} exercícios disponíveis</span>
      </div>
      <div class="filter-buttons">
        ${operadoresExercises.map(ex => `
          <button class="filter-btn ${ex.id === currentOperadorExercise ? 'active' : ''}" data-ex-id="${ex.id}">
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

// Função para renderizar a página completa de operadores
function renderOperatorsPage() {
  return `
    <div class="page-header">
      <h1 class="page-title"><span>➕</span> Operadores em Python</h1>
      <p class="page-subtitle">Aprenda sobre operadores aritméticos, relacionais e lógicos com exemplos práticos</p>
    </div>
    
    <div class="sub-nav">
      <button class="sub-nav-btn ${currentOperadorSubpage === 'conceitos' ? 'active' : ''}" data-subpage="conceitos">
        📘 Conceitos
      </button>
      <button class="sub-nav-btn ${currentOperadorSubpage === 'exercicios' ? 'active' : ''}" data-subpage="exercicios">
        ✏️ Exercícios
      </button>
    </div>
    
    <div id="operadores-content">
      ${currentOperadorSubpage === 'conceitos' ? renderConceitosOperadores() : renderExerciciosOperadores()}
    </div>
  `;
}