const repeticaoExercises = [
  // NÍVEL 1 - BÁSICO (exercícios 1-5)
  {
    id: 1, nivel: 1,
    title: "Contador Simples",
    statement: "Elabore um programa em Rust que exiba os números de 1 a 10.",
    input: "Nenhuma entrada",
    output: "1, 2, 3, 4, 5, 6, 7, 8, 9, 10",
    code: `fn main() {
    for i in 1..=10 {
        println!("{}", i);
    }
}`,
    testCases: [{ values: {}, result: "1 2 3 4 5 6 7 8 9 10", stepByStep: "i de 1 a 10" }],
    explanation: "Usamos um laço `for` com a range inclusiva `1..=10`."
  },
  {
    id: 2, nivel: 1,
    title: "Contagem Regressiva",
    statement: "Mostre uma contagem regressiva de 10 até 0, exibindo 'FOGO!' ao final.",
    input: "Nenhuma entrada",
    output: "10, 9, 8, ..., 0, FOGO!",
    code: `fn main() {
    for i in (0..=10).rev() {
        print!("{}", i);
        if i > 0 {
            print!(", ");
        }
    }
    println!("\nFOGO!");
}`,
    testCases: [{ values: {}, result: "10,9,8,...,0,FOGO!", stepByStep: "i de 10 a 0" }],
    explanation: "Usamos `(0..=10).rev()` para gerar a sequência decrescente."
  },
  {
    id: 3, nivel: 1,
    title: "Tabuada de um Número",
    statement: "Leia um número e exiba sua tabuada de 1 a 10.",
    input: "numero = 5",
    output: "5 x 1 = 5, 5 x 2 = 10, ...",
    code: `use std::io;

fn main() {
    let mut input = String::new();
    println!("Informe um número:");
    io::stdin().read_line(&mut input).expect("Erro ao ler");
    let num: i32 = input.trim().parse().expect("Número inválido");

    for i in 1..=10 {
        println!("{} x {} = {}", num, i, num * i);
    }
}`,
    testCases: [{ values: { num: 5 }, result: "tabuada do 5", stepByStep: "i de 1 a 10" }],
    explanation: "Laço `for` com multiplicação."
  },
  {
    id: 4, nivel: 1,
    title: "Números Pares",
    statement: "Exiba todos os números pares entre 1 e 20.",
    input: "Nenhuma entrada",
    output: "2, 4, 6, 8, 10, 12, 14, 16, 18, 20",
    code: `fn main() {
    for i in (2..=20).step_by(2) {
        print!("{}", i);
        if i < 20 {
            print!(", ");
        }
    }
}`,
    testCases: [{ values: {}, result: "2,4,6,...,20", stepByStep: "i incrementa de 2 em 2" }],
    explanation: "Usamos `step_by(2)` para pular os ímpares."
  },
  {
    id: 5, nivel: 1,
    title: "Números Ímpares Regressivos",
    statement: "Exiba os números ímpares de 15 até 1 em ordem decrescente.",
    input: "Nenhuma entrada",
    output: "15, 13, 11, 9, 7, 5, 3, 1",
    code: `fn main() {
    for i in (1..=15).rev() {
        if i % 2 != 0 {
            print!("{}", i);
            if i > 1 {
                print!(", ");
            }
        }
    }
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
    code: `use std::io;

fn main() {
    let mut soma = 0;
    for i in 1..=5 {
        let mut input = String::new();
        println!("Informe o {}º número:", i);
        io::stdin().read_line(&mut input).expect("Erro");
        let num: i32 = input.trim().parse().expect("Número inválido");
        soma += num;
    }
    println!("A soma é: {}", soma);
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
    code: `use std::io;

fn main() {
    const NUM_ALUNOS: usize = 8;
    let mut soma = 0.0;
    for i in 1..=NUM_ALUNOS {
        let mut input = String::new();
        println!("Informe a nota do {}º aluno:", i);
        io::stdin().read_line(&mut input).expect("Erro");
        let nota: f64 = input.trim().parse().expect("Nota inválida");
        soma += nota;
    }
    let media = soma / NUM_ALUNOS as f64;
    println!("A média da turma é: {:.2}", media);
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
    code: `use std::io;

fn main() {
    let mut input = String::new();
    println!("Informe um número:");
    io::stdin().read_line(&mut input).expect("Erro");
    let num: i32 = input.trim().parse().expect("Número inválido");

    let mut fat = 1;
    for i in 2..=num {
        fat *= i;
    }
    println!("{}! = {}", num, fat);
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
    code: `use std::io;

fn main() {
    const LIMITE: usize = 15;
    let (mut sp, mut si, mut qp, mut qi) = (0, 0, 0, 0);
    for i in 1..=LIMITE {
        let mut input = String::new();
        println!("Informe o {}º número:", i);
        io::stdin().read_line(&mut input).expect("Erro");
        let num: i32 = input.trim().parse().expect("Número inválido");

        if num % 2 == 0 {
            qp += 1;
            sp += num;
        } else {
            qi += 1;
            si += num;
        }
    }
    println!("Soma dos pares: {}", sp);
    println!("Soma dos ímpares: {}", si);
    println!("Quantidade de pares: {}", qp);
    println!("Quantidade de ímpares: {}", qi);
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
    code: `use std::io;

fn main() {
    const LIMITE: usize = 10;
    let mut input = String::new();
    println!("Informe o 1º número:");
    io::stdin().read_line(&mut input).expect("Erro");
    let mut num: i32 = input.trim().parse().expect("Número inválido");
    let (mut maior, mut menor, mut soma) = (num, num, num);

    for i in 2..=LIMITE {
        input.clear();
        println!("Informe o {}º número:", i);
        io::stdin().read_line(&mut input).expect("Erro");
        num = input.trim().parse().expect("Número inválido");
        if num > maior { maior = num; }
        if num < menor { menor = num; }
        soma += num;
    }
    let media = soma as f64 / LIMITE as f64;
    println!("Maior: {}", maior);
    println!("Menor: {}", menor);
    println!("Soma: {}", soma);
    println!("Média: {:.1}", media);
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
    code: `use std::io;

fn main() {
    loop {
        let mut senha = String::new();
        println!("Informe a senha:");
        io::stdin().read_line(&mut senha).expect("Erro");
        let senha = senha.trim();
        if senha == "123456" {
            break;
        }
        println!("Senha incorreta! Tente novamente.");
    }
    println!("ACESSO PERMITIDO");
}`,
    testCases: [{ values: { tentativas: ["000000","111111","123456"] }, result: "ACESSO PERMITIDO", stepByStep: "repete até acertar" }],
    explanation: "Laço `loop` infinito com `break` quando a senha estiver correta."
  },
  {
    id: 12, nivel: 3,
    title: "Validação de Notas",
    statement: "Leia notas de 15 alunos validando entre 0 e 10.",
    input: "notas com validação",
    output: "Média final",
    code: `use std::io;

fn main() {
    const NUM_ALUNOS: usize = 15;
    let mut soma = 0.0;
    for i in 1..=NUM_ALUNOS {
        let nota = loop {
            let mut input = String::new();
            println!("Informe a nota do {}º aluno (0-10):", i);
            io::stdin().read_line(&mut input).expect("Erro");
            let nota: f64 = match input.trim().parse() {
                Ok(n) if (0.0..=10.0).contains(&n) => n,
                _ => {
                    println!("Nota inválida! Digite um valor entre 0 e 10.");
                    continue;
                }
            };
            break nota;
        };
        soma += nota;
    }
    let media = soma / NUM_ALUNOS as f64;
    println!("Média final: {:.2}", media);
}`,
    testCases: [{ values: { notas: [-1,11,7.5] }, result: "aceita 7.5", stepByStep: "repete até nota válida" }],
    explanation: "Laço interno com `loop` e `break` para validação."
  },
  {
    id: 13, nivel: 3,
    title: "Leitura com Condição de Parada",
    statement: "Leia números até digitar 0 e mostre quantos foram digitados.",
    input: "5, 8, 3, 0",
    output: "Foram digitados 3 números",
    code: `use std::io;

fn main() {
    let mut contador = 0;
    loop {
        let mut input = String::new();
        println!("Informe um número (0 para parar):");
        io::stdin().read_line(&mut input).expect("Erro");
        let num: i32 = input.trim().parse().expect("Número inválido");
        if num == 0 {
            break;
        }
        contador += 1;
    }
    println!("Foram digitados {} números", contador);
}`,
    testCases: [{ values: { numeros: [5,8,3,0] }, result: "3 números", stepByStep: "conta até receber 0" }],
    explanation: "Laço `loop` com `break` quando o número for zero."
  },
  {
    id: 14, nivel: 3,
    title: "Acumulador Condicional (Vendas)",
    statement: "Leia vendas até digitar 0 e exiba total, vendas acima de 1000 e média.",
    input: "1500, 800, 2000, 0",
    output: "Total: 4300, Acima de 1000: 2, Média: 1433.33",
    code: `use std::io;

fn main() {
    let mut total = 0.0;
    let mut qtde = 0;
    let mut acima = 0;

    loop {
        let mut input = String::new();
        println!("Informe o valor da venda (0 para encerrar): R$ ");
        io::stdin().read_line(&mut input).expect("Erro");
        let valor: f64 = input.trim().parse().expect("Valor inválido");
        if valor == 0.0 {
            break;
        }
        qtde += 1;
        total += valor;
        if valor > 1000.0 {
            acima += 1;
        }
    }

    if qtde > 0 {
        let media = total / qtde as f64;
        println!("Total de vendas: R$ {:.2}", total);
        println!("Vendas acima de R$1000: {}", acima);
        println!("Média das vendas: R$ {:.2}", media);
    }
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
    code: `fn main() {
    let (mut t1, mut t2) = (0, 1);
    print!("{}, {}", t1, t2);
    for _ in 3..=12 {
        let proximo = t1 + t2;
        print!(", {}", proximo);
        t1 = t2;
        t2 = proximo;
    }
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
    code: `use std::io;

fn main() {
    let mut input = String::new();
    println!("Informe um número:");
    io::stdin().read_line(&mut input).expect("Erro");
    let num: i32 = input.trim().parse().expect("Número inválido");

    let eh_primo = if num <= 1 {
        false
    } else {
        let limite = (num as f64).sqrt() as i32;
        let mut primo = true;
        for i in 2..=limite {
            if num % i == 0 {
                primo = false;
                break;
            }
        }
        primo
    };

    if eh_primo {
        println!("{} é PRIMO", num);
    } else {
        println!("{} NÃO é primo", num);
    }
}`,
    testCases: [{ values: { num: 13 }, result: "PRIMO", stepByStep: "não tem divisores" }],
    explanation: "Testa divisores até a raiz quadrada para eficiência."
  },
  {
    id: 17, nivel: 4,
    title: "Números Perfeitos",
    statement: "Encontre números perfeitos entre 1 e 1000.",
    input: "Nenhuma entrada",
    output: "6, 28, 496",
    code: `fn main() {
    const LIMITE: i32 = 1000;
    for i in 2..=LIMITE {
        let mut soma = 0;
        for j in 1..i {
            if i % j == 0 {
                soma += j;
            }
        }
        if soma == i {
            print!("{}", i);
            if i < 496 {
                print!(", ");
            }
        }
    }
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
    code: `use std::io;

fn main() {
    let mut input = String::new();
    println!("Informe um número (1-9):");
    io::stdin().read_line(&mut input).expect("Erro");
    let n: i32 = input.trim().parse().expect("Número inválido");

    for i in 1..=n {
        for _ in 1..=i {
            print!("{} ", i);
        }
        println!();
    }
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
    code: `use std::io;
use rand::Rng;

fn main() {
    let numero_secreto = rand::thread_rng().gen_range(1..=100);
    let mut tentativas = 0;

    println!("Tente adivinhar o número secreto (1-100)!");

    loop {
        let mut palpite = String::new();
        println!("Digite seu palpite:");
        io::stdin().read_line(&mut palpite).expect("Erro");
        let palpite: i32 = palpite.trim().parse().expect("Número inválido");
        tentativas += 1;

        if palpite > numero_secreto {
            println!("MUITO ALTO! Tente um número menor.");
        } else if palpite < numero_secreto {
            println!("MUITO BAIXO! Tente um número maior.");
        } else {
            break;
        }
    }
    println!("\nPARABÉNS! Você acertou em {} tentativas!", tentativas);
}`,
    testCases: [{ values: { NS: 70, palpites: [50,75,62,70] }, result: "acertou em 4", stepByStep: "loop até acertar" }],
    explanation: "Laço `loop` com break ao acertar, dicas a cada tentativa."
  },
  {
    id: 20, nivel: 5,
    title: "Menu Interativo",
    statement: "Menu com opções: 1-Somar, 2-Subtrair, 3-Sair.",
    input: "opções: 1 (10,5), 2 (20,8), 3",
    output: "Soma: 15, Subtração: 12, Encerrando...",
    code: `use std::io;

fn main() {
    loop {
        println!("===== MENU DE OPÇÕES =====");
        println!("1 - Somar dois números");
        println!("2 - Subtrair dois números");
        println!("3 - Sair");
        println!("Escolha uma opção:");

        let mut opcao = String::new();
        io::stdin().read_line(&mut opcao).expect("Erro");
        let opcao: i32 = match opcao.trim().parse() {
            Ok(n) => n,
            Err(_) => {
                println!("Opção inválida!");
                continue;
            }
        };

        match opcao {
            1 => {
                let (a, b) = ler_dois_numeros();
                println!("Resultado: {:.2}", a + b);
            }
            2 => {
                let (a, b) = ler_dois_numeros();
                println!("Resultado: {:.2}", a - b);
            }
            3 => {
                println!("Encerrando o programa...");
                break;
            }
            _ => println!("Opção inválida!"),
        }
        println!("\nPressione ENTER para continuar...");
        let mut _enter = String::new();
        io::stdin().read_line(&mut _enter).expect("Erro");
    }
}

fn ler_dois_numeros() -> (f64, f64) {
    let mut input = String::new();
    println!("Informe o primeiro número:");
    io::stdin().read_line(&mut input).expect("Erro");
    let a: f64 = input.trim().parse().expect("Número inválido");
    input.clear();
    println!("Informe o segundo número:");
    io::stdin().read_line(&mut input).expect("Erro");
    let b: f64 = input.trim().parse().expect("Número inválido");
    (a, b)
}`,
    testCases: [{ values: { opcoes: [1,10,5,2,20,8,3] }, result: "soma=15, subtração=12, encerra", stepByStep: "loop até opção 3" }],
    explanation: "Combinação de `loop`, `match` e funções."
  }
];

// Renderiza a seção de conceitos de repetição em Rust
function renderConceitosRepeticao() {
  return `
    <div class="content-card">
      <h2 class="card-title">🔄 Laços de Repetição em Rust</h2>
      <p>Rust possui três formas principais de laços: <strong>loop</strong>, <strong>while</strong> e <strong>for</strong>. O <code>loop</code> é infinito e usado com <code>break</code>; o <code>while</code> repete enquanto a condição for verdadeira; o <code>for</code> é usado para iterar sobre coleções e ranges.</p>
    </div>
    
    <div class="content-card">
      <h2 class="card-title">🔄 For</h2>
      <div class="code-example">
        <pre><code>for i in 1..=10 {
    println!("{}", i);
}</code></pre>
      </div>
      <p><code>1..=10</code> é um range inclusivo. Para um range exclusivo use <code>1..10</code>.</p>
    </div>
    
    <div class="content-card">
      <h2 class="card-title">🔄 While</h2>
      <div class="code-example">
        <pre><code>let mut i = 1;
while i <= 10 {
    println!("{}", i);
    i += 1;
}</code></pre>
      </div>
    </div>
    
    <div class="content-card">
      <h2 class="card-title">🔄 Loop</h2>
      <div class="code-example">
        <pre><code>let mut i = 1;
loop {
    if i > 10 { break; }
    println!("{}", i);
    i += 1;
}</code></pre>
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
        <span>📋 Exercícios de Repetição (Rust)</span>
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
          <span>💻 Código de Resolução (Rust)</span>
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
      <h1 class="page-title"><span>🔄</span> Estruturas de Repetição em Rust</h1>
      <p class="page-subtitle">Aprenda a criar loops com for, while e loop</p>
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