// js/csharp/files.js

// ========== DADOS DOS EXERCÍCIOS DE ARQUIVOS EM C# ==========
const filesExercises = [
  // NÍVEL 1 - LEITURA BÁSICA (exercícios 1-3)
  {
    id: 1,
    nivel: 1,
    title: "Leitura de Arquivo e Exibição",
    statement: "Escreva um programa em C# que leia um arquivo chamado 'dados.txt' linha por linha e exiba seu conteúdo no console. Considere que o arquivo existe na mesma pasta.",
    input: "Arquivo 'dados.txt' com algumas linhas",
    output: "Conteúdo do arquivo exibido",
    code: `using System;
using System.IO;

class Program {
    static void Main() {
        string caminho = "dados.txt";
        try {
            using (StreamReader sr = new StreamReader(caminho)) {
                string linha;
                Console.WriteLine("Conteúdo do arquivo:");
                while ((linha = sr.ReadLine()) != null) {
                    Console.WriteLine(linha);
                }
            }
        } catch (Exception ex) {
            Console.WriteLine("Erro ao ler arquivo: " + ex.Message);
        }
    }
}`,
    testCases: [
      { values: { arquivo: "dados.txt com 'Linha 1\\nLinha 2\\nLinha 3'" }, result: "Linha 1\\nLinha 2\\nLinha 3", stepByStep: "Abre arquivo, lê linha por linha e exibe." }
    ],
    explanation: "Usamos StreamReader para ler o arquivo linha por linha. A estrutura using garante que o arquivo seja fechado corretamente."
  },
  {
    id: 2,
    nivel: 1,
    title: "Escrita de Arquivo",
    statement: "Crie um programa que solicite ao usuário o nome do arquivo e uma frase, e grave essa frase no arquivo (sobrescrevendo).",
    input: "arquivo = 'frase.txt', frase = 'Olá, mundo!'",
    output: "Arquivo criado com a frase",
    code: `using System;
using System.IO;

class Program {
    static void Main() {
        Console.Write("Informe o nome do arquivo: ");
        string nomeArquivo = Console.ReadLine();
        Console.Write("Informe a frase a ser gravada: ");
        string frase = Console.ReadLine();

        try {
            File.WriteAllText(nomeArquivo, frase);
            Console.WriteLine("Arquivo gravado com sucesso!");
        } catch (Exception ex) {
            Console.WriteLine("Erro ao escrever arquivo: " + ex.Message);
        }
    }
}`,
    testCases: [
      { values: { nomeArquivo: "teste.txt", frase: "Hello" }, result: "Arquivo criado", stepByStep: "Abre para escrita (sobrescreve), escreve a frase, fecha." }
    ],
    explanation: "File.WriteAllText cria ou sobrescreve o arquivo com o texto fornecido."
  },
  {
    id: 3,
    nivel: 1,
    title: "Append em Arquivo",
    statement: "Escreva um programa que adicione (append) uma nova linha ao final de um arquivo existente. Peça ao usuário o nome do arquivo e a linha a adicionar.",
    input: "arquivo = 'log.txt', linha = 'Nova entrada'",
    output: "Linha adicionada ao final",
    code: `using System;
using System.IO;

class Program {
    static void Main() {
        Console.Write("Informe o nome do arquivo: ");
        string nomeArquivo = Console.ReadLine();
        Console.Write("Informe a linha a adicionar: ");
        string linha = Console.ReadLine();

        try {
            File.AppendAllText(nomeArquivo, linha + Environment.NewLine);
            Console.WriteLine("Linha adicionada ao final do arquivo!");
        } catch (Exception ex) {
            Console.WriteLine("Erro ao adicionar ao arquivo: " + ex.Message);
        }
    }
}`,
    testCases: [
      { values: { nomeArquivo: "log.txt", linha: "Nova entrada" }, result: "Arquivo com linha no final", stepByStep: "Modo append adiciona ao final." }
    ],
    explanation: "File.AppendAllText adiciona texto ao final do arquivo, criando-o se não existir."
  },

  // NÍVEL 2 - PROCESSAMENTO DE ARQUIVOS (exercícios 4-6)
  {
    id: 4,
    nivel: 2,
    title: "Contar Linhas de um Arquivo",
    statement: "Leia um arquivo texto e conte quantas linhas ele possui. Exiba o resultado.",
    input: "Arquivo com várias linhas",
    output: "Número de linhas",
    code: `using System;
using System.IO;

class Program {
    static void Main() {
        string caminho = "dados.txt";
        try {
            int linhas = File.ReadAllLines(caminho).Length;
            Console.WriteLine("O arquivo possui " + linhas + " linhas.");
        } catch (Exception ex) {
            Console.WriteLine("Erro ao ler arquivo: " + ex.Message);
        }
    }
}`,
    testCases: [
      { values: { arquivo: "3 linhas" }, result: "3 linhas", stepByStep: "Lê todas as linhas e conta." }
    ],
    explanation: "File.ReadAllLines retorna um array de strings, cada uma representando uma linha. O número de elementos é a contagem de linhas."
  },
  {
    id: 5,
    nivel: 2,
    title: "Copiar Arquivo",
    statement: "Crie um programa que copie o conteúdo de um arquivo de origem para um arquivo de destino (ambos informados pelo usuário).",
    input: "origem = 'origem.txt', destino = 'copia.txt'",
    output: "Arquivo copiado",
    code: `using System;
using System.IO;

class Program {
    static void Main() {
        Console.Write("Informe o nome do arquivo de origem: ");
        string origem = Console.ReadLine();
        Console.Write("Informe o nome do arquivo de destino: ");
        string destino = Console.ReadLine();

        try {
            File.Copy(origem, destino, true); // true para sobrescrever
            Console.WriteLine("Cópia concluída!");
        } catch (Exception ex) {
            Console.WriteLine("Erro ao copiar arquivo: " + ex.Message);
        }
    }
}`,
    testCases: [
      { values: { origem: "origem.txt", destino: "copia.txt" }, result: "Arquivo copiado", stepByStep: "Copia o conteúdo do arquivo origem para destino." }
    ],
    explanation: "File.Copy copia o arquivo. O parâmetro true permite sobrescrever o destino se existir."
  },
  {
    id: 6,
    nivel: 2,
    title: "Somar Números de um Arquivo",
    statement: "Leia um arquivo contendo números inteiros (um por linha) e calcule a soma total. Mostre a soma.",
    input: "Arquivo 'numeros.txt' com: 10\\n20\\n30",
    output: "Soma = 60",
    code: `using System;
using System.IO;

class Program {
    static void Main() {
        string caminho = "numeros.txt";
        try {
            string[] linhas = File.ReadAllLines(caminho);
            int soma = 0;
            foreach (string linha in linhas) {
                if (int.TryParse(linha, out int num)) {
                    soma += num;
                }
            }
            Console.WriteLine("A soma dos números é: " + soma);
        } catch (Exception ex) {
            Console.WriteLine("Erro ao ler arquivo: " + ex.Message);
        }
    }
}`,
    testCases: [
      { values: { numeros: [10,20,30] }, result: 60, stepByStep: "Converte cada linha para inteiro e acumula." }
    ],
    explanation: "Lê todas as linhas, tenta converter cada uma para inteiro e soma."
  },

  // NÍVEL 3 - ESTRUTURAS E ANÁLISE (exercícios 7-9)
  {
    id: 7,
    nivel: 3,
    title: "Arquivo de Notas - Média",
    statement: "Leia um arquivo contendo notas de alunos (uma por linha). Calcule e exiba a média da turma.",
    input: "Arquivo 'notas.txt' com: 7.5\\n8.0\\n6.5\\n9.0",
    output: "Média = 7.75",
    code: `using System;
using System.IO;
using System.Linq;

class Program {
    static void Main() {
        string caminho = "notas.txt";
        try {
            var linhas = File.ReadAllLines(caminho);
            var notas = linhas
                .Where(l => !string.IsNullOrWhiteSpace(l))
                .Select(l => double.Parse(l))
                .ToArray();
            if (notas.Length > 0) {
                double media = notas.Average();
                Console.WriteLine($"A média da turma é: {media:F2}");
            } else {
                Console.WriteLine("Arquivo vazio!");
            }
        } catch (Exception ex) {
            Console.WriteLine("Erro ao ler arquivo: " + ex.Message);
        }
    }
}`,
    testCases: [
      { values: { notas: [7.5,8.0,6.5,9.0] }, result: 7.75, stepByStep: "Acumula soma e conta; calcula média." }
    ],
    explanation: "Usa LINQ para filtrar linhas vazias, converter para double e calcular a média."
  },
  {
    id: 8,
    nivel: 3,
    title: "Maior e Menor Número",
    statement: "Leia um arquivo contendo números reais (um por linha) e encontre o maior e o menor valor. Exiba ambos.",
    input: "Arquivo 'dados.txt' com: 5.2\\n12.8\\n3.1\\n9.6",
    output: "Maior: 12.8, Menor: 3.1",
    code: `using System;
using System.IO;
using System.Linq;

class Program {
    static void Main() {
        string caminho = "dados.txt";
        try {
            var linhas = File.ReadAllLines(caminho);
            var numeros = linhas
                .Where(l => !string.IsNullOrWhiteSpace(l))
                .Select(l => double.Parse(l))
                .ToArray();
            if (numeros.Length > 0) {
                double maior = numeros.Max();
                double menor = numeros.Min();
                Console.WriteLine($"Maior valor: {maior}");
                Console.WriteLine($"Menor valor: {menor}");
            } else {
                Console.WriteLine("Arquivo vazio!");
            }
        } catch (Exception ex) {
            Console.WriteLine("Erro ao ler arquivo: " + ex.Message);
        }
    }
}`,
    testCases: [
      { values: { numeros: [5.2,12.8,3.1,9.6] }, result: "maior=12.8, menor=3.1", stepByStep: "Lê e atualiza maior e menor." }
    ],
    explanation: "Usa LINQ para encontrar o máximo e o mínimo diretamente."
  },
  {
    id: 9,
    nivel: 3,
    title: "Filtrar Números Pares",
    statement: "Leia um arquivo com números inteiros (um por linha) e escreva em um novo arquivo apenas os números pares (um por linha).",
    input: "Arquivo 'numeros.txt' com: 1\\n2\\n3\\n4\\n5\\n6",
    output: "Arquivo 'pares.txt' com: 2\\n4\\n6",
    code: `using System;
using System.IO;
using System.Linq;
using System.Collections.Generic;

class Program {
    static void Main() {
        string caminhoEntrada = "numeros.txt";
        string caminhoSaida = "pares.txt";
        try {
            var linhas = File.ReadAllLines(caminhoEntrada);
            var pares = linhas
                .Where(l => !string.IsNullOrWhiteSpace(l))
                .Select(l => int.Parse(l))
                .Where(n => n % 2 == 0)
                .Select(n => n.ToString())
                .ToArray();
            File.WriteAllLines(caminhoSaida, pares);
            Console.WriteLine("Números pares filtrados com sucesso!");
        } catch (Exception ex) {
            Console.WriteLine("Erro: " + ex.Message);
        }
    }
}`,
    testCases: [
      { values: { numeros: [1,2,3,4,5,6] }, result: "pares: 2,4,6", stepByStep: "Verifica par e escreve no destino." }
    ],
    explanation: "Lê todas as linhas, filtra pares, e escreve no arquivo de saída."
  },

  // NÍVEL 4 - PROCESSAMENTO AVANÇADO (exercício 10)
  {
    id: 10,
    nivel: 4,
    title: "Análise de Vendas",
    statement: "Leia um arquivo contendo vendas diárias de um mês (cada linha = valor da venda). Calcule: total de vendas, média, quantidade de vendas acima da média, e escreva um relatório em outro arquivo.",
    input: "Arquivo 'vendas.txt' com valores",
    output: "Relatório 'relatorio.txt' gerado",
    code: `using System;
using System.IO;
using System.Linq;
using System.Globalization;

class Program {
    static void Main() {
        string caminhoEntrada = "vendas.txt";
        string caminhoSaida = "relatorio.txt";
        try {
            var linhas = File.ReadAllLines(caminhoEntrada);
            var vendas = linhas
                .Where(l => !string.IsNullOrWhiteSpace(l))
                .Select(l => double.Parse(l, CultureInfo.InvariantCulture))
                .ToArray();
            if (vendas.Length == 0) {
                Console.WriteLine("Arquivo de vendas vazio!");
                return;
            }
            double total = vendas.Sum();
            double media = total / vendas.Length;
            int acima = vendas.Count(v => v > media);

            string relatorio = $"RELATÓRIO DE VENDAS{Environment.NewLine}" +
                               $"Total de vendas: R$ {total:F2}{Environment.NewLine}" +
                               $"Média das vendas: R$ {media:F2}{Environment.NewLine}" +
                               $"Vendas acima da média: {acima}";
            File.WriteAllText(caminhoSaida, relatorio);
            Console.WriteLine("Relatório gerado com sucesso!");
        } catch (Exception ex) {
            Console.WriteLine("Erro: " + ex.Message);
        }
    }
}`,
    testCases: [
      { values: { vendas: [1500,800,2000,1200] }, result: "total=5500, media=1375, acima=2", stepByStep: "Calcula total, média, conta acima e grava relatório." }
    ],
    explanation: "Utiliza LINQ para processar os dados e gera o relatório em um arquivo."
  }
];

// ========== RENDERIZAÇÃO DOS CONCEITOS ==========
function renderConceitosArquivos() {
  const langText = getLanguageDisplayName();
  
  return `
    <div class="content-card">
      <h2 class="card-title">📁 Manipulação de Arquivos em C#</h2>
      <p>Em C#, a manipulação de arquivos é feita através do namespace <code>System.IO</code>. As principais classes são <code>File</code>, <code>FileInfo</code>, <code>StreamReader</code>, <code>StreamWriter</code>, etc.</p>
      
      <div class="info-callout">
        <span class="info-icon-callout">📌</span>
        <div>
          <strong>Principais métodos estáticos da classe File:</strong><br>
          • <code>File.ReadAllText(path)</code> – lê todo o arquivo como string<br>
          • <code>File.ReadAllLines(path)</code> – lê todas as linhas em um array<br>
          • <code>File.WriteAllText(path, content)</code> – escreve string (sobrescreve)<br>
          • <code>File.WriteAllLines(path, lines)</code> – escreve um array de linhas<br>
          • <code>File.AppendAllText(path, content)</code> – adiciona texto ao final<br>
          • <code>File.Copy(source, dest)</code> – copia arquivo<br>
          • <code>File.Exists(path)</code> – verifica existência
        </div>
      </div>
      
      <div class="code-example">
        <div class="code-example-header">
          <span class="code-icon">📝</span>
          <span>Importando o namespace</span>
        </div>
        <pre><code>using System.IO;</code></pre>
      </div>
    </div>
    
    <div class="content-card">
      <h2 class="card-title">📖 Leitura de Arquivos</h2>
      <div class="code-example">
        <div class="code-example-header">
          <span class="code-icon">📝</span>
          <span>Lendo todas as linhas</span>
        </div>
        <pre><code>string[] linhas = File.ReadAllLines("dados.txt");
foreach (string linha in linhas) {
    Console.WriteLine(linha);
}</code></pre>
      </div>
      <div class="code-example">
        <div class="code-example-header">
          <span class="code-icon">📝</span>
          <span>Lendo linha por linha com StreamReader</span>
        </div>
        <pre><code>using (StreamReader sr = new StreamReader("dados.txt")) {
    string linha;
    while ((linha = sr.ReadLine()) != null) {
        Console.WriteLine(linha);
    }
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
        <pre><code>File.WriteAllText("saida.txt", "Olá mundo!");</code></pre>
      </div>
      <div class="code-example">
        <div class="code-example-header">
          <span class="code-icon">📝</span>
          <span>Adicionando ao final</span>
        </div>
        <pre><code>File.AppendAllText("log.txt", "Nova linha" + Environment.NewLine);</code></pre>
      </div>
    </div>
    
    <div class="content-card">
      <h2 class="card-title">💡 Dicas Importantes</h2>
      <div class="info-callout">
        <span class="info-icon-callout">⚠️</span>
        <div>
          • Sempre trate exceções com try-catch.<br>
          • Use <code>using</code> para garantir que recursos sejam liberados.<br>
          • Caminhos relativos referem-se ao diretório de trabalho atual.<br>
          • Para números decimais, use <code>CultureInfo.InvariantCulture</code> para evitar problemas com separador decimal.<br>
          • LINQ pode simplificar muito o processamento de arrays de linhas.
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
        <span>📋 Exercícios de Manipulação de Arquivos (C#)</span>
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
      <p class="page-subtitle">Aprenda a ler e escrever dados em arquivos usando System.IO</p>
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