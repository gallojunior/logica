// ========== DADOS DOS EXERCÍCIOS DE ARQUIVOS EM RUBY ==========
const filesExercises = [
  // NÍVEL 1 - LEITURA BÁSICA (exercícios 1-3)
  {
    id: 1,
    nivel: 1,
    title: "Leitura de Arquivo e Exibição",
    statement: "Escreva um programa em Ruby que leia um arquivo chamado 'dados.txt' linha por linha e exiba seu conteúdo no console. Considere que o arquivo existe na mesma pasta.",
    input: "Arquivo 'dados.txt' com algumas linhas",
    output: "Conteúdo do arquivo exibido",
    code: `# Leitura de arquivo linha por linha
File.open("dados.txt", "r") do |arquivo|
  puts "Conteúdo do arquivo:"
  arquivo.each_line do |linha|
    puts linha
  end
end`,
    testCases: [
      { values: { arquivo: "dados.txt com 'Linha 1\\nLinha 2\\nLinha 3'" }, result: "Linha 1\\nLinha 2\\nLinha 3", stepByStep: "Abre arquivo, lê linha por linha e exibe." }
    ],
    explanation: "Usamos `File.open` com modo 'r' e bloco para garantir fechamento. `each_line` itera sobre as linhas."
  },
  {
    id: 2,
    nivel: 1,
    title: "Escrita de Arquivo",
    statement: "Crie um programa que solicite ao usuário o nome do arquivo e uma frase, e grave essa frase no arquivo (sobrescrevendo).",
    input: "arquivo = 'frase.txt', frase = 'Olá, mundo!'",
    output: "Arquivo criado com a frase",
    code: `# Escrita de arquivo (sobrescreve)
print "Informe o nome do arquivo: "
nome_arquivo = gets.chomp
print "Informe a frase a ser gravada: "
frase = gets.chomp

File.open(nome_arquivo, "w") do |arquivo|
  arquivo.puts frase
end
puts "Arquivo gravado com sucesso!"`,
    testCases: [
      { values: { nomeArquivo: "teste.txt", frase: "Hello" }, result: "Arquivo criado", stepByStep: "Abre para escrita ('w'), escreve a frase, fecha." }
    ],
    explanation: "Modo 'w' cria um novo arquivo ou sobrescreve o existente. `puts` adiciona quebra de linha automaticamente."
  },
  {
    id: 3,
    nivel: 1,
    title: "Append em Arquivo",
    statement: "Escreva um programa que adicione (append) uma nova linha ao final de um arquivo existente. Peça ao usuário o nome do arquivo e a linha a adicionar.",
    input: "arquivo = 'log.txt', linha = 'Nova entrada'",
    output: "Linha adicionada ao final",
    code: `# Adicionar ao final do arquivo
print "Informe o nome do arquivo: "
nome_arquivo = gets.chomp
print "Informe a linha a adicionar: "
linha = gets.chomp

File.open(nome_arquivo, "a") do |arquivo|
  arquivo.puts linha
end
puts "Linha adicionada ao final do arquivo!"`,
    testCases: [
      { values: { nomeArquivo: "log.txt", linha: "Nova entrada" }, result: "Arquivo com linha no final", stepByStep: "Modo 'a' abre para adicionar ao final." }
    ],
    explanation: "Modo 'a' (append) posiciona o ponteiro no final do arquivo para escrita."
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
linhas = File.readlines("dados.txt").size
puts "O arquivo possui #{linhas} linhas."`,
    testCases: [
      { values: { arquivo: "3 linhas" }, result: "3 linhas", stepByStep: "Lê todas as linhas e conta." }
    ],
    explanation: "`File.readlines` retorna um array com todas as linhas. O método `size` dá o número de linhas."
  },
  {
    id: 5,
    nivel: 2,
    title: "Copiar Arquivo",
    statement: "Crie um programa que copie o conteúdo de um arquivo de origem para um arquivo de destino (ambos informados pelo usuário).",
    input: "origem = 'origem.txt', destino = 'copia.txt'",
    output: "Arquivo copiado",
    code: `# Copiar arquivo
print "Informe o nome do arquivo de origem: "
origem = gets.chomp
print "Informe o nome do arquivo de destino: "
destino = gets.chomp

File.open(origem, "r") do |orig|
  File.open(destino, "w") do |dest|
    dest.write(orig.read)
  end
end
puts "Cópia concluída!"`,
    testCases: [
      { values: { origem: "origem.txt", destino: "copia.txt" }, result: "Arquivo copiado", stepByStep: "Lê todo conteúdo da origem e escreve no destino." }
    ],
    explanation: "Lemos todo o arquivo de origem com `read` e escrevemos no destino com `write`."
  },
  {
    id: 6,
    nivel: 2,
    title: "Somar Números de um Arquivo",
    statement: "Leia um arquivo contendo números inteiros (um por linha) e calcule a soma total. Mostre a soma.",
    input: "Arquivo 'numeros.txt' com: 10\\n20\\n30",
    output: "Soma = 60",
    code: `# Somar números de um arquivo
soma = 0
File.foreach("numeros.txt") do |linha|
  num = linha.to_i
  soma += num
end
puts "A soma dos números é: #{soma}"`,
    testCases: [
      { values: { numeros: [10,20,30] }, result: 60, stepByStep: "Converte cada linha para inteiro e acumula." }
    ],
    explanation: "`File.foreach` itera sobre cada linha. `to_i` converte a string para inteiro (ignora quebras de linha)."
  },

  // NÍVEL 3 - ESTRUTURAS E ANÁLISE (exercícios 7-9)
  {
    id: 7,
    nivel: 3,
    title: "Arquivo de Notas - Média",
    statement: "Leia um arquivo contendo notas de alunos (uma por linha). Calcule e exiba a média da turma.",
    input: "Arquivo 'notas.txt' com: 7.5\\n8.0\\n6.5\\n9.0",
    output: "Média = 7.75",
    code: `# Calcular média das notas
notas = File.readlines("notas.txt").map(&:to_f)
if notas.empty?
  puts "Arquivo vazio!"
else
  media = notas.sum / notas.size
  puts "A média da turma é: %.2f" % media
end`,
    testCases: [
      { values: { notas: [7.5,8.0,6.5,9.0] }, result: 7.75, stepByStep: "Acumula soma e conta; calcula média." }
    ],
    explanation: "Lê todas as linhas, converte para float com `map(&:to_f)`, calcula a média."
  },
  {
    id: 8,
    nivel: 3,
    title: "Maior e Menor Número",
    statement: "Leia um arquivo contendo números reais (um por linha) e encontre o maior e o menor valor. Exiba ambos.",
    input: "Arquivo 'dados.txt' com: 5.2\\n12.8\\n3.1\\n9.6",
    output: "Maior: 12.8, Menor: 3.1",
    code: `# Encontrar maior e menor número
numeros = File.readlines("dados.txt").map(&:to_f)
if numeros.empty?
  puts "Arquivo vazio!"
else
  maior = numeros.max
  menor = numeros.min
  puts "Maior valor: #{maior}"
  puts "Menor valor: #{menor}"
end`,
    testCases: [
      { values: { numeros: [5.2,12.8,3.1,9.6] }, result: "maior=12.8, menor=3.1", stepByStep: "Lê e encontra máximo e mínimo." }
    ],
    explanation: "Usamos `max` e `min` nos arrays."
  },
  {
    id: 9,
    nivel: 3,
    title: "Filtrar Números Pares",
    statement: "Leia um arquivo com números inteiros (um por linha) e escreva em um novo arquivo apenas os números pares (um por linha).",
    input: "Arquivo 'numeros.txt' com: 1\\n2\\n3\\n4\\n5\\n6",
    output: "Arquivo 'pares.txt' com: 2\\n4\\n6",
    code: `# Filtrar números pares
File.open("pares.txt", "w") do |saida|
  File.foreach("numeros.txt") do |linha|
    num = linha.to_i
    if num.even?
      saida.puts num
    end
  end
end
puts "Números pares filtrados com sucesso!"`,
    testCases: [
      { values: { numeros: [1,2,3,4,5,6] }, result: "pares: 2,4,6", stepByStep: "Verifica par e escreve no destino." }
    ],
    explanation: "Lê linha por linha, testa se é par com `even?`, e escreve no arquivo de saída."
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
vendas = File.readlines("vendas.txt").map(&:to_f)
if vendas.empty?
  puts "Arquivo de vendas vazio!"
else
  total = vendas.sum
  media = total / vendas.size
  acima = vendas.count { |v| v > media }

  relatorio = <<~REL
    RELATÓRIO DE VENDAS
    Total de vendas: R$ %.2f
    Média das vendas: R$ %.2f
    Vendas acima da média: %d
  REL
  relatorio = format(relatorio, total, media, acima)

  File.write("relatorio.txt", relatorio)
  puts "Relatório gerado com sucesso!"
end`,
    testCases: [
      { values: { vendas: [1500,800,2000,1200] }, result: "total=5500, media=1375, acima=2", stepByStep: "Calcula total, média, conta acima e grava relatório." }
    ],
    explanation: "Lê todos os valores, calcula total e média, conta os acima da média e escreve o relatório."
  }
];

// ========== RENDERIZAÇÃO DOS CONCEITOS ==========
function renderConceitosArquivos() {
  const langText = getLanguageDisplayName();
  
  return `
    <div class="content-card">
      <h2 class="card-title">📁 Manipulação de Arquivos em Ruby</h2>
      <p>Em Ruby, a manipulação de arquivos é feita através da classe <code>File</code>. Os métodos <code>File.open</code>, <code>File.read</code>, <code>File.write</code>, <code>File.foreach</code> e <code>File.readlines</code> são os mais comuns.</p>
      
      <div class="info-callout">
        <span class="info-icon-callout">📌</span>
        <div>
          <strong>Principais métodos e modos:</strong><br>
          • <code>File.open(nome, modo) { |f| ... }</code> – abre e fecha automaticamente<br>
          • <code>File.read(nome)</code> – lê todo o conteúdo como string<br>
          • <code>File.readlines(nome)</code> – lê todas as linhas em um array<br>
          • <code>File.write(nome, conteudo)</code> – escreve (sobrescreve)<br>
          • <code>File.foreach(nome) { |linha| ... }</code> – itera sobre linhas<br>
          • Modos: <code>"r"</code> (leitura), <code>"w"</code> (escrita, sobrescreve), <code>"a"</code> (append)
        </div>
      </div>
      
      <div class="code-example">
        <div class="code-example-header">
          <span class="code-icon">📝</span>
          <span>Leitura linha por linha com bloco</span>
        </div>
        <pre><code>File.open("dados.txt", "r") do |arquivo|
  arquivo.each_line do |linha|
    puts linha
  end
end</code></pre>
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
        <div class="operator-row">
          <div><code>"r+"</code></div>
          <div>Leitura e escrita, início do arquivo.</div>
        </div>
        <div class="operator-row">
          <div><code>"w+"</code></div>
          <div>Leitura e escrita, sobrescreve ou cria.</div>
        </div>
        <div class="operator-row">
          <div><code>"a+"</code></div>
          <div>Leitura e escrita, início para leitura, final para escrita.</div>
        </div>
      </div>
    </div>
    
    <div class="content-card">
      <h2 class="card-title">✍️ Escrita em Arquivos</h2>
      <div class="code-example">
        <div class="code-example-header">
          <span class="code-icon">📝</span>
          <span>Escrevendo com File.write</span>
        </div>
        <pre><code>File.write("saida.txt", "Olá mundo!\\n")</code></pre>
      </div>
      <div class="code-example">
        <div class="code-example-header">
          <span class="code-icon">📝</span>
          <span>Escrevendo linha a linha com bloco</span>
        </div>
        <pre><code>File.open("saida.txt", "w") do |f|
  f.puts "Primeira linha"
  f.puts "Segunda linha"
end</code></pre>
      </div>
    </div>
    
    <div class="content-card">
      <h2 class="card-title">💡 Dicas Importantes</h2>
      <div class="info-callout">
        <span class="info-icon-callout">⚠️</span>
        <div>
          • Sempre use blocos com <code>File.open</code> para garantir fechamento automático.<br>
          • Use <code>File.readlines</code> para arquivos pequenos, mas para arquivos grandes prefira <code>File.foreach</code>.<br>
          • Caminhos relativos são em relação ao diretório atual.<br>
          • Use <code>File.exist?(caminho)</code> para verificar se o arquivo existe.
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
        <span>📋 Exercícios de Manipulação de Arquivos (Ruby)</span>
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
      <p class="page-subtitle">Aprenda a ler e escrever dados em arquivos usando a classe File do Ruby</p>
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