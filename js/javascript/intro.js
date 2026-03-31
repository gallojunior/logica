function renderIntroPage() {
  return `
    <div class="page-header">
      <h1 class="page-title"><span>📖</span> Introdução à Lógica de Programação com JavaScript</h1>
      <p class="page-subtitle">Fundamentos essenciais para começar sua jornada no mundo da programação</p>
    </div>

    <!-- Seção: Programas de Computador -->
    <div class="content-card">
      <h2 class="card-title">💻 Programas de Computador</h2>
      <p>Os programas de computadores nada mais são do que <strong>algoritmos escritos numa linguagem de computador</strong> (JavaScript, Python, Java, C++, entre outras) e que são interpretados e executados por uma máquina, no caso um computador.</p>
      <p>Dada esta interpretação rigorosa, um programa é por natureza muito específico e rígido em relação aos algoritmos da vida real, ou seja, deve ser programado de maneira com que não haja problemas quanto as instruções escritas, podendo ocasionar em erro grave, comprometendo assim a execução do programa.</p>
    </div>

    <!-- Seção: Linguagem de Programação -->
    <div class="content-card">
      <h2 class="card-title">🖥️ Linguagem de Programação</h2>
      <p>Uma linguagem de programação é um <strong>método padronizado para comunicar instruções para um computador</strong>. É um conjunto de regras sintáticas e semânticas usadas para definir um programa de computador.</p>
      <p>Permite que um programador especifique precisamente sobre quais dados um computador vai atuar, como estes dados serão armazenados ou transmitidos e quais ações devem ser tomadas sob várias circunstâncias.</p>
    </div>

    <!-- Seção: Algoritmos -->
    <div class="content-card">
      <h2 class="card-title">🧩 Algoritmos</h2>
      <p>Um algoritmo é formalmente uma <strong>sequência finita de passos que levam a execução de uma tarefa</strong>. Podemos pensar em algoritmo como uma receita, uma sequência de instruções para um fim específico. Para escrever um algoritmo precisamos descrever a sequência de instruções, de maneira simples e objetiva.</p>
      
      <div class="highlight-box">
        <h3>📌 Como você prepara um café?</h3>
        <ol>
          <li>Colocar água no bule</li>
          <li>Acender o fogo</li>
          <li>Esperar ferver</li>
          <li>Colocar pó de café no coador</li>
          <li>Despejar água no coador</li>
          <li>Servir o café</li>
        </ol>
      </div>

      <p>A importância do algoritmo está no fato de termos que especificar uma sequência de passos lógicos para que o computador possa executar uma tarefa qualquer, pois o mesmo por si só não tem vontade própria, faz apenas o que mandamos.</p>
      <p>Com uma ferramenta algorítmica, podemos conceber uma solução para um dado problema, independendo de uma linguagem específica e até mesmo do próprio computador.</p>
      
      <div class="info-grid">
        <div class="info-grid-item">
          <strong>✓ Partir de um ponto inicial</strong> e chegar a um ponto final
        </div>
        <div class="info-grid-item">
          <strong>✓ Não ser ambíguo</strong> (ter dupla interpretação)
        </div>
        <div class="info-grid-item">
          <strong>✓ Poder receber dados externos</strong> e ser capaz de retornar resultados
        </div>
        <div class="info-grid-item">
          <strong>✓ Ter suas etapas alcançáveis</strong> em algum momento do programa
        </div>
      </div>
    </div>

    <!-- Seção: Estrutura de um Algoritmo -->
    <div class="content-card">
      <h2 class="card-title">📋 Estrutura de um Algoritmo</h2>
      <div class="structure-grid">
        <div class="structure-item entrada">
          <span class="structure-icon">📥</span>
          <div>
            <h3>ENTRADA</h3>
            <p>São os dados de entrada do algoritmo</p>
          </div>
        </div>
        <div class="structure-item processamento">
          <span class="structure-icon">⚙️</span>
          <div>
            <h3>PROCESSAMENTO</h3>
            <p>São os procedimentos utilizados para chegar ao resultado final</p>
          </div>
        </div>
        <div class="structure-item saida">
          <span class="structure-icon">📤</span>
          <div>
            <h3>SAÍDA</h3>
            <p>São os dados já processados</p>
          </div>
        </div>
      </div>
    </div>

    <!-- Seção: Linguagem JavaScript -->
    <div class="content-card">
      <h2 class="card-title">🇧🇷 Linguagem JavaScript</h2>
      <p>JavaScript é uma linguagem de programação <strong>interpretada, de alto nível e multiparadigma</strong>. É uma das linguagens mais populares do mundo, sendo a base para desenvolvimento web moderno.</p>
      
      <div class="code-example">
        <div class="code-example-header">
          <span class="code-icon">📝</span>
          <span>Exemplo de programa em JavaScript</span>
        </div>
        <pre><code>// Declaração de variáveis
let nome = "João";
const idade = 25;
let altura = 1.75;

// Saída no console
console.log("Olá, meu nome é " + nome);
console.log(\`Tenho \${idade} anos e \${altura}m de altura\`);</code></pre>
      </div>
    </div>

    <!-- Seção: Variáveis -->
    <div class="content-card">
      <h2 class="card-title">📦 Variáveis</h2>
      <p>Variável é um recurso utilizado nos programas computacionais para <strong>armazenar e recuperar dados</strong>, ou seja, é simplesmente um espaço na memória que reservamos atribuindo um nome, para que possamos organizar os dados à serem manipulados pelo programa.</p>
      
      <div class="info-callout">
        <span class="info-icon-callout">💡</span>
        <div>
          <strong>Importante:</strong> O nome de cada variável deve ser explicativo, facilitando assim a compreensão do conteúdo que está armazenado nela.
        </div>
      </div>

      <div class="code-example">
        <div class="code-example-header">
          <span class="code-icon">📝</span>
          <span>Sintaxe de declaração de variáveis em JavaScript</span>
        </div>
        <pre><code>let nome_variavel
let variavel_inicializada = 42
let nome_variavel2
let nome_variavel3
let var1, var2, var3, var4</code></pre>
      </div>
    </div>

    <!-- Seção: Constantes -->
    <div class="content-card">
      <h2 class="card-title">🔒 Constantes</h2>
      <p>Uma constante é responsável por <strong>armazenar um valor fixo</strong> em um espaço da memória, sendo que este valor não se altera durante a execução do programa.</p>
      <p>Para declarar uma constante basta adicionar a palavra reservada <code>const</code> seguida do nome da constante e atribuir um valor a ela.</p>
      
      <div class="code-example">
        <div class="code-example-header">
          <span class="code-icon">📝</span>
          <span>Sintaxe de constantes em JavaScript</span>
        </div>
        <pre><code>const NOME_DA_CONSTANTE = 3
const NOME_DA_CONSTANTE2 = 45</code></pre>
      </div>
    </div>

    <!-- Seção: Tipos de Dados -->
    <div class="content-card">
      <h2 class="card-title">📊 Tipos de Dados em JavaScript</h2>
      <p>Ao armazenar variáveis na memória do computador, precisamos saber que tipo elas são. JavaScript é dinamicamente tipado, mas possui vários tipos de dados.</p>
      
      <div class="types-table">
        <div class="type-row">
          <div class="type-name">string</div>
          <div class="type-desc">Armazena um texto ou uma quantidade grande de caracteres</div>
          <div class="type-example"><code>let nome = "Gallo"</code></div>
        </div>
        <div class="type-row">
          <div class="type-name">number</div>
          <div class="type-desc">Armazena números inteiros ou decimais</div>
          <div class="type-example"><code>let numero = 51; let preco = 1.99</code></div>
        </div>
        <div class="type-row">
          <div class="type-name">boolean</div>
          <div class="type-desc">Armazena verdadeiro ou falso</div>
          <div class="type-example"><code>let fimDaAula = false</code></div>
        </div>
        <div class="type-row">
          <div class="type-name">undefined</div>
          <div class="type-desc">Variável declarada sem valor atribuído</div>
          <div class="type-example"><code>let x; // x é undefined</code></div>
        </div>
        <div class="type-row">
          <div class="type-name">null</div>
          <div class="type-desc">Valor nulo intencional</div>
          <div class="type-example"><code>let objeto = null</code></div>
        </div>
        <div class="type-row">
          <div class="type-name">object</div>
          <div class="type-desc">Estruturas de dados complexas</div>
          <div class="type-example"><code>let pessoa = { nome: "João", idade: 30 }</code></div>
        </div>
      </div>
    </div>

    <!-- Seção: Entrada e Saída -->
    <div class="content-card">
      <h2 class="card-title">📥📤 Entrada e Saída em JavaScript</h2>
      <p>Entrada/saída é um termo utilizado na computação indicando <strong>entrada (inserção) de dados</strong> por meio de algum programa, e sua <strong>saída (obtenção) ou retorno</strong> como resultado de alguma operação.</p>
      
      <div class="io-section">
        <div class="io-card">
          <h3>📤 Saída - console.log</h3>
          <p>Em determinadas situações precisamos mostrar ao usuário alguma informação. No JavaScript, a instrução de saída de dados para o console é chamada de <code>console.log</code>.</p>
          <div class="code-mini">
            <pre><code>// Escreve um texto qualquer
console.log("Oi mundo! ")

// Escreve o valor de uma variável
let mensagem = "Computação é coisa linda!!!!"
console.log(mensagem)</code></pre>
          </div>
        </div>
        
        <div class="io-card">
          <h3>📥 Entrada - prompt</h3>
          <p>Precisamos que o usuário digite um valor a ser armazenado. No JavaScript, a instrução de entrada de dados via teclado é chamada de <code>prompt</code>.</p>
          <div class="code-mini">
            <pre><code>// Lê um valor do teclado
let idade
idade = prompt("Digite sua idade: ")</code></pre>
          </div>
        </div>
      </div>
      
      <div class="info-callout">
        <span class="info-icon-callout">🧹</span>
        <div>
          <strong>Extra – limpa o CONSOLE:</strong> À medida que um algoritmo é executado, o console pode ficar poluído. Para limpar, use <code>console.clear()</code>.
        </div>
      </div>
    </div>

    <!-- Exemplo completo -->
    <div class="content-card">
      <h2 class="card-title">🎯 Exemplo Completo</h2>
      <div class="code-example">
        <div class="code-example-header">
          <span class="code-icon">📝</span>
          <span>Programa completo em JavaScript</span>
        </div>
        <pre><code>// Programa em JavaScript
function executar() {
  // Declaração de variáveis
  let nome
  let idade
  let altura
  
  // Entrada de dados
  nome = prompt("Informe seu nome: ")
  idade = parseInt(prompt("Informe sua idade: "))
  altura = parseFloat(prompt("Informe sua altura: "))
  
  // Saída de dados
  console.log("=== DADOS DO USUÁRIO ===")
  console.log("Nome: " + nome)
  console.log("Idade: " + idade + " anos")
  console.log("Altura: " + altura + "m")
}

// Chamar a função
executar()</code></pre>
      </div>
    </div>

    <!-- Call to action -->
    <div class="callout" style="margin-top: 1rem; text-align: center;">
      <p>🚀 <strong>Vamos praticar!</strong> Nos próximos módulos você encontrará exercícios para fixar todos esses conceitos em JavaScript.</p>
      <button class="btn-demo" id="goToHomeBtn">🏠 Voltar para Home</button>
    </div>
  `;
}