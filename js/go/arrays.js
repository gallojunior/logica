// ========== DADOS DOS EXERCÍCIOS DE VETORES E MATRIZES EM GO ==========
const vetoresMatrizesExercises = [
  // NÍVEL 1 - VETORES BÁSICOS (exercícios 1-4)
  {
    id: 1,
    nivel: 1,
    title: "Soma de Elementos",
    statement: "Escreva um programa em Go que leia 5 números inteiros, armazene em um slice e calcule a soma de todos os elementos.",
    input: "5 números: 10, 20, 30, 40, 50",
    output: "Soma = 150",
    code: `package main

import "fmt"

func main() {
    numeros := make([]int, 5)
    soma := 0
    for i := 0; i < 5; i++ {
        fmt.Printf("Digite o %dº número: ", i+1)
        fmt.Scan(&numeros[i])
        soma += numeros[i]
    }
    fmt.Printf("A soma dos elementos é: %d\n", soma)
}`,
    testCases: [
      { values: { numeros: [10, 20, 30, 40, 50] }, result: 150, stepByStep: "soma = 0+10=10; +20=30; +30=60; +40=100; +50=150" }
    ],
    explanation: "Declaramos um slice de 5 posições com make. Usamos um laço 'for' para preencher cada posição e acumular a soma."
  },
  {
    id: 2,
    nivel: 1,
    title: "Média das Notas",
    statement: "Crie um programa em Go que leia as notas de 10 alunos, armazene em um slice e calcule a média da turma.",
    input: "10 notas: 7.5, 8.0, 6.5, 9.0, 7.0, 8.5, 6.0, 9.5, 8.0, 7.0",
    output: "Média = 7.7",
    code: `package main

import "fmt"

func main() {
    const NUM_ALUNOS = 10
    notas := make([]float64, NUM_ALUNOS)
    soma := 0.0
    for i := 0; i < NUM_ALUNOS; i++ {
        fmt.Printf("Digite a nota do %dº aluno: ", i+1)
        fmt.Scan(&notas[i])
        soma += notas[i]
    }
    media := soma / NUM_ALUNOS
    fmt.Printf("A média da turma é: %.2f\n", media)
}`,
    testCases: [
      { values: { notas: [7.5, 8.0, 6.5, 9.0, 7.0, 8.5, 6.0, 9.5, 8.0, 7.0] }, result: 7.7, stepByStep: "soma = 77.0; média = 77.0 / 10 = 7.7" }
    ],
    explanation: "Criamos um slice para armazenar as 10 notas. Após preencher, calculamos a soma e depois a média dividindo pelo número de alunos."
  },
  {
    id: 3,
    nivel: 1,
    title: "Maior Valor",
    statement: "Desenvolva um algoritmo em Go que encontre e mostre o maior valor em um slice de 8 números reais.",
    input: "8 números: 15, 42, 8, 23, 56, 31, 19, 47",
    output: "Maior valor = 56",
    code: `package main

import "fmt"

func main() {
    const TAMANHO = 8
    numeros := make([]float64, TAMANHO)
    for i := 0; i < TAMANHO; i++ {
        fmt.Printf("Digite o %dº número: ", i+1)
        fmt.Scan(&numeros[i])
    }
    maior := numeros[0]
    for i := 1; i < TAMANHO; i++ {
        if numeros[i] > maior {
            maior = numeros[i]
        }
    }
    fmt.Printf("O maior valor é: %.2f\n", maior)
}`,
    testCases: [
      { values: { numeros: [15, 42, 8, 23, 56, 31, 19, 47] }, result: 56, stepByStep: "maior = 15; 42 > 15 → maior=42; 8 não; 23 não; 56 > 42 → maior=56; 31,19,47 não" }
    ],
    explanation: "Inicializamos a variável 'maior' com o primeiro elemento do slice. Depois, percorremos os demais elementos comparando se cada um é maior que o valor atual. Se for, atualizamos."
  },
  {
    id: 4,
    nivel: 1,
    title: "Inversão de Slice",
    statement: "Escreva um programa em Go que leia 6 números e os exiba na ordem inversa à da leitura.",
    input: "6 números: 10, 20, 30, 40, 50, 60",
    output: "Ordem inversa: 60, 50, 40, 30, 20, 10",
    code: `package main

import "fmt"

func main() {
    const TAMANHO = 6
    numeros := make([]int, TAMANHO)
    for i := 0; i < TAMANHO; i++ {
        fmt.Printf("Digite o %dº número: ", i+1)
        fmt.Scan(&numeros[i])
    }
    fmt.Println("Ordem inversa:")
    for i := TAMANHO - 1; i >= 0; i-- {
        fmt.Println(numeros[i])
    }
}`,
    testCases: [
      { values: { numeros: [10, 20, 30, 40, 50, 60] }, result: "60, 50, 40, 30, 20, 10", stepByStep: "Percorre o slice do último índice (5) até o primeiro (0)" }
    ],
    explanation: "Primeiro preenchemos o slice normalmente. Depois, para exibir na ordem inversa, percorremos o slice do último índice (TAMANHO-1) até o primeiro (0)."
  },

  // NÍVEL 2 - BUSCA E ESTATÍSTICAS (exercícios 5-7)
  {
    id: 5,
    nivel: 2,
    title: "Busca de Elemento",
    statement: "Desenvolva um algoritmo em Go que leia um slice de 15 números e verifique se um determinado valor existe no slice, mostrando sua posição.",
    input: "Slice: 1..15 | Buscar: 7",
    output: "Valor 7 encontrado na posição 6",
    code: `package main

import "fmt"

func main() {
    const TAMANHO = 15
    numeros := make([]int, TAMANHO)
    for i := 0; i < TAMANHO; i++ {
        fmt.Printf("Digite o %dº número: ", i+1)
        fmt.Scan(&numeros[i])
    }
    var busca int
    fmt.Print("Digite o valor a ser buscado: ")
    fmt.Scan(&busca)
    posicao := -1
    for i, v := range numeros {
        if v == busca {
            posicao = i
            break
        }
    }
    if posicao != -1 {
        fmt.Printf("Valor %d encontrado na posição %d\n", busca, posicao+1)
    } else {
        fmt.Printf("Valor %d não encontrado no slice\n", busca)
    }
}`,
    testCases: [
      { values: { numeros: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15], busca: 7 }, result: "posição 7", stepByStep: "Percorre o slice até encontrar 7 na posição 6 (índice 6, posição 7)" }
    ],
    explanation: "Percorremos o slice comparando cada elemento com o valor buscado. Se encontrar, guardamos a posição e usamos 'break' para interromper o laço. Se não encontrar, posição permanece -1."
  },
  {
    id: 6,
    nivel: 2,
    title: "Estatísticas de Temperatura",
    statement: "Leia as temperaturas de uma semana (7 dias), armazene em um slice e mostre: média, maior, menor e quantos dias ficaram acima da média.",
    input: "Temperaturas: 23, 25, 22, 28, 26, 24, 27",
    output: "Média: 25.0, Maior: 28, Menor: 22, Acima da média: 3 dias",
    code: `package main

import "fmt"

func main() {
    const DIAS = 7
    temp := make([]float64, DIAS)
    soma := 0.0
    for i := 0; i < DIAS; i++ {
        fmt.Printf("Temperatura do dia %d: ", i+1)
        fmt.Scan(&temp[i])
        soma += temp[i]
    }
    media := soma / DIAS
    maior := temp[0]
    menor := temp[0]
    acima := 0
    for _, v := range temp {
        if v > maior {
            maior = v
        }
        if v < menor {
            menor = v
        }
        if v > media {
            acima++
        }
    }
    fmt.Printf("Média: %.2f\n", media)
    fmt.Printf("Maior temperatura: %.2f\n", maior)
    fmt.Printf("Menor temperatura: %.2f\n", menor)
    fmt.Printf("Dias acima da média: %d\n", acima)
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
    statement: "Implemente o Crivo de Eratóstenes usando um slice para encontrar todos os números primos até N.",
    input: "N = 30",
    output: "Primos: 2, 3, 5, 7, 11, 13, 17, 19, 23, 29",
    code: `package main

import "fmt"

func main() {
    var n int
    fmt.Print("Informe o valor de N: ")
    fmt.Scan(&n)

    ehPrimo := make([]bool, n+1)
    for i := 2; i <= n; i++ {
        ehPrimo[i] = true
    }

    for i := 2; i*i <= n; i++ {
        if ehPrimo[i] {
            for j := i * i; j <= n; j += i {
                ehPrimo[j] = false
            }
        }
    }

    fmt.Printf("Números primos até %d: ", n)
    for i := 2; i <= n; i++ {
        if ehPrimo[i] {
            fmt.Print(i)
            if i < n {
                fmt.Print(", ")
            }
        }
    }
    fmt.Println()
}`,
    testCases: [
      { values: { n: 30 }, result: "2, 3, 5, 7, 11, 13, 17, 19, 23, 29", stepByStep: "Marca todos como primo; remove múltiplos de 2,3,5; restam apenas primos" }
    ],
    explanation: "O Crivo de Eratóstenes é um algoritmo eficiente para encontrar primos. Criamos um slice booleano onde cada posição indica se o número é primo. Começamos com todos como true. Para cada número i, se ele é primo, marcamos seus múltiplos como false."
  },

  // NÍVEL 3 - MATRIZES (exercícios 8-10)
  {
    id: 8,
    nivel: 3,
    title: "Matriz Identidade",
    statement: "Crie uma matriz 3x3 em Go onde os elementos da diagonal principal são 1 e os demais são 0.",
    input: "Nenhuma entrada",
    output: "1 0 0\\n0 1 0\\n0 0 1",
    code: `package main

import "fmt"

func main() {
    const TAMANHO = 3
    var matriz [TAMANHO][TAMANHO]int
    for i := 0; i < TAMANHO; i++ {
        for j := 0; j < TAMANHO; j++ {
            if i == j {
                matriz[i][j] = 1
            } else {
                matriz[i][j] = 0
            }
        }
    }
    fmt.Println("Matriz Identidade 3x3:")
    for i := 0; i < TAMANHO; i++ {
        for j := 0; j < TAMANHO; j++ {
            fmt.Print(matriz[i][j], " ")
        }
        fmt.Println()
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
    statement: "Crie um programa em Go que some duas matrizes 2x3. Leia os valores de ambas as matrizes e mostre a matriz resultante.",
    input: "Matriz A: [[1,2,3],[4,5,6]]; Matriz B: [[7,8,9],[10,11,12]]",
    output: "Matriz Soma: [[8,10,12],[14,16,18]]",
    code: `package main

import "fmt"

func main() {
    const LINHAS = 2
    const COLUNAS = 3
    var A, B, C [LINHAS][COLUNAS]int

    fmt.Println("=== MATRIZ A ===")
    for i := 0; i < LINHAS; i++ {
        for j := 0; j < COLUNAS; j++ {
            fmt.Printf("A[%d][%d]: ", i+1, j+1)
            fmt.Scan(&A[i][j])
        }
    }
    fmt.Println("=== MATRIZ B ===")
    for i := 0; i < LINHAS; i++ {
        for j := 0; j < COLUNAS; j++ {
            fmt.Printf("B[%d][%d]: ", i+1, j+1)
            fmt.Scan(&B[i][j])
        }
    }
    for i := 0; i < LINHAS; i++ {
        for j := 0; j < COLUNAS; j++ {
            C[i][j] = A[i][j] + B[i][j]
        }
    }
    fmt.Println("=== MATRIZ SOMA ===")
    for i := 0; i < LINHAS; i++ {
        for j := 0; j < COLUNAS; j++ {
            fmt.Print(C[i][j], " ")
        }
        fmt.Println()
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
    statement: "Desenvolva um programa em Go que multiplique duas matrizes. Leia uma matriz A (2x3) e B (3x2), calcule e mostre a matriz resultante C (2x2).",
    input: "A: [[1,2,3],[4,5,6]]; B: [[7,8],[9,10],[11,12]]",
    output: "C: [[58,64],[139,154]]",
    code: `package main

import "fmt"

func main() {
    const LINHAS_A = 2
    const COLUNAS_A = 3
    const LINHAS_B = 3
    const COLUNAS_B = 2
    var A [LINHAS_A][COLUNAS_A]int
    var B [LINHAS_B][COLUNAS_B]int
    var C [LINHAS_A][COLUNAS_B]int

    fmt.Println("=== MATRIZ A (2x3) ===")
    for i := 0; i < LINHAS_A; i++ {
        for j := 0; j < COLUNAS_A; j++ {
            fmt.Printf("A[%d][%d]: ", i+1, j+1)
            fmt.Scan(&A[i][j])
        }
    }
    fmt.Println("=== MATRIZ B (3x2) ===")
    for i := 0; i < LINHAS_B; i++ {
        for j := 0; j < COLUNAS_B; j++ {
            fmt.Printf("B[%d][%d]: ", i+1, j+1)
            fmt.Scan(&B[i][j])
        }
    }
    // Multiplicação
    for i := 0; i < LINHAS_A; i++ {
        for j := 0; j < COLUNAS_B; j++ {
            for k := 0; k < COLUNAS_A; k++ {
                C[i][j] += A[i][k] * B[k][j]
            }
        }
    }
    fmt.Println("=== MATRIZ RESULTADO C (2x2) ===")
    for i := 0; i < LINHAS_A; i++ {
        for j := 0; j < COLUNAS_B; j++ {
            fmt.Print(C[i][j], " ")
        }
        fmt.Println()
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
    code: `package main

import "fmt"

func main() {
    const TAMANHO = 3
    var tabuleiro [TAMANHO][TAMANHO]string
    fmt.Println("Digite o tabuleiro do jogo da velha:")
    for i := 0; i < TAMANHO; i++ {
        for j := 0; j < TAMANHO; j++ {
            fmt.Printf("Posição [%d][%d]: ", i+1, j+1)
            fmt.Scan(&tabuleiro[i][j])
        }
    }
    vencedor := false
    jogadorVencedor := " "
    // Verifica linhas
    for i := 0; i < TAMANHO; i++ {
        if tabuleiro[i][0] != " " &&
            tabuleiro[i][0] == tabuleiro[i][1] &&
            tabuleiro[i][1] == tabuleiro[i][2] {
            vencedor = true
            jogadorVencedor = tabuleiro[i][0]
        }
    }
    // Verifica colunas
    for j := 0; j < TAMANHO; j++ {
        if tabuleiro[0][j] != " " &&
            tabuleiro[0][j] == tabuleiro[1][j] &&
            tabuleiro[1][j] == tabuleiro[2][j] {
            vencedor = true
            jogadorVencedor = tabuleiro[0][j]
        }
    }
    // Verifica diagonal principal
    if tabuleiro[0][0] != " " &&
        tabuleiro[0][0] == tabuleiro[1][1] &&
        tabuleiro[1][1] == tabuleiro[2][2] {
        vencedor = true
        jogadorVencedor = tabuleiro[0][0]
    }
    // Verifica diagonal secundária
    if tabuleiro[0][2] != " " &&
        tabuleiro[0][2] == tabuleiro[1][1] &&
        tabuleiro[1][1] == tabuleiro[2][0] {
        vencedor = true
        jogadorVencedor = tabuleiro[0][2]
    }
    if vencedor {
        fmt.Printf("%s venceu!\n", jogadorVencedor)
    } else {
        fmt.Println("Empate ou jogo incompleto!")
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
      <h2 class="card-title">📦 Arrays e Slices em Go</h2>
      <p>Em Go, existem duas estruturas principais para trabalhar com conjuntos de dados: <strong>arrays</strong> (tamanho fixo) e <strong>slices</strong> (tamanho dinâmico). A maioria dos programas usa slices, pois são mais flexíveis.</p>
      
      <div class="info-callout">
        <span class="info-icon-callout">📌</span>
        <div>
          <strong>Arrays</strong> têm tamanho fixo definido na declaração.<br>
          <strong>Slices</strong> são referências a arrays e podem crescer dinamicamente.<br>
          <strong>Matrizes</strong> são arrays bidimensionais (ou slices de slices).
        </div>
      </div>
      
      <div class="code-example">
        <div class="code-example-header">
          <span class="code-icon">📝</span>
          <span>Declaração de arrays e slices em Go</span>
        </div>
        <pre><code>// Array de 5 inteiros
var arr [5]int

// Inicialização
arr := [5]int{1, 2, 3, 4, 5}

// Slice (sem tamanho fixo)
slice := []int{1, 2, 3, 4, 5}

// Criando slice com make
slice2 := make([]int, 5)   // slice de 5 inteiros (todos 0)

// Matriz 2x3 (array bidimensional)
var matriz [2][3]int

// Slice de slices (matriz dinâmica)
matrizDinamica := [][]int{
    {1, 2, 3},
    {4, 5, 6},
}</code></pre>
      </div>
    </div>
    
    <div class="content-card">
      <h2 class="card-title">📊 Arrays</h2>
      <div class="code-example">
        <div class="code-example-header">
          <span class="code-icon">📝</span>
          <span>Exemplo de uso de array</span>
        </div>
        <pre><code>var vetor [5]int = [5]int{15, 22, 8, 10, 11}
fmt.Println(vetor[0]) // 15
fmt.Println(vetor[1]) // 22
fmt.Println(vetor[4]) // 11</code></pre>
      </div>
      <div class="info-callout">
        <span class="info-icon-callout">⚠️</span>
        <div>O índice do array começa em <strong>0</strong> (zero). Portanto, um array com 5 posições tem índices de 0 a 4. Use <code>len(vetor)</code> para obter o tamanho.</div>
      </div>
    </div>
    
    <div class="content-card">
      <h2 class="card-title">📊 Slices</h2>
      <p>Slices são a forma mais comum de trabalhar com listas em Go. Eles são dinâmicos e podem ser expandidos com <code>append</code>.</p>
      <div class="code-example">
        <div class="code-example-header">
          <span class="code-icon">📝</span>
          <span>Exemplo de uso de slice</span>
        </div>
        <pre><code>numeros := []int{1, 2, 3, 4, 5}
numeros = append(numeros, 6) // adiciona 6 ao final
fmt.Println(numeros[2])       // 3
fmt.Println(len(numeros))     // 6</code></pre>
      </div>
    </div>
    
    <div class="content-card">
      <h2 class="card-title">📊 Matrizes (Arrays Bidimensionais)</h2>
      <div class="code-example">
        <div class="code-example-header">
          <span class="code-icon">📝</span>
          <span>Exemplo de uso de matriz</span>
        </div>
        <pre><code>var matriz [2][2]int = [2][2]int{
    {15, 22},
    {10, 11},
}
matriz[0][1] = -1 // Altera elemento da linha 0, coluna 1
fmt.Println(matriz[0][0]) // 15
fmt.Println(matriz[1][1]) // 11</code></pre>
      </div>
    </div>
    
    <div class="content-card">
      <h2 class="card-title">🔄 Percorrendo Arrays e Slices</h2>
      <div class="code-example">
        <div class="code-example-header">
          <span class="code-icon">📝</span>
          <span>Com for clássico</span>
        </div>
        <pre><code>vetor := []int{1, 2, 3, 4, 5}
for i := 0; i < len(vetor); i++ {
    fmt.Println(vetor[i])
}</code></pre>
      </div>
      <div class="code-example">
        <div class="code-example-header">
          <span class="code-icon">📝</span>
          <span>Com range (recomendado)</span>
        </div>
        <pre><code>for indice, valor := range vetor {
    fmt.Printf("índice %d: %d\n", indice, valor)
}</code></pre>
      </div>
      <div class="code-example">
        <div class="code-example-header">
          <span class="code-icon">📝</span>
          <span>Percorrendo uma matriz</span>
        </div>
        <pre><code>matriz := [][]int{
    {1, 2, 3},
    {4, 5, 6},
}
for i, linha := range matriz {
    for j, valor := range linha {
        fmt.Printf("matriz[%d][%d] = %d\n", i, j, valor)
    }
}</code></pre>
      </div>
    </div>
    
    <div class="content-card">
      <h2 class="card-title">💡 Dicas Importantes</h2>
      <div class="info-callout">
        <span class="info-icon-callout">⚠️</span>
        <div>
          • Use <strong>slices</strong> na maioria das vezes, pois são mais flexíveis que arrays.<br>
          • Para criar um slice com capacidade inicial, use <code>make([]T, comprimento, capacidade)</code>.<br>
          • Em Go, arrays são passados por valor (cópia), slices por referência.<br>
          • Use <code>range</code> para iterar de forma segura e legível.<br>
          • Para copiar slices, use <code>copy(dest, src)</code>.
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
        <span>📋 Exercícios de Arrays e Matrizes (Go)</span>
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
      <p class="page-subtitle">Aprenda a trabalhar com conjuntos de dados usando arrays e slices em ${getLanguageDisplayName()}</p>
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