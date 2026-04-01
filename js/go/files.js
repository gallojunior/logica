// ========== DADOS DOS EXERCÍCIOS DE ARQUIVOS EM GO ==========
const filesExercises = [
  // NÍVEL 1 - LEITURA BÁSICA (exercícios 1-3)
  {
    id: 1,
    nivel: 1,
    title: "Leitura de Arquivo e Exibição",
    statement: "Escreva um programa em Go que leia um arquivo chamado 'dados.txt' linha por linha e exiba seu conteúdo no console. Considere que o arquivo existe na mesma pasta.",
    input: "Arquivo 'dados.txt' com algumas linhas",
    output: "Conteúdo do arquivo exibido",
    code: `package main

import (
    "bufio"
    "fmt"
    "os"
)

func main() {
    file, err := os.Open("dados.txt")
    if err != nil {
        fmt.Println("Erro ao abrir arquivo:", err)
        return
    }
    defer file.Close()

    scanner := bufio.NewScanner(file)
    fmt.Println("Conteúdo do arquivo:")
    for scanner.Scan() {
        fmt.Println(scanner.Text())
    }
    if err := scanner.Err(); err != nil {
        fmt.Println("Erro na leitura:", err)
    }
}`,
    testCases: [
      { values: { arquivo: "dados.txt com 'Linha 1\\nLinha 2\\nLinha 3'" }, result: "Linha 1\\nLinha 2\\nLinha 3", stepByStep: "Abre arquivo, lê linha por linha e exibe." }
    ],
    explanation: "Usamos os.Open para abrir o arquivo, bufio.NewScanner para ler linha por linha e defer para fechar automaticamente o arquivo."
  },
  {
    id: 2,
    nivel: 1,
    title: "Escrita de Arquivo",
    statement: "Crie um programa que solicite ao usuário o nome do arquivo e uma frase, e grave essa frase no arquivo (sobrescrevendo).",
    input: "arquivo = 'frase.txt', frase = 'Olá, mundo!'",
    output: "Arquivo criado com a frase",
    code: `package main

import (
    "fmt"
    "os"
)

func main() {
    var nomeArquivo, frase string
    fmt.Print("Informe o nome do arquivo: ")
    fmt.Scan(&nomeArquivo)
    fmt.Print("Informe a frase a ser gravada: ")
    fmt.Scan(&frase)

    err := os.WriteFile(nomeArquivo, []byte(frase+"\\n"), 0644)
    if err != nil {
        fmt.Println("Erro ao escrever arquivo:", err)
        return
    }
    fmt.Println("Arquivo gravado com sucesso!")
}`,
    testCases: [
      { values: { nomeArquivo: "teste.txt", frase: "Hello" }, result: "Arquivo criado", stepByStep: "Abre para escrita (sobrescreve), escreve a frase, fecha." }
    ],
    explanation: "Usamos os.WriteFile para escrever todo o conteúdo de uma vez. O modo 0644 define permissões de leitura/escrita para o dono."
  },
  {
    id: 3,
    nivel: 1,
    title: "Append em Arquivo",
    statement: "Escreva um programa que adicione (append) uma nova linha ao final de um arquivo existente. Peça ao usuário o nome do arquivo e a linha a adicionar.",
    input: "arquivo = 'log.txt', linha = 'Nova entrada'",
    output: "Linha adicionada ao final",
    code: `package main

import (
    "fmt"
    "os"
)

func main() {
    var nomeArquivo, linha string
    fmt.Print("Informe o nome do arquivo: ")
    fmt.Scan(&nomeArquivo)
    fmt.Print("Informe a linha a adicionar: ")
    fmt.Scan(&linha)

    f, err := os.OpenFile(nomeArquivo, os.O_APPEND|os.O_CREATE|os.O_WRONLY, 0644)
    if err != nil {
        fmt.Println("Erro ao abrir arquivo:", err)
        return
    }
    defer f.Close()

    _, err = f.WriteString(linha + "\\n")
    if err != nil {
        fmt.Println("Erro ao escrever:", err)
        return
    }
    fmt.Println("Linha adicionada ao final do arquivo!")
}`,
    testCases: [
      { values: { nomeArquivo: "log.txt", linha: "Nova entrada" }, result: "Arquivo com linha no final", stepByStep: "Modo O_APPEND adiciona ao final." }
    ],
    explanation: "os.OpenFile com a flag O_APPEND abre o arquivo para adicionar ao final. O_APPEND garante que a escrita ocorra no final, O_CREATE cria se não existir."
  },

  // NÍVEL 2 - PROCESSAMENTO DE ARQUIVOS (exercícios 4-6)
  {
    id: 4,
    nivel: 2,
    title: "Contar Linhas de um Arquivo",
    statement: "Leia um arquivo texto e conte quantas linhas ele possui. Exiba o resultado.",
    input: "Arquivo com várias linhas",
    output: "Número de linhas",
    code: `package main

import (
    "bufio"
    "fmt"
    "os"
)

func main() {
    file, err := os.Open("dados.txt")
    if err != nil {
        fmt.Println("Erro ao abrir arquivo:", err)
        return
    }
    defer file.Close()

    scanner := bufio.NewScanner(file)
    linhas := 0
    for scanner.Scan() {
        linhas++
    }
    fmt.Printf("O arquivo possui %d linhas.\n", linhas)
}`,
    testCases: [
      { values: { arquivo: "3 linhas" }, result: "3 linhas", stepByStep: "Lê linha por linha e incrementa contador." }
    ],
    explanation: "Contador incrementado a cada linha lida. Scan() avança para a próxima linha."
  },
  {
    id: 5,
    nivel: 2,
    title: "Copiar Arquivo",
    statement: "Crie um programa que copie o conteúdo de um arquivo de origem para um arquivo de destino (ambos informados pelo usuário).",
    input: "origem = 'origem.txt', destino = 'copia.txt'",
    output: "Arquivo copiado",
    code: `package main

import (
    "fmt"
    "io"
    "os"
)

func main() {
    var origem, destino string
    fmt.Print("Informe o nome do arquivo de origem: ")
    fmt.Scan(&origem)
    fmt.Print("Informe o nome do arquivo de destino: ")
    fmt.Scan(&destino)

    src, err := os.Open(origem)
    if err != nil {
        fmt.Println("Erro ao abrir origem:", err)
        return
    }
    defer src.Close()

    dst, err := os.Create(destino)
    if err != nil {
        fmt.Println("Erro ao criar destino:", err)
        return
    }
    defer dst.Close()

    _, err = io.Copy(dst, src)
    if err != nil {
        fmt.Println("Erro ao copiar:", err)
        return
    }
    fmt.Println("Cópia concluída!")
}`,
    testCases: [
      { values: { origem: "origem.txt", destino: "copia.txt" }, result: "Arquivo copiado", stepByStep: "Copia o conteúdo do arquivo origem para destino." }
    ],
    explanation: "Abrimos os dois arquivos e usamos io.Copy para transferir os dados de forma eficiente."
  },
  {
    id: 6,
    nivel: 2,
    title: "Somar Números de um Arquivo",
    statement: "Leia um arquivo contendo números inteiros (um por linha) e calcule a soma total. Mostre a soma.",
    input: "Arquivo 'numeros.txt' com: 10\\n20\\n30",
    output: "Soma = 60",
    code: `package main

import (
    "bufio"
    "fmt"
    "os"
    "strconv"
)

func main() {
    file, err := os.Open("numeros.txt")
    if err != nil {
        fmt.Println("Erro ao abrir arquivo:", err)
        return
    }
    defer file.Close()

    scanner := bufio.NewScanner(file)
    soma := 0
    for scanner.Scan() {
        linha := scanner.Text()
        if num, err := strconv.Atoi(linha); err == nil {
            soma += num
        }
    }
    fmt.Printf("A soma dos números é: %d\n", soma)
}`,
    testCases: [
      { values: { numeros: [10,20,30] }, result: 60, stepByStep: "Converte cada linha para inteiro e acumula." }
    ],
    explanation: "Lê linha por linha, converte para inteiro e soma."
  },

  // NÍVEL 3 - ESTRUTURAS E ANÁLISE (exercícios 7-9)
  {
    id: 7,
    nivel: 3,
    title: "Arquivo de Notas - Média",
    statement: "Leia um arquivo contendo notas de alunos (uma por linha). Calcule e exiba a média da turma.",
    input: "Arquivo 'notas.txt' com: 7.5\\n8.0\\n6.5\\n9.0",
    output: "Média = 7.75",
    code: `package main

import (
    "bufio"
    "fmt"
    "os"
    "strconv"
)

func main() {
    file, err := os.Open("notas.txt")
    if err != nil {
        fmt.Println("Erro ao abrir arquivo:", err)
        return
    }
    defer file.Close()

    scanner := bufio.NewScanner(file)
    var notas []float64
    for scanner.Scan() {
        linha := scanner.Text()
        if nota, err := strconv.ParseFloat(linha, 64); err == nil {
            notas = append(notas, nota)
        }
    }
    if len(notas) == 0 {
        fmt.Println("Arquivo vazio!")
        return
    }
    soma := 0.0
    for _, n := range notas {
        soma += n
    }
    media := soma / float64(len(notas))
    fmt.Printf("A média da turma é: %.2f\n", media)
}`,
    testCases: [
      { values: { notas: [7.5,8.0,6.5,9.0] }, result: 7.75, stepByStep: "Acumula soma e conta; calcula média." }
    ],
    explanation: "Lê todas as notas, calcula soma e média."
  },
  {
    id: 8,
    nivel: 3,
    title: "Maior e Menor Número",
    statement: "Leia um arquivo contendo números reais (um por linha) e encontre o maior e o menor valor. Exiba ambos.",
    input: "Arquivo 'dados.txt' com: 5.2\\n12.8\\n3.1\\n9.6",
    output: "Maior: 12.8, Menor: 3.1",
    code: `package main

import (
    "bufio"
    "fmt"
    "os"
    "strconv"
)

func main() {
    file, err := os.Open("dados.txt")
    if err != nil {
        fmt.Println("Erro ao abrir arquivo:", err)
        return
    }
    defer file.Close()

    scanner := bufio.NewScanner(file)
    var numeros []float64
    for scanner.Scan() {
        linha := scanner.Text()
        if num, err := strconv.ParseFloat(linha, 64); err == nil {
            numeros = append(numeros, num)
        }
    }
    if len(numeros) == 0 {
        fmt.Println("Arquivo vazio!")
        return
    }
    maior := numeros[0]
    menor := numeros[0]
    for _, n := range numeros[1:] {
        if n > maior {
            maior = n
        }
        if n < menor {
            menor = n
        }
    }
    fmt.Printf("Maior valor: %.2f\n", maior)
    fmt.Printf("Menor valor: %.2f\n", menor)
}`,
    testCases: [
      { values: { numeros: [5.2,12.8,3.1,9.6] }, result: "maior=12.8, menor=3.1", stepByStep: "Lê e atualiza maior e menor." }
    ],
    explanation: "Coleta todos os números e encontra o máximo e mínimo."
  },
  {
    id: 9,
    nivel: 3,
    title: "Filtrar Números Pares",
    statement: "Leia um arquivo com números inteiros (um por linha) e escreva em um novo arquivo apenas os números pares (um por linha).",
    input: "Arquivo 'numeros.txt' com: 1\\n2\\n3\\n4\\n5\\n6",
    output: "Arquivo 'pares.txt' com: 2\\n4\\n6",
    code: `package main

import (
    "bufio"
    "fmt"
    "os"
    "strconv"
)

func main() {
    entrada, err := os.Open("numeros.txt")
    if err != nil {
        fmt.Println("Erro ao abrir arquivo de entrada:", err)
        return
    }
    defer entrada.Close()

    saida, err := os.Create("pares.txt")
    if err != nil {
        fmt.Println("Erro ao criar arquivo de saída:", err)
        return
    }
    defer saida.Close()

    scanner := bufio.NewScanner(entrada)
    writer := bufio.NewWriter(saida)
    for scanner.Scan() {
        linha := scanner.Text()
        if num, err := strconv.Atoi(linha); err == nil && num%2 == 0 {
            writer.WriteString(fmt.Sprintf("%d\\n", num))
        }
    }
    writer.Flush()
    fmt.Println("Números pares filtrados com sucesso!")
}`,
    testCases: [
      { values: { numeros: [1,2,3,4,5,6] }, result: "pares: 2,4,6", stepByStep: "Verifica par e escreve no destino." }
    ],
    explanation: "Lê o arquivo de entrada, filtra pares e escreve no arquivo de saída com buffer."
  },

  // NÍVEL 4 - PROCESSAMENTO AVANÇADO (exercício 10)
  {
    id: 10,
    nivel: 4,
    title: "Análise de Vendas",
    statement: "Leia um arquivo contendo vendas diárias de um mês (cada linha = valor da venda). Calcule: total de vendas, média, quantidade de vendas acima da média, e escreva um relatório em outro arquivo.",
    input: "Arquivo 'vendas.txt' com valores",
    output: "Relatório 'relatorio.txt' gerado",
    code: `package main

import (
    "bufio"
    "fmt"
    "os"
    "strconv"
)

func main() {
    entrada, err := os.Open("vendas.txt")
    if err != nil {
        fmt.Println("Erro ao abrir arquivo de vendas:", err)
        return
    }
    defer entrada.Close()

    var vendas []float64
    scanner := bufio.NewScanner(entrada)
    for scanner.Scan() {
        linha := scanner.Text()
        if v, err := strconv.ParseFloat(linha, 64); err == nil {
            vendas = append(vendas, v)
        }
    }
    if len(vendas) == 0 {
        fmt.Println("Arquivo de vendas vazio!")
        return
    }

    total := 0.0
    for _, v := range vendas {
        total += v
    }
    media := total / float64(len(vendas))

    acima := 0
    for _, v := range vendas {
        if v > media {
            acima++
        }
    }

    relatorio := fmt.Sprintf(
        "RELATÓRIO DE VENDAS\nTotal de vendas: R$ %.2f\nMédia das vendas: R$ %.2f\nVendas acima da média: %d\n",
        total, media, acima,
    )

    err = os.WriteFile("relatorio.txt", []byte(relatorio), 0644)
    if err != nil {
        fmt.Println("Erro ao escrever relatório:", err)
        return
    }
    fmt.Println("Relatório gerado com sucesso!")
}`,
    testCases: [
      { values: { vendas: [1500,800,2000,1200] }, result: "total=5500, media=1375, acima=2", stepByStep: "Calcula total, média, conta acima e grava relatório." }
    ],
    explanation: "Lê todos os valores, calcula total e média, conta quantos estão acima da média e escreve o relatório."
  }
];

// ========== RENDERIZAÇÃO DOS CONCEITOS ==========
function renderConceitosArquivos() {
  const langText = getLanguageDisplayName();
  
  return `
    <div class="content-card">
      <h2 class="card-title">📁 Manipulação de Arquivos em Go</h2>
      <p>Em Go, a manipulação de arquivos é feita através do pacote <code>os</code>, <code>io</code> e <code>bufio</code>. Os principais tipos são <code>*os.File</code> e <code>bufio.Scanner</code>.</p>
      
      <div class="info-callout">
        <span class="info-icon-callout">📌</span>
        <div>
          <strong>Principais funções e tipos:</strong><br>
          • <code>os.Open(nome)</code> – abre arquivo para leitura<br>
          • <code>os.Create(nome)</code> – cria arquivo para escrita (sobrescreve)<br>
          • <code>os.OpenFile(nome, flag, permissão)</code> – abre com flags (O_RDONLY, O_WRONLY, O_APPEND, O_CREATE)<br>
          • <code>os.WriteFile(nome, []byte, permissão)</code> – escreve todo conteúdo de uma vez<br>
          • <code>bufio.NewScanner(file)</code> – leitor linha a linha<br>
          • <code>io.Copy(dst, src)</code> – copia dados entre streams<br>
          • <code>defer file.Close()</code> – garante fechamento ao final
        </div>
      </div>
      
      <div class="code-example">
        <div class="code-example-header">
          <span class="code-icon">📝</span>
          <span>Leitura linha a linha</span>
        </div>
        <pre><code>file, err := os.Open("dados.txt")
if err != nil { ... }
defer file.Close()

scanner := bufio.NewScanner(file)
for scanner.Scan() {
    linha := scanner.Text()
    // processa linha
}</code></pre>
      </div>
    </div>
    
    <div class="content-card">
      <h2 class="card-title">📂 Modos de Abertura</h2>
      <div class="operators-table">
        <div class="operator-row header">
          <div>Flag</div>
          <div>Descrição</div>
        </div>
        <div class="operator-row">
          <div><code>os.O_RDONLY</code></div>
          <div>Abre apenas para leitura</div>
        </div>
        <div class="operator-row">
          <div><code>os.O_WRONLY</code></div>
          <div>Abre apenas para escrita</div>
        </div>
        <div class="operator-row">
          <div><code>os.O_RDWR</code></div>
          <div>Abre para leitura e escrita</div>
        </div>
        <div class="operator-row">
          <div><code>os.O_APPEND</code></div>
          <div>Escreve no final</div>
        </div>
        <div class="operator-row">
          <div><code>os.O_CREATE</code></div>
          <div>Cria o arquivo se não existir</div>
        </div>
        <div class="operator-row">
          <div><code>os.O_TRUNC</code></div>
          <div>Trunca o arquivo ao abrir</div>
        </div>
      </div>
    </div>
    
    <div class="content-card">
      <h2 class="card-title">✍️ Escrita em Arquivos</h2>
      <div class="code-example">
        <div class="code-example-header">
          <span class="code-icon">📝</span>
          <span>Escrevendo com os.WriteFile</span>
        </div>
        <pre><code>dados := []byte("Olá mundo!\\n")
err := os.WriteFile("saida.txt", dados, 0644)</code></pre>
      </div>
      <div class="code-example">
        <div class="code-example-header">
          <span class="code-icon">📝</span>
          <span>Escrevendo com buffer (mais eficiente para muitas linhas)</span>
        </div>
        <pre><code>file, _ := os.Create("saida.txt")
defer file.Close()
writer := bufio.NewWriter(file)
writer.WriteString("Linha 1\\n")
writer.WriteString("Linha 2\\n")
writer.Flush()</code></pre>
      </div>
    </div>
    
    <div class="content-card">
      <h2 class="card-title">💡 Dicas Importantes</h2>
      <div class="info-callout">
        <span class="info-icon-callout">⚠️</span>
        <div>
          • Sempre verifique os erros retornados pelas funções de arquivo.<br>
          • Use <code>defer</code> para garantir o fechamento do arquivo após o uso.<br>
          • Em Go, caminhos relativos são relativos ao diretório de trabalho atual.<br>
          • Para ler grandes arquivos, use <code>bufio.Scanner</code> ou <code>bufio.Reader</code>.<br>
          • Prefira <code>os.WriteFile</code> para gravações curtas e <code>bufio.Writer</code> para grandes volumes.
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
        <span>📋 Exercícios de Manipulação de Arquivos (Go)</span>
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
      <p class="page-subtitle">Aprenda a ler e escrever dados em arquivos usando os pacotes os, bufio e io</p>
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