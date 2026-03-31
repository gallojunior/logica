// js/python/functions.js

// ========== DADOS DOS EXERCÍCIOS DE FUNÇÕES EM PYTHON ==========
const functionsExercises = [
  // NÍVEL 1 - FUNÇÕES BÁSICAS (exercícios 1-3)
  {
    id: 1,
    nivel: 1,
    title: "Função: Mensagem Personalizada",
    statement: "Crie uma função chamada mensagem_boas_vindas que receba como parâmetro o nome de uma pessoa e exiba a mensagem: 'Seja bem-vindo(a), [nome]!'. No programa principal, solicite o nome do usuário e chame a função.",
    input: "João",
    output: "Seja bem-vindo(a), João!",
    code: `# Função que exibe mensagem de boas-vindas
def mensagem_boas_vindas(nome):
    print(f"Seja bem-vindo(a), {nome}!")

# Programa principal
nome = input("Digite seu nome: ")
mensagem_boas_vindas(nome)`,
    testCases: [
      { values: { nome: "João" }, result: "Seja bem-vindo(a), João!", stepByStep: "Função recebe o nome e exibe a mensagem" },
      { values: { nome: "Maria" }, result: "Seja bem-vindo(a), Maria!", stepByStep: "Função recebe o nome e exibe a mensagem" }
    ],
    explanation: "Em Python, uma função é declarada com a palavra 'def', seguida do nome, parâmetros entre parênteses e dois pontos. O corpo é indentado. A função recebe um parâmetro 'nome' e exibe uma mensagem usando print()."
  },
  {
    id: 2,
    nivel: 1,
    title: "Função: Desenhar Linha",
    statement: "Crie uma função chamada desenhar_linha que receba um número inteiro representando a quantidade de caracteres e desenhe uma linha na tela usando o símbolo '-'. Exemplo: se o usuário digitar 10, a função deve exibir '----------'.",
    input: "10",
    output: "----------",
    code: `# Função que desenha uma linha
def desenhar_linha(tamanho):
    linha = "-" * tamanho
    print(linha)

# Programa principal
num = int(input("Digite o tamanho da linha: "))
desenhar_linha(num)`,
    testCases: [
      { values: { tamanho: 10 }, result: "----------", stepByStep: "Operador '*' repete o caractere '-' 10 vezes" },
      { values: { tamanho: 5 }, result: "-----", stepByStep: "Operador '*' repete o caractere '-' 5 vezes" }
    ],
    explanation: "A função usa o operador '*' para repetir o caractere '-' conforme o tamanho recebido. Não retorna valor, apenas executa a ação de desenhar."
  },
  {
    id: 3,
    nivel: 1,
    title: "Função: Contagem Regressiva",
    statement: "Crie uma função chamada contagem_regressiva que receba um número inteiro positivo e faça uma contagem regressiva até 0, exibindo cada número na tela.",
    input: "5",
    output: "5, 4, 3, 2, 1, 0",
    code: `# Função que faz contagem regressiva
def contagem_regressiva(inicio):
    for i in range(inicio, -1, -1):
        print(i, end="")
        if i > 0:
            print(", ", end="")
    print()

# Programa principal
num = int(input("Digite um número para contagem regressiva: "))
contagem_regressiva(num)`,
    testCases: [
      { values: { inicio: 5 }, result: "5, 4, 3, 2, 1, 0", stepByStep: "Laço decrescente de 5 até 0" },
      { values: { inicio: 3 }, result: "3, 2, 1, 0", stepByStep: "Laço decrescente de 3 até 0" }
    ],
    explanation: "A função usa um laço 'for' com range decrescente (inicio, -1, -1) para exibir os números. O parâmetro 'end' controla a formatação da saída."
  },

  // NÍVEL 2 - FUNÇÕES COM RETORNO (exercícios 4-6)
  {
    id: 4,
    nivel: 2,
    title: "Função: Verificar Par ou Ímpar",
    statement: "Crie uma função chamada verificar_par que receba um número inteiro e retorne True se o número for par, e False se for ímpar.",
    input: "7",
    output: "O número 7 é ÍMPAR",
    code: `# Função que verifica se um número é par
def verificar_par(num):
    return num % 2 == 0

# Programa principal
numero = int(input("Digite um número: "))

if verificar_par(numero):
    print(f"O número {numero} é PAR")
else:
    print(f"O número {numero} é ÍMPAR")`,
    testCases: [
      { values: { num: 8 }, result: "PAR", stepByStep: "8 % 2 = 0 → True → PAR" },
      { values: { num: 7 }, result: "ÍMPAR", stepByStep: "7 % 2 = 1 → False → ÍMPAR" }
    ],
    explanation: "A função retorna o resultado da expressão lógica (num % 2 == 0). O programa principal usa esse valor em uma estrutura condicional para exibir a mensagem adequada."
  },
  {
    id: 5,
    nivel: 2,
    title: "Função: Maior de Dois Números",
    statement: "Crie uma função chamada maior_numero que receba dois números reais e retorne o maior deles.",
    input: "15.5, 22.3",
    output: "O maior número é 22.3",
    code: `# Função que retorna o maior de dois números
def maior_numero(a, b):
    if a > b:
        return a
    else:
        return b

# Programa principal
n1 = float(input("Digite o primeiro número: "))
n2 = float(input("Digite o segundo número: "))

maior = maior_numero(n1, n2)
print(f"O maior número é {maior}")`,
    testCases: [
      { values: { a: 15.5, b: 22.3 }, result: 22.3, stepByStep: "22.3 > 15.5 → retorna 22.3" },
      { values: { a: 30, b: 25 }, result: 30, stepByStep: "30 > 25 → retorna 30" }
    ],
    explanation: "A função compara os dois valores e retorna o maior. O resultado é armazenado em uma variável e exibido no programa principal."
  },
  {
    id: 6,
    nivel: 2,
    title: "Função: Conversão de Temperatura",
    statement: "Crie uma função chamada celsius_para_fahrenheit que receba uma temperatura em graus Celsius e retorne o valor convertido para Fahrenheit.",
    input: "30",
    output: "30°C equivale a 86.0°F",
    code: `# Função que converte Celsius para Fahrenheit
def celsius_para_fahrenheit(celsius):
    return (celsius * 9 / 5) + 32

# Programa principal
celsius = float(input("Digite a temperatura em Celsius: "))
fahrenheit = celsius_para_fahrenheit(celsius)
print(f"{celsius}°C equivale a {fahrenheit}°F")`,
    testCases: [
      { values: { celsius: 30 }, result: 86, stepByStep: "(30 × 9/5) + 32 = 54 + 32 = 86" },
      { values: { celsius: 0 }, result: 32, stepByStep: "(0 × 9/5) + 32 = 0 + 32 = 32" }
    ],
    explanation: "A função aplica a fórmula de conversão e retorna o valor calculado. O programa principal armazena o resultado e exibe formatado."
  },

  // NÍVEL 3 - FUNÇÕES COM CÁLCULOS (exercícios 7-8)
  {
    id: 7,
    nivel: 3,
    title: "Função: Calcular Média",
    statement: "Crie uma função chamada calcular_media que receba três notas reais e retorne a média aritmética delas.",
    input: "7.5, 8.0, 9.0",
    output: "A média das notas é: 8.17",
    code: `# Função que calcula a média de três notas
def calcular_media(n1, n2, n3):
    return (n1 + n2 + n3) / 3

# Programa principal
nota1 = float(input("Digite a primeira nota: "))
nota2 = float(input("Digite a segunda nota: "))
nota3 = float(input("Digite a terceira nota: "))

media = calcular_media(nota1, nota2, nota3)
print(f"A média das notas é: {media:.2f}")`,
    testCases: [
      { values: { n1: 7.5, n2: 8.0, n3: 9.0 }, result: 8.17, stepByStep: "(7.5 + 8.0 + 9.0) / 3 = 24.5 / 3 = 8.166..." },
      { values: { n1: 5, n2: 6, n3: 7 }, result: 6, stepByStep: "(5+6+7)/3 = 18/3 = 6" }
    ],
    explanation: "A função recebe três parâmetros, calcula a soma e divide por 3, retornando o resultado. O programa principal exibe a média calculada com duas casas decimais usando :.2f."
  },
  {
    id: 8,
    nivel: 3,
    title: "Função: Fatorial",
    statement: "Crie uma função chamada calcular_fatorial que receba um número inteiro positivo e retorne o fatorial desse número.",
    input: "5",
    output: "5! = 120",
    code: `# Função que calcula o fatorial
def calcular_fatorial(num):
    fat = 1
    for i in range(num, 1, -1):
        fat *= i
    return fat

# Programa principal
numero = int(input("Digite um número para calcular o fatorial: "))
resultado = calcular_fatorial(numero)
print(f"{numero}! = {resultado}")`,
    testCases: [
      { values: { num: 5 }, result: 120, stepByStep: "5×4×3×2×1 = 120" },
      { values: { num: 4 }, result: 24, stepByStep: "4×3×2×1 = 24" }
    ],
    explanation: "A função calcula o fatorial usando um laço 'for' com range decrescente. O resultado é retornado e exibido no programa principal."
  },

  // NÍVEL 4 - FUNÇÕES COM LISTAS (exercícios 9-10)
  {
    id: 9,
    nivel: 4,
    title: "Função: Preencher Lista",
    statement: "Crie uma função chamada preencher_lista que receba uma lista de 5 posições e a preencha com valores digitados pelo usuário.",
    input: "10, 20, 30, 40, 50",
    output: "Lista: 10, 20, 30, 40, 50",
    code: `# Função que preenche uma lista
def preencher_lista(lista):
    for i in range(len(lista)):
        lista[i] = int(input(f"Digite o valor para a posição {i + 1}: "))

# Função que exibe uma lista
def exibir_lista(lista):
    print("Lista:", ", ".join(map(str, lista)))

# Programa principal
TAMANHO = 5
numeros = [0] * TAMANHO

preencher_lista(numeros)
exibir_lista(numeros)`,
    testCases: [
      { values: { numeros: [10,20,30,40,50] }, result: "Lista: 10, 20, 30, 40, 50", stepByStep: "Função preenche cada posição; função exibe a lista" }
    ],
    explanation: "Funções podem receber listas como parâmetros. Em Python, listas são mutáveis e passadas por referência, então as alterações são refletidas no programa principal. Usamos join() para formatar a saída."
  },
  {
    id: 10,
    nivel: 4,
    title: "Função: Tabuada",
    statement: "Crie uma função chamada mostrar_tabuada que receba um número inteiro e exiba a tabuada desse número (de 1 a 10).",
    input: "5",
    output: "5 x 1 = 5\n5 x 2 = 10\n...\n5 x 10 = 50",
    code: `# Função que exibe a tabuada
def mostrar_tabuada(num):
    print(f"Tabuada do {num}:")
    for i in range(1, 11):
        print(f"{num} x {i} = {num * i}")

# Programa principal
numero = int(input("Digite um número para ver sua tabuada: "))
mostrar_tabuada(numero)`,
    testCases: [
      { values: { num: 5 }, result: "Tabuada do 5: 5x1=5, 5x2=10, ..., 5x10=50", stepByStep: "Laço de 1 a 10 calculando e exibindo o produto" },
      { values: { num: 3 }, result: "Tabuada do 3: 3x1=3, 3x2=6, ..., 3x10=30", stepByStep: "Laço de 1 a 10 calculando e exibindo o produto" }
    ],
    explanation: "A função recebe um número e exibe sua tabuada de 1 a 10 usando um laço 'for'. Não retorna valor, apenas executa a exibição."
  }
];

// ========== RENDERIZAÇÃO DOS CONCEITOS ==========
function renderConceitosFuncoes() {
  const langText = getLanguageDisplayName();
  
  return `
    <div class="content-card">
      <h2 class="card-title">📦 Funções em Python</h2>
      <p>Imagine que você precise escrever um algoritmo para preencher uma matriz. Isso não é difícil. Mas e se fossem dez matrizes? Escrever o mesmo código várias vezes deixaria o programa cansativo e repetitivo. Para evitar isso, podemos escrever a função apenas uma vez e reutilizá-la sempre que necessário.</p>
      <p>Uma <strong>função</strong> é um bloco de código que resolve um problema específico, fazendo parte de um problema maior.</p>
      
      <div class="info-callout">
        <span class="info-icon-callout">✨</span>
        <div>
          <strong>Vantagens de usar funções:</strong>
          <br>• Evitam código repetido (DRY - Don't Repeat Yourself)
          <br>• Permitem reutilizar o mesmo código em outros programas
          <br>• Dividem problemas grandes em partes menores e mais fáceis de entender
          <br>• Deixam o programa mais organizado e legível
          <br>• Facilitam a manutenção e testes
        </div>
      </div>
    </div>
    
    <div class="content-card">
      <h2 class="card-title">🔧 Estrutura de uma Função em Python</h2>
      <div class="info-grid">
        <div class="info-grid-item">
          <strong>📌 def</strong><br>
          Palavra-chave que inicia a definição da função
        </div>
        <div class="info-grid-item">
          <strong>📦 Nome</strong><br>
          Identificador que descreve o que a função faz
        </div>
        <div class="info-grid-item">
          <strong>🔄 Parâmetros</strong><br>
          Valores que a função recebe para processar
        </div>
        <div class="info-grid-item">
          <strong>📝 Corpo</strong><br>
          Bloco de código indentado que executa a tarefa
        </div>
        <div class="info-grid-item">
          <strong>🔁 return</strong><br>
          Valor que a função devolve (opcional)
        </div>
      </div>
    </div>
    
    <div class="content-card">
      <h2 class="card-title">📝 Declaração de Função em ${langText}</h2>
      <div class="code-example">
        <div class="code-example-header">
          <span class="code-icon">📝</span>
          <span>Sintaxe de uma função</span>
        </div>
        <pre><code>def nome_funcao(parametro1, parametro2):
    # corpo da função
    # ...
    return valor  # opcional</code></pre>
      </div>
      
      <div class="code-example">
        <div class="code-example-header">
          <span class="code-icon">📝</span>
          <span>Exemplo: Função que verifica número par</span>
        </div>
        <pre><code>def verificar_par(num):
    return num % 2 == 0</code></pre>
      </div>
    </div>
    
    <div class="content-card">
      <h2 class="card-title">🔄 Funções com e sem Retorno</h2>
      <p>Em Python, funções podem retornar um valor ou não. Funções que não usam <code>return</code> retornam <code>None</code>.</p>
      
      <div class="code-example">
        <div class="code-example-header">
          <span class="code-icon">📝</span>
          <span>Função sem retorno (procedimento)</span>
        </div>
        <pre><code>def mostrar_mensagem(nome):
    print(f"Olá, {nome}!")
    # não usa return</code></pre>
      </div>
      
      <div class="code-example">
        <div class="code-example-header">
          <span class="code-icon">📝</span>
          <span>Função com retorno</span>
        </div>
        <pre><code>def somar(a, b):
    return a + b  # retorna o resultado</code></pre>
      </div>
    </div>
    
    <div class="content-card">
      <h2 class="card-title">📋 Tipos de Parâmetros em Python</h2>
      <div class="operators-table">
        <div class="operator-row header">
          <div>Tipo</div>
          <div>Descrição</div>
          <div>Exemplo</div>
        </div>
        <div class="operator-row">
          <div><strong>Posicionais</strong></div>
          <div>Ordem dos argumentos importa</div>
          <div><code>def soma(a, b): return a+b</code></div>
        </div>
        <div class="operator-row">
          <div><strong>Nomeados</strong></div>
          <div>Argumentos com nome específico</div>
          <div><code>soma(b=5, a=3)</code></div>
        </div>
        <div class="operator-row">
          <div><strong>Padrão</strong></div>
          <div>Valor padrão se não informado</div>
          <div><code>def saudacao(nome="Visitante")</code></div>
        </div>
        <div class="operator-row">
          <div><strong>*args</strong></div>
          <div>Número variável de argumentos</div>
          <div><code>def soma(*numeros)</code></div>
        </div>
        <div class="operator-row">
          <div><strong>**kwargs</strong></div>
          <div>Argumentos nomeados variáveis</div>
          <div><code>def dados(**info)</code></div>
        </div>
      </div>
    </div>
    
    <div class="content-card">
      <h2 class="card-title">📋 Convenções de Nomenclatura em Python</h2>
      <div class="operators-table">
        <div class="operator-row header">
          <div>Elemento</div>
          <div>Convenção</div>
          <div>Exemplo</div>
        </div>
        <div class="operator-row">
          <div><strong>Funções</strong></div>
          <div>snake_case</div>
          <div><code>calcular_media()</code></div>
        </div>
        <div class="operator-row">
          <div><strong>Variáveis</strong></div>
          <div>snake_case</div>
          <div><code>nota_aluno</code></div>
        </div>
        <div class="operator-row">
          <div><strong>Constantes</strong></div>
          <div>UPPER_SNAKE_CASE</div>
          <div><code>MAX_VALUE = 100</code></div>
        </div>
        <div class="operator-row">
          <div><strong>Classes</strong></div>
          <div>PascalCase</div>
          <div><code>class Aluno:</code></div>
        </div>
      </div>
      
      <div class="info-callout" style="margin-top: 1rem;">
        <span class="info-icon-callout">📌</span>
        <div>
          <strong>Convenção PEP 8:</strong>
          <br>• Nomes de funções em <strong>snake_case</strong> (letras minúsculas separadas por _)
          <br>• Exemplo: <code>calcular_media</code>, <code>verificar_par</code>, <code>mostrar_tabuada</code>
          <br>• Use verbos para nomear funções (ex: calcular, verificar, mostrar)
        </div>
      </div>
    </div>
    
    <div class="content-card">
      <h2 class="card-title">🎯 Exemplo Prático Completo</h2>
      <div class="code-example">
        <div class="code-example-header">
          <span class="code-icon">📝</span>
          <span>Função para fazer perguntas</span>
        </div>
        <pre><code>def perguntar(texto):
    resposta = input(f"{texto} (S/N): ")
    return resposta.upper() == "S"

# Programa principal
if perguntar("Acabou a aula?"):
    print("Vamos embora!")
else:
    print("Trabalhemmmm!")</code></pre>
      </div>
      
      <div class="info-callout" style="margin-top: 1rem;">
        <span class="info-icon-callout">💡</span>
        <div>
          <strong>Dica do Professor:</strong> 
          <br>• Use <strong>snake_case</strong> para nomes de funções
          <br>• Funções sem retorno explícito retornam <code>None</code>
          <br>• Use <strong>type hints</strong> para documentar tipos: <code>def soma(a: int, b: int) -> int:</code>
          <br>• Nomes de funções devem ser verbos (ex: calcular_media, verificar_par)
          <br>• Divida problemas grandes em funções menores - isso facilita a manutenção!
          <br>• Cada função deve ter uma única responsabilidade (princípio SRP)
          <br>• Use <strong>docstrings</strong> para documentar suas funções: <code>"""Esta função calcula a média..."""</code>
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
    4: { nome: "⭐⭐⭐⭐ Funções com Listas", cor: "#8b5cf6" }
  };
  
  return `
    <div class="exercises-filter">
      <div class="filter-header">
        <span>📋 Exercícios de Funções em Python</span>
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
      <h1 class="page-title">⚙️ Funções em Python</h1>
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