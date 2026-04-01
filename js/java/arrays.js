// js/java/arrays.js

// ========== DADOS DOS EXERCÍCIOS DE VETORES E MATRIZES EM JAVA ==========
const vetoresMatrizesExercises = [
  // NÍVEL 1 - VETORES BÁSICOS (exercícios 1-4)
  {
    id: 1,
    nivel: 1,
    title: "Soma de Elementos",
    statement: "Escreva um algoritmo em Java que leia 5 números inteiros, armazene em um array e calcule a soma de todos os elementos.",
    input: "5 números: 10, 20, 30, 40, 50",
    output: "Soma = 150",
    code: `import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int[] numeros = new int[5];
        int soma = 0;
        
        for (int i = 0; i < 5; i++) {
            System.out.print("Digite o " + (i + 1) + "º número: ");
            numeros[i] = scanner.nextInt();
            soma += numeros[i];
        }
        
        System.out.println("A soma dos elementos é: " + soma);
        scanner.close();
    }
}`,
    testCases: [
      { values: { numeros: [10, 20, 30, 40, 50] }, result: 150, stepByStep: "soma = 0+10=10; +20=30; +30=60; +40=100; +50=150" }
    ],
    explanation: "Declaramos um array de 5 posições. Usamos um laço 'for' para preencher cada posição com um valor lido do usuário. Simultaneamente, acumulamos a soma em uma variável. Ao final, exibimos o resultado."
  },
  {
    id: 2,
    nivel: 1,
    title: "Média das Notas",
    statement: "Crie um programa em Java que leia as notas de 10 alunos, armazene em um array e calcule a média da turma.",
    input: "10 notas: 7.5, 8.0, 6.5, 9.0, 7.0, 8.5, 6.0, 9.5, 8.0, 7.0",
    output: "Média = 7.7",
    code: `import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        final int NUM_ALUNOS = 10;
        double[] notas = new double[NUM_ALUNOS];
        double soma = 0;
        
        for (int i = 0; i < NUM_ALUNOS; i++) {
            System.out.print("Digite a nota do " + (i + 1) + "º aluno: ");
            notas[i] = scanner.nextDouble();
            soma += notas[i];
        }
        
        double media = soma / NUM_ALUNOS;
        System.out.printf("A média da turma é: %.2f%n", media);
        scanner.close();
    }
}`,
    testCases: [
      { values: { notas: [7.5, 8.0, 6.5, 9.0, 7.0, 8.5, 6.0, 9.5, 8.0, 7.0] }, result: 7.7, stepByStep: "soma = 77.0; média = 77.0 / 10 = 7.7" }
    ],
    explanation: "Criamos um array para armazenar as 10 notas. Após preencher, calculamos a soma e depois a média dividindo pelo número de alunos."
  },
  {
    id: 3,
    nivel: 1,
    title: "Maior Valor",
    statement: "Desenvolva um algoritmo em Java que encontre e mostre o maior valor em um array de 8 números reais.",
    input: "8 números: 15, 42, 8, 23, 56, 31, 19, 47",
    output: "Maior valor = 56",
    code: `import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        final int TAMANHO = 8;
        double[] numeros = new double[TAMANHO];
        
        for (int i = 0; i < TAMANHO; i++) {
            System.out.print("Digite o " + (i + 1) + "º número: ");
            numeros[i] = scanner.nextDouble();
        }
        
        double maior = numeros[0];
        for (int i = 1; i < TAMANHO; i++) {
            if (numeros[i] > maior) {
                maior = numeros[i];
            }
        }
        
        System.out.println("O maior valor é: " + maior);
        scanner.close();
    }
}`,
    testCases: [
      { values: { numeros: [15, 42, 8, 23, 56, 31, 19, 47] }, result: 56, stepByStep: "maior = 15; 42 > 15 → maior=42; 8 não; 23 não; 56 > 42 → maior=56; 31,19,47 não" }
    ],
    explanation: "Inicializamos a variável 'maior' com o primeiro elemento do array. Depois, percorremos os demais elementos comparando se cada um é maior que o valor atual. Se for, atualizamos."
  },
  {
    id: 4,
    nivel: 1,
    title: "Inversão de Array",
    statement: "Escreva um programa em Java que leia 6 números e os exiba na ordem inversa à da leitura.",
    input: "6 números: 10, 20, 30, 40, 50, 60",
    output: "Ordem inversa: 60, 50, 40, 30, 20, 10",
    code: `import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        final int TAMANHO = 6;
        int[] numeros = new int[TAMANHO];
        
        for (int i = 0; i < TAMANHO; i++) {
            System.out.print("Digite o " + (i + 1) + "º número: ");
            numeros[i] = scanner.nextInt();
        }
        
        System.out.println("Ordem inversa:");
        for (int i = TAMANHO - 1; i >= 0; i--) {
            System.out.println(numeros[i]);
        }
        scanner.close();
    }
}`,
    testCases: [
      { values: { numeros: [10, 20, 30, 40, 50, 60] }, result: "60, 50, 40, 30, 20, 10", stepByStep: "Percorre o array do último índice (5) até o primeiro (0)" }
    ],
    explanation: "Primeiro preenchemos o array normalmente. Depois, para exibir na ordem inversa, percorremos o array do último índice (TAMANHO-1) até o primeiro (0)."
  },

  // NÍVEL 2 - BUSCA E ESTATÍSTICAS (exercícios 5-7)
  {
    id: 5,
    nivel: 2,
    title: "Busca de Elemento",
    statement: "Desenvolva um algoritmo em Java que leia um array de 15 números e verifique se um determinado valor existe no array, mostrando sua posição.",
    input: "Array: 1..15 | Buscar: 7",
    output: "Valor 7 encontrado na posição 6",
    code: `import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        final int TAMANHO = 15;
        int[] numeros = new int[TAMANHO];
        
        for (int i = 0; i < TAMANHO; i++) {
            System.out.print("Digite o " + (i + 1) + "º número: ");
            numeros[i] = scanner.nextInt();
        }
        
        System.out.print("Digite o valor a ser buscado: ");
        int busca = scanner.nextInt();
        
        int posicao = -1;
        for (int i = 0; i < TAMANHO; i++) {
            if (numeros[i] == busca) {
                posicao = i;
                break;
            }
        }
        
        if (posicao != -1) {
            System.out.println("Valor " + busca + " encontrado na posição " + (posicao + 1));
        } else {
            System.out.println("Valor " + busca + " não encontrado no array");
        }
        scanner.close();
    }
}`,
    testCases: [
      { values: { numeros: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15], busca: 7 }, result: "posição 7", stepByStep: "Percorre o array até encontrar 7 na posição 6 (índice 6, posição 7)" }
    ],
    explanation: "Percorremos o array comparando cada elemento com o valor buscado. Se encontrar, guardamos a posição e usamos 'break' para interromper o laço. Se não encontrar, posição permanece -1."
  },
  {
    id: 6,
    nivel: 2,
    title: "Estatísticas de Temperatura",
    statement: "Leia as temperaturas de uma semana (7 dias), armazene em um array e mostre: média, maior, menor e quantos dias ficaram acima da média.",
    input: "Temperaturas: 23, 25, 22, 28, 26, 24, 27",
    output: "Média: 25.0, Maior: 28, Menor: 22, Acima da média: 3 dias",
    code: `import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        final int DIAS = 7;
        double[] temperaturas = new double[DIAS];
        double soma = 0;
        
        for (int i = 0; i < DIAS; i++) {
            System.out.print("Temperatura do dia " + (i + 1) + ": ");
            temperaturas[i] = scanner.nextDouble();
            soma += temperaturas[i];
        }
        
        double media = soma / DIAS;
        double maior = temperaturas[0];
        double menor = temperaturas[0];
        int acimaMedia = 0;
        
        for (int i = 0; i < DIAS; i++) {
            if (temperaturas[i] > maior) maior = temperaturas[i];
            if (temperaturas[i] < menor) menor = temperaturas[i];
            if (temperaturas[i] > media) acimaMedia++;
        }
        
        System.out.printf("Média: %.2f%n", media);
        System.out.println("Maior temperatura: " + maior);
        System.out.println("Menor temperatura: " + menor);
        System.out.println("Dias acima da média: " + acimaMedia);
        scanner.close();
    }
}`,
    testCases: [
      { values: { temperaturas: [23, 25, 22, 28, 26, 24, 27] }, result: "media=25, maior=28, menor=22, acima=3", stepByStep: "Soma=175, média=25; >25: 28,26,27 = 3 dias" }
    ],
    explanation: "Em um primeiro laço, acumulamos a soma. Depois calculamos a média. Em um segundo laço, encontramos maior, menor e contamos quantos valores são maiores que a média."
  },
  {
    id: 7,
    nivel: 2,
    title: "Crivo de Eratóstenes",
    statement: "Implemente o Crivo de Eratóstenes usando um array para encontrar todos os números primos até N.",
    input: "N = 30",
    output: "Primos: 2, 3, 5, 7, 11, 13, 17, 19, 23, 29",
    code: `import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        System.out.print("Informe o valor de N: ");
        int n = scanner.nextInt();
        
        boolean[] ehPrimo = new boolean[n + 1];
        
        // Inicializa todos como verdadeiro
        for (int i = 2; i <= n; i++) {
            ehPrimo[i] = true;
        }
        
        // Crivo de Eratóstenes
        for (int i = 2; i * i <= n; i++) {
            if (ehPrimo[i]) {
                for (int j = i * i; j <= n; j += i) {
                    ehPrimo[j] = false;
                }
            }
        }
        
        System.out.print("Números primos até " + n + ": ");
        for (int i = 2; i <= n; i++) {
            if (ehPrimo[i]) {
                System.out.print(i);
                if (i < n) System.out.print(", ");
            }
        }
        scanner.close();
    }
}`,
    testCases: [
      { values: { n: 30 }, result: "2, 3, 5, 7, 11, 13, 17, 19, 23, 29", stepByStep: "Marca todos como primo; remove múltiplos de 2,3,5; restam apenas primos" }
    ],
    explanation: "O Crivo de Eratóstenes é um algoritmo eficiente para encontrar primos. Criamos um array booleano onde cada posição indica se o número é primo. Começamos com todos como true. Para cada número i, se ele é primo, marcamos seus múltiplos como false."
  },

  // NÍVEL 3 - MATRIZES (exercícios 8-10)
  {
    id: 8,
    nivel: 3,
    title: "Matriz Identidade",
    statement: "Crie uma matriz 3x3 onde os elementos da diagonal principal são 1 e os demais são 0.",
    input: "Nenhuma entrada",
    output: "1 0 0\\n0 1 0\\n0 0 1",
    code: `import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        final int TAMANHO = 3;
        int[][] matriz = new int[TAMANHO][TAMANHO];
        
        for (int i = 0; i < TAMANHO; i++) {
            for (int j = 0; j < TAMANHO; j++) {
                if (i == j) {
                    matriz[i][j] = 1;
                } else {
                    matriz[i][j] = 0;
                }
            }
        }
        
        System.out.println("Matriz Identidade 3x3:");
        for (int i = 0; i < TAMANHO; i++) {
            for (int j = 0; j < TAMANHO; j++) {
                System.out.print(matriz[i][j] + " ");
            }
            System.out.println();
        }
    }
}`,
    testCases: [
      { values: {}, result: "1 0 0\\n0 1 0\\n0 0 1", stepByStep: "i=j → 1; i≠j → 0" }
    ],
    explanation: "Uma matriz identidade tem valor 1 na diagonal principal (onde linha = coluna) e 0 nas demais posições. Usamos laços aninhados para percorrer todas as posições."
  },
  {
    id: 9,
    nivel: 3,
    title: "Soma de Matrizes",
    statement: "Crie um programa em Java que some duas matrizes 2x3. Leia os valores de ambas as matrizes e mostre a matriz resultante.",
    input: "Matriz A: [[1,2,3],[4,5,6]]; Matriz B: [[7,8,9],[10,11,12]]",
    output: "Matriz Soma: [[8,10,12],[14,16,18]]",
    code: `import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        final int LINHAS = 2;
        final int COLUNAS = 3;
        
        int[][] A = new int[LINHAS][COLUNAS];
        int[][] B = new int[LINHAS][COLUNAS];
        int[][] C = new int[LINHAS][COLUNAS];
        
        System.out.println("=== MATRIZ A ===");
        for (int i = 0; i < LINHAS; i++) {
            for (int j = 0; j < COLUNAS; j++) {
                System.out.print("A[" + (i+1) + "][" + (j+1) + "]: ");
                A[i][j] = scanner.nextInt();
            }
        }
        
        System.out.println("=== MATRIZ B ===");
        for (int i = 0; i < LINHAS; i++) {
            for (int j = 0; j < COLUNAS; j++) {
                System.out.print("B[" + (i+1) + "][" + (j+1) + "]: ");
                B[i][j] = scanner.nextInt();
            }
        }
        
        // Soma das matrizes
        for (int i = 0; i < LINHAS; i++) {
            for (int j = 0; j < COLUNAS; j++) {
                C[i][j] = A[i][j] + B[i][j];
            }
        }
        
        System.out.println("=== MATRIZ SOMA ===");
        for (int i = 0; i < LINHAS; i++) {
            for (int j = 0; j < COLUNAS; j++) {
                System.out.print(C[i][j] + " ");
            }
            System.out.println();
        }
        scanner.close();
    }
}`,
    testCases: [
      { values: { A: [[1,2,3],[4,5,6]], B: [[7,8,9],[10,11,12]] }, result: "[[8,10,12],[14,16,18]]", stepByStep: "C[i][j] = A[i][j] + B[i][j] para cada posição" }
    ],
    explanation: "Para somar duas matrizes, percorremos todas as posições e somamos os elementos correspondentes. Usamos laços aninhados para acessar cada elemento."
  },
  {
    id: 10,
    nivel: 3,
    title: "Multiplicação de Matrizes",
    statement: "Desenvolva um programa em Java que multiplique duas matrizes. Leia uma matriz A (2x3) e B (3x2), calcule e mostre a matriz resultante C (2x2).",
    input: "A: [[1,2,3],[4,5,6]]; B: [[7,8],[9,10],[11,12]]",
    output: "C: [[58,64],[139,154]]",
    code: `import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        final int LINHAS_A = 2;
        final int COLUNAS_A = 3;
        final int LINHAS_B = 3;
        final int COLUNAS_B = 2;
        
        int[][] A = new int[LINHAS_A][COLUNAS_A];
        int[][] B = new int[LINHAS_B][COLUNAS_B];
        int[][] C = new int[LINHAS_A][COLUNAS_B];
        
        // Leitura da matriz A
        System.out.println("=== MATRIZ A (2x3) ===");
        for (int i = 0; i < LINHAS_A; i++) {
            for (int j = 0; j < COLUNAS_A; j++) {
                System.out.print("A[" + (i+1) + "][" + (j+1) + "]: ");
                A[i][j] = scanner.nextInt();
            }
        }
        
        // Leitura da matriz B
        System.out.println("=== MATRIZ B (3x2) ===");
        for (int i = 0; i < LINHAS_B; i++) {
            for (int j = 0; j < COLUNAS_B; j++) {
                System.out.print("B[" + (i+1) + "][" + (j+1) + "]: ");
                B[i][j] = scanner.nextInt();
            }
        }
        
        // Multiplicação de matrizes
        for (int i = 0; i < LINHAS_A; i++) {
            for (int j = 0; j < COLUNAS_B; j++) {
                C[i][j] = 0;
                for (int k = 0; k < COLUNAS_A; k++) {
                    C[i][j] += A[i][k] * B[k][j];
                }
            }
        }
        
        // Exibe o resultado
        System.out.println("=== MATRIZ RESULTADO C (2x2) ===");
        for (int i = 0; i < LINHAS_A; i++) {
            for (int j = 0; j < COLUNAS_B; j++) {
                System.out.print(C[i][j] + " ");
            }
            System.out.println();
        }
        scanner.close();
    }
}`,
    testCases: [
      { values: { A: [[1,2,3],[4,5,6]], B: [[7,8],[9,10],[11,12]] }, result: "[[58,64],[139,154]]", stepByStep: "C[0][0] = 1×7+2×9+3×11=7+18+33=58; C[0][1]=1×8+2×10+3×12=8+20+36=64; C[1][0]=4×7+5×9+6×11=28+45+66=139; C[1][1]=4×8+5×10+6×12=32+50+72=154" }
    ],
    explanation: "A multiplicação de matrizes requer um laço triplo. Para cada posição (i,j) da matriz resultado, somamos o produto dos elementos da linha i de A com a coluna j de B. O número de colunas de A deve ser igual ao número de linhas de B."
  },
  {
    id: 11,
    nivel: 4,
    title: "Jogo da Velha - Verificação",
    statement: "Leia uma matriz 3x3 representando um jogo da velha ('X', 'O', ' ') e verifique se há um vencedor.",
    input: "X O X\\nO X O\\nX O X",
    output: "X venceu!",
    code: `import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        final int TAMANHO = 3;
        char[][] tabuleiro = new char[TAMANHO][TAMANHO];
        
        System.out.println("Digite o tabuleiro do jogo da velha:");
        for (int i = 0; i < TAMANHO; i++) {
            for (int j = 0; j < TAMANHO; j++) {
                System.out.print("Posição [" + (i+1) + "][" + (j+1) + "]: ");
                tabuleiro[i][j] = scanner.next().charAt(0);
            }
        }
        
        boolean vencedor = false;
        char jogadorVencedor = ' ';
        
        // Verifica linhas
        for (int i = 0; i < TAMANHO; i++) {
            if (tabuleiro[i][0] != ' ' &&
                tabuleiro[i][0] == tabuleiro[i][1] &&
                tabuleiro[i][1] == tabuleiro[i][2]) {
                vencedor = true;
                jogadorVencedor = tabuleiro[i][0];
            }
        }
        
        // Verifica colunas
        for (int j = 0; j < TAMANHO; j++) {
            if (tabuleiro[0][j] != ' ' &&
                tabuleiro[0][j] == tabuleiro[1][j] &&
                tabuleiro[1][j] == tabuleiro[2][j]) {
                vencedor = true;
                jogadorVencedor = tabuleiro[0][j];
            }
        }
        
        // Verifica diagonal principal
        if (tabuleiro[0][0] != ' ' &&
            tabuleiro[0][0] == tabuleiro[1][1] &&
            tabuleiro[1][1] == tabuleiro[2][2]) {
            vencedor = true;
            jogadorVencedor = tabuleiro[0][0];
        }
        
        // Verifica diagonal secundária
        if (tabuleiro[0][2] != ' ' &&
            tabuleiro[0][2] == tabuleiro[1][1] &&
            tabuleiro[1][1] == tabuleiro[2][0]) {
            vencedor = true;
            jogadorVencedor = tabuleiro[0][2];
        }
        
        if (vencedor) {
            System.out.println(jogadorVencedor + " venceu!");
        } else {
            System.out.println("Empate ou jogo incompleto!");
        }
        scanner.close();
    }
}`,
    testCases: [
      { values: { tabuleiro: [['X','O','X'],['O','X','O'],['X','O','X']] }, result: "X venceu!", stepByStep: "Diagonal principal com X: posições (0,0),(1,1),(2,2) são X" }
    ],
    explanation: "Para verificar o vencedor no jogo da velha, precisamos testar todas as 8 possibilidades: 3 linhas, 3 colunas e 2 diagonais. Se alguma delas tiver o mesmo caractere (X ou O) em todas as posições, aquele jogador venceu."
  }
];

// ========== RENDERIZAÇÃO DOS CONCEITOS ==========
function renderConceitosVetoresMatrizes() {
  const langText = getLanguageDisplayName();
  
  return `
    <div class="content-card">
      <h2 class="card-title">📦 Arrays e Matrizes em Java</h2>
      <p>Quando precisamos guardar vários valores do mesmo tipo, como as notas de uma turma ou os preços de uma lista de produtos, não é prático criar uma variável diferente para cada dado. Para isso usamos <strong>Arrays</strong>.</p>
      
      <div class="info-callout">
        <span class="info-icon-callout">📌</span>
        <div>
          <strong>Arrays</strong> permitem armazenar vários valores em uma única variável, organizados em posições numeradas.<br>
          <strong>Matrizes (Arrays multidimensionais)</strong> são arrays com duas ou mais dimensões, como tabelas com linhas e colunas.
        </div>
      </div>
    </div>
    
    <div class="content-card">
      <h2 class="card-title">📊 Arrays</h2>
      <p>Guardar a nota de um aluno é simples: basta usar uma variável. Mas como armazenar as notas de toda uma turma? Criar muitas variáveis deixaria o programa confuso e difícil de controlar.</p>
      <p>Para resolver isso, usamos <strong>arrays</strong>. Um array pode ser entendido como uma variável com várias posições, onde cada posição guarda um valor do mesmo tipo.</p>
      
      <div class="code-example">
        <div class="code-example-header">
          <span class="code-icon">📝</span>
          <span>Sintaxe de declaração de arrays em ${langText}</span>
        </div>
        <pre><code>// Declaração de arrays
int[] numeros = new int[5];        // Array com 5 posições
double[] notas = new double[10];   // Array com 10 posições

// Arrays inicializados
int[] vetor = { 15, 22, 8, 10, 11 };
String[] nomes = { "João", "Maria", "Pedro" };

// Acessando elementos (índice começa em 0)
vetor[0] = 10;  // Altera o primeiro elemento
System.out.println(vetor[0]);  // Imprime 10</code></pre>
      </div>
      
      <div class="info-callout">
        <span class="info-icon-callout">⚠️</span>
        <div>
          <strong>Importante:</strong> O índice do array começa em <strong>0</strong> (zero). Portanto, um array com 5 posições tem índices de 0 a 4. Use <code>array.length</code> para obter o tamanho.
        </div>
      </div>
      
      <div class="code-example">
        <div class="code-example-header">
          <span class="code-icon">📝</span>
          <span>Exemplo de uso de array</span>
        </div>
        <pre><code>int[] vetor = { 15, 22, 8, 10, 11 };

System.out.println(vetor[0]);  // 15
System.out.println(vetor[1]);  // 22
System.out.println(vetor[4]);  // 11</code></pre>
      </div>
    </div>
    
    <div class="content-card">
      <h2 class="card-title">📊 Matrizes (Arrays Multidimensionais)</h2>
      <p>Um array nos ajuda a guardar vários valores, mas ele é linear (uma única linha de dados). Agora imagine que precisamos guardar as três notas de quatro alunos diferentes. Para isso usamos <strong>matrizes (arrays bidimensionais)</strong>.</p>
      <p>Uma matriz é um array com duas dimensões, organizado em forma de tabela, com linhas e colunas.</p>
      
      <div class="code-example">
        <div class="code-example-header">
          <span class="code-icon">📝</span>
          <span>Sintaxe de declaração de matrizes em ${langText}</span>
        </div>
        <pre><code>// Declaração de uma matriz 2x2
int[][] matriz = new int[2][2];

// Matriz inicializada
int[][] matriz2 = { 
    { 15, 22 }, 
    { 10, 11 } 
};

// Matriz de caracteres
char[][] jogoVelha = {
    { 'x', 'o', 'x' },
    { 'o', 'x', 'o' },
    { ' ', ' ', 'x' }
};

// Acessando um elemento (linha 0, coluna 1)
matriz[0][1] = -1;</code></pre>
      </div>
      
      <div class="code-example">
        <div class="code-example-header">
          <span class="code-icon">📝</span>
          <span>Exemplo de uso de matriz</span>
        </div>
        <pre><code>int[][] matriz = { 
    { 15, 22 }, 
    { 10, 11 } 
};

matriz[0][1] = -1;  // Altera elemento da linha 0, coluna 1

System.out.println(matriz[0][0]);  // 15
System.out.println(matriz[1][1]);  // 11</code></pre>
      </div>
    </div>
    
    <div class="content-card">
      <h2 class="card-title">🔄 Percorrendo Arrays e Matrizes</h2>
      <p>Para percorrer todos os elementos de um array ou matriz, usamos <strong>laços de repetição</strong>.</p>
      
      <div class="code-example">
        <div class="code-example-header">
          <span class="code-icon">📝</span>
          <span>Percorrendo um array</span>
        </div>
        <pre><code>int[] vetor = { 1, 2, 3, 4, 5 };
for (int i = 0; i < vetor.length; i++) {
    System.out.println(vetor[i]);
}

// Usando enhanced for (foreach)
for (int valor : vetor) {
    System.out.println(valor);
}</code></pre>
      </div>
      
      <div class="code-example">
        <div class="code-example-header">
          <span class="code-icon">📝</span>
          <span>Percorrendo uma matriz (laços aninhados)</span>
        </div>
        <pre><code>int[][] matriz = {
    { 1, 2, 3 },
    { 4, 5, 6 },
    { 7, 8, 9 }
};

for (int i = 0; i < matriz.length; i++) {
    for (int j = 0; j < matriz[i].length; j++) {
        System.out.print(matriz[i][j] + " ");
    }
    System.out.println();
}</code></pre>
      </div>
    </div>
    
    <div class="content-card">
      <h2 class="card-title">📋 Métodos Úteis para Arrays em Java</h2>
      <div class="operators-table">
        <div class="operator-row header">
          <div>Método</div>
          <div>Descrição</div>
          <div>Exemplo</div>
        </div>
        <div class="operator-row">
          <div><code>length</code></div>
          <div>Propriedade que retorna o tamanho</div>
          <div><code>arr.length</code></div>
        </div>
        <div class="operator-row">
          <div><code>Arrays.sort()</code></div>
          <div>Ordena o array</div>
          <div><code>Arrays.sort(arr)</code></div>
        </div>
        <div class="operator-row">
          <div><code>Arrays.toString()</code></div>
          <div>Converte array para string</div>
          <div><code>Arrays.toString(arr)</code></div>
        </div>
        <div class="operator-row">
          <div><code>Arrays.fill()</code></div>
          <div>Preenche array com valor</div>
          <div><code>Arrays.fill(arr, 0)</code></div>
        </div>
        <div class="operator-row">
          <div><code>System.arraycopy()</code></div>
          <div>Copia elementos</div>
          <div><code>System.arraycopy(orig, 0, dest, 0, length)</code></div>
        </div>
      </div>
      
      <div class="info-callout" style="margin-top: 1rem;">
        <span class="info-icon-callout">💡</span>
        <div>
          <strong>Dica do Professor:</strong> 
          <br>• Os índices sempre começam em <strong>0</strong>!
          <br>• Use <code>array.length</code> para obter o tamanho de um array
          <br>• Para matrizes, use <code>matriz.length</code> para linhas e <code>matriz[0].length</code> para colunas (assumindo retangular)
          <br>• Java oferece a classe <code>java.util.Arrays</code> com vários métodos utilitários
        </div>
      </div>
    </div>
  `;
}

// ========== RENDERIZAÇÃO DOS EXERCÍCIOS ==========
function renderExerciciosVetoresMatrizes() {
  const currentEx = vetoresMatrizesExercises.find(e => e.id === window.currentArraysExercise) || vetoresMatrizesExercises[0];
  
  const niveis = {
    1: { nome: "⭐ Básico", cor: "#10b981" },
    2: { nome: "⭐⭐ Busca e Estatísticas", cor: "#f59e0b" },
    3: { nome: "⭐⭐⭐ Matrizes", cor: "#3b82f6" },
    4: { nome: "⭐⭐⭐⭐ Avançado", cor: "#8b5cf6" }
  };
  
  return `
    <div class="exercises-filter">
      <div class="filter-header">
        <span>📋 Exercícios de Arrays e Matrizes</span>
        <span class="filter-count">${vetoresMatrizesExercises.length} exercícios disponíveis</span>
      </div>
      <div class="filter-buttons">
        ${vetoresMatrizesExercises.map(ex => `
          <button class="filter-btn ${ex.id === window.currentArraysExercise ? 'active' : ''}" data-ex-id="${ex.id}" title="Nível ${ex.nivel}: ${niveis[ex.nivel].nome}">
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
                  <strong>Valores de entrada:</strong> ${Object.entries(test.values).map(([k, v]) => `${k} = ${Array.isArray(v) ? JSON.stringify(v) : v}`).join(', ')}
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

// ========== PÁGINA COMPLETA DE ARRAYS ==========
function renderArraysPage() {
  const currentSubpage = window.currentArraysSubpage || 'conceitos';
  
  return `
    <div class="page-header">
      <h1 class="page-title"><span>📊</span> ${getArraysText()}</h1>
      <p class="page-subtitle">Aprenda a trabalhar com conjuntos de dados usando arrays e matrizes em ${getLanguageDisplayName()}</p>
    </div>
    
    <div class="sub-nav">
      <button class="sub-nav-btn ${currentSubpage === 'conceitos' ? 'active' : ''}" data-subpage="conceitos">
        📘 Conceitos
      </button>
      <button class="sub-nav-btn ${currentSubpage === 'exercicios' ? 'active' : ''}" data-subpage="exercicios">
        ✏️ Exercícios
      </button>
    </div>
    
    <div id="arrays-content">
      ${currentSubpage === 'conceitos' ? renderConceitosVetoresMatrizes() : renderExerciciosVetoresMatrizes()}
    </div>
  `;
}