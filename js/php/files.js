// ========== DADOS DOS EXERCÍCIOS DE ARQUIVOS EM PHP ==========
const filesExercises = [
  // NÍVEL 1 - LEITURA BÁSICA (exercícios 1-3)
  {
    id: 1,
    nivel: 1,
    title: "Leitura de Arquivo e Exibição",
    statement: "Escreva um programa em PHP que leia um arquivo chamado 'dados.txt' linha por linha e exiba seu conteúdo no console. Considere que o arquivo existe na mesma pasta.",
    input: "Arquivo 'dados.txt' com algumas linhas",
    output: "Conteúdo do arquivo exibido",
    code: `<?php
$arquivo = fopen("dados.txt", "r");
if ($arquivo) {
    echo "Conteúdo do arquivo:\n";
    while (($linha = fgets($arquivo)) !== false) {
        echo $linha;
    }
    fclose($arquivo);
} else {
    echo "Erro ao abrir o arquivo.\n";
}
?>`,
    testCases: [
      { values: { arquivo: "dados.txt com 'Linha 1\\nLinha 2\\nLinha 3'" }, result: "Linha 1\\nLinha 2\\nLinha 3", stepByStep: "Abre arquivo, lê linha por linha e exibe." }
    ],
    explanation: "Usamos `fopen` com modo 'r' para abrir o arquivo. `fgets` lê linha por linha até o final. `fclose` fecha o recurso."
  },
  {
    id: 2,
    nivel: 1,
    title: "Escrita de Arquivo",
    statement: "Crie um programa que solicite ao usuário o nome do arquivo e uma frase, e grave essa frase no arquivo (sobrescrevendo).",
    input: "arquivo = 'frase.txt', frase = 'Olá, mundo!'",
    output: "Arquivo criado com a frase",
    code: `<?php
echo "Informe o nome do arquivo: ";
$nomeArquivo = trim(fgets(STDIN));
echo "Informe a frase a ser gravada: ";
$frase = trim(fgets(STDIN));

$arquivo = fopen($nomeArquivo, "w");
if ($arquivo) {
    fwrite($arquivo, $frase . "\n");
    fclose($arquivo);
    echo "Arquivo gravado com sucesso!\n";
} else {
    echo "Erro ao abrir o arquivo.\n";
}
?>`,
    testCases: [
      { values: { nomeArquivo: "teste.txt", frase: "Hello" }, result: "Arquivo criado", stepByStep: "Abre para escrita ('w'), escreve a frase, fecha." }
    ],
    explanation: "Modo 'w' cria um novo arquivo ou sobrescreve o existente. `fwrite` grava a string."
  },
  {
    id: 3,
    nivel: 1,
    title: "Append em Arquivo",
    statement: "Escreva um programa que adicione (append) uma nova linha ao final de um arquivo existente. Peça ao usuário o nome do arquivo e a linha a adicionar.",
    input: "arquivo = 'log.txt', linha = 'Nova entrada'",
    output: "Linha adicionada ao final",
    code: `<?php
echo "Informe o nome do arquivo: ";
$nomeArquivo = trim(fgets(STDIN));
echo "Informe a linha a adicionar: ";
$linha = trim(fgets(STDIN));

$arquivo = fopen($nomeArquivo, "a");
if ($arquivo) {
    fwrite($arquivo, $linha . "\n");
    fclose($arquivo);
    echo "Linha adicionada ao final do arquivo!\n";
} else {
    echo "Erro ao abrir o arquivo.\n";
}
?>`,
    testCases: [
      { values: { nomeArquivo: "log.txt", linha: "Nova entrada" }, result: "Arquivo com linha no final", stepByStep: "Modo 'a' abre para adicionar ao final." }
    ],
    explanation: "Modo 'a' posiciona o ponteiro no final do arquivo para escrita."
  },

  // NÍVEL 2 - PROCESSAMENTO DE ARQUIVOS (exercícios 4-6)
  {
    id: 4,
    nivel: 2,
    title: "Contar Linhas de um Arquivo",
    statement: "Leia um arquivo texto e conte quantas linhas ele possui. Exiba o resultado.",
    input: "Arquivo com várias linhas",
    output: "Número de linhas",
    code: `<?php
$linhas = file("dados.txt");
if ($linhas === false) {
    echo "Erro ao ler arquivo.\n";
} else {
    $qtde = count($linhas);
    echo "O arquivo possui $qtde linhas.\n";
}
?>`,
    testCases: [
      { values: { arquivo: "3 linhas" }, result: "3 linhas", stepByStep: "`file` lê todas as linhas em um array; `count` dá o total." }
    ],
    explanation: "`file()` lê todo o arquivo e retorna um array de linhas. `count()` obtém o número de elementos."
  },
  {
    id: 5,
    nivel: 2,
    title: "Copiar Arquivo",
    statement: "Crie um programa que copie o conteúdo de um arquivo de origem para um arquivo de destino (ambos informados pelo usuário).",
    input: "origem = 'origem.txt', destino = 'copia.txt'",
    output: "Arquivo copiado",
    code: `<?php
echo "Informe o nome do arquivo de origem: ";
$origem = trim(fgets(STDIN));
echo "Informe o nome do arquivo de destino: ";
$destino = trim(fgets(STDIN));

if (copy($origem, $destino)) {
    echo "Cópia concluída!\n";
} else {
    echo "Erro ao copiar arquivo.\n";
}
?>`,
    testCases: [
      { values: { origem: "origem.txt", destino: "copia.txt" }, result: "Arquivo copiado", stepByStep: "`copy` copia o conteúdo do arquivo origem para destino." }
    ],
    explanation: "A função `copy` faz a cópia de forma nativa."
  },
  {
    id: 6,
    nivel: 2,
    title: "Somar Números de um Arquivo",
    statement: "Leia um arquivo contendo números inteiros (um por linha) e calcule a soma total. Mostre a soma.",
    input: "Arquivo 'numeros.txt' com: 10\\n20\\n30",
    output: "Soma = 60",
    code: `<?php
$linhas = file("numeros.txt");
if ($linhas === false) {
    echo "Erro ao ler arquivo.\n";
} else {
    $soma = 0;
    foreach ($linhas as $linha) {
        $num = (int) trim($linha);
        $soma += $num;
    }
    echo "A soma dos números é: $soma\n";
}
?>`,
    testCases: [
      { values: { numeros: [10,20,30] }, result: 60, stepByStep: "Converte cada linha para inteiro e acumula." }
    ],
    explanation: "Lê todas as linhas, converte para inteiro e soma."
  },

  // NÍVEL 3 - ESTRUTURAS E ANÁLISE (exercícios 7-9)
  {
    id: 7,
    nivel: 3,
    title: "Arquivo de Notas - Média",
    statement: "Leia um arquivo contendo notas de alunos (uma por linha). Calcule e exiba a média da turma.",
    input: "Arquivo 'notas.txt' com: 7.5\\n8.0\\n6.5\\n9.0",
    output: "Média = 7.75",
    code: `<?php
$linhas = file("notas.txt");
if ($linhas === false) {
    echo "Erro ao ler arquivo.\n";
} else {
    $notas = [];
    foreach ($linhas as $linha) {
        $nota = (float) trim($linha);
        if (is_numeric($linha)) {
            $notas[] = $nota;
        }
    }
    if (count($notas) == 0) {
        echo "Arquivo vazio!\n";
    } else {
        $media = array_sum($notas) / count($notas);
        echo "A média da turma é: " . round($media, 2) . "\n";
    }
}
?>`,
    testCases: [
      { values: { notas: [7.5,8.0,6.5,9.0] }, result: 7.75, stepByStep: "Acumula soma e conta; calcula média." }
    ],
    explanation: "Coleta todas as notas válidas, usa `array_sum` e divide pelo total."
  },
  {
    id: 8,
    nivel: 3,
    title: "Maior e Menor Número",
    statement: "Leia um arquivo contendo números reais (um por linha) e encontre o maior e o menor valor. Exiba ambos.",
    input: "Arquivo 'dados.txt' com: 5.2\\n12.8\\n3.1\\n9.6",
    output: "Maior: 12.8, Menor: 3.1",
    code: `<?php
$linhas = file("dados.txt");
if ($linhas === false) {
    echo "Erro ao ler arquivo.\n";
} else {
    $numeros = [];
    foreach ($linhas as $linha) {
        $num = (float) trim($linha);
        if (is_numeric($linha)) {
            $numeros[] = $num;
        }
    }
    if (count($numeros) == 0) {
        echo "Arquivo vazio!\n";
    } else {
        $maior = max($numeros);
        $menor = min($numeros);
        echo "Maior valor: $maior\n";
        echo "Menor valor: $menor\n";
    }
}
?>`,
    testCases: [
      { values: { numeros: [5.2,12.8,3.1,9.6] }, result: "maior=12.8, menor=3.1", stepByStep: "Lê e encontra máximo e mínimo." }
    ],
    explanation: "Usa `max()` e `min()` nos arrays."
  },
  {
    id: 9,
    nivel: 3,
    title: "Filtrar Números Pares",
    statement: "Leia um arquivo com números inteiros (um por linha) e escreva em um novo arquivo apenas os números pares (um por linha).",
    input: "Arquivo 'numeros.txt' com: 1\\n2\\n3\\n4\\n5\\n6",
    output: "Arquivo 'pares.txt' com: 2\\n4\\n6",
    code: `<?php
$entrada = file("numeros.txt");
if ($entrada === false) {
    echo "Erro ao ler arquivo de entrada.\n";
    exit;
}
$pares = [];
foreach ($entrada as $linha) {
    $num = (int) trim($linha);
    if ($num % 2 == 0) {
        $pares[] = $num;
    }
}
file_put_contents("pares.txt", implode("\n", $pares));
echo "Números pares filtrados com sucesso!\n";
?>`,
    testCases: [
      { values: { numeros: [1,2,3,4,5,6] }, result: "pares: 2,4,6", stepByStep: "Verifica par e escreve no destino." }
    ],
    explanation: "Lê todas as linhas, filtra pares, usa `implode` para juntar com quebras de linha e `file_put_contents` para escrever."
  },

  // NÍVEL 4 - PROCESSAMENTO AVANÇADO (exercício 10)
  {
    id: 10,
    nivel: 4,
    title: "Análise de Vendas",
    statement: "Leia um arquivo contendo vendas diárias de um mês (cada linha = valor da venda). Calcule: total de vendas, média, quantidade de vendas acima da média, e escreva um relatório em outro arquivo.",
    input: "Arquivo 'vendas.txt' com valores",
    output: "Relatório 'relatorio.txt' gerado",
    code: `<?php
$linhas = file("vendas.txt");
if ($linhas === false) {
    echo "Erro ao ler arquivo de vendas.\n";
    exit;
}
$vendas = [];
foreach ($linhas as $linha) {
    $v = (float) trim($linha);
    if (is_numeric($linha)) {
        $vendas[] = $v;
    }
}
if (count($vendas) == 0) {
    echo "Arquivo de vendas vazio!\n";
    exit;
}
$total = array_sum($vendas);
$media = $total / count($vendas);
$acima = 0;
foreach ($vendas as $v) {
    if ($v > $media) $acima++;
}
$relatorio = "RELATÓRIO DE VENDAS\n";
$relatorio .= "Total de vendas: R$ " . number_format($total, 2) . "\n";
$relatorio .= "Média das vendas: R$ " . number_format($media, 2) . "\n";
$relatorio .= "Vendas acima da média: $acima\n";
file_put_contents("relatorio.txt", $relatorio);
echo "Relatório gerado com sucesso!\n";
?>`,
    testCases: [
      { values: { vendas: [1500,800,2000,1200] }, result: "total=5500, media=1375, acima=2", stepByStep: "Calcula total, média, conta acima e grava relatório." }
    ],
    explanation: "Lê todos os valores, calcula total e média, conta os acima da média e escreve o relatório com `file_put_contents`."
  }
];

// ========== RENDERIZAÇÃO DOS CONCEITOS ==========
function renderConceitosArquivos() {
  const langText = getLanguageDisplayName();
  
  return `
    <div class="content-card">
      <h2 class="card-title">📁 Manipulação de Arquivos em PHP</h2>
      <p>Em PHP, a manipulação de arquivos é feita através de funções como <code>fopen()</code>, <code>fgets()</code>, <code>fwrite()</code>, <code>fclose()</code>, <code>file()</code>, <code>file_get_contents()</code> e <code>file_put_contents()</code>.</p>
      
      <div class="info-callout">
        <span class="info-icon-callout">📌</span>
        <div>
          <strong>Principais funções e modos:</strong><br>
          • <code>fopen($nome, $modo)</code> – abre arquivo, retorna recurso.<br>
          • <code>fgets($recurso)</code> – lê uma linha.<br>
          • <code>fwrite($recurso, $dados)</code> – escreve.<br>
          • <code>fclose($recurso)</code> – fecha.<br>
          • <code>file($nome)</code> – lê todas as linhas em array.<br>
          • <code>file_get_contents($nome)</code> – lê todo arquivo como string.<br>
          • <code>file_put_contents($nome, $dados)</code> – escreve (sobrescreve).<br>
          • <code>copy($origem, $destino)</code> – copia arquivo.
        </div>
      </div>
      
      <div class="code-example">
        <div class="code-example-header">
          <span class="code-icon">📝</span>
          <span>Leitura linha por linha com fopen</span>
        </div>
        <pre><code>$arquivo = fopen("dados.txt", "r");
if ($arquivo) {
    while (($linha = fgets($arquivo)) !== false) {
        echo $linha;
    }
    fclose($arquivo);
}</code></pre>
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
          <div>Escrita. Cria ou sobrescreve.</div>
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
      </div>
    </div>
    
    <div class="content-card">
      <h2 class="card-title">✍️ Escrita em Arquivos</h2>
      <div class="code-example">
        <div class="code-example-header">
          <span class="code-icon">📝</span>
          <span>Escrevendo com file_put_contents</span>
        </div>
        <pre><code>$conteudo = "Linha 1\nLinha 2\n";
file_put_contents("saida.txt", $conteudo);</code></pre>
      </div>
      <div class="code-example">
        <div class="code-example-header">
          <span class="code-icon">📝</span>
          <span>Escrevendo com fwrite</span>
        </div>
        <pre><code>$arquivo = fopen("saida.txt", "w");
fwrite($arquivo, "Olá mundo!\n");
fclose($arquivo);</code></pre>
      </div>
    </div>
    
    <div class="content-card">
      <h2 class="card-title">💡 Dicas Importantes</h2>
      <div class="info-callout">
        <span class="info-icon-callout">⚠️</span>
        <div>
          • Sempre verifique se o arquivo foi aberto corretamente (<code>fopen</code> retorna false em erro).<br>
          • Use <code>file_exists()</code> para verificar existência.<br>
          • Para arquivos grandes, prefira leitura linha a linha com <code>fgets</code> em vez de <code>file()</code>.<br>
          • Use <code>trim()</code> para remover quebras de linha e espaços.<br>
          • As funções <code>file_get_contents</code> e <code>file_put_contents</code> são práticas para arquivos pequenos.
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
        <span>📋 Exercícios de Manipulação de Arquivos (PHP)</span>
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
      <p class="page-subtitle">Aprenda a ler e escrever dados em arquivos usando as funções nativas do PHP</p>
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