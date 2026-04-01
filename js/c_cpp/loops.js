const repeticaoExercises = [
  // NÍVEL 1 - BÁSICO (exercícios 1-5)
  {
    id: 1, nivel: 1,
    title: "Contador Simples",
    statement: "Elabore um programa em C/C++ que exiba os números de 1 a 10.",
    input: "Nenhuma entrada",
    output: "1, 2, 3, 4, 5, 6, 7, 8, 9, 10",
    code: `#include <stdio.h>

int main() {
    for (int i = 1; i <= 10; i++) {
        printf("%d\n", i);
    }
    return 0;
}`,
    testCases: [{ values: {}, result: "1 2 3 4 5 6 7 8 9 10", stepByStep: "i = 1 a 10" }],
    explanation: "Laço for com inicialização, condição e incremento."
  },
  {
    id: 2, nivel: 1,
    title: "Contagem Regressiva",
    statement: "Mostre uma contagem regressiva de 10 até 0, exibindo 'FOGO!' ao final.",
    input: "Nenhuma entrada",
    output: "10, 9, 8, ..., 0, FOGO!",
    code: `#include <stdio.h>

int main() {
    for (int i = 10; i >= 0; i--) {
        printf("%d", i);
        if (i > 0) printf(", ");
    }
    printf("\nFOGO!\n");
    return 0;
}`,
    testCases: [{ values: {}, result: "10,9,8,...,0,FOGO!", stepByStep: "i de 10 a 0" }],
    explanation: "Laço for com decremento."
  },
  {
    id: 3, nivel: 1,
    title: "Tabuada de um Número",
    statement: "Leia um número e exiba sua tabuada de 1 a 10.",
    input: "numero = 5",
    output: "5 x 1 = 5, 5 x 2 = 10, ...",
    code: `#include <stdio.h>

int main() {
    int num;
    printf("Informe um número: ");
    scanf("%d", &num);
    for (int i = 1; i <= 10; i++) {
        printf("%d x %d = %d\n", num, i, num * i);
    }
    return 0;
}`,
    testCases: [{ values: { num: 5 }, result: "tabuada do 5", stepByStep: "i de 1 a 10" }],
    explanation: "Laço for com multiplicação."
  },
  {
    id: 4, nivel: 1,
    title: "Números Pares",
    statement: "Exiba todos os números pares entre 1 e 20.",
    input: "Nenhuma entrada",
    output: "2, 4, 6, 8, 10, 12, 14, 16, 18, 20",
    code: `#include <stdio.h>

int main() {
    for (int i = 2; i <= 20; i += 2) {
        printf("%d", i);
        if (i < 20) printf(", ");
    }
    printf("\n");
    return 0;
}`,
    testCases: [{ values: {}, result: "2,4,6,...,20", stepByStep: "i incrementa de 2 em 2" }],
    explanation: "Incremento de 2 para gerar apenas pares."
  },
  {
    id: 5, nivel: 1,
    title: "Números Ímpares Regressivos",
    statement: "Exiba os números ímpares de 15 até 1 em ordem decrescente.",
    input: "Nenhuma entrada",
    output: "15, 13, 11, 9, 7, 5, 3, 1",
    code: `#include <stdio.h>

int main() {
    for (int i = 15; i >= 1; i--) {
        if (i % 2 != 0) {
            printf("%d", i);
            if (i > 1) printf(", ");
        }
    }
    printf("\n");
    return 0;
}`,
    testCases: [{ values: {}, result: "15,13,11,...,1", stepByStep: "i de 15 a 1, filtra ímpares" }],
    explanation: "Laço decrescente com filtro de números ímpares."
  },

  // NÍVEL 2 - ACUMULADORES (exercícios 6-10)
  {
    id: 6, nivel: 2,
    title: "Somador de Números",
    statement: "Leia 5 números e calcule a soma total.",
    input: "2, 4, 6, 8, 10",
    output: "Soma = 30",
    code: `#include <stdio.h>

int main() {
    int soma = 0, num;
    for (int i = 1; i <= 5; i++) {
        printf("Informe o %dº número: ", i);
        scanf("%d", &num);
        soma += num;
    }
    printf("A soma é: %d\n", soma);
    return 0;
}`,
    testCases: [{ values: { numeros: [2,4,6,8,10] }, result: 30, stepByStep: "acumulando soma" }],
    explanation: "Variável acumuladora."
  },
  {
    id: 7, nivel: 2,
    title: "Média de uma Turma",
    statement: "Calcule a média das notas de 8 alunos.",
    input: "8 notas: 7.5, 8.0, 6.5, 9.0, 7.0, 8.5, 6.0, 9.5",
    output: "Média = 7.75",
    code: `#include <stdio.h>

int main() {
    const int NUM_ALUNOS = 8;
    double nota, soma = 0.0;
    for (int i = 1; i <= NUM_ALUNOS; i++) {
        printf("Informe a nota do %dº aluno: ", i);
        scanf("%lf", &nota);
        soma += nota;
    }
    double media = soma / NUM_ALUNOS;
    printf("A média da turma é: %.2f\n", media);
    return 0;
}`,
    testCases: [{ values: { notas: [7.5,8.0,6.5,9.0,7.0,8.5,6.0,9.5] }, result: 7.75, stepByStep: "soma = 62; média = 62/8 = 7.75" }],
    explanation: "Acumula notas e divide pela quantidade."
  },
  {
    id: 8, nivel: 2,
    title: "Fatorial",
    statement: "Calcule o fatorial de um número N.",
    input: "N = 5",
    output: "5! = 120",
    code: `#include <stdio.h>

int main() {
    int num;
    printf("Informe um número: ");
    scanf("%d", &num);
    int fat = 1;
    for (int i = num; i >= 2; i--) {
        fat *= i;
    }
    printf("%d! = %d\n", num, fat);
    return 0;
}`,
    testCases: [{ values: { num: 5 }, result: 120, stepByStep: "5×4×3×2×1 = 120" }],
    explanation: "Acumulador multiplicativo."
  },
  {
    id: 9, nivel: 2,
    title: "Soma de Pares e Ímpares",
    statement: "Leia 15 números e exiba soma e quantidade de pares e ímpares.",
    input: "15 números: 1 a 15",
    output: "Soma pares: 56, Soma ímpares: 64, Qtd pares: 7, Qtd ímpares: 8",
    code: `#include <stdio.h>

int main() {
    const int LIMITE = 15;
    int sp = 0, si = 0, qp = 0, qi = 0, num;
    for (int i = 1; i <= LIMITE; i++) {
        printf("Informe o %dº número: ", i);
        scanf("%d", &num);
        if (num % 2 == 0) {
            qp++;
            sp += num;
        } else {
            qi++;
            si += num;
        }
    }
    printf("Soma dos pares: %d\n", sp);
    printf("Soma dos ímpares: %d\n", si);
    printf("Quantidade de pares: %d\n", qp);
    printf("Quantidade de ímpares: %d\n", qi);
    return 0;
}`,
    testCases: [{ values: { numeros: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15] }, result: "sp=56, si=64, qp=7, qi=8", stepByStep: "classifica e acumula" }],
    explanation: "Quatro acumuladores: dois para somas e dois para contagens."
  },
  {
    id: 10, nivel: 2,
    title: "Análise de Números",
    statement: "Leia 10 números e informe maior, menor, soma e média.",
    input: "5, 8, 3, 12, 7, 9, 4, 6, 11, 10",
    output: "Maior: 12, Menor: 3, Soma: 75, Média: 7.5",
    code: `#include <stdio.h>

int main() {
    const int LIMITE = 10;
    int num, maior, menor, soma = 0;
    printf("Informe o 1º número: ");
    scanf("%d", &num);
    maior = menor = num;
    soma = num;
    for (int i = 2; i <= LIMITE; i++) {
        printf("Informe o %dº número: ", i);
        scanf("%d", &num);
        if (num > maior) maior = num;
        if (num < menor) menor = num;
        soma += num;
    }
    double media = (double)soma / LIMITE;
    printf("Maior: %d\n", maior);
    printf("Menor: %d\n", menor);
    printf("Soma: %d\n", soma);
    printf("Média: %.1f\n", media);
    return 0;
}`,
    testCases: [{ values: { numeros: [5,8,3,12,7,9,4,6,11,10] }, result: "maior=12, menor=3, soma=75, media=7.5", stepByStep: "atualiza maior/menor" }],
    explanation: "Inicializa com primeiro número, atualiza comparando."
  },

  // NÍVEL 3 - VALIDAÇÃO E CONDIÇÕES DE PARADA (exercícios 11-14)
  {
    id: 11, nivel: 3,
    title: "Validação de Senha",
    statement: "Solicite senha até digitar '123456'.",
    input: "tentativas: '000000', '111111', '123456'",
    output: "ACESSO PERMITIDO",
    code: `#include <stdio.h>
#include <string.h>

int main() {
    char senha[20];
    do {
        printf("Informe a senha: ");
        scanf("%s", senha);
        if (strcmp(senha, "123456") != 0) {
            printf("Senha incorreta! Tente novamente.\n");
        }
    } while (strcmp(senha, "123456") != 0);
    printf("ACESSO PERMITIDO\n");
    return 0;
}`,
    testCases: [{ values: { tentativas: ["000000","111111","123456"] }, result: "ACESSO PERMITIDO", stepByStep: "repete até acertar" }],
    explanation: "Laço do-while garante pelo menos uma execução."
  },
  {
    id: 12, nivel: 3,
    title: "Validação de Notas",
    statement: "Leia notas de 15 alunos validando entre 0 e 10.",
    input: "notas com validação",
    output: "Média final",
    code: `#include <stdio.h>

int main() {
    const int NUM_ALUNOS = 15;
    double nota, soma = 0.0;
    for (int i = 1; i <= NUM_ALUNOS; i++) {
        do {
            printf("Informe a nota do %dº aluno (0-10): ", i);
            scanf("%lf", &nota);
            if (nota < 0 || nota > 10) {
                printf("Nota inválida! Digite um valor entre 0 e 10.\n");
            }
        } while (nota < 0 || nota > 10);
        soma += nota;
    }
    double media = soma / NUM_ALUNOS;
    printf("Média final: %.2f\n", media);
    return 0;
}`,
    testCases: [{ values: { notas: [-1,11,7.5] }, result: "aceita 7.5", stepByStep: "repete até nota válida" }],
    explanation: "Laço aninhado para validação."
  },
  {
    id: 13, nivel: 3,
    title: "Leitura com Condição de Parada",
    statement: "Leia números até digitar 0 e mostre quantos foram digitados.",
    input: "5, 8, 3, 0",
    output: "Foram digitados 3 números",
    code: `#include <stdio.h>

int main() {
    int num, contador = 0;
    while (1) {
        printf("Informe um número (0 para parar): ");
        scanf("%d", &num);
        if (num == 0) break;
        contador++;
    }
    printf("Foram digitados %d números\n", contador);
    return 0;
}`,
    testCases: [{ values: { numeros: [5,8,3,0] }, result: "3 números", stepByStep: "conta até receber 0" }],
    explanation: "Laço infinito com break quando o número for zero."
  },
  {
    id: 14, nivel: 3,
    title: "Acumulador Condicional (Vendas)",
    statement: "Leia vendas até digitar 0 e exiba total, vendas acima de 1000 e média.",
    input: "1500, 800, 2000, 0",
    output: "Total: 4300, Acima de 1000: 2, Média: 1433.33",
    code: `#include <stdio.h>

int main() {
    double valor, total = 0.0, media;
    int qtde = 0, acima = 0;
    while (1) {
        printf("Informe o valor da venda (0 para encerrar): R$ ");
        scanf("%lf", &valor);
        if (valor == 0) break;
        qtde++;
        total += valor;
        if (valor > 1000) acima++;
    }
    if (qtde > 0) {
        media = total / qtde;
        printf("Total de vendas: R$ %.2f\n", total);
        printf("Vendas acima de R$1000: %d\n", acima);
        printf("Média das vendas: R$ %.2f\n", media);
    }
    return 0;
}`,
    testCases: [{ values: { vendas: [1500,800,2000,0] }, result: "total=4300, acima=2, media=1433.33", stepByStep: "acumula e conta" }],
    explanation: "Múltiplos acumuladores."
  },

  // NÍVEL 4 - SEQUÊNCIAS MATEMÁTICAS (exercícios 15-17)
  {
    id: 15, nivel: 4,
    title: "Sequência de Fibonacci",
    statement: "Exiba os primeiros 12 termos da sequência de Fibonacci.",
    input: "Nenhuma entrada",
    output: "0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89",
    code: `#include <stdio.h>

int main() {
    int t1 = 0, t2 = 1, proximo;
    printf("%d, %d", t1, t2);
    for (int i = 3; i <= 12; i++) {
        proximo = t1 + t2;
        printf(", %d", proximo);
        t1 = t2;
        t2 = proximo;
    }
    printf("\n");
    return 0;
}`,
    testCases: [{ values: {}, result: "0,1,1,2,3,5,8,13,21,34,55,89", stepByStep: "cada termo = soma dos dois anteriores" }],
    explanation: "Atualização de variáveis a cada iteração."
  },
  {
    id: 16, nivel: 4,
    title: "Números Primos",
    statement: "Verifique se um número N é primo.",
    input: "N = 13",
    output: "13 é PRIMO",
    code: `#include <stdio.h>
#include <math.h>

int main() {
    int num, i;
    int ehPrimo = 1;
    printf("Informe um número: ");
    scanf("%d", &num);
    if (num <= 1) ehPrimo = 0;
    else {
        int limite = (int)sqrt(num);
        for (i = 2; i <= limite; i++) {
            if (num % i == 0) {
                ehPrimo = 0;
                break;
            }
        }
    }
    if (ehPrimo) printf("%d é PRIMO\n", num);
    else printf("%d NÃO é primo\n", num);
    return 0;
}`,
    testCases: [{ values: { num: 13 }, result: "PRIMO", stepByStep: "não tem divisores" }],
    explanation: "Testa divisores até a raiz quadrada."
  },
  {
    id: 17, nivel: 4,
    title: "Números Perfeitos",
    statement: "Encontre números perfeitos entre 1 e 1000.",
    input: "Nenhuma entrada",
    output: "6, 28, 496",
    code: `#include <stdio.h>

int main() {
    const int LIMITE = 1000;
    for (int i = 2; i <= LIMITE; i++) {
        int soma = 0;
        for (int j = 1; j < i; j++) {
            if (i % j == 0) soma += j;
        }
        if (soma == i) {
            printf("%d", i);
            if (i < 496) printf(", ");
        }
    }
    printf("\n");
    return 0;
}`,
    testCases: [{ values: {}, result: "6, 28, 496", stepByStep: "soma dos divisores = número" }],
    explanation: "Laços aninhados para somar divisores."
  },

  // NÍVEL 5 - LAÇOS ANINHADOS E PADRÕES (exercícios 18-20)
  {
    id: 18, nivel: 5,
    title: "Triângulo de Números",
    statement: "Exiba um triângulo numérico onde na linha i, o número i se repete i vezes.",
    input: "N = 4",
    output: "1\n2 2\n3 3 3\n4 4 4 4",
    code: `#include <stdio.h>

int main() {
    int n;
    printf("Informe um número (1-9): ");
    scanf("%d", &n);
    for (int i = 1; i <= n; i++) {
        for (int j = 1; j <= i; j++) {
            printf("%d ", i);
        }
        printf("\n");
    }
    return 0;
}`,
    testCases: [{ values: { n: 4 }, result: "1\n2 2\n3 3 3\n4 4 4 4", stepByStep: "laços aninhados" }],
    explanation: "Laço externo para linhas, interno para colunas."
  },
  {
    id: 19, nivel: 5,
    title: "Jogo de Adivinhação",
    statement: "Jogo onde o computador sorteia um número e o usuário tenta adivinhar.",
    input: "palpites: 50, 75, 62, 70",
    output: "Acertou! Tentativas: 4",
    code: `#include <stdio.h>
#include <stdlib.h>
#include <time.h>

int main() {
    srand(time(NULL));
    int NS = rand() % 100 + 1;
    int palpite, tentativas = 0;
    printf("Tente adivinhar o número secreto (1-100)!\n");
    do {
        printf("Digite seu palpite: ");
        scanf("%d", &palpite);
        tentativas++;
        if (palpite > NS) printf("MUITO ALTO! Tente um número menor.\n");
        else if (palpite < NS) printf("MUITO BAIXO! Tente um número maior.\n");
    } while (palpite != NS);
    printf("\nPARABÉNS! Você acertou em %d tentativas!\n", tentativas);
    return 0;
}`,
    testCases: [{ values: { NS: 70, palpites: [50,75,62,70] }, result: "acertou em 4", stepByStep: "loop até acertar" }],
    explanation: "Do-while com dicas a cada tentativa."
  },
  {
    id: 20, nivel: 5,
    title: "Menu Interativo",
    statement: "Menu com opções: 1-Somar, 2-Subtrair, 3-Sair.",
    input: "opções: 1 (10,5), 2 (20,8), 3",
    output: "Soma: 15, Subtração: 12, Encerrando...",
    code: `#include <stdio.h>

int main() {
    int op;
    double a, b;
    do {
        printf("\n===== MENU DE OPÇÕES =====\n");
        printf("1 - Somar dois números\n");
        printf("2 - Subtrair dois números\n");
        printf("3 - Sair\n");
        printf("Escolha uma opção: ");
        scanf("%d", &op);
        switch (op) {
            case 1:
                printf("Informe o primeiro número: ");
                scanf("%lf", &a);
                printf("Informe o segundo número: ");
                scanf("%lf", &b);
                printf("Resultado: %.2f\n", a + b);
                break;
            case 2:
                printf("Informe o primeiro número: ");
                scanf("%lf", &a);
                printf("Informe o segundo número: ");
                scanf("%lf", &b);
                printf("Resultado: %.2f\n", a - b);
                break;
            case 3:
                printf("Encerrando o programa...\n");
                break;
            default:
                printf("Opção inválida!\n");
        }
        if (op != 3) {
            printf("\nPressione ENTER para continuar...");
            getchar(); getchar(); // limpa buffer e aguarda ENTER
        }
    } while (op != 3);
    return 0;
}`,
    testCases: [{ values: { opcoes: [1,10,5,2,20,8,3] }, result: "soma=15, subtração=12, encerra", stepByStep: "loop até opção 3" }],
    explanation: "Combinação de do-while e switch-case."
  }
];

// Renderiza a seção de conceitos de repetição em C/C++
function renderConceitosRepeticao() {
  return `
    <div class="content-card">
      <h2 class="card-title">🔄 Laços de Repetição em C/C++</h2>
      <p>C/C++ oferecem três formas principais de laços: <strong>for</strong>, <strong>while</strong> e <strong>do-while</strong>. O <code>for</code> é usado quando se conhece o número de repetições; <code>while</code> repete enquanto uma condição for verdadeira; <code>do-while</code> executa o bloco pelo menos uma vez.</p>
    </div>

    <div class="content-card">
      <h2 class="card-title">🔄 Laço for</h2>
      <div class="code-example">
        <pre><code>for (inicialização; condição; incremento) {
    // bloco
}</code></pre>
      </div>
      <div class="code-example">
        <pre><code>for (int i = 1; i <= 10; i++) {
    printf("%d\n", i);
}</code></pre>
      </div>
    </div>

    <div class="content-card">
      <h2 class="card-title">🔄 Laço while</h2>
      <div class="code-example">
        <pre><code>while (condição) {
    // bloco
}</code></pre>
      </div>
      <div class="code-example">
        <pre><code>int i = 1;
while (i <= 10) {
    printf("%d\n", i);
    i++;
}</code></pre>
      </div>
    </div>

    <div class="content-card">
      <h2 class="card-title">🔄 Laço do-while</h2>
      <div class="code-example">
        <pre><code>do {
    // bloco
} while (condição);</code></pre>
      </div>
      <div class="code-example">
        <pre><code>int i = 1;
do {
    printf("%d\n", i);
    i++;
} while (i <= 10);</code></pre>
      </div>
    </div>
  `;
}

// Renderiza a seção de exercícios de repetição
function renderExerciciosRepeticao() {
  const currentEx = repeticaoExercises.find(e => e.id === window.currentRepeticaoExercise) || repeticaoExercises[0];

  const niveis = {
    1: { nome: "⭐ Básico", cor: "#10b981" },
    2: { nome: "⭐⭐ Acumuladores", cor: "#f59e0b" },
    3: { nome: "⭐⭐⭐ Validação", cor: "#3b82f6" },
    4: { nome: "⭐⭐⭐⭐ Sequências Matemáticas", cor: "#8b5cf6" },
    5: { nome: "⭐⭐⭐⭐⭐ Laços Aninhados", cor: "#ef4444" }
  };

  return `
    <div class="exercises-filter">
      <div class="filter-header">
        <span>📋 Exercícios de Repetição (C/C++)</span>
        <span class="filter-count">${repeticaoExercises.length} exercícios disponíveis</span>
      </div>
      <div class="filter-buttons">
        ${repeticaoExercises.map(ex => `
          <button class="filter-btn ${ex.id === window.currentRepeticaoExercise ? 'active' : ''}" data-ex-id="${ex.id}" title="Nível ${ex.nivel}: ${niveis[ex.nivel].nome}">
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
              ${test.values && Object.keys(test.values).length > 0 ? `
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

// Função para renderizar a página completa de repetição
function renderLoopsPage() {
  const currentSubpage = window.currentRepeticaoSubpage || 'conceitos';

  return `
    <div class="page-header">
      <h1 class="page-title"><span>🔄</span> Estruturas de Repetição em C/C++</h1>
      <p class="page-subtitle">Aprenda a criar loops com for, while e do-while</p>
    </div>

    <div class="sub-nav">
      <button class="sub-nav-btn ${currentSubpage === 'conceitos' ? 'active' : ''}" data-subpage="conceitos">
        📘 Conceitos
      </button>
      <button class="sub-nav-btn ${currentSubpage === 'exercicios' ? 'active' : ''}" data-subpage="exercicios">
        ✏️ Exercícios
      </button>
    </div>

    <div id="repeticao-content">
      ${currentSubpage === 'conceitos' ? renderConceitosRepeticao() : renderExerciciosRepeticao()}
    </div>
  `;
}