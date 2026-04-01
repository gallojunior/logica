const repeticaoExercises = [
  // NÍVEL 1 - BÁSICO (exercícios 1-5)
  {
    id: 1, nivel: 1,
    title: "Contador Simples",
    statement: "Elabore um programa em R que exiba os números de 1 a 10.",
    input: "Nenhuma entrada",
    output: "1, 2, 3, 4, 5, 6, 7, 8, 9, 10",
    code: `# Contador simples
for (i in 1:10) {
    cat(i, "\n")
}`,
    testCases: [{ values: {}, result: "1 2 3 4 5 6 7 8 9 10", stepByStep: "i de 1 a 10" }],
    explanation: "Laço `for` usando um range de 1 a 10."
  },
  {
    id: 2, nivel: 1,
    title: "Contagem Regressiva",
    statement: "Mostre uma contagem regressiva de 10 até 0, exibindo 'FOGO!' ao final.",
    input: "Nenhuma entrada",
    output: "10, 9, 8, ..., 0, FOGO!",
    code: `# Contagem regressiva
for (i in 10:0) {
    cat(i)
    if (i > 0) cat(", ")
}
cat("\nFOGO!\n")`,
    testCases: [{ values: {}, result: "10,9,8,...,0,FOGO!", stepByStep: "i de 10 a 0" }],
    explanation: "Laço `for` com range decrescente."
  },
  {
    id: 3, nivel: 1,
    title: "Tabuada de um Número",
    statement: "Leia um número e exiba sua tabuada de 1 a 10.",
    input: "numero = 5",
    output: "5 x 1 = 5, 5 x 2 = 10, ...",
    code: `# Tabuada
cat("Informe um número: ")
num <- as.numeric(readline())

for (i in 1:10) {
    cat(num, "x", i, "=", num * i, "\n")
}`,
    testCases: [{ values: { num: 5 }, result: "tabuada do 5", stepByStep: "i de 1 a 10" }],
    explanation: "Laço `for` com multiplicação."
  },
  {
    id: 4, nivel: 1,
    title: "Números Pares",
    statement: "Exiba todos os números pares entre 1 e 20.",
    input: "Nenhuma entrada",
    output: "2, 4, 6, 8, 10, 12, 14, 16, 18, 20",
    code: `# Números pares
for (i in seq(2, 20, by = 2)) {
    cat(i)
    if (i < 20) cat(", ")
}
cat("\n")`,
    testCases: [{ values: {}, result: "2,4,6,...,20", stepByStep: "i de 2 em 2" }],
    explanation: "Usa `seq` para gerar números pares."
  },
  {
    id: 5, nivel: 1,
    title: "Números Ímpares Regressivos",
    statement: "Exiba os números ímpares de 15 até 1 em ordem decrescente.",
    input: "Nenhuma entrada",
    output: "15, 13, 11, 9, 7, 5, 3, 1",
    code: `# Ímpares regressivos
for (i in 15:1) {
    if (i %% 2 != 0) {
        cat(i)
        if (i > 1) cat(", ")
    }
}
cat("\n")`,
    testCases: [{ values: {}, result: "15,13,11,...,1", stepByStep: "i de 15 a 1, filtra ímpares" }],
    explanation: "Laço decrescente com filtro `%%`."
  },

  // NÍVEL 2 - ACUMULADORES (exercícios 6-10)
  {
    id: 6, nivel: 2,
    title: "Somador de Números",
    statement: "Leia 5 números e calcule a soma total.",
    input: "2, 4, 6, 8, 10",
    output: "Soma = 30",
    code: `# Somador
soma <- 0
for (i in 1:5) {
    cat("Informe o", i, "º número: ")
    num <- as.numeric(readline())
    soma <- soma + num
}
cat("A soma é:", soma, "\n")`,
    testCases: [{ values: { numeros: [2,4,6,8,10] }, result: 30, stepByStep: "acumulando soma" }],
    explanation: "Variável acumuladora."
  },
  {
    id: 7, nivel: 2,
    title: "Média de uma Turma",
    statement: "Calcule a média das notas de 8 alunos.",
    input: "8 notas: 7.5, 8.0, 6.5, 9.0, 7.0, 8.5, 6.0, 9.5",
    output: "Média = 7.75",
    code: `# Média
NUM_ALUNOS <- 8
soma <- 0.0
for (i in 1:NUM_ALUNOS) {
    cat("Informe a nota do", i, "º aluno: ")
    nota <- as.numeric(readline())
    soma <- soma + nota
}
media <- soma / NUM_ALUNOS
cat("A média da turma é:", round(media, 2), "\n")`,
    testCases: [{ values: { notas: [7.5,8.0,6.5,9.0,7.0,8.5,6.0,9.5] }, result: 7.75, stepByStep: "soma = 62; média = 62/8 = 7.75" }],
    explanation: "Acumula notas e divide pela quantidade."
  },
  {
    id: 8, nivel: 2,
    title: "Fatorial",
    statement: "Calcule o fatorial de um número N.",
    input: "N = 5",
    output: "5! = 120",
    code: `# Fatorial
cat("Informe um número: ")
num <- as.integer(readline())

fat <- 1
for (i in num:2) {
    fat <- fat * i
}
cat(num, "! =", fat, "\n")`,
    testCases: [{ values: { num: 5 }, result: 120, stepByStep: "5×4×3×2×1 = 120" }],
    explanation: "Acumulador multiplicativo."
  },
  {
    id: 9, nivel: 2,
    title: "Soma de Pares e Ímpares",
    statement: "Leia 15 números e exiba soma e quantidade de pares e ímpares.",
    input: "15 números: 1 a 15",
    output: "Soma pares: 56, Soma ímpares: 64, Qtd pares: 7, Qtd ímpares: 8",
    code: `# Soma de pares e ímpares
LIMITE <- 15
sp <- si <- qp <- qi <- 0
for (i in 1:LIMITE) {
    cat("Informe o", i, "º número: ")
    num <- as.integer(readline())
    if (num %% 2 == 0) {
        qp <- qp + 1
        sp <- sp + num
    } else {
        qi <- qi + 1
        si <- si + num
    }
}
cat("Soma dos pares:", sp, "\n")
cat("Soma dos ímpares:", si, "\n")
cat("Quantidade de pares:", qp, "\n")
cat("Quantidade de ímpares:", qi, "\n")`,
    testCases: [{ values: { numeros: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15] }, result: "sp=56, si=64, qp=7, qi=8", stepByStep: "classifica e acumula" }],
    explanation: "Quatro acumuladores: dois para somas e dois para contagens."
  },
  {
    id: 10, nivel: 2,
    title: "Análise de Números",
    statement: "Leia 10 números e informe maior, menor, soma e média.",
    input: "5, 8, 3, 12, 7, 9, 4, 6, 11, 10",
    output: "Maior: 12, Menor: 3, Soma: 75, Média: 7.5",
    code: `# Análise de números
LIMITE <- 10
cat("Informe o 1º número: ")
num <- as.numeric(readline())
maior <- menor <- num
soma <- num
for (i in 2:LIMITE) {
    cat("Informe o", i, "º número: ")
    num <- as.numeric(readline())
    if (num > maior) maior <- num
    if (num < menor) menor <- num
    soma <- soma + num
}
media <- soma / LIMITE
cat("Maior:", maior, "\n")
cat("Menor:", menor, "\n")
cat("Soma:", soma, "\n")
cat("Média:", round(media, 1), "\n")`,
    testCases: [{ values: { numeros: [5,8,3,12,7,9,4,6,11,10] }, result: "maior=12, menor=3, soma=75, media=7.5", stepByStep: "atualiza maior/menor" }],
    explanation: "Inicializa com primeiro número, atualiza comparando."
  },

  // NÍVEL 3 - VALIDAÇÃO E CONDIÇÕES DE PARADA (exercícios 11-14)
  {
    id: 11, nivel: 3,
    title: "Validação de Senha",
    statement: "Solicite senha até digitar '123456'.",
    input: "tentativas: '000000', '111111', '123456'",
    output: "ACESSO PERMITIDO",
    code: `# Validação de senha
repeat {
    cat("Informe a senha: ")
    senha <- readline()
    if (senha == "123456") break
    cat("Senha incorreta! Tente novamente.\n")
}
cat("ACESSO PERMITIDO\n")`,
    testCases: [{ values: { tentativas: ["000000","111111","123456"] }, result: "ACESSO PERMITIDO", stepByStep: "repete até acertar" }],
    explanation: "Laço `repeat` com `break` quando a senha estiver correta."
  },
  {
    id: 12, nivel: 3,
    title: "Validação de Notas",
    statement: "Leia notas de 15 alunos validando entre 0 e 10.",
    input: "notas com validação",
    output: "Média final",
    code: `# Validação de notas
NUM_ALUNOS <- 15
soma <- 0.0
for (i in 1:NUM_ALUNOS) {
    repeat {
        cat("Informe a nota do", i, "º aluno (0-10): ")
        nota <- as.numeric(readline())
        if (nota >= 0 && nota <= 10) {
            soma <- soma + nota
            break
        } else {
            cat("Nota inválida! Digite um valor entre 0 e 10.\n")
        }
    }
}
media <- soma / NUM_ALUNOS
cat("Média final:", round(media, 2), "\n")`,
    testCases: [{ values: { notas: [-1,11,7.5] }, result: "aceita 7.5", stepByStep: "repete até nota válida" }],
    explanation: "Laço interno `repeat` com `break` para validação."
  },
  {
    id: 13, nivel: 3,
    title: "Leitura com Condição de Parada",
    statement: "Leia números até digitar 0 e mostre quantos foram digitados.",
    input: "5, 8, 3, 0",
    output: "Foram digitados 3 números",
    code: `# Leitura com condição de parada
contador <- 0
repeat {
    cat("Informe um número (0 para parar): ")
    num <- as.numeric(readline())
    if (num == 0) break
    contador <- contador + 1
}
cat("Foram digitados", contador, "números\n")`,
    testCases: [{ values: { numeros: [5,8,3,0] }, result: "3 números", stepByStep: "conta até receber 0" }],
    explanation: "Laço `repeat` com `break` quando o número for zero."
  },
  {
    id: 14, nivel: 3,
    title: "Acumulador Condicional (Vendas)",
    statement: "Leia vendas até digitar 0 e exiba total, vendas acima de 1000 e média.",
    input: "1500, 800, 2000, 0",
    output: "Total: 4300, Acima de 1000: 2, Média: 1433.33",
    code: `# Acumulador condicional
total <- 0.0
qtde <- 0
acima <- 0
repeat {
    cat("Informe o valor da venda (0 para encerrar): R$ ")
    valor <- as.numeric(readline())
    if (valor == 0) break
    qtde <- qtde + 1
    total <- total + valor
    if (valor > 1000) acima <- acima + 1
}
if (qtde > 0) {
    media <- total / qtde
    cat("Total de vendas: R$", round(total, 2), "\n")
    cat("Vendas acima de R$1000:", acima, "\n")
    cat("Média das vendas: R$", round(media, 2), "\n")
}`,
    testCases: [{ values: { vendas: [1500,800,2000,0] }, result: "total=4300, acima=2, media=1433.33", stepByStep: "acumula e conta" }],
    explanation: "Múltiplos acumuladores."
  },

  // NÍVEL 4 - SEQUÊNCIAS MATEMÁTICAS (exercícios 15-17)
  {
    id: 15, nivel: 4,
    title: "Sequência de Fibonacci",
    statement: "Exiba os primeiros 12 termos da sequência de Fibonacci.",
    input: "Nenhuma entrada",
    output: "0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89",
    code: `# Fibonacci
t1 <- 0
t2 <- 1
cat(t1, ", ", t2, sep = "")
for (i in 3:12) {
    proximo <- t1 + t2
    cat(", ", proximo, sep = "")
    t1 <- t2
    t2 <- proximo
}
cat("\n")`,
    testCases: [{ values: {}, result: "0,1,1,2,3,5,8,13,21,34,55,89", stepByStep: "cada termo = soma dos dois anteriores" }],
    explanation: "Atualização de variáveis a cada iteração."
  },
  {
    id: 16, nivel: 4,
    title: "Números Primos",
    statement: "Verifique se um número N é primo.",
    input: "N = 13",
    output: "13 é PRIMO",
    code: `# Primo
cat("Informe um número: ")
num <- as.integer(readline())
eh_primo <- TRUE
if (num <= 1) {
    eh_primo <- FALSE
} else {
    limite <- floor(sqrt(num))
    for (i in 2:limite) {
        if (num %% i == 0) {
            eh_primo <- FALSE
            break
        }
    }
}
if (eh_primo) {
    cat(num, "é PRIMO\n")
} else {
    cat(num, "NÃO é primo\n")
}`,
    testCases: [{ values: { num: 13 }, result: "PRIMO", stepByStep: "não tem divisores" }],
    explanation: "Testa divisores até a raiz quadrada."
  },
  {
    id: 17, nivel: 4,
    title: "Números Perfeitos",
    statement: "Encontre números perfeitos entre 1 e 1000.",
    input: "Nenhuma entrada",
    output: "6, 28, 496",
    code: `# Números perfeitos
LIMITE <- 1000
for (i in 2:LIMITE) {
    soma <- 0
    for (j in 1:(i-1)) {
        if (i %% j == 0) soma <- soma + j
    }
    if (soma == i) {
        cat(i)
        if (i < 496) cat(", ")
    }
}
cat("\n")`,
    testCases: [{ values: {}, result: "6, 28, 496", stepByStep: "soma dos divisores = número" }],
    explanation: "Laços aninhados para somar divisores."
  },

  // NÍVEL 5 - LAÇOS ANINHADOS E PADRÕES (exercícios 18-20)
  {
    id: 18, nivel: 5,
    title: "Triângulo de Números",
    statement: "Exiba um triângulo numérico onde na linha i, o número i se repete i vezes.",
    input: "N = 4",
    output: "1\n2 2\n3 3 3\n4 4 4 4",
    code: `# Triângulo de números
cat("Informe um número (1-9): ")
n <- as.integer(readline())
for (i in 1:n) {
    for (j in 1:i) {
        cat(i, " ")
    }
    cat("\n")
}`,
    testCases: [{ values: { n: 4 }, result: "1\n2 2\n3 3 3\n4 4 4 4", stepByStep: "laços aninhados" }],
    explanation: "Laço externo para linhas, interno para colunas."
  },
  {
    id: 19, nivel: 5,
    title: "Jogo de Adivinhação",
    statement: "Jogo onde o computador sorteia um número e o usuário tenta adivinhar.",
    input: "palpites: 50, 75, 62, 70",
    output: "Acertou! Tentativas: 4",
    code: `# Jogo de adivinhação
NS <- sample(1:100, 1)
tentativas <- 0
cat("Tente adivinhar o número secreto (1-100)!\n")
repeat {
    cat("Digite seu palpite: ")
    palpite <- as.numeric(readline())
    tentativas <- tentativas + 1
    if (palpite > NS) {
        cat("MUITO ALTO! Tente um número menor.\n")
    } else if (palpite < NS) {
        cat("MUITO BAIXO! Tente um número maior.\n")
    } else {
        break
    }
}
cat("\nPARABÉNS! Você acertou em", tentativas, "tentativas!\n")`,
    testCases: [{ values: { NS: 70, palpites: [50,75,62,70] }, result: "acertou em 4", stepByStep: "loop até acertar" }],
    explanation: "Laço `repeat` com break ao acertar, dicas a cada tentativa."
  },
  {
    id: 20, nivel: 5,
    title: "Menu Interativo",
    statement: "Menu com opções: 1-Somar, 2-Subtrair, 3-Sair.",
    input: "opções: 1 (10,5), 2 (20,8), 3",
    output: "Soma: 15, Subtração: 12, Encerrando...",
    code: `# Menu interativo
repeat {
    cat("\n===== MENU DE OPÇÕES =====\n")
    cat("1 - Somar dois números\n")
    cat("2 - Subtrair dois números\n")
    cat("3 - Sair\n")
    cat("Escolha uma opção: ")
    opcao <- as.integer(readline())
    if (opcao == 1) {
        cat("Informe o primeiro número: ")
        a <- as.numeric(readline())
        cat("Informe o segundo número: ")
        b <- as.numeric(readline())
        cat("Resultado:", a + b, "\n")
    } else if (opcao == 2) {
        cat("Informe o primeiro número: ")
        a <- as.numeric(readline())
        cat("Informe o segundo número: ")
        b <- as.numeric(readline())
        cat("Resultado:", a - b, "\n")
    } else if (opcao == 3) {
        cat("Encerrando o programa...\n")
        break
    } else {
        cat("Opção inválida!\n")
    }
    cat("\nPressione ENTER para continuar...")
    readline()
}`,
    testCases: [{ values: { opcoes: [1,10,5,2,20,8,3] }, result: "soma=15, subtração=12, encerra", stepByStep: "loop até opção 3" }],
    explanation: "Combinação de `repeat`, `if-else` e funções."
  }
];

// Renderiza a seção de conceitos de repetição em R
function renderConceitosRepeticao() {
  return `
    <div class="content-card">
      <h2 class="card-title">🔄 Laços de Repetição em R</h2>
      <p>R oferece três formas principais de laços: <strong>for</strong>, <strong>while</strong> e <strong>repeat</strong>. O <code>for</code> é usado para iterar sobre vetores ou sequências; <code>while</code> repete enquanto uma condição for verdadeira; <code>repeat</code> é um laço infinito que precisa de um <code>break</code> explícito.</p>
    </div>

    <div class="content-card">
      <h2 class="card-title">🔄 For</h2>
      <div class="code-example">
        <pre><code>for (i in 1:10) {
    print(i)
}</code></pre>
      </div>
    </div>

    <div class="content-card">
      <h2 class="card-title">🔄 While</h2>
      <div class="code-example">
        <pre><code>i <- 1
while (i <= 10) {
    print(i)
    i <- i + 1
}</code></pre>
      </div>
    </div>

    <div class="content-card">
      <h2 class="card-title">🔄 Repeat</h2>
      <div class="code-example">
        <pre><code>i <- 1
repeat {
    print(i)
    i <- i + 1
    if (i > 10) break
}</code></pre>
      </div>
    </div>
  `;
}

// Renderiza a seção de exercícios de repetição
function renderExerciciosRepeticao() {
  const currentEx = repeticaoExercises.find(e => e.id === window.currentRepeticaoExercise) || repeticaoExercises[0];

  const niveis = {
    1: { nome: "⭐ Básico", cor: "#10b981" },
    2: { nome: "⭐⭐ Acumuladores", cor: "#f59e0b" },
    3: { nome: "⭐⭐⭐ Validação", cor: "#3b82f6" },
    4: { nome: "⭐⭐⭐⭐ Sequências Matemáticas", cor: "#8b5cf6" },
    5: { nome: "⭐⭐⭐⭐⭐ Laços Aninhados", cor: "#ef4444" }
  };

  return `
    <div class="exercises-filter">
      <div class="filter-header">
        <span>📋 Exercícios de Repetição (R)</span>
        <span class="filter-count">${repeticaoExercises.length} exercícios disponíveis</span>
      </div>
      <div class="filter-buttons">
        ${repeticaoExercises.map(ex => `
          <button class="filter-btn ${ex.id === window.currentRepeticaoExercise ? 'active' : ''}" data-ex-id="${ex.id}" title="Nível ${ex.nivel}: ${niveis[ex.nivel].nome}">
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
          <span>💻 Código de Resolução (R)</span>
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
              ${test.values && Object.keys(test.values).length > 0 ? `
                <div class="test-values">
                  <strong>Valores de entrada:</strong> ${Object.entries(test.values).map(([k, v]) => `${k} = ${v}`).join(', ')}
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

// Função para renderizar a página completa de repetição
function renderLoopsPage() {
  const currentSubpage = window.currentRepeticaoSubpage || 'conceitos';

  return `
    <div class="page-header">
      <h1 class="page-title"><span>🔄</span> Estruturas de Repetição em R</h1>
      <p class="page-subtitle">Aprenda a criar loops com for, while e repeat</p>
    </div>

    <div class="sub-nav">
      <button class="sub-nav-btn ${currentSubpage === 'conceitos' ? 'active' : ''}" data-subpage="conceitos">
        📘 Conceitos
      </button>
      <button class="sub-nav-btn ${currentSubpage === 'exercicios' ? 'active' : ''}" data-subpage="exercicios">
        ✏️ Exercícios
      </button>
    </div>

    <div id="repeticao-content">
      ${currentSubpage === 'conceitos' ? renderConceitosRepeticao() : renderExerciciosRepeticao()}
    </div>
  `;
}