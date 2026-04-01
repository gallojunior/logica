function renderIntroPage() {
  return `
    <div class="page-header">
      <h1 class="page-title"><span>⚙️</span> Introdução à Lógica de Programação com C/C++</h1>
      <p class="page-subtitle">Fundamentos essenciais para programar em C e C++ – linguagens de sistemas, jogos e alto desempenho</p>
    </div>

    <div class="content-card">
      <h2 class="card-title">📘 C e C++ – Duas Linguagens, Uma Base Sólida</h2>
      <p><strong>C</strong> é uma linguagem procedural, de baixo nível, criada nos anos 70 para desenvolvimento de sistemas operacionais. É rápida, eficiente e a base de muitas outras linguagens.</p>
      <p><strong>C++</strong> surgiu como uma extensão do C, adicionando orientação a objetos, templates e abstrações modernas, mantendo a performance. É usada em jogos, sistemas embarcados, aplicações desktop e servidores.</p>
      <p>Neste curso, usaremos a sintaxe comum a ambas (baseada em C) para ensinar os fundamentos da lógica de programação. Os exemplos compilam tanto em C quanto em C++. Assim, você adquire a base necessária para seguir com qualquer uma das duas.</p>
      <div class="info-callout">
        <span class="info-icon-callout">💡</span>
        <div>Quando usar C? – Sistemas operacionais, drivers, dispositivos embarcados, software de baixo nível.<br>
        Quando usar C++? – Jogos, aplicações gráficas, sistemas complexos com orientação a objetos, programas que exigem alto desempenho com abstrações.</div>
      </div>
    </div>

    <div class="content-card">
      <h2 class="card-title">🏗️ Estrutura de um Programa C/C++</h2>
      <p>Um programa básico em C/C++ consiste em:</p>
      <ul style="margin-left: 1.5rem; color: var(--text-secondary);">
        <li><strong>Inclusão de bibliotecas</strong> – <code>#include &lt;stdio.h&gt;</code> para entrada/saída.</li>
        <li><strong>Função principal</strong> – <code>int main()</code> (ponto de entrada).</li>
        <li><strong>Corpo da função</strong> – código entre chaves.</li>
        <li><strong>Retorno</strong> – <code>return 0;</code> indica sucesso.</li>
      </ul>
      <div class="code-example">
        <div class="code-example-header">
          <span class="code-icon">📝</span>
          <span>Estrutura básica</span>
        </div>
        <pre><code>#include &lt;stdio.h&gt;

int main() {
    // código
    return 0;
}</code></pre>
      </div>
    </div>

    <div class="content-card">
      <h2 class="card-title">📦 Variáveis em C/C++</h2>
      <p>As variáveis precisam ser declaradas com um tipo específico. C e C++ são <strong>fortemente tipadas</strong>.</p>
      <div class="info-callout">
        <span class="info-icon-callout">💡</span>
        <div>
          <strong>Convenções:</strong>
          <br>• Nomes em <strong>snake_case</strong> (ex: <code>idade_pessoa</code>).
          <br>• Constantes em <code>#define</code> ou <code>const</code>.
        </div>
      </div>
      <div class="code-example">
        <div class="code-example-header">
          <span class="code-icon">📝</span>
          <span>Declaração de variáveis</span>
        </div>
        <pre><code>#include &lt;stdio.h&gt;

int main() {
    int idade = 25;           // inteiro
    double altura = 1.75;     // ponto flutuante
    char letra = 'A';         // caractere
    char nome[20] = "João";   // string (array de char)

    const double PI = 3.14159; // constante

    return 0;
}</code></pre>
      </div>
    </div>

    <div class="content-card">
      <h2 class="card-title">📊 Tipos de Dados</h2>
      <div class="types-table">
        <div class="type-row">
          <div class="type-name">int</div>
          <div class="type-desc">Números inteiros</div>
          <div class="type-example"><code>int num = 42;</code></div>
        </div>
        <div class="type-row">
          <div class="type-name">float / double</div>
          <div class="type-desc">Números decimais (simples/dupla precisão)</div>
          <div class="type-example"><code>double preco = 19.99;</code></div>
        </div>
        <div class="type-row">
          <div class="type-name">char</div>
          <div class="type-desc">Um caractere</div>
          <div class="type-example"><code>char letra = 'C';</code></div>
        </div>
        <div class="type-row">
          <div class="type-name">void</div>
          <div class="type-desc">Sem tipo (usado em funções que não retornam valor)</div>
          <div class="type-example"><code>void funcao();</code></div>
        </div>
      </div>
    </div>

    <div class="content-card">
      <h2 class="card-title">📥📤 Entrada e Saída</h2>
      <div class="io-section">
        <div class="io-card">
          <h3>📤 Saída - printf</h3>
          <div class="code-mini">
            <pre><code>printf("Olá mundo!\n");
int idade = 25;
printf("Idade: %d\n", idade);</code></pre>
          </div>
        </div>
        <div class="io-card">
          <h3>📥 Entrada - scanf</h3>
          <div class="code-mini">
            <pre><code>int idade;
printf("Digite sua idade: ");
scanf("%d", &idade);</code></pre>
          </div>
        </div>
      </div>
      <p><small>Para strings, use <code>%s</code> e cuidado com o tamanho do buffer.</small></p>
    </div>

    <div class="content-card">
      <h2 class="card-title">🎯 Exemplo Completo</h2>
      <div class="code-example">
        <div class="code-example-header">
          <span class="code-icon">📝</span>
          <span>Programa completo em C/C++</span>
        </div>
        <pre><code>#include &lt;stdio.h&gt;

int main() {
    char nome[50];
    int idade;
    double altura;

    printf("Informe seu nome: ");
    scanf("%s", nome);
    printf("Informe sua idade: ");
    scanf("%d", &idade);
    printf("Informe sua altura: ");
    scanf("%lf", &altura);

    printf("\n=== DADOS DO USUÁRIO ===\n");
    printf("Nome: %s\n", nome);
    printf("Idade: %d anos\n", idade);
    printf("Altura: %.2f m\n", altura);

    return 0;
}</code></pre>
      </div>
    </div>

    <div class="callout" style="margin-top: 1rem; text-align: center;">
      <p>🚀 <strong>Vamos praticar!</strong> Nos próximos módulos você encontrará exercícios para fixar todos esses conceitos em C/C++.</p>
      <button class="btn-demo" id="goToHomeBtn">🏠 Voltar para Home</button>
    </div>
  `;
}