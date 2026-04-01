function renderIntroPage() {
  return `
    <div class="page-header">
      <h1 class="page-title"><span>🐹</span> Introdução à Lógica de Programação com Go</h1>
      <p class="page-subtitle">Fundamentos essenciais para começar sua jornada no mundo da programação com Go</p>
    </div>

    <!-- Seção: O que é Go -->
    <div class="content-card">
      <h2 class="card-title">🐹 O que é Go?</h2>
      <p>Go (também conhecida como Golang) é uma linguagem de programação criada pela Google, projetada para ser <strong>simples, eficiente e confiável</strong>. É uma linguagem compilada, estaticamente tipada, com sintaxe concisa e suporte nativo a concorrência.</p>
      <p>Go é amplamente utilizada para desenvolvimento de servidores, microsserviços, ferramentas de linha de comando e sistemas distribuídos. Sua simplicidade e desempenho a tornam uma escolha excelente tanto para iniciantes quanto para projetos de grande escala.</p>
      
      <div class="code-example">
        <div class="code-example-header">
          <span class="code-icon">📝</span>
          <span>Exemplo de programa em Go</span>
        </div>
        <pre><code>package main

import "fmt"

func main() {
    // Declaração de variáveis
    nome := "João"
    idade := 25
    altura := 1.75

    // Saída no console
    fmt.Println("Olá, meu nome é", nome)
    fmt.Printf("Tenho %d anos e %.2fm de altura\n", idade, altura)
}</code></pre>
      </div>
    </div>

    <!-- Seção: Estrutura de um programa Go -->
    <div class="content-card">
      <h2 class="card-title">🏗️ Estrutura de um Programa Go</h2>
      <p>Um programa Go básico possui a seguinte estrutura:</p>
      <ul style="margin-left: 1.5rem; color: var(--text-secondary);">
        <li><strong>package main</strong> – declara o pacote principal (executável).</li>
        <li><strong>import "fmt"</strong> – importa o pacote para formatação e entrada/saída.</li>
        <li><strong>func main()</strong> – função principal, ponto de entrada do programa.</li>
        <li><strong>fmt.Println()</strong> – imprime texto no console.</li>
      </ul>
      <div class="code-example">
        <div class="code-example-header">
          <span class="code-icon">📝</span>
          <span>Estrutura básica</span>
        </div>
        <pre><code>package main

import "fmt"

func main() {
    // Código executado
}</code></pre>
      </div>
    </div>

    <!-- Seção: Variáveis em Go -->
    <div class="content-card">
      <h2 class="card-title">📦 Variáveis em Go</h2>
      <p>Em Go, as variáveis podem ser declaradas de várias formas. A linguagem é <strong>estaticamente tipada</strong>, mas também oferece inferência de tipos com <code>:=</code>.</p>
      <div class="info-callout">
        <span class="info-icon-callout">💡</span>
        <div>
          <strong>Convenções de nomenclatura:</strong>
          <br>• Nomes de variáveis em <strong>camelCase</strong> (primeira letra minúscula)
          <br>• Constantes em <strong>PascalCase</strong> (primeira letra maiúscula) ou <strong>UPPER_SNAKE_CASE</strong>
          <br>• Nomes públicos (exportados) começam com letra maiúscula
        </div>
      </div>
      
      <div class="code-example">
        <div class="code-example-header">
          <span class="code-icon">📝</span>
          <span>Declaração de variáveis em Go</span>
        </div>
        <pre><code>// Declaração explícita
var idade int = 25
var altura float64 = 1.75
var nome string = "Maria"

// Inferência de tipo (forma curta)
nome := "João"
idade := 30

// Declaração múltipla
var x, y int = 10, 20

// Constantes
const PI = 3.14159
const Linguagem = "Go"</code></pre>
      </div>
    </div>

    <!-- Seção: Tipos de Dados -->
    <div class="content-card">
      <h2 class="card-title">📊 Tipos de Dados em Go</h2>
      <p>Go possui tipos básicos bem definidos:</p>
      <div class="types-table">
        <div class="type-row">
          <div class="type-name">int</div>
          <div class="type-desc">Números inteiros (depende da arquitetura)</div>
          <div class="type-example"><code>var numero int = 42</code></div>
        </div>
        <div class="type-row">
          <div class="type-name">float64</div>
          <div class="type-desc">Números decimais de dupla precisão</div>
          <div class="type-example"><code>var preco float64 = 19.99</code></div>
        </div>
        <div class="type-row">
          <div class="type-name">string</div>
          <div class="type-desc">Cadeia de caracteres</div>
          <div class="type-example"><code>var nome string = "Go"</code></div>
        </div>
        <div class="type-row">
          <div class="type-name">bool</div>
          <div class="type-desc">Verdadeiro ou falso</div>
          <div class="type-example"><code>var ativo bool = true</code></div>
        </div>
        <div class="type-row">
          <div class="type-name">byte</div>
          <div class="type-desc">Alias para uint8 (um caractere ASCII)</div>
          <div class="type-example"><code>var letra byte = 'A'</code></div>
        </div>
      </div>
    </div>

    <!-- Seção: Entrada e Saída -->
    <div class="content-card">
      <h2 class="card-title">📥📤 Entrada e Saída em Go</h2>
      <div class="io-section">
        <div class="io-card">
          <h3>📤 Saída - fmt</h3>
          <div class="code-mini">
            <pre><code>// Imprime com quebra de linha
fmt.Println("Olá mundo!")

// Imprime sem quebra de linha
fmt.Print("Olá ")

// Imprime com formatação
fmt.Printf("Valor: %.2f\n", 10.5)</code></pre>
          </div>
        </div>
        
        <div class="io-card">
          <h3>📥 Entrada - fmt.Scan</h3>
          <div class="code-mini">
            <pre><code>package main

import "fmt"

func main() {
    var idade int
    fmt.Print("Digite sua idade: ")
    fmt.Scan(&idade)

    var nome string
    fmt.Print("Digite seu nome: ")
    fmt.Scan(&nome)

    fmt.Printf("Olá, %s! Você tem %d anos.\n", nome, idade)
}</code></pre>
          </div>
        </div>
      </div>
    </div>

    <!-- Seção: Exemplo Completo -->
    <div class="content-card">
      <h2 class="card-title">🎯 Exemplo Completo</h2>
      <div class="code-example">
        <div class="code-example-header">
          <span class="code-icon">📝</span>
          <span>Programa completo em Go</span>
        </div>
        <pre><code>package main

import "fmt"

func main() {
    // Declaração das variáveis
    var nome string
    var idade int
    var altura float64

    // Entrada de dados
    fmt.Print("Informe seu nome: ")
    fmt.Scan(&nome)

    fmt.Print("Informe sua idade: ")
    fmt.Scan(&idade)

    fmt.Print("Informe sua altura: ")
    fmt.Scan(&altura)

    // Saída de dados
    fmt.Println("=== DADOS DO USUÁRIO ===")
    fmt.Printf("Nome: %s\n", nome)
    fmt.Printf("Idade: %d anos\n", idade)
    fmt.Printf("Altura: %.2fm\n", altura)
}</code></pre>
      </div>
    </div>

    <!-- Call to action -->
    <div class="callout" style="margin-top: 1rem; text-align: center;">
      <p>🚀 <strong>Vamos praticar!</strong> Nos próximos módulos você encontrará exercícios para fixar todos esses conceitos em Go.</p>
      <button class="btn-demo" id="goToHomeBtn">🏠 Voltar para Home</button>
    </div>
  `;
}