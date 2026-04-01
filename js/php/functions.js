// ========== DADOS DOS EXERCÍCIOS DE FUNÇÕES EM PHP ==========
const functionsExercises = [
  // NÍVEL 1 - FUNÇÕES BÁSICAS (exercícios 1-3)
  {
    id: 1,
    nivel: 1,
    title: "Função: Mensagem Personalizada",
    statement: "Crie uma função chamada mensagemBoasVindas que receba como parâmetro o nome de uma pessoa e exiba a mensagem: 'Seja bem-vindo(a), [nome]!'. No programa principal, solicite o nome do usuário e chame a função.",
    input: "João",
    output: "Seja bem-vindo(a), João!",
    code: `<?php
function mensagemBoasVindas($nome) {
    echo "Seja bem-vindo(a), $nome!\n";
}

echo "Digite seu nome: ";
$nome = trim(fgets(STDIN));
mensagemBoasVindas($nome);
?>`,
    testCases: [
      { values: { nome: "João" }, result: "Seja bem-vindo(a), João!", stepByStep: "Função recebe o nome e exibe a mensagem" },
      { values: { nome: "Maria" }, result: "Seja bem-vindo(a), Maria!", stepByStep: "Função recebe o nome e exibe a mensagem" }
    ],
    explanation: "Em PHP, uma função é declarada com `function`. O parâmetro é usado dentro da string. A função não retorna valor (apenas imprime)."
  },
  {
    id: 2,
    nivel: 1,
    title: "Função: Desenhar Linha",
    statement: "Crie uma função chamada desenharLinha que receba um número inteiro representando a quantidade de caracteres e desenhe uma linha na tela usando o símbolo '-'. Exemplo: se o usuário digitar 10, a função deve exibir '----------'.",
    input: "10",
    output: "----------",
    code: `<?php
function desenharLinha($tamanho) {
    echo str_repeat('-', $tamanho) . "\n";
}

echo "Digite o tamanho da linha: ";
$tam = (int) trim(fgets(STDIN));
desenharLinha($tam);
?>`,
    testCases: [
      { values: { tamanho: 10 }, result: "----------", stepByStep: "`str_repeat` repete o caractere pelo tamanho" },
      { values: { tamanho: 5 }, result: "-----", stepByStep: "`str_repeat` repete o caractere pelo tamanho" }
    ],
    explanation: "A função usa `str_repeat` para gerar a linha. Não retorna valor, apenas imprime."
  },
  {
    id: 3,
    nivel: 1,
    title: "Função: Contagem Regressiva",
    statement: "Crie uma função chamada contagemRegressiva que receba um número inteiro positivo e faça uma contagem regressiva até 0, exibindo cada número na tela.",
    input: "5",
    output: "5, 4, 3, 2, 1, 0",
    code: `<?php
function contagemRegressiva($inicio) {
    for ($i = $inicio; $i >= 0; $i--) {
        echo $i;
        if ($i > 0) echo ", ";
    }
    echo "\n";
}

echo "Digite um número para contagem regressiva: ";
$num = (int) trim(fgets(STDIN));
contagemRegressiva($num);
?>`,
    testCases: [
      { values: { inicio: 5 }, result: "5, 4, 3, 2, 1, 0", stepByStep: "Laço decrescente de 5 até 0" },
      { values: { inicio: 3 }, result: "3, 2, 1, 0", stepByStep: "Laço decrescente de 3 até 0" }
    ],
    explanation: "Usa um laço `for` decrescente."
  },

  // NÍVEL 2 - FUNÇÕES COM RETORNO (exercícios 4-6)
  {
    id: 4,
    nivel: 2,
    title: "Função: Verificar Par ou Ímpar",
    statement: "Crie uma função chamada verificarPar que receba um número inteiro e retorne true se o número for par, false se for ímpar.",
    input: "7",
    output: "O número 7 é ÍMPAR",
    code: `<?php
function verificarPar($num) {
    return $num % 2 == 0;
}

echo "Digite um número: ";
$numero = (int) trim(fgets(STDIN));

if (verificarPar($numero)) {
    echo "O número $numero é PAR\n";
} else {
    echo "O número $numero é ÍMPAR\n";
}
?>`,
    testCases: [
      { values: { num: 8 }, result: "PAR", stepByStep: "8 % 2 = 0 → true → PAR" },
      { values: { num: 7 }, result: "ÍMPAR", stepByStep: "7 % 2 = 1 → false → ÍMPAR" }
    ],
    explanation: "Retorna o resultado da expressão lógica."
  },
  {
    id: 5,
    nivel: 2,
    title: "Função: Maior de Dois Números",
    statement: "Crie uma função chamada maiorNumero que receba dois números reais e retorne o maior deles.",
    input: "15.5, 22.3",
    output: "O maior número é 22.3",
    code: `<?php
function maiorNumero($a, $b) {
    return ($a > $b) ? $a : $b;
}

echo "Digite o primeiro número: ";
$n1 = (float) trim(fgets(STDIN));
echo "Digite o segundo número: ";
$n2 = (float) trim(fgets(STDIN));

$maior = maiorNumero($n1, $n2);
echo "O maior número é $maior\n";
?>`,
    testCases: [
      { values: { a: 15.5, b: 22.3 }, result: 22.3, stepByStep: "22.3 > 15.5 → retorna 22.3" },
      { values: { a: 30, b: 25 }, result: 30, stepByStep: "30 > 25 → retorna 30" }
    ],
    explanation: "Usa operador ternário para retornar o maior."
  },
  {
    id: 6,
    nivel: 2,
    title: "Função: Conversão de Temperatura",
    statement: "Crie uma função chamada celsiusParaFahrenheit que receba uma temperatura em graus Celsius e retorne o valor convertido para Fahrenheit.",
    input: "30",
    output: "30°C equivale a 86.0°F",
    code: `<?php
function celsiusParaFahrenheit($celsius) {
    return ($celsius * 9 / 5) + 32;
}

echo "Digite a temperatura em Celsius: ";
$c = (float) trim(fgets(STDIN));
$f = celsiusParaFahrenheit($c);
echo "$c°C equivale a $f°F\n";
?>`,
    testCases: [
      { values: { celsius: 30 }, result: 86, stepByStep: "(30 × 9/5) + 32 = 86" },
      { values: { celsius: 0 }, result: 32, stepByStep: "(0 × 9/5) + 32 = 32" }
    ],
    explanation: "Aplica a fórmula de conversão e retorna o valor."
  },

  // NÍVEL 3 - FUNÇÕES COM CÁLCULOS (exercícios 7-8)
  {
    id: 7,
    nivel: 3,
    title: "Função: Calcular Média",
    statement: "Crie uma função chamada calcularMedia que receba três notas reais e retorne a média aritmética delas.",
    input: "7.5, 8.0, 9.0",
    output: "A média das notas é: 8.17",
    code: `<?php
function calcularMedia($n1, $n2, $n3) {
    return ($n1 + $n2 + $n3) / 3;
}

echo "Digite a primeira nota: ";
$a = (float) trim(fgets(STDIN));
echo "Digite a segunda nota: ";
$b = (float) trim(fgets(STDIN));
echo "Digite a terceira nota: ";
$c = (float) trim(fgets(STDIN));

$media = calcularMedia($a, $b, $c);
echo "A média das notas é: " . round($media, 2) . "\n";
?>`,
    testCases: [
      { values: { n1: 7.5, n2: 8.0, n3: 9.0 }, result: 8.17, stepByStep: "(7.5+8.0+9.0)/3 = 8.166..." },
      { values: { n1: 5, n2: 6, n3: 7 }, result: 6, stepByStep: "(5+6+7)/3 = 6" }
    ],
    explanation: "Soma e divide por 3."
  },
  {
    id: 8,
    nivel: 3,
    title: "Função: Fatorial",
    statement: "Crie uma função chamada calcularFatorial que receba um número inteiro positivo e retorne o fatorial desse número.",
    input: "5",
    output: "5! = 120",
    code: `<?php
function calcularFatorial($num) {
    $fat = 1;
    for ($i = $num; $i >= 2; $i--) {
        $fat *= $i;
    }
    return $fat;
}

echo "Digite um número para calcular o fatorial: ";
$n = (int) trim(fgets(STDIN));
$resultado = calcularFatorial($n);
echo "$n! = $resultado\n";
?>`,
    testCases: [
      { values: { num: 5 }, result: 120, stepByStep: "5×4×3×2×1 = 120" },
      { values: { num: 4 }, result: 24, stepByStep: "4×3×2×1 = 24" }
    ],
    explanation: "Acumula produto decrescentemente."
  },

  // NÍVEL 4 - FUNÇÕES COM ARRAYS (exercícios 9-10)
  {
    id: 9,
    nivel: 4,
    title: "Função: Preencher Array",
    statement: "Crie uma função chamada preencherArray que receba um array de 5 posições e o preencha com valores digitados pelo usuário.",
    input: "10, 20, 30, 40, 50",
    output: "Array: 10, 20, 30, 40, 50",
    code: `<?php
function preencherArray(&$array) {
    for ($i = 0; $i < count($array); $i++) {
        echo "Digite o valor para a posição " . ($i+1) . ": ";
        $array[$i] = (int) trim(fgets(STDIN));
    }
}

function exibirArray($array) {
    echo "Array: " . implode(", ", $array) . "\n";
}

$numeros = array_fill(0, 5, 0);
preencherArray($numeros);
exibirArray($numeros);
?>`,
    testCases: [
      { values: { numeros: [10,20,30,40,50] }, result: "Array: 10, 20, 30, 40, 50", stepByStep: "Função preenche cada posição; função exibe o array" }
    ],
    explanation: "`preencherArray` recebe o array por referência (`&$array`) para modificá-lo. `implode` junta os elementos com vírgula."
  },
  {
    id: 10,
    nivel: 4,
    title: "Função: Tabuada",
    statement: "Crie uma função chamada mostrarTabuada que receba um número inteiro e exiba a tabuada desse número (de 1 a 10).",
    input: "5",
    output: "5 x 1 = 5\n5 x 2 = 10\n...\n5 x 10 = 50",
    code: `<?php
function mostrarTabuada($num) {
    echo "Tabuada do $num:\n";
    for ($i = 1; $i <= 10; $i++) {
        echo "$num x $i = " . ($num * $i) . "\n";
    }
}

echo "Digite um número para ver sua tabuada: ";
$n = (int) trim(fgets(STDIN));
mostrarTabuada($n);
?>`,
    testCases: [
      { values: { num: 5 }, result: "Tabuada do 5: 5x1=5, 5x2=10, ..., 5x10=50", stepByStep: "Laço de 1 a 10 calculando e exibindo o produto" },
      { values: { num: 3 }, result: "Tabuada do 3: 3x1=3, 3x2=6, ..., 3x10=30", stepByStep: "Laço de 1 a 10 calculando e exibindo o produto" }
    ],
    explanation: "Apenas imprime a tabuada usando um laço `for`."
  }
];

// ========== RENDERIZAÇÃO DOS CONCEITOS ==========
function renderConceitosFuncoes() {
  const langText = getLanguageDisplayName();
  
  return `
    <div class="content-card">
      <h2 class="card-title">📦 Funções em PHP</h2>
      <p>Funções são blocos de código reutilizáveis. Em PHP, toda função é declarada com a palavra-chave <code>function</code>, pode receber parâmetros e retornar valores. O retorno é opcional; funções sem <code>return</code> retornam <code>null</code>.</p>
      
      <div class="info-callout">
        <span class="info-icon-callout">✨</span>
        <div>
          <strong>Vantagens de usar funções:</strong>
          <br>• Evitam código repetido (DRY)
          <br>• Permitem reutilização
          <br>• Dividem problemas grandes em partes menores
          <br>• Facilitam testes e manutenção
        </div>
      </div>
    </div>
    
    <div class="content-card">
      <h2 class="card-title">🔧 Estrutura de uma Função em PHP</h2>
      <div class="info-grid">
        <div class="info-grid-item">
          <strong>📌 Nome</strong><br>
          camelCase ou snake_case (recomendado camelCase)
        </div>
        <div class="info-grid-item">
          <strong>📦 Parâmetros</strong><br>
          Podem ter valores padrão
        </div>
        <div class="info-grid-item">
          <strong>🔄 Retorno</strong><br>
          Com <code>return</code> ou valor implícito (null)
        </div>
        <div class="info-grid-item">
          <strong>📝 Corpo</strong><br>
          Qualquer código PHP válido
        </div>
      </div>
      
      <div class="code-example">
        <div class="code-example-header">
          <span class="code-icon">📝</span>
          <span>Sintaxe básica</span>
        </div>
        <pre><code>function nome($param1, $param2) {
    // código
    return $resultado;
}</code></pre>
      </div>
    </div>
    
    <div class="content-card">
      <h2 class="card-title">📝 Declaração de Função em PHP</h2>
      <div class="code-example">
        <div class="code-example-header">
          <span class="code-icon">📝</span>
          <span>Função que soma dois números</span>
        </div>
        <pre><code>function soma($a, $b) {
    return $a + $b;
}</code></pre>
      </div>
      <div class="code-example">
        <div class="code-example-header">
          <span class="code-icon">📝</span>
          <span>Função com parâmetro padrão</span>
        </div>
        <pre><code>function saudacao($nome = "visitante") {
    echo "Olá, $nome!\n";
}</code></pre>
      </div>
      <div class="code-example">
        <div class="code-example-header">
          <span class="code-icon">📝</span>
          <span>Função que retorna booleano</span>
        </div>
        <pre><code>function ehPar($num) {
    return $num % 2 == 0;
}</code></pre>
      </div>
    </div>
    
    <div class="content-card">
      <h2 class="card-title">🔄 Funções sem Retorno (Procedimentos)</h2>
      <p>Funções que não usam <code>return</code> são chamadas pelo seu efeito colateral (exibir, modificar dados).</p>
      <div class="code-example">
        <div class="code-example-header">
          <span class="code-icon">📝</span>
          <span>Procedimento simples</span>
        </div>
        <pre><code>function imprimirMensagem($texto) {
    echo $texto;
}</code></pre>
      </div>
    </div>
    
    <div class="content-card">
      <h2 class="card-title">📋 Convenções em PHP</h2>
      <div class="operators-table">
        <div class="operator-row header">
          <div>Elemento</div>
          <div>Convenção</div>
          <div>Exemplo</div>
        </div>
        <div class="operator-row">
          <div>Nomes de funções</div>
          <div>camelCase</div>
          <div><code>calcularMedia</code></div>
        </div>
        <div class="operator-row">
          <div>Parâmetros</div>
          <div>camelCase</div>
          <div><code>$nome, $idade</code></div>
        </div>
        <div class="operator-row">
          <div>Constantes</div>
          <div>UPPER_SNAKE_CASE</div>
          <div><code>define("PI", 3.14);</code></div>
        </div>
      </div>
      <div class="info-callout" style="margin-top: 1rem;">
        <span class="info-icon-callout">📌</span>
        <div>Em PHP, os nomes de funções não são case-sensitive, mas é boa prática seguir camelCase.</div>
      </div>
    </div>
    
    <div class="content-card">
      <h2 class="card-title">🎯 Exemplo Prático Completo</h2>
      <div class="code-example">
        <div class="code-example-header">
          <span class="code-icon">📝</span>
          <span>Função que faz pergunta</span>
        </div>
        <pre><code>function perguntar($texto) {
    echo "$texto (S/N): ";
    $resposta = trim(fgets(STDIN));
    return strtoupper($resposta) == "S";
}

if (perguntar("Acabou a aula?")) {
    echo "Vamos embora!\n";
} else {
    echo "Trabalhemmmm!\n";
}</code></pre>
      </div>
      
      <div class="info-callout" style="margin-top: 1rem;">
        <span class="info-icon-callout">💡</span>
        <div>
          <strong>Dica do Professor:</strong> 
          <br>• Use nomes significativos e em camelCase.
          <br>• Para valores padrão, coloque-os nos parâmetros.
          <br>• Prefira retorno explícito com <code>return</code> para funções que produzem valor.
          <br>• Funções que modificam arrays externos devem usar passagem por referência (<code>&$array</code>).
        </div>
      </div>
    </div>
  `;
}

// ========== RENDERIZAÇÃO DOS EXERCÍCIOS ==========
function renderExerciciosFuncoes() {
  const currentEx = functionsExercises.find(e => e.id === window.currentFunctionsExercise) || functionsExercises[0];
  
  const niveis = {
    1: { nome: "⭐ Funções Básicas", cor: "#10b981" },
    2: { nome: "⭐⭐ Funções com Retorno", cor: "#f59e0b" },
    3: { nome: "⭐⭐⭐ Funções com Cálculos", cor: "#3b82f6" },
    4: { nome: "⭐⭐⭐⭐ Funções com Arrays", cor: "#8b5cf6" }
  };
  
  return `
    <div class="exercises-filter">
      <div class="filter-header">
        <span>📋 Exercícios de Funções em PHP</span>
        <span class="filter-count">${functionsExercises.length} exercícios disponíveis</span>
      </div>
      <div class="filter-buttons">
        ${functionsExercises.map(ex => `
          <button class="filter-btn ${ex.id === window.currentFunctionsExercise ? 'active' : ''}" data-ex-id="${ex.id}" title="Nível ${ex.nivel}: ${niveis[ex.nivel].nome}">
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
                  <strong>Valores de entrada:</strong> ${Object.entries(test.values).map(([k, v]) => `${k} = ${Array.isArray(v) ? json_encode(v) : v}`).join(', ')}
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

// ========== PÁGINA COMPLETA DE FUNÇÕES ==========
function renderFunctionsPage() {
  const currentSubpage = window.currentFunctionsSubpage || 'conceitos';
  
  return `
    <div class="page-header">
      <h1 class="page-title">⚙️ Funções em PHP</h1>
      <p class="page-subtitle">Aprenda a organizar seu código com funções em ${getLanguageDisplayName()}</p>
    </div>
    
    <div class="sub-nav">
      <button class="sub-nav-btn ${currentSubpage === 'conceitos' ? 'active' : ''}" data-subpage="conceitos">
        📘 Conceitos
      </button>
      <button class="sub-nav-btn ${currentSubpage === 'exercicios' ? 'active' : ''}" data-subpage="exercicios">
        ✏️ Exercícios
      </button>
    </div>
    
    <div id="functions-content">
      ${currentSubpage === 'conceitos' ? renderConceitosFuncoes() : renderExerciciosFuncoes()}
    </div>
  `;
}