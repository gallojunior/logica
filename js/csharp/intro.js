// Página de Introdução em C#
function renderIntroPage() {
  return `
    <div class="page-header">
      <h1 class="page-title"><span>📖</span> Introdução à Lógica de Programação com C#</h1>
      <p class="page-subtitle">Fundamentos essenciais para começar sua jornada no mundo da programação com C#</p>
    </div>

    <div class="content-card">
      <h2 class="card-title">💻 Programas de Computador</h2>
      <p>Os programas de computadores nada mais são do que <strong>algoritmos escritos numa linguagem de computador</strong> (C#, Java, Python, JavaScript, entre outras) e que são interpretados e executados por uma máquina.</p>
    </div>

    <div class="content-card">
      <h2 class="card-title">🔷 C# - A Linguagem da Microsoft</h2>
      <p>C# (lê-se "C Sharp") é uma linguagem de programação moderna, orientada a objetos e de tipagem forte, desenvolvida pela Microsoft. É amplamente utilizada para desenvolvimento de aplicações desktop, web, mobile e jogos com Unity.</p>
      
      <div class="code-example">
        <div class="code-example-header">
          <span class="code-icon">📝</span>
          <span>Exemplo de programa em C#</span>
        </div>
        <pre><code>using System;

class Program {
    static void Main() {
        // Declaração de variáveis
        string nome = "João";
        int idade = 25;
        double altura = 1.75;
        
        // Saída no console
        Console.WriteLine("Olá, meu nome é " + nome);
        Console.WriteLine($"Tenho {idade} anos e {altura}m de altura");
    }
}</code></pre>
      </div>
    </div>

    <div class="content-card">
      <h2 class="card-title">📦 Variáveis em C#</h2>
      <div class="info-callout">
        <span class="info-icon-callout">💡</span>
        <div><strong>Em C# temos diferentes formas de declarar variáveis:</strong><br>
        • <code>int</code> - números inteiros<br>
        • <code>double</code> - números decimais<br>
        • <code>string</code> - texto<br>
        • <code>bool</code> - verdadeiro/falso<br>
        • <code>var</code> - inferência de tipo (C# 3.0+)</div>
      </div>
      
      <div class="code-example">
        <div class="code-example-header">
          <span class="code-icon">📝</span>
          <span>Declaração de variáveis em C#</span>
        </div>
        <pre><code>string nome = "Maria";
const double PI = 3.14159;
int idade = 25;
double altura = 1.75;
bool aprovado = true;

// Inferência de tipo
var mensagem = "Olá mundo!"; // string
var numero = 42; // int</code></pre>
      </div>
    </div>

    <div class="content-card">
      <h2 class="card-title">📊 Tipos de Dados em C#</h2>
      <div class="types-table">
        <div class="type-row">
          <div class="type-name">string</div>
          <div class="type-desc">Armazena texto (cadeia de caracteres)</div>
          <div class="type-example"><code>string nome = "Gallo";</code></div>
        </div>
        <div class="type-row">
          <div class="type-name">int</div>
          <div class="type-desc">Armazena números inteiros (32 bits)</div>
          <div class="type-example"><code>int numero = 42;</code></div>
        </div>
        <div class="type-row">
          <div class="type-name">double</div>
          <div class="type-desc">Armazena números decimais (64 bits)</div>
          <div class="type-example"><code>double preco = 1.99;</code></div>
        </div>
        <div class="type-row">
          <div class="type-name">bool</div>
          <div class="type-desc">Armazena verdadeiro ou falso</div>
          <div class="type-example"><code>bool aprovado = true;</code></div>
        </div>
        <div class="type-row">
          <div class="type-name">char</div>
          <div class="type-desc">Armazena um único caractere</div>
          <div class="type-example"><code>char letra = 'A';</code></div>
        </div>
      </div>
    </div>

    <div class="content-card">
      <h2 class="card-title">📥📤 Entrada e Saída em C#</h2>
      <div class="io-section">
        <div class="io-card">
          <h3>📤 Saída - Console.WriteLine</h3>
          <div class="code-mini">
            <pre><code>// Escreve um texto com quebra de linha
Console.WriteLine("Oi mundo!");

// Escreve o valor de uma variável
string mensagem = "Computação é coisa linda!!!!";
Console.WriteLine(mensagem);</code></pre>
          </div>
        </div>
        
        <div class="io-card">
          <h3>📥 Entrada - Console.ReadLine</h3>
          <div class="code-mini">
            <pre><code>// Lê um valor do teclado
Console.Write("Digite sua idade: ");
int idade = int.Parse(Console.ReadLine());</code></pre>
          </div>
        </div>
      </div>
    </div>

    <div class="callout" style="margin-top: 1rem; text-align: center;">
      <p>🚀 <strong>Vamos praticar!</strong> Nos próximos módulos você encontrará exercícios para fixar todos esses conceitos em C#.</p>
      <button class="btn-demo" id="goToHomeBtn">🏠 Voltar para Home</button>
    </div>
  `;
}