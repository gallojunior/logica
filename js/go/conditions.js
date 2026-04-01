const condicionaisExercises = [
  {
    id: 1,
    title: "Verificação de Positivo/Negativo/Zero",
    statement: "Escreva um programa em Go que receba um número e determine se ele é positivo, negativo ou zero.",
    input: "num = -5",
    output: "O número é negativo.",
    code: `package main

import "fmt"

func main() {
    var num int
    fmt.Print("Informe um número: ")
    fmt.Scan(&num)

    if num > 0 {
        fmt.Printf("O número %d é POSITIVO\n", num)
    } else if num < 0 {
        fmt.Printf("O número %d é NEGATIVO\n", num)
    } else {
        fmt.Println("O número é ZERO")
    }
}`,
    testCases: [
      { values: { num: 5 }, result: "POSITIVO", stepByStep: "5 > 0 → POSITIVO" },
      { values: { num: -3 }, result: "NEGATIVO", stepByStep: "-3 < 0 → NEGATIVO" },
      { values: { num: 0 }, result: "ZERO", stepByStep: "0 → ZERO" }
    ],
    explanation: "Utilizamos a estrutura if-else if-else para verificar três possibilidades."
  },
  {
    id: 2,
    title: "Aprovação por Média",
    statement: "Receba três notas, calcule a média e determine se o aluno foi aprovado (média ≥ 7), em recuperação (5 ≤ média < 7) ou reprovado (média < 5).",
    input: "nota1 = 6, nota2 = 7, nota3 = 8",
    output: "Média = 7.0. Aprovado!",
    code: `package main

import "fmt"

func main() {
    var n1, n2, n3 float64
    fmt.Print("Informe a primeira nota: ")
    fmt.Scan(&n1)
    fmt.Print("Informe a segunda nota: ")
    fmt.Scan(&n2)
    fmt.Print("Informe a terceira nota: ")
    fmt.Scan(&n3)

    media := (n1 + n2 + n3) / 3
    fmt.Printf("Média: %.1f\n", media)

    if media >= 7 {
        fmt.Println("APROVADO!")
    } else if media >= 5 {
        fmt.Println("RECUPERAÇÃO")
    } else {
        fmt.Println("REPROVADO")
    }
}`,
    testCases: [
      { values: { n1: 7, n2: 8, n3: 9 }, result: "APROVADO", stepByStep: "média = 8.0 → APROVADO" },
      { values: { n1: 5, n2: 6, n3: 7 }, result: "RECUPERAÇÃO", stepByStep: "média = 6.0 → RECUPERAÇÃO" },
      { values: { n1: 4, n2: 5, n3: 3 }, result: "REPROVADO", stepByStep: "média = 4.0 → REPROVADO" }
    ],
    explanation: "Calculamos a média e usamos if-else if-else para classificar."
  },
  {
    id: 3,
    title: "Classificação de Triângulos",
    statement: "Receba três lados e classifique o triângulo em Equilátero, Isósceles ou Escaleno. Se não formar um triângulo válido, informe.",
    input: "a = 5, b = 5, c = 5",
    output: "Triângulo Equilátero",
    code: `package main

import "fmt"

func main() {
    var a, b, c float64
    fmt.Print("Informe o primeiro lado: ")
    fmt.Scan(&a)
    fmt.Print("Informe o segundo lado: ")
    fmt.Scan(&b)
    fmt.Print("Informe o terceiro lado: ")
    fmt.Scan(&c)

    trianguloValido := (a+b > c) && (a+c > b) && (b+c > a)

    if trianguloValido {
        if a == b && b == c {
            fmt.Println("Triângulo EQUILÁTERO")
        } else if a == b || a == c || b == c {
            fmt.Println("Triângulo ISÓSCELES")
        } else {
            fmt.Println("Triângulo ESCALENO")
        }
    } else {
        fmt.Println("Os lados NÃO formam um triângulo válido")
    }
}`,
    testCases: [
      { values: { a: 5, b: 5, c: 5 }, result: "EQUILÁTERO", stepByStep: "todos iguais → EQUILÁTERO" },
      { values: { a: 5, b: 5, c: 8 }, result: "ISÓSCELES", stepByStep: "dois iguais → ISÓSCELES" },
      { values: { a: 3, b: 4, c: 5 }, result: "ESCALENO", stepByStep: "todos diferentes → ESCALENO" }
    ],
    explanation: "Primeiro verificamos se forma um triângulo, depois classificamos."
  },
  {
    id: 4,
    title: "Cálculo de Descontos em Compras",
    statement: "Aplique descontos conforme o valor total: 10% se valor ≥ 500, 5% se 300 ≤ valor < 500, sem desconto caso contrário.",
    input: "valor = 600",
    output: "Valor com desconto: 540",
    code: `package main

import "fmt"

func main() {
    var valor float64
    fmt.Print("Informe o valor total da compra: R$ ")
    fmt.Scan(&valor)

    if valor >= 500 {
        valorFinal := valor * 0.90
        fmt.Printf("Valor com desconto de 10%%: R$ %.2f\n", valorFinal)
    } else if valor >= 300 {
        valorFinal := valor * 0.95
        fmt.Printf("Valor com desconto de 5%%: R$ %.2f\n", valorFinal)
    } else {
        fmt.Printf("Nenhum desconto aplicado. Valor: R$ %.2f\n", valor)
    }
}`,
    testCases: [
      { values: { valor: 600 }, result: 540, stepByStep: "≥500 → 10% → 540" },
      { values: { valor: 400 }, result: 380, stepByStep: "≥300 → 5% → 380" },
      { values: { valor: 200 }, result: 200, stepByStep: "sem desconto → 200" }
    ],
    explanation: "Faixas de desconto com if-else if."
  },
  {
    id: 5,
    title: "Verificação de Ano Bissexto",
    statement: "Determine se um ano é bissexto. Regras: divisível por 4 e não divisível por 100, ou divisível por 400.",
    input: "ano = 2024",
    output: "2024 é bissexto",
    code: `package main

import "fmt"

func main() {
    var ano int
    fmt.Print("Informe o ano: ")
    fmt.Scan(&ano)

    bissexto := (ano%4 == 0 && ano%100 != 0) || (ano%400 == 0)

    if bissexto {
        fmt.Printf("%d é BISSEXTO\n", ano)
    } else {
        fmt.Printf("%d NÃO é bissexto\n", ano)
    }
}`,
    testCases: [
      { values: { ano: 2024 }, result: "BISSEXTO", stepByStep: "2024 % 4 = 0 e % 100 ≠ 0 → BISSEXTO" },
      { values: { ano: 1900 }, result: "NÃO BISSEXTO", stepByStep: "1900 % 100 = 0 → NÃO BISSEXTO" },
      { values: { ano: 2000 }, result: "BISSEXTO", stepByStep: "2000 % 400 = 0 → BISSEXTO" }
    ],
    explanation: "Condição composta com && e ||."
  },
  {
    id: 6,
    title: "Classificação por Idade",
    statement: "Classifique uma pessoa por faixa etária: Criança (0-12), Adolescente (13-17), Adulto (18-59), Idoso (60+).",
    input: "idade = 25",
    output: "Adulto",
    code: `package main

import "fmt"

func main() {
    var idade int
    fmt.Print("Informe a idade: ")
    fmt.Scan(&idade)

    if idade < 0 {
        fmt.Println("Idade inválida!")
    } else if idade <= 12 {
        fmt.Println("CRIANÇA")
    } else if idade <= 17 {
        fmt.Println("ADOLESCENTE")
    } else if idade <= 59 {
        fmt.Println("ADULTO")
    } else {
        fmt.Println("IDOSO")
    }
}`,
    testCases: [
      { values: { idade: 8 }, result: "CRIANÇA", stepByStep: "≤12 → CRIANÇA" },
      { values: { idade: 15 }, result: "ADOLESCENTE", stepByStep: "13-17 → ADOLESCENTE" },
      { values: { idade: 30 }, result: "ADULTO", stepByStep: "18-59 → ADULTO" },
      { values: { idade: 70 }, result: "IDOSO", stepByStep: "≥60 → IDOSO" }
    ],
    explanation: "Múltiplas condições em sequência."
  },
  {
    id: 7,
    title: "Operações Matemáticas com Escolha",
    statement: "Receba dois números e um código de operação: 1=soma, 2=subtração, 3=multiplicação, 4=divisão. Mostre o resultado.",
    input: "num1 = 10, num2 = 5, op = 3",
    output: "Resultado: 50",
    code: `package main

import "fmt"

func main() {
    var num1, num2 float64
    var op int
    fmt.Print("Informe o primeiro número: ")
    fmt.Scan(&num1)
    fmt.Print("Informe o segundo número: ")
    fmt.Scan(&num2)
    fmt.Println("1 - Soma\n2 - Subtração\n3 - Multiplicação\n4 - Divisão")
    fmt.Print("Escolha a operação: ")
    fmt.Scan(&op)

    switch op {
    case 1:
        fmt.Printf("Soma: %.2f\n", num1+num2)
    case 2:
        fmt.Printf("Subtração: %.2f\n", num1-num2)
    case 3:
        fmt.Printf("Multiplicação: %.2f\n", num1*num2)
    case 4:
        if num2 != 0 {
            fmt.Printf("Divisão: %.2f\n", num1/num2)
        } else {
            fmt.Println("Erro: divisão por zero!")
        }
    default:
        fmt.Println("Operação inválida!")
    }
}`,
    testCases: [
      { values: { num1: 10, num2: 5, op: 3 }, result: 50, stepByStep: "op=3 → multiplicação → 50" },
      { values: { num1: 10, num2: 5, op: 1 }, result: 15, stepByStep: "op=1 → soma → 15" },
      { values: { num1: 10, num2: 5, op: 4 }, result: 2, stepByStep: "op=4 → divisão → 2" }
    ],
    explanation: "Estrutura switch-case para múltiplas opções."
  },
  {
    id: 8,
    title: "Verificação de Usuário e Senha",
    statement: "Verifique se o nome de usuário e senha estão corretos. Usuário: 'aluno', Senha: '123456'.",
    input: "nome = 'aluno', senha = '123456'",
    output: "Acesso Permitido",
    code: `package main

import "fmt"

func main() {
    var nome, senha string
    fmt.Print("Informe o nome de usuário: ")
    fmt.Scan(&nome)
    fmt.Print("Informe a senha: ")
    fmt.Scan(&senha)

    if nome == "aluno" && senha == "123456" {
        fmt.Println("ACESSO PERMITIDO")
    } else {
        fmt.Println("ACESSO NEGADO")
    }
}`,
    testCases: [
      { values: { nome: "aluno", senha: "123456" }, result: "PERMITIDO", stepByStep: "ambos corretos → PERMITIDO" },
      { values: { nome: "aluno", senha: "senha123" }, result: "NEGADO", stepByStep: "senha incorreta → NEGADO" }
    ],
    explanation: "Operador lógico && para verificar ambas condições."
  },
  {
    id: 9,
    title: "Cálculo de IMC e Classificação",
    statement: "Calcule o IMC (peso / altura²) e classifique: Abaixo do peso (<18.5), Normal (18.5-24.9), Sobrepeso (25-29.9), Obesidade (≥30).",
    input: "peso = 70, altura = 1.75",
    output: "IMC = 22.86. Peso normal",
    code: `package main

import "fmt"

func main() {
    var peso, altura float64
    fmt.Print("Informe o peso (kg): ")
    fmt.Scan(&peso)
    fmt.Print("Informe a altura (m): ")
    fmt.Scan(&altura)

    imc := peso / (altura * altura)
    fmt.Printf("IMC: %.2f\n", imc)

    if imc < 18.5 {
        fmt.Println("Abaixo do peso")
    } else if imc < 25 {
        fmt.Println("Peso normal")
    } else if imc < 30 {
        fmt.Println("Sobrepeso")
    } else {
        fmt.Println("Obesidade")
    }
}`,
    testCases: [
      { values: { peso: 70, altura: 1.75 }, result: "Peso normal", stepByStep: "IMC=22.86 → Normal" },
      { values: { peso: 50, altura: 1.70 }, result: "Abaixo do peso", stepByStep: "IMC=17.30 → Abaixo" },
      { values: { peso: 85, altura: 1.75 }, result: "Sobrepeso", stepByStep: "IMC=27.76 → Sobrepeso" }
    ],
    explanation: "Condições sequenciais para classificar IMC."
  },
  {
    id: 10,
    title: "Simulador de Calculadora de Produtos",
    statement: "Leia o código do produto e a quantidade vendida, e calcule o valor a pagar conforme a tabela de preços.",
    input: "código = 102, quantidade = 2",
    output: "Total a Pagar: R$ 20,00",
    code: `package main

import "fmt"

func main() {
    var codigo, quantidade int
    fmt.Print("Informe o código do produto: ")
    fmt.Scan(&codigo)
    fmt.Print("Informe a quantidade: ")
    fmt.Scan(&quantidade)

    var valorUnitario float64
    switch codigo {
    case 100:
        valorUnitario = 10.00
    case 101:
        valorUnitario = 12.00
    case 102:
        valorUnitario = 10.00
    case 103:
        valorUnitario = 12.00
    case 104:
        valorUnitario = 15.00
    case 105:
        valorUnitario = 25.00
    case 106:
        valorUnitario = 6.00
    default:
        fmt.Println("Código inválido!")
        return
    }

    total := valorUnitario * float64(quantidade)
    fmt.Printf("Total a pagar: R$ %.2f\n", total)
}`,
    testCases: [
      { values: { codigo: 102, quantidade: 2 }, result: 20, stepByStep: "código 102 → R$10 × 2 = R$20" },
      { values: { codigo: 100, quantidade: 3 }, result: 30, stepByStep: "código 100 → R$10 × 3 = R$30" }
    ],
    explanation: "Switch-case para selecionar valor unitário, depois multiplica."
  },
  {
    id: 11,
    title: "Acesso à Casa Noturna",
    statement: "Sistema de controle de acesso: acesso permitido se idade ≥ 18 ou possuir autorização dos responsáveis.",
    input: "idade = 17, autorizacao = verdadeiro",
    output: "ACESSO PERMITIDO",
    code: `package main

import "fmt"

func main() {
    var idade int
    var autorizacao bool
    fmt.Print("Informe a idade: ")
    fmt.Scan(&idade)
    fmt.Print("Possui autorização dos responsáveis? (1-sim/0-nao): ")
    fmt.Scan(&autorizacao)

    if idade >= 18 || autorizacao {
        fmt.Println("ACESSO PERMITIDO")
    } else {
        fmt.Println("ACESSO NEGADO")
    }
}`,
    testCases: [
      { values: { idade: 20, autorizacao: false }, result: "PERMITIDO", stepByStep: "idade ≥ 18 → PERMITIDO" },
      { values: { idade: 17, autorizacao: true }, result: "PERMITIDO", stepByStep: "autorização → PERMITIDO" },
      { values: { idade: 16, autorizacao: false }, result: "NEGADO", stepByStep: "nenhuma condição → NEGADO" }
    ],
    explanation: "Operador || para verificar pelo menos uma condição."
  },
  {
    id: 12,
    title: "Frete Grátis",
    statement: "Frete grátis se valor da compra ≥ R$200 ou cliente for membro do programa de fidelidade.",
    input: "valor = 150, membro = verdadeiro",
    output: "FRETE GRATIS",
    code: `package main

import "fmt"

func main() {
    var valor float64
    var membro bool
    fmt.Print("Informe o valor da compra: R$ ")
    fmt.Scan(&valor)
    fmt.Print("Cliente é membro? (1-sim/0-nao): ")
    fmt.Scan(&membro)

    if valor >= 200 || membro {
        fmt.Println("FRETE GRATIS")
    } else {
        fmt.Println("FRETE PAGO")
    }
}`,
    testCases: [
      { values: { valor: 250, membro: false }, result: "FRETE GRATIS", stepByStep: "valor ≥ 200 → GRÁTIS" },
      { values: { valor: 150, membro: true }, result: "FRETE GRATIS", stepByStep: "membro → GRÁTIS" },
      { values: { valor: 100, membro: false }, result: "FRETE PAGO", stepByStep: "nenhuma → PAGO" }
    ],
    explanation: "Frete grátis quando pelo menos uma condição é atendida."
  },
  {
    id: 13,
    title: "Senha Forte",
    statement: "Verifique se a senha é forte: tamanho ≥ 8 e diferente de '12345678'.",
    input: "senha = 'minhasenha'",
    output: "SENHA ACEITA",
    code: `package main

import "fmt"

func main() {
    var senha string
    fmt.Print("Informe a senha: ")
    fmt.Scan(&senha)

    if len(senha) >= 8 && senha != "12345678" {
        fmt.Println("SENHA ACEITA")
    } else {
        fmt.Println("SENHA FRACA")
    }
}`,
    testCases: [
      { values: { senha: "minhasenha123" }, result: "ACEITA", stepByStep: "tamanho ≥ 8 e diferente → ACEITA" },
      { values: { senha: "12345678" }, result: "FRACA", stepByStep: "senha padrão → FRACA" },
      { values: { senha: "abc" }, result: "FRACA", stepByStep: "tamanho < 8 → FRACA" }
    ],
    explanation: "Dois requisitos: tamanho mínimo e não ser senha padrão."
  },
  {
    id: 14,
    title: "Triagem de Risco",
    statement: "Classifique risco do paciente: RISCO ALTO se temperatura ≥ 39°C OU falta de ar OU idade ≥ 65.",
    input: "temperatura = 38.5, faltaAr = falso, idade = 70",
    output: "RISCO ALTO",
    code: `package main

import "fmt"

func main() {
    var temperatura float64
    var faltaAr bool
    var idade int
    fmt.Print("Informe a temperatura: ")
    fmt.Scan(&temperatura)
    fmt.Print("Tem falta de ar? (1-sim/0-nao): ")
    fmt.Scan(&faltaAr)
    fmt.Print("Informe a idade: ")
    fmt.Scan(&idade)

    if temperatura >= 39 || faltaAr || idade >= 65 {
        fmt.Println("RISCO ALTO")
    } else {
        fmt.Println("RISCO BAIXO")
    }
}`,
    testCases: [
      { values: { temperatura: 39, faltaAr: false, idade: 30 }, result: "RISCO ALTO", stepByStep: "temperatura alta → ALTO" },
      { values: { temperatura: 37, faltaAr: true, idade: 30 }, result: "RISCO ALTO", stepByStep: "falta de ar → ALTO" },
      { values: { temperatura: 37, faltaAr: false, idade: 70 }, result: "RISCO ALTO", stepByStep: "idade ≥ 65 → ALTO" }
    ],
    explanation: "Três condições combinadas com ||."
  },
  {
    id: 15,
    title: "Prioridade de Atendimento",
    statement: "Classifique prioridade: PRIORITÁRIO se for gestante, idoso ou tiver deficiência.",
    input: "ehGestante = falso, ehIdoso = verdadeiro, temDeficiencia = falso",
    output: "PRIORITARIO",
    code: `package main

import "fmt"

func main() {
    var ehGestante, ehIdoso, temDeficiencia bool
    fmt.Print("É gestante? (1-sim/0-nao): ")
    fmt.Scan(&ehGestante)
    fmt.Print("É idoso? (1-sim/0-nao): ")
    fmt.Scan(&ehIdoso)
    fmt.Print("Tem deficiência? (1-sim/0-nao): ")
    fmt.Scan(&temDeficiencia)

    if ehGestante || ehIdoso || temDeficiencia {
        fmt.Println("PRIORITARIO")
    } else {
        fmt.Println("COMUM")
    }
}`,
    testCases: [
      { values: { ehGestante: true, ehIdoso: false, temDeficiencia: false }, result: "PRIORITARIO", stepByStep: "gestante → PRIORITÁRIO" },
      { values: { ehGestante: false, ehIdoso: true, temDeficiencia: false }, result: "PRIORITARIO", stepByStep: "idoso → PRIORITÁRIO" },
      { values: { ehGestante: false, ehIdoso: false, temDeficiencia: true }, result: "PRIORITARIO", stepByStep: "deficiência → PRIORITÁRIO" }
    ],
    explanation: "Operador || para verificar se há pelo menos uma condição."
  },
  {
    id: 16,
    title: "Bônus para Vendedores",
    statement: "Conceder bônus se vendas ≥ R$5000 OU (for novato E vendas ≥ R$2000).",
    input: "vendas = 2500, novato = verdadeiro",
    output: "BONUS",
    code: `package main

import "fmt"

func main() {
    var vendas float64
    var novato bool
    fmt.Print("Informe o total de vendas: R$ ")
    fmt.Scan(&vendas)
    fmt.Print("É novato? (1-sim/0-nao): ")
    fmt.Scan(&novato)

    if vendas >= 5000 || (novato && vendas >= 2000) {
        fmt.Println("BONUS")
    } else {
        fmt.Println("SEM BONUS")
    }
}`,
    testCases: [
      { values: { vendas: 6000, novato: false }, result: "BONUS", stepByStep: "≥5000 → BÔNUS" },
      { values: { vendas: 2500, novato: true }, result: "BONUS", stepByStep: "novato e ≥2000 → BÔNUS" },
      { values: { vendas: 2500, novato: false }, result: "SEM BONUS", stepByStep: "nenhuma condição → SEM BÔNUS" }
    ],
    explanation: "Combinação de || e &&."
  },
  {
    id: 17,
    title: "Controle de Acesso por Credenciais",
    statement: "Entrada permitida se (tem crachá OU está na lista) E horário entre 8 e 20.",
    input: "temCracha = verdadeiro, estaNaLista = falso, horario = 14",
    output: "ENTRA",
    code: `package main

import "fmt"

func main() {
    var temCracha, estaNaLista bool
    var horario int
    fmt.Print("Tem crachá? (1-sim/0-nao): ")
    fmt.Scan(&temCracha)
    fmt.Print("Está na lista autorizada? (1-sim/0-nao): ")
    fmt.Scan(&estaNaLista)
    fmt.Print("Informe o horário (0-23): ")
    fmt.Scan(&horario)

    if (temCracha || estaNaLista) && (horario >= 8 && horario <= 20) {
        fmt.Println("ENTRA")
    } else {
        fmt.Println("NAO ENTRA")
    }
}`,
    testCases: [
      { values: { temCracha: true, estaNaLista: false, horario: 14 }, result: "ENTRA", stepByStep: "tem crachá e horário OK → ENTRA" },
      { values: { temCracha: false, estaNaLista: false, horario: 14 }, result: "NAO ENTRA", stepByStep: "sem autorização → NÃO ENTRA" },
      { values: { temCracha: true, estaNaLista: false, horario: 22 }, result: "NAO ENTRA", stepByStep: "horário inválido → NÃO ENTRA" }
    ],
    explanation: "Combinação de operadores: autorização (||) e horário (&&)."
  }
];

// Renderiza a seção de conceitos de condicionais em Go
function renderConceitosCondicionais() {
  return `
    <div class="content-card">
      <h2 class="card-title">🎮 Estruturas de Controle em Go</h2>
      <p>Em Go, as estruturas condicionais são fundamentais para criar programas que tomam decisões.</p>

      <div class="info-callout">
        <span class="info-icon-callout">⚡</span>
        <div><strong>Estruturas Condicionais em Go:</strong><br>
        • <strong>if</strong> – execução condicional simples<br>
        • <strong>if-else</strong> – dois caminhos possíveis<br>
        • <strong>if-else if-else</strong> – múltiplas condições<br>
        • <strong>switch</strong> – múltiplas opções baseadas em valor</div>
      </div>
    </div>

    <div class="content-card">
      <h2 class="card-title">✅ if - Execução Condicional</h2>
      <div class="code-example">
        <div class="code-example-header">
          <span class="code-icon">📝</span>
          <span>Sintaxe do if</span>
        </div>
        <pre><code>if condicao {
    // Executa se condição for true
}</code></pre>
      </div>
    </div>

    <div class="content-card">
      <h2 class="card-title">✅ if-else - Dois Caminhos</h2>
      <div class="code-example">
        <div class="code-example-header">
          <span class="code-icon">📝</span>
          <span>Sintaxe do if-else</span>
        </div>
        <pre><code>if condicao {
    // Executa se true
} else {
    // Executa se false
}</code></pre>
      </div>
    </div>

    <div class="content-card">
      <h2 class="card-title">✅ if-else if-else - Múltiplas Condições</h2>
      <div class="code-example">
        <div class="code-example-header">
          <span class="code-icon">📝</span>
          <span>Sintaxe</span>
        </div>
        <pre><code>if condicao1 {
    // ...
} else if condicao2 {
    // ...
} else {
    // ...
}</code></pre>
      </div>
    </div>

    <div class="content-card">
      <h2 class="card-title">✅ switch - Múltiplas Opções</h2>
      <div class="code-example">
        <div class="code-example-header">
          <span class="code-icon">📝</span>
          <span>Sintaxe do switch</span>
        </div>
        <pre><code>switch variavel {
case valor1:
    // ...
case valor2:
    // ...
default:
    // ...
}</code></pre>
      </div>
      <p>Em Go, o switch não exige <code>break</code> explícito; ele para automaticamente após cada caso. Para continuar, use <code>fallthrough</code>.</p>
    </div>
  `;
}

// Renderiza a seção de exercícios de condicionais
function renderExerciciosCondicionais() {
  const currentEx = condicionaisExercises.find(e => e.id === window.currentCondicionalExercise) || condicionaisExercises[0];

  return `
    <div class="exercises-filter">
      <div class="filter-header">
        <span>📋 Exercícios de Condicionais (Go)</span>
        <span class="filter-count">${condicionaisExercises.length} exercícios disponíveis</span>
      </div>
      <div class="filter-buttons">
        ${condicionaisExercises.map(ex => `
          <button class="filter-btn ${ex.id === window.currentCondicionalExercise ? 'active' : ''}" data-ex-id="${ex.id}">
            ${ex.id.toString().padStart(2, '0')}
          </button>
        `).join('')}
      </div>
    </div>

    <div class="exercise-card">
      <div class="exercise-header">
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
              <div class="test-values">
                <strong>Valores de entrada:</strong> ${Object.entries(test.values).map(([k, v]) => `${k} = ${v}`).join(', ')}
              </div>
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

// Função para renderizar a página completa de condicionais
function renderConditionalsPage() {
  const currentSubpage = window.currentCondicionalSubpage || 'conceitos';

  return `
    <div class="page-header">
      <h1 class="page-title"><span>🔀</span> Estruturas Condicionais em Go</h1>
      <p class="page-subtitle">Aprenda a criar decisões inteligentes com if, else, switch</p>
    </div>

    <div class="sub-nav">
      <button class="sub-nav-btn ${currentSubpage === 'conceitos' ? 'active' : ''}" data-subpage="conceitos">
        📘 Conceitos
      </button>
      <button class="sub-nav-btn ${currentSubpage === 'exercicios' ? 'active' : ''}" data-subpage="exercicios">
        ✏️ Exercícios
      </button>
    </div>

    <div id="condicionais-content">
      ${currentSubpage === 'conceitos' ? renderConceitosCondicionais() : renderExerciciosCondicionais()}
    </div>
  `;
}