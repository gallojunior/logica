// ========== DADOS DOS EXERCÍCIOS DE FUNÇÕES EM RUST ==========
const functionsExercises = [
  // NÍVEL 1 - FUNÇÕES BÁSICAS (exercícios 1-3)
  {
    id: 1,
    nivel: 1,
    title: "Função: Mensagem Personalizada",
    statement: "Crie uma função chamada mensagem_boas_vindas que receba como parâmetro o nome de uma pessoa e exiba a mensagem: 'Seja bem-vindo(a), [nome]!'. No programa principal, solicite o nome do usuário e chame a função.",
    input: "João",
    output: "Seja bem-vindo(a), João!",
    code: `use std::io;

fn mensagem_boas_vindas(nome: &str) {
    println!("Seja bem-vindo(a), {}!", nome);
}

fn main() {
    let mut nome = String::new();
    println!("Digite seu nome:");
    io::stdin().read_line(&mut nome).expect("Erro");
    let nome = nome.trim();
    mensagem_boas_vindas(nome);
}`,
    testCases: [
      { values: { nome: "João" }, result: "Seja bem-vindo(a), João!", stepByStep: "Função recebe o nome e exibe a mensagem" },
      { values: { nome: "Maria" }, result: "Seja bem-vindo(a), Maria!", stepByStep: "Função recebe o nome e exibe a mensagem" }
    ],
    explanation: "Em Rust, uma função é declarada com 'fn'. O parâmetro 'nome' é uma referência a string (&str). A função não retorna valor (implícito ())."
  },
  {
    id: 2,
    nivel: 1,
    title: "Função: Desenhar Linha",
    statement: "Crie uma função chamada desenhar_linha que receba um número inteiro representando a quantidade de caracteres e desenhe uma linha na tela usando o símbolo '-'. Exemplo: se o usuário digitar 10, a função deve exibir '----------'.",
    input: "10",
    output: "----------",
    code: `use std::io;

fn desenhar_linha(tamanho: usize) {
    for _ in 0..tamanho {
        print!("-");
    }
    println!();
}

fn main() {
    let mut input = String::new();
    println!("Digite o tamanho da linha:");
    io::stdin().read_line(&mut input).expect("Erro");
    let tamanho: usize = input.trim().parse().expect("Número inválido");
    desenhar_linha(tamanho);
}`,
    testCases: [
      { values: { tamanho: 10 }, result: "----------", stepByStep: "Laço repete a escrita do '-' 10 vezes" },
      { values: { tamanho: 5 }, result: "-----", stepByStep: "Laço repete a escrita do '-' 5 vezes" }
    ],
    explanation: "A função usa um laço 'for' para imprimir o caractere repetidas vezes. Não retorna valor."
  },
  {
    id: 3,
    nivel: 1,
    title: "Função: Contagem Regressiva",
    statement: "Crie uma função chamada contagem_regressiva que receba um número inteiro positivo e faça uma contagem regressiva até 0, exibindo cada número na tela.",
    input: "5",
    output: "5, 4, 3, 2, 1, 0",
    code: `use std::io;

fn contagem_regressiva(inicio: i32) {
    for i in (0..=inicio).rev() {
        print!("{}", i);
        if i > 0 {
            print!(", ");
        }
    }
    println!();
}

fn main() {
    let mut input = String::new();
    println!("Digite um número para contagem regressiva:");
    io::stdin().read_line(&mut input).expect("Erro");
    let num: i32 = input.trim().parse().expect("Número inválido");
    contagem_regressiva(num);
}`,
    testCases: [
      { values: { inicio: 5 }, result: "5, 4, 3, 2, 1, 0", stepByStep: "Laço decrescente de 5 até 0" },
      { values: { inicio: 3 }, result: "3, 2, 1, 0", stepByStep: "Laço decrescente de 3 até 0" }
    ],
    explanation: "Usamos um range inclusivo e a função `rev()` para iterar decrescentemente."
  },

  // NÍVEL 2 - FUNÇÕES COM RETORNO (exercícios 4-6)
  {
    id: 4,
    nivel: 2,
    title: "Função: Verificar Par ou Ímpar",
    statement: "Crie uma função chamada verificar_par que receba um número inteiro e retorne true se o número for par, false se for ímpar.",
    input: "7",
    output: "O número 7 é ÍMPAR",
    code: `use std::io;

fn verificar_par(num: i32) -> bool {
    num % 2 == 0
}

fn main() {
    let mut input = String::new();
    println!("Digite um número:");
    io::stdin().read_line(&mut input).expect("Erro");
    let numero: i32 = input.trim().parse().expect("Número inválido");

    if verificar_par(numero) {
        println!("O número {} é PAR", numero);
    } else {
        println!("O número {} é ÍMPAR", numero);
    }
}`,
    testCases: [
      { values: { num: 8 }, result: "PAR", stepByStep: "8 % 2 = 0 → true → PAR" },
      { values: { num: 7 }, result: "ÍMPAR", stepByStep: "7 % 2 = 1 → false → ÍMPAR" }
    ],
    explanation: "A função retorna o resultado da expressão lógica. O tipo de retorno é especificado após '->'."
  },
  {
    id: 5,
    nivel: 2,
    title: "Função: Maior de Dois Números",
    statement: "Crie uma função chamada maior_numero que receba dois números reais e retorne o maior deles.",
    input: "15.5, 22.3",
    output: "O maior número é 22.3",
    code: `use std::io;

fn maior_numero(a: f64, b: f64) -> f64 {
    if a > b { a } else { b }
}

fn main() {
    let mut input = String::new();
    println!("Digite o primeiro número:");
    io::stdin().read_line(&mut input).expect("Erro");
    let n1: f64 = input.trim().parse().expect("Número inválido");

    input.clear();
    println!("Digite o segundo número:");
    io::stdin().read_line(&mut input).expect("Erro");
    let n2: f64 = input.trim().parse().expect("Número inválido");

    let maior = maior_numero(n1, n2);
    println!("O maior número é {}", maior);
}`,
    testCases: [
      { values: { a: 15.5, b: 22.3 }, result: 22.3, stepByStep: "22.3 > 15.5 → retorna 22.3" },
      { values: { a: 30, b: 25 }, result: 30, stepByStep: "30 > 25 → retorna 30" }
    ],
    explanation: "A função compara os dois valores e retorna o maior. A última expressão é o retorno implícito (sem 'return')."
  },
  {
    id: 6,
    nivel: 2,
    title: "Função: Conversão de Temperatura",
    statement: "Crie uma função chamada celsius_para_fahrenheit que receba uma temperatura em graus Celsius e retorne o valor convertido para Fahrenheit.",
    input: "30",
    output: "30°C equivale a 86.0°F",
    code: `use std::io;

fn celsius_para_fahrenheit(celsius: f64) -> f64 {
    (celsius * 9.0 / 5.0) + 32.0
}

fn main() {
    let mut input = String::new();
    println!("Digite a temperatura em Celsius:");
    io::stdin().read_line(&mut input).expect("Erro");
    let celsius: f64 = input.trim().parse().expect("Número inválido");

    let fahrenheit = celsius_para_fahrenheit(celsius);
    println!("{}°C equivale a {}°F", celsius, fahrenheit);
}`,
    testCases: [
      { values: { celsius: 30 }, result: 86, stepByStep: "(30 × 9/5) + 32 = 86" },
      { values: { celsius: 0 }, result: 32, stepByStep: "(0 × 9/5) + 32 = 32" }
    ],
    explanation: "Aplica a fórmula de conversão e retorna o valor calculado."
  },

  // NÍVEL 3 - FUNÇÕES COM CÁLCULOS (exercícios 7-8)
  {
    id: 7,
    nivel: 3,
    title: "Função: Calcular Média",
    statement: "Crie uma função chamada calcular_media que receba três notas reais e retorne a média aritmética delas.",
    input: "7.5, 8.0, 9.0",
    output: "A média das notas é: 8.17",
    code: `use std::io;

fn calcular_media(n1: f64, n2: f64, n3: f64) -> f64 {
    (n1 + n2 + n3) / 3.0
}

fn main() {
    let mut input = String::new();
    println!("Digite a primeira nota:");
    io::stdin().read_line(&mut input).expect("Erro");
    let n1: f64 = input.trim().parse().expect("Número inválido");

    input.clear();
    println!("Digite a segunda nota:");
    io::stdin().read_line(&mut input).expect("Erro");
    let n2: f64 = input.trim().parse().expect("Número inválido");

    input.clear();
    println!("Digite a terceira nota:");
    io::stdin().read_line(&mut input).expect("Erro");
    let n3: f64 = input.trim().parse().expect("Número inválido");

    let media = calcular_media(n1, n2, n3);
    println!("A média das notas é: {:.2}", media);
}`,
    testCases: [
      { values: { n1: 7.5, n2: 8.0, n3: 9.0 }, result: 8.17, stepByStep: "(7.5 + 8.0 + 9.0) / 3 = 8.166..." },
      { values: { n1: 5, n2: 6, n3: 7 }, result: 6, stepByStep: "(5+6+7)/3 = 6" }
    ],
    explanation: "Calcula a soma e divide por 3."
  },
  {
    id: 8,
    nivel: 3,
    title: "Função: Fatorial",
    statement: "Crie uma função chamada calcular_fatorial que receba um número inteiro positivo e retorne o fatorial desse número.",
    input: "5",
    output: "5! = 120",
    code: `use std::io;

fn calcular_fatorial(num: u64) -> u64 {
    (1..=num).product()
}

fn main() {
    let mut input = String::new();
    println!("Digite um número para calcular o fatorial:");
    io::stdin().read_line(&mut input).expect("Erro");
    let num: u64 = input.trim().parse().expect("Número inválido");

    let resultado = calcular_fatorial(num);
    println!("{}! = {}", num, resultado);
}`,
    testCases: [
      { values: { num: 5 }, result: 120, stepByStep: "5×4×3×2×1 = 120" },
      { values: { num: 4 }, result: 24, stepByStep: "4×3×2×1 = 24" }
    ],
    explanation: "Usa o método `product()` sobre o range inclusivo para calcular o produto de todos os números."
  },

  // NÍVEL 4 - FUNÇÕES COM VETORES (exercícios 9-10)
  {
    id: 9,
    nivel: 4,
    title: "Função: Preencher Vetor",
    statement: "Crie uma função chamada preencher_vetor que receba um vetor (mutável) de 5 posições e o preencha com valores digitados pelo usuário.",
    input: "10, 20, 30, 40, 50",
    output: "Vetor: 10, 20, 30, 40, 50",
    code: `use std::io;

fn preencher_vetor(vetor: &mut Vec<i32>) {
    for i in 0..vetor.len() {
        let mut input = String::new();
        println!("Digite o valor para a posição {}:", i+1);
        io::stdin().read_line(&mut input).expect("Erro");
        let val: i32 = input.trim().parse().expect("Número inválido");
        vetor[i] = val;
    }
}

fn exibir_vetor(vetor: &Vec<i32>) {
    print!("Vetor: ");
    for (i, &val) in vetor.iter().enumerate() {
        print!("{}", val);
        if i < vetor.len() - 1 {
            print!(", ");
        }
    }
    println!();
}

fn main() {
    const TAMANHO: usize = 5;
    let mut numeros = vec![0; TAMANHO];
    preencher_vetor(&mut numeros);
    exibir_vetor(&numeros);
}`,
    testCases: [
      { values: { numeros: [10,20,30,40,50] }, result: "Vetor: 10, 20, 30, 40, 50", stepByStep: "Função preenche cada posição; função exibe o vetor" }
    ],
    explanation: "As funções recebem referências mutáveis (&mut Vec) para modificar o vetor. A exibição usa uma referência imutável."
  },
  {
    id: 10,
    nivel: 4,
    title: "Função: Tabuada",
    statement: "Crie uma função chamada mostrar_tabuada que receba um número inteiro e exiba a tabuada desse número (de 1 a 10).",
    input: "5",
    output: "5 x 1 = 5\n5 x 2 = 10\n...\n5 x 10 = 50",
    code: `use std::io;

fn mostrar_tabuada(num: i32) {
    println!("Tabuada do {}:", num);
    for i in 1..=10 {
        println!("{} x {} = {}", num, i, num * i);
    }
}

fn main() {
    let mut input = String::new();
    println!("Digite um número para ver sua tabuada:");
    io::stdin().read_line(&mut input).expect("Erro");
    let num: i32 = input.trim().parse().expect("Número inválido");
    mostrar_tabuada(num);
}`,
    testCases: [
      { values: { num: 5 }, result: "Tabuada do 5: 5x1=5, 5x2=10, ..., 5x10=50", stepByStep: "Laço de 1 a 10 calculando e exibindo o produto" },
      { values: { num: 3 }, result: "Tabuada do 3: 3x1=3, 3x2=6, ..., 3x10=30", stepByStep: "Laço de 1 a 10 calculando e exibindo o produto" }
    ],
    explanation: "A função recebe um número e exibe sua tabuada usando um laço for."
  }
];

// ========== RENDERIZAÇÃO DOS CONCEITOS ==========
function renderConceitosFuncoes() {
  const langText = getLanguageDisplayName();
  
  return `
    <div class="content-card">
      <h2 class="card-title">📦 Funções em Rust</h2>
      <p>Funções são blocos de código reutilizáveis que realizam uma tarefa específica. Em Rust, as funções são declaradas com <code>fn</code>, podem ter parâmetros com tipos explícitos e retornar valores.</p>
      
      <div class="info-callout">
        <span class="info-icon-callout">✨</span>
        <div>
          <strong>Vantagens de usar funções:</strong>
          <br>• Evitam código repetido (DRY)
          <br>• Permitem reutilização
          <br>• Dividem problemas grandes em partes menores
          <br>• Facilitam testes e manutenção
        </div>
      </div>
    </div>
    
    <div class="content-card">
      <h2 class="card-title">🔧 Estrutura de uma Função em Rust</h2>
      <div class="info-grid">
        <div class="info-grid-item">
          <strong>📌 Nome</strong><br>
          Snake case (letras minúsculas com _)
        </div>
        <div class="info-grid-item">
          <strong>📦 Parâmetros</strong><br>
          Tipo obrigatório após o nome: <code>nome: tipo</code>
        </div>
        <div class="info-grid-item">
          <strong>🔄 Retorno</strong><br>
          Especificado após <code>-></code>, última expressão é o retorno (sem <code>;</code>)
        </div>
        <div class="info-grid-item">
          <strong>📝 Corpo</strong><br>
          Bloco entre chaves
        </div>
      </div>
      
      <div class="code-example">
        <div class="code-example-header">
          <span class="code-icon">📝</span>
          <span>Sintaxe básica</span>
        </div>
        <pre><code>fn nome(param1: tipo1, param2: tipo2) -> tipo_retorno {
    // corpo
    valor // retorno implícito
}</code></pre>
      </div>
    </div>
    
    <div class="content-card">
      <h2 class="card-title">📝 Declaração de Função em Rust</h2>
      <div class="code-example">
        <div class="code-example-header">
          <span class="code-icon">📝</span>
          <span>Função que soma dois inteiros</span>
        </div>
        <pre><code>fn soma(a: i32, b: i32) -> i32 {
    a + b
}</code></pre>
      </div>
      <div class="code-example">
        <div class="code-example-header">
          <span class="code-icon">📝</span>
          <span>Função sem retorno (unidade)</span>
        </div>
        <pre><code>fn imprimir(texto: &str) {
    println!("{}", texto);
}</code></pre>
      </div>
    </div>
    
    <div class="content-card">
      <h2 class="card-title">🔄 Funções com e sem Retorno</h2>
      <p>Funções que não retornam valor explicitamente retornam o tipo unitário <code>()</code>. Em Rust, a última expressão é o valor retornado, e não se usa ponto e vírgula.</p>
      <div class="code-example">
        <div class="code-example-header">
          <span class="code-icon">📝</span>
          <span>Retorno implícito</span>
        </div>
        <pre><code>fn maior(a: i32, b: i32) -> i32 {
    if a > b { a } else { b }
}</code></pre>
      </div>
    </div>
    
    <div class="content-card">
      <h2 class="card-title">📋 Convenções em Rust</h2>
      <div class="operators-table">
        <div class="operator-row header">
          <div>Elemento</div>
          <div>Convenção</div>
          <div>Exemplo</div>
        </div>
        <div class="operator-row">
          <div>Nomes de funções</div>
          <div>snake_case</div>
          <div><code>calcular_media</code></div>
        </div>
        <div class="operator-row">
          <div>Parâmetros</div>
          <div>snake_case</div>
          <div><code>nome, idade</code></div>
        </div>
        <div class="operator-row">
          <div>Constantes</div>
          <div>UPPER_SNAKE_CASE</div>
          <div><code>const PI: f64 = 3.14;</code></div>
        </div>
      </div>
      <div class="info-callout" style="margin-top: 1rem;">
        <span class="info-icon-callout">📌</span>
        <div>Em Rust, nomes de funções seguem <strong>snake_case</strong> (letras minúsculas separadas por underline).</div>
      </div>
    </div>
    
    <div class="content-card">
      <h2 class="card-title">🎯 Exemplo Prático Completo</h2>
      <div class="code-example">
        <div class="code-example-header">
          <span class="code-icon">📝</span>
          <span>Função que faz pergunta</span>
        </div>
        <pre><code>use std::io;

fn perguntar(texto: &str) -> bool {
    let mut resposta = String::new();
    println!("{} (S/N):", texto);
    io::stdin().read_line(&mut resposta).expect("Erro");
    resposta.trim().to_uppercase() == "S"
}

fn main() {
    if perguntar("Acabou a aula?") {
        println!("Vamos embora!");
    } else {
        println!("Trabalhemmmm!");
    }
}</code></pre>
      </div>
      
      <div class="info-callout" style="margin-top: 1rem;">
        <span class="info-icon-callout">💡</span>
        <div>
          <strong>Dica do Professor:</strong> 
          <br>• Use <strong>snake_case</strong> para nomes de funções
          <br>• Funções que retornam valor têm o tipo após <code>-></code>
          <br>• Prefira retorno implícito (última expressão) a usar <code>return</code>
          <br>• Parâmetros são imutáveis por padrão; use <code>&mut</code> para modificar
        </div>
      </div>
    </div>
  `;
}

// ========== RENDERIZAÇÃO DOS EXERCÍCIOS ==========
function renderExerciciosFuncoes() {
  const currentEx = functionsExercises.find(e => e.id === window.currentFunctionsExercise) || functionsExercises[0];
  
  const niveis = {
    1: { nome: "⭐ Funções Básicas", cor: "#10b981" },
    2: { nome: "⭐⭐ Funções com Retorno", cor: "#f59e0b" },
    3: { nome: "⭐⭐⭐ Funções com Cálculos", cor: "#3b82f6" },
    4: { nome: "⭐⭐⭐⭐ Funções com Vetores", cor: "#8b5cf6" }
  };
  
  return `
    <div class="exercises-filter">
      <div class="filter-header">
        <span>📋 Exercícios de Funções em Rust</span>
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
      <h1 class="page-title">⚙️ Funções em Rust</h1>
      <p class="page-subtitle">Aprenda a organizar seu código com funções em ${getLanguageDisplayName()}</p>
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