const condicionaisExercises = [
  {
    id: 1,
    title: "Verificação de Positivo/Negativo/Zero",
    statement: "Escreva um programa em R que receba um número e determine se ele é positivo, negativo ou zero.",
    input: "num = -5",
    output: "O número é negativo.",
    code: `# Verificação de sinal
cat("Informe um número: ")
num <- as.numeric(readline())

if (num > 0) {
    cat("O número", num, "é POSITIVO\n")
} else if (num < 0) {
    cat("O número", num, "é NEGATIVO\n")
} else {
    cat("O número é ZERO\n")
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
    code: `# Média e aprovação
cat("Informe a primeira nota: ")
n1 <- as.numeric(readline())
cat("Informe a segunda nota: ")
n2 <- as.numeric(readline())
cat("Informe a terceira nota: ")
n3 <- as.numeric(readline())

media <- (n1 + n2 + n3) / 3
cat("Média:", round(media, 1), "\n")

if (media >= 7) {
    cat("APROVADO!\n")
} else if (media >= 5) {
    cat("RECUPERAÇÃO\n")
} else {
    cat("REPROVADO\n")
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
    code: `# Classificação de triângulos
cat("Informe o primeiro lado: ")
a <- as.numeric(readline())
cat("Informe o segundo lado: ")
b <- as.numeric(readline())
cat("Informe o terceiro lado: ")
c <- as.numeric(readline())

triangulo_valido <- (a + b > c) && (a + c > b) && (b + c > a)

if (triangulo_valido) {
    if (a == b && b == c) {
        cat("Triângulo EQUILÁTERO\n")
    } else if (a == b || a == c || b == c) {
        cat("Triângulo ISÓSCELES\n")
    } else {
        cat("Triângulo ESCALENO\n")
    }
} else {
    cat("Os lados NÃO formam um triângulo válido\n")
}`,
    testCases: [
      { values: { a: 5, b: 5, c: 5 }, result: "EQUILÁTERO", stepByStep: "todos iguais → EQUILÁTERO" },
      { values: { a: 5, b: 5, c: 8 }, result: "ISÓSCELES", stepByStep: "dois iguais → ISÓSCELES" },
      { values: { a: 3, b: 4, c: 5 }, result: "ESCALENO", stepByStep: "todos diferentes → ESCALENO" },
      { values: { a: 1, b: 1, c: 3 }, result: "INVÁLIDO", stepByStep: "não forma triângulo" }
    ],
    explanation: "Primeiro verificamos se forma um triângulo, depois classificamos."
  },
  {
    id: 4,
    title: "Cálculo de Descontos em Compras",
    statement: "Aplique descontos conforme o valor total: 10% se valor ≥ 500, 5% se 300 ≤ valor < 500, sem desconto caso contrário.",
    input: "valor = 600",
    output: "Valor com desconto: 540",
    code: `# Descontos
cat("Informe o valor total da compra: R$ ")
valor <- as.numeric(readline())

if (valor >= 500) {
    valor_final <- valor * 0.90
    cat("Valor com desconto de 10%: R$", valor_final, "\n")
} else if (valor >= 300) {
    valor_final <- valor * 0.95
    cat("Valor com desconto de 5%: R$", valor_final, "\n")
} else {
    cat("Nenhum desconto aplicado. Valor: R$", valor, "\n")
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
    code: `# Ano bissexto
cat("Informe o ano: ")
ano <- as.integer(readline())

bissexto <- (ano %% 4 == 0 && ano %% 100 != 0) || (ano %% 400 == 0)

if (bissexto) {
    cat(ano, "é BISSEXTO\n")
} else {
    cat(ano, "NÃO é bissexto\n")
}`,
    testCases: [
      { values: { ano: 2024 }, result: "BISSEXTO", stepByStep: "2024 %% 4 = 0 e %% 100 ≠ 0 → BISSEXTO" },
      { values: { ano: 1900 }, result: "NÃO BISSEXTO", stepByStep: "1900 %% 100 = 0 → NÃO BISSEXTO" },
      { values: { ano: 2000 }, result: "BISSEXTO", stepByStep: "2000 %% 400 = 0 → BISSEXTO" }
    ],
    explanation: "Condição composta com && e ||."
  },
  {
    id: 6,
    title: "Classificação por Idade",
    statement: "Classifique uma pessoa por faixa etária: Criança (0-12), Adolescente (13-17), Adulto (18-59), Idoso (60+).",
    input: "idade = 25",
    output: "Adulto",
    code: `# Classificação por idade
cat("Informe a idade: ")
idade <- as.integer(readline())

if (idade < 0) {
    cat("Idade inválida!\n")
} else if (idade <= 12) {
    cat("CRIANÇA\n")
} else if (idade <= 17) {
    cat("ADOLESCENTE\n")
} else if (idade <= 59) {
    cat("ADULTO\n")
} else {
    cat("IDOSO\n")
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
    code: `# Calculadora com switch
cat("Informe o primeiro número: ")
num1 <- as.numeric(readline())
cat("Informe o segundo número: ")
num2 <- as.numeric(readline())
cat("1 - Soma\n2 - Subtração\n3 - Multiplicação\n4 - Divisão\n")
cat("Escolha a operação: ")
op <- as.integer(readline())

resultado <- switch(op,
    \`1\` = num1 + num2,
    \`2\` = num1 - num2,
    \`3\` = num1 * num2,
    \`4\` = if (num2 != 0) num1 / num2 else "Erro: divisão por zero!"
)

if (op >= 1 && op <= 4) {
    if (op == 4 && num2 == 0) {
        cat(resultado, "\n")
    } else {
        cat("Resultado:", resultado, "\n")
    }
} else {
    cat("Operação inválida!\n")
}`,
    testCases: [
      { values: { num1: 10, num2: 5, op: 3 }, result: 50, stepByStep: "op=3 → multiplicação → 50" },
      { values: { num1: 10, num2: 5, op: 1 }, result: 15, stepByStep: "op=1 → soma → 15" },
      { values: { num1: 10, num2: 5, op: 4 }, result: 2, stepByStep: "op=4 → divisão → 2" }
    ],
    explanation: "Estrutura switch para múltiplas opções."
  },
  {
    id: 8,
    title: "Verificação de Usuário e Senha",
    statement: "Verifique se o nome de usuário e senha estão corretos. Usuário: 'aluno', Senha: '123456'.",
    input: "nome = 'aluno', senha = '123456'",
    output: "Acesso Permitido",
    code: `# Verificação de usuário e senha
cat("Informe o nome de usuário: ")
nome <- readline()
cat("Informe a senha: ")
senha <- readline()

if (nome == "aluno" && senha == "123456") {
    cat("ACESSO PERMITIDO\n")
} else {
    cat("ACESSO NEGADO\n")
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
    code: `# IMC
cat("Informe o peso (kg): ")
peso <- as.numeric(readline())
cat("Informe a altura (m): ")
altura <- as.numeric(readline())

imc <- peso / (altura^2)
cat("IMC:", round(imc, 2), "\n")

if (imc < 18.5) {
    cat("Abaixo do peso\n")
} else if (imc < 25) {
    cat("Peso normal\n")
} else if (imc < 30) {
    cat("Sobrepeso\n")
} else {
    cat("Obesidade\n")
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
    code: `# Calculadora de produtos
cat("Informe o código do produto: ")
codigo <- as.integer(readline())
cat("Informe a quantidade: ")
quantidade <- as.integer(readline())

valor_unitario <- switch(as.character(codigo),
    "100" = 10.00,
    "101" = 12.00,
    "102" = 10.00,
    "103" = 12.00,
    "104" = 15.00,
    "105" = 25.00,
    "106" = 6.00,
    NULL
)

if (is.null(valor_unitario)) {
    cat("Código inválido!\n")
} else {
    total <- valor_unitario * quantidade
    cat("Total a pagar: R$", total, "\n")
}`,
    testCases: [
      { values: { codigo: 102, quantidade: 2 }, result: 20, stepByStep: "código 102 → R$10 × 2 = R$20" },
      { values: { codigo: 100, quantidade: 3 }, result: 30, stepByStep: "código 100 → R$10 × 3 = R$30" }
    ],
    explanation: "Switch para selecionar valor unitário, depois multiplica."
  },
  {
    id: 11,
    title: "Acesso à Casa Noturna",
    statement: "Sistema de controle de acesso: acesso permitido se idade ≥ 18 ou possuir autorização dos responsáveis.",
    input: "idade = 17, autorizacao = verdadeiro",
    output: "ACESSO PERMITIDO",
    code: `# Acesso à casa noturna
cat("Informe a idade: ")
idade <- as.integer(readline())
cat("Possui autorização dos responsáveis? (1-sim/0-nao): ")
autorizacao <- as.integer(readline())

if (idade >= 18 || autorizacao == 1) {
    cat("ACESSO PERMITIDO\n")
} else {
    cat("ACESSO NEGADO\n")
}`,
    testCases: [
      { values: { idade: 20, autorizacao: 0 }, result: "PERMITIDO", stepByStep: "idade ≥ 18 → PERMITIDO" },
      { values: { idade: 17, autorizacao: 1 }, result: "PERMITIDO", stepByStep: "autorização → PERMITIDO" },
      { values: { idade: 16, autorizacao: 0 }, result: "NEGADO", stepByStep: "nenhuma condição → NEGADO" }
    ],
    explanation: "Operador || para verificar pelo menos uma condição."
  },
  {
    id: 12,
    title: "Frete Grátis",
    statement: "Frete grátis se valor da compra ≥ R$200 ou cliente for membro do programa de fidelidade.",
    input: "valor = 150, membro = verdadeiro",
    output: "FRETE GRATIS",
    code: `# Frete grátis
cat("Informe o valor da compra: R$ ")
valor <- as.numeric(readline())
cat("Cliente é membro? (1-sim/0-nao): ")
membro <- as.integer(readline())

if (valor >= 200 || membro == 1) {
    cat("FRETE GRATIS\n")
} else {
    cat("FRETE PAGO\n")
}`,
    testCases: [
      { values: { valor: 250, membro: 0 }, result: "FRETE GRATIS", stepByStep: "valor ≥ 200 → GRÁTIS" },
      { values: { valor: 150, membro: 1 }, result: "FRETE GRATIS", stepByStep: "membro → GRÁTIS" },
      { values: { valor: 100, membro: 0 }, result: "FRETE PAGO", stepByStep: "nenhuma → PAGO" }
    ],
    explanation: "Frete grátis quando pelo menos uma condição é atendida."
  },
  {
    id: 13,
    title: "Senha Forte",
    statement: "Verifique se a senha é forte: tamanho ≥ 8 e diferente de '12345678'.",
    input: "senha = 'minhasenha'",
    output: "SENHA ACEITA",
    code: `# Senha forte
cat("Informe a senha: ")
senha <- readline()

if (nchar(senha) >= 8 && senha != "12345678") {
    cat("SENHA ACEITA\n")
} else {
    cat("SENHA FRACA\n")
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
    code: `# Triagem de risco
cat("Informe a temperatura: ")
temp <- as.numeric(readline())
cat("Tem falta de ar? (1-sim/0-nao): ")
falta_ar <- as.integer(readline())
cat("Informe a idade: ")
idade <- as.integer(readline())

if (temp >= 39 || falta_ar == 1 || idade >= 65) {
    cat("RISCO ALTO\n")
} else {
    cat("RISCO BAIXO\n")
}`,
    testCases: [
      { values: { temp: 39, falta_ar: 0, idade: 30 }, result: "RISCO ALTO", stepByStep: "temperatura alta → ALTO" },
      { values: { temp: 37, falta_ar: 1, idade: 30 }, result: "RISCO ALTO", stepByStep: "falta de ar → ALTO" },
      { values: { temp: 37, falta_ar: 0, idade: 70 }, result: "RISCO ALTO", stepByStep: "idade ≥ 65 → ALTO" }
    ],
    explanation: "Três condições combinadas com ||."
  },
  {
    id: 15,
    title: "Prioridade de Atendimento",
    statement: "Classifique prioridade: PRIORITÁRIO se for gestante, idoso ou tiver deficiência.",
    input: "ehGestante = falso, ehIdoso = verdadeiro, temDeficiencia = falso",
    output: "PRIORITARIO",
    code: `# Prioridade de atendimento
cat("É gestante? (1-sim/0-nao): ")
gestante <- as.integer(readline())
cat("É idoso? (1-sim/0-nao): ")
idoso <- as.integer(readline())
cat("Tem deficiência? (1-sim/0-nao): ")
deficiencia <- as.integer(readline())

if (gestante == 1 || idoso == 1 || deficiencia == 1) {
    cat("PRIORITARIO\n")
} else {
    cat("COMUM\n")
}`,
    testCases: [
      { values: { gestante: 1, idoso: 0, deficiencia: 0 }, result: "PRIORITARIO", stepByStep: "gestante → PRIORITÁRIO" },
      { values: { gestante: 0, idoso: 1, deficiencia: 0 }, result: "PRIORITARIO", stepByStep: "idoso → PRIORITÁRIO" },
      { values: { gestante: 0, idoso: 0, deficiencia: 1 }, result: "PRIORITARIO", stepByStep: "deficiência → PRIORITÁRIO" }
    ],
    explanation: "Operador || para verificar se há pelo menos uma condição."
  },
  {
    id: 16,
    title: "Bônus para Vendedores",
    statement: "Conceder bônus se vendas ≥ R$5000 OU (for novato E vendas ≥ R$2000).",
    input: "vendas = 2500, novato = verdadeiro",
    output: "BONUS",
    code: `# Bônus
cat("Informe o total de vendas: R$ ")
vendas <- as.numeric(readline())
cat("É novato? (1-sim/0-nao): ")
novato <- as.integer(readline())

if (vendas >= 5000 || (novato == 1 && vendas >= 2000)) {
    cat("BONUS\n")
} else {
    cat("SEM BONUS\n")
}`,
    testCases: [
      { values: { vendas: 6000, novato: 0 }, result: "BONUS", stepByStep: "≥5000 → BÔNUS" },
      { values: { vendas: 2500, novato: 1 }, result: "BONUS", stepByStep: "novato e ≥2000 → BÔNUS" },
      { values: { vendas: 2500, novato: 0 }, result: "SEM BONUS", stepByStep: "nenhuma condição → SEM BÔNUS" }
    ],
    explanation: "Combinação de || e &&."
  },
  {
    id: 17,
    title: "Controle de Acesso por Credenciais",
    statement: "Entrada permitida se (tem crachá OU está na lista) E horário entre 8 e 20.",
    input: "temCracha = verdadeiro, estaNaLista = falso, horario = 14",
    output: "ENTRA",
    code: `# Controle de acesso
cat("Tem crachá? (1-sim/0-nao): ")
cracha <- as.integer(readline())
cat("Está na lista autorizada? (1-sim/0-nao): ")
lista <- as.integer(readline())
cat("Informe o horário (0-23): ")
horario <- as.integer(readline())

if ((cracha == 1 || lista == 1) && (horario >= 8 && horario <= 20)) {
    cat("ENTRA\n")
} else {
    cat("NAO ENTRA\n")
}`,
    testCases: [
      { values: { cracha: 1, lista: 0, horario: 14 }, result: "ENTRA", stepByStep: "tem crachá e horário OK → ENTRA" },
      { values: { cracha: 0, lista: 0, horario: 14 }, result: "NAO ENTRA", stepByStep: "sem autorização → NÃO ENTRA" },
      { values: { cracha: 1, lista: 0, horario: 22 }, result: "NAO ENTRA", stepByStep: "horário inválido → NÃO ENTRA" }
    ],
    explanation: "Combinação de operadores: autorização (||) e horário (&&)."
  }
];

// Renderiza a seção de conceitos de condicionais em R
function renderConceitosCondicionais() {
  return `
    <div class="content-card">
      <h2 class="card-title">🎮 Estruturas de Controle em R</h2>
      <p>Em R, as estruturas condicionais permitem que o programa tome decisões baseadas em condições.</p>

      <div class="info-callout">
        <span class="info-icon-callout">⚡</span>
        <div><strong>Estruturas Condicionais em R:</strong><br>
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
        <pre><code>if (condicao) {
    # Executa se condição for TRUE
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
        <pre><code>if (condicao) {
    # Executa se TRUE
} else {
    # Executa se FALSE
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
        <pre><code>if (condicao1) {
    # ...
} else if (condicao2) {
    # ...
} else {
    # ...
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
        <pre><code>resultado <- switch(expressao,
    "valor1" = valor_retornado1,
    "valor2" = valor_retornado2,
    valor_padrao
)</code></pre>
      </div>
    </div>
  `;
}

// Renderiza a seção de exercícios de condicionais
function renderExerciciosCondicionais() {
  const currentEx = condicionaisExercises.find(e => e.id === window.currentCondicionalExercise) || condicionaisExercises[0];

  return `
    <div class="exercises-filter">
      <div class="filter-header">
        <span>📋 Exercícios de Condicionais (R)</span>
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
          <span>💻 Código de Resolução (R)</span>
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
      <h1 class="page-title"><span>🔀</span> Estruturas Condicionais em R</h1>
      <p class="page-subtitle">Aprenda a criar decisões inteligentes com if, else e switch</p>
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