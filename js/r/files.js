// ========== DADOS DOS EXERCÍCIOS DE ARQUIVOS EM R ==========
const filesExercises = [
  // NÍVEL 1 - LEITURA BÁSICA (exercícios 1-3)
  {
    id: 1,
    nivel: 1,
    title: "Leitura de Arquivo e Exibição",
    statement: "Escreva um programa em R que leia um arquivo chamado 'dados.txt' linha por linha e exiba seu conteúdo no console. Considere que o arquivo existe na mesma pasta.",
    input: "Arquivo 'dados.txt' com algumas linhas",
    output: "Conteúdo do arquivo exibido",
    code: `# Leitura de arquivo linha por linha
conexao <- file("dados.txt", "r")
linhas <- readLines(conexao)
close(conexao)

cat("Conteúdo do arquivo:\n")
cat(linhas, sep = "\n")`,
    testCases: [
      { values: { arquivo: "dados.txt com 'Linha 1\\nLinha 2\\nLinha 3'" }, result: "Linha 1\\nLinha 2\\nLinha 3", stepByStep: "Abre arquivo, lê todas as linhas com `readLines`, fecha, exibe." }
    ],
    explanation: "`file()` abre o arquivo (modo 'r' para leitura), `readLines()` lê todas as linhas para um vetor, `close()` fecha a conexão. Exibimos com `cat` e `sep = \"\\n\"`."
  },
  {
    id: 2,
    nivel: 1,
    title: "Escrita de Arquivo",
    statement: "Crie um programa que solicite ao usuário o nome do arquivo e uma frase, e grave essa frase no arquivo (sobrescrevendo).",
    input: "arquivo = 'frase.txt', frase = 'Olá, mundo!'",
    output: "Arquivo criado com a frase",
    code: `# Escrita de arquivo (sobrescreve)
cat("Informe o nome do arquivo: ")
nomeArquivo <- readline()
cat("Informe a frase a ser gravada: ")
frase <- readline()

conexao <- file(nomeArquivo, "w")
writeLines(frase, conexao)
close(conexao)
cat("Arquivo gravado com sucesso!\n")`,
    testCases: [
      { values: { nomeArquivo: "teste.txt", frase: "Hello" }, result: "Arquivo criado", stepByStep: "Abre para escrita ('w'), escreve a linha, fecha." }
    ],
    explanation: "Modo 'w' cria um novo arquivo ou sobrescreve o existente. `writeLines` escreve o vetor de strings no arquivo."
  },
  {
    id: 3,
    nivel: 1,
    title: "Append em Arquivo",
    statement: "Escreva um programa que adicione (append) uma nova linha ao final de um arquivo existente. Peça ao usuário o nome do arquivo e a linha a adicionar.",
    input: "arquivo = 'log.txt', linha = 'Nova entrada'",
    output: "Linha adicionada ao final",
    code: `# Adicionar ao final do arquivo
cat("Informe o nome do arquivo: ")
nomeArquivo <- readline()
cat("Informe a linha a adicionar: ")
linha <- readline()

conexao <- file(nomeArquivo, "a")
writeLines(linha, conexao)
close(conexao)
cat("Linha adicionada ao final do arquivo!\n")`,
    testCases: [
      { values: { nomeArquivo: "log.txt", linha: "Nova entrada" }, result: "Arquivo com linha no final", stepByStep: "Modo 'a' abre para adicionar ao final." }
    ],
    explanation: "Modo 'a' (append) posiciona o ponteiro no final do arquivo para escrita. `writeLines` adiciona a linha."
  },

  // NÍVEL 2 - PROCESSAMENTO DE ARQUIVOS (exercícios 4-6)
  {
    id: 4,
    nivel: 2,
    title: "Contar Linhas de um Arquivo",
    statement: "Leia um arquivo texto e conte quantas linhas ele possui. Exiba o resultado.",
    input: "Arquivo com várias linhas",
    output: "Número de linhas",
    code: `# Contar linhas de um arquivo
conexao <- file("dados.txt", "r")
linhas <- readLines(conexao)
close(conexao)
qtde <- length(linhas)
cat("O arquivo possui", qtde, "linhas.\n")`,
    testCases: [
      { values: { arquivo: "3 linhas" }, result: "3 linhas", stepByStep: "Lê todas as linhas, `length` conta." }
    ],
    explanation: "`readLines` lê todas as linhas para um vetor; `length` retorna o número de linhas."
  },
  {
    id: 5,
    nivel: 2,
    title: "Copiar Arquivo",
    statement: "Crie um programa que copie o conteúdo de um arquivo de origem para um arquivo de destino (ambos informados pelo usuário).",
    input: "origem = 'origem.txt', destino = 'copia.txt'",
    output: "Arquivo copiado",
    code: `# Copiar arquivo
cat("Informe o nome do arquivo de origem: ")
origem <- readline()
cat("Informe o nome do arquivo de destino: ")
destino <- readline()

file.copy(origem, destino, overwrite = TRUE)
cat("Cópia concluída!\n")`,
    testCases: [
      { values: { origem: "origem.txt", destino: "copia.txt" }, result: "Arquivo copiado", stepByStep: "`file.copy` copia o arquivo." }
    ],
    explanation: "A função `file.copy` copia arquivos de forma nativa. `overwrite = TRUE` sobrescreve se o destino existir."
  },
  {
    id: 6,
    nivel: 2,
    title: "Somar Números de um Arquivo",
    statement: "Leia um arquivo contendo números inteiros (um por linha) e calcule a soma total. Mostre a soma.",
    input: "Arquivo 'numeros.txt' com: 10\\n20\\n30",
    output: "Soma = 60",
    code: `# Somar números de um arquivo
conexao <- file("numeros.txt", "r")
linhas <- readLines(conexao)
close(conexao)
numeros <- as.numeric(linhas)
soma <- sum(numeros)
cat("A soma dos números é:", soma, "\n")`,
    testCases: [
      { values: { numeros: [10,20,30] }, result: 60, stepByStep: "Converte cada linha para numérico e soma." }
    ],
    explanation: "`readLines` lê todas as linhas, `as.numeric` converte para números (valores não numéricos se tornam NA, ignorados em `sum`)."
  },

  // NÍVEL 3 - ESTRUTURAS E ANÁLISE (exercícios 7-9)
  {
    id: 7,
    nivel: 3,
    title: "Arquivo de Notas - Média",
    statement: "Leia um arquivo contendo notas de alunos (uma por linha). Calcule e exiba a média da turma.",
    input: "Arquivo 'notas.txt' com: 7.5\\n8.0\\n6.5\\n9.0",
    output: "Média = 7.75",
    code: `# Média das notas
conexao <- file("notas.txt", "r")
linhas <- readLines(conexao)
close(conexao)
notas <- as.numeric(linhas[linhas != ""])
if (length(notas) == 0) {
    cat("Arquivo vazio!\n")
} else {
    media <- mean(notas)
    cat("A média da turma é:", round(media, 2), "\n")
}`,
    testCases: [
      { values: { notas: [7.5,8.0,6.5,9.0] }, result: 7.75, stepByStep: "Converte para numérico, calcula a média." }
    ],
    explanation: "Filtra linhas vazias, converte para numérico e usa `mean` para calcular a média."
  },
  {
    id: 8,
    nivel: 3,
    title: "Maior e Menor Número",
    statement: "Leia um arquivo contendo números reais (um por linha) e encontre o maior e o menor valor. Exiba ambos.",
    input: "Arquivo 'dados.txt' com: 5.2\\n12.8\\n3.1\\n9.6",
    output: "Maior: 12.8, Menor: 3.1",
    code: `# Maior e menor número
conexao <- file("dados.txt", "r")
linhas <- readLines(conexao)
close(conexao)
numeros <- as.numeric(linhas[linhas != ""])
if (length(numeros) == 0) {
    cat("Arquivo vazio!\n")
} else {
    maior <- max(numeros)
    menor <- min(numeros)
    cat("Maior valor:", maior, "\n")
    cat("Menor valor:", menor, "\n")
}`,
    testCases: [
      { values: { numeros: [5.2,12.8,3.1,9.6] }, result: "maior=12.8, menor=3.1", stepByStep: "Lê e encontra máximo e mínimo." }
    ],
    explanation: "Usa `max` e `min` nos números lidos."
  },
  {
    id: 9,
    nivel: 3,
    title: "Filtrar Números Pares",
    statement: "Leia um arquivo com números inteiros (um por linha) e escreva em um novo arquivo apenas os números pares (um por linha).",
    input: "Arquivo 'numeros.txt' com: 1\\n2\\n3\\n4\\n5\\n6",
    output: "Arquivo 'pares.txt' com: 2\\n4\\n6",
    code: `# Filtrar números pares
conexao <- file("numeros.txt", "r")
linhas <- readLines(conexao)
close(conexao)
numeros <- as.integer(linhas)
pares <- numeros[numeros %% 2 == 0 & !is.na(numeros)]

conexao_saida <- file("pares.txt", "w")
writeLines(as.character(pares), conexao_saida)
close(conexao_saida)
cat("Números pares filtrados com sucesso!\n")`,
    testCases: [
      { values: { numeros: [1,2,3,4,5,6] }, result: "pares: 2,4,6", stepByStep: "Filtra pares e escreve." }
    ],
    explanation: "Filtra elementos pares com `%% 2 == 0`, converte para caractere e escreve com `writeLines`."
  },

  // NÍVEL 4 - PROCESSAMENTO AVANÇADO (exercício 10)
  {
    id: 10,
    nivel: 4,
    title: "Análise de Vendas",
    statement: "Leia um arquivo contendo vendas diárias de um mês (cada linha = valor da venda). Calcule: total de vendas, média, quantidade de vendas acima da média, e escreva um relatório em outro arquivo.",
    input: "Arquivo 'vendas.txt' com valores",
    output: "Relatório 'relatorio.txt' gerado",
    code: `# Análise de vendas
conexao <- file("vendas.txt", "r")
linhas <- readLines(conexao)
close(conexao)
vendas <- as.numeric(linhas[linhas != ""])
if (length(vendas) == 0) {
    cat("Arquivo de vendas vazio!\n")
} else {
    total <- sum(vendas)
    media <- mean(vendas)
    acima <- sum(vendas > media)

    relatorio <- c(
        "RELATÓRIO DE VENDAS",
        paste("Total de vendas: R$", round(total, 2)),
        paste("Média das vendas: R$", round(media, 2)),
        paste("Vendas acima da média:", acima)
    )

    conexao_saida <- file("relatorio.txt", "w")
    writeLines(relatorio, conexao_saida)
    close(conexao_saida)
    cat("Relatório gerado com sucesso!\n")
}`,
    testCases: [
      { values: { vendas: [1500,800,2000,1200] }, result: "total=5500, media=1375, acima=2", stepByStep: "Calcula total, média, conta acima e grava relatório." }
    ],
    explanation: "Lê todas as linhas, converte para numérico, calcula estatísticas e escreve o relatório com `writeLines`."
  }
];

// ========== RENDERIZAÇÃO DOS CONCEITOS ==========
function renderConceitosArquivos() {
  const langText = getLanguageDisplayName();
  
  return `
    <div class="content-card">
      <h2 class="card-title">📁 Manipulação de Arquivos em R</h2>
      <p>Em R, a manipulação de arquivos é feita principalmente com as funções <code>file()</code>, <code>readLines()</code>, <code>writeLines()</code>, <code>scan()</code>, <code>read.table()</code>, e as funções de alto nível como <code>read.csv()</code> para dados estruturados. Para arquivos de texto simples, usamos <code>readLines</code> e <code>writeLines</code>.</p>
      
      <div class="info-callout">
        <span class="info-icon-callout">📌</span>
        <div>
          <strong>Principais funções e modos:</strong><br>
          • <code>file(nome, modo)</code> – abre uma conexão com o arquivo.<br>
          • <code>readLines(conexao)</code> – lê todas as linhas para um vetor.<br>
          • <code>writeLines(texto, conexao)</code> – escreve um vetor de linhas.<br>
          • <code>close(conexao)</code> – fecha a conexão.<br>
          • <code>file.copy(origem, destino)</code> – copia arquivos.<br>
          • <code>file.exists(nome)</code> – verifica existência.<br>
          • Modos: <code>"r"</code> (leitura), <code>"w"</code> (escrita, sobrescreve), <code>"a"</code> (append).<br>
          • Funções de alto nível: <code>read.csv()</code>, <code>write.csv()</code>.
        </div>
      </div>
      
      <div class="code-example">
        <div class="code-example-header">
          <span class="code-icon">📝</span>
          <span>Leitura linha por linha</span>
        </div>
        <pre><code>con <- file("dados.txt", "r")
linhas <- readLines(con)
close(con)
cat(linhas, sep = "\n")</code></pre>
      </div>
    </div>
    
    <div class="content-card">
      <h2 class="card-title">📂 Modos de Abertura</h2>
      <div class="operators-table">
        <div class="operator-row header">
          <div>Modo</div>
          <div>Descrição</div>
        </div>
        <div class="operator-row">
          <div><code>"r"</code></div>
          <div>Leitura. O arquivo deve existir.</div>
        </div>
        <div class="operator-row">
          <div><code>"w"</code></div>
          <div>Escrita. Cria um novo arquivo ou sobrescreve.</div>
        </div>
        <div class="operator-row">
          <div><code>"a"</code></div>
          <div>Adicionar (append). Escreve no final.</div>
        </div>
      </div>
    </div>
    
    <div class="content-card">
      <h2 class="card-title">✍️ Escrita em Arquivos</h2>
      <div class="code-example">
        <div class="code-example-header">
          <span class="code-icon">📝</span>
          <span>Escrevendo com writeLines</span>
        </div>
        <pre><code>con <- file("saida.txt", "w")
writeLines(c("Linha 1", "Linha 2"), con)
close(con)</code></pre>
      </div>
      <div class="code-example">
        <div class="code-example-header">
          <span class="code-icon">📝</span>
          <span>Escrevendo com cat</span>
        </div>
        <pre><code>cat("Texto", file = "saida.txt")  # sobrescreve
cat("Mais texto", file = "saida.txt", append = TRUE)  # adiciona</code></pre>
      </div>
    </div>
    
    <div class="content-card">
      <h2 class="card-title">💡 Dicas Importantes</h2>
      <div class="info-callout">
        <span class="info-icon-callout">⚠️</span>
        <div>
          • Sempre feche as conexões após o uso com <code>close()</code>.<br>
          • Use <code>readLines</code> para arquivos pequenos; para grandes, use <code>scan</code> ou leia em blocos.<br>
          • A função <code>file.exists()</code> verifica se o arquivo existe antes de tentar abrir.<br>
          • Para dados estruturados, prefira <code>read.table()</code>, <code>read.csv()</code> e <code>write.table()</code>.
        </div>
      </div>
    </div>
  `;
}

// ========== RENDERIZAÇÃO DOS EXERCÍCIOS ==========
function renderExerciciosArquivos() {
  const currentEx = filesExercises.find(e => e.id === window.currentFilesExercise) || filesExercises[0];
  
  const niveis = {
    1: { nome: "⭐ Básico", cor: "#10b981" },
    2: { nome: "⭐⭐ Processamento", cor: "#f59e0b" },
    3: { nome: "⭐⭐⭐ Análise", cor: "#3b82f6" },
    4: { nome: "⭐⭐⭐⭐ Avançado", cor: "#8b5cf6" }
  };
  
  return `
    <div class="exercises-filter">
      <div class="filter-header">
        <span>📋 Exercícios de Manipulação de Arquivos (R)</span>
        <span class="filter-count">${filesExercises.length} exercícios disponíveis</span>
      </div>
      <div class="filter-buttons">
        ${filesExercises.map(ex => `
          <button class="filter-btn ${ex.id === window.currentFilesExercise ? 'active' : ''}" data-ex-id="${ex.id}" title="Nível ${ex.nivel}: ${niveis[ex.nivel].nome}">
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

// ========== PÁGINA COMPLETA DE ARQUIVOS ==========
function renderFilesPage() {
  const currentSubpage = window.currentFilesSubpage || 'conceitos';
  
  return `
    <div class="page-header">
      <h1 class="page-title"><span>💾</span> Manipulação de Arquivos em ${getLanguageDisplayName()}</h1>
      <p class="page-subtitle">Aprenda a ler e escrever dados em arquivos usando as funções nativas do R</p>
    </div>
    
    <div class="sub-nav">
      <button class="sub-nav-btn ${currentSubpage === 'conceitos' ? 'active' : ''}" data-subpage="conceitos">
        📘 Conceitos
      </button>
      <button class="sub-nav-btn ${currentSubpage === 'exercicios' ? 'active' : ''}" data-subpage="exercicios">
        ✏️ Exercícios
      </button>
    </div>
    
    <div id="files-content">
      ${currentSubpage === 'conceitos' ? renderConceitosArquivos() : renderExerciciosArquivos()}
    </div>
  `;
}