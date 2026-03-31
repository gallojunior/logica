const operadoresExercises = [
  {
    id: 1,
    title: "Cálculo de Área do Retângulo",
    statement: "Escreva um programa em JavaScript que calcule a área de um retângulo, dados seu comprimento e largura.",
    input: "comprimento = 5, largura = 3",
    output: "Área = 15",
    code: `// Cálculo da área do retângulo
let comprimento, largura, area

console.log("Informe o comprimento: ")
comprimento = parseInt(prompt("Informe o comprimento: "))
console.log("Informe a largura: ")
largura = parseInt(prompt("Informe a largura: "))

area = comprimento * largura

console.log("A área do retângulo é: ", area)`,
    testCases: [
      { values: { comprimento: 5, largura: 3 }, result: 15, stepByStep: "área = 5 × 3 = 15" },
      { values: { comprimento: 10, largura: 4 }, result: 40, stepByStep: "área = 10 × 4 = 40" },
      { values: { comprimento: 7, largura: 2 }, result: 14, stepByStep: "área = 7 × 2 = 14" }
    ],
    explanation: "A área do retângulo é calculada multiplicando o comprimento pela largura. Utilizamos o operador aritmético de multiplicação (*) para realizar o cálculo."
  },
  {
    id: 2,
    title: "Conversão de Temperatura",
    statement: "Converta uma temperatura de Celsius para Fahrenheit usando a fórmula: °F = (°C × 9/5) + 32",
    input: "tempC = 30",
    output: "tempF = 86",
    code: `// Conversão de temperatura
let tempC, tempF

console.log("Informe a temperatura em Celsius: ")
tempC = parseFloat(prompt("Informe a temperatura em Celsius: "))

tempF = (tempC * 9 / 5) + 32

console.log(tempC + "°C equivalem a " + tempF + "°F")`,
    testCases: [
      { values: { tempC: 30 }, result: 86, stepByStep: "tempF = (30 × 9 ÷ 5) + 32 = (270 ÷ 5) + 32 = 54 + 32 = 86" },
      { values: { tempC: 0 }, result: 32, stepByStep: "tempF = (0 × 9 ÷ 5) + 32 = 0 + 32 = 32" },
      { values: { tempC: 100 }, result: 212, stepByStep: "tempF = (100 × 9 ÷ 5) + 32 = (900 ÷ 5) + 32 = 180 + 32 = 212" }
    ],
    explanation: "A conversão utiliza operadores aritméticos: multiplicação (*), divisão (/) e adição (+). A ordem das operações segue a precedência matemática: primeiro a multiplicação e divisão, depois a adição."
  },
  {
    id: 3,
    title: "Média Aritmética",
    statement: "Calcule a média aritmética de três notas.",
    input: "nota1 = 7, nota2 = 8, nota3 = 9",
    output: "Média = 8",
    code: `// Cálculo da média aritmética
let nota1, nota2, nota3, media

console.log("Informe a primeira nota: ")
nota1 = parseFloat(prompt("Informe a primeira nota: "))
console.log("Informe a segunda nota: ")
nota2 = parseFloat(prompt("Informe a segunda nota: "))
console.log("Informe a terceira nota: ")
nota3 = parseFloat(prompt("Informe a terceira nota: "))

media = (nota1 + nota2 + nota3) / 3

console.log("A média é: ", media)`,
    testCases: [
      { values: { nota1: 7, nota2: 8, nota3: 9 }, result: 8, stepByStep: "média = (7 + 8 + 9) ÷ 3 = 24 ÷ 3 = 8" },
      { values: { nota1: 5, nota2: 6, nota3: 7 }, result: 6, stepByStep: "média = (5 + 6 + 7) ÷ 3 = 18 ÷ 3 = 6" },
      { values: { nota1: 10, nota2: 9, nota3: 8 }, result: 9, stepByStep: "média = (10 + 9 + 8) ÷ 3 = 27 ÷ 3 = 9" }
    ],
    explanation: "A média aritmética é calculada somando todos os valores (operador de adição +) e dividindo pela quantidade de valores (operador de divisão /). Os parênteses garantem que a soma seja realizada antes da divisão."
  },
  {
    id: 4,
    title: "Cálculo de Distância",
    statement: "Calcule a distância percorrida por um objeto em movimento uniforme, dados a velocidade e o tempo.",
    input: "velocidade = 60 km/h, tempo = 2 h",
    output: "Distância = 120 km",
    code: `// Cálculo de distância
let velocidade, tempo, distancia

console.log("Informe a velocidade (km/h): ")
velocidade = parseFloat(prompt("Informe a velocidade (km/h): "))
console.log("Informe o tempo (horas): ")
tempo = parseFloat(prompt("Informe o tempo (horas): "))

distancia = velocidade * tempo

console.log("A distância percorrida é: " + distancia + " km")`,
    testCases: [
      { values: { velocidade: 60, tempo: 2 }, result: 120, stepByStep: "distância = 60 × 2 = 120 km" },
      { values: { velocidade: 80, tempo: 1.5 }, result: 120, stepByStep: "distância = 80 × 1.5 = 120 km" },
      { values: { velocidade: 100, tempo: 3 }, result: 300, stepByStep: "distância = 100 × 3 = 300 km" }
    ],
    explanation: "A distância é calculada pela fórmula física: distância = velocidade × tempo. Utilizamos o operador de multiplicação (*) para calcular o produto entre as variáveis."
  },
  {
    id: 5,
    title: "Verificação de Número Par",
    statement: "Verifique se um número é par (retorne verdadeiro se for par).",
    input: "num = 6",
    output: "É par? Verdadeiro",
    code: `// Verificação de número par
let num
let ehPar

console.log("Informe um número: ")
num = parseInt(prompt("Informe um número: "))

ehPar = (num % 2 == 0)

if (ehPar) {
  console.log("O número " + num + " é PAR")
} else {
  console.log("O número " + num + " é ÍMPAR")
}`,
    testCases: [
      { values: { num: 6 }, result: true, stepByStep: "6 % 2 = 0 → 0 == 0 → verdadeiro → é PAR" },
      { values: { num: 7 }, result: false, stepByStep: "7 % 2 = 1 → 1 == 0 → falso → é ÍMPAR" },
      { values: { num: 0 }, result: true, stepByStep: "0 % 2 = 0 → 0 == 0 → verdadeiro → é PAR" }
    ],
    explanation: "Usamos o operador de resto da divisão (%) para verificar se o número é divisível por 2. Se o resto for igual a 0, o número é par. O operador relacional (==) compara o resultado com zero, retornando um valor lógico."
  },
  {
    id: 6,
    title: "Equação do Segundo Grau (Delta)",
    statement: "Calcule o delta de uma equação quadrática: Δ = b² - 4ac",
    input: "a = 1, b = -5, c = 6",
    output: "Delta = 1",
    code: `// Cálculo do delta
let a, b, c, delta

console.log("Informe o valor de a: ")
a = parseFloat(prompt("Informe o valor de a: "))
console.log("Informe o valor de b: ")
b = parseFloat(prompt("Informe o valor de b: "))
console.log("Informe o valor de c: ")
c = parseFloat(prompt("Informe o valor de c: "))

delta = (b * b) - (4 * a * c)

console.log("O valor de delta é: ", delta)`,
    testCases: [
      { values: { a: 1, b: -5, c: 6 }, result: 1, stepByStep: "Δ = (-5)² - 4×1×6 = 25 - 24 = 1" },
      { values: { a: 1, b: 2, c: 1 }, result: 0, stepByStep: "Δ = 2² - 4×1×1 = 4 - 4 = 0" },
      { values: { a: 1, b: 1, c: 1 }, result: -3, stepByStep: "Δ = 1² - 4×1×1 = 1 - 4 = -3" }
    ],
    explanation: "O delta é calculado usando operadores aritméticos: multiplicação (*), subtração (-) e potenciação implícita (b*b). A fórmula completa é: delta = b² - 4ac."
  },
  {
    id: 7,
    title: "Comparação de Valores",
    statement: "Receba dois números e retorne verdadeiro se o primeiro for maior que o segundo E a diferença entre eles for maior que 10.",
    input: "num1 = 25, num2 = 10",
    output: "Verdadeiro",
    code: `// Comparação de valores
let num1, num2
let resultado

console.log("Informe o primeiro número: ")
num1 = parseInt(prompt("Informe o primeiro número: "))
console.log("Informe o segundo número: ")
num2 = parseInt(prompt("Informe o segundo número: "))

resultado = (num1 > num2) && ((num1 - num2) > 10)

console.log("Resultado: ", resultado)`,
    testCases: [
      { values: { num1: 25, num2: 10 }, result: true, stepByStep: "25 > 10 → verdadeiro; 25 - 10 = 15 → 15 > 10 → verdadeiro; verdadeiro E verdadeiro → verdadeiro" },
      { values: { num1: 20, num2: 15 }, result: false, stepByStep: "20 > 15 → verdadeiro; 20 - 15 = 5 → 5 > 10 → falso; verdadeiro E falso → falso" },
      { values: { num1: 8, num2: 12 }, result: false, stepByStep: "8 > 12 → falso; (falso E qualquer coisa) → falso" }
    ],
    explanation: "Utilizamos operadores relacionais (>, -) para comparar os números, e o operador lógico '&&' (AND) para combinar as duas condições. Ambas precisam ser verdadeiras para o resultado final ser verdadeiro."
  },
  {
    id: 8,
    title: "Cálculo de Salário Líquido",
    statement: "Calcule o salário líquido considerando desconto de 10% para INSS e 15% para IR (aplicados sequencialmente).",
    input: "salario_bruto = 5000",
    output: "Salário líquido = 3825",
    code: `// Cálculo de salário líquido
let salarioBruto, inss, ir, salarioLiquido

console.log("Informe o salário bruto: R$ ")
salarioBruto = parseFloat(prompt("Informe o salário bruto: R$ "))

inss = salarioBruto * 0.10
salarioLiquido = salarioBruto - inss
ir = salarioLiquido * 0.15
salarioLiquido = salarioLiquido - ir

console.log("Salário líquido: R$ ", salarioLiquido)`,
    testCases: [
      { values: { salarioBruto: 5000 }, result: 3825, stepByStep: "INSS = 5000 × 0.10 = 500; após INSS = 4500; IR = 4500 × 0.15 = 675; líquido = 4500 - 675 = 3825" },
      { values: { salarioBruto: 3000 }, result: 2295, stepByStep: "INSS = 3000 × 0.10 = 300; após INSS = 2700; IR = 2700 × 0.15 = 405; líquido = 2700 - 405 = 2295" },
      { values: { salarioBruto: 10000 }, result: 7650, stepByStep: "INSS = 10000 × 0.10 = 1000; após INSS = 9000; IR = 9000 × 0.15 = 1350; líquido = 9000 - 1350 = 7650" }
    ],
    explanation: "O cálculo utiliza operadores aritméticos de multiplicação (*) e subtração (-). Os descontos são aplicados sequencialmente: primeiro o INSS sobre o bruto, depois o IR sobre o valor após INSS."
  },
  {
    id: 9,
    title: "Verificação de Triângulo Válido",
    statement: "Verifique se três lados podem formar um triângulo válido.",
    input: "a = 5, b = 7, c = 10",
    output: "É válido? Verdadeiro",
    code: `// Verificação de triângulo válido
let a, b, c
let trianguloValido

console.log("Informe o primeiro lado: ")
a = parseInt(prompt("Informe o primeiro lado: "))
console.log("Informe o segundo lado: ")
b = parseInt(prompt("Informe o segundo lado: "))
console.log("Informe o terceiro lado: ")
c = parseInt(prompt("Informe o terceiro lado: "))

trianguloValido = (a + b > c) && (a + c > b) && (b + c > a)

if (trianguloValido) {
  console.log("Os lados formam um triângulo válido")
} else {
  console.log("Os lados NÃO formam um triângulo válido")
}`,
    testCases: [
      { values: { a: 5, b: 7, c: 10 }, result: true, stepByStep: "5+7=12 > 10 (V); 5+10=15 > 7 (V); 7+10=17 > 5 (V); todas verdadeiras → VÁLIDO" },
      { values: { a: 1, b: 1, c: 3 }, result: false, stepByStep: "1+1=2 > 3? FALSO → INVÁLIDO" },
      { values: { a: 3, b: 4, c: 5 }, result: true, stepByStep: "3+4=7 > 5 (V); 3+5=8 > 4 (V); 4+5=9 > 3 (V); todas verdadeiras → VÁLIDO" }
    ],
    explanation: "Utilizamos operadores relacionais (>) e aritméticos (+) combinados com o operador lógico '&&' (AND). Para um triângulo ser válido, a soma de quaisquer dois lados deve ser maior que o terceiro."
  },
  {
    id: 10,
    title: "Resistência Equivalente em Paralelo",
    statement: "Calcule a resistência equivalente de dois resistores em paralelo.",
    input: "r1 = 6, r2 = 3",
    output: "Resistência equivalente = 2",
    code: `// Resistência equivalente em paralelo
let r1, r2, req

console.log("Informe o valor do primeiro resistor (Ω): ")
r1 = parseFloat(prompt("Informe o valor do primeiro resistor (Ω): "))
console.log("Informe o valor do segundo resistor (Ω): ")
r2 = parseFloat(prompt("Informe o valor do segundo resistor (Ω): "))

req = (r1 * r2) / (r1 + r2)

console.log("A resistência equivalente é: " + req + " Ω")`,
    testCases: [
      { values: { r1: 6, r2: 3 }, result: 2, stepByStep: "req = (6 × 3) ÷ (6 + 3) = 18 ÷ 9 = 2 Ω" },
      { values: { r1: 10, r2: 10 }, result: 5, stepByStep: "req = (10 × 10) ÷ (10 + 10) = 100 ÷ 20 = 5 Ω" },
      { values: { r1: 4, r2: 12 }, result: 3, stepByStep: "req = (4 × 12) ÷ (4 + 12) = 48 ÷ 16 = 3 Ω" }
    ],
    explanation: "A fórmula para resistores em paralelo é: (R1 × R2) / (R1 + R2). Utilizamos multiplicação (*), adição (+) e divisão (/). Os parênteses garantem a ordem correta das operações."
  }
];

// Renderiza a seção de conceitos em JavaScript
function renderConceitosOperadores() {
  return `
    <div class="content-card">
      <h2 class="card-title">📌 Expressões em JavaScript</h2>
      <p>Uma expressão em JavaScript é uma <strong>combinação de valores, variáveis, operadores e funções</strong> que são interpretados e produzem um valor. Este processo chama-se <strong>avaliação</strong>.</p>
    </div>
    
    <div class="content-card">
      <h2 class="card-title">🔧 Operador de Atribuição</h2>
      <p>Para atribuir um valor a uma variável usamos o operador de atribuição <code>=</code>.</p>
      
      <div class="code-example">
        <div class="code-example-header">
          <span class="code-icon">📝</span>
          <span>Atribuição em JavaScript</span>
        </div>
        <pre><code>let x = 10;
let y = x;
let z = x + y;
let resultado = prompt("Digite um valor:");</code></pre>
      </div>
      
      <div class="info-callout">
        <span class="info-icon-callout">⚠️</span>
        <div>O sinal de igual <code>"="</code> é o símbolo da atribuição. A variável à esquerda <strong>recebe</strong> o valor das operações que estiverem à direita.</div>
      </div>
    </div>
    
    <div class="content-card">
      <h2 class="card-title">➕ Operadores Aritméticos</h2>
      <p>Os operadores aritméticos realizam operações matemáticas em valores numéricos.</p>
      
      <div class="operators-table">
        <div class="operator-row header">
          <div>Operador</div>
          <div>Descrição</div>
          <div>Exemplo</div>
          <div>Prioridade</div>
        </div>
        <div class="operator-row">
          <div><code>+</code></div>
          <div>Adição / Concatenação</div>
          <div><code>5 + 3 // 8</code></div>
          <div>1</div>
        </div>
        <div class="operator-row">
          <div><code>-</code></div>
          <div>Subtração</div>
          <div><code>10 - 4 // 6</code></div>
          <div>1</div>
        </div>
        <div class="operator-row">
          <div><code>*</code></div>
          <div>Multiplicação</div>
          <div><code>6 * 7 // 42</code></div>
          <div>2</div>
        </div>
        <div class="operator-row">
          <div><code>/</code></div>
          <div>Divisão</div>
          <div><code>15 / 3 // 5</code></div>
          <div>2</div>
        </div>
        <div class="operator-row">
          <div><code>%</code></div>
          <div>Resto da divisão (módulo)</div>
          <div><code>17 % 5 // 2</code></div>
          <div>2</div>
        </div>
        <div class="operator-row">
          <div><code>**</code></div>
          <div>Exponenciação</div>
          <div><code>2 ** 3 // 8</code></div>
          <div>2</div>
        </div>
      </div>
      
      <div class="info-callout">
        <span class="info-icon-callout">📐</span>
        <div><strong>Precedência:</strong> Quanto maior o número, antes a operação ocorre.<br>
        Exemplo: <code>6 + 7 * 9</code> → A multiplicação é feita antes, resultado = 69.</div>
      </div>
    </div>
    
    <div class="content-card">
      <h2 class="card-title">⚖️ Operadores de Comparação</h2>
      <p>Os operadores de comparação comparam dois valores e retornam um valor booleano (true ou false).</p>
      
      <div class="operators-table">
        <div class="operator-row header">
          <div>Operador</div>
          <div>Descrição</div>
          <div>Exemplo</div>
          <div>Resultado</div>
        </div>
        <div class="operator-row">
          <div><code>==</code></div>
          <div>Igual (valor)</div>
          <div><code>5 == "5"</code></div>
          <div>true</div>
        </div>
        <div class="operator-row">
          <div><code>===</code></div>
          <div>Igual (valor e tipo)</div>
          <div><code>5 === "5"</code></div>
          <div>false</div>
        </div>
        <div class="operator-row">
          <div><code>!=</code></div>
          <div>Diferente (valor)</div>
          <div><code>5 != "5"</code></div>
          <div>false</div>
        </div>
        <div class="operator-row">
          <div><code>!==</code></div>
          <div>Diferente (valor e tipo)</div>
          <div><code>5 !== "5"</code></div>
          <div>true</div>
        </div>
        <div class="operator-row">
          <div><code>&gt;</code></div>
          <div>Maior que</div>
          <div><code>10 > 5</code></div>
          <div>true</div>
        </div>
        <div class="operator-row">
          <div><code>&lt;</code></div>
          <div>Menor que</div>
          <div><code>3 < 8</code></div>
          <div>true</div>
        </div>
        <div class="operator-row">
          <div><code>&gt;=</code></div>
          <div>Maior ou igual</div>
          <div><code>5 >= 5</code></div>
          <div>true</div>
        </div>
        <div class="operator-row">
          <div><code>&lt;=</code></div>
          <div>Menor ou igual</div>
          <div><code>4 <= 3</code></div>
          <div>false</div>
        </div>
      </div>
    </div>
    
    <div class="content-card">
      <h2 class="card-title">🔀 Operadores Lógicos</h2>
      <p>Operadores lógicos combinam expressões booleanas.</p>
      
      <div class="operators-table">
        <div class="operator-row header">
          <div>Operador</div>
          <div>Descrição</div>
          <div>Exemplo</div>
          <div>Resultado</div>
        </div>
        <div class="operator-row">
          <div><code>&&</code></div>
          <div>E lógico (AND)</div>
          <div><code>true && false</code></div>
          <div>false</div>
        </div>
        <div class="operator-row">
          <div><code>||</code></div>
          <div>OU lógico (OR)</div>
          <div><code>true || false</code></div>
          <div>true</div>
        </div>
        <div class="operator-row">
          <div><code>!</code></div>
          <div>NÃO lógico (NOT)</div>
          <div><code>!true</code></div>
          <div>false</div>
        </div>
      </div>
      
      <div class="info-callout">
        <span class="info-icon-callout">📊</span>
        <div><strong>Tabela Verdade - AND (&&):</strong><br>
        V && V = V | V && F = F | F && V = F | F && F = F</div>
      </div>
      <div class="info-callout">
        <span class="info-icon-callout">📊</span>
        <div><strong>Tabela Verdade - OR (||):</strong><br>
        V || V = V | V || F = V | F || V = V | F || F = F</div>
      </div>
      <div class="info-callout">
        <span class="info-icon-callout">📊</span>
        <div><strong>Tabela Verdade - NOT (!):</strong><br>
        !V = F | !F = V</div>
      </div>
    </div>
    
    <div class="content-card">
      <h2 class="card-title">📋 Resumo das Prioridades</h2>
      <div class="operators-table">
        <div class="operator-row header">
          <div>Operação</div>
          <div>Prioridade</div>
        </div>
        <div class="operator-row">
          <div>Operações Aritméticas (+, -, *, /, %)</div>
          <div>Maior (2 primeiro, depois 1)</div>
        </div>
        <div class="operator-row">
          <div>Operações Relacionais (>, <, >=, <=, ==, !=, ===, !==)</div>
          <div>Média</div>
        </div>
        <div class="operator-row">
          <div>Operações Lógicas (&&, ||, !)</div>
          <div>Menor (! tem prioridade 3, && tem 2, || tem 1)</div>
        </div>
      </div>
      <div class="info-callout" style="margin-top: 1rem;">
        <span class="info-icon-callout">💡</span>
        <div><strong>Dica:</strong> Use parênteses para garantir a ordem de execução desejada, especialmente quando combinar diferentes tipos de operadores!</div>
      </div>
    </div>
  `;
}

// Renderiza a seção de exercícios
function renderExerciciosOperadores() {
  const currentEx = operadoresExercises.find(e => e.id === currentOperadorExercise) || operadoresExercises[0];
  
  return `
    <!-- Filtro de exercícios -->
    <div class="exercises-filter">
      <div class="filter-header">
        <span>📋 Exercícios de Operadores (JavaScript)</span>
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
    
    <!-- Exercício atual -->
    <div class="exercise-card">
      <div class="exercise-header">
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
          <span>💻 Código de Resolução (JavaScript)</span>
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

// Função para renderizar a página completa de operadores
function renderOperatorsPage() {
  return `
    <div class="page-header">
      <h1 class="page-title"><span>➕</span> Operadores em JavaScript</h1>
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