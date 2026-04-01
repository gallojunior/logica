function renderIntroPage() {
  return `
    <div class="page-header">
      <h1 class="page-title"><span>💎</span> Introdução à Lógica de Programação com Ruby</h1>
      <p class="page-subtitle">Fundamentos essenciais para começar sua jornada no mundo da programação com Ruby</p>
    </div>

    <!-- Seção: O que é Ruby -->
    <div class="content-card">
      <h2 class="card-title">💎 O que é Ruby?</h2>
      <p>Ruby é uma linguagem de programação dinâmica, de código aberto, com foco na simplicidade e produtividade. Criada por Yukihiro "Matz" Matsumoto, Ruby combina a sintaxe elegante e natural, inspirada em linguagens como Perl, Smalltalk e Lisp.</p>
      <p>É amplamente utilizada em desenvolvimento web (com o framework Ruby on Rails), automação, ferramentas de linha de comando e muito mais. Seu lema é "programmer happiness" – felicidade do programador.</p>
      
      <div class="code-example">
        <div class="code-example-header">
          <span class="code-icon">📝</span>
          <span>Exemplo de programa em Ruby</span>
        </div>
        <pre><code># Declaração de variáveis
nome = "João"
idade = 25
altura = 1.75

# Saída no console
puts "Olá, meu nome é #{nome}"
puts "Tenho #{idade} anos e #{altura}m de altura"</code></pre>
      </div>
    </div>

    <!-- Seção: Estrutura de um programa Ruby -->
    <div class="content-card">
      <h2 class="card-title">🏗️ Estrutura de um Programa Ruby</h2>
      <p>Ruby não exige uma estrutura rígida. Um programa pode ser apenas um arquivo com comandos sequenciais. Não há necessidade de uma função \`main\`.</p>
      <div class="code-example">
        <div class="code-example-header">
          <span class="code-icon">📝</span>
          <span>Estrutura básica</span>
        </div>
        <pre><code># Comentários começam com '#'
# O código é executado de cima para baixo
puts "Olá, mundo!"</code></pre>
      </div>
    </div>

    <!-- Seção: Variáveis em Ruby -->
    <div class="content-card">
      <h2 class="card-title">📦 Variáveis em Ruby</h2>
      <p>Em Ruby, as variáveis não têm tipo declarado; o tipo é inferido dinamicamente. Não é necessário usar \`let\` ou \`var\`; basta atribuir um valor.</p>
      <div class="info-callout">
        <span class="info-icon-callout">💡</span>
        <div>
          <strong>Convenções de nomenclatura:</strong>
          <br>• Variáveis locais: <strong>snake_case</strong> (ex.: <code>nome_completo</code>)
          <br>• Constantes: <strong>PascalCase</strong> ou <strong>UPPER_SNAKE_CASE</strong> (ex.: <code>PI = 3.14</code>)
          <br>• Nomes com \`@\` são variáveis de instância, \`@@\` são de classe, \`$\` são globais.
        </div>
      </div>
      
      <div class="code-example">
        <div class="code-example-header">
          <span class="code-icon">📝</span>
          <span>Declaração de variáveis em Ruby</span>
        </div>
        <pre><code># Inferência de tipo
idade = 25
altura = 1.75
nome = "Maria"
aprovado = true

# Constantes
PI = 3.14159
LINGUAGEM = "Ruby"</code></pre>
      </div>
    </div>

    <!-- Seção: Tipos de Dados -->
    <div class="content-card">
      <h2 class="card-title">📊 Tipos de Dados em Ruby</h2>
      <p>Ruby é uma linguagem orientada a objetos, então tudo é um objeto. Alguns tipos básicos:</p>
      <div class="types-table">
        <div class="type-row">
          <div class="type-name">Integer</div>
          <div class="type-desc">Números inteiros</div>
          <div class="type-example"><code>idade = 42</code></div>
        </div>
        <div class="type-row">
          <div class="type-name">Float</div>
          <div class="type-desc">Números decimais</div>
          <div class="type-example"><code>preco = 19.99</code></div>
        </div>
        <div class="type-row">
          <div class="type-name">String</div>
          <div class="type-desc">Cadeia de caracteres</div>
          <div class="type-example"><code>nome = "Ruby"</code></div>
        </div>
        <div class="type-row">
          <div class="type-name">Boolean</div>
          <div class="type-desc">Verdadeiro ou falso (true/false)</div>
          <div class="type-example"><code>ativo = true</code></div>
        </div>
        <div class="type-row">
          <div class="type-name">Symbol</div>
          <div class="type-desc">Identificador imutável</div>
          <div class="type-example"><code>:status</code></div>
        </div>
      </div>
    </div>

    <!-- Seção: Entrada e Saída -->
    <div class="content-card">
      <h2 class="card-title">📥📤 Entrada e Saída em Ruby</h2>
      <div class="io-section">
        <div class="io-card">
          <h3>📤 Saída - puts / print</h3>
          <div class="code-mini">
            <pre><code># Imprime com quebra de linha
puts "Olá mundo!"

# Imprime sem quebra de linha
print "Olá "

# Interpolação de string
nome = "João"
puts "Olá, #{nome}!"</code></pre>
          </div>
        </div>
        
        <div class="io-card">
          <h3>📥 Entrada - gets</h3>
          <div class="code-mini">
            <pre><code># Lê uma linha do teclado (com quebra de linha)
print "Digite sua idade: "
idade = gets.chomp.to_i

print "Digite seu nome: "
nome = gets.chomp

puts "Olá, #{nome}! Você tem #{idade} anos."</code></pre>
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
          <span>Programa completo em Ruby</span>
        </div>
        <pre><code># Programa de cadastro simples
puts "=== CADASTRO DE USUÁRIO ==="

print "Informe seu nome: "
nome = gets.chomp

print "Informe sua idade: "
idade = gets.chomp.to_i

print "Informe sua altura (em metros): "
altura = gets.chomp.to_f

# Limpa a tela (funciona em sistemas Unix)
system("clear") || system("cls")

puts "=== DADOS DO USUÁRIO ==="
puts "Nome: #{nome}"
puts "Idade: #{idade} anos"
puts "Altura: #{altura}m"</code></pre>
      </div>
    </div>

    <!-- Call to action -->
    <div class="callout" style="margin-top: 1rem; text-align: center;">
      <p>🚀 <strong>Vamos praticar!</strong> Nos próximos módulos você encontrará exercícios para fixar todos esses conceitos em Ruby.</p>
      <button class="btn-demo" id="goToHomeBtn">🏠 Voltar para Home</button>
    </div>
  `;
}