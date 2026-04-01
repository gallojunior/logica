// js/javascript/files.js

// ========== DADOS DOS EXERCÍCIOS DE ARQUIVOS EM JAVASCRIPT (NODE.JS) ==========
const filesExercises = [
  // NÍVEL 1 - LEITURA BÁSICA (exercícios 1-3)
  {
    id: 1,
    nivel: 1,
    title: "Leitura de Arquivo e Exibição",
    statement: "Escreva um programa em Node.js que leia um arquivo chamado 'dados.txt' linha por linha e exiba seu conteúdo no console. Considere que o arquivo existe na mesma pasta.",
    input: "Arquivo 'dados.txt' com algumas linhas",
    output: "Conteúdo do arquivo exibido",
    code: `const fs = require('fs');
const readline = require('readline');

const filePath = './dados.txt';

const rl = readline.createInterface({
    input: fs.createReadStream(filePath),
    crlfDelay: Infinity
});

console.log('Conteúdo do arquivo:');
rl.on('line', (line) => {
    console.log(line);
});

rl.on('close', () => {
    console.log('Leitura concluída.');
});`,
    testCases: [
      { values: { arquivo: "dados.txt com 'Linha 1\\nLinha 2\\nLinha 3'" }, result: "Linha 1\\nLinha 2\\nLinha 3", stepByStep: "Abre o arquivo para leitura, lê linha por linha e exibe." }
    ],
    explanation: "Usamos os módulos 'fs' e 'readline' do Node.js para ler o arquivo de forma eficiente, linha a linha. 'createReadStream' cria um fluxo de leitura e 'readline' nos permite iterar sobre as linhas."
  },
  {
    id: 2,
    nivel: 1,
    title: "Escrita de Arquivo",
    statement: "Crie um programa que solicite ao usuário o nome do arquivo e uma frase (usando entrada do terminal), e grave essa frase no arquivo (sobrescrevendo).",
    input: "arquivo = 'frase.txt', frase = 'Olá, mundo!'",
    output: "Arquivo criado com a frase",
    code: `const fs = require('fs');
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Informe o nome do arquivo: ', (nomeArquivo) => {
    rl.question('Informe a frase a ser gravada: ', (frase) => {
        fs.writeFile(nomeArquivo, frase, (err) => {
            if (err) {
                console.error('Erro ao escrever arquivo:', err);
            } else {
                console.log('Arquivo gravado com sucesso!');
            }
            rl.close();
        });
    });
});`,
    testCases: [
      { values: { nomeArquivo: "teste.txt", frase: "Hello" }, result: "Arquivo criado", stepByStep: "Abre para escrita (modo 'w'), escreve a frase, fecha." }
    ],
    explanation: "Usamos 'fs.writeFile' que escreve o conteúdo e substitui o arquivo se existir. O callback trata possíveis erros."
  },
  {
    id: 3,
    nivel: 1,
    title: "Append em Arquivo",
    statement: "Escreva um programa que adicione (append) uma nova linha ao final de um arquivo existente. Peça ao usuário o nome do arquivo e a linha a adicionar.",
    input: "arquivo = 'log.txt', linha = 'Nova entrada'",
    output: "Linha adicionada ao final",
    code: `const fs = require('fs');
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Informe o nome do arquivo: ', (nomeArquivo) => {
    rl.question('Informe a linha a adicionar: ', (linha) => {
        fs.appendFile(nomeArquivo, linha + '\\n', (err) => {
            if (err) {
                console.error('Erro ao adicionar ao arquivo:', err);
            } else {
                console.log('Linha adicionada ao final do arquivo!');
            }
            rl.close();
        });
    });
});`,
    testCases: [
      { values: { nomeArquivo: "log.txt", linha: "Nova entrada" }, result: "Arquivo com linha no final", stepByStep: "Modo 'append' adiciona ao final." }
    ],
    explanation: "Usamos 'fs.appendFile' para adicionar conteúdo ao final do arquivo, criando-o se não existir. Adicionamos quebra de linha para separar entradas."
  },

  // NÍVEL 2 - PROCESSAMENTO DE ARQUIVOS (exercícios 4-6)
  {
    id: 4,
    nivel: 2,
    title: "Contar Linhas de um Arquivo",
    statement: "Leia um arquivo texto e conte quantas linhas ele possui. Exiba o resultado.",
    input: "Arquivo com várias linhas",
    output: "Número de linhas",
    code: `const fs = require('fs');

fs.readFile('./dados.txt', 'utf8', (err, data) => {
    if (err) {
        console.error('Erro ao ler arquivo:', err);
        return;
    }
    const linhas = data.split('\\n').filter(linha => linha !== '');
    console.log('O arquivo possui', linhas.length, 'linhas.');
});`,
    testCases: [
      { values: { arquivo: "3 linhas" }, result: "3 linhas", stepByStep: "Lê todo arquivo e conta linhas." }
    ],
    explanation: "Usamos 'fs.readFile' para ler todo o arquivo de uma vez, depois dividimos pelas quebras de linha e filtramos linhas vazias."
  },
  {
    id: 5,
    nivel: 2,
    title: "Copiar Arquivo",
    statement: "Crie um programa que copie o conteúdo de um arquivo de origem para um arquivo de destino (ambos informados pelo usuário).",
    input: "origem = 'origem.txt', destino = 'copia.txt'",
    output: "Arquivo copiado",
    code: `const fs = require('fs');
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Informe o nome do arquivo de origem: ', (origem) => {
    rl.question('Informe o nome do arquivo de destino: ', (destino) => {
        fs.copyFile(origem, destino, (err) => {
            if (err) {
                console.error('Erro ao copiar arquivo:', err);
            } else {
                console.log('Cópia concluída!');
            }
            rl.close();
        });
    });
});`,
    testCases: [
      { values: { origem: "origem.txt", destino: "copia.txt" }, result: "Arquivo copiado", stepByStep: "Copia o conteúdo do arquivo origem para destino." }
    ],
    explanation: "Usamos 'fs.copyFile' que copia o arquivo de forma nativa (Node.js 8.5+). Para versões mais antigas, poderíamos usar leitura e escrita."
  },
  {
    id: 6,
    nivel: 2,
    title: "Somar Números de um Arquivo",
    statement: "Leia um arquivo contendo números inteiros (um por linha) e calcule a soma total. Mostre a soma.",
    input: "Arquivo 'numeros.txt' com: 10\\n20\\n30",
    output: "Soma = 60",
    code: `const fs = require('fs');

fs.readFile('./numeros.txt', 'utf8', (err, data) => {
    if (err) {
        console.error('Erro ao ler arquivo:', err);
        return;
    }
    const numeros = data.split('\\n').filter(l => l.trim() !== '');
    let soma = 0;
    for (let num of numeros) {
        soma += parseInt(num);
    }
    console.log('A soma dos números é:', soma);
});`,
    testCases: [
      { values: { numeros: [10,20,30] }, result: 60, stepByStep: "Converte cada linha para inteiro e acumula." }
    ],
    explanation: "Lê todo arquivo, divide em linhas, converte para inteiro e soma."
  },

  // NÍVEL 3 - ESTRUTURAS E ANÁLISE (exercícios 7-9)
  {
    id: 7,
    nivel: 3,
    title: "Arquivo de Notas - Média",
    statement: "Leia um arquivo contendo notas de alunos (uma por linha). Calcule e exiba a média da turma.",
    input: "Arquivo 'notas.txt' com: 7.5\\n8.0\\n6.5\\n9.0",
    output: "Média = 7.75",
    code: `const fs = require('fs');

fs.readFile('./notas.txt', 'utf8', (err, data) => {
    if (err) {
        console.error('Erro ao ler arquivo:', err);
        return;
    }
    const notas = data.split('\\n').filter(l => l.trim() !== '');
    let soma = 0;
    for (let nota of notas) {
        soma += parseFloat(nota);
    }
    const media = soma / notas.length;
    console.log('A média da turma é:', media.toFixed(2));
});`,
    testCases: [
      { values: { notas: [7.5,8.0,6.5,9.0] }, result: 7.75, stepByStep: "Acumula soma e conta; calcula média." }
    ],
    explanation: "Similar ao exercício 6, mas com números reais e cálculo de média."
  },
  {
    id: 8,
    nivel: 3,
    title: "Maior e Menor Número",
    statement: "Leia um arquivo contendo números reais (um por linha) e encontre o maior e o menor valor. Exiba ambos.",
    input: "Arquivo 'dados.txt' com: 5.2\\n12.8\\n3.1\\n9.6",
    output: "Maior: 12.8, Menor: 3.1",
    code: `const fs = require('fs');

fs.readFile('./dados.txt', 'utf8', (err, data) => {
    if (err) {
        console.error('Erro ao ler arquivo:', err);
        return;
    }
    const numeros = data.split('\\n').filter(l => l.trim() !== '');
    let maior = parseFloat(numeros[0]);
    let menor = parseFloat(numeros[0]);
    for (let i = 1; i < numeros.length; i++) {
        const num = parseFloat(numeros[i]);
        if (num > maior) maior = num;
        if (num < menor) menor = num;
    }
    console.log('Maior valor:', maior);
    console.log('Menor valor:', menor);
});`,
    testCases: [
      { values: { numeros: [5.2,12.8,3.1,9.6] }, result: "maior=12.8, menor=3.1", stepByStep: "Lê e atualiza maior e menor." }
    ],
    explanation: "Inicializa com o primeiro valor e percorre os demais atualizando maior/menor."
  },
  {
    id: 9,
    nivel: 3,
    title: "Filtrar Números Pares",
    statement: "Leia um arquivo com números inteiros (um por linha) e escreva em um novo arquivo apenas os números pares (um por linha).",
    input: "Arquivo 'numeros.txt' com: 1\\n2\\n3\\n4\\n5\\n6",
    output: "Arquivo 'pares.txt' com: 2\\n4\\n6",
    code: `const fs = require('fs');

fs.readFile('./numeros.txt', 'utf8', (err, data) => {
    if (err) {
        console.error('Erro ao ler arquivo:', err);
        return;
    }
    const linhas = data.split('\\n');
    const pares = [];
    for (let linha of linhas) {
        const num = parseInt(linha);
        if (!isNaN(num) && num % 2 === 0) {
            pares.push(num);
        }
    }
    const conteudo = pares.join('\\n');
    fs.writeFile('./pares.txt', conteudo, (err) => {
        if (err) {
            console.error('Erro ao escrever arquivo:', err);
        } else {
            console.log('Números pares filtrados com sucesso!');
        }
    });
});`,
    testCases: [
      { values: { numeros: [1,2,3,4,5,6] }, result: "pares: 2,4,6", stepByStep: "Verifica par e escreve no destino." }
    ],
    explanation: "Lê o arquivo, filtra números pares, e escreve no arquivo de saída."
  },

  // NÍVEL 4 - PROCESSAMENTO AVANÇADO (exercício 10)
  {
    id: 10,
    nivel: 4,
    title: "Análise de Vendas",
    statement: "Leia um arquivo contendo vendas diárias de um mês (cada linha = valor da venda). Calcule: total de vendas, média, quantidade de vendas acima da média, e escreva um relatório em outro arquivo.",
    input: "Arquivo 'vendas.txt' com valores",
    output: "Relatório 'relatorio.txt' gerado",
    code: `const fs = require('fs');

fs.readFile('./vendas.txt', 'utf8', (err, data) => {
    if (err) {
        console.error('Erro ao ler arquivo de vendas:', err);
        return;
    }
    const valores = data.split('\\n').filter(l => l.trim() !== '').map(Number);
    if (valores.length === 0) {
        console.log('Arquivo de vendas vazio!');
        return;
    }
    const total = valores.reduce((acc, v) => acc + v, 0);
    const media = total / valores.length;
    const acima = valores.filter(v => v > media).length;
    const relatorio = \`RELATÓRIO DE VENDAS
Total de vendas: R$ \${total.toFixed(2)}
Média das vendas: R$ \${media.toFixed(2)}
Vendas acima da média: \${acima}\`;
    fs.writeFile('./relatorio.txt', relatorio, (err) => {
        if (err) {
            console.error('Erro ao gerar relatório:', err);
        } else {
            console.log('Relatório gerado com sucesso!');
        }
    });
});`,
    testCases: [
      { values: { vendas: [1500,800,2000,1200] }, result: "total=5500, media=1375, acima=2", stepByStep: "Calcula total, média, conta acima e grava relatório." }
    ],
    explanation: "Usa métodos modernos de array (reduce, filter) para processar os dados e escreve o relatório."
  }
];

// ========== RENDERIZAÇÃO DOS CONCEITOS ==========
function renderConceitosArquivos() {
  const langText = getLanguageDisplayName();
  
  return `
    <div class="content-card">
      <h2 class="card-title">📁 Manipulação de Arquivos em JavaScript (Node.js)</h2>
      <p>Em Node.js, a manipulação de arquivos é feita através do módulo nativo <code>fs</code> (File System). Ele oferece funções síncronas e assíncronas para ler, escrever, copiar, renomear e deletar arquivos.</p>
      
      <div class="info-callout">
        <span class="info-icon-callout">📌</span>
        <div>
          <strong>Principais funções do módulo fs:</strong><br>
          • <code>fs.readFile(path, encoding, callback)</code> – lê todo conteúdo do arquivo<br>
          • <code>fs.writeFile(path, data, callback)</code> – escreve no arquivo (sobrescreve)<br>
          • <code>fs.appendFile(path, data, callback)</code> – adiciona dados ao final<br>
          • <code>fs.copyFile(src, dest, callback)</code> – copia um arquivo<br>
          • <code>fs.createReadStream(path)</code> – cria um fluxo de leitura<br>
          • <code>readline</code> – módulo para ler linha por linha
        </div>
      </div>
      
      <div class="code-example">
        <div class="code-example-header">
          <span class="code-icon">📝</span>
          <span>Importando o módulo fs</span>
        </div>
        <pre><code>const fs = require('fs');</code></pre>
      </div>
    </div>
    
    <div class="content-card">
      <h2 class="card-title">📖 Leitura de Arquivos</h2>
      <div class="code-example">
        <div class="code-example-header">
          <span class="code-icon">📝</span>
          <span>Lendo arquivo inteiro</span>
        </div>
        <pre><code>fs.readFile('./dados.txt', 'utf8', (err, data) => {
    if (err) throw err;
    console.log(data);
});</code></pre>
      </div>
      <div class="code-example">
        <div class="code-example-header">
          <span class="code-icon">📝</span>
          <span>Lendo linha por linha</span>
        </div>
        <pre><code>const readline = require('readline');
const rl = readline.createInterface({
    input: fs.createReadStream('./dados.txt')
});
rl.on('line', (line) => console.log(line));</code></pre>
      </div>
    </div>
    
    <div class="content-card">
      <h2 class="card-title">✍️ Escrita em Arquivos</h2>
      <div class="code-example">
        <div class="code-example-header">
          <span class="code-icon">📝</span>
          <span>Escrevendo e sobrescrevendo</span>
        </div>
        <pre><code>fs.writeFile('./saida.txt', 'Olá mundo!', (err) => {
    if (err) throw err;
    console.log('Arquivo salvo!');
});</code></pre>
      </div>
      <div class="code-example">
        <div class="code-example-header">
          <span class="code-icon">📝</span>
          <span>Adicionando ao final</span>
        </div>
        <pre><code>fs.appendFile('./log.txt', 'Nova linha\\n', (err) => {
    if (err) throw err;
});</code></pre>
      </div>
    </div>
    
    <div class="content-card">
      <h2 class="card-title">💡 Dicas Importantes</h2>
      <div class="info-callout">
        <span class="info-icon-callout">⚠️</span>
        <div>
          • Sempre trate erros nos callbacks para evitar falhas silenciosas.<br>
          • Use caminhos relativos (./) para arquivos na mesma pasta.<br>
          • Prefira versões assíncronas para não bloquear o event loop.<br>
          • Em navegadores, a manipulação de arquivos é restrita por segurança (necessita input file).<br>
          • Para projetos maiores, considere usar a versão com promises: <code>fs.promises</code>.
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
        <span>📋 Exercícios de Manipulação de Arquivos (Node.js)</span>
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
      <p class="page-subtitle">Aprenda a ler e escrever dados em arquivos usando Node.js</p>
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