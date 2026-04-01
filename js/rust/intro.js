function renderIntroPage() {
  return `
    <div class="page-header">
      <h1 class="page-title"><span>🦀</span> Introdução à Lógica de Programação com Rust</h1>
      <p class="page-subtitle">Fundamentos essenciais para começar sua jornada no mundo da programação com Rust</p>
    </div>

    <div class="content-card">
      <h2 class="card-title">🦀 O que é Rust?</h2>
      <p>Rust é uma linguagem de programação de sistemas que prioriza <strong>segurança, desempenho e concorrência</strong>. Desenvolvida pela Mozilla e agora mantida pela comunidade, Rust oferece controle de baixo nível sem os riscos de segurança de memória comuns em C/C++.</p>
      <p>É amplamente utilizada em sistemas operacionais, embarcados, web assembly, ferramentas de linha de comando e muito mais.</p>
      
      <div class="code-example">
        <div class="code-example-header">
          <span class="code-icon">📝</span>
          <span>Exemplo de programa em Rust</span>
        </div>
        <pre><code>fn main() {
    // Declaração de variáveis (imutáveis por padrão)
    let nome = "João";
    let idade = 25;
    let altura = 1.75;

    // Saída no console
    println!("Olá, meu nome é {}", nome);
    println!("Tenho {} anos e {}m de altura", idade, altura);
}</code></pre>
      </div>
    </div>

    <div class="content-card">
      <h2 class="card-title">🏗️ Estrutura de um Programa Rust</h2>
      <p>Um programa Rust básico possui a seguinte estrutura:</p>
      <ul style="margin-left: 1.5rem; color: var(--text-secondary);">
        <li><strong>fn main()</strong> – função principal, ponto de entrada.</li>
        <li><strong>println!</strong> – macro para imprimir no console.</li>
        <li>Variáveis são imutáveis por padrão (<code>let x = 5</code>). Para mutáveis use <code>let mut x = 5</code>.</li>
      </ul>
      <div class="code-example">
        <div class="code-example-header">
          <span class="code-icon">📝</span>
          <span>Estrutura básica</span>
        </div>
        <pre><code>fn main() {
    // código
}</code></pre>
      </div>
    </div>

    <div class="content-card">
      <h2 class="card-title">📦 Variáveis em Rust</h2>
      <p>Em Rust, as variáveis são declaradas com <code>let</code>. Por padrão, são imutáveis. Use <code>mut</code> para torná-las mutáveis.</p>
      <div class="code-example">
        <div class="code-example-header">
          <span class="code-icon">📝</span>
          <span>Declaração de variáveis</span>
        </div>
        <pre><code>let nome = "Maria";        // imutável
let mut idade = 25;        // mutável
const PI: f64 = 3.14159;   // constante (tipo explícito)
idade = 26;</code></pre>
      </div>
    </div>

    <div class="content-card">
      <h2 class="card-title">📊 Tipos de Dados em Rust</h2>
      <div class="types-table">
        <div class="type-row">
          <div class="type-name">i32</div>
          <div class="type-desc">Inteiro de 32 bits (padrão)</div>
          <div class="type-example"><code>let num: i32 = 42;</code></div>
        </div>
        <div class="type-row">
          <div class="type-name">f64</div>
          <div class="type-desc">Ponto flutuante de 64 bits</div>
          <div class="type-example"><code>let preco = 19.99;</code></div>
        </div>
        <div class="type-row">
          <div class="type-name">String</div>
          <div class="type-desc">Texto dinâmico</div>
          <div class="type-example"><code>let nome = String::from("Rust");</code></div>
        </div>
        <div class="type-row">
          <div class="type-name">bool</div>
          <div class="type-desc">Verdadeiro ou falso</div>
          <div class="type-example"><code>let ativo = true;</code></div>
        </div>
        <div class="type-row">
          <div class="type-name">char</div>
          <div class="type-desc">Um caractere Unicode</div>
          <div class="type-example"><code>let letra = 'R';</code></div>
        </div>
      </div>
    </div>

    <div class="content-card">
      <h2 class="card-title">📥📤 Entrada e Saída em Rust</h2>
      <div class="io-section">
        <div class="io-card">
          <h3>📤 Saída - println!</h3>
          <div class="code-mini">
            <pre><code>// Imprime com quebra de linha
println!("Olá mundo!");

// Imprime sem quebra de linha
print!("Olá ");

// Imprime com formatação
println!("Valor: {:.2}", 10.5);</code></pre>
          </div>
        </div>
        
        <div class="io-card">
          <h3>📥 Entrada - stdin</h3>
          <div class="code-mini">
            <pre><code>use std::io;

fn main() {
    let mut nome = String::new();
    println!("Digite seu nome: ");
    io::stdin().read_line(&mut nome).expect("Falha ao ler");
    let nome = nome.trim(); // remove quebra de linha
    println!("Olá, {}!", nome);
}</code></pre>
          </div>
        </div>
      </div>
    </div>

    <div class="content-card">
      <h2 class="card-title">🎯 Exemplo Completo</h2>
      <div class="code-example">
        <div class="code-example-header">
          <span class="code-icon">📝</span>
          <span>Programa completo em Rust</span>
        </div>
        <pre><code>use std::io;

fn main() {
    // Declaração das variáveis
    let mut nome = String::new();
    let mut idade = String::new();
    let mut altura = String::new();

    // Entrada de dados
    println!("Informe seu nome: ");
    io::stdin().read_line(&mut nome).expect("Falha");
    let nome = nome.trim();

    println!("Informe sua idade: ");
    io::stdin().read_line(&mut idade).expect("Falha");
    let idade: i32 = idade.trim().parse().expect("Digite um número");

    println!("Informe sua altura: ");
    io::stdin().read_line(&mut altura).expect("Falha");
    let altura: f64 = altura.trim().parse().expect("Digite um número");

    // Saída de dados
    println!("=== DADOS DO USUÁRIO ===");
    println!("Nome: {}", nome);
    println!("Idade: {} anos", idade);
    println!("Altura: {:.2}m", altura);
}</code></pre>
      </div>
    </div>

    <div class="callout" style="margin-top: 1rem; text-align: center;">
      <p>🚀 <strong>Vamos praticar!</strong> Nos próximos módulos você encontrará exercícios para fixar todos esses conceitos em Rust.</p>
      <button class="btn-demo" id="goToHomeBtn">🏠 Voltar para Home</button>
    </div>
  `;
}