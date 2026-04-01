function renderIntroPage() {
  return `
    <div class="page-header">
      <h1 class="page-title"><span>🐘</span> Introdução à Lógica de Programação com PHP</h1>
      <p class="page-subtitle">Fundamentos essenciais para começar sua jornada no mundo da programação web</p>
    </div>

    <!-- Seção: O que é PHP -->
    <div class="content-card">
      <h2 class="card-title">🐘 O que é PHP?</h2>
      <p>PHP (Hypertext Preprocessor) é uma linguagem de script de código aberto, especialmente adequada para o desenvolvimento web. É uma linguagem <strong>interpretada, de tipagem dinâmica</strong> e extremamente popular, sendo utilizada em grandes plataformas como WordPress, Facebook e muitas outras.</p>
      <p>O PHP pode ser embutido diretamente no HTML e é executado no servidor, gerando conteúdo dinâmico para o navegador. Além disso, pode ser usado para criar scripts de linha de comando, facilitando a automação de tarefas.</p>
      
      <div class="code-example">
        <div class="code-example-header">
          <span class="code-icon">📝</span>
          <span>Exemplo de programa em PHP</span>
        </div>
        <pre><code>&lt;?php
// Declaração de variáveis
$nome = "João";
$idade = 25;
$altura = 1.75;

// Saída no console (linha de comando) ou navegador
echo "Olá, meu nome é $nome\n";
echo "Tenho $idade anos e $altura m de altura\n";
?&gt;</code></pre>
      </div>
    </div>

    <!-- Seção: Estrutura de um programa PHP -->
    <div class="content-card">
      <h2 class="card-title">🏗️ Estrutura de um Programa PHP</h2>
      <p>Um programa PHP normalmente começa com a tag <code>&lt;?php</code> e termina com <code>?&gt;</code>. O código entre essas tags é interpretado pelo servidor. Para executar scripts no terminal, também é possível usar apenas a tag de abertura e omitir o fechamento.</p>
      <ul style="margin-left: 1.5rem; color: var(--text-secondary);">
        <li><strong>&lt;?php</strong> – marca o início do código PHP</li>
        <li><strong>?&gt;</strong> – opcional, usado para sair do modo PHP (útil ao misturar com HTML)</li>
        <li><strong>echo</strong> ou <strong>print</strong> – exibe dados na saída</li>
      </ul>
      <div class="code-example">
        <div class="code-example-header">
          <span class="code-icon">📝</span>
          <span>Estrutura básica</span>
        </div>
        <pre><code>&lt;?php
// Código executado
echo "Olá mundo!";
?&gt;</code></pre>
      </div>
    </div>

    <!-- Seção: Variáveis em PHP -->
    <div class="content-card">
      <h2 class="card-title">📦 Variáveis em PHP</h2>
      <p>Em PHP, as variáveis são sempre precedidas pelo símbolo <code>$</code>. A linguagem é <strong>fracamente tipada</strong> e o tipo da variável é determinado automaticamente com base no valor atribuído.</p>
      <div class="info-callout">
        <span class="info-icon-callout">💡</span>
        <div>
          <strong>Convenções de nomenclatura:</strong>
          <br>• Nomes de variáveis em <strong>snake_case</strong> ou <strong>camelCase</strong> (ambos comuns)
          <br>• Case-sensitive: <code>$nome</code> é diferente de <code>$Nome</code>
          <br>• Começar com letra ou underline, nunca com número
        </div>
      </div>
      
      <div class="code-example">
        <div class="code-example-header">
          <span class="code-icon">📝</span>
          <span>Declaração de variáveis em PHP</span>
        </div>
        <pre><code>&lt;?php
$idade = 25;           // inteiro
$altura = 1.75;        // float
$nome = "Maria";       // string
$aprovado = true;      // booleano

// Constantes
define("PI", 3.14159);
const LINGUAGEM = "PHP";
?&gt;</code></pre>
      </div>
    </div>

    <!-- Seção: Tipos de Dados -->
    <div class="content-card">
      <h2 class="card-title">📊 Tipos de Dados em PHP</h2>
      <p>PHP suporta vários tipos de dados. Os mais comuns são:</p>
      <div class="types-table">
        <div class="type-row">
          <div class="type-name">int</div>
          <div class="type-desc">Números inteiros</div>
          <div class="type-example"><code>$numero = 42;</code></div>
        </div>
        <div class="type-row">
          <div class="type-name">float</div>
          <div class="type-desc">Números decimais</div>
          <div class="type-example"><code>$preco = 19.99;</code></div>
        </div>
        <div class="type-row">
          <div class="type-name">string</div>
          <div class="type-desc">Cadeia de caracteres</div>
          <div class="type-example"><code>$nome = "PHP";</code></div>
        </div>
        <div class="type-row">
          <div class="type-name">bool</div>
          <div class="type-desc">Verdadeiro ou falso</div>
          <div class="type-example"><code>$ativo = true;</code></div>
        </div>
        <div class="type-row">
          <div class="type-name">array</div>
          <div class="type-desc">Coleção de valores</div>
          <div class="type-example"><code>$frutas = ["maçã", "banana"];</code></div>
        </div>
      </div>
    </div>

    <!-- Seção: Entrada e Saída -->
    <div class="content-card">
      <h2 class="card-title">📥📤 Entrada e Saída em PHP</h2>
      <div class="io-section">
        <div class="io-card">
          <h3>📤 Saída - echo / print</h3>
          <div class="code-mini">
            <pre><code>// Imprime uma string
echo "Olá mundo!\n";

// Imprime com variáveis
$nome = "Aluno";
echo "Olá, $nome!";
print $nome;</code></pre>
          </div>
        </div>
        
        <div class="io-card">
          <h3>📥 Entrada - fgets(STDIN)</h3>
          <div class="code-mini">
            <pre><code>&lt;?php
echo "Digite seu nome: ";
$nome = trim(fgets(STDIN));
echo "Olá, $nome!";
?&gt;</code></pre>
          </div>
          <p><small>No ambiente web, a entrada é feita via formulários (<code>$_GET</code>, <code>$_POST</code>).</small></p>
        </div>
      </div>
    </div>

    <!-- Seção: Exemplo Completo -->
    <div class="content-card">
      <h2 class="card-title">🎯 Exemplo Completo</h2>
      <div class="code-example">
        <div class="code-example-header">
          <span class="code-icon">📝</span>
          <span>Programa completo em PHP (linha de comando)</span>
        </div>
        <pre><code>&lt;?php
// Declaração das variáveis
$nome = "";
$idade = 0;
$altura = 0.0;

// Entrada de dados
echo "Informe seu nome: ";
$nome = trim(fgets(STDIN));

echo "Informe sua idade: ";
$idade = (int) trim(fgets(STDIN));

echo "Informe sua altura: ";
$altura = (float) trim(fgets(STDIN));

// Saída de dados
echo "=== DADOS DO USUÁRIO ===\n";
echo "Nome: $nome\n";
echo "Idade: $idade anos\n";
echo "Altura: $altura m\n";
?&gt;</code></pre>
      </div>
    </div>

    <!-- Call to action -->
    <div class="callout" style="margin-top: 1rem; text-align: center;">
      <p>🚀 <strong>Vamos praticar!</strong> Nos próximos módulos você encontrará exercícios para fixar todos esses conceitos em PHP.</p>
      <button class="btn-demo" id="goToHomeBtn">🏠 Voltar para Home</button>
    </div>
  `;
}