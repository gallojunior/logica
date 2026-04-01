// js/java/files.js

// ========== DADOS DOS EXERCÍCIOS DE ARQUIVOS EM JAVA ==========
const filesExercises = [
  // NÍVEL 1 - LEITURA BÁSICA (exercícios 1-3)
  {
    id: 1,
    nivel: 1,
    title: "Leitura de Arquivo e Exibição",
    statement: "Escreva um programa em Java que leia um arquivo chamado 'dados.txt' linha por linha e exiba seu conteúdo no console. Considere que o arquivo existe na mesma pasta.",
    input: "Arquivo 'dados.txt' com algumas linhas",
    output: "Conteúdo do arquivo exibido",
    code: `import java.io.BufferedReader;
import java.io.FileReader;
import java.io.IOException;

public class Main {
    public static void main(String[] args) {
        String caminho = "dados.txt";
        try (BufferedReader br = new BufferedReader(new FileReader(caminho))) {
            String linha;
            System.out.println("Conteúdo do arquivo:");
            while ((linha = br.readLine()) != null) {
                System.out.println(linha);
            }
        } catch (IOException e) {
            System.err.println("Erro ao ler arquivo: " + e.getMessage());
        }
    }
}`,
    testCases: [
      { values: { arquivo: "dados.txt com 'Linha 1\\nLinha 2\\nLinha 3'" }, result: "Linha 1\\nLinha 2\\nLinha 3", stepByStep: "Abre arquivo, lê linha por linha e exibe." }
    ],
    explanation: "Usamos BufferedReader e FileReader para ler o arquivo de forma eficiente. O try-with-resources garante que o arquivo seja fechado automaticamente."
  },
  {
    id: 2,
    nivel: 1,
    title: "Escrita de Arquivo",
    statement: "Crie um programa que solicite ao usuário o nome do arquivo e uma frase, e grave essa frase no arquivo (sobrescrevendo).",
    input: "arquivo = 'frase.txt', frase = 'Olá, mundo!'",
    output: "Arquivo criado com a frase",
    code: `import java.io.FileWriter;
import java.io.IOException;
import java.io.PrintWriter;
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        System.out.print("Informe o nome do arquivo: ");
        String nomeArquivo = scanner.nextLine();
        System.out.print("Informe a frase a ser gravada: ");
        String frase = scanner.nextLine();

        try (PrintWriter writer = new PrintWriter(new FileWriter(nomeArquivo))) {
            writer.println(frase);
            System.out.println("Arquivo gravado com sucesso!");
        } catch (IOException e) {
            System.err.println("Erro ao escrever arquivo: " + e.getMessage());
        }
        scanner.close();
    }
}`,
    testCases: [
      { values: { nomeArquivo: "teste.txt", frase: "Hello" }, result: "Arquivo criado", stepByStep: "Abre para escrita, escreve a frase, fecha." }
    ],
    explanation: "FileWriter com modo padrão (false) sobrescreve o arquivo. PrintWriter fornece métodos convenientes como println()."
  },
  {
    id: 3,
    nivel: 1,
    title: "Append em Arquivo",
    statement: "Escreva um programa que adicione (append) uma nova linha ao final de um arquivo existente. Peça ao usuário o nome do arquivo e a linha a adicionar.",
    input: "arquivo = 'log.txt', linha = 'Nova entrada'",
    output: "Linha adicionada ao final",
    code: `import java.io.FileWriter;
import java.io.IOException;
import java.io.PrintWriter;
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        System.out.print("Informe o nome do arquivo: ");
        String nomeArquivo = scanner.nextLine();
        System.out.print("Informe a linha a adicionar: ");
        String linha = scanner.nextLine();

        try (PrintWriter writer = new PrintWriter(new FileWriter(nomeArquivo, true))) {
            writer.println(linha);
            System.out.println("Linha adicionada ao final do arquivo!");
        } catch (IOException e) {
            System.err.println("Erro ao adicionar ao arquivo: " + e.getMessage());
        }
        scanner.close();
    }
}`,
    testCases: [
      { values: { nomeArquivo: "log.txt", linha: "Nova entrada" }, result: "Arquivo com linha no final", stepByStep: "Modo append adiciona ao final." }
    ],
    explanation: "FileWriter com segundo parâmetro true abre em modo append. PrintWriter adiciona a linha ao final."
  },

  // NÍVEL 2 - PROCESSAMENTO DE ARQUIVOS (exercícios 4-6)
  {
    id: 4,
    nivel: 2,
    title: "Contar Linhas de um Arquivo",
    statement: "Leia um arquivo texto e conte quantas linhas ele possui. Exiba o resultado.",
    input: "Arquivo com várias linhas",
    output: "Número de linhas",
    code: `import java.io.BufferedReader;
import java.io.FileReader;
import java.io.IOException;

public class Main {
    public static void main(String[] args) {
        String caminho = "dados.txt";
        int linhas = 0;
        try (BufferedReader br = new BufferedReader(new FileReader(caminho))) {
            while (br.readLine() != null) {
                linhas++;
            }
            System.out.println("O arquivo possui " + linhas + " linhas.");
        } catch (IOException e) {
            System.err.println("Erro ao ler arquivo: " + e.getMessage());
        }
    }
}`,
    testCases: [
      { values: { arquivo: "3 linhas" }, result: "3 linhas", stepByStep: "Lê linha por linha e incrementa contador." }
    ],
    explanation: "Contador incrementado a cada linha lida. readLine() retorna null no final do arquivo."
  },
  {
    id: 5,
    nivel: 2,
    title: "Copiar Arquivo",
    statement: "Crie um programa que copie o conteúdo de um arquivo de origem para um arquivo de destino (ambos informados pelo usuário).",
    input: "origem = 'origem.txt', destino = 'copia.txt'",
    output: "Arquivo copiado",
    code: `import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.FileReader;
import java.io.FileWriter;
import java.io.IOException;
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        System.out.print("Informe o nome do arquivo de origem: ");
        String origem = scanner.nextLine();
        System.out.print("Informe o nome do arquivo de destino: ");
        String destino = scanner.nextLine();

        try (BufferedReader br = new BufferedReader(new FileReader(origem));
             BufferedWriter bw = new BufferedWriter(new FileWriter(destino))) {
            String linha;
            while ((linha = br.readLine()) != null) {
                bw.write(linha);
                bw.newLine();
            }
            System.out.println("Cópia concluída!");
        } catch (IOException e) {
            System.err.println("Erro ao copiar arquivo: " + e.getMessage());
        }
        scanner.close();
    }
}`,
    testCases: [
      { values: { origem: "origem.txt", destino: "copia.txt" }, result: "Arquivo copiado", stepByStep: "Lê linha a linha da origem e escreve no destino." }
    ],
    explanation: "BufferedReader lê a origem, BufferedWriter escreve no destino. newLine() adiciona a quebra de linha apropriada para o sistema."
  },
  {
    id: 6,
    nivel: 2,
    title: "Somar Números de um Arquivo",
    statement: "Leia um arquivo contendo números inteiros (um por linha) e calcule a soma total. Mostre a soma.",
    input: "Arquivo 'numeros.txt' com: 10\\n20\\n30",
    output: "Soma = 60",
    code: `import java.io.BufferedReader;
import java.io.FileReader;
import java.io.IOException;

public class Main {
    public static void main(String[] args) {
        String caminho = "numeros.txt";
        int soma = 0;
        try (BufferedReader br = new BufferedReader(new FileReader(caminho))) {
            String linha;
            while ((linha = br.readLine()) != null) {
                linha = linha.trim();
                if (!linha.isEmpty()) {
                    try {
                        soma += Integer.parseInt(linha);
                    } catch (NumberFormatException e) {
                        System.err.println("Linha ignorada (não é número): " + linha);
                    }
                }
            }
            System.out.println("A soma dos números é: " + soma);
        } catch (IOException e) {
            System.err.println("Erro ao ler arquivo: " + e.getMessage());
        }
    }
}`,
    testCases: [
      { values: { numeros: [10,20,30] }, result: 60, stepByStep: "Converte cada linha para inteiro e acumula." }
    ],
    explanation: "Lê linha por linha, converte para inteiro e soma, ignorando linhas vazias ou não numéricas."
  },

  // NÍVEL 3 - ESTRUTURAS E ANÁLISE (exercícios 7-9)
  {
    id: 7,
    nivel: 3,
    title: "Arquivo de Notas - Média",
    statement: "Leia um arquivo contendo notas de alunos (uma por linha). Calcule e exiba a média da turma.",
    input: "Arquivo 'notas.txt' com: 7.5\\n8.0\\n6.5\\n9.0",
    output: "Média = 7.75",
    code: `import java.io.BufferedReader;
import java.io.FileReader;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

public class Main {
    public static void main(String[] args) {
        String caminho = "notas.txt";
        List<Double> notas = new ArrayList<>();
        try (BufferedReader br = new BufferedReader(new FileReader(caminho))) {
            String linha;
            while ((linha = br.readLine()) != null) {
                linha = linha.trim();
                if (!linha.isEmpty()) {
                    try {
                        notas.add(Double.parseDouble(linha));
                    } catch (NumberFormatException e) {
                        System.err.println("Linha ignorada (não é número): " + linha);
                    }
                }
            }
        } catch (IOException e) {
            System.err.println("Erro ao ler arquivo: " + e.getMessage());
            return;
        }
        if (notas.isEmpty()) {
            System.out.println("Arquivo vazio!");
        } else {
            double soma = 0;
            for (double n : notas) soma += n;
            double media = soma / notas.size();
            System.out.printf("A média da turma é: %.2f%n", media);
        }
    }
}`,
    testCases: [
      { values: { notas: [7.5,8.0,6.5,9.0] }, result: 7.75, stepByStep: "Acumula soma e conta; calcula média." }
    ],
    explanation: "Armazena notas em uma lista, depois calcula soma e média."
  },
  {
    id: 8,
    nivel: 3,
    title: "Maior e Menor Número",
    statement: "Leia um arquivo contendo números reais (um por linha) e encontre o maior e o menor valor. Exiba ambos.",
    input: "Arquivo 'dados.txt' com: 5.2\\n12.8\\n3.1\\n9.6",
    output: "Maior: 12.8, Menor: 3.1",
    code: `import java.io.BufferedReader;
import java.io.FileReader;
import java.io.IOException;

public class Main {
    public static void main(String[] args) {
        String caminho = "dados.txt";
        Double maior = null;
        Double menor = null;
        try (BufferedReader br = new BufferedReader(new FileReader(caminho))) {
            String linha;
            while ((linha = br.readLine()) != null) {
                linha = linha.trim();
                if (!linha.isEmpty()) {
                    try {
                        double num = Double.parseDouble(linha);
                        if (maior == null) {
                            maior = menor = num;
                        } else {
                            if (num > maior) maior = num;
                            if (num < menor) menor = num;
                        }
                    } catch (NumberFormatException e) {
                        System.err.println("Linha ignorada (não é número): " + linha);
                    }
                }
            }
        } catch (IOException e) {
            System.err.println("Erro ao ler arquivo: " + e.getMessage());
            return;
        }
        if (maior == null) {
            System.out.println("Arquivo vazio ou sem números válidos!");
        } else {
            System.out.println("Maior valor: " + maior);
            System.out.println("Menor valor: " + menor);
        }
    }
}`,
    testCases: [
      { values: { numeros: [5.2,12.8,3.1,9.6] }, result: "maior=12.8, menor=3.1", stepByStep: "Lê e atualiza maior e menor." }
    ],
    explanation: "Usa variáveis Double para permitir null inicial. Atualiza maior e menor conforme leitura."
  },
  {
    id: 9,
    nivel: 3,
    title: "Filtrar Números Pares",
    statement: "Leia um arquivo com números inteiros (um por linha) e escreva em um novo arquivo apenas os números pares (um por linha).",
    input: "Arquivo 'numeros.txt' com: 1\\n2\\n3\\n4\\n5\\n6",
    output: "Arquivo 'pares.txt' com: 2\\n4\\n6",
    code: `import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.FileReader;
import java.io.FileWriter;
import java.io.IOException;
import java.io.PrintWriter;

public class Main {
    public static void main(String[] args) {
        String entrada = "numeros.txt";
        String saida = "pares.txt";
        try (BufferedReader br = new BufferedReader(new FileReader(entrada));
             PrintWriter pw = new PrintWriter(new BufferedWriter(new FileWriter(saida)))) {
            String linha;
            while ((linha = br.readLine()) != null) {
                linha = linha.trim();
                if (!linha.isEmpty()) {
                    try {
                        int num = Integer.parseInt(linha);
                        if (num % 2 == 0) {
                            pw.println(num);
                        }
                    } catch (NumberFormatException e) {
                        System.err.println("Linha ignorada (não é número): " + linha);
                    }
                }
            }
            System.out.println("Números pares filtrados com sucesso!");
        } catch (IOException e) {
            System.err.println("Erro: " + e.getMessage());
        }
    }
}`,
    testCases: [
      { values: { numeros: [1,2,3,4,5,6] }, result: "pares: 2,4,6", stepByStep: "Verifica par e escreve no destino." }
    ],
    explanation: "Lê arquivo de entrada, filtra números pares e escreve no arquivo de saída usando PrintWriter."
  },

  // NÍVEL 4 - PROCESSAMENTO AVANÇADO (exercício 10)
  {
    id: 10,
    nivel: 4,
    title: "Análise de Vendas",
    statement: "Leia um arquivo contendo vendas diárias de um mês (cada linha = valor da venda). Calcule: total de vendas, média, quantidade de vendas acima da média, e escreva um relatório em outro arquivo.",
    input: "Arquivo 'vendas.txt' com valores",
    output: "Relatório 'relatorio.txt' gerado",
    code: `import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.FileReader;
import java.io.FileWriter;
import java.io.IOException;
import java.io.PrintWriter;
import java.util.ArrayList;
import java.util.List;

public class Main {
    public static void main(String[] args) {
        String entrada = "vendas.txt";
        String saida = "relatorio.txt";
        List<Double> vendas = new ArrayList<>();
        try (BufferedReader br = new BufferedReader(new FileReader(entrada))) {
            String linha;
            while ((linha = br.readLine()) != null) {
                linha = linha.trim();
                if (!linha.isEmpty()) {
                    try {
                        vendas.add(Double.parseDouble(linha));
                    } catch (NumberFormatException e) {
                        System.err.println("Linha ignorada (não é número): " + linha);
                    }
                }
            }
        } catch (IOException e) {
            System.err.println("Erro ao ler arquivo de vendas: " + e.getMessage());
            return;
        }
        if (vendas.isEmpty()) {
            System.out.println("Arquivo de vendas vazio!");
            return;
        }
        double total = 0;
        for (double v : vendas) total += v;
        double media = total / vendas.size();
        long acima = vendas.stream().filter(v -> v > media).count();
        try (PrintWriter pw = new PrintWriter(new BufferedWriter(new FileWriter(saida)))) {
            pw.println("RELATÓRIO DE VENDAS");
            pw.printf("Total de vendas: R$ %.2f%n", total);
            pw.printf("Média das vendas: R$ %.2f%n", media);
            pw.println("Vendas acima da média: " + acima);
            System.out.println("Relatório gerado com sucesso!");
        } catch (IOException e) {
            System.err.println("Erro ao escrever relatório: " + e.getMessage());
        }
    }
}`,
    testCases: [
      { values: { vendas: [1500,800,2000,1200] }, result: "total=5500, media=1375, acima=2", stepByStep: "Calcula total, média, conta acima e grava relatório." }
    ],
    explanation: "Armazena vendas em lista, calcula total e média, conta quantos estão acima usando stream, e escreve relatório formatado."
  }
];

// ========== RENDERIZAÇÃO DOS CONCEITOS ==========
function renderConceitosArquivos() {
  const langText = getLanguageDisplayName();
  
  return `
    <div class="content-card">
      <h2 class="card-title">📁 Manipulação de Arquivos em Java</h2>
      <p>Em Java, a manipulação de arquivos é feita através do pacote <code>java.io</code> e <code>java.nio.file</code>. As principais classes são <code>FileReader</code>, <code>FileWriter</code>, <code>BufferedReader</code>, <code>BufferedWriter</code>, <code>PrintWriter</code>, além da classe utilitária <code>Files</code>.</p>
      
      <div class="info-callout">
        <span class="info-icon-callout">📌</span>
        <div>
          <strong>Principais classes e métodos:</strong><br>
          • <code>FileReader / FileWriter</code> – leitura/escrita de caracteres<br>
          • <code>BufferedReader / BufferedWriter</code> – leitura/escrita com buffer (mais eficiente)<br>
          • <code>PrintWriter</code> – métodos convenientes como println()<br>
          • <code>Files.readAllLines(path)</code> – lê todas as linhas em uma lista<br>
          • <code>Files.write(path, lines)</code> – escreve linhas em um arquivo<br>
          • <code>try-with-resources</code> – garante fechamento automático dos recursos
        </div>
      </div>
      
      <div class="code-example">
        <div class="code-example-header">
          <span class="code-icon">📝</span>
          <span>Exemplo de leitura com try-with-resources</span>
        </div>
        <pre><code>try (BufferedReader br = new BufferedReader(new FileReader("dados.txt"))) {
    String linha;
    while ((linha = br.readLine()) != null) {
        System.out.println(linha);
    }
} catch (IOException e) {
    e.printStackTrace();
}</code></pre>
      </div>
    </div>
    
    <div class="content-card">
      <h2 class="card-title">📖 Leitura de Arquivos</h2>
      <div class="code-example">
        <div class="code-example-header">
          <span class="code-icon">📝</span>
          <span>Lendo todas as linhas (Java 8+)</span>
        </div>
        <pre><code>import java.nio.file.*;
import java.util.List;

List<String> linhas = Files.readAllLines(Paths.get("dados.txt"));
for (String linha : linhas) {
    System.out.println(linha);
}</code></pre>
      </div>
      <div class="code-example">
        <div class="code-example-header">
          <span class="code-icon">📝</span>
          <span>Lendo com BufferedReader</span>
        </div>
        <pre><code>try (BufferedReader br = new BufferedReader(new FileReader("dados.txt"))) {
    br.lines().forEach(System.out::println);
}</code></pre>
      </div>
    </div>
    
    <div class="content-card">
      <h2 class="card-title">✍️ Escrita em Arquivos</h2>
      <div class="code-example">
        <div class="code-example-header">
          <span class="code-icon">📝</span>
          <span>Escrevendo com PrintWriter</span>
        </div>
        <pre><code>try (PrintWriter pw = new PrintWriter(new FileWriter("saida.txt"))) {
    pw.println("Olá mundo!");
    pw.printf("Valor: %.2f%n", 10.5);
}</code></pre>
      </div>
      <div class="code-example">
        <div class="code-example-header">
          <span class="code-icon">📝</span>
          <span>Escrevendo com Files (Java 7+)</span>
        </div>
        <pre><code>List<String> linhas = Arrays.asList("Linha 1", "Linha 2");
Files.write(Paths.get("saida.txt"), linhas);</code></pre>
      </div>
    </div>
    
    <div class="content-card">
      <h2 class="card-title">💡 Dicas Importantes</h2>
      <div class="info-callout">
        <span class="info-icon-callout">⚠️</span>
        <div>
          • Sempre use try-with-resources para garantir que os recursos sejam fechados.<br>
          • Use Buffered classes para melhor desempenho.<br>
          • Em Java, caminhos relativos são relativos ao diretório de trabalho da JVM.<br>
          • Para números decimais, use <code>Double.parseDouble()</code> e trate <code>NumberFormatException</code>.<br>
          • A partir do Java 7, a classe <code>Files</code> oferece métodos simplificados (readAllLines, write, copy, etc.).
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
        <span>📋 Exercícios de Manipulação de Arquivos (Java)</span>
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
      <p class="page-subtitle">Aprenda a ler e escrever dados em arquivos usando Java I/O</p>
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