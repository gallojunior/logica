// js/portugol/files.js

// ========== DADOS DOS EXERCÍCIOS DE ARQUIVOS EM PORTUGOL ==========
const filesExercises = [
  // NÍVEL 1 - LEITURA BÁSICA (exercícios 1-3)
  {
    id: 1,
    nivel: 1,
    title: "Leitura de Arquivo e Exibição",
    statement: "Escreva um programa que leia um arquivo chamado 'dados.txt' linha por linha e exiba seu conteúdo na tela. Considere que o arquivo existe e está na mesma pasta.",
    input: "Arquivo 'dados.txt' com algumas linhas",
    output: "Conteúdo do arquivo exibido",
    code: `programa {
  inclua biblioteca Arquivos --> a

  funcao inicio() {
    inteiro endereco = a.abrir_arquivo("./dados.txt", a.MODO_LEITURA)
    
    se (endereco != -1) {
      escreva("Conteúdo do arquivo:\\n")
      enquanto (a.fim_arquivo(endereco) == falso) {
        cadeia linha = a.ler_linha(endereco)
        escreva(linha, "\\n")
      }
      a.fechar_arquivo(endereco)
    } senao {
      escreva("Erro ao abrir o arquivo.")
    }
  }
}`,
    testCases: [
      { values: { arquivo: "dados.txt com 'Linha 1\\nLinha 2\\nLinha 3'" }, result: "Linha 1\\nLinha 2\\nLinha 3", stepByStep: "Abre arquivo, lê linha por linha e exibe" }
    ],
    explanation: "Usamos a biblioteca Arquivos. 'abrir_arquivo' retorna um identificador (inteiro) que usamos nas demais funções. 'fim_arquivo' verifica se chegou ao final. 'ler_linha' lê a próxima linha."
  },
  {
    id: 2,
    nivel: 1,
    title: "Escrita de Arquivo",
    statement: "Crie um programa que solicite ao usuário o nome do arquivo e uma frase, e grave essa frase no arquivo (sobrescrevendo).",
    input: "arquivo = 'frase.txt', frase = 'Olá, mundo!'",
    output: "Arquivo criado com a frase",
    code: `programa {
  inclua biblioteca Arquivos --> a

  funcao inicio() {
    cadeia nomeArquivo, frase
    
    escreva("Informe o nome do arquivo: ")
    leia(nomeArquivo)
    escreva("Informe a frase a ser gravada: ")
    leia(frase)
    
    inteiro endereco = a.abrir_arquivo("./" + nomeArquivo, a.MODO_ESCRITA)
    
    se (endereco != -1) {
      a.escrever_linha(frase, endereco)
      a.fechar_arquivo(endereco)
      escreva("Arquivo gravado com sucesso!")
    } senao {
      escreva("Erro ao abrir o arquivo.")
    }
  }
}`,
    testCases: [
      { values: { nomeArquivo: "teste.txt", frase: "Hello" }, result: "Arquivo criado", stepByStep: "Abre para escrita ('MODO_ESCRITA'), escreve a frase, fecha." }
    ],
    explanation: "Modo MODO_ESCRITA cria um novo arquivo ou sobrescreve o existente. Usamos escrever_linha para gravar uma linha."
  },
  {
    id: 3,
    nivel: 1,
    title: "Append em Arquivo",
    statement: "Escreva um programa que adicione (append) uma nova linha ao final de um arquivo existente. Peça ao usuário o nome do arquivo e a linha a adicionar.",
    input: "arquivo = 'log.txt', linha = 'Nova entrada'",
    output: "Linha adicionada ao final",
    code: `programa {
  inclua biblioteca Arquivos --> a

  funcao inicio() {
    cadeia nomeArquivo, linha
    
    escreva("Informe o nome do arquivo: ")
    leia(nomeArquivo)
    escreva("Informe a linha a adicionar: ")
    leia(linha)
    
    inteiro endereco = a.abrir_arquivo("./" + nomeArquivo, a.MODO_ADICIONAR)
    
    se (endereco != -1) {
      a.escrever_linha(linha, endereco)
      a.fechar_arquivo(endereco)
      escreva("Linha adicionada ao final do arquivo!")
    } senao {
      escreva("Erro ao abrir o arquivo.")
    }
  }
}`,
    testCases: [
      { values: { nomeArquivo: "log.txt", linha: "Nova entrada" }, result: "Arquivo com linha no final", stepByStep: "Modo MODO_ADICIONAR abre para adicionar ao final." }
    ],
    explanation: "Modo MODO_ADICIONAR posiciona o ponteiro no final do arquivo para escrita."
  },

  // NÍVEL 2 - PROCESSAMENTO DE ARQUIVOS (exercícios 4-6)
  {
    id: 4,
    nivel: 2,
    title: "Contar Linhas de um Arquivo",
    statement: "Leia um arquivo texto e conte quantas linhas ele possui. Exiba o resultado.",
    input: "Arquivo com várias linhas",
    output: "Número de linhas",
    code: `programa {
  inclua biblioteca Arquivos --> a

  funcao inicio() {
    inteiro endereco = a.abrir_arquivo("./dados.txt", a.MODO_LEITURA)
    inteiro contador = 0
    
    se (endereco != -1) {
      enquanto (a.fim_arquivo(endereco) == falso) {
        a.ler_linha(endereco) // lê e descarta
        contador++
      }
      a.fechar_arquivo(endereco)
      escreva("O arquivo possui ", contador, " linhas.")
    } senao {
      escreva("Erro ao abrir o arquivo.")
    }
  }
}`,
    testCases: [
      { values: { arquivo: "3 linhas" }, result: "3 linhas", stepByStep: "Lê linha por linha e incrementa contador." }
    ],
    explanation: "Contador incrementado a cada linha lida. A função ler_linha avança o ponteiro."
  },
  {
    id: 5,
    nivel: 2,
    title: "Copiar Arquivo",
    statement: "Crie um programa que copie o conteúdo de um arquivo de origem para um arquivo de destino (ambos informados pelo usuário).",
    input: "origem = 'origem.txt', destino = 'copia.txt'",
    output: "Arquivo copiado",
    code: `programa {
  inclua biblioteca Arquivos --> a

  funcao inicio() {
    cadeia nomeOrigem, nomeDestino
    
    escreva("Informe o nome do arquivo de origem: ")
    leia(nomeOrigem)
    escreva("Informe o nome do arquivo de destino: ")
    leia(nomeDestino)
    
    inteiro endOrigem = a.abrir_arquivo("./" + nomeOrigem, a.MODO_LEITURA)
    inteiro endDestino = a.abrir_arquivo("./" + nomeDestino, a.MODO_ESCRITA)
    
    se (endOrigem != -1 e endDestino != -1) {
      enquanto (a.fim_arquivo(endOrigem) == falso) {
        cadeia linha = a.ler_linha(endOrigem)
        a.escrever_linha(linha, endDestino)
      }
      a.fechar_arquivo(endOrigem)
      a.fechar_arquivo(endDestino)
      escreva("Cópia concluída!")
    } senao {
      escreva("Erro ao abrir um dos arquivos.")
    }
  }
}`,
    testCases: [
      { values: { origem: "origem.txt", destino: "copia.txt" }, result: "Arquivo copiado", stepByStep: "Lê linha a linha da origem e escreve no destino." }
    ],
    explanation: "Abrimos dois arquivos: um para leitura e outro para escrita. O laço lê cada linha da origem e escreve no destino."
  },
  {
    id: 6,
    nivel: 2,
    title: "Somar Números de um Arquivo",
    statement: "Leia um arquivo contendo números inteiros (um por linha) e calcule a soma total. Mostre a soma.",
    input: "Arquivo 'numeros.txt' com: 10\\n20\\n30",
    output: "Soma = 60",
    code: `programa {
  inclua biblioteca Arquivos --> a

  funcao inicio() {
    inteiro endereco = a.abrir_arquivo("./numeros.txt", a.MODO_LEITURA)
    inteiro soma = 0
    
    se (endereco != -1) {
      enquanto (a.fim_arquivo(endereco) == falso) {
        cadeia linha = a.ler_linha(endereco)
        inteiro num = inteiro(linha)
        soma = soma + num
      }
      a.fechar_arquivo(endereco)
      escreva("A soma dos números é: ", soma)
    } senao {
      escreva("Erro ao abrir o arquivo.")
    }
  }
}`,
    testCases: [
      { values: { numeros: [10,20,30] }, result: 60, stepByStep: "Converte cada linha para inteiro e acumula." }
    ],
    explanation: "Lemos cada linha, convertemos para inteiro usando a função inteiro() e acumulamos na variável soma."
  },

  // NÍVEL 3 - ESTRUTURAS E ANÁLISE (exercícios 7-9)
  {
    id: 7,
    nivel: 3,
    title: "Arquivo de Notas - Média",
    statement: "Leia um arquivo contendo notas de alunos (uma por linha). Calcule e exiba a média da turma.",
    input: "Arquivo 'notas.txt' com: 7.5\\n8.0\\n6.5\\n9.0",
    output: "Média = 7.75",
    code: `programa {
  inclua biblioteca Arquivos --> a
  inclua biblioteca Matematica --> mat

  funcao inicio() {
    inteiro endereco = a.abrir_arquivo("./notas.txt", a.MODO_LEITURA)
    real soma = 0
    inteiro contador = 0
    
    se (endereco != -1) {
      enquanto (a.fim_arquivo(endereco) == falso) {
        cadeia linha = a.ler_linha(endereco)
        real nota = real(linha)
        soma = soma + nota
        contador++
      }
      a.fechar_arquivo(endereco)
      
      se (contador > 0) {
        real media = soma / contador
        escreva("A média da turma é: ", mat.arredondar(media, 2))
      } senao {
        escreva("Arquivo vazio!")
      }
    } senao {
      escreva("Erro ao abrir o arquivo.")
    }
  }
}`,
    testCases: [
      { values: { notas: [7.5,8.0,6.5,9.0] }, result: 7.75, stepByStep: "Acumula soma e conta; calcula média." }
    ],
    explanation: "Além de acumular a soma, contamos quantas notas foram lidas para calcular a média corretamente. A biblioteca Matemática arredonda o resultado."
  },
  {
    id: 8,
    nivel: 3,
    title: "Maior e Menor Número",
    statement: "Leia um arquivo contendo números reais (um por linha) e encontre o maior e o menor valor. Exiba ambos.",
    input: "Arquivo 'dados.txt' com: 5.2\\n12.8\\n3.1\\n9.6",
    output: "Maior: 12.8, Menor: 3.1",
    code: `programa {
  inclua biblioteca Arquivos --> a

  funcao inicio() {
    inteiro endereco = a.abrir_arquivo("./dados.txt", a.MODO_LEITURA)
    real maior, menor
    logico primeiro = verdadeiro
    
    se (endereco != -1) {
      enquanto (a.fim_arquivo(endereco) == falso) {
        cadeia linha = a.ler_linha(endereco)
        real num = real(linha)
        
        se (primeiro) {
          maior = num
          menor = num
          primeiro = falso
        } senao {
          se (num > maior) maior = num
          se (num < menor) menor = num
        }
      }
      a.fechar_arquivo(endereco)
      
      se (nao primeiro) {
        escreva("Maior valor: ", maior, "\\nMenor valor: ", menor)
      } senao {
        escreva("Arquivo vazio!")
      }
    } senao {
      escreva("Erro ao abrir o arquivo.")
    }
  }
}`,
    testCases: [
      { values: { numeros: [5.2,12.8,3.1,9.6] }, result: "maior=12.8, menor=3.1", stepByStep: "Lê e atualiza maior e menor." }
    ],
    explanation: "Usamos uma flag 'primeiro' para inicializar com o primeiro valor lido. Depois comparamos para atualizar maior e menor."
  },
  {
    id: 9,
    nivel: 3,
    title: "Filtrar Números Pares",
    statement: "Leia um arquivo com números inteiros (um por linha) e escreva em um novo arquivo apenas os números pares (um por linha).",
    input: "Arquivo 'numeros.txt' com: 1\\n2\\n3\\n4\\n5\\n6",
    output: "Arquivo 'pares.txt' com: 2\\n4\\n6",
    code: `programa {
  inclua biblioteca Arquivos --> a

  funcao inicio() {
    inteiro endOrigem = a.abrir_arquivo("./numeros.txt", a.MODO_LEITURA)
    inteiro endDestino = a.abrir_arquivo("./pares.txt", a.MODO_ESCRITA)
    
    se (endOrigem != -1 e endDestino != -1) {
      enquanto (a.fim_arquivo(endOrigem) == falso) {
        cadeia linha = a.ler_linha(endOrigem)
        inteiro num = inteiro(linha)
        
        se (num % 2 == 0) {
          a.escrever_linha(linha, endDestino)
        }
      }
      a.fechar_arquivo(endOrigem)
      a.fechar_arquivo(endDestino)
      escreva("Números pares filtrados com sucesso!")
    } senao {
      escreva("Erro ao abrir um dos arquivos.")
    }
  }
}`,
    testCases: [
      { values: { numeros: [1,2,3,4,5,6] }, result: "pares: 2,4,6", stepByStep: "Verifica par e escreve no destino." }
    ],
    explanation: "Lê cada linha, testa se o número é par e, em caso positivo, escreve no arquivo de saída."
  },

  // NÍVEL 4 - PROCESSAMENTO AVANÇADO (exercício 10)
  {
    id: 10,
    nivel: 4,
    title: "Análise de Vendas",
    statement: "Leia um arquivo contendo vendas diárias de um mês (cada linha = valor da venda). Calcule: total de vendas, média, quantidade de vendas acima da média, e escreva um relatório em outro arquivo.",
    input: "Arquivo 'vendas.txt' com valores",
    output: "Relatório 'relatorio.txt' gerado",
    code: `programa {
  inclua biblioteca Arquivos --> a
  inclua biblioteca Matematica --> mat

  funcao inicio() {
    inteiro endEntrada = a.abrir_arquivo("./vendas.txt", a.MODO_LEITURA)
    real vetorVendas[100] // supõe no máximo 100 vendas
    inteiro qtd = 0
    real soma = 0
    
    se (endEntrada != -1) {
      enquanto (a.fim_arquivo(endEntrada) == falso) {
        cadeia linha = a.ler_linha(endEntrada)
        real valor = real(linha)
        vetorVendas[qtd] = valor
        soma = soma + valor
        qtd++
      }
      a.fechar_arquivo(endEntrada)
      
      se (qtd > 0) {
        real media = soma / qtd
        inteiro acima = 0
        
        para (inteiro i = 0; i < qtd; i++) {
          se (vetorVendas[i] > media) {
            acima++
          }
        }
        
        inteiro endSaida = a.abrir_arquivo("./relatorio.txt", a.MODO_ESCRITA)
        se (endSaida != -1) {
          a.escrever_linha("RELATÓRIO DE VENDAS", endSaida)
          a.escrever_linha("Total de vendas: R$ " + mat.arredondar(soma, 2), endSaida)
          a.escrever_linha("Média das vendas: R$ " + mat.arredondar(media, 2), endSaida)
          a.escrever_linha("Vendas acima da média: " + acima, endSaida)
          a.fechar_arquivo(endSaida)
          escreva("Relatório gerado com sucesso!")
        } senao {
          escreva("Erro ao criar arquivo de relatório.")
        }
      } senao {
        escreva("Arquivo de vendas vazio!")
      }
    } senao {
      escreva("Erro ao abrir o arquivo de vendas.")
    }
  }
}`,
    testCases: [
      { values: { vendas: [1500,800,2000,1200] }, result: "total=5500, media=1375, acima=2", stepByStep: "Calcula total, média, conta acima e grava relatório." }
    ],
    explanation: "Primeiro percorremos o arquivo para acumular soma e armazenar os valores em um vetor. Depois calculamos a média e percorremos novamente para contar os acima da média. Por fim, geramos o relatório em um novo arquivo."
  }
];

// ========== RENDERIZAÇÃO DOS CONCEITOS ==========
function renderConceitosArquivos() {
  const langText = getLanguageDisplayName();
  
  return `
    <div class="content-card">
      <h2 class="card-title">📁 Manipulação de Arquivos em ${langText}</h2>
      <p>Arquivos são utilizados para armazenar dados de forma persistente, ou seja, mesmo após o término do programa. Em ${langText}, a manipulação de arquivos é feita através da biblioteca <strong>Arquivos</strong>.</p>
      
      <div class="info-callout">
        <span class="info-icon-callout">📌</span>
        <div>
          <strong>Principais funções da biblioteca Arquivos:</strong><br>
          • <code>abrir_arquivo(caminho, modo)</code> – abre um arquivo e retorna um identificador (inteiro)<br>
          • <code>fechar_arquivo(identificador)</code> – fecha o arquivo<br>
          • <code>escrever_linha(texto, identificador)</code> – escreve uma linha no arquivo<br>
          • <code>ler_linha(identificador)</code> – lê uma linha do arquivo<br>
          • <code>fim_arquivo(identificador)</code> – verifica se o final do arquivo foi alcançado (retorna lógico)<br>
          • <code>arquivo_existe(caminho)</code> – verifica a existência de um arquivo
        </div>
      </div>
      
      <div class="code-example">
        <div class="code-example-header">
          <span class="code-icon">📝</span>
          <span>Incluindo a biblioteca</span>
        </div>
        <pre><code>inclua biblioteca Arquivos --> a</code></pre>
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
          <div><code>MODO_LEITURA</code></div>
          <div>Abre para leitura. O arquivo deve existir.</div>
        </div>
        <div class="operator-row">
          <div><code>MODO_ESCRITA</code></div>
          <div>Abre para escrita. Cria um novo arquivo ou sobrescreve se existir.</div>
        </div>
        <div class="operator-row">
          <div><code>MODO_ADICIONAR</code></div>
          <div>Abre para adicionar (append). Escreve no final do arquivo.</div>
        </div>
      </div>
    </div>
    
    <div class="content-card">
      <h2 class="card-title">📖 Leitura de Arquivos</h2>
      <div class="code-example">
        <div class="code-example-header">
          <span class="code-icon">📝</span>
          <span>Lendo linha por linha</span>
        </div>
        <pre><code>inteiro end = a.abrir_arquivo("./dados.txt", a.MODO_LEITURA)
se (end != -1) {
    enquanto (a.fim_arquivo(end) == falso) {
        cadeia linha = a.ler_linha(end)
        escreva(linha)
    }
    a.fechar_arquivo(end)
}</code></pre>
      </div>
    </div>
    
    <div class="content-card">
      <h2 class="card-title">✍️ Escrita em Arquivos</h2>
      <div class="code-example">
        <div class="code-example-header">
          <span class="code-icon">📝</span>
          <span>Escrevendo texto</span>
        </div>
        <pre><code>inteiro end = a.abrir_arquivo("./saida.txt", a.MODO_ESCRITA)
se (end != -1) {
    a.escrever_linha("Primeira linha", end)
    a.escrever_linha("Segunda linha", end)
    a.fechar_arquivo(end)
}</code></pre>
      </div>
    </div>
    
    <div class="content-card">
      <h2 class="card-title">💡 Dicas Importantes</h2>
      <div class="info-callout">
        <span class="info-icon-callout">⚠️</span>
        <div>
          • Sempre verifique se o arquivo foi aberto corretamente: <code>abrir_arquivo</code> retorna -1 em caso de erro.<br>
          • Após o uso, feche o arquivo com <code>fechar_arquivo</code> para liberar recursos.<br>
          • Use <code>fim_arquivo</code> para controlar o laço de leitura.<br>
          • Cuidado com caminhos: <code>"./nome.txt"</code> aponta para a pasta do programa.
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
        <span>📋 Exercícios de Manipulação de Arquivos</span>
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
      <p class="page-subtitle">Aprenda a ler e escrever dados em arquivos para armazenamento persistente</p>
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