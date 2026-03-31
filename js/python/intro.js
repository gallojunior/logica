// Página de Introdução em Python
function renderIntroPage() {
  return `
    <div class="page-header">
      <h1 class="page-title"><span>📖</span> Introdução à Lógica de Programação com Python</h1>
      <p class="page-subtitle">Fundamentos essenciais para começar sua jornada no mundo da programação com Python</p>
    </div>

    <div class="content-card">
      <h2 class="card-title">💻 Programas de Computador</h2>
      <p>Os programas de computadores nada mais são do que <strong>algoritmos escritos numa linguagem de computador</strong> (Python, Java, C#, JavaScript, entre outras) e que são interpretados e executados por uma máquina.</p>
    </div>

    <div class="content-card">
      <h2 class="card-title">🐍 Python - A Linguagem Versátil</h2>
      <p>Python é uma linguagem de programação de alto nível, interpretada, de tipagem dinâmica e com sintaxe simples e legível. É amplamente utilizada em desenvolvimento web, ciência de dados, inteligência artificial, automação e muito mais.</p>
      
      <div class="code-example">
        <div class="code-example-header">
          <span class="code-icon">📝</span>
          <span>Exemplo de programa em Python</span>
        </div>
        <pre><code># Declaração de variáveis
nome = "João"
idade = 25
altura = 1.75

# Saída no console
print("Olá, meu nome é", nome)
print(f"Tenho {idade} anos e {altura}m de altura")

# Entrada de dados
resposta = input("Qual é seu nome? ")
print(f"Bem-vindo, {resposta}!")</code></pre>
      </div>
    </div>

    <div class="content-card">
      <h2 class="card-title">📦 Variáveis em Python</h2>
      <div class="info-callout">
        <span class="info-icon-callout">💡</span>
        <div><strong>Em Python as variáveis são dinamicamente tipadas:</strong><br>
        • Não é necessário declarar o tipo<br>
        • O tipo é inferido automaticamente<br>
        • Python usa snake_case para nomes de variáveis</div>
      </div>
      
      <div class="code-example">
        <div class="code-example-header">
          <span class="code-icon">📝</span>
          <span>Declaração de variáveis em Python</span>
        </div>
        <pre><code>nome = "Maria"           # string
PI = 3.14159             # float (constante por convenção)
idade = 25               # int
altura = 1.75            # float
aprovado = True          # bool (True/False com letra maiúscula)

# Python é dinamicamente tipado
valor = 42               # int
valor = "quarenta e dois"  # str
valor = True             # bool</code></pre>
      </div>
    </div>

    <div class="content-card">
      <h2 class="card-title">📊 Tipos de Dados em Python</h2>
      <div class="types-table">
        <div class="type-row">
          <div class="type-name">str</div>
          <div class="type-desc">Armazena texto (cadeia de caracteres)</div>
          <div class="type-example"><code>nome = "Gallo"</code></div>
        </div>
        <div class="type-row">
          <div class="type-name">int</div>
          <div class="type-desc">Armazena números inteiros</div>
          <div class="type-example"><code>idade = 25</code></div>
        </div>
        <div class="type-row">
          <div class="type-name">float</div>
          <div class="type-desc">Armazena números decimais</div>
          <div class="type-example"><code>altura = 1.75</code></div>
        </div>
        <div class="type-row">
          <div class="type-name">bool</div>
          <div class="type-desc">Armazena True ou False</div>
          <div class="type-example"><code>aprovado = True</code></div>
        </div>
        <div class="type-row">
          <div class="type-name">list</div>
          <div class="type-desc">Lista de valores (mutável)</div>
          <div class="type-example"><code>numeros = [1, 2, 3, 4]</code></div>
        </div>
        <div class="type-row">
          <div class="type-name">dict</div>
          <div class="type-desc">Dicionário (chave-valor)</div>
          <div class="type-example"><code>pessoa = {"nome": "João", "idade": 30}</code></div>
        </div>
      </div>
    </div>

    <div class="content-card">
      <h2 class="card-title">📥📤 Entrada e Saída em Python</h2>
      <div class="io-section">
        <div class="io-card">
          <h3>📤 Saída - print()</h3>
          <div class="code-mini">
            <pre><code># Escreve um texto
print("Oi mundo!")

# Escreve o valor de uma variável
mensagem = "Computação é coisa linda!!!!"
print(mensagem)

# Formatação com f-string
nome = "Maria"
print(f"Olá, {nome}!")</code></pre>
          </div>
        </div>
        
        <div class="io-card">
          <h3>📥 Entrada - input()</h3>
          <div class="code-mini">
            <pre><code># Lê um valor do teclado (sempre retorna string)
nome = input("Digite seu nome: ")

# Converte para número
idade = int(input("Digite sua idade: "))
altura = float(input("Digite sua altura: "))</code></pre>
          </div>
        </div>
      </div>
    </div>

    <div class="callout" style="margin-top: 1rem; text-align: center;">
      <p>🚀 <strong>Vamos praticar!</strong> Nos próximos módulos você encontrará exercícios para fixar todos esses conceitos em Python.</p>
      <button class="btn-demo" id="goToHomeBtn">🏠 Voltar para Home</button>
    </div>
  `;
}