// ========== DADOS DOS EXERCÍCIOS DE FUNÇÕES E PROCEDIMENTOS ==========
const functionsExercises = [
  // NÍVEL 1 - PROCEDIMENTOS BÁSICOS (exercícios 1-3)
  {
    id: 1,
    nivel: 1,
    title: "Procedimento: Mensagem Personalizada",
    statement: "Crie um procedimento chamado mensagemBoasVindas que receba como parâmetro o nome de uma pessoa e exiba a mensagem: 'Seja bem-vindo(a), [nome]!'. No programa principal, solicite o nome do usuário e chame o procedimento.",
    input: "João",
    output: "Seja bem-vindo(a), João!",
    code: `programa {
  // Declaração do procedimento
  funcao vazio mensagemBoasVindas(cadeia nome) {
    escreva("Seja bem-vindo(a), ", nome, "!")
  }
  
  funcao inicio() {
    cadeia nome
    
    escreva("Digite seu nome: ")
    leia(nome)
    
    mensagemBoasVindas(nome)
  }
}`,
    testCases: [
      { values: { nome: "João" }, result: "Seja bem-vindo(a), João!", stepByStep: "Procedimento recebe o nome e exibe a mensagem" },
      { values: { nome: "Maria" }, result: "Seja bem-vindo(a), Maria!", stepByStep: "Procedimento recebe o nome e exibe a mensagem" }
    ],
    explanation: "Um procedimento é declarado com 'funcao vazio' e não retorna valor. Ele recebe um parâmetro 'nome' e exibe uma mensagem personalizada. No programa principal, lemos o nome e chamamos o procedimento."
  },
  {
    id: 2,
    nivel: 1,
    title: "Procedimento: Desenhar Linha",
    statement: "Crie um procedimento chamado desenharLinha que receba um número inteiro representando a quantidade de caracteres e desenhe uma linha na tela usando o símbolo '-'. Exemplo: se o usuário digitar 10, o procedimento deve exibir '----------'.",
    input: "10",
    output: "----------",
    code: `programa {
  // Declaração do procedimento
  funcao vazio desenharLinha(inteiro tamanho) {
    para (inteiro i = 1; i <= tamanho; i++) {
      escreva("-")
    }
    escreva("\\n")
  }
  
  funcao inicio() {
    inteiro num
    
    escreva("Digite o tamanho da linha: ")
    leia(num)
    
    desenharLinha(num)
  }
}`,
    testCases: [
      { values: { tamanho: 10 }, result: "----------", stepByStep: "Laço repete a escrita do '-' 10 vezes" },
      { values: { tamanho: 5 }, result: "-----", stepByStep: "Laço repete a escrita do '-' 5 vezes" }
    ],
    explanation: "O procedimento usa um laço 'para' para repetir a escrita do caractere '-' conforme o tamanho recebido. Não retorna valor, apenas executa a ação de desenhar."
  },
  {
    id: 3,
    nivel: 1,
    title: "Procedimento: Contagem Regressiva",
    statement: "Crie um procedimento chamado contagemRegressiva que receba um número inteiro positivo e faça uma contagem regressiva até 0, exibindo cada número na tela.",
    input: "5",
    output: "5, 4, 3, 2, 1, 0",
    code: `programa {
  // Declaração do procedimento
  funcao vazio contagemRegressiva(inteiro inicio) {
    para (inteiro i = inicio; i >= 0; i--) {
      escreva(i)
      se (i > 0) {
        escreva(", ")
      }
    }
    escreva("\\n")
  }
  
  funcao inicio() {
    inteiro num
    
    escreva("Digite um número para contagem regressiva: ")
    leia(num)
    
    contagemRegressiva(num)
  }
}`,
    testCases: [
      { values: { inicio: 5 }, result: "5, 4, 3, 2, 1, 0", stepByStep: "Laço decrescente de 5 até 0" },
      { values: { inicio: 3 }, result: "3, 2, 1, 0", stepByStep: "Laço decrescente de 3 até 0" }
    ],
    explanation: "O procedimento usa um laço 'para' decrescente para exibir os números do valor recebido até 0. O 'se' interno formata a saída com vírgulas."
  },

  // NÍVEL 2 - FUNÇÕES COM RETORNO (exercícios 4-6)
  {
    id: 4,
    nivel: 2,
    title: "Função: Verificar Par ou Ímpar",
    statement: "Crie uma função chamada verificarPar que receba um número inteiro e retorne verdadeiro se o número for par, e falso se for ímpar.",
    input: "7",
    output: "O número 7 é ÍMPAR",
    code: `programa {
  // Declaração da função
  funcao logico verificarPar(inteiro num) {
    retorne (num % 2 == 0)
  }
  
  funcao inicio() {
    inteiro numero
    
    escreva("Digite um número: ")
    leia(numero)
    
    se (verificarPar(numero)) {
      escreva("O número ", numero, " é PAR")
    } senao {
      escreva("O número ", numero, " é ÍMPAR")
    }
  }
}`,
    testCases: [
      { values: { num: 8 }, result: "PAR", stepByStep: "8 % 2 = 0 → verdadeiro → PAR" },
      { values: { num: 7 }, result: "ÍMPAR", stepByStep: "7 % 2 = 1 → falso → ÍMPAR" }
    ],
    explanation: "A função retorna o resultado da expressão lógica (num % 2 == 0). O programa principal usa esse valor em uma estrutura condicional para exibir a mensagem adequada."
  },
  {
    id: 5,
    nivel: 2,
    title: "Função: Maior de Dois Números",
    statement: "Crie uma função chamada maiorNumero que receba dois números reais e retorne o maior deles.",
    input: "15.5, 22.3",
    output: "O maior número é 22.3",
    code: `programa {
  // Declaração da função
  funcao real maiorNumero(real a, real b) {
    se (a > b) {
      retorne a
    } senao {
      retorne b
    }
  }
  
  funcao inicio() {
    real n1, n2, maior
    
    escreva("Digite o primeiro número: ")
    leia(n1)
    escreva("Digite o segundo número: ")
    leia(n2)
    
    maior = maiorNumero(n1, n2)
    escreva("O maior número é ", maior)
  }
}`,
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
    statement: "Crie uma função chamada celsiusParaFahrenheit que receba uma temperatura em graus Celsius e retorne o valor convertido para Fahrenheit.",
    input: "30",
    output: "30°C equivale a 86.0°F",
    code: `programa {
  // Declaração da função
  funcao real celsiusParaFahrenheit(real celsius) {
    retorne (celsius * 9 / 5) + 32
  }
  
  funcao inicio() {
    real celsius, fahrenheit
    
    escreva("Digite a temperatura em Celsius: ")
    leia(celsius)
    
    fahrenheit = celsiusParaFahrenheit(celsius)
    escreva(celsius, "°C equivale a ", fahrenheit, "°F")
  }
}`,
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
    statement: "Crie uma função chamada calcularMedia que receba três notas reais e retorne a média aritmética delas.",
    input: "7.5, 8.0, 9.0",
    output: "A média das notas é: 8.17",
    code: `programa {
  // Declaração da função
  funcao real calcularMedia(real n1, real n2, real n3) {
    retorne (n1 + n2 + n3) / 3
  }
  
  funcao inicio() {
    real nota1, nota2, nota3, media
    
    escreva("Digite a primeira nota: ")
    leia(nota1)
    escreva("Digite a segunda nota: ")
    leia(nota2)
    escreva("Digite a terceira nota: ")
    leia(nota3)
    
    media = calcularMedia(nota1, nota2, nota3)
    escreva("A média das notas é: ", media)
  }
}`,
    testCases: [
      { values: { n1: 7.5, n2: 8.0, n3: 9.0 }, result: 8.17, stepByStep: "(7.5 + 8.0 + 9.0) / 3 = 24.5 / 3 = 8.166..." },
      { values: { n1: 5, n2: 6, n3: 7 }, result: 6, stepByStep: "(5+6+7)/3 = 18/3 = 6" }
    ],
    explanation: "A função recebe três parâmetros, calcula a soma e divide por 3, retornando o resultado. O programa principal exibe a média calculada."
  },
  {
    id: 8,
    nivel: 3,
    title: "Função: Fatorial",
    statement: "Crie uma função chamada calcularFatorial que receba um número inteiro positivo e retorne o fatorial desse número.",
    input: "5",
    output: "5! = 120",
    code: `programa {
  // Declaração da função
  funcao inteiro calcularFatorial(inteiro num) {
    inteiro fat = 1
    
    para (inteiro i = num; i >= 2; i--) {
      fat = fat * i
    }
    
    retorne fat
  }
  
  funcao inicio() {
    inteiro numero, resultado
    
    escreva("Digite um número para calcular o fatorial: ")
    leia(numero)
    
    resultado = calcularFatorial(numero)
    escreva(numero, "! = ", resultado)
  }
}`,
    testCases: [
      { values: { num: 5 }, result: 120, stepByStep: "5×4×3×2×1 = 120" },
      { values: { num: 4 }, result: 24, stepByStep: "4×3×2×1 = 24" }
    ],
    explanation: "A função calcula o fatorial usando um laço multiplicativo. O resultado é retornado e exibido no programa principal."
  },

  // NÍVEL 4 - PROCEDIMENTOS COM VETORES (exercícios 9-10)
  {
    id: 9,
    nivel: 4,
    title: "Procedimento: Preencher Vetor",
    statement: "Crie um procedimento chamado preencherVetor que receba um vetor de 5 posições e o preencha com valores digitados pelo usuário.",
    input: "10, 20, 30, 40, 50",
    output: "Vetor: 10, 20, 30, 40, 50",
    code: `programa {
  // Declaração do procedimento
  funcao vazio preencherVetor(inteiro vetor[], inteiro tamanho) {
    para (inteiro i = 0; i < tamanho; i++) {
      escreva("Digite o valor para a posição ", i + 1, ": ")
      leia(vetor[i])
    }
  }
  
  funcao vazio exibirVetor(inteiro vetor[], inteiro tamanho) {
    escreva("Vetor: ")
    para (inteiro i = 0; i < tamanho; i++) {
      escreva(vetor[i])
      se (i < tamanho - 1) {
        escreva(", ")
      }
    }
    escreva("\\n")
  }
  
  funcao inicio() {
    const inteiro TAM = 5
    inteiro numeros[TAM]
    
    preencherVetor(numeros, TAM)
    exibirVetor(numeros, TAM)
  }
}`,
    testCases: [
      { values: { numeros: [10,20,30,40,50] }, result: "Vetor: 10, 20, 30, 40, 50", stepByStep: "Procedimento preenche cada posição; procedimento exibe o vetor" }
    ],
    explanation: "Procedimentos podem receber vetores como parâmetros. Aqui criamos dois procedimentos: um para preencher e outro para exibir. O vetor é passado por referência, então as alterações são refletidas no programa principal."
  },
  {
    id: 10,
    nivel: 4,
    title: "Procedimento: Tabuada",
    statement: "Crie um procedimento chamado mostrarTabuada que receba um número inteiro e exiba a tabuada desse número (de 1 a 10).",
    input: "5",
    output: "5 x 1 = 5\n5 x 2 = 10\n...\n5 x 10 = 50",
    code: `programa {
  // Declaração do procedimento
  funcao vazio mostrarTabuada(inteiro num) {
    escreva("Tabuada do ", num, ":\\n")
    para (inteiro i = 1; i <= 10; i++) {
      escreva(num, " x ", i, " = ", num * i, "\\n")
    }
  }
  
  funcao inicio() {
    inteiro numero
    
    escreva("Digite um número para ver sua tabuada: ")
    leia(numero)
    
    mostrarTabuada(numero)
  }
}`,
    testCases: [
      { values: { num: 5 }, result: "Tabuada do 5: 5x1=5, 5x2=10, ..., 5x10=50", stepByStep: "Laço de 1 a 10 calculando e exibindo o produto" },
      { values: { num: 3 }, result: "Tabuada do 3: 3x1=3, 3x2=6, ..., 3x10=30", stepByStep: "Laço de 1 a 10 calculando e exibindo o produto" }
    ],
    explanation: "O procedimento recebe um número e exibe sua tabuada de 1 a 10 usando um laço 'para'. Não retorna valor, apenas executa a exibição."
  }
];

// ========== RENDERIZAÇÃO DOS CONCEITOS ==========
function renderConceitosFuncoes() {
  const langText = getLanguageDisplayName();
  
  return `
    <div class="content-card">
      <h2 class="card-title">📦 Procedimentos e Funções</h2>
      <p>Imagine que você precise escrever um algoritmo para preencher uma matriz. Isso não é difícil. Mas e se fossem dez matrizes? Escrever o mesmo código várias vezes deixaria o programa cansativo e repetitivo. Para evitar isso, podemos escrever o procedimento apenas uma vez e reutilizá-lo sempre que necessário.</p>
      <p>Uma <strong>função</strong> é um bloco de código que resolve um problema específico, fazendo parte de um problema maior.</p>
      
      <div class="info-callout">
        <span class="info-icon-callout">✨</span>
        <div>
          <strong>Vantagens de usar funções e procedimentos:</strong>
          <br>• Evitam código repetido
          <br>• Permitem reutilizar o mesmo código em outros programas
          <br>• Dividem problemas grandes em partes menores e mais fáceis de entender
          <br>• Deixam o programa mais organizado e legível
          <br>• Escondem detalhes internos do funcionamento
        </div>
      </div>
    </div>
    
    <div class="content-card">
      <h2 class="card-title">🔧 Componentes de uma Função</h2>
      <div class="info-grid">
        <div class="info-grid-item">
          <strong>📌 Protótipo</strong><br>
          Define o nome da função e os parâmetros que ela recebe
        </div>
        <div class="info-grid-item">
          <strong>📦 Corpo</strong><br>
          Contém o bloco de comandos que resolve o problema
        </div>
        <div class="info-grid-item">
          <strong>🔄 Valor de retorno</strong><br>
          Resultado que a função pode devolver (opcional)
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
        <pre><code>funcao tipo_retorno nome_funcao(tipo param1, tipo param2) {
  // corpo da função
  // ...
  retorne valor
}</code></pre>
      </div>
      
      <div class="code-example">
        <div class="code-example-header">
          <span class="code-icon">📝</span>
          <span>Exemplo: Função que verifica número par</span>
        </div>
        <pre><code>funcao logico verificarPar(inteiro num) {
  retorne (num % 2 == 0)
}</code></pre>
      </div>
    </div>
    
    <div class="content-card">
      <h2 class="card-title">📝 Procedimentos</h2>
      <p>Além das funções com retorno, também podemos criar <strong>procedimentos</strong>. Um procedimento é muito parecido com uma função, mas <strong>não devolve nenhum valor</strong> ao final da sua execução. Ele serve para executar uma tarefa específica dentro do programa, sem a necessidade de calcular ou retornar um resultado.</p>
      
      <div class="info-callout">
        <span class="info-icon-callout">📌</span>
        <div>
          <strong>Exemplos de uso de procedimentos:</strong>
          <br>• Mostrar uma mensagem na tela
          <br>• Preencher uma matriz com valores digitados pelo usuário
          <br>• Exibir um relatório com os dados cadastrados
        </div>
      </div>
      
      <div class="code-example">
        <div class="code-example-header">
          <span class="code-icon">📝</span>
          <span>Sintaxe de um procedimento</span>
        </div>
        <pre><code>funcao vazio nome_procedimento(tipo param1, tipo param2) {
  // corpo do procedimento
  // não usa retorne
}</code></pre>
      </div>
      
      <div class="code-example">
        <div class="code-example-header">
          <span class="code-icon">📝</span>
          <span>Exemplo: Procedimento que exibe mensagem</span>
        </div>
        <pre><code>funcao vazio mensagemBoasVindas(cadeia nome) {
  escreva("Seja bem-vindo(a), ", nome, "!")
}</code></pre>
      </div>
    </div>
    
    <div class="content-card">
      <h2 class="card-title">⚖️ Diferenças entre Função e Procedimento</h2>
      <div class="operators-table">
        <div class="operator-row header">
          <div>Característica</div>
          <div>Função</div>
          <div>Procedimento</div>
        </div>
        <div class="operator-row">
          <div><strong>Retorno</strong></div>
          <div>Sempre pode retornar um valor</div>
          <div>Não retorna valor</div>
        </div>
        <div class="operator-row">
          <div><strong>Uso principal</strong></div>
          <div>Calcular ou processar e devolver resultado</div>
          <div>Executar tarefa sem necessidade de retorno</div>
        </div>
        <div class="operator-row">
          <div><strong>Retorne</strong></div>
          <div>Obrigatório (exceto funções vazio)</div>
          <div>Não utiliza retorne</div>
        </div>
        <div class="operator-row">
          <div><strong>Exemplo típico</strong></div>
          <div>Calcular a média de notas</div>
          <div>Mostrar mensagens na tela</div>
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
        <pre><code>funcao logico pergunta(cadeia texto) {
  cadeia resposta
  
  escreva(texto, " (S/N): ")
  leia(resposta)
  
  se (resposta == "S") {
    retorne verdadeiro
  } senao {
    retorne falso
  }
}

funcao inicio() {
  se (pergunta("Acabou a aula?")) {
    escreva("Vamos embora!")
  } senao {
    escreva("Trabalhemmmm!")
  }
}</code></pre>
      </div>
      
      <div class="info-callout" style="margin-top: 1rem;">
        <span class="info-icon-callout">💡</span>
        <div>
          <strong>Dica do Professor:</strong> 
          <br>• Use <strong>funções</strong> quando precisar calcular um valor e retorná-lo
          <br>• Use <strong>procedimentos</strong> quando precisar apenas executar uma ação (exibir, preencher, etc.)
          <br>• Nomes de funções devem indicar o que elas fazem (ex: calcularMedia, verificarPar)
          <br>• Divida problemas grandes em funções menores - isso facilita a manutenção!
        </div>
      </div>
    </div>
  `;
}

// ========== RENDERIZAÇÃO DOS EXERCÍCIOS ==========
function renderExerciciosFuncoes() {
  const currentEx = functionsExercises.find(e => e.id === window.currentFunctionsExercise) || functionsExercises[0];
  
  const niveis = {
    1: { nome: "⭐ Procedimentos Básicos", cor: "#10b981" },
    2: { nome: "⭐⭐ Funções com Retorno", cor: "#f59e0b" },
    3: { nome: "⭐⭐⭐ Funções com Cálculos", cor: "#3b82f6" },
    4: { nome: "⭐⭐⭐⭐ Procedimentos com Vetores", cor: "#8b5cf6" }
  };
  
  return `
    <div class="exercises-filter">
      <div class="filter-header">
        <span>📋 Exercícios de Funções e Procedimentos</span>
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
      <h1 class="page-title">⚙️ Funções e Procedimentos</h1>
      <p class="page-subtitle">Aprenda a organizar seu código com funções e procedimentos em ${getLanguageDisplayName()}</p>
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