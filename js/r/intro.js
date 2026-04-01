function renderIntroPage() {
  return `
    <div class="page-header">
      <h1 class="page-title"><span>📊</span> Introdução à Lógica de Programação com R</h1>
      <p class="page-subtitle">Fundamentos essenciais para começar sua jornada no mundo da análise de dados</p>
    </div>

    <div class="content-card">
      <h2 class="card-title">📊 O que é R?</h2>
      <p>R é uma linguagem de programação e ambiente computacional criado para análise estatística, visualização de dados e ciência de dados. É amplamente utilizada em universidades, empresas e pesquisa. R é open source e possui uma comunidade ativa.</p>
      <div class="code-example">
        <div class="code-example-header">
          <span class="code-icon">📝</span>
          <span>Exemplo de programa em R</span>
        </div>
        <pre><code># Declaração de variáveis
nome <- "João"
idade <- 25
altura <- 1.75

# Saída no console
cat("Olá, meu nome é", nome, "\n")
cat("Tenho", idade, "anos e", altura, "m de altura\n")</code></pre>
      </div>
    </div>

    <div class="content-card">
      <h2 class="card-title">🏗️ Estrutura de um Programa R</h2>
      <p>R pode ser usado de forma interativa no console ou através de scripts com extensão <code>.R</code>. A sintaxe é orientada a vetores e possui funções nativas para estatística.</p>
    </div>

    <div class="content-card">
      <h2 class="card-title">📦 Variáveis em R</h2>
      <div class="info-callout">
        <span class="info-icon-callout">💡</span>
        <div>O operador de atribuição em R é <code><-</code> (também pode ser <code>=</code>, mas o primeiro é preferido).</div>
      </div>
      <div class="code-example">
        <div class="code-example-header">
          <span class="code-icon">📝</span>
          <span>Declaração de variáveis</span>
        </div>
        <pre><code># Tipos básicos
idade <- 25          # numérico
altura <- 1.75       # numérico (double)
nome <- "Maria"      # character
aprovado <- TRUE     # lógico (TRUE/FALSE)

# Vetor
notas <- c(7.5, 8.0, 9.0)

# Constantes (não há palavra-chave, mas pode-se usar maiúsculas)
PI <- 3.14159</code></pre>
      </div>
    </div>

    <div class="content-card">
      <h2 class="card-title">📊 Tipos de Dados</h2>
      <div class="types-table">
        <div class="type-row">
          <div class="type-name">numeric</div>
          <div class="type-desc">Números inteiros ou decimais</div>
          <div class="type-example"><code>x <- 42</code></div>
        </div>
        <div class="type-row">
          <div class="type-name">character</div>
          <div class="type-desc">Cadeia de caracteres</div>
          <div class="type-example"><code>nome <- "R"</code></div>
        </div>
        <div class="type-row">
          <div class="type-name">logical</div>
          <div class="type-desc">TRUE ou FALSE</div>
          <div class="type-example"><code>ativo <- TRUE</code></div>
        </div>
        <div class="type-row">
          <div class="type-name">vector</div>
          <div class="type-desc">Coleção do mesmo tipo</div>
          <div class="type-example"><code>v <- c(1,2,3)</code></div>
        </div>
      </div>
    </div>

    <div class="content-card">
      <h2 class="card-title">📥📤 Entrada e Saída</h2>
      <div class="io-section">
        <div class="io-card">
          <h3>📤 Saída - cat / print</h3>
          <div class="code-mini">
            <pre><code>cat("Olá mundo!\n")
print("Olá mundo!")
print(42)</code></pre>
          </div>
        </div>
        <div class="io-card">
          <h3>📥 Entrada - readline</h3>
          <div class="code-mini">
            <pre><code>nome <- readline("Digite seu nome: ")
cat("Olá,", nome, "!\n")</code></pre>
          </div>
        </div>
      </div>
    </div>

    <div class="content-card">
      <h2 class="card-title">🎯 Exemplo Completo</h2>
      <div class="code-example">
        <div class="code-example-header">
          <span class="code-icon">📝</span>
          <span>Programa completo em R</span>
        </div>
        <pre><code># Entrada
nome <- readline("Informe seu nome: ")
idade <- as.integer(readline("Informe sua idade: "))
altura <- as.numeric(readline("Informe sua altura: "))

# Saída formatada
cat("=== DADOS DO USUÁRIO ===\n")
cat("Nome:", nome, "\n")
cat("Idade:", idade, "anos\n")
cat("Altura:", altura, "m\n")</code></pre>
      </div>
    </div>

    <div class="callout" style="margin-top: 1rem; text-align: center;">
      <p>🚀 <strong>Vamos praticar!</strong> Nos próximos módulos você encontrará exercícios para fixar todos esses conceitos em R.</p>
      <button class="btn-demo" id="goToHomeBtn">🏠 Voltar para Home</button>
    </div>
  `;
}