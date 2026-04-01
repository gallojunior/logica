// ========== DADOS DOS EXERCÍCIOS DE ARQUIVOS EM RUST ==========
const filesExercises = [
  // NÍVEL 1 - LEITURA BÁSICA (exercícios 1-3)
  {
    id: 1,
    nivel: 1,
    title: "Leitura de Arquivo e Exibição",
    statement: "Escreva um programa em Rust que leia um arquivo chamado 'dados.txt' linha por linha e exiba seu conteúdo no console. Considere que o arquivo existe na mesma pasta.",
    input: "Arquivo 'dados.txt' com algumas linhas",
    output: "Conteúdo do arquivo exibido",
    code: `use std::fs::File;
use std::io::{BufRead, BufReader};

fn main() -> Result<(), Box<dyn std::error::Error>> {
    let file = File::open("dados.txt")?;
    let reader = BufReader::new(file);

    println!("Conteúdo do arquivo:");
    for linha in reader.lines() {
        println!("{}", linha?);
    }
    Ok(())
}`,
    testCases: [
      { values: { arquivo: "dados.txt com 'Linha 1\\nLinha 2\\nLinha 3'" }, result: "Linha 1\\nLinha 2\\nLinha 3", stepByStep: "Abre arquivo, lê linha por linha e exibe." }
    ],
    explanation: "Usamos `File::open` e `BufReader` para ler o arquivo linha por linha. O `?` propaga erros; a função `main` retorna `Result`."
  },
  {
    id: 2,
    nivel: 1,
    title: "Escrita de Arquivo",
    statement: "Crie um programa que solicite ao usuário o nome do arquivo e uma frase, e grave essa frase no arquivo (sobrescrevendo).",
    input: "arquivo = 'frase.txt', frase = 'Olá, mundo!'",
    output: "Arquivo criado com a frase",
    code: `use std::fs::File;
use std::io::Write;
use std::io;

fn main() -> Result<(), Box<dyn std::error::Error>> {
    let mut input = String::new();
    println!("Informe o nome do arquivo:");
    io::stdin().read_line(&mut input)?;
    let nome_arquivo = input.trim();

    input.clear();
    println!("Informe a frase a ser gravada:");
    io::stdin().read_line(&mut input)?;
    let frase = input.trim();

    let mut file = File::create(nome_arquivo)?;
    writeln!(file, "{}", frase)?;

    println!("Arquivo gravado com sucesso!");
    Ok(())
}`,
    testCases: [
      { values: { nomeArquivo: "teste.txt", frase: "Hello" }, result: "Arquivo criado", stepByStep: "Abre para escrita (sobrescreve), escreve a frase, fecha." }
    ],
    explanation: "`File::create` cria ou sobrescreve o arquivo. `writeln!` escreve uma linha com quebra no final."
  },
  {
    id: 3,
    nivel: 1,
    title: "Append em Arquivo",
    statement: "Escreva um programa que adicione (append) uma nova linha ao final de um arquivo existente. Peça ao usuário o nome do arquivo e a linha a adicionar.",
    input: "arquivo = 'log.txt', linha = 'Nova entrada'",
    output: "Linha adicionada ao final",
    code: `use std::fs::OpenOptions;
use std::io::Write;
use std::io;

fn main() -> Result<(), Box<dyn std::error::Error>> {
    let mut input = String::new();
    println!("Informe o nome do arquivo:");
    io::stdin().read_line(&mut input)?;
    let nome_arquivo = input.trim();

    input.clear();
    println!("Informe a linha a adicionar:");
    io::stdin().read_line(&mut input)?;
    let linha = input.trim();

    let mut file = OpenOptions::new()
        .append(true)
        .create(true)
        .open(nome_arquivo)?;
    writeln!(file, "{}", linha)?;

    println!("Linha adicionada ao final do arquivo!");
    Ok(())
}`,
    testCases: [
      { values: { nomeArquivo: "log.txt", linha: "Nova entrada" }, result: "Arquivo com linha no final", stepByStep: "Modo append adiciona ao final." }
    ],
    explanation: "`OpenOptions` com `append(true)` abre em modo de adição; `create(true)` cria se não existir."
  },

  // NÍVEL 2 - PROCESSAMENTO DE ARQUIVOS (exercícios 4-6)
  {
    id: 4,
    nivel: 2,
    title: "Contar Linhas de um Arquivo",
    statement: "Leia um arquivo texto e conte quantas linhas ele possui. Exiba o resultado.",
    input: "Arquivo com várias linhas",
    output: "Número de linhas",
    code: `use std::fs::File;
use std::io::{BufRead, BufReader};

fn main() -> Result<(), Box<dyn std::error::Error>> {
    let file = File::open("dados.txt")?;
    let reader = BufReader::new(file);
    let linhas = reader.lines().count();
    println!("O arquivo possui {} linhas.", linhas);
    Ok(())
}`,
    testCases: [
      { values: { arquivo: "3 linhas" }, result: "3 linhas", stepByStep: "Lê linha por linha e conta." }
    ],
    explanation: "O método `count()` sobre o iterador de linhas retorna o número de linhas."
  },
  {
    id: 5,
    nivel: 2,
    title: "Copiar Arquivo",
    statement: "Crie um programa que copie o conteúdo de um arquivo de origem para um arquivo de destino (ambos informados pelo usuário).",
    input: "origem = 'origem.txt', destino = 'copia.txt'",
    output: "Arquivo copiado",
    code: `use std::fs;
use std::io;

fn main() -> Result<(), Box<dyn std::error::Error>> {
    let mut input = String::new();
    println!("Informe o nome do arquivo de origem:");
    io::stdin().read_line(&mut input)?;
    let origem = input.trim();

    input.clear();
    println!("Informe o nome do arquivo de destino:");
    io::stdin().read_line(&mut input)?;
    let destino = input.trim();

    fs::copy(origem, destino)?;
    println!("Cópia concluída!");
    Ok(())
}`,
    testCases: [
      { values: { origem: "origem.txt", destino: "copia.txt" }, result: "Arquivo copiado", stepByStep: "Copia o conteúdo do arquivo origem para destino." }
    ],
    explanation: "A função `fs::copy` faz a cópia de forma eficiente."
  },
  {
    id: 6,
    nivel: 2,
    title: "Somar Números de um Arquivo",
    statement: "Leia um arquivo contendo números inteiros (um por linha) e calcule a soma total. Mostre a soma.",
    input: "Arquivo 'numeros.txt' com: 10\\n20\\n30",
    output: "Soma = 60",
    code: `use std::fs::File;
use std::io::{BufRead, BufReader};

fn main() -> Result<(), Box<dyn std::error::Error>> {
    let file = File::open("numeros.txt")?;
    let reader = BufReader::new(file);
    let soma: i32 = reader
        .lines()
        .filter_map(|linha| linha.ok()?.parse().ok())
        .sum();
    println!("A soma dos números é: {}", soma);
    Ok(())
}`,
    testCases: [
      { values: { numeros: [10,20,30] }, result: 60, stepByStep: "Converte cada linha para inteiro e acumula." }
    ],
    explanation: "Usamos `filter_map` para ignorar linhas não numéricas e `sum` para acumular."
  },

  // NÍVEL 3 - ESTRUTURAS E ANÁLISE (exercícios 7-9)
  {
    id: 7,
    nivel: 3,
    title: "Arquivo de Notas - Média",
    statement: "Leia um arquivo contendo notas de alunos (uma por linha). Calcule e exiba a média da turma.",
    input: "Arquivo 'notas.txt' com: 7.5\\n8.0\\n6.5\\n9.0",
    output: "Média = 7.75",
    code: `use std::fs::File;
use std::io::{BufRead, BufReader};

fn main() -> Result<(), Box<dyn std::error::Error>> {
    let file = File::open("notas.txt")?;
    let reader = BufReader::new(file);
    let notas: Vec<f64> = reader
        .lines()
        .filter_map(|linha| linha.ok()?.parse().ok())
        .collect();
    if notas.is_empty() {
        println!("Arquivo vazio!");
        return Ok(());
    }
    let soma: f64 = notas.iter().sum();
    let media = soma / notas.len() as f64;
    println!("A média da turma é: {:.2}", media);
    Ok(())
}`,
    testCases: [
      { values: { notas: [7.5,8.0,6.5,9.0] }, result: 7.75, stepByStep: "Acumula soma e conta; calcula média." }
    ],
    explanation: "Coleta todas as notas válidas, calcula a média."
  },
  {
    id: 8,
    nivel: 3,
    title: "Maior e Menor Número",
    statement: "Leia um arquivo contendo números reais (um por linha) e encontre o maior e o menor valor. Exiba ambos.",
    input: "Arquivo 'dados.txt' com: 5.2\\n12.8\\n3.1\\n9.6",
    output: "Maior: 12.8, Menor: 3.1",
    code: `use std::fs::File;
use std::io::{BufRead, BufReader};

fn main() -> Result<(), Box<dyn std::error::Error>> {
    let file = File::open("dados.txt")?;
    let reader = BufReader::new(file);
    let numeros: Vec<f64> = reader
        .lines()
        .filter_map(|linha| linha.ok()?.parse().ok())
        .collect();
    if numeros.is_empty() {
        println!("Arquivo vazio!");
        return Ok(());
    }
    let maior = numeros.iter().fold(f64::MIN, |a, &b| a.max(b));
    let menor = numeros.iter().fold(f64::MAX, |a, &b| a.min(b));
    println!("Maior valor: {}", maior);
    println!("Menor valor: {}", menor);
    Ok(())
}`,
    testCases: [
      { values: { numeros: [5.2,12.8,3.1,9.6] }, result: "maior=12.8, menor=3.1", stepByStep: "Lê e encontra máximo e mínimo." }
    ],
    explanation: "Usa `fold` com `max` e `min` para encontrar os extremos."
  },
  {
    id: 9,
    nivel: 3,
    title: "Filtrar Números Pares",
    statement: "Leia um arquivo com números inteiros (um por linha) e escreva em um novo arquivo apenas os números pares (um por linha).",
    input: "Arquivo 'numeros.txt' com: 1\\n2\\n3\\n4\\n5\\n6",
    output: "Arquivo 'pares.txt' com: 2\\n4\\n6",
    code: `use std::fs::File;
use std::io::{BufRead, BufReader, Write};
use std::io;

fn main() -> Result<(), Box<dyn std::error::Error>> {
    let entrada = File::open("numeros.txt")?;
    let reader = BufReader::new(entrada);
    let mut saida = File::create("pares.txt")?;

    for linha in reader.lines() {
        let linha = linha?;
        if let Ok(num) = linha.parse::<i32>() {
            if num % 2 == 0 {
                writeln!(saida, "{}", num)?;
            }
        }
    }
    println!("Números pares filtrados com sucesso!");
    Ok(())
}`,
    testCases: [
      { values: { numeros: [1,2,3,4,5,6] }, result: "pares: 2,4,6", stepByStep: "Verifica par e escreve no destino." }
    ],
    explanation: "Lê o arquivo de entrada, filtra pares e escreve no arquivo de saída."
  },

  // NÍVEL 4 - PROCESSAMENTO AVANÇADO (exercício 10)
  {
    id: 10,
    nivel: 4,
    title: "Análise de Vendas",
    statement: "Leia um arquivo contendo vendas diárias de um mês (cada linha = valor da venda). Calcule: total de vendas, média, quantidade de vendas acima da média, e escreva um relatório em outro arquivo.",
    input: "Arquivo 'vendas.txt' com valores",
    output: "Relatório 'relatorio.txt' gerado",
    code: `use std::fs::File;
use std::io::{BufRead, BufReader, Write};

fn main() -> Result<(), Box<dyn std::error::Error>> {
    let entrada = File::open("vendas.txt")?;
    let reader = BufReader::new(entrada);
    let vendas: Vec<f64> = reader
        .lines()
        .filter_map(|linha| linha.ok()?.parse().ok())
        .collect();

    if vendas.is_empty() {
        println!("Arquivo de vendas vazio!");
        return Ok(());
    }

    let total: f64 = vendas.iter().sum();
    let media = total / vendas.len() as f64;
    let acima = vendas.iter().filter(|&&v| v > media).count();

    let mut saida = File::create("relatorio.txt")?;
    writeln!(saida, "RELATÓRIO DE VENDAS")?;
    writeln!(saida, "Total de vendas: R$ {:.2}", total)?;
    writeln!(saida, "Média das vendas: R$ {:.2}", media)?;
    writeln!(saida, "Vendas acima da média: {}", acima)?;

    println!("Relatório gerado com sucesso!");
    Ok(())
}`,
    testCases: [
      { values: { vendas: [1500,800,2000,1200] }, result: "total=5500, media=1375, acima=2", stepByStep: "Calcula total, média, conta acima e grava relatório." }
    ],
    explanation: "Coleta todas as vendas, calcula total, média, conta os acima da média e escreve o relatório."
  }
];

// ========== RENDERIZAÇÃO DOS CONCEITOS ==========
function renderConceitosArquivos() {
  const langText = getLanguageDisplayName();
  
  return `
    <div class="content-card">
      <h2 class="card-title">📁 Manipulação de Arquivos em Rust</h2>
      <p>Em Rust, a manipulação de arquivos é feita através do módulo <code>std::fs</code> e <code>std::io</code>. As principais estruturas são <code>File</code>, <code>BufReader</code> e <code>BufWriter</code>. Rust trata erros explicitamente com <code>Result</code>, encorajando o uso de <code>?</code> para propagação.</p>
      
      <div class="info-callout">
        <span class="info-icon-callout">📌</span>
        <div>
          <strong>Principais funções e tipos:</strong><br>
          • <code>File::open(path)</code> – abre arquivo para leitura<br>
          • <code>File::create(path)</code> – cria arquivo para escrita (sobrescreve)<br>
          • <code>OpenOptions::new()</code> – configura flags como <code>.append(true)</code>, <code>.read(true)</code>, etc.<br>
          • <code>BufReader::new(file)</code> – adiciona buffer de leitura<br>
          • <code>BufWriter::new(file)</code> – adiciona buffer de escrita<br>
          • <code>fs::copy(src, dst)</code> – copia arquivo<br>
          • <code>fs::read_to_string(path)</code> – lê todo o conteúdo como <code>String</code>
        </div>
      </div>
      
      <div class="code-example">
        <div class="code-example-header">
          <span class="code-icon">📝</span>
          <span>Leitura linha por linha</span>
        </div>
        <pre><code>use std::fs::File;
use std::io::{BufRead, BufReader};

let file = File::open("dados.txt")?;
let reader = BufReader::new(file);
for linha in reader.lines() {
    let linha = linha?;
    println!("{}", linha);
}</code></pre>
      </div>
    </div>
    
    <div class="content-card">
      <h2 class="card-title">📂 Modos de Abertura com OpenOptions</h2>
      <div class="operators-table">
        <div class="operator-row header">
          <div>Método</div>
          <div>Descrição</div>
        </div>
        <div class="operator-row">
          <div><code>.read(true)</code></div>
          <div>Abre para leitura</div>
        </div>
        <div class="operator-row">
          <div><code>.write(true)</code></div>
          <div>Abre para escrita</div>
        </div>
        <div class="operator-row">
          <div><code>.append(true)</code></div>
          <div>Escreve no final</div>
        </div>
        <div class="operator-row">
          <div><code>.create(true)</code></div>
          <div>Cria se não existir</div>
        </div>
        <div class="operator-row">
          <div><code>.truncate(true)</code></div>
          <div>Trunca o arquivo ao abrir</div>
        </div>
      </div>
      <div class="code-example">
        <div class="code-example-header">
          <span class="code-icon">📝</span>
          <span>Exemplo de append</span>
        </div>
        <pre><code>use std::fs::OpenOptions;
use std::io::Write;

let mut file = OpenOptions::new()
    .append(true)
    .create(true)
    .open("log.txt")?;
writeln!(file, "Nova linha")?;</code></pre>
      </div>
    </div>
    
    <div class="content-card">
      <h2 class="card-title">✍️ Escrita em Arquivos</h2>
      <div class="code-example">
        <div class="code-example-header">
          <span class="code-icon">📝</span>
          <span>Escrevendo com BufWriter</span>
        </div>
        <pre><code>use std::fs::File;
use std::io::{BufWriter, Write};

let file = File::create("saida.txt")?;
let mut writer = BufWriter::new(file);
writeln!(writer, "Primeira linha")?;
writer.flush()?;</code></pre>
      </div>
      <div class="code-example">
        <div class="code-example-header">
          <span class="code-icon">📝</span>
          <span>Escrevendo tudo de uma vez</span>
        </div>
        <pre><code>use std::fs;

fs::write("saida.txt", "conteúdo")?;</code></pre>
      </div>
    </div>
    
    <div class="content-card">
      <h2 class="card-title">💡 Dicas Importantes</h2>
      <div class="info-callout">
        <span class="info-icon-callout">⚠️</span>
        <div>
          • Sempre trate os erros: use <code>Result</code> e o operador <code>?</code>.<br>
          • Use <code>BufReader</code>/<code>BufWriter</code> para melhor desempenho.<br>
          • O caminho relativo é em relação ao diretório atual de trabalho.<br>
          • Para arquivos grandes, evite ler tudo na memória; use iteração linha a linha.<br>
          • A biblioteca padrão oferece <code>fs::read_to_string</code> e <code>fs::write</code> para operações simples.
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
        <span>📋 Exercícios de Manipulação de Arquivos (Rust)</span>
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
      <p class="page-subtitle">Aprenda a ler e escrever dados em arquivos usando os módulos fs e io do Rust</p>
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