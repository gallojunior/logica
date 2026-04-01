const repeticaoExercises = [
  // NÍVEL 1 - BÁSICO (exercícios 1-5)
  {
    id: 1, nivel: 1,
    title: "Contador Simples",
    statement: "Elabore um programa em Go que exiba os números de 1 a 10.",
    input: "Nenhuma entrada",
    output: "1, 2, 3, 4, 5, 6, 7, 8, 9, 10",
    code: `package main

import "fmt"

func main() {
    for i := 1; i <= 10; i++ {
        fmt.Println(i)
    }
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
    code: `package main

import "fmt"

func main() {
    for i := 10; i >= 0; i-- {
        fmt.Print(i)
        if i > 0 {
            fmt.Print(", ")
        }
    }
    fmt.Println("\nFOGO!")
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
    code: `package main

import "fmt"

func main() {
    var num int
    fmt.Print("Informe um número: ")
    fmt.Scan(&num)

    for i := 1; i <= 10; i++ {
        fmt.Printf("%d x %d = %d\n", num, i, num*i)
    }
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
    code: `package main

import "fmt"

func main() {
    for i := 2; i <= 20; i += 2 {
        fmt.Print(i)
        if i < 20 {
            fmt.Print(", ")
        }
    }
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
    code: `package main

import "fmt"

func main() {
    for i := 15; i >= 1; i-- {
        if i%2 != 0 {
            fmt.Print(i)
            if i > 1 {
                fmt.Print(", ")
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
    code: `package main

import "fmt"

func main() {
    soma := 0
    var num int
    for i := 1; i <= 5; i++ {
        fmt.Printf("Informe o %dº número: ", i)
        fmt.Scan(&num)
        soma += num
    }
    fmt.Printf("A soma é: %d\n", soma)
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
    code: `package main

import "fmt"

func main() {
    const NUM_ALUNOS = 8
    var nota float64
    soma := 0.0
    for i := 1; i <= NUM_ALUNOS; i++ {
        fmt.Printf("Informe a nota do %dº aluno: ", i)
        fmt.Scan(&nota)
        soma += nota
    }
    media := soma / NUM_ALUNOS
    fmt.Printf("A média da turma é: %.2f\n", media)
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
    code: `package main

import "fmt"

func main() {
    var num int
    fmt.Print("Informe um número: ")
    fmt.Scan(&num)

    fat := 1
    for i := num; i >= 2; i-- {
        fat *= i
    }
    fmt.Printf("%d! = %d\n", num, fat)
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
    code: `package main

import "fmt"

func main() {
    const LIMITE = 15
    var num int
    sp, si, qp, qi := 0, 0, 0, 0
    for i := 1; i <= LIMITE; i++ {
        fmt.Printf("Informe o %dº número: ", i)
        fmt.Scan(&num)
        if num%2 == 0 {
            qp++
            sp += num
        } else {
            qi++
            si += num
        }
    }
    fmt.Printf("Soma dos pares: %d\n", sp)
    fmt.Printf("Soma dos ímpares: %d\n", si)
    fmt.Printf("Quantidade de pares: %d\n", qp)
    fmt.Printf("Quantidade de ímpares: %d\n", qi)
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
    code: `package main

import "fmt"

func main() {
    const LIMITE = 10
    var num int
    fmt.Print("Informe o 1º número: ")
    fmt.Scan(&num)
    maior, menor := num, num
    soma := num
    for i := 2; i <= LIMITE; i++ {
        fmt.Printf("Informe o %dº número: ", i)
        fmt.Scan(&num)
        if num > maior {
            maior = num
        }
        if num < menor {
            menor = num
        }
        soma += num
    }
    media := float64(soma) / LIMITE
    fmt.Printf("Maior: %d\n", maior)
    fmt.Printf("Menor: %d\n", menor)
    fmt.Printf("Soma: %d\n", soma)
    fmt.Printf("Média: %.1f\n", media)
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
    code: `package main

import "fmt"

func main() {
    var senha string
    for {
        fmt.Print("Informe a senha: ")
        fmt.Scan(&senha)
        if senha == "123456" {
            break
        }
        fmt.Println("Senha incorreta! Tente novamente.")
    }
    fmt.Println("ACESSO PERMITIDO")
}`,
    testCases: [{ values: { tentativas: ["000000","111111","123456"] }, result: "ACESSO PERMITIDO", stepByStep: "repete até acertar" }],
    explanation: "Laço infinito com break quando a senha estiver correta."
  },
  {
    id: 12, nivel: 3,
    title: "Validação de Notas",
    statement: "Leia notas de 15 alunos validando entre 0 e 10.",
    input: "notas com validação",
    output: "Média final",
    code: `package main

import "fmt"

func main() {
    const NUM_ALUNOS = 15
    var nota float64
    soma := 0.0
    for i := 1; i <= NUM_ALUNOS; i++ {
        for {
            fmt.Printf("Informe a nota do %dº aluno (0-10): ", i)
            fmt.Scan(&nota)
            if nota >= 0 && nota <= 10 {
                break
            }
            fmt.Println("Nota inválida! Digite um valor entre 0 e 10.")
        }
        soma += nota
    }
    media := soma / NUM_ALUNOS
    fmt.Printf("Média final: %.2f\n", media)
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
    code: `package main

import "fmt"

func main() {
    var num int
    contador := 0
    for {
        fmt.Print("Informe um número (0 para parar): ")
        fmt.Scan(&num)
        if num == 0 {
            break
        }
        contador++
    }
    fmt.Printf("Foram digitados %d números\n", contador)
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
    code: `package main

import "fmt"

func main() {
    var valor float64
    total := 0.0
    qtde := 0
    acima := 0
    for {
        fmt.Print("Informe o valor da venda (0 para encerrar): R$ ")
        fmt.Scan(&valor)
        if valor == 0 {
            break
        }
        qtde++
        total += valor
        if valor > 1000 {
            acima++
        }
    }
    if qtde > 0 {
        media := total / float64(qtde)
        fmt.Printf("Total de vendas: R$ %.2f\n", total)
        fmt.Printf("Vendas acima de R$1000: %d\n", acima)
        fmt.Printf("Média das vendas: R$ %.2f\n", media)
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
    code: `package main

import "fmt"

func main() {
    t1, t2 := 0, 1
    fmt.Printf("%d, %d", t1, t2)
    for i := 3; i <= 12; i++ {
        proximo := t1 + t2
        fmt.Printf(", %d", proximo)
        t1, t2 = t2, proximo
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
    code: `package main

import "fmt"

func main() {
    var num int
    fmt.Print("Informe um número: ")
    fmt.Scan(&num)

    ehPrimo := true
    if num <= 1 {
        ehPrimo = false
    } else {
        for i := 2; i < num; i++ {
            if num%i == 0 {
                ehPrimo = false
                break
            }
        }
    }
    if ehPrimo {
        fmt.Printf("%d é PRIMO\n", num)
    } else {
        fmt.Printf("%d NÃO é primo\n", num)
    }
}`,
    testCases: [{ values: { num: 13 }, result: "PRIMO", stepByStep: "não tem divisores" }],
    explanation: "Testa divisores de 2 até N-1."
  },
  {
    id: 17, nivel: 4,
    title: "Números Perfeitos",
    statement: "Encontre números perfeitos entre 1 e 1000.",
    input: "Nenhuma entrada",
    output: "6, 28, 496",
    code: `package main

import "fmt"

func main() {
    const LIMITE = 1000
    for i := 2; i <= LIMITE; i++ {
        soma := 0
        for j := 1; j < i; j++ {
            if i%j == 0 {
                soma += j
            }
        }
        if soma == i {
            fmt.Print(i)
            if i < 496 {
                fmt.Print(", ")
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
    code: `package main

import "fmt"

func main() {
    var n int
    fmt.Print("Informe um número (1-9): ")
    fmt.Scan(&n)

    for i := 1; i <= n; i++ {
        for j := 1; j <= i; j++ {
            fmt.Printf("%d ", i)
        }
        fmt.Println()
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
    code: `package main

import (
    "fmt"
    "math/rand"
    "time"
)

func main() {
    rand.Seed(time.Now().UnixNano())
    NS := rand.Intn(100) + 1
    var palpite int
    tentativas := 0

    fmt.Println("Tente adivinhar o número secreto (1-100)!")

    for {
        fmt.Print("Digite seu palpite: ")
        fmt.Scan(&palpite)
        tentativas++
        if palpite > NS {
            fmt.Println("MUITO ALTO! Tente um número menor.")
        } else if palpite < NS {
            fmt.Println("MUITO BAIXO! Tente um número maior.")
        } else {
            break
        }
    }
    fmt.Printf("\nPARABÉNS! Você acertou em %d tentativas!\n", tentativas)
}`,
    testCases: [{ values: { NS: 70, palpites: [50,75,62,70] }, result: "acertou em 4", stepByStep: "loop até acertar" }],
    explanation: "Laço infinito com break ao acertar e dicas a cada tentativa."
  },
  {
    id: 20, nivel: 5,
    title: "Menu Interativo",
    statement: "Menu com opções: 1-Somar, 2-Subtrair, 3-Sair.",
    input: "opções: 1 (10,5), 2 (20,8), 3",
    output: "Soma: 15, Subtração: 12, Encerrando...",
    code: `package main

import "fmt"

func main() {
    var op int
    for {
        fmt.Println("===== MENU DE OPÇÕES =====")
        fmt.Println("1 - Somar dois números")
        fmt.Println("2 - Subtrair dois números")
        fmt.Println("3 - Sair")
        fmt.Print("Escolha uma opção: ")
        fmt.Scan(&op)

        switch op {
        case 1:
            var num1, num2 float64
            fmt.Print("Informe o primeiro número: ")
            fmt.Scan(&num1)
            fmt.Print("Informe o segundo número: ")
            fmt.Scan(&num2)
            fmt.Printf("Resultado: %.2f\n", num1+num2)
        case 2:
            var num1, num2 float64
            fmt.Print("Informe o primeiro número: ")
            fmt.Scan(&num1)
            fmt.Print("Informe o segundo número: ")
            fmt.Scan(&num2)
            fmt.Printf("Resultado: %.2f\n", num1-num2)
        case 3:
            fmt.Println("Encerrando o programa...")
            return
        default:
            fmt.Println("Opção inválida!")
        }
        fmt.Println("\nPressione ENTER para continuar...")
        fmt.Scanln()
    }
}`,
    testCases: [{ values: { opcoes: [1,10,5,2,20,8,3] }, result: "soma=15, subtração=12, encerra", stepByStep: "loop até opção 3" }],
    explanation: "Combinação de for infinito e switch-case."
  }
];

// Renderiza a seção de conceitos de repetição em Go
function renderConceitosRepeticao() {
  return `
    <div class="content-card">
      <h2 class="card-title">🔄 Laços de Repetição em Go</h2>
      <p>Go possui apenas um tipo de laço: o <strong>for</strong>, mas ele pode ser usado de várias formas para cobrir todas as necessidades de repetição.</p>
      <ul style="margin-left: 1.5rem; color: var(--text-secondary);">
        <li><strong>for clássico</strong> – inicialização; condição; incremento</li>
        <li><strong>for como while</strong> – apenas a condição</li>
        <li><strong>for infinito</strong> – sem condição, com break</li>
        <li><strong>for range</strong> – iteração sobre arrays, slices, maps, strings</li>
      </ul>
    </div>

    <div class="content-card">
      <h2 class="card-title">🔄 For Clássico</h2>
      <div class="code-example">
        <pre><code>for i := 1; i <= 10; i++ {
    fmt.Println(i)
}</code></pre>
      </div>
    </div>

    <div class="content-card">
      <h2 class="card-title">🔄 For como While</h2>
      <div class="code-example">
        <pre><code>i := 1
for i <= 10 {
    fmt.Println(i)
    i++
}</code></pre>
      </div>
    </div>

    <div class="content-card">
      <h2 class="card-title">🔄 For Infinito com break</h2>
      <div class="code-example">
        <pre><code>for {
    // código
    if condicao {
        break
    }
}</code></pre>
      </div>
    </div>

    <div class="content-card">
      <h2 class="card-title">🔄 For Range</h2>
      <div class="code-example">
        <pre><code>numeros := []int{1, 2, 3}
for indice, valor := range numeros {
    fmt.Println(indice, valor)
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
        <span>📋 Exercícios de Repetição (Go)</span>
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
          <span>💻 Código de Resolução (Go)</span>
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
      <h1 class="page-title"><span>🔄</span> Estruturas de Repetição em Go</h1>
      <p class="page-subtitle">Aprenda a criar loops com for em todas as suas formas</p>
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