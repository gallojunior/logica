// ========== DADOS DOS EXERCÍCIOS DE FUNÇÕES EM C/C++ ==========
const functionsExercises = [
  // NÍVEL 1 - FUNÇÕES BÁSICAS (exercícios 1-3)
  {
    id: 1,
    nivel: 1,
    title: "Função: Mensagem Personalizada",
    statement: "Crie uma função chamada mensagemBoasVindas que receba como parâmetro o nome de uma pessoa e exiba a mensagem: 'Seja bem-vindo(a), [nome]!'. No programa principal, solicite o nome do usuário e chame a função.",
    input: "João",
    output: "Seja bem-vindo(a), João!",
    code: `#include <stdio.h>

void mensagemBoasVindas(char nome[]) {
    printf("Seja bem-vindo(a), %s!\n", nome);
}

int main() {
    char nome[50];
    printf("Digite seu nome: ");
    scanf("%s", nome);
    mensagemBoasVindas(nome);
    return 0;
}`,
    testCases: [
      { values: { nome: "João" }, result: "Seja bem-vindo(a), João!", stepByStep: "Função recebe o nome e exibe a mensagem" },
      { values: { nome: "Maria" }, result: "Seja bem-vindo(a), Maria!", stepByStep: "Função recebe o nome e exibe a mensagem" }
    ],
    explanation: "Em C/C++, uma função é declarada com um tipo de retorno (void quando não retorna valor). O parâmetro 'nome' é um array de caracteres (string). A função usa printf para exibir a mensagem."
  },
  {
    id: 2,
    nivel: 1,
    title: "Função: Desenhar Linha",
    statement: "Crie uma função chamada desenharLinha que receba um número inteiro representando a quantidade de caracteres e desenhe uma linha na tela usando o símbolo '-'. Exemplo: se o usuário digitar 10, a função deve exibir '----------'.",
    input: "10",
    output: "----------",
    code: `#include <stdio.h>

void desenharLinha(int tamanho) {
    for (int i = 0; i < tamanho; i++) {
        printf("-");
    }
    printf("\n");
}

int main() {
    int num;
    printf("Digite o tamanho da linha: ");
    scanf("%d", &num);
    desenharLinha(num);
    return 0;
}`,
    testCases: [
      { values: { tamanho: 10 }, result: "----------", stepByStep: "Laço repete a escrita do '-' 10 vezes" },
      { values: { tamanho: 5 }, result: "-----", stepByStep: "Laço repete a escrita do '-' 5 vezes" }
    ],
    explanation: "A função usa um laço 'for' para repetir a escrita do caractere '-' conforme o tamanho recebido. Não retorna valor (void)."
  },
  {
    id: 3,
    nivel: 1,
    title: "Função: Contagem Regressiva",
    statement: "Crie uma função chamada contagemRegressiva que receba um número inteiro positivo e faça uma contagem regressiva até 0, exibindo cada número na tela.",
    input: "5",
    output: "5, 4, 3, 2, 1, 0",
    code: `#include <stdio.h>

void contagemRegressiva(int inicio) {
    for (int i = inicio; i >= 0; i--) {
        printf("%d", i);
        if (i > 0) printf(", ");
    }
    printf("\n");
}

int main() {
    int num;
    printf("Digite um número para contagem regressiva: ");
    scanf("%d", &num);
    contagemRegressiva(num);
    return 0;
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
    statement: "Crie uma função chamada verificarPar que receba um número inteiro e retorne 1 (verdadeiro) se o número for par, e 0 (falso) se for ímpar.",
    input: "7",
    output: "O número 7 é ÍMPAR",
    code: `#include <stdio.h>

int verificarPar(int num) {
    return num % 2 == 0;
}

int main() {
    int numero;
    printf("Digite um número: ");
    scanf("%d", &numero);
    if (verificarPar(numero)) {
        printf("O número %d é PAR\n", numero);
    } else {
        printf("O número %d é ÍMPAR\n", numero);
    }
    return 0;
}`,
    testCases: [
      { values: { num: 8 }, result: "PAR", stepByStep: "8 % 2 == 0 → 1 → PAR" },
      { values: { num: 7 }, result: "ÍMPAR", stepByStep: "7 % 2 == 1 → 0 → ÍMPAR" }
    ],
    explanation: "A função retorna o resultado da expressão lógica. Em C, valores diferentes de zero são verdadeiros."
  },
  {
    id: 5,
    nivel: 2,
    title: "Função: Maior de Dois Números",
    statement: "Crie uma função chamada maiorNumero que receba dois números reais e retorne o maior deles.",
    input: "15.5, 22.3",
    output: "O maior número é 22.3",
    code: `#include <stdio.h>

double maiorNumero(double a, double b) {
    if (a > b) return a;
    else return b;
}

int main() {
    double n1, n2;
    printf("Digite o primeiro número: ");
    scanf("%lf", &n1);
    printf("Digite o segundo número: ");
    scanf("%lf", &n2);
    double maior = maiorNumero(n1, n2);
    printf("O maior número é %.2f\n", maior);
    return 0;
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
    code: `#include <stdio.h>

double celsiusParaFahrenheit(double celsius) {
    return (celsius * 9 / 5) + 32;
}

int main() {
    double c;
    printf("Digite a temperatura em Celsius: ");
    scanf("%lf", &c);
    double f = celsiusParaFahrenheit(c);
    printf("%.2f°C equivale a %.2f°F\n", c, f);
    return 0;
}`,
    testCases: [
      { values: { celsius: 30 }, result: 86, stepByStep: "(30 × 9/5) + 32 = 86" },
      { values: { celsius: 0 }, result: 32, stepByStep: "(0 × 9/5) + 32 = 32" }
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
    code: `#include <stdio.h>

double calcularMedia(double n1, double n2, double n3) {
    return (n1 + n2 + n3) / 3;
}

int main() {
    double a, b, c;
    printf("Digite a primeira nota: ");
    scanf("%lf", &a);
    printf("Digite a segunda nota: ");
    scanf("%lf", &b);
    printf("Digite a terceira nota: ");
    scanf("%lf", &c);
    double media = calcularMedia(a, b, c);
    printf("A média das notas é: %.2f\n", media);
    return 0;
}`,
    testCases: [
      { values: { n1: 7.5, n2: 8.0, n3: 9.0 }, result: 8.17, stepByStep: "(7.5+8.0+9.0)/3 = 8.166..." },
      { values: { n1: 5, n2: 6, n3: 7 }, result: 6, stepByStep: "(5+6+7)/3 = 6" }
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
    code: `#include <stdio.h>

int calcularFatorial(int num) {
    int fat = 1;
    for (int i = num; i >= 2; i--) {
        fat *= i;
    }
    return fat;
}

int main() {
    int n;
    printf("Digite um número para calcular o fatorial: ");
    scanf("%d", &n);
    int resultado = calcularFatorial(n);
    printf("%d! = %d\n", n, resultado);
    return 0;
}`,
    testCases: [
      { values: { num: 5 }, result: 120, stepByStep: "5×4×3×2×1 = 120" },
      { values: { num: 4 }, result: 24, stepByStep: "4×3×2×1 = 24" }
    ],
    explanation: "A função calcula o fatorial usando um laço multiplicativo. O resultado é retornado e exibido no programa principal."
  },

  // NÍVEL 4 - FUNÇÕES COM ARRAYS (exercícios 9-10)
  {
    id: 9,
    nivel: 4,
    title: "Função: Preencher Array",
    statement: "Crie uma função chamada preencherArray que receba um array de 5 posições e o preencha com valores digitados pelo usuário. Crie também uma função para exibir o array.",
    input: "10, 20, 30, 40, 50",
    output: "Array: 10, 20, 30, 40, 50",
    code: `#include <stdio.h>

void preencherArray(int vetor[], int tamanho) {
    for (int i = 0; i < tamanho; i++) {
        printf("Digite o valor para a posição %d: ", i+1);
        scanf("%d", &vetor[i]);
    }
}

void exibirArray(int vetor[], int tamanho) {
    printf("Array: ");
    for (int i = 0; i < tamanho; i++) {
        printf("%d", vetor[i]);
        if (i < tamanho-1) printf(", ");
    }
    printf("\n");
}

int main() {
    const int TAMANHO = 5;
    int numeros[TAMANHO];
    preencherArray(numeros, TAMANHO);
    exibirArray(numeros, TAMANHO);
    return 0;
}`,
    testCases: [
      { values: { numeros: [10,20,30,40,50] }, result: "Array: 10, 20, 30, 40, 50", stepByStep: "Função preenche cada posição; função exibe o array" }
    ],
    explanation: "Em C, arrays são passados como ponteiros para a função. As alterações são refletidas no programa principal. Criamos duas funções: uma para preencher e outra para exibir."
  },
  {
    id: 10,
    nivel: 4,
    title: "Função: Tabuada",
    statement: "Crie uma função chamada mostrarTabuada que receba um número inteiro e exiba a tabuada desse número (de 1 a 10).",
    input: "5",
    output: "5 x 1 = 5\n5 x 2 = 10\n...\n5 x 10 = 50",
    code: `#include <stdio.h>

void mostrarTabuada(int num) {
    printf("Tabuada do %d:\n", num);
    for (int i = 1; i <= 10; i++) {
        printf("%d x %d = %d\n", num, i, num * i);
    }
}

int main() {
    int n;
    printf("Digite um número para ver sua tabuada: ");
    scanf("%d", &n);
    mostrarTabuada(n);
    return 0;
}`,
    testCases: [
      { values: { num: 5 }, result: "Tabuada do 5: 5x1=5, 5x2=10, ..., 5x10=50", stepByStep: "Laço de 1 a 10 calculando e exibindo o produto" },
      { values: { num: 3 }, result: "Tabuada do 3: 3x1=3, 3x2=6, ..., 3x10=30", stepByStep: "Laço de 1 a 10 calculando e exibindo o produto" }
    ],
    explanation: "A função recebe um número e exibe sua tabuada de 1 a 10 usando um laço 'for'. Não retorna valor (void), apenas executa a exibição."
  }
];

// ========== RENDERIZAÇÃO DOS CONCEITOS ==========
function renderConceitosFuncoes() {
  const langText = getLanguageDisplayName();
  
  return `
    <div class="content-card">
      <h2 class="card-title">📦 Funções em C/C++</h2>
      <p>Funções são blocos de código reutilizáveis que realizam uma tarefa específica. Em C/C++, as funções podem retornar um valor ou não (void). Parâmetros são passados por valor por padrão, mas arrays são passados como ponteiros.</p>
      
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
      <h2 class="card-title">🔧 Estrutura de uma Função</h2>
      <div class="info-grid">
        <div class="info-grid-item">
          <strong>📌 Tipo de retorno</strong><br>
          void, int, double, char, etc.
        </div>
        <div class="info-grid-item">
          <strong>📦 Nome</strong><br>
          Identificador (geralmente snake_case)
        </div>
        <div class="info-grid-item">
          <strong>🔄 Parâmetros</strong><br>
          Lista de tipos e nomes
        </div>
        <div class="info-grid-item">
          <strong>📝 Corpo</strong><br>
          Código entre chaves
        </div>
      </div>
      
      <div class="code-example">
        <div class="code-example-header">
          <span class="code-icon">📝</span>
          <span>Sintaxe básica</span>
        </div>
        <pre><code>tipo_retorno nome_funcao(tipo param1, tipo param2) {
    // corpo
    return valor; // se tipo_retorno não for void
}</code></pre>
      </div>
    </div>
    
    <div class="content-card">
      <h2 class="card-title">📝 Declaração de Função</h2>
      <div class="code-example">
        <div class="code-example-header">
          <span class="code-icon">📝</span>
          <span>Função sem retorno (procedimento)</span>
        </div>
        <pre><code>void saudacao(char nome[]) {
    printf("Olá, %s!\n", nome);
}</code></pre>
      </div>
      <div class="code-example">
        <div class="code-example-header">
          <span class="code-icon">📝</span>
          <span>Função com retorno</span>
        </div>
        <pre><code>int soma(int a, int b) {
    return a + b;
}</code></pre>
      </div>
    </div>
    
    <div class="content-card">
      <h2 class="card-title">🔄 Passagem de Parâmetros</h2>
      <p>Em C/C++, os parâmetros são passados por valor por padrão. Para modificar uma variável dentro de uma função, podemos usar ponteiros (ou referências em C++). Arrays são passados por referência implicitamente.</p>
      <div class="code-example">
        <div class="code-example-header">
          <span class="code-icon">📝</span>
          <span>Passagem por referência (ponteiro)</span>
        </div>
        <pre><code>void trocar(int *a, int *b) {
    int temp = *a;
    *a = *b;
    *b = temp;
}</code></pre>
      </div>
    </div>
    
    <div class="content-card">
      <h2 class="card-title">📋 Convenções em C/C++</h2>
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
          <div><code>int idade</code></div>
        </div>
        <div class="operator-row">
          <div>Constantes</div>
          <div>UPPER_SNAKE_CASE</div>
          <div><code>#define PI 3.14159</code></div>
        </div>
      </div>
      <div class="info-callout" style="margin-top: 1rem;">
        <span class="info-icon-callout">📌</span>
        <div>Em C++, também é possível usar referências (int &x) para evitar ponteiros.</div>
      </div>
    </div>
    
    <div class="content-card">
      <h2 class="card-title">🎯 Exemplo Prático Completo</h2>
      <div class="code-example">
        <div class="code-example-header">
          <span class="code-icon">📝</span>
          <span>Função que faz pergunta</span>
        </div>
        <pre><code>#include <stdio.h>
#include <ctype.h>

int perguntar(char texto[]) {
    char resposta;
    printf("%s (S/N): ", texto);
    scanf(" %c", &resposta);
    return toupper(resposta) == 'S';
}

int main() {
    if (perguntar("Acabou a aula?")) {
        printf("Vamos embora!\n");
    } else {
        printf("Trabalhemmmm!\n");
    }
    return 0;
}</code></pre>
      </div>
      
      <div class="info-callout" style="margin-top: 1rem;">
        <span class="info-icon-callout">💡</span>
        <div>
          <strong>Dica do Professor:</strong> 
          <br>• Use nomes significativos e em snake_case.
          <br>• Declare protótipos de funções no início do arquivo para organizar.
          <br>• Em C++, use <code>bool</code> (incluindo <code>&lt;stdbool.h&gt;</code> em C) para valores lógicos.
          <br>• Funções devem ter uma única responsabilidade.
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
        <span>📋 Exercícios de Funções em C/C++</span>
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
      <h1 class="page-title">⚙️ Funções em C/C++</h1>
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