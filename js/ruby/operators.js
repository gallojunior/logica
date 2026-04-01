const operadoresExercises = [
  {
    id: 1,
    title: "Soma de dois números",
    statement: "Escreva um programa em Ruby que leia dois números inteiros e exiba a soma.",
    input: "num1 = 5, num2 = 3",
    output: "Soma = 8",
    code: `print "Digite o primeiro número: "
num1 = gets.chomp.to_i
print "Digite o segundo número: "
num2 = gets.chomp.to_i

soma = num1 + num2
puts "Soma = #{soma}"`,
    testCases: [
      { values: { num1: 5, num2: 3 }, result: 8, stepByStep: "5 + 3 = 8" }
    ],
    explanation: "Em Ruby, usamos `gets.chomp` para ler a entrada e `to_i` para converter para inteiro. O operador '+' realiza a soma e a interpolação `#{}` insere o valor na string."
  },
  {
    id: 2,
    title: "Conversão de Temperatura",
    statement: "Converta uma temperatura de Celsius para Fahrenheit usando a fórmula: °F = (°C × 9/5) + 32",
    input: "tempC = 30",
    output: "tempF = 86",
    code: `print "Informe a temperatura em Celsius: "
temp_c = gets.chomp.to_f

temp_f = (temp_c * 9 / 5) + 32
puts "#{temp_c}°C equivalem a #{temp_f}°F"`,
    testCases: [
      { values: { tempC: 30 }, result: 86, stepByStep: "(30 × 9/5) + 32 = 86" }
    ],
    explanation: "Utiliza operadores aritméticos e conversão para float."
  },
  {
    id: 3,
    title: "Média Aritmética",
    statement: "Calcule a média aritmética de três notas.",
    input: "nota1 = 7, nota2 = 8, nota3 = 9",
    output: "Média = 8",
    code: `print "Informe a primeira nota: "
n1 = gets.chomp.to_f
print "Informe a segunda nota: "
n2 = gets.chomp.to_f
print "Informe a terceira nota: "
n3 = gets.chomp.to_f

media = (n1 + n2 + n3) / 3
puts "Média = #{media}"`,
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
    code: `print "Informe a velocidade (km/h): "
vel = gets.chomp.to_f
print "Informe o tempo (horas): "
tempo = gets.chomp.to_f

distancia = vel * tempo
puts "A distância percorrida é: #{distancia} km"`,
    testCases: [
      { values: { vel: 60, tempo: 2 }, result: 120, stepByStep: "distância = 60 × 2 = 120" }
    ],
    explanation: "Distância = velocidade × tempo."
  },
  {
    id: 5,
    title: "Verificação de Número Par",
    statement: "Verifique se um número é par.",
    input: "num = 6",
    output: "É par? Verdadeiro",
    code: `print "Informe um número: "
num = gets.chomp.to_i

eh_par = num % 2 == 0
if eh_par
  puts "O número #{num} é PAR"
else
  puts "O número #{num} é ÍMPAR"
end`,
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
    code: `print "Informe o valor de a: "
a = gets.chomp.to_f
print "Informe o valor de b: "
b = gets.chomp.to_f
print "Informe o valor de c: "
c = gets.chomp.to_f

delta = b**2 - 4 * a * c
puts "Delta = #{delta}"`,
    testCases: [
      { values: { a: 1, b: -5, c: 6 }, result: 1, stepByStep: "Δ = (-5)² - 4×1×6 = 1" }
    ],
    explanation: "Usamos o operador `**` para potência."
  },
  {
    id: 7,
    title: "Comparação de Valores",
    statement: "Receba dois números e retorne verdadeiro se o primeiro for maior que o segundo E a diferença entre eles for maior que 10.",
    input: "num1 = 25, num2 = 10",
    output: "Verdadeiro",
    code: `print "Informe o primeiro número: "
n1 = gets.chomp.to_i
print "Informe o segundo número: "
n2 = gets.chomp.to_i

resultado = (n1 > n2) && ((n1 - n2) > 10)
puts "Resultado: #{resultado}"`,
    testCases: [
      { values: { n1: 25, n2: 10 }, result: true, stepByStep: "25>10 (V) e 15>10 (V) → true" }
    ],
    explanation: "Combina operadores relacionais com o operador lógico `&&`."
  },
  {
    id: 8,
    title: "Cálculo de Salário Líquido",
    statement: "Calcule o salário líquido considerando desconto de 10% para INSS e 15% para IR.",
    input: "salario_bruto = 5000",
    output: "Salário líquido = 3825",
    code: `print "Informe o salário bruto: R$ "
bruto = gets.chomp.to_f

inss = bruto * 0.10
apos_inss = bruto - inss
ir = apos_inss * 0.15
liquido = apos_inss - ir

puts "Salário líquido: R$ #{liquido}"`,
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
    code: `print "Informe o primeiro lado: "
a = gets.chomp.to_f
print "Informe o segundo lado: "
b = gets.chomp.to_f
print "Informe o terceiro lado: "
c = gets.chomp.to_f

valido = (a + b > c) && (a + c > b) && (b + c > a)
if valido
  puts "Válido"
else
  puts "Inválido"
end`,
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
    code: `print "Informe o valor do primeiro resistor (Ω): "
r1 = gets.chomp.to_f
print "Informe o valor do segundo resistor (Ω): "
r2 = gets.chomp.to_f

req = (r1 * r2) / (r1 + r2)
puts "A resistência equivalente é: #{req} Ω"`,
    testCases: [
      { values: { r1: 6, r2: 3 }, result: 2, stepByStep: "req = (6×3)/(6+3) = 18/9 = 2" }
    ],
    explanation: "Fórmula para resistores em paralelo."
  }
];

// Renderiza a seção de conceitos em Ruby
function renderConceitosOperadores() {
  return `
    <div class="content-card">
      <h2 class="card-title">📌 Expressões em Ruby</h2>
      <p>Uma expressão em Ruby é uma combinação de valores, variáveis, operadores e chamadas de métodos que é avaliada para produzir um valor.</p>
    </div>
    
    <div class="content-card">
      <h2 class="card-title">🔧 Operador de Atribuição</h2>
      <div class="code-example">
        <div class="code-example-header">
          <span class="code-icon">📝</span>
          <span>Atribuição em Ruby</span>
        </div>
        <pre><code>x = 10
y = 20
x = y + 5</code></pre>
      </div>
    </div>
    
    <div class="content-card">
      <h2 class="card-title">➕ Operadores Aritméticos em Ruby</h2>
      <div class="operators-table">
        <div class="operator-row header">
          <div>Operador</div>
          <div>Descrição</div>
          <div>Exemplo</div>
        </div>
        <div class="operator-row">
          <div><code>+</code></div>
          <div>Adição</div>
          <div><code>5 + 3 # => 8</code></div>
        </div>
        <div class="operator-row">
          <div><code>-</code></div>
          <div>Subtração</div>
          <div><code>10 - 4 # => 6</code></div>
        </div>
        <div class="operator-row">
          <div><code>*</code></div>
          <div>Multiplicação</div>
          <div><code>6 * 7 # => 42</code></div>
        </div>
        <div class="operator-row">
          <div><code>/</code></div>
          <div>Divisão</div>
          <div><code>15 / 3 # => 5</code></div>
        </div>
        <div class="operator-row">
          <div><code>%</code></div>
          <div>Resto da divisão</div>
          <div><code>17 % 5 # => 2</code></div>
        </div>
        <div class="operator-row">
          <div><code>**</code></div>
          <div>Potência</div>
          <div><code>2 ** 3 # => 8</code></div>
        </div>
      </div>
    </div>
    
    <div class="content-card">
      <h2 class="card-title">⚖️ Operadores de Comparação em Ruby</h2>
      <div class="operators-table">
        <div class="operator-row header">
          <div>Operador</div>
          <div>Descrição</div>
          <div>Exemplo</div>
        </div>
        <div class="operator-row">
          <div><code>==</code></div>
          <div>Igual</div>
          <div><code>5 == 5 # => true</code></div>
        </div>
        <div class="operator-row">
          <div><code>!=</code></div>
          <div>Diferente</div>
          <div><code>5 != 3 # => true</code></div>
        </div>
        <div class="operator-row">
          <div><code>&gt;</code></div>
          <div>Maior</div>
          <div><code>10 > 5 # => true</code></div>
        </div>
        <div class="operator-row">
          <div><code>&lt;</code></div>
          <div>Menor</div>
          <div><code>3 < 8 # => true</code></div>
        </div>
        <div class="operator-row">
          <div><code>&gt;=</code></div>
          <div>Maior ou igual</div>
          <div><code>5 >= 5 # => true</code></div>
        </div>
        <div class="operator-row">
          <div><code>&lt;=</code></div>
          <div>Menor ou igual</div>
          <div><code>4 <= 3 # => false</code></div>
        </div>
      </div>
    </div>
    
    <div class="content-card">
      <h2 class="card-title">🔀 Operadores Lógicos em Ruby</h2>
      <div class="operators-table">
        <div class="operator-row header">
          <div>Operador</div>
          <div>Descrição</div>
          <div>Exemplo</div>
        </div>
        <div class="operator-row">
          <div><code>&&</code> ou <code>and</code></div>
          <div>E lógico (AND)</div>
          <div><code>true && false # => false</code></div>
        </div>
        <div class="operator-row">
          <div><code>||</code> ou <code>or</code></div>
          <div>OU lógico (OR)</div>
          <div><code>true || false # => true</code></div>
        </div>
        <div class="operator-row">
          <div><code>!</code> ou <code>not</code></div>
          <div>NÃO lógico (NOT)</div>
          <div><code>!true # => false</code></div>
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
        <span>📋 Exercícios de Operadores (Ruby)</span>
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
      <h1 class="page-title"><span>➕</span> Operadores em Ruby</h1>
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