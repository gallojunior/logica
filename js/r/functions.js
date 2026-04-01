// ========== DADOS DOS EXERCÍCIOS DE FUNÇÕES EM R ==========
const functionsExercises = [
  // NÍVEL 1 - FUNÇÕES BÁSICAS (exercícios 1-3)
  {
    id: 1,
    nivel: 1,
    title: "Função: Mensagem Personalizada",
    statement: "Crie uma função chamada mensagemBoasVindas que receba como parâmetro o nome de uma pessoa e exiba a mensagem: 'Seja bem-vindo(a), [nome]!'. No programa principal, solicite o nome do usuário e chame a função.",
    input: "João",
    output: "Seja bem-vindo(a), João!",
    code: `# Função de boas-vindas
mensagemBoasVindas <- function(nome) {
    cat("Seja bem-vindo(a),", nome, "!\n")
}

cat("Digite seu nome: ")
nome <- readline()
mensagemBoasVindas(nome)`,
    testCases: [
      { values: { nome: "João" }, result: "Seja bem-vindo(a), João!", stepByStep: "Função recebe o nome e exibe a mensagem" },
      { values: { nome: "Maria" }, result: "Seja bem-vindo(a), Maria!", stepByStep: "Função recebe o nome e exibe a mensagem" }
    ],
    explanation: "Em R, uma função é definida com `function()`. O parâmetro é usado dentro da função. A saída é feita com `cat()`."
  },
  {
    id: 2,
    nivel: 1,
    title: "Função: Desenhar Linha",
    statement: "Crie uma função chamada desenharLinha que receba um número inteiro representando a quantidade de caracteres e desenhe uma linha na tela usando o símbolo '-'. Exemplo: se o usuário digitar 10, a função deve exibir '----------'.",
    input: "10",
    output: "----------",
    code: `# Desenhar linha
desenharLinha <- function(tamanho) {
    cat(rep("-", tamanho), sep = "", "\n")
}

cat("Digite o tamanho da linha: ")
tam <- as.integer(readline())
desenharLinha(tam)`,
    testCases: [
      { values: { tamanho: 10 }, result: "----------", stepByStep: "`rep('-', tamanho)` repete o caractere e `cat` imprime." },
      { values: { tamanho: 5 }, result: "-----", stepByStep: "`rep('-', tamanho)` repete o caractere." }
    ],
    explanation: "Usamos `rep()` para criar um vetor de caracteres e `cat` com `sep = \"\"` para imprimir sem espaços."
  },
  {
    id: 3,
    nivel: 1,
    title: "Função: Contagem Regressiva",
    statement: "Crie uma função chamada contagemRegressiva que receba um número inteiro positivo e faça uma contagem regressiva até 0, exibindo cada número na tela.",
    input: "5",
    output: "5, 4, 3, 2, 1, 0",
    code: `# Contagem regressiva
contagemRegressiva <- function(inicio) {
    for (i in inicio:0) {
        cat(i)
        if (i > 0) cat(", ")
    }
    cat("\n")
}

cat("Digite um número para contagem regressiva: ")
num <- as.integer(readline())
contagemRegressiva(num)`,
    testCases: [
      { values: { inicio: 5 }, result: "5, 4, 3, 2, 1, 0", stepByStep: "Laço decrescente de 5 até 0" },
      { values: { inicio: 3 }, result: "3, 2, 1, 0", stepByStep: "Laço decrescente de 3 até 0" }
    ],
    explanation: "Usa um laço `for` com range decrescente."
  },

  // NÍVEL 2 - FUNÇÕES COM RETORNO (exercícios 4-6)
  {
    id: 4,
    nivel: 2,
    title: "Função: Verificar Par ou Ímpar",
    statement: "Crie uma função chamada verificarPar que receba um número inteiro e retorne TRUE se o número for par, FALSE se for ímpar.",
    input: "7",
    output: "O número 7 é ÍMPAR",
    code: `# Verificar par
verificarPar <- function(num) {
    return(num %% 2 == 0)
}

cat("Digite um número: ")
numero <- as.integer(readline())

if (verificarPar(numero)) {
    cat("O número", numero, "é PAR\n")
} else {
    cat("O número", numero, "é ÍMPAR\n")
}`,
    testCases: [
      { values: { num: 8 }, result: "PAR", stepByStep: "8 %% 2 == 0 → TRUE → PAR" },
      { values: { num: 7 }, result: "ÍMPAR", stepByStep: "7 %% 2 == 1 → FALSE → ÍMPAR" }
    ],
    explanation: "A função retorna o resultado da expressão lógica. `return()` é opcional; a última expressão é retornada implicitamente."
  },
  {
    id: 5,
    nivel: 2,
    title: "Função: Maior de Dois Números",
    statement: "Crie uma função chamada maiorNumero que receba dois números reais e retorne o maior deles.",
    input: "15.5, 22.3",
    output: "O maior número é 22.3",
    code: `# Maior de dois números
maiorNumero <- function(a, b) {
    if (a > b) a else b
}

cat("Digite o primeiro número: ")
n1 <- as.numeric(readline())
cat("Digite o segundo número: ")
n2 <- as.numeric(readline())

maior <- maiorNumero(n1, n2)
cat("O maior número é", maior, "\n")`,
    testCases: [
      { values: { a: 15.5, b: 22.3 }, result: 22.3, stepByStep: "22.3 > 15.5 → retorna 22.3" },
      { values: { a: 30, b: 25 }, result: 30, stepByStep: "30 > 25 → retorna 30" }
    ],
    explanation: "O operador condicional `if` retorna o valor escolhido; não precisa de `return` explícito."
  },
  {
    id: 6,
    nivel: 2,
    title: "Função: Conversão de Temperatura",
    statement: "Crie uma função chamada celsiusParaFahrenheit que receba uma temperatura em graus Celsius e retorne o valor convertido para Fahrenheit.",
    input: "30",
    output: "30°C equivale a 86.0°F",
    code: `# Conversão Celsius → Fahrenheit
celsiusParaFahrenheit <- function(celsius) {
    (celsius * 9 / 5) + 32
}

cat("Digite a temperatura em Celsius: ")
c <- as.numeric(readline())
f <- celsiusParaFahrenheit(c)
cat(c, "°C equivale a", f, "°F\n")`,
    testCases: [
      { values: { celsius: 30 }, result: 86, stepByStep: "(30 × 9/5) + 32 = 86" },
      { values: { celsius: 0 }, result: 32, stepByStep: "(0 × 9/5) + 32 = 32" }
    ],
    explanation: "Aplica a fórmula e retorna o resultado."
  },

  // NÍVEL 3 - FUNÇÕES COM CÁLCULOS (exercícios 7-8)
  {
    id: 7,
    nivel: 3,
    title: "Função: Calcular Média",
    statement: "Crie uma função chamada calcularMedia que receba três notas reais e retorne a média aritmética delas.",
    input: "7.5, 8.0, 9.0",
    output: "A média das notas é: 8.17",
    code: `# Média de três notas
calcularMedia <- function(n1, n2, n3) {
    (n1 + n2 + n3) / 3
}

cat("Digite a primeira nota: ")
a <- as.numeric(readline())
cat("Digite a segunda nota: ")
b <- as.numeric(readline())
cat("Digite a terceira nota: ")
c <- as.numeric(readline())

media <- calcularMedia(a, b, c)
cat("A média das notas é:", round(media, 2), "\n")`,
    testCases: [
      { values: { n1: 7.5, n2: 8.0, n3: 9.0 }, result: 8.17, stepByStep: "(7.5+8.0+9.0)/3 = 8.166..." },
      { values: { n1: 5, n2: 6, n3: 7 }, result: 6, stepByStep: "(5+6+7)/3 = 6" }
    ],
    explanation: "Calcula a soma e divide por 3."
  },
  {
    id: 8,
    nivel: 3,
    title: "Função: Fatorial",
    statement: "Crie uma função chamada calcularFatorial que receba um número inteiro positivo e retorne o fatorial desse número.",
    input: "5",
    output: "5! = 120",
    code: `# Fatorial
calcularFatorial <- function(num) {
    if (num <= 1) return(1)
    prod(1:num)
}

cat("Digite um número para calcular o fatorial: ")
n <- as.integer(readline())
resultado <- calcularFatorial(n)
cat(n, "! =", resultado, "\n")`,
    testCases: [
      { values: { num: 5 }, result: 120, stepByStep: "5×4×3×2×1 = 120" },
      { values: { num: 4 }, result: 24, stepByStep: "4×3×2×1 = 24" }
    ],
    explanation: "A função `prod(1:num)` calcula o produto de todos os números de 1 a num."
  },

  // NÍVEL 4 - FUNÇÕES COM VETORES (exercícios 9-10)
  {
    id: 9,
    nivel: 4,
    title: "Função: Preencher Vetor",
    statement: "Crie uma função chamada preencherVetor que receba um vetor de 5 posições (criado fora) e o preencha com valores digitados pelo usuário. Use passagem por referência (em R, retorne o vetor preenchido).",
    input: "10, 20, 30, 40, 50",
    output: "Vetor: 10, 20, 30, 40, 50",
    code: `# Preencher vetor
preencherVetor <- function(tamanho) {
    vetor <- numeric(tamanho)
    for (i in 1:tamanho) {
        cat("Digite o valor para a posição", i, ": ")
        vetor[i] <- as.numeric(readline())
    }
    vetor
}

exibirVetor <- function(vetor) {
    cat("Vetor:", paste(vetor, collapse = ", "), "\n")
}

numeros <- preencherVetor(5)
exibirVetor(numeros)`,
    testCases: [
      { values: { numeros: [10,20,30,40,50] }, result: "Vetor: 10, 20, 30, 40, 50", stepByStep: "Função preenche e retorna o vetor; função exibe." }
    ],
    explanation: "Em R, para modificar um vetor externo, normalmente retornamos o vetor modificado. Aqui criamos a função que retorna o vetor preenchido."
  },
  {
    id: 10,
    nivel: 4,
    title: "Função: Tabuada",
    statement: "Crie uma função chamada mostrarTabuada que receba um número inteiro e exiba a tabuada desse número (de 1 a 10).",
    input: "5",
    output: "5 x 1 = 5\n5 x 2 = 10\n...\n5 x 10 = 50",
    code: `# Tabuada
mostrarTabuada <- function(num) {
    cat("Tabuada do", num, ":\n")
    for (i in 1:10) {
        cat(num, "x", i, "=", num * i, "\n")
    }
}

cat("Digite um número para ver sua tabuada: ")
n <- as.integer(readline())
mostrarTabuada(n)`,
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
      <h2 class="card-title">📦 Funções em R</h2>
      <p>Funções são blocos de código reutilizáveis. Em R, toda função é declarada com a palavra-chave <code>function</code>, pode receber parâmetros e retornar valores. O retorno é implícito pela última expressão ou explícito com <code>return()</code>.</p>
      
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
      <h2 class="card-title">🔧 Estrutura de uma Função em R</h2>
      <div class="info-grid">
        <div class="info-grid-item">
          <strong>📌 Nome</strong><br>
          camelCase ou snake_case (recomendado snake_case)
        </div>
        <div class="info-grid-item">
          <strong>📦 Parâmetros</strong><br>
          Podem ter valores padrão
        </div>
        <div class="info-grid-item">
          <strong>🔄 Retorno</strong><br>
          Última expressão ou <code>return()</code>
        </div>
        <div class="info-grid-item">
          <strong>📝 Corpo</strong><br>
          Qualquer código R válido
        </div>
      </div>
      
      <div class="code-example">
        <div class="code-example-header">
          <span class="code-icon">📝</span>
          <span>Sintaxe básica</span>
        </div>
        <pre><code>nome <- function(param1, param2) {
    # código
    return(resultado)   # opcional
}</code></pre>
      </div>
    </div>
    
    <div class="content-card">
      <h2 class="card-title">📝 Declaração de Função em R</h2>
      <div class="code-example">
        <div class="code-example-header">
          <span class="code-icon">📝</span>
          <span>Função que soma dois números</span>
        </div>
        <pre><code>soma <- function(a, b) {
    a + b
}</code></pre>
      </div>
      <div class="code-example">
        <div class="code-example-header">
          <span class="code-icon">📝</span>
          <span>Função com parâmetro padrão</span>
        </div>
        <pre><code>saudacao <- function(nome = "visitante") {
    cat("Olá,", nome, "!\n")
}</code></pre>
      </div>
      <div class="code-example">
        <div class="code-example-header">
          <span class="code-icon">📝</span>
          <span>Função com retorno explícito</span>
        </div>
        <pre><code>eh_par <- function(num) {
    return(num %% 2 == 0)
}</code></pre>
      </div>
    </div>
    
    <div class="content-card">
      <h2 class="card-title">🔄 Funções sem Retorno (Procedimentos)</h2>
      <p>Funções que não retornam valor explícito são usadas apenas pelo efeito colateral (exibir, modificar objetos globalmente).</p>
      <div class="code-example">
        <div class="code-example-header">
          <span class="code-icon">📝</span>
          <span>Procedimento simples</span>
        </div>
        <pre><code>imprimir <- function(texto) {
    cat(texto)
}</code></pre>
      </div>
    </div>
    
    <div class="content-card">
      <h2 class="card-title">📋 Convenções em R</h2>
      <div class="operators-table">
        <div class="operator-row header">
          <div>Elemento</div>
          <div>Convenção</div>
          <div>Exemplo</div>
        </div>
        <div class="operator-row">
          <div>Nomes de funções</div>
          <div>snake_case</div>
          <div><code>calcular_media</code></div>
        </div>
        <div class="operator-row">
          <div>Parâmetros</div>
          <div>snake_case</div>
          <div><code>nome, idade</code></div>
        </div>
        <div class="operator-row">
          <div>Constantes</div>
          <div>UPPER_SNAKE_CASE</div>
          <div><code>PI <- 3.14159</code></div>
        </div>
      </div>
      <div class="info-callout" style="margin-top: 1rem;">
        <span class="info-icon-callout">📌</span>
        <div>Em R, nomes de funções podem ser atribuídos a variáveis e são chamadas pelo nome. É comum usar \`snake_case\`.</div>
      </div>
    </div>
    
    <div class="content-card">
      <h2 class="card-title">🎯 Exemplo Prático Completo</h2>
      <div class="code-example">
        <div class="code-example-header">
          <span class="code-icon">📝</span>
          <span>Função que faz pergunta</span>
        </div>
        <pre><code>perguntar <- function(texto) {
    cat(texto, "(S/N): ")
    resposta <- readline()
    return(toupper(resposta) == "S")
}

if (perguntar("Acabou a aula?")) {
    cat("Vamos embora!\n")
} else {
    cat("Trabalhemmmm!\n")
}</code></pre>
      </div>
      
      <div class="info-callout" style="margin-top: 1rem;">
        <span class="info-icon-callout">💡</span>
        <div>
          <strong>Dica do Professor:</strong> 
          <br>• Use nomes significativos em \`snake_case\`.
          <br>• Para valores padrão, atribua nos parâmetros.
          <br>• Prefira retorno implícito (última expressão) para funções simples.
          <br>• R passa objetos por valor; para modificar externamente, atribua o retorno da função.
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
    4: { nome: "⭐⭐⭐⭐ Funções com Vetores", cor: "#8b5cf6" }
  };
  
  return `
    <div class="exercises-filter">
      <div class="filter-header">
        <span>📋 Exercícios de Funções em R</span>
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

// ========== PÁGINA COMPLETA DE FUNÇÕES ==========
function renderFunctionsPage() {
  const currentSubpage = window.currentFunctionsSubpage || 'conceitos';
  
  return `
    <div class="page-header">
      <h1 class="page-title">⚙️ Funções em R</h1>
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