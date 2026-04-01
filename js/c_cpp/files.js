// ========== DADOS DOS EXERCÍCIOS DE ARQUIVOS EM C/C++ ==========
const filesExercises = [
  // NÍVEL 1 - LEITURA BÁSICA (exercícios 1-3)
  {
    id: 1,
    nivel: 1,
    title: "Leitura de Arquivo e Exibição",
    statement: "Escreva um programa em C/C++ que leia um arquivo chamado 'dados.txt' linha por linha e exiba seu conteúdo no console. Considere que o arquivo existe na mesma pasta.",
    input: "Arquivo 'dados.txt' com algumas linhas",
    output: "Conteúdo do arquivo exibido",
    code: `#include <stdio.h>

int main() {
    FILE *arquivo = fopen("dados.txt", "r");
    if (arquivo == NULL) {
        printf("Erro ao abrir o arquivo.\n");
        return 1;
    }
    char linha[256];
    printf("Conteúdo do arquivo:\n");
    while (fgets(linha, sizeof(linha), arquivo) != NULL) {
        printf("%s", linha);
    }
    fclose(arquivo);
    return 0;
}`,
    testCases: [
      { values: { arquivo: "dados.txt com 'Linha 1\\nLinha 2\\nLinha 3'" }, result: "Linha 1\\nLinha 2\\nLinha 3", stepByStep: "Abre arquivo, lê linha por linha com fgets, exibe." }
    ],
    explanation: "Usamos `fopen` com modo 'r' para abrir o arquivo. `fgets` lê linha por linha até o final. `fclose` fecha o arquivo."
  },
  {
    id: 2,
    nivel: 1,
    title: "Escrita de Arquivo",
    statement: "Crie um programa que solicite ao usuário o nome do arquivo e uma frase, e grave essa frase no arquivo (sobrescrevendo).",
    input: "arquivo = 'frase.txt', frase = 'Olá, mundo!'",
    output: "Arquivo criado com a frase",
    code: `#include <stdio.h>

int main() {
    char nomeArquivo[100];
    char frase[200];
    printf("Informe o nome do arquivo: ");
    scanf("%s", nomeArquivo);
    getchar(); // consome o newline
    printf("Informe a frase a ser gravada: ");
    fgets(frase, sizeof(frase), stdin);
    // remove o newline do final
    int len = strlen(frase);
    if (len > 0 && frase[len-1] == '\n') frase[len-1] = '\0';
    FILE *arquivo = fopen(nomeArquivo, "w");
    if (arquivo == NULL) {
        printf("Erro ao abrir o arquivo.\n");
        return 1;
    }
    fprintf(arquivo, "%s\n", frase);
    fclose(arquivo);
    printf("Arquivo gravado com sucesso!\n");
    return 0;
}`,
    testCases: [
      { values: { nomeArquivo: "teste.txt", frase: "Hello" }, result: "Arquivo criado", stepByStep: "Abre para escrita ('w'), escreve a frase, fecha." }
    ],
    explanation: "Modo 'w' cria um novo arquivo ou sobrescreve o existente. `fprintf` escreve a string."
  },
  {
    id: 3,
    nivel: 1,
    title: "Append em Arquivo",
    statement: "Escreva um programa que adicione (append) uma nova linha ao final de um arquivo existente. Peça ao usuário o nome do arquivo e a linha a adicionar.",
    input: "arquivo = 'log.txt', linha = 'Nova entrada'",
    output: "Linha adicionada ao final",
    code: `#include <stdio.h>

int main() {
    char nomeArquivo[100];
    char linha[200];
    printf("Informe o nome do arquivo: ");
    scanf("%s", nomeArquivo);
    getchar(); // consome newline
    printf("Informe a linha a adicionar: ");
    fgets(linha, sizeof(linha), stdin);
    int len = strlen(linha);
    if (len > 0 && linha[len-1] == '\n') linha[len-1] = '\0';
    FILE *arquivo = fopen(nomeArquivo, "a");
    if (arquivo == NULL) {
        printf("Erro ao abrir o arquivo.\n");
        return 1;
    }
    fprintf(arquivo, "%s\n", linha);
    fclose(arquivo);
    printf("Linha adicionada ao final do arquivo!\n");
    return 0;
}`,
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
    code: `#include <stdio.h>

int main() {
    FILE *arquivo = fopen("dados.txt", "r");
    if (arquivo == NULL) {
        printf("Erro ao abrir arquivo.\n");
        return 1;
    }
    int linhas = 0;
    char linha[256];
    while (fgets(linha, sizeof(linha), arquivo) != NULL) {
        linhas++;
    }
    fclose(arquivo);
    printf("O arquivo possui %d linhas.\n", linhas);
    return 0;
}`,
    testCases: [
      { values: { arquivo: "3 linhas" }, result: "3 linhas", stepByStep: "Lê linha por linha e incrementa contador." }
    ],
    explanation: "Contador incrementado a cada linha lida."
  },
  {
    id: 5,
    nivel: 2,
    title: "Copiar Arquivo",
    statement: "Crie um programa que copie o conteúdo de um arquivo de origem para um arquivo de destino (ambos informados pelo usuário).",
    input: "origem = 'origem.txt', destino = 'copia.txt'",
    output: "Arquivo copiado",
    code: `#include <stdio.h>

int main() {
    char origem[100], destino[100];
    printf("Informe o nome do arquivo de origem: ");
    scanf("%s", origem);
    printf("Informe o nome do arquivo de destino: ");
    scanf("%s", destino);
    FILE *orig = fopen(origem, "r");
    if (orig == NULL) {
        printf("Erro ao abrir arquivo de origem.\n");
        return 1;
    }
    FILE *dest = fopen(destino, "w");
    if (dest == NULL) {
        printf("Erro ao criar arquivo de destino.\n");
        fclose(orig);
        return 1;
    }
    char ch;
    while ((ch = fgetc(orig)) != EOF) {
        fputc(ch, dest);
    }
    fclose(orig);
    fclose(dest);
    printf("Cópia concluída!\n");
    return 0;
}`,
    testCases: [
      { values: { origem: "origem.txt", destino: "copia.txt" }, result: "Arquivo copiado", stepByStep: "Copia caractere por caractere." }
    ],
    explanation: "Abrimos os dois arquivos e copiamos caractere por caractere com `fgetc` e `fputc`."
  },
  {
    id: 6,
    nivel: 2,
    title: "Somar Números de um Arquivo",
    statement: "Leia um arquivo contendo números inteiros (um por linha) e calcule a soma total. Mostre a soma.",
    input: "Arquivo 'numeros.txt' com: 10\\n20\\n30",
    output: "Soma = 60",
    code: `#include <stdio.h>
#include <stdlib.h>

int main() {
    FILE *arquivo = fopen("numeros.txt", "r");
    if (arquivo == NULL) {
        printf("Erro ao abrir arquivo.\n");
        return 1;
    }
    int soma = 0, num;
    char linha[20];
    while (fgets(linha, sizeof(linha), arquivo) != NULL) {
        num = atoi(linha);
        soma += num;
    }
    fclose(arquivo);
    printf("A soma dos números é: %d\n", soma);
    return 0;
}`,
    testCases: [
      { values: { numeros: [10,20,30] }, result: 60, stepByStep: "Converte cada linha para inteiro e acumula." }
    ],
    explanation: "Lê cada linha, converte para inteiro com `atoi` e soma."
  },

  // NÍVEL 3 - ESTRUTURAS E ANÁLISE (exercícios 7-9)
  {
    id: 7,
    nivel: 3,
    title: "Arquivo de Notas - Média",
    statement: "Leia um arquivo contendo notas de alunos (uma por linha). Calcule e exiba a média da turma.",
    input: "Arquivo 'notas.txt' com: 7.5\\n8.0\\n6.5\\n9.0",
    output: "Média = 7.75",
    code: `#include <stdio.h>
#include <stdlib.h>

int main() {
    FILE *arquivo = fopen("notas.txt", "r");
    if (arquivo == NULL) {
        printf("Erro ao abrir arquivo.\n");
        return 1;
    }
    double soma = 0.0;
    int cont = 0;
    char linha[20];
    while (fgets(linha, sizeof(linha), arquivo) != NULL) {
        double nota = atof(linha);
        soma += nota;
        cont++;
    }
    fclose(arquivo);
    if (cont == 0) {
        printf("Arquivo vazio!\n");
    } else {
        double media = soma / cont;
        printf("A média da turma é: %.2f\n", media);
    }
    return 0;
}`,
    testCases: [
      { values: { notas: [7.5,8.0,6.5,9.0] }, result: 7.75, stepByStep: "Acumula soma e conta; calcula média." }
    ],
    explanation: "Lê as notas, acumula soma e conta, depois calcula a média."
  },
  {
    id: 8,
    nivel: 3,
    title: "Maior e Menor Número",
    statement: "Leia um arquivo contendo números reais (um por linha) e encontre o maior e o menor valor. Exiba ambos.",
    input: "Arquivo 'dados.txt' com: 5.2\\n12.8\\n3.1\\n9.6",
    output: "Maior: 12.8, Menor: 3.1",
    code: `#include <stdio.h>
#include <stdlib.h>
#include <float.h>

int main() {
    FILE *arquivo = fopen("dados.txt", "r");
    if (arquivo == NULL) {
        printf("Erro ao abrir arquivo.\n");
        return 1;
    }
    double maior = -DBL_MAX, menor = DBL_MAX;
    char linha[20];
    while (fgets(linha, sizeof(linha), arquivo) != NULL) {
        double num = atof(linha);
        if (num > maior) maior = num;
        if (num < menor) menor = num;
    }
    fclose(arquivo);
    if (maior == -DBL_MAX) {
        printf("Arquivo vazio!\n");
    } else {
        printf("Maior valor: %.2f\n", maior);
        printf("Menor valor: %.2f\n", menor);
    }
    return 0;
}`,
    testCases: [
      { values: { numeros: [5.2,12.8,3.1,9.6] }, result: "maior=12.8, menor=3.1", stepByStep: "Lê e atualiza maior e menor." }
    ],
    explanation: "Lê os números, atualiza maior e menor usando limites iniciais extremos."
  },
  {
    id: 9,
    nivel: 3,
    title: "Filtrar Números Pares",
    statement: "Leia um arquivo com números inteiros (um por linha) e escreva em um novo arquivo apenas os números pares (um por linha).",
    input: "Arquivo 'numeros.txt' com: 1\\n2\\n3\\n4\\n5\\n6",
    output: "Arquivo 'pares.txt' com: 2\\n4\\n6",
    code: `#include <stdio.h>
#include <stdlib.h>

int main() {
    FILE *entrada = fopen("numeros.txt", "r");
    if (entrada == NULL) {
        printf("Erro ao abrir arquivo de entrada.\n");
        return 1;
    }
    FILE *saida = fopen("pares.txt", "w");
    if (saida == NULL) {
        printf("Erro ao criar arquivo de saída.\n");
        fclose(entrada);
        return 1;
    }
    char linha[20];
    while (fgets(linha, sizeof(linha), entrada) != NULL) {
        int num = atoi(linha);
        if (num % 2 == 0) {
            fprintf(saida, "%d\n", num);
        }
    }
    fclose(entrada);
    fclose(saida);
    printf("Números pares filtrados com sucesso!\n");
    return 0;
}`,
    testCases: [
      { values: { numeros: [1,2,3,4,5,6] }, result: "pares: 2,4,6", stepByStep: "Verifica par e escreve no destino." }
    ],
    explanation: "Lê linha por linha, testa paridade e escreve no arquivo de saída."
  },

  // NÍVEL 4 - PROCESSAMENTO AVANÇADO (exercício 10)
  {
    id: 10,
    nivel: 4,
    title: "Análise de Vendas",
    statement: "Leia um arquivo contendo vendas diárias de um mês (cada linha = valor da venda). Calcule: total de vendas, média, quantidade de vendas acima da média, e escreva um relatório em outro arquivo.",
    input: "Arquivo 'vendas.txt' com valores",
    output: "Relatório 'relatorio.txt' gerado",
    code: `#include <stdio.h>
#include <stdlib.h>

#define MAX_VENDAS 100

int main() {
    FILE *entrada = fopen("vendas.txt", "r");
    if (entrada == NULL) {
        printf("Erro ao abrir arquivo de vendas.\n");
        return 1;
    }
    double vendas[MAX_VENDAS];
    int n = 0;
    char linha[20];
    while (fgets(linha, sizeof(linha), entrada) != NULL && n < MAX_VENDAS) {
        vendas[n] = atof(linha);
        n++;
    }
    fclose(entrada);
    if (n == 0) {
        printf("Arquivo de vendas vazio!\n");
        return 1;
    }
    double total = 0.0;
    for (int i = 0; i < n; i++) total += vendas[i];
    double media = total / n;
    int acima = 0;
    for (int i = 0; i < n; i++) {
        if (vendas[i] > media) acima++;
    }
    FILE *saida = fopen("relatorio.txt", "w");
    if (saida == NULL) {
        printf("Erro ao criar arquivo de relatório.\n");
        return 1;
    }
    fprintf(saida, "RELATÓRIO DE VENDAS\n");
    fprintf(saida, "Total de vendas: R$ %.2f\n", total);
    fprintf(saida, "Média das vendas: R$ %.2f\n", media);
    fprintf(saida, "Vendas acima da média: %d\n", acima);
    fclose(saida);
    printf("Relatório gerado com sucesso!\n");
    return 0;
}`,
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
      <h2 class="card-title">📁 Manipulação de Arquivos em C/C++</h2>
      <p>Em C/C++, a manipulação de arquivos é feita através da biblioteca padrão <code>stdio.h</code>. As funções principais são <code>fopen()</code>, <code>fclose()</code>, <code>fprintf()</code>, <code>fscanf()</code>, <code>fgets()</code>, <code>fputs()</code>, etc. O ponteiro <code>FILE*</code> é usado para referenciar o arquivo aberto.</p>
      
      <div class="info-callout">
        <span class="info-icon-callout">📌</span>
        <div>
          <strong>Principais funções e modos:</strong><br>
          • <code>fopen(caminho, modo)</code> – abre um arquivo, retorna ponteiro ou NULL.<br>
          • <code>fclose(arquivo)</code> – fecha o arquivo.<br>
          • <code>fprintf(arquivo, formato, ...)</code> – escreve dados formatados.<br>
          • <code>fscanf(arquivo, formato, ...)</code> – lê dados formatados.<br>
          • <code>fgets(buffer, tamanho, arquivo)</code> – lê uma linha.<br>
          • <code>fputs(string, arquivo)</code> – escreve uma string.<br>
          • <code>fgetc(arquivo)</code> / <code>fputc(c, arquivo)</code> – leitura/escrita caractere.<br>
          • Modos: <code>"r"</code> (leitura), <code>"w"</code> (escrita, sobrescreve), <code>"a"</code> (append), <code>"r+"</code> (leitura/escrita), etc.
        </div>
      </div>
      
      <div class="code-example">
        <div class="code-example-header">
          <span class="code-icon">📝</span>
          <span>Leitura linha por linha</span>
        </div>
        <pre><code>FILE *arquivo = fopen("dados.txt", "r");
if (arquivo) {
    char linha[256];
    while (fgets(linha, sizeof(linha), arquivo)) {
        printf("%s", linha);
    }
    fclose(arquivo);
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
          <span>Escrevendo com fprintf</span>
        </div>
        <pre><code>FILE *arq = fopen("saida.txt", "w");
fprintf(arq, "Texto %d\n", 42);
fclose(arq);</code></pre>
      </div>
    </div>
    
    <div class="content-card">
      <h2 class="card-title">💡 Dicas Importantes</h2>
      <div class="info-callout">
        <span class="info-icon-callout">⚠️</span>
        <div>
          • Sempre verifique se o ponteiro retornado por \`fopen\` é diferente de NULL.<br>
          • Use \`fgets\` em vez de \`gets\` para evitar estouro de buffer.<br>
          • Em C, \`fgets\` mantém o \'\n\' no final; você pode removê-lo se necessário.<br>
          • Para arquivos grandes, prefira leitura em bloco com \`fread\`.<br>
          • Não esqueça de fechar o arquivo com \`fclose\` após o uso.
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
        <span>📋 Exercícios de Manipulação de Arquivos (C/C++)</span>
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
          <span>💻 Código de Resolução (C/C++)</span>
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
      <p class="page-subtitle">Aprenda a ler e escrever dados em arquivos usando a biblioteca padrão C</p>
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