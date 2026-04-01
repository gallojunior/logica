const operadoresExercises = [
  {
    id: 1,
    title: "Soma de dois números",
    statement: "Escreva um programa em Go que leia dois números inteiros e exiba a soma.",
    input: "num1 = 5, num2 = 3",
    output: "Soma = 8",
    code: `package main

import "fmt"

func main() {
    var num1, num2 int
    fmt.Print("Digite o primeiro número: ")
    fmt.Scan(&num1)
    fmt.Print("Digite o segundo número: ")
    fmt.Scan(&num2)

    soma := num1 + num2
    fmt.Printf("Soma = %d\n", soma)
}`,
    testCases: [
      { values: { num1: 5, num2: 3 }, result: 8, stepByStep: "5 + 3 = 8" }
    ],
    explanation: "Em Go, usamos fmt.Scan para ler a entrada do usuário. O operador '+' realiza a soma."
  },
  {
    id: 2,
    title: "Conversão de Temperatura",
    statement: "Converta uma temperatura de Celsius para Fahrenheit usando a fórmula: °F = (°C × 9/5) + 32",
    input: "tempC = 30",
    output: "tempF = 86",
    code: `package main

import "fmt"

func main() {
    var tempC float64
    fmt.Print("Informe a temperatura em Celsius: ")
    fmt.Scan(&tempC)

    tempF := (tempC * 9 / 5) + 32
    fmt.Printf("%.2f°C equivalem a %.2f°F\n", tempC, tempF)
}`,
    testCases: [
      { values: { tempC: 30 }, result: 86, stepByStep: "(30 × 9/5) + 32 = 86" }
    ],
    explanation: "A conversão utiliza operadores aritméticos: multiplicação (*), divisão (/) e adição (+)."
  },
  {
    id: 3,
    title: "Média Aritmética",
    statement: "Calcule a média aritmética de três notas.",
    input: "nota1 = 7, nota2 = 8, nota3 = 9",
    output: "Média = 8",
    code: `package main

import "fmt"

func main() {
    var n1, n2, n3 float64
    fmt.Print("Informe a primeira nota: ")
    fmt.Scan(&n1)
    fmt.Print("Informe a segunda nota: ")
    fmt.Scan(&n2)
    fmt.Print("Informe a terceira nota: ")
    fmt.Scan(&n3)

    media := (n1 + n2 + n3) / 3
    fmt.Printf("Média = %.2f\n", media)
}`,
    testCases: [
      { values: { n1: 7, n2: 8, n3: 9 }, result: 8, stepByStep: "(7+8+9)/3 = 8" }
    ],
    explanation: "Soma das notas dividido pela quantidade."
  },
  {
    id: 4,
    title: "Cálculo de Distância",
    statement: "Calcule a distância percorrida por um objeto em movimento uniforme, dados a velocidade e o tempo.",
    input: "velocidade = 60 km/h, tempo = 2 h",
    output: "Distância = 120 km",
    code: `package main

import "fmt"

func main() {
    var velocidade, tempo float64
    fmt.Print("Informe a velocidade (km/h): ")
    fmt.Scan(&velocidade)
    fmt.Print("Informe o tempo (horas): ")
    fmt.Scan(&tempo)

    distancia := velocidade * tempo
    fmt.Printf("A distância percorrida é: %.2f km\n", distancia)
}`,
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
    output: "É par? Verdadeiro",
    code: `package main

import "fmt"

func main() {
    var num int
    fmt.Print("Informe um número: ")
    fmt.Scan(&num)

    ehPar := num%2 == 0
    if ehPar {
        fmt.Printf("O número %d é PAR\n", num)
    } else {
        fmt.Printf("O número %d é ÍMPAR\n", num)
    }
}`,
    testCases: [
      { values: { num: 6 }, result: true, stepByStep: "6 % 2 = 0 → PAR" }
    ],
    explanation: "Usamos o operador módulo (%) para verificar divisibilidade por 2."
  },
  {
    id: 6,
    title: "Equação do Segundo Grau (Delta)",
    statement: "Calcule o delta de uma equação quadrática: Δ = b² - 4ac",
    input: "a = 1, b = -5, c = 6",
    output: "Delta = 1",
    code: `package main

import "fmt"

func main() {
    var a, b, c float64
    fmt.Print("Informe o valor de a: ")
    fmt.Scan(&a)
    fmt.Print("Informe o valor de b: ")
    fmt.Scan(&b)
    fmt.Print("Informe o valor de c: ")
    fmt.Scan(&c)

    delta := (b * b) - (4 * a * c)
    fmt.Printf("Delta = %.2f\n", delta)
}`,
    testCases: [
      { values: { a: 1, b: -5, c: 6 }, result: 1, stepByStep: "Δ = (-5)² - 4×1×6 = 1" }
    ],
    explanation: "Fórmula do delta usando operadores aritméticos."
  },
  {
    id: 7,
    title: "Comparação de Valores",
    statement: "Receba dois números e retorne verdadeiro se o primeiro for maior que o segundo E a diferença entre eles for maior que 10.",
    input: "num1 = 25, num2 = 10",
    output: "Verdadeiro",
    code: `package main

import "fmt"

func main() {
    var num1, num2 int
    fmt.Print("Informe o primeiro número: ")
    fmt.Scan(&num1)
    fmt.Print("Informe o segundo número: ")
    fmt.Scan(&num2)

    resultado := (num1 > num2) && ((num1 - num2) > 10)
    fmt.Printf("Resultado: %t\n", resultado)
}`,
    testCases: [
      { values: { num1: 25, num2: 10 }, result: true, stepByStep: "25>10 (V) e 15>10 (V) → true" }
    ],
    explanation: "Combinamos operadores relacionais com o operador lógico && (AND)."
  },
  {
    id: 8,
    title: "Cálculo de Salário Líquido",
    statement: "Calcule o salário líquido considerando desconto de 10% para INSS e 15% para IR.",
    input: "salario_bruto = 5000",
    output: "Salário líquido = 3825",
    code: `package main

import "fmt"

func main() {
    var salarioBruto float64
    fmt.Print("Informe o salário bruto: R$ ")
    fmt.Scan(&salarioBruto)

    inss := salarioBruto * 0.10
    salarioAposINSS := salarioBruto - inss
    ir := salarioAposINSS * 0.15
    salarioLiquido := salarioAposINSS - ir

    fmt.Printf("Salário líquido: R$ %.2f\n", salarioLiquido)
}`,
    testCases: [
      { values: { salarioBruto: 5000 }, result: 3825, stepByStep: "INSS=500; após INSS=4500; IR=675; líquido=3825" }
    ],
    explanation: "Descontos aplicados sequencialmente."
  },
  {
    id: 9,
    title: "Verificação de Triângulo Válido",
    statement: "Verifique se três lados podem formar um triângulo válido.",
    input: "a = 5, b = 7, c = 10",
    output: "É válido? Verdadeiro",
    code: `package main

import "fmt"

func main() {
    var a, b, c float64
    fmt.Print("Informe o primeiro lado: ")
    fmt.Scan(&a)
    fmt.Print("Informe o segundo lado: ")
    fmt.Scan(&b)
    fmt.Print("Informe o terceiro lado: ")
    fmt.Scan(&c)

    valido := (a+b > c) && (a+c > b) && (b+c > a)
    if valido {
        fmt.Println("Válido")
    } else {
        fmt.Println("Inválido")
    }
}`,
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
    code: `package main

import "fmt"

func main() {
    var r1, r2 float64
    fmt.Print("Informe o valor do primeiro resistor (Ω): ")
    fmt.Scan(&r1)
    fmt.Print("Informe o valor do segundo resistor (Ω): ")
    fmt.Scan(&r2)

    req := (r1 * r2) / (r1 + r2)
    fmt.Printf("A resistência equivalente é: %.2f Ω\n", req)
}`,
    testCases: [
      { values: { r1: 6, r2: 3 }, result: 2, stepByStep: "req = (6×3)/(6+3) = 18/9 = 2" }
    ],
    explanation: "Fórmula para resistores em paralelo."
  }
];

// Renderiza a seção de conceitos em Go
function renderConceitosOperadores() {
  return `
    <div class="content-card">
      <h2 class="card-title">📌 Expressões em Go</h2>
      <p>Uma expressão em Go é uma combinação de valores, variáveis, operadores e chamadas de funções que é avaliada para produzir um valor.</p>
    </div>

    <div class="content-card">
      <h2 class="card-title">🔧 Operador de Atribuição</h2>
      <div class="code-example">
        <div class="code-example-header">
          <span class="code-icon">📝</span>
          <span>Atribuição em Go</span>
        </div>
        <pre><code>var x int = 10
y := 20          // declaração curta
x = y + 5</code></pre>
      </div>
    </div>

    <div class="content-card">
      <h2 class="card-title">➕ Operadores Aritméticos em Go</h2>
      <div class="operators-table">
        <div class="operator-row header">
          <div>Operador</div>
          <div>Descrição</div>
          <div>Exemplo</div>
        </div>
        <div class="operator-row">
          <div><code>+</code></div>
          <div>Adição</div>
          <div><code>5 + 3 // 8</code></div>
        </div>
        <div class="operator-row">
          <div><code>-</code></div>
          <div>Subtração</div>
          <div><code>10 - 4 // 6</code></div>
        </div>
        <div class="operator-row">
          <div><code>*</code></div>
          <div>Multiplicação</div>
          <div><code>6 * 7 // 42</code></div>
        </div>
        <div class="operator-row">
          <div><code>/</code></div>
          <div>Divisão</div>
          <div><code>15 / 3 // 5</code></div>
        </div>
        <div class="operator-row">
          <div><code>%</code></div>
          <div>Resto da divisão</div>
          <div><code>17 % 5 // 2</code></div>
        </div>
      </div>
    </div>

    <div class="content-card">
      <h2 class="card-title">⚖️ Operadores de Comparação em Go</h2>
      <div class="operators-table">
        <div class="operator-row header">
          <div>Operador</div>
          <div>Descrição</div>
          <div>Exemplo</div>
        </div>
        <div class="operator-row">
          <div><code>==</code></div>
          <div>Igual</div>
          <div><code>5 == 5 // true</code></div>
        </div>
        <div class="operator-row">
          <div><code>!=</code></div>
          <div>Diferente</div>
          <div><code>5 != 3 // true</code></div>
        </div>
        <div class="operator-row">
          <div><code>&gt;</code></div>
          <div>Maior</div>
          <div><code>10 > 5 // true</code></div>
        </div>
        <div class="operator-row">
          <div><code>&lt;</code></div>
          <div>Menor</div>
          <div><code>3 < 8 // true</code></div>
        </div>
        <div class="operator-row">
          <div><code>&gt;=</code></div>
          <div>Maior ou igual</div>
          <div><code>5 >= 5 // true</code></div>
        </div>
        <div class="operator-row">
          <div><code>&lt;=</code></div>
          <div>Menor ou igual</div>
          <div><code>4 <= 3 // false</code></div>
        </div>
      </div>
    </div>

    <div class="content-card">
      <h2 class="card-title">🔀 Operadores Lógicos em Go</h2>
      <div class="operators-table">
        <div class="operator-row header">
          <div>Operador</div>
          <div>Descrição</div>
          <div>Exemplo</div>
        </div>
        <div class="operator-row">
          <div><code>&&</code></div>
          <div>E lógico (AND)</div>
          <div><code>true && false // false</code></div>
        </div>
        <div class="operator-row">
          <div><code>||</code></div>
          <div>OU lógico (OR)</div>
          <div><code>true || false // true</code></div>
        </div>
        <div class="operator-row">
          <div><code>!</code></div>
          <div>NÃO lógico (NOT)</div>
          <div><code>!true // false</code></div>
        </div>
      </div>
    </div>
  `;
}

// Renderiza a seção de exercícios
function renderExerciciosOperadores() {
  const currentEx = operadoresExercises.find(e => e.id === window.currentOperadorExercise) || operadoresExercises[0];

  return `
    <div class="exercises-filter">
      <div class="filter-header">
        <span>📋 Exercícios de Operadores (Go)</span>
        <span class="filter-count">${operadoresExercises.length} exercícios disponíveis</span>
      </div>
      <div class="filter-buttons">
        ${operadoresExercises.map(ex => `
          <button class="filter-btn ${ex.id === window.currentOperadorExercise ? 'active' : ''}" data-ex-id="${ex.id}">
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
          <span>💻 Código de Resolução (Go)</span>
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
  const currentSubpage = window.currentOperadorSubpage || 'conceitos';

  return `
    <div class="page-header">
      <h1 class="page-title"><span>➕</span> Operadores em Go</h1>
      <p class="page-subtitle">Aprenda sobre operadores aritméticos, relacionais e lógicos com exemplos práticos</p>
    </div>

    <div class="sub-nav">
      <button class="sub-nav-btn ${currentSubpage === 'conceitos' ? 'active' : ''}" data-subpage="conceitos">
        📘 Conceitos
      </button>
      <button class="sub-nav-btn ${currentSubpage === 'exercicios' ? 'active' : ''}" data-subpage="exercicios">
        ✏️ Exercícios
      </button>
    </div>

    <div id="operadores-content">
      ${currentSubpage === 'conceitos' ? renderConceitosOperadores() : renderExerciciosOperadores()}
    </div>
  `;
}