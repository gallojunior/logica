// ========== DADOS DOS EXERCÍCIOS DE VETORES E MATRIZES EM RUST ==========
const vetoresMatrizesExercises = [
  // NÍVEL 1 - VETORES BÁSICOS (exercícios 1-4)
  {
    id: 1,
    nivel: 1,
    title: "Soma de Elementos",
    statement: "Escreva um programa em Rust que leia 5 números inteiros, armazene em um vetor (Vec) e calcule a soma de todos os elementos.",
    input: "5 números: 10, 20, 30, 40, 50",
    output: "Soma = 150",
    code: `use std::io;

fn main() {
    let mut numeros = Vec::new();
    let mut soma = 0;
    for i in 0..5 {
        let mut input = String::new();
        println!("Digite o {}º número:", i+1);
        io::stdin().read_line(&mut input).expect("Erro");
        let num: i32 = input.trim().parse().expect("Número inválido");
        numeros.push(num);
        soma += num;
    }
    println!("A soma dos elementos é: {}", soma);
}`,
    testCases: [
      { values: { numeros: [10, 20, 30, 40, 50] }, result: 150, stepByStep: "soma = 0+10=10; +20=30; +30=60; +40=100; +50=150" }
    ],
    explanation: "Declaramos um vetor vazio e usamos `push` para adicionar elementos. Um laço `for` acumula a soma."
  },
  {
    id: 2,
    nivel: 1,
    title: "Média das Notas",
    statement: "Crie um programa em Rust que leia as notas de 10 alunos, armazene em um vetor (Vec) e calcule a média da turma.",
    input: "10 notas: 7.5, 8.0, 6.5, 9.0, 7.0, 8.5, 6.0, 9.5, 8.0, 7.0",
    output: "Média = 7.7",
    code: `use std::io;

fn main() {
    const NUM_ALUNOS: usize = 10;
    let mut notas = Vec::new();
    let mut soma = 0.0;
    for i in 0..NUM_ALUNOS {
        let mut input = String::new();
        println!("Digite a nota do {}º aluno:", i+1);
        io::stdin().read_line(&mut input).expect("Erro");
        let nota: f64 = input.trim().parse().expect("Nota inválida");
        notas.push(nota);
        soma += nota;
    }
    let media = soma / NUM_ALUNOS as f64;
    println!("A média da turma é: {:.2}", media);
}`,
    testCases: [
      { values: { notas: [7.5, 8.0, 6.5, 9.0, 7.0, 8.5, 6.0, 9.5, 8.0, 7.0] }, result: 7.7, stepByStep: "soma = 77.0; média = 77.0 / 10 = 7.7" }
    ],
    explanation: "Criamos um vetor dinâmico para as notas, acumulamos a soma e depois dividimos pelo número de alunos."
  },
  {
    id: 3,
    nivel: 1,
    title: "Maior Valor",
    statement: "Desenvolva um algoritmo em Rust que encontre e mostre o maior valor em um vetor de 8 números reais.",
    input: "8 números: 15, 42, 8, 23, 56, 31, 19, 47",
    output: "Maior valor = 56",
    code: `use std::io;

fn main() {
    const TAMANHO: usize = 8;
    let mut numeros = Vec::with_capacity(TAMANHO);
    for i in 0..TAMANHO {
        let mut input = String::new();
        println!("Digite o {}º número:", i+1);
        io::stdin().read_line(&mut input).expect("Erro");
        let num: f64 = input.trim().parse().expect("Número inválido");
        numeros.push(num);
    }
    let mut maior = numeros[0];
    for &num in &numeros[1..] {
        if num > maior {
            maior = num;
        }
    }
    println!("O maior valor é: {}", maior);
}`,
    testCases: [
      { values: { numeros: [15, 42, 8, 23, 56, 31, 19, 47] }, result: 56, stepByStep: "maior = 15; 42 > 15 → maior=42; 8 não; 23 não; 56 > 42 → maior=56; 31,19,47 não" }
    ],
    explanation: "Inicializamos 'maior' com o primeiro elemento, depois iteramos pelos restantes usando referências."
  },
  {
    id: 4,
    nivel: 1,
    title: "Inversão de Vetor",
    statement: "Escreva um programa em Rust que leia 6 números e os exiba na ordem inversa à da leitura.",
    input: "6 números: 10, 20, 30, 40, 50, 60",
    output: "Ordem inversa: 60, 50, 40, 30, 20, 10",
    code: `use std::io;

fn main() {
    const TAMANHO: usize = 6;
    let mut numeros = Vec::new();
    for i in 0..TAMANHO {
        let mut input = String::new();
        println!("Digite o {}º número:", i+1);
        io::stdin().read_line(&mut input).expect("Erro");
        let num: i32 = input.trim().parse().expect("Número inválido");
        numeros.push(num);
    }
    println!("Ordem inversa:");
    for num in numeros.iter().rev() {
        println!("{}", num);
    }
}`,
    testCases: [
      { values: { numeros: [10, 20, 30, 40, 50, 60] }, result: "60, 50, 40, 30, 20, 10", stepByStep: "Percorre o vetor do último índice ao primeiro usando `rev()`" }
    ],
    explanation: "Usamos `.iter().rev()` para iterar sobre o vetor na ordem inversa."
  },

  // NÍVEL 2 - BUSCA E ESTATÍSTICAS (exercícios 5-7)
  {
    id: 5,
    nivel: 2,
    title: "Busca de Elemento",
    statement: "Desenvolva um algoritmo em Rust que leia um vetor de 15 números e verifique se um determinado valor existe, mostrando sua posição.",
    input: "Vetor: 1..15 | Buscar: 7",
    output: "Valor 7 encontrado na posição 6",
    code: `use std::io;

fn main() {
    const TAMANHO: usize = 15;
    let mut numeros = Vec::new();
    for i in 0..TAMANHO {
        let mut input = String::new();
        println!("Digite o {}º número:", i+1);
        io::stdin().read_line(&mut input).expect("Erro");
        let num: i32 = input.trim().parse().expect("Número inválido");
        numeros.push(num);
    }
    let mut input = String::new();
    println!("Digite o valor a ser buscado:");
    io::stdin().read_line(&mut input).expect("Erro");
    let busca: i32 = input.trim().parse().expect("Número inválido");
    let posicao = numeros.iter().position(|&x| x == busca);
    match posicao {
        Some(p) => println!("Valor {} encontrado na posição {}", busca, p+1),
        None => println!("Valor {} não encontrado", busca),
    }
}`,
    testCases: [
      { values: { numeros: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15], busca: 7 }, result: "posição 7", stepByStep: "Percorre o vetor até encontrar 7 na posição 6 (índice 6, posição 7)" }
    ],
    explanation: "Usamos `.iter().position()` que retorna um `Option<usize>` com o índice do elemento encontrado."
  },
  {
    id: 6,
    nivel: 2,
    title: "Estatísticas de Temperatura",
    statement: "Leia as temperaturas de uma semana (7 dias), armazene em um vetor e mostre: média, maior, menor e quantos dias ficaram acima da média.",
    input: "Temperaturas: 23, 25, 22, 28, 26, 24, 27",
    output: "Média: 25.0, Maior: 28, Menor: 22, Acima da média: 3 dias",
    code: `use std::io;

fn main() {
    const DIAS: usize = 7;
    let mut temp = Vec::new();
    let mut soma = 0.0;
    for i in 0..DIAS {
        let mut input = String::new();
        println!("Temperatura do dia {}:", i+1);
        io::stdin().read_line(&mut input).expect("Erro");
        let t: f64 = input.trim().parse().expect("Número inválido");
        temp.push(t);
        soma += t;
    }
    let media = soma / DIAS as f64;
    let maior = *temp.iter().max().unwrap();
    let menor = *temp.iter().min().unwrap();
    let acima = temp.iter().filter(|&&t| t > media).count();
    println!("Média: {:.2}", media);
    println!("Maior temperatura: {}", maior);
    println!("Menor temperatura: {}", menor);
    println!("Dias acima da média: {}", acima);
}`,
    testCases: [
      { values: { temperaturas: [23, 25, 22, 28, 26, 24, 27] }, result: "media=25, maior=28, menor=22, acima=3", stepByStep: "Soma=175, média=25; >25: 28,26,27 = 3 dias" }
    ],
    explanation: "Usamos `iter().max()`, `iter().min()` e `filter().count()` para obter as estatísticas."
  },
  {
    id: 7,
    nivel: 2,
    title: "Crivo de Eratóstenes",
    statement: "Implemente o Crivo de Eratóstenes usando um vetor para encontrar todos os números primos até N.",
    input: "N = 30",
    output: "Primos: 2, 3, 5, 7, 11, 13, 17, 19, 23, 29",
    code: `use std::io;

fn main() {
    let mut input = String::new();
    println!("Informe o valor de N:");
    io::stdin().read_line(&mut input).expect("Erro");
    let n: usize = input.trim().parse().expect("Número inválido");

    let mut eh_primo = vec![true; n+1];
    eh_primo[0] = false;
    if n >= 1 { eh_primo[1] = false; }

    for i in 2..=((n as f64).sqrt() as usize) {
        if eh_primo[i] {
            let mut j = i * i;
            while j <= n {
                eh_primo[j] = false;
                j += i;
            }
        }
    }

    print!("Números primos até {}: ", n);
    for i in 2..=n {
        if eh_primo[i] {
            print!("{}", i);
            if i < n { print!(", "); }
        }
    }
}`,
    testCases: [
      { values: { n: 30 }, result: "2, 3, 5, 7, 11, 13, 17, 19, 23, 29", stepByStep: "Marca todos como primo; remove múltiplos de 2,3,5; restam apenas primos" }
    ],
    explanation: "Criamos um vetor de booleanos com `vec![true; n+1]` e aplicamos o algoritmo."
  },

  // NÍVEL 3 - MATRIZES (exercícios 8-10)
  {
    id: 8,
    nivel: 3,
    title: "Matriz Identidade",
    statement: "Crie uma matriz 3x3 onde os elementos da diagonal principal são 1 e os demais são 0.",
    input: "Nenhuma entrada",
    output: "1 0 0\\n0 1 0\\n0 0 1",
    code: `fn main() {
    const TAMANHO: usize = 3;
    let mut matriz = [[0; TAMANHO]; TAMANHO];
    for i in 0..TAMANHO {
        matriz[i][i] = 1;
    }
    println!("Matriz Identidade 3x3:");
    for linha in matriz.iter() {
        for &val in linha.iter() {
            print!("{} ", val);
        }
        println!();
    }
}`,
    testCases: [
      { values: {}, result: "1 0 0\\n0 1 0\\n0 0 1", stepByStep: "i=j → 1; i≠j → 0" }
    ],
    explanation: "Matriz como array fixo 3x3; iteramos pelas linhas e colunas."
  },
  {
    id: 9,
    nivel: 3,
    title: "Soma de Matrizes",
    statement: "Crie um programa em Rust que some duas matrizes 2x3. Leia os valores de ambas as matrizes e mostre a matriz resultante.",
    input: "Matriz A: [[1,2,3],[4,5,6]]; Matriz B: [[7,8,9],[10,11,12]]",
    output: "Matriz Soma: [[8,10,12],[14,16,18]]",
    code: `use std::io;

fn ler_matriz(linhas: usize, colunas: usize, nome: &str) -> Vec<Vec<i32>> {
    let mut mat = Vec::new();
    for i in 0..linhas {
        let mut linha = Vec::new();
        for j in 0..colunas {
            let mut input = String::new();
            println!("{}[{}][{}]: ", nome, i+1, j+1);
            io::stdin().read_line(&mut input).expect("Erro");
            let val: i32 = input.trim().parse().expect("Número inválido");
            linha.push(val);
        }
        mat.push(linha);
    }
    mat
}

fn main() {
    const LINHAS: usize = 2;
    const COLUNAS: usize = 3;

    println!("=== MATRIZ A ===");
    let a = ler_matriz(LINHAS, COLUNAS, "A");
    println!("=== MATRIZ B ===");
    let b = ler_matriz(LINHAS, COLUNAS, "B");

    let mut c = vec![vec![0; COLUNAS]; LINHAS];
    for i in 0..LINHAS {
        for j in 0..COLUNAS {
            c[i][j] = a[i][j] + b[i][j];
        }
    }

    println!("=== MATRIZ SOMA ===");
    for linha in c {
        for val in linha {
            print!("{} ", val);
        }
        println!();
    }
}`,
    testCases: [
      { values: { A: [[1,2,3],[4,5,6]], B: [[7,8,9],[10,11,12]] }, result: "[[8,10,12],[14,16,18]]", stepByStep: "C[i][j] = A[i][j] + B[i][j]" }
    ],
    explanation: "Usamos `Vec<Vec<i32>>` para matrizes dinâmicas e laços aninhados para a soma."
  },
  {
    id: 10,
    nivel: 3,
    title: "Multiplicação de Matrizes",
    statement: "Desenvolva um programa em Rust que multiplique duas matrizes. Leia uma matriz A (2x3) e B (3x2), calcule e mostre a matriz resultante C (2x2).",
    input: "A: [[1,2,3],[4,5,6]]; B: [[7,8],[9,10],[11,12]]",
    output: "C: [[58,64],[139,154]]",
    code: `use std::io;

fn ler_matriz(linhas: usize, colunas: usize, nome: &str) -> Vec<Vec<i32>> {
    let mut mat = Vec::new();
    for i in 0..linhas {
        let mut linha = Vec::new();
        for j in 0..colunas {
            let mut input = String::new();
            println!("{}[{}][{}]: ", nome, i+1, j+1);
            io::stdin().read_line(&mut input).expect("Erro");
            let val: i32 = input.trim().parse().expect("Número inválido");
            linha.push(val);
        }
        mat.push(linha);
    }
    mat
}

fn main() {
    const LINHAS_A: usize = 2;
    const COLUNAS_A: usize = 3;
    const LINHAS_B: usize = 3;
    const COLUNAS_B: usize = 2;

    println!("=== MATRIZ A (2x3) ===");
    let a = ler_matriz(LINHAS_A, COLUNAS_A, "A");
    println!("=== MATRIZ B (3x2) ===");
    let b = ler_matriz(LINHAS_B, COLUNAS_B, "B");

    let mut c = vec![vec![0; COLUNAS_B]; LINHAS_A];
    for i in 0..LINHAS_A {
        for j in 0..COLUNAS_B {
            for k in 0..COLUNAS_A {
                c[i][j] += a[i][k] * b[k][j];
            }
        }
    }

    println!("=== MATRIZ RESULTADO C (2x2) ===");
    for linha in c {
        for val in linha {
            print!("{} ", val);
        }
        println!();
    }
}`,
    testCases: [
      { values: { A: [[1,2,3],[4,5,6]], B: [[7,8],[9,10],[11,12]] }, result: "[[58,64],[139,154]]", stepByStep: "C[0][0] = 1×7+2×9+3×11=58; C[0][1]=1×8+2×10+3×12=64; C[1][0]=4×7+5×9+6×11=139; C[1][1]=4×8+5×10+6×12=154" }
    ],
    explanation: "Multiplicação com laço triplo; matrizes como `Vec<Vec<i32>>`."
  },
  {
    id: 11,
    nivel: 4,
    title: "Jogo da Velha - Verificação",
    statement: "Leia uma matriz 3x3 representando um jogo da velha ('X', 'O', ' ') e verifique se há um vencedor.",
    input: "X O X\\nO X O\\nX O X",
    output: "X venceu!",
    code: `use std::io;

fn main() {
    const TAMANHO: usize = 3;
    let mut tabuleiro = [[' '; TAMANHO]; TAMANHO];

    println!("Digite o tabuleiro do jogo da velha:");
    for i in 0..TAMANHO {
        for j in 0..TAMANHO {
            let mut input = String::new();
            println!("Posição [{},{}]: ", i+1, j+1);
            io::stdin().read_line(&mut input).expect("Erro");
            let c = input.trim().chars().next().unwrap_or(' ');
            tabuleiro[i][j] = c;
        }
    }

    let mut vencedor = false;
    let mut jogador = ' ';

    // Linhas
    for i in 0..TAMANHO {
        if tabuleiro[i][0] != ' ' &&
           tabuleiro[i][0] == tabuleiro[i][1] &&
           tabuleiro[i][1] == tabuleiro[i][2] {
            vencedor = true;
            jogador = tabuleiro[i][0];
        }
    }

    // Colunas
    for j in 0..TAMANHO {
        if tabuleiro[0][j] != ' ' &&
           tabuleiro[0][j] == tabuleiro[1][j] &&
           tabuleiro[1][j] == tabuleiro[2][j] {
            vencedor = true;
            jogador = tabuleiro[0][j];
        }
    }

    // Diagonal principal
    if tabuleiro[0][0] != ' ' &&
       tabuleiro[0][0] == tabuleiro[1][1] &&
       tabuleiro[1][1] == tabuleiro[2][2] {
        vencedor = true;
        jogador = tabuleiro[0][0];
    }

    // Diagonal secundária
    if tabuleiro[0][2] != ' ' &&
       tabuleiro[0][2] == tabuleiro[1][1] &&
       tabuleiro[1][1] == tabuleiro[2][0] {
        vencedor = true;
        jogador = tabuleiro[0][2];
    }

    if vencedor {
        println!("{} venceu!", jogador);
    } else {
        println!("Empate ou jogo incompleto!");
    }
}`,
    testCases: [
      { values: { tabuleiro: [['X','O','X'],['O','X','O'],['X','O','X']] }, result: "X venceu!", stepByStep: "Diagonal principal com X: posições (0,0),(1,1),(2,2) são X" }
    ],
    explanation: "Testa todas as combinações possíveis de vitória."
  }
];

// ========== RENDERIZAÇÃO DOS CONCEITOS ==========
function renderConceitosVetoresMatrizes() {
  const langText = getLanguageDisplayName();
  
  return `
    <div class="content-card">
      <h2 class="card-title">📦 Arrays e Vetores (Vec) em Rust</h2>
      <p>Em Rust, existem duas estruturas principais para trabalhar com coleções: <strong>arrays</strong> (tamanho fixo) e <strong>vetores (Vec)</strong> (tamanho dinâmico). Para matrizes, usamos arrays bidimensionais ou <code>Vec&lt;Vec&lt;T&gt;&gt;</code>.</p>
      
      <div class="info-callout">
        <span class="info-icon-callout">📌</span>
        <div>
          <strong>Arrays</strong>: tamanho fixo definido na declaração.<br>
          <strong>Vetores (Vec)</strong>: dinâmicos, podem crescer e encolher.<br>
          <strong>Matrizes</strong>: podem ser arrays de arrays ou Vec de Vec.
        </div>
      </div>
      
      <div class="code-example">
        <div class="code-example-header">
          <span class="code-icon">📝</span>
          <span>Declaração de arrays e vetores em Rust</span>
        </div>
        <pre><code>// Array de 5 inteiros (tamanho fixo)
let arr: [i32; 5] = [1, 2, 3, 4, 5];

// Inicialização com valor repetido
let arr2 = [0; 10];  // 10 zeros

// Vetor (Vec) – dinâmico
let mut vec = Vec::new();
vec.push(1);
vec.push(2);
vec.push(3);

// Com inicialização
let vec2 = vec![1, 2, 3, 4, 5];

// Matriz 2x3 (array de arrays)
let matriz: [[i32; 3]; 2] = [
    [1, 2, 3],
    [4, 5, 6],
];

// Vetor de vetores (dinâmico)
let matriz_dinamica: Vec&lt;Vec&lt;i32&gt;&gt; = vec![
    vec![1, 2, 3],
    vec![4, 5, 6],
];</code></pre>
      </div>
    </div>
    
    <div class="content-card">
      <h2 class="card-title">📊 Arrays e Slices</h2>
      <div class="code-example">
        <div class="code-example-header">
          <span class="code-icon">📝</span>
          <span>Acessando elementos</span>
        </div>
        <pre><code>let vetor = [15, 22, 8, 10, 11];
println!("{}", vetor[0]);  // 15
println!("{}", vetor[1]);  // 22
println!("{}", vetor[4]);  // 11

// Fatiamento (slice)
let slice = &vetor[1..4];  // [22, 8, 10]</code></pre>
      </div>
      <div class="info-callout">
        <span class="info-icon-callout">⚠️</span>
        <div>Índices começam em <strong>0</strong>. Use <code>vetor.len()</code> para obter o comprimento.</div>
      </div>
    </div>
    
    <div class="content-card">
      <h2 class="card-title">📊 Vetores (Vec)</h2>
      <div class="code-example">
        <div class="code-example-header">
          <span class="code-icon">📝</span>
          <span>Operações comuns</span>
        </div>
        <pre><code>let mut v = vec![1, 2, 3];
v.push(4);           // adiciona ao final
v.pop();             // remove e retorna último
v.remove(0);         // remove elemento na posição 0
v.insert(1, 10);     // insere 10 na posição 1

// Iteração
for elemento in &v {
    println!("{}", elemento);
}</code></pre>
      </div>
    </div>
    
    <div class="content-card">
      <h2 class="card-title">🔄 Percorrendo Coleções</h2>
      <div class="code-example">
        <div class="code-example-header">
          <span class="code-icon">📝</span>
          <span>Com for e range</span>
        </div>
        <pre><code>let vetor = [1, 2, 3, 4, 5];
for i in 0..vetor.len() {
    println!("{}", vetor[i]);
}</code></pre>
      </div>
      <div class="code-example">
        <div class="code-example-header">
          <span class="code-icon">📝</span>
          <span>Com iteradores (recomendado)</span>
        </div>
        <pre><code>for &valor in &vetor {
    println!("{}", valor);
}

// Com índice e valor
for (i, &valor) in vetor.iter().enumerate() {
    println!("índice {}: {}", i, valor);
}</code></pre>
      </div>
    </div>
    
    <div class="content-card">
      <h2 class="card-title">💡 Dicas Importantes</h2>
      <div class="info-callout">
        <span class="info-icon-callout">⚠️</span>
        <div>
          • Prefira <strong>vetores (Vec)</strong> quando o tamanho não é conhecido em tempo de compilação.<br>
          • Use <strong>arrays</strong> quando o tamanho é fixo e pequeno.<br>
          • Em Rust, o acesso a índices é verificado em tempo de execução; use <code>get()</code> para evitar pânicos.<br>
          • Iteradores são eficientes e expressivos.<br>
          • Para matrizes, <code>Vec&lt;Vec&lt;T&gt;&gt;</code> é comum, mas arrays bidimensionais têm desempenho melhor quando o tamanho é conhecido.
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
        <span>📋 Exercícios de Arrays e Matrizes (Rust)</span>
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
      <p class="page-subtitle">Aprenda a trabalhar com conjuntos de dados usando arrays e vetores em ${getLanguageDisplayName()}</p>
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