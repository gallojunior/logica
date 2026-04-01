// js/python/files.js

// ========== DADOS DOS EXERCÍCIOS DE ARQUIVOS EM PYTHON ==========
const filesExercises = [
  // NÍVEL 1 - LEITURA BÁSICA (exercícios 1-3)
  {
    id: 1,
    nivel: 1,
    title: "Leitura de Arquivo e Exibição",
    statement: "Escreva um programa em Python que leia um arquivo chamado 'dados.txt' linha por linha e exiba seu conteúdo no console. Considere que o arquivo existe na mesma pasta.",
    input: "Arquivo 'dados.txt' com algumas linhas",
    output: "Conteúdo do arquivo exibido",
    code: `# Leitura de arquivo linha por linha
caminho = "dados.txt"
try:
    with open(caminho, "r", encoding="utf-8") as arquivo:
        print("Conteúdo do arquivo:")
        for linha in arquivo:
            print(linha, end="")
except FileNotFoundError:
    print("Arquivo não encontrado!")
except Exception as e:
    print(f"Erro: {e}")`,
    testCases: [
      { values: { arquivo: "dados.txt com 'Linha 1\\nLinha 2\\nLinha 3'" }, result: "Linha 1\\nLinha 2\\nLinha 3", stepByStep: "Abre arquivo, lê linha por linha e exibe." }
    ],
    explanation: "Usamos 'with open()' para abrir o arquivo em modo leitura ('r'). O laço 'for linha in arquivo' percorre cada linha automaticamente. A codificação utf-8 garante leitura correta de caracteres especiais."
  },
  {
    id: 2,
    nivel: 1,
    title: "Escrita de Arquivo",
    statement: "Crie um programa que solicite ao usuário o nome do arquivo e uma frase, e grave essa frase no arquivo (sobrescrevendo).",
    input: "arquivo = 'frase.txt', frase = 'Olá, mundo!'",
    output: "Arquivo criado com a frase",
    code: `# Escrita de arquivo (sobrescreve)
nome_arquivo = input("Informe o nome do arquivo: ")
frase = input("Informe a frase a ser gravada: ")

try:
    with open(nome_arquivo, "w", encoding="utf-8") as arquivo:
        arquivo.write(frase)
    print("Arquivo gravado com sucesso!")
except Exception as e:
    print(f"Erro: {e}")`,
    testCases: [
      { values: { nomeArquivo: "teste.txt", frase: "Hello" }, result: "Arquivo criado", stepByStep: "Abre para escrita ('w'), escreve a frase, fecha." }
    ],
    explanation: "Modo 'w' cria um novo arquivo ou sobrescreve o existente. Usamos write() para gravar a string. O with garante fechamento automático."
  },
  {
    id: 3,
    nivel: 1,
    title: "Append em Arquivo",
    statement: "Escreva um programa que adicione (append) uma nova linha ao final de um arquivo existente. Peça ao usuário o nome do arquivo e a linha a adicionar.",
    input: "arquivo = 'log.txt', linha = 'Nova entrada'",
    output: "Linha adicionada ao final",
    code: `# Adicionar ao final do arquivo
nome_arquivo = input("Informe o nome do arquivo: ")
linha = input("Informe a linha a adicionar: ")

try:
    with open(nome_arquivo, "a", encoding="utf-8") as arquivo:
        arquivo.write(linha + "\\n")
    print("Linha adicionada ao final do arquivo!")
except Exception as e:
    print(f"Erro: {e}")`,
    testCases: [
      { values: { nomeArquivo: "log.txt", linha: "Nova entrada" }, result: "Arquivo com linha no final", stepByStep: "Modo 'a' abre para adicionar ao final." }
    ],
    explanation: "Modo 'a' (append) posiciona o ponteiro no final do arquivo para escrita. Adicionamos quebra de linha para separar entradas."
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
caminho = "dados.txt"
try:
    with open(caminho, "r", encoding="utf-8") as arquivo:
        linhas = arquivo.readlines()
    print(f"O arquivo possui {len(linhas)} linhas.")
except FileNotFoundError:
    print("Arquivo não encontrado!")
except Exception as e:
    print(f"Erro: {e}")`,
    testCases: [
      { values: { arquivo: "3 linhas" }, result: "3 linhas", stepByStep: "Lê todas as linhas e conta." }
    ],
    explanation: "readlines() retorna uma lista com todas as linhas do arquivo. O tamanho da lista é o número de linhas."
  },
  {
    id: 5,
    nivel: 2,
    title: "Copiar Arquivo",
    statement: "Crie um programa que copie o conteúdo de um arquivo de origem para um arquivo de destino (ambos informados pelo usuário).",
    input: "origem = 'origem.txt', destino = 'copia.txt'",
    output: "Arquivo copiado",
    code: `# Copiar arquivo
origem = input("Informe o nome do arquivo de origem: ")
destino = input("Informe o nome do arquivo de destino: ")

try:
    with open(origem, "r", encoding="utf-8") as orig:
        conteudo = orig.read()
    with open(destino, "w", encoding="utf-8") as dest:
        dest.write(conteudo)
    print("Cópia concluída!")
except Exception as e:
    print(f"Erro: {e}")`,
    testCases: [
      { values: { origem: "origem.txt", destino: "copia.txt" }, result: "Arquivo copiado", stepByStep: "Lê todo conteúdo da origem e escreve no destino." }
    ],
    explanation: "Lemos todo o conteúdo do arquivo de origem com read() e escrevemos no destino com write()."
  },
  {
    id: 6,
    nivel: 2,
    title: "Somar Números de um Arquivo",
    statement: "Leia um arquivo contendo números inteiros (um por linha) e calcule a soma total. Mostre a soma.",
    input: "Arquivo 'numeros.txt' com: 10\\n20\\n30",
    output: "Soma = 60",
    code: `# Somar números de um arquivo
caminho = "numeros.txt"
try:
    with open(caminho, "r", encoding="utf-8") as arquivo:
        soma = 0
        for linha in arquivo:
            linha = linha.strip()
            if linha:
                try:
                    soma += int(linha)
                except ValueError:
                    print(f"Linha ignorada (não é número): {linha}")
    print(f"A soma dos números é: {soma}")
except FileNotFoundError:
    print("Arquivo não encontrado!")`,
    testCases: [
      { values: { numeros: [10,20,30] }, result: 60, stepByStep: "Converte cada linha para inteiro e acumula." }
    ],
    explanation: "Itera sobre as linhas, remove espaços e quebras de linha com strip(), converte para inteiro e soma."
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
caminho = "notas.txt"
try:
    with open(caminho, "r", encoding="utf-8") as arquivo:
        notas = []
        for linha in arquivo:
            linha = linha.strip()
            if linha:
                try:
                    notas.append(float(linha))
                except ValueError:
                    print(f"Linha ignorada (não é número): {linha}")
    if notas:
        media = sum(notas) / len(notas)
        print(f"A média da turma é: {media:.2f}")
    else:
        print("Arquivo vazio!")
except FileNotFoundError:
    print("Arquivo não encontrado!")`,
    testCases: [
      { values: { notas: [7.5,8.0,6.5,9.0] }, result: 7.75, stepByStep: "Acumula soma e conta; calcula média." }
    ],
    explanation: "Coleta todas as notas válidas, calcula a soma com sum() e divide pelo número de elementos."
  },
  {
    id: 8,
    nivel: 3,
    title: "Maior e Menor Número",
    statement: "Leia um arquivo contendo números reais (um por linha) e encontre o maior e o menor valor. Exiba ambos.",
    input: "Arquivo 'dados.txt' com: 5.2\\n12.8\\n3.1\\n9.6",
    output: "Maior: 12.8, Menor: 3.1",
    code: `# Encontrar maior e menor número
caminho = "dados.txt"
try:
    with open(caminho, "r", encoding="utf-8") as arquivo:
        numeros = []
        for linha in arquivo:
            linha = linha.strip()
            if linha:
                try:
                    numeros.append(float(linha))
                except ValueError:
                    print(f"Linha ignorada (não é número): {linha}")
    if numeros:
        maior = max(numeros)
        menor = min(numeros)
        print(f"Maior valor: {maior}")
        print(f"Menor valor: {menor}")
    else:
        print("Arquivo vazio!")
except FileNotFoundError:
    print("Arquivo não encontrado!")`,
    testCases: [
      { values: { numeros: [5.2,12.8,3.1,9.6] }, result: "maior=12.8, menor=3.1", stepByStep: "Lê e atualiza maior e menor." }
    ],
    explanation: "Usamos as funções embutidas max() e min() para encontrar os valores extremos."
  },
  {
    id: 9,
    nivel: 3,
    title: "Filtrar Números Pares",
    statement: "Leia um arquivo com números inteiros (um por linha) e escreva em um novo arquivo apenas os números pares (um por linha).",
    input: "Arquivo 'numeros.txt' com: 1\\n2\\n3\\n4\\n5\\n6",
    output: "Arquivo 'pares.txt' com: 2\\n4\\n6",
    code: `# Filtrar números pares
caminho_entrada = "numeros.txt"
caminho_saida = "pares.txt"
try:
    with open(caminho_entrada, "r", encoding="utf-8") as entrada:
        pares = []
        for linha in entrada:
            linha = linha.strip()
            if linha:
                try:
                    num = int(linha)
                    if num % 2 == 0:
                        pares.append(str(num))
                except ValueError:
                    print(f"Linha ignorada (não é número): {linha}")
    if pares:
        with open(caminho_saida, "w", encoding="utf-8") as saida:
            saida.write("\\n".join(pares))
        print("Números pares filtrados com sucesso!")
    else:
        print("Nenhum número par encontrado.")
except FileNotFoundError:
    print("Arquivo de entrada não encontrado!")`,
    testCases: [
      { values: { numeros: [1,2,3,4,5,6] }, result: "pares: 2,4,6", stepByStep: "Verifica par e escreve no destino." }
    ],
    explanation: "Lê cada linha, converte para inteiro, testa paridade e acumula em uma lista. Depois escreve a lista no arquivo de saída usando join."
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
caminho_entrada = "vendas.txt"
caminho_saida = "relatorio.txt"
try:
    with open(caminho_entrada, "r", encoding="utf-8") as entrada:
        vendas = []
        for linha in entrada:
            linha = linha.strip()
            if linha:
                try:
                    vendas.append(float(linha))
                except ValueError:
                    print(f"Linha ignorada (não é número): {linha}")
    if not vendas:
        print("Arquivo de vendas vazio!")
    else:
        total = sum(vendas)
        media = total / len(vendas)
        acima = sum(1 for v in vendas if v > media)
        relatorio = f"""RELATÓRIO DE VENDAS
Total de vendas: R$ {total:.2f}
Média das vendas: R$ {media:.2f}
Vendas acima da média: {acima}"""
        with open(caminho_saida, "w", encoding="utf-8") as saida:
            saida.write(relatorio)
        print("Relatório gerado com sucesso!")
except FileNotFoundError:
    print("Arquivo de vendas não encontrado!")`,
    testCases: [
      { values: { vendas: [1500,800,2000,1200] }, result: "total=5500, media=1375, acima=2", stepByStep: "Calcula total, média, conta acima e grava relatório." }
    ],
    explanation: "Lê todos os valores, calcula total e média, conta quantos estão acima da média usando uma generator expression, e escreve o relatório formatado."
  }
];

// ========== RENDERIZAÇÃO DOS CONCEITOS ==========
function renderConceitosArquivos() {
  const langText = getLanguageDisplayName();
  
  return `
    <div class="content-card">
      <h2 class="card-title">📁 Manipulação de Arquivos em Python</h2>
      <p>Em Python, a manipulação de arquivos é feita através da função nativa <code>open()</code>. Ela retorna um objeto arquivo com métodos como <code>read()</code>, <code>write()</code>, <code>readline()</code>, etc. O uso do <code>with</code> é recomendado para garantir o fechamento automático do arquivo.</p>
      
      <div class="info-callout">
        <span class="info-icon-callout">📌</span>
        <div>
          <strong>Principais modos de abertura:</strong><br>
          • <code>"r"</code> – leitura (padrão). O arquivo deve existir.<br>
          • <code>"w"</code> – escrita. Cria um novo arquivo ou sobrescreve existente.<br>
          • <code>"a"</code> – adicionar (append). Escreve no final.<br>
          • <code>"x"</code> – criação exclusiva; falha se o arquivo já existir.<br>
          • <code>"b"</code> – modo binário (ex.: <code>"rb"</code>, <code>"wb"</code>).<br>
          • <code>"+"</code> – leitura e escrita (ex.: <code>"r+"</code>, <code>"w+"</code>).
        </div>
      </div>
      
      <div class="code-example">
        <div class="code-example-header">
          <span class="code-icon">📝</span>
          <span>Abrindo um arquivo com with</span>
        </div>
        <pre><code>with open("dados.txt", "r", encoding="utf-8") as arquivo:
    conteudo = arquivo.read()</code></pre>
      </div>
    </div>
    
    <div class="content-card">
      <h2 class="card-title">📖 Leitura de Arquivos</h2>
      <div class="code-example">
        <div class="code-example-header">
          <span class="code-icon">📝</span>
          <span>Lendo todo o conteúdo</span>
        </div>
        <pre><code>with open("dados.txt", "r") as f:
    texto = f.read()          # string inteira
    linhas = f.readlines()    # lista de linhas</code></pre>
      </div>
      <div class="code-example">
        <div class="code-example-header">
          <span class="code-icon">📝</span>
          <span>Lendo linha por linha</span>
        </div>
        <pre><code>with open("dados.txt", "r") as f:
    for linha in f:
        print(linha, end="")</code></pre>
      </div>
    </div>
    
    <div class="content-card">
      <h2 class="card-title">✍️ Escrita em Arquivos</h2>
      <div class="code-example">
        <div class="code-example-header">
          <span class="code-icon">📝</span>
          <span>Escrevendo texto</span>
        </div>
        <pre><code>with open("saida.txt", "w") as f:
    f.write("Olá mundo!\\n")
    f.writelines(["Linha 1\\n", "Linha 2\\n"])</code></pre>
      </div>
      <div class="code-example">
        <div class="code-example-header">
          <span class="code-icon">📝</span>
          <span>Adicionando ao final</span>
        </div>
        <pre><code>with open("log.txt", "a") as f:
    f.write("Nova linha\\n")</code></pre>
      </div>
    </div>
    
    <div class="content-card">
      <h2 class="card-title">💡 Dicas Importantes</h2>
      <div class="info-callout">
        <span class="info-icon-callout">⚠️</span>
        <div>
          • Sempre use <code>with</code> para garantir que o arquivo seja fechado corretamente.<br>
          • Especifique a codificação (<code>encoding="utf-8"</code>) para evitar problemas com caracteres especiais.<br>
          • Ao ler números, use <code>strip()</code> para remover quebras de linha e espaços.<br>
          • Trate exceções com <code>try/except</code> (ex.: <code>FileNotFoundError</code>).<br>
          • Para arquivos grandes, prefira iterar linha a linha em vez de carregar tudo na memória.
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
        <span>📋 Exercícios de Manipulação de Arquivos (Python)</span>
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
      <p class="page-subtitle">Aprenda a ler e escrever dados em arquivos usando funções nativas de Python</p>
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