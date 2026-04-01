// ========== DADOS DOS EXERCÍCIOS DE FUNÇÕES EM GO ==========
const functionsExercises = [
  // NÍVEL 1 - FUNÇÕES BÁSICAS (exercícios 1-3)
  {
    id: 1,
    nivel: 1,
    title: "Função: Mensagem Personalizada",
    statement: "Crie uma função chamada mensagemBoasVindas que receba como parâmetro o nome de uma pessoa e exiba a mensagem: 'Seja bem-vindo(a), [nome]!'. No programa principal, solicite o nome do usuário e chame a função.",
    input: "João",
    output: "Seja bem-vindo(a), João!",
    code: `package main

import "fmt"

func mensagemBoasVindas(nome string) {
    fmt.Printf("Seja bem-vindo(a), %s!\n", nome)
}

func main() {
    var nome string
    fmt.Print("Digite seu nome: ")
    fmt.Scan(&nome)
    mensagemBoasVindas(nome)
}`,
    testCases: [
      { values: { nome: "João" }, result: "Seja bem-vindo(a), João!", stepByStep: "Função recebe o nome e exibe a mensagem" },
      { values: { nome: "Maria" }, result: "Seja bem-vindo(a), Maria!", stepByStep: "Função recebe o nome e exibe a mensagem" }
    ],
    explanation: "Em Go, uma função é declarada com a palavra 'func', seguida do nome, parâmetros (com tipo) e tipo de retorno (se houver). A função 'mensagemBoasVindas' recebe um parâmetro 'nome' (string) e exibe a mensagem usando fmt.Printf."
  },
  {
    id: 2,
    nivel: 1,
    title: "Função: Desenhar Linha",
    statement: "Crie uma função chamada desenharLinha que receba um número inteiro representando a quantidade de caracteres e desenhe uma linha na tela usando o símbolo '-'. Exemplo: se o usuário digitar 10, a função deve exibir '----------'.",
    input: "10",
    output: "----------",
    code: `package main

import "fmt"

func desenharLinha(tamanho int) {
    for i := 0; i < tamanho; i++ {
        fmt.Print("-")
    }
    fmt.Println()
}

func main() {
    var num int
    fmt.Print("Digite o tamanho da linha: ")
    fmt.Scan(&num)
    desenharLinha(num)
}`,
    testCases: [
      { values: { tamanho: 10 }, result: "----------", stepByStep: "Laço repete a escrita do '-' 10 vezes" },
      { values: { tamanho: 5 }, result: "-----", stepByStep: "Laço repete a escrita do '-' 5 vezes" }
    ],
    explanation: "A função usa um laço 'for' para repetir a escrita do caractere '-' conforme o tamanho recebido. Não retorna valor (apenas efeito colateral)."
  },
  {
    id: 3,
    nivel: 1,
    title: "Função: Contagem Regressiva",
    statement: "Crie uma função chamada contagemRegressiva que receba um número inteiro positivo e faça uma contagem regressiva até 0, exibindo cada número na tela.",
    input: "5",
    output: "5, 4, 3, 2, 1, 0",
    code: `package main

import "fmt"

func contagemRegressiva(inicio int) {
    for i := inicio; i >= 0; i-- {
        fmt.Print(i)
        if i > 0 {
            fmt.Print(", ")
        }
    }
    fmt.Println()
}

func main() {
    var num int
    fmt.Print("Digite um número para contagem regressiva: ")
    fmt.Scan(&num)
    contagemRegressiva(num)
}`,
    testCases: [
      { values: { inicio: 5 }, result: "5, 4, 3, 2, 1, 0", stepByStep: "Laço decrescente de 5 até 0" },
      { values: { inicio: 3 }, result: "3, 2, 1, 0", stepByStep: "Laço decrescente de 3 até 0" }
    ],
    explanation: "A função usa um laço 'for' decrescente para exibir os números do valor recebido até 0. O 'if' interno formata a saída com vírgulas."
  },

  // NÍVEL 2 - FUNÇÕES COM RETORNO (exercícios 4-6)
  {
    id: 4,
    nivel: 2,
    title: "Função: Verificar Par ou Ímpar",
    statement: "Crie uma função chamada verificarPar que receba um número inteiro e retorne true se o número for par, e false se for ímpar.",
    input: "7",
    output: "O número 7 é ÍMPAR",
    code: `package main

import "fmt"

func verificarPar(num int) bool {
    return num%2 == 0
}

func main() {
    var numero int
    fmt.Print("Digite um número: ")
    fmt.Scan(&numero)

    if verificarPar(numero) {
        fmt.Printf("O número %d é PAR\n", numero)
    } else {
        fmt.Printf("O número %d é ÍMPAR\n", numero)
    }
}`,
    testCases: [
      { values: { num: 8 }, result: "PAR", stepByStep: "8 % 2 = 0 → true → PAR" },
      { values: { num: 7 }, result: "ÍMPAR", stepByStep: "7 % 2 = 1 → false → ÍMPAR" }
    ],
    explanation: "A função retorna o resultado da expressão lógica (num%2 == 0). O programa principal usa esse valor em uma estrutura condicional para exibir a mensagem adequada."
  },
  {
    id: 5,
    nivel: 2,
    title: "Função: Maior de Dois Números",
    statement: "Crie uma função chamada maiorNumero que receba dois números reais e retorne o maior deles.",
    input: "15.5, 22.3",
    output: "O maior número é 22.3",
    code: `package main

import "fmt"

func maiorNumero(a, b float64) float64 {
    if a > b {
        return a
    }
    return b
}

func main() {
    var n1, n2 float64
    fmt.Print("Digite o primeiro número: ")
    fmt.Scan(&n1)
    fmt.Print("Digite o segundo número: ")
    fmt.Scan(&n2)

    maior := maiorNumero(n1, n2)
    fmt.Printf("O maior número é %.2f\n", maior)
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
    code: `package main

import "fmt"

func celsiusParaFahrenheit(celsius float64) float64 {
    return (celsius * 9 / 5) + 32
}

func main() {
    var celsius float64
    fmt.Print("Digite a temperatura em Celsius: ")
    fmt.Scan(&celsius)

    fahrenheit := celsiusParaFahrenheit(celsius)
    fmt.Printf("%.2f°C equivale a %.2f°F\n", celsius, fahrenheit)
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
    code: `package main

import "fmt"

func calcularMedia(n1, n2, n3 float64) float64 {
    return (n1 + n2 + n3) / 3
}

func main() {
    var n1, n2, n3 float64
    fmt.Print("Digite a primeira nota: ")
    fmt.Scan(&n1)
    fmt.Print("Digite a segunda nota: ")
    fmt.Scan(&n2)
    fmt.Print("Digite a terceira nota: ")
    fmt.Scan(&n3)

    media := calcularMedia(n1, n2, n3)
    fmt.Printf("A média das notas é: %.2f\n", media)
}`,
    testCases: [
      { values: { n1: 7.5, n2: 8.0, n3: 9.0 }, result: 8.17, stepByStep: "(7.5 + 8.0 + 9.0) / 3 = 24.5 / 3 = 8.166..." },
      { values: { n1: 5, n2: 6, n3: 7 }, result: 6, stepByStep: "(5+6+7)/3 = 18/3 = 6" }
    ],
    explanation: "A função recebe três parâmetros, calcula a soma e divide por 3, retornando o resultado. O programa principal exibe a média calculada com duas casas decimais."
  },
  {
    id: 8,
    nivel: 3,
    title: "Função: Fatorial",
    statement: "Crie uma função chamada calcularFatorial que receba um número inteiro positivo e retorne o fatorial desse número.",
    input: "5",
    output: "5! = 120",
    code: `package main

import "fmt"

func calcularFatorial(num int) int {
    fat := 1
    for i := num; i >= 2; i-- {
        fat *= i
    }
    return fat
}

func main() {
    var num int
    fmt.Print("Digite um número para calcular o fatorial: ")
    fmt.Scan(&num)

    resultado := calcularFatorial(num)
    fmt.Printf("%d! = %d\n", num, resultado)
}`,
    testCases: [
      { values: { num: 5 }, result: 120, stepByStep: "5×4×3×2×1 = 120" },
      { values: { num: 4 }, result: 24, stepByStep: "4×3×2×1 = 24" }
    ],
    explanation: "A função calcula o fatorial usando um laço multiplicativo. O resultado é retornado e exibido no programa principal."
  },

  // NÍVEL 4 - FUNÇÕES COM SLICES (exercícios 9-10)
  {
    id: 9,
    nivel: 4,
    title: "Função: Preencher Slice",
    statement: "Crie uma função chamada preencherSlice que receba um slice de 5 posições e o preencha com valores digitados pelo usuário.",
    input: "10, 20, 30, 40, 50",
    output: "Slice: 10, 20, 30, 40, 50",
    code: `package main

import "fmt"

func preencherSlice(slice []int) {
    for i := 0; i < len(slice); i++ {
        fmt.Printf("Digite o valor para a posição %d: ", i+1)
        fmt.Scan(&slice[i])
    }
}

func exibirSlice(slice []int) {
    fmt.Print("Slice: ")
    for i, v := range slice {
        fmt.Print(v)
        if i < len(slice)-1 {
            fmt.Print(", ")
        }
    }
    fmt.Println()
}

func main() {
    const TAMANHO = 5
    numeros := make([]int, TAMANHO)

    preencherSlice(numeros)
    exibirSlice(numeros)
}`,
    testCases: [
      { values: { numeros: [10,20,30,40,50] }, result: "Slice: 10, 20, 30, 40, 50", stepByStep: "Função preenche cada posição; função exibe o slice" }
    ],
    explanation: "Funções podem receber slices como parâmetros. Em Go, slices são passados por referência, então as alterações são refletidas no programa principal. Criamos duas funções: uma para preencher e outra para exibir."
  },
  {
    id: 10,
    nivel: 4,
    title: "Função: Tabuada",
    statement: "Crie uma função chamada mostrarTabuada que receba um número inteiro e exiba a tabuada desse número (de 1 a 10).",
    input: "5",
    output: "5 x 1 = 5\n5 x 2 = 10\n...\n5 x 10 = 50",
    code: `package main

import "fmt"

func mostrarTabuada(num int) {
    fmt.Printf("Tabuada do %d:\n", num)
    for i := 1; i <= 10; i++ {
        fmt.Printf("%d x %d = %d\n", num, i, num*i)
    }
}

func main() {
    var num int
    fmt.Print("Digite um número para ver sua tabuada: ")
    fmt.Scan(&num)
    mostrarTabuada(num)
}`,
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
      <h2 class="card-title">📦 Funções em Go</h2>
      <p>Funções são blocos de código reutilizáveis que realizam uma tarefa específica. Em Go, as funções podem receber parâmetros, retornar valores (inclusive múltiplos), e são declaradas com a palavra-chave <code>func</code>.</p>
      
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
      <h2 class="card-title">🔧 Estrutura de uma Função em Go</h2>
      <div class="info-grid">
        <div class="info-grid-item">
          <strong>📌 Nome</strong><br>
          Identificador que descreve a ação
        </div>
        <div class="info-grid-item">
          <strong>📦 Parâmetros</strong><br>
          Valores de entrada (tipo após o nome)
        </div>
        <div class="info-grid-item">
          <strong>🔄 Retorno</strong><br>
          Tipo(s) do valor retornado
        </div>
        <div class="info-grid-item">
          <strong>📝 Corpo</strong><br>
          Bloco de código indentado
        </div>
      </div>
      
      <div class="code-example">
        <div class="code-example-header">
          <span class="code-icon">📝</span>
          <span>Sintaxe básica</span>
        </div>
        <pre><code>func nome(param1 tipo1, param2 tipo2) tipoRetorno {
    // corpo
    return valor
}</code></pre>
      </div>
    </div>
    
    <div class="content-card">
      <h2 class="card-title">📝 Declaração de Função em Go</h2>
      <div class="code-example">
        <div class="code-example-header">
          <span class="code-icon">📝</span>
          <span>Exemplo: Função que retorna soma</span>
        </div>
        <pre><code>func somar(a int, b int) int {
    return a + b
}</code></pre>
      </div>
      <div class="code-example">
        <div class="code-example-header">
          <span class="code-icon">📝</span>
          <span>Múltiplos retornos (comum em Go)</span>
        </div>
        <pre><code>func dividir(a, b float64) (float64, error) {
    if b == 0 {
        return 0, errors.New("divisão por zero")
    }
    return a / b, nil
}</code></pre>
      </div>
    </div>
    
    <div class="content-card">
      <h2 class="card-title">🔄 Funções sem Retorno (Procedimentos)</h2>
      <p>Em Go, funções que não retornam valor têm tipo de retorno vazio (não especificado) e são chamadas apenas pelo efeito colateral.</p>
      <div class="code-example">
        <div class="code-example-header">
          <span class="code-icon">📝</span>
          <span>Procedimento simples</span>
        </div>
        <pre><code>func saudacao(nome string) {
    fmt.Println("Olá,", nome)
}</code></pre>
      </div>
    </div>
    
    <div class="content-card">
      <h2 class="card-title">📋 Convenções em Go</h2>
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
          <div>Nomes públicos (exportados)</div>
          <div>PascalCase</div>
          <div><code>CalcularMedia</code></div>
        </div>
        <div class="operator-row">
          <div>Parâmetros</div>
          <div>camelCase</div>
          <div><code>nome, idade</code></div>
        </div>
      </div>
      <div class="info-callout" style="margin-top: 1rem;">
        <span class="info-icon-callout">📌</span>
        <div>Em Go, nomes começando com letra maiúscula são <strong>exportados</strong> (públicos), e minúsculos são privados ao pacote.</div>
      </div>
    </div>
    
    <div class="content-card">
      <h2 class="card-title">🎯 Exemplo Prático Completo</h2>
      <div class="code-example">
        <div class="code-example-header">
          <span class="code-icon">📝</span>
          <span>Função que faz pergunta</span>
        </div>
        <pre><code>func perguntar(texto string) bool {
    var resposta string
    fmt.Print(texto, " (S/N): ")
    fmt.Scan(&resposta)
    return resposta == "S" || resposta == "s"
}

func main() {
    if perguntar("Acabou a aula?") {
        fmt.Println("Vamos embora!")
    } else {
        fmt.Println("Trabalhemmmm!")
    }
}</code></pre>
      </div>
      
      <div class="info-callout" style="margin-top: 1rem;">
        <span class="info-icon-callout">💡</span>
        <div>
          <strong>Dica do Professor:</strong> 
          <br>• Use <strong>camelCase</strong> para nomes de funções internas
          <br>• Funções que retornam erro devem devolver error como último valor
          <br>• Nomes de funções devem ser verbos (ex: calcularMedia, verificarPar)
          <br>• Prefira funções curtas e com uma única responsabilidade
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
    4: { nome: "⭐⭐⭐⭐ Funções com Slices", cor: "#8b5cf6" }
  };
  
  return `
    <div class="exercises-filter">
      <div class="filter-header">
        <span>📋 Exercícios de Funções em Go</span>
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
      <h1 class="page-title">⚙️ Funções em Go</h1>
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