const operadoresExercises = [
  {
    id: 1,
    title: "Cálculo de Área do Retângulo",
    statement: "Escreva um programa em C/C++ que calcule a área de um retângulo, dados seu comprimento e largura.",
    input: "comprimento = 5, largura = 3",
    output: "Área = 15",
    code: `#include <stdio.h>

int main() {
    int comprimento, largura, area;

    printf("Informe o comprimento: ");
    scanf("%d", &comprimento);
    printf("Informe a largura: ");
    scanf("%d", &largura);

    area = comprimento * largura;
    printf("A área do retângulo é: %d\n", area);

    return 0;
}`,
    testCases: [
      { values: { comprimento: 5, largura: 3 }, result: 15, stepByStep: "área = 5 × 3 = 15" },
      { values: { comprimento: 10, largura: 4 }, result: 40, stepByStep: "área = 10 × 4 = 40" },
      { values: { comprimento: 7, largura: 2 }, result: 14, stepByStep: "área = 7 × 2 = 14" }
    ],
    explanation: "A área do retângulo é calculada multiplicando o comprimento pela largura. Utilizamos o operador aritmético de multiplicação (*)."
  },
  {
    id: 2,
    title: "Conversão de Temperatura",
    statement: "Converta uma temperatura de Celsius para Fahrenheit usando a fórmula: °F = (°C × 9/5) + 32",
    input: "tempC = 30",
    output: "tempF = 86",
    code: `#include <stdio.h>

int main() {
    double tempC, tempF;

    printf("Informe a temperatura em Celsius: ");
    scanf("%lf", &tempC);

    tempF = (tempC * 9 / 5) + 32;
    printf("%.2lf°C equivalem a %.2lf°F\n", tempC, tempF);

    return 0;
}`,
    testCases: [
      { values: { tempC: 30 }, result: 86, stepByStep: "(30 × 9/5) + 32 = 86" },
      { values: { tempC: 0 }, result: 32, stepByStep: "0 × 9/5 + 32 = 32" },
      { values: { tempC: 100 }, result: 212, stepByStep: "100 × 9/5 + 32 = 212" }
    ],
    explanation: "A conversão utiliza operadores aritméticos: multiplicação (*), divisão (/) e adição (+)."
  },
  {
    id: 3,
    title: "Média Aritmética",
    statement: "Calcule a média aritmética de três notas.",
    input: "nota1 = 7, nota2 = 8, nota3 = 9",
    output: "Média = 8",
    code: `#include <stdio.h>

int main() {
    double n1, n2, n3, media;

    printf("Informe a primeira nota: ");
    scanf("%lf", &n1);
    printf("Informe a segunda nota: ");
    scanf("%lf", &n2);
    printf("Informe a terceira nota: ");
    scanf("%lf", &n3);

    media = (n1 + n2 + n3) / 3;
    printf("Média = %.2lf\n", media);

    return 0;
}`,
    testCases: [
      { values: { n1: 7, n2: 8, n3: 9 }, result: 8, stepByStep: "(7+8+9)/3 = 8" }
    ],
    explanation: "Soma as notas e divide por 3."
  },
  {
    id: 4,
    title: "Cálculo de Distância",
    statement: "Calcule a distância percorrida por um objeto em movimento uniforme, dados a velocidade e o tempo.",
    input: "velocidade = 60 km/h, tempo = 2 h",
    output: "Distância = 120 km",
    code: `#include <stdio.h>

int main() {
    double velocidade, tempo, distancia;

    printf("Informe a velocidade (km/h): ");
    scanf("%lf", &velocidade);
    printf("Informe o tempo (horas): ");
    scanf("%lf", &tempo);

    distancia = velocidade * tempo;
    printf("A distância percorrida é: %.2lf km\n", distancia);

    return 0;
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
    code: `#include <stdio.h>

int main() {
    int num;

    printf("Informe um número: ");
    scanf("%d", &num);

    if (num % 2 == 0) {
        printf("O número %d é PAR\n", num);
    } else {
        printf("O número %d é ÍMPAR\n", num);
    }

    return 0;
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
    code: `#include <stdio.h>

int main() {
    double a, b, c, delta;

    printf("Informe o valor de a: ");
    scanf("%lf", &a);
    printf("Informe o valor de b: ");
    scanf("%lf", &b);
    printf("Informe o valor de c: ");
    scanf("%lf", &c);

    delta = (b * b) - (4 * a * c);
    printf("Delta = %.2lf\n", delta);

    return 0;
}`,
    testCases: [
      { values: { a: 1, b: -5, c: 6 }, result: 1, stepByStep: "Δ = (-5)² - 4×1×6 = 25 - 24 = 1" }
    ],
    explanation: "Fórmula do delta usando operadores aritméticos."
  },
  {
    id: 7,
    title: "Comparação de Valores",
    statement: "Receba dois números e retorne verdadeiro se o primeiro for maior que o segundo E a diferença entre eles for maior que 10.",
    input: "num1 = 25, num2 = 10",
    output: "Verdadeiro",
    code: `#include <stdio.h>

int main() {
    int n1, n2;

    printf("Informe o primeiro número: ");
    scanf("%d", &n1);
    printf("Informe o segundo número: ");
    scanf("%d", &n2);

    int resultado = (n1 > n2) && ((n1 - n2) > 10);
    printf("Resultado: %s\n", resultado ? "true" : "false");

    return 0;
}`,
    testCases: [
      { values: { n1: 25, n2: 10 }, result: true, stepByStep: "25>10 (V) e 15>10 (V) → true" }
    ],
    explanation: "Combina operadores relacionais com o operador lógico && (AND)."
  },
  {
    id: 8,
    title: "Cálculo de Salário Líquido",
    statement: "Calcule o salário líquido considerando desconto de 10% para INSS e 15% para IR.",
    input: "salario_bruto = 5000",
    output: "Salário líquido = 3825",
    code: `#include <stdio.h>

int main() {
    double bruto, inss, apos_inss, ir, liquido;

    printf("Informe o salário bruto: R$ ");
    scanf("%lf", &bruto);

    inss = bruto * 0.10;
    apos_inss = bruto - inss;
    ir = apos_inss * 0.15;
    liquido = apos_inss - ir;

    printf("Salário líquido: R$ %.2lf\n", liquido);

    return 0;
}`,
    testCases: [
      { values: { bruto: 5000 }, result: 3825, stepByStep: "INSS=500; após INSS=4500; IR=675; líquido=3825" }
    ],
    explanation: "Descontos aplicados sequencialmente."
  },
  {
    id: 9,
    title: "Verificação de Triângulo Válido",
    statement: "Verifique se três lados podem formar um triângulo válido.",
    input: "a = 5, b = 7, c = 10",
    output: "É válido? Verdadeiro",
    code: `#include <stdio.h>

int main() {
    double a, b, c;

    printf("Informe o primeiro lado: ");
    scanf("%lf", &a);
    printf("Informe o segundo lado: ");
    scanf("%lf", &b);
    printf("Informe o terceiro lado: ");
    scanf("%lf", &c);

    int valido = (a + b > c) && (a + c > b) && (b + c > a);
    if (valido) {
        printf("Válido\n");
    } else {
        printf("Inválido\n");
    }

    return 0;
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
    code: `#include <stdio.h>

int main() {
    double r1, r2, req;

    printf("Informe o valor do primeiro resistor (Ω): ");
    scanf("%lf", &r1);
    printf("Informe o valor do segundo resistor (Ω): ");
    scanf("%lf", &r2);

    req = (r1 * r2) / (r1 + r2);
    printf("A resistência equivalente é: %.2lf Ω\n", req);

    return 0;
}`,
    testCases: [
      { values: { r1: 6, r2: 3 }, result: 2, stepByStep: "req = (6×3)/(6+3) = 18/9 = 2" }
    ],
    explanation: "Fórmula para resistores em paralelo."
  }
];

// Renderiza a seção de conceitos em C/C++
function renderConceitosOperadores() {
  return `
    <div class="content-card">
      <h2 class="card-title">📌 Expressões em C/C++</h2>
      <p>Uma expressão em C/C++ é uma combinação de valores, variáveis, operadores e chamadas de funções que é avaliada para produzir um valor. A linguagem é fortemente tipada e os operadores têm precedências bem definidas.</p>
    </div>
    
    <div class="content-card">
      <h2 class="card-title">🔧 Operador de Atribuição</h2>
      <div class="code-example">
        <div class="code-example-header">
          <span class="code-icon">📝</span>
          <span>Atribuição em C/C++</span>
        </div>
        <pre><code>int x = 10;
int y = 20;
x = y + 5;</code></pre>
      </div>
    </div>
    
    <div class="content-card">
      <h2 class="card-title">➕ Operadores Aritméticos</h2>
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
      <h2 class="card-title">⚖️ Operadores Relacionais</h2>
      <div class="operators-table">
        <div class="operator-row header">
          <div>Operador</div>
          <div>Descrição</div>
          <div>Exemplo</div>
        </div>
        <div class="operator-row">
          <div><code>==</code></div>
          <div>Igual</div>
          <div><code>5 == 5 // 1 (verdadeiro)</code></div>
        </div>
        <div class="operator-row">
          <div><code>!=</code></div>
          <div>Diferente</div>
          <div><code>5 != 3 // 1</code></div>
        </div>
        <div class="operator-row">
          <div><code>&gt;</code></div>
          <div>Maior</div>
          <div><code>10 > 5 // 1</code></div>
        </div>
        <div class="operator-row">
          <div><code>&lt;</code></div>
          <div>Menor</div>
          <div><code>3 < 8 // 1</code></div>
        </div>
        <div class="operator-row">
          <div><code>&gt;=</code></div>
          <div>Maior ou igual</div>
          <div><code>5 >= 5 // 1</code></div>
        </div>
        <div class="operator-row">
          <div><code>&lt;=</code></div>
          <div>Menor ou igual</div>
          <div><code>4 <= 3 // 0</code></div>
        </div>
      </div>
    </div>
    
    <div class="content-card">
      <h2 class="card-title">🔀 Operadores Lógicos</h2>
      <div class="operators-table">
        <div class="operator-row header">
          <div>Operador</div>
          <div>Descrição</div>
          <div>Exemplo</div>
        </div>
        <div class="operator-row">
          <div><code>&&</code></div>
          <div>E lógico (AND)</div>
          <div><code>(5 > 3) && (2 < 4) // 1</code></div>
        </div>
        <div class="operator-row">
          <div><code>||</code></div>
          <div>OU lógico (OR)</div>
          <div><code>(5 > 3) || (2 > 4) // 1</code></div>
        </div>
        <div class="operator-row">
          <div><code>!</code></div>
          <div>NÃO lógico (NOT)</div>
          <div><code>!(5 > 3) // 0</code></div>
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
        <span>📋 Exercícios de Operadores (C/C++)</span>
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
          <span>💻 Código de Resolução (C/C++)</span>
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
      <h1 class="page-title"><span>➕</span> Operadores em C/C++</h1>
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