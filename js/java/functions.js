// js/java/functions.js

// ========== DADOS DOS EXERCÍCIOS DE FUNÇÕES EM JAVA ==========
const functionsExercises = [
  // NÍVEL 1 - FUNÇÕES BÁSICAS (exercícios 1-3)
  {
    id: 1,
    nivel: 1,
    title: "Função: Mensagem Personalizada",
    statement: "Crie um método em Java chamado mensagemBoasVindas que receba como parâmetro o nome de uma pessoa e exiba a mensagem: 'Seja bem-vindo(a), [nome]!'. No programa principal, solicite o nome do usuário e chame o método.",
    input: "João",
    output: "Seja bem-vindo(a), João!",
    code: `import java.util.Scanner;

public class Main {
    static void mensagemBoasVindas(String nome) {
        System.out.println("Seja bem-vindo(a), " + nome + "!");
    }
    
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        System.out.print("Digite seu nome: ");
        String nome = scanner.nextLine();
        mensagemBoasVindas(nome);
        scanner.close();
    }
}`,
    testCases: [
      { values: { nome: "João" }, result: "Seja bem-vindo(a), João!", stepByStep: "Método recebe o nome e exibe a mensagem" },
      { values: { nome: "Maria" }, result: "Seja bem-vindo(a), Maria!", stepByStep: "Método recebe o nome e exibe a mensagem" }
    ],
    explanation: "Em Java, um método é declarado com um modificador de acesso (static), tipo de retorno (void para procedimentos) e parâmetros. O método 'mensagemBoasVindas' recebe um parâmetro 'nome' e exibe uma mensagem usando System.out.println()."
  },
  {
    id: 2,
    nivel: 1,
    title: "Função: Desenhar Linha",
    statement: "Crie um método em Java chamado desenharLinha que receba um número inteiro representando a quantidade de caracteres e desenhe uma linha na tela usando o símbolo '-'. Exemplo: se o usuário digitar 10, o método deve exibir '----------'.",
    input: "10",
    output: "----------",
    code: `import java.util.Scanner;

public class Main {
    static void desenharLinha(int tamanho) {
        for (int i = 0; i < tamanho; i++) {
            System.out.print("-");
        }
        System.out.println();
    }
    
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        System.out.print("Digite o tamanho da linha: ");
        int num = scanner.nextInt();
        desenharLinha(num);
        scanner.close();
    }
}`,
    testCases: [
      { values: { tamanho: 10 }, result: "----------", stepByStep: "Laço repete a escrita do '-' 10 vezes" },
      { values: { tamanho: 5 }, result: "-----", stepByStep: "Laço repete a escrita do '-' 5 vezes" }
    ],
    explanation: "O método usa um laço 'for' para repetir a escrita do caractere '-' conforme o tamanho recebido. Não retorna valor (void), apenas executa a ação de desenhar."
  },
  {
    id: 3,
    nivel: 1,
    title: "Função: Contagem Regressiva",
    statement: "Crie um método em Java chamado contagemRegressiva que receba um número inteiro positivo e faça uma contagem regressiva até 0, exibindo cada número na tela.",
    input: "5",
    output: "5, 4, 3, 2, 1, 0",
    code: `import java.util.Scanner;

public class Main {
    static void contagemRegressiva(int inicio) {
        for (int i = inicio; i >= 0; i--) {
            System.out.print(i);
            if (i > 0) System.out.print(", ");
        }
        System.out.println();
    }
    
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        System.out.print("Digite um número para contagem regressiva: ");
        int num = scanner.nextInt();
        contagemRegressiva(num);
        scanner.close();
    }
}`,
    testCases: [
      { values: { inicio: 5 }, result: "5, 4, 3, 2, 1, 0", stepByStep: "Laço decrescente de 5 até 0" },
      { values: { inicio: 3 }, result: "3, 2, 1, 0", stepByStep: "Laço decrescente de 3 até 0" }
    ],
    explanation: "O método usa um laço 'for' decrescente para exibir os números do valor recebido até 0. O 'if' interno formata a saída com vírgulas."
  },

  // NÍVEL 2 - MÉTODOS COM RETORNO (exercícios 4-6)
  {
    id: 4,
    nivel: 2,
    title: "Método: Verificar Par ou Ímpar",
    statement: "Crie um método em Java chamado verificarPar que receba um número inteiro e retorne verdadeiro se o número for par, e falso se for ímpar.",
    input: "7",
    output: "O número 7 é ÍMPAR",
    code: `import java.util.Scanner;

public class Main {
    static boolean verificarPar(int num) {
        return num % 2 == 0;
    }
    
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        System.out.print("Digite um número: ");
        int numero = scanner.nextInt();
        
        if (verificarPar(numero)) {
            System.out.println("O número " + numero + " é PAR");
        } else {
            System.out.println("O número " + numero + " é ÍMPAR");
        }
        scanner.close();
    }
}`,
    testCases: [
      { values: { num: 8 }, result: "PAR", stepByStep: "8 % 2 = 0 → true → PAR" },
      { values: { num: 7 }, result: "ÍMPAR", stepByStep: "7 % 2 = 1 → false → ÍMPAR" }
    ],
    explanation: "O método retorna o resultado da expressão lógica (num % 2 == 0). O programa principal usa esse valor em uma estrutura condicional para exibir a mensagem adequada."
  },
  {
    id: 5,
    nivel: 2,
    title: "Método: Maior de Dois Números",
    statement: "Crie um método em Java chamado maiorNumero que receba dois números reais e retorne o maior deles.",
    input: "15.5, 22.3",
    output: "O maior número é 22.3",
    code: `import java.util.Scanner;

public class Main {
    static double maiorNumero(double a, double b) {
        if (a > b) {
            return a;
        } else {
            return b;
        }
    }
    
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        System.out.print("Digite o primeiro número: ");
        double n1 = scanner.nextDouble();
        System.out.print("Digite o segundo número: ");
        double n2 = scanner.nextDouble();
        
        double maior = maiorNumero(n1, n2);
        System.out.println("O maior número é " + maior);
        scanner.close();
    }
}`,
    testCases: [
      { values: { a: 15.5, b: 22.3 }, result: 22.3, stepByStep: "22.3 > 15.5 → retorna 22.3" },
      { values: { a: 30, b: 25 }, result: 30, stepByStep: "30 > 25 → retorna 30" }
    ],
    explanation: "O método compara os dois valores e retorna o maior. O resultado é armazenado em uma variável e exibido no programa principal."
  },
  {
    id: 6,
    nivel: 2,
    title: "Método: Conversão de Temperatura",
    statement: "Crie um método em Java chamado celsiusParaFahrenheit que receba uma temperatura em graus Celsius e retorne o valor convertido para Fahrenheit.",
    input: "30",
    output: "30°C equivale a 86.0°F",
    code: `import java.util.Scanner;

public class Main {
    static double celsiusParaFahrenheit(double celsius) {
        return (celsius * 9 / 5) + 32;
    }
    
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        System.out.print("Digite a temperatura em Celsius: ");
        double celsius = scanner.nextDouble();
        
        double fahrenheit = celsiusParaFahrenheit(celsius);
        System.out.println(celsius + "°C equivale a " + fahrenheit + "°F");
        scanner.close();
    }
}`,
    testCases: [
      { values: { celsius: 30 }, result: 86, stepByStep: "(30 × 9/5) + 32 = 54 + 32 = 86" },
      { values: { celsius: 0 }, result: 32, stepByStep: "(0 × 9/5) + 32 = 0 + 32 = 32" }
    ],
    explanation: "O método aplica a fórmula de conversão e retorna o valor calculado. O programa principal armazena o resultado e exibe formatado."
  },

  // NÍVEL 3 - MÉTODOS COM CÁLCULOS (exercícios 7-8)
  {
    id: 7,
    nivel: 3,
    title: "Método: Calcular Média",
    statement: "Crie um método em Java chamado calcularMedia que receba três notas reais e retorne a média aritmética delas.",
    input: "7.5, 8.0, 9.0",
    output: "A média das notas é: 8.17",
    code: `import java.util.Scanner;

public class Main {
    static double calcularMedia(double n1, double n2, double n3) {
        return (n1 + n2 + n3) / 3;
    }
    
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        System.out.print("Digite a primeira nota: ");
        double nota1 = scanner.nextDouble();
        System.out.print("Digite a segunda nota: ");
        double nota2 = scanner.nextDouble();
        System.out.print("Digite a terceira nota: ");
        double nota3 = scanner.nextDouble();
        
        double media = calcularMedia(nota1, nota2, nota3);
        System.out.printf("A média das notas é: %.2f%n", media);
        scanner.close();
    }
}`,
    testCases: [
      { values: { n1: 7.5, n2: 8.0, n3: 9.0 }, result: 8.17, stepByStep: "(7.5 + 8.0 + 9.0) / 3 = 24.5 / 3 = 8.166..." },
      { values: { n1: 5, n2: 6, n3: 7 }, result: 6, stepByStep: "(5+6+7)/3 = 18/3 = 6" }
    ],
    explanation: "O método recebe três parâmetros, calcula a soma e divide por 3, retornando o resultado. O programa principal exibe a média calculada com duas casas decimais usando printf."
  },
  {
    id: 8,
    nivel: 3,
    title: "Método: Fatorial",
    statement: "Crie um método em Java chamado calcularFatorial que receba um número inteiro positivo e retorne o fatorial desse número.",
    input: "5",
    output: "5! = 120",
    code: `import java.util.Scanner;

public class Main {
    static int calcularFatorial(int num) {
        int fat = 1;
        for (int i = num; i >= 2; i--) {
            fat *= i;
        }
        return fat;
    }
    
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        System.out.print("Digite um número para calcular o fatorial: ");
        int numero = scanner.nextInt();
        
        int resultado = calcularFatorial(numero);
        System.out.println(numero + "! = " + resultado);
        scanner.close();
    }
}`,
    testCases: [
      { values: { num: 5 }, result: 120, stepByStep: "5×4×3×2×1 = 120" },
      { values: { num: 4 }, result: 24, stepByStep: "4×3×2×1 = 24" }
    ],
    explanation: "O método calcula o fatorial usando um laço multiplicativo. O resultado é retornado e exibido no programa principal."
  },

  // NÍVEL 4 - MÉTODOS COM ARRAYS (exercícios 9-10)
  {
    id: 9,
    nivel: 4,
    title: "Método: Preencher Array",
    statement: "Crie um método em Java chamado preencherArray que receba um array de 5 posições e o preencha com valores digitados pelo usuário.",
    input: "10, 20, 30, 40, 50",
    output: "Array: 10, 20, 30, 40, 50",
    code: `import java.util.Scanner;

public class Main {
    static void preencherArray(int[] array) {
        Scanner scanner = new Scanner(System.in);
        for (int i = 0; i < array.length; i++) {
            System.out.print("Digite o valor para a posição " + (i + 1) + ": ");
            array[i] = scanner.nextInt();
        }
    }
    
    static void exibirArray(int[] array) {
        System.out.print("Array: ");
        for (int i = 0; i < array.length; i++) {
            System.out.print(array[i]);
            if (i < array.length - 1) {
                System.out.print(", ");
            }
        }
        System.out.println();
    }
    
    public static void main(String[] args) {
        final int TAMANHO = 5;
        int[] numeros = new int[TAMANHO];
        
        preencherArray(numeros);
        exibirArray(numeros);
    }
}`,
    testCases: [
      { values: { numeros: [10,20,30,40,50] }, result: "Array: 10, 20, 30, 40, 50", stepByStep: "Método preenche cada posição; método exibe o array" }
    ],
    explanation: "Métodos podem receber arrays como parâmetros. Em Java, arrays são objetos e passados por referência, então as alterações são refletidas no programa principal. Criamos dois métodos: um para preencher e outro para exibir."
  },
  {
    id: 10,
    nivel: 4,
    title: "Método: Tabuada",
    statement: "Crie um método em Java chamado mostrarTabuada que receba um número inteiro e exiba a tabuada desse número (de 1 a 10).",
    input: "5",
    output: "5 x 1 = 5\n5 x 2 = 10\n...\n5 x 10 = 50",
    code: `import java.util.Scanner;

public class Main {
    static void mostrarTabuada(int num) {
        System.out.println("Tabuada do " + num + ":");
        for (int i = 1; i <= 10; i++) {
            System.out.println(num + " x " + i + " = " + (num * i));
        }
    }
    
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        System.out.print("Digite um número para ver sua tabuada: ");
        int numero = scanner.nextInt();
        mostrarTabuada(numero);
        scanner.close();
    }
}`,
    testCases: [
      { values: { num: 5 }, result: "Tabuada do 5: 5x1=5, 5x2=10, ..., 5x10=50", stepByStep: "Laço de 1 a 10 calculando e exibindo o produto" },
      { values: { num: 3 }, result: "Tabuada do 3: 3x1=3, 3x2=6, ..., 3x10=30", stepByStep: "Laço de 1 a 10 calculando e exibindo o produto" }
    ],
    explanation: "O método recebe um número e exibe sua tabuada de 1 a 10 usando um laço 'for'. Não retorna valor (void), apenas executa a exibição."
  }
];

// ========== RENDERIZAÇÃO DOS CONCEITOS ==========
function renderConceitosFuncoes() {
  const langText = getLanguageDisplayName();
  
  return `
    <div class="content-card">
      <h2 class="card-title">📦 Métodos em Java</h2>
      <p>Imagine que você precise escrever um algoritmo para preencher uma matriz. Isso não é difícil. Mas e se fossem dez matrizes? Escrever o mesmo código várias vezes deixaria o programa cansativo e repetitivo. Para evitar isso, podemos escrever o método apenas uma vez e reutilizá-lo sempre que necessário.</p>
      <p>Um <strong>método</strong> é um bloco de código que resolve um problema específico, fazendo parte de um problema maior.</p>
      
      <div class="info-callout">
        <span class="info-icon-callout">✨</span>
        <div>
          <strong>Vantagens de usar métodos:</strong>
          <br>• Evitam código repetido (DRY - Don't Repeat Yourself)
          <br>• Permitem reutilizar o mesmo código em outros programas
          <br>• Dividem problemas grandes em partes menores e mais fáceis de entender
          <br>• Deixam o programa mais organizado e legível
          <br>• Facilitam a manutenção e testes
        </div>
      </div>
    </div>
    
    <div class="content-card">
      <h2 class="card-title">🔧 Estrutura de um Método em Java</h2>
      <div class="info-grid">
        <div class="info-grid-item">
          <strong>📌 Modificador</strong><br>
          Define a acessibilidade (public, private, static)
        </div>
        <div class="info-grid-item">
          <strong>📦 Tipo de retorno</strong><br>
          Tipo do valor que o método retorna (void se não retornar)
        </div>
        <div class="info-grid-item">
          <strong>🔄 Nome</strong><br>
          Identificador que descreve o que o método faz
        </div>
        <div class="info-grid-item">
          <strong>📝 Parâmetros</strong><br>
          Valores que o método recebe para processar
        </div>
        <div class="info-grid-item">
          <strong>📦 Corpo</strong><br>
          Bloco de código que executa a tarefa
        </div>
        <div class="info-grid-item">
          <strong>🔁 Retorno</strong><br>
          Valor que o método devolve (usando return)
        </div>
      </div>
    </div>
    
    <div class="content-card">
      <h2 class="card-title">📝 Declaração de Método em ${langText}</h2>
      <div class="code-example">
        <div class="code-example-header">
          <span class="code-icon">📝</span>
          <span>Sintaxe de um método</span>
        </div>
        <pre><code>static tipoRetorno nomeMetodo(tipo param1, tipo param2) {
    // corpo do método
    // ...
    return valor; // se tipoRetorno não for void
}</code></pre>
      </div>
      
      <div class="code-example">
        <div class="code-example-header">
          <span class="code-icon">📝</span>
          <span>Exemplo: Método que verifica número par</span>
        </div>
        <pre><code>static boolean verificarPar(int num) {
    return num % 2 == 0;
}</code></pre>
      </div>
    </div>
    
    <div class="content-card">
      <h2 class="card-title">🔄 Métodos com e sem Retorno</h2>
      <p>Em Java, métodos podem retornar um valor ou não. Métodos que não retornam valor usam <code>void</code>.</p>
      
      <div class="code-example">
        <div class="code-example-header">
          <span class="code-icon">📝</span>
          <span>Método sem retorno (procedimento)</span>
        </div>
        <pre><code>static void mostrarMensagem(String nome) {
    System.out.println("Olá, " + nome + "!");
    // não usa return
}</code></pre>
      </div>
      
      <div class="code-example">
        <div class="code-example-header">
          <span class="code-icon">📝</span>
          <span>Método com retorno</span>
        </div>
        <pre><code>static int somar(int a, int b) {
    return a + b; // retorna o resultado
}</code></pre>
      </div>
    </div>
    
    <div class="content-card">
      <h2 class="card-title">📋 Modificadores e Convenções em Java</h2>
      <div class="operators-table">
        <div class="operator-row header">
          <div>Modificador</div>
          <div>Descrição</div>
          <div>Exemplo</div>
        </div>
        <div class="operator-row">
          <div><strong>static</strong></div>
          <div>Pertence à classe, não a uma instância</div>
          <div><code>public static void main(String[] args)</code></div>
        </div>
        <div class="operator-row">
          <div><strong>public</strong></div>
          <div>Acessível de qualquer lugar</div>
          <div><code>public int soma(int a, int b)</code></div>
        </div>
        <div class="operator-row">
          <div><strong>private</strong></div>
          <div>Acessível apenas dentro da classe</div>
          <div><code>private void calcular()</code></div>
        </div>
        <div class="operator-row">
          <div><strong>void</strong></div>
          <div>Não retorna valor</div>
          <div><code>static void exibir()</code></div>
        </div>
      </div>
      
      <div class="info-callout" style="margin-top: 1rem;">
        <span class="info-icon-callout">📌</span>
        <div>
          <strong>Convenção de nomenclatura:</strong>
          <br>• Nomes de métodos em Java usam <strong>camelCase</strong> (primeira letra minúscula)
          <br>• Exemplo: <code>calcularMedia</code>, <code>verificarPar</code>, <code>mostrarTabuada</code>
          <br>• Parâmetros também em camelCase
        </div>
      </div>
    </div>
    
    <div class="content-card">
      <h2 class="card-title">🎯 Exemplo Prático Completo</h2>
      <div class="code-example">
        <div class="code-example-header">
          <span class="code-icon">📝</span>
          <span>Método para fazer perguntas</span>
        </div>
        <pre><code>import java.util.Scanner;

public class Main {
    static boolean perguntar(String texto) {
        Scanner scanner = new Scanner(System.in);
        System.out.print(texto + " (S/N): ");
        String resposta = scanner.nextLine();
        return resposta.toUpperCase().equals("S");
    }
    
    public static void main(String[] args) {
        if (perguntar("Acabou a aula?")) {
            System.out.println("Vamos embora!");
        } else {
            System.out.println("Trabalhemmmm!");
        }
    }
}</code></pre>
      </div>
      
      <div class="info-callout" style="margin-top: 1rem;">
        <span class="info-icon-callout">💡</span>
        <div>
          <strong>Dica do Professor:</strong> 
          <br>• Use <strong>camelCase</strong> para nomes de métodos
          <br>• Use <strong>void</strong> quando o método não precisa retornar valor
          <br>• Use <strong>static</strong> para métodos chamados diretamente no main
          <br>• Nomes de métodos devem ser verbos (ex: calcularMedia, verificarPar)
          <br>• Divida problemas grandes em métodos menores - isso facilita a manutenção!
          <br>• Cada método deve ter uma única responsabilidade (princípio SRP)
        </div>
      </div>
    </div>
  `;
}

// ========== RENDERIZAÇÃO DOS EXERCÍCIOS ==========
function renderExerciciosFuncoes() {
  const currentEx = functionsExercises.find(e => e.id === window.currentFunctionsExercise) || functionsExercises[0];
  
  const niveis = {
    1: { nome: "⭐ Métodos Básicos", cor: "#10b981" },
    2: { nome: "⭐⭐ Métodos com Retorno", cor: "#f59e0b" },
    3: { nome: "⭐⭐⭐ Métodos com Cálculos", cor: "#3b82f6" },
    4: { nome: "⭐⭐⭐⭐ Métodos com Arrays", cor: "#8b5cf6" }
  };
  
  return `
    <div class="exercises-filter">
      <div class="filter-header">
        <span>📋 Exercícios de Métodos em Java</span>
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
      <h1 class="page-title">⚙️ Métodos em Java</h1>
      <p class="page-subtitle">Aprenda a organizar seu código com métodos em ${getLanguageDisplayName()}</p>
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