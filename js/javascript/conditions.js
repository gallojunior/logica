const condicionaisExercises = [
  {
    id: 1,
    title: "Verificação de Positivo/Negativo/Zero",
    statement: "Escreva um algoritmo que receba um número e determine se ele é positivo, negativo ou zero.",
    input: "num = -5",
    output: "O número é negativo.",
    code: `// Verificação de Positivo/Negativo/Zero
let num

console.log("Informe um número: ")
num = parseInt(prompt("Informe um número: "))

if (num > 0) {
  console.log("O número " + num + " é POSITIVO")
} else if (num < 0) {
  console.log("O número " + num + " é NEGATIVO")
} else {
  console.log("O número é ZERO")
}`,
    testCases: [
      { values: { num: 5 }, result: "POSITIVO", stepByStep: "5 > 0 → verdadeiro → POSITIVO" },
      { values: { num: -3 }, result: "NEGATIVO", stepByStep: "-3 > 0? falso; -3 < 0? verdadeiro → NEGATIVO" },
      { values: { num: 0 }, result: "ZERO", stepByStep: "0 > 0? falso; 0 < 0? falso → ZERO" }
    ],
    explanation: "Utilizamos a estrutura condicional if-else if-else para verificar três possibilidades. Primeiro testamos se é positivo (num > 0), depois se é negativo (num < 0), e por fim, se nenhuma das condições for verdadeira, o número é zero."
  },
  {
    id: 2,
    title: "Aprovação por Média",
    statement: "Receba três notas, calcule a média e determine se o aluno foi aprovado (média ≥ 7), em recuperação (5 ≤ média < 7) ou reprovado (média < 5).",
    input: "nota1 = 6, nota2 = 7, nota3 = 8",
    output: "Média = 7.0. Aprovado!",
    code: `// Aprovação por Média
let nota1, nota2, nota3, media

console.log("Informe a primeira nota: ")
nota1 = parseFloat(prompt("Informe a primeira nota: "))
console.log("Informe a segunda nota: ")
nota2 = parseFloat(prompt("Informe a segunda nota: "))
console.log("Informe a terceira nota: ")
nota3 = parseFloat(prompt("Informe a terceira nota: "))

media = (nota1 + nota2 + nota3) / 3

console.log("Média: " + media)

if (media >= 7) {
  console.log("APROVADO!")
} else if (media >= 5) {
  console.log("RECUPERAÇÃO")
} else {
  console.log("REPROVADO")
}`,
    testCases: [
      { values: { nota1: 7, nota2: 8, nota3: 9 }, result: "APROVADO", stepByStep: "média = (7+8+9)/3 = 8.0 → 8.0 ≥ 7 → APROVADO" },
      { values: { nota1: 5, nota2: 6, nota3: 7 }, result: "RECUPERAÇÃO", stepByStep: "média = (5+6+7)/3 = 6.0 → 6.0 ≥ 7? falso; 6.0 ≥ 5? verdadeiro → RECUPERAÇÃO" },
      { values: { nota1: 4, nota2: 5, nota3: 3 }, result: "REPROVADO", stepByStep: "média = (4+5+3)/3 = 4.0 → 4.0 ≥ 7? falso; 4.0 ≥ 5? falso → REPROVADO" }
    ],
    explanation: "Primeiro calculamos a média das três notas. Depois usamos a estrutura if-else if-else: se média ≥ 7 → aprovado; senão se média ≥ 5 → recuperação; senão → reprovado."
  },
  {
    id: 3,
    title: "Classificação de Triângulos",
    statement: "Receba três lados e classifique o triângulo em Equilátero (todos iguais), Isósceles (dois iguais) ou Escaleno (todos diferentes). Se não formar um triângulo válido, informe.",
    input: "a = 5, b = 5, c = 5",
    output: "Triângulo Equilátero",
    code: `// Classificação de Triângulos
let a, b, c
let trianguloValido

console.log("Informe o primeiro lado: ")
a = parseInt(prompt("Informe o primeiro lado: "))
console.log("Informe o segundo lado: ")
b = parseInt(prompt("Informe o segundo lado: "))
console.log("Informe o terceiro lado: ")
c = parseInt(prompt("Informe o terceiro lado: "))

trianguloValido = (a + b > c) && (a + c > b) && (b + c > a)

if (trianguloValido) {
  if (a == b && b == c) {
    console.log("Triângulo EQUILÁTERO")
  } else if (a == b || a == c || b == c) {
    console.log("Triângulo ISÓSCELES")
  } else {
    console.log("Triângulo ESCALENO")
  }
} else {
  console.log("Os lados NÃO formam um triângulo válido")
}`,
    testCases: [
      { values: { a: 5, b: 5, c: 5 }, result: "EQUILÁTERO", stepByStep: "5+5>5 (V); todos lados iguais → EQUILÁTERO" },
      { values: { a: 5, b: 5, c: 8 }, result: "ISÓSCELES", stepByStep: "5+5>8? 10>8 (V); dois lados iguais → ISÓSCELES" },
      { values: { a: 3, b: 4, c: 5 }, result: "ESCALENO", stepByStep: "3+4>5 (V); todos diferentes → ESCALENO" },
      { values: { a: 1, b: 1, c: 3 }, result: "INVÁLIDO", stepByStep: "1+1>3? 2>3 (F) → não forma triângulo" }
    ],
    explanation: "Primeiro verificamos se os lados formam um triângulo válido (condição de existência). Depois, aninhamos outra estrutura condicional para classificar o tipo: todos iguais (equilátero), dois iguais (isósceles) ou todos diferentes (escaleno)."
  },
  {
    id: 4,
    title: "Cálculo de Descontos em Compras",
    statement: "Aplique descontos conforme o valor total: 10% se valor ≥ 500, 5% se 300 ≤ valor < 500, sem desconto caso contrário.",
    input: "valor = 600",
    output: "Valor com desconto: 540",
    code: `// Cálculo de Descontos em Compras
let valor, valorFinal

console.log("Informe o valor total da compra: R$ ")
valor = parseFloat(prompt("Informe o valor total da compra: R$ "))

if (valor >= 500) {
  valorFinal = valor * 0.90
  console.log("Valor com desconto de 10%: R$ " + valorFinal)
} else if (valor >= 300) {
  valorFinal = valor * 0.95
  console.log("Valor com desconto de 5%: R$ " + valorFinal)
} else {
  console.log("Nenhum desconto aplicado. Valor: R$ " + valor)
}`,
    testCases: [
      { values: { valor: 600 }, result: 540, stepByStep: "600 ≥ 500 → 10% desconto → 600 × 0.90 = 540" },
      { values: { valor: 400 }, result: 380, stepByStep: "400 ≥ 500? falso; 400 ≥ 300? verdadeiro → 5% desconto → 400 × 0.95 = 380" },
      { values: { valor: 200 }, result: 200, stepByStep: "200 ≥ 500? falso; 200 ≥ 300? falso → sem desconto → 200" }
    ],
    explanation: "Utilizamos a estrutura if-else if-else para aplicar diferentes faixas de desconto. A ordem das condições é importante: primeiro verificamos o maior valor (≥ 500), depois o intermediário (≥ 300)."
  },
  {
    id: 5,
    title: "Verificação de Ano Bissexto",
    statement: "Determine se um ano é bissexto. Regras: divisível por 4 e não divisível por 100, ou divisível por 400.",
    input: "ano = 2024",
    output: "2024 é bissexto",
    code: `// Verificação de Ano Bissexto
let ano
let bissexto

console.log("Informe o ano: ")
ano = parseInt(prompt("Informe o ano: "))

bissexto = (ano % 4 == 0 && ano % 100 != 0) || (ano % 400 == 0)

if (bissexto) {
  console.log(ano + " é BISSEXTO")
} else {
  console.log(ano + " NÃO é bissexto")
}`,
    testCases: [
      { values: { ano: 2024 }, result: "BISSEXTO", stepByStep: "2024 % 4 = 0 (V); 2024 % 100 = 24 ≠ 0 (V); V && V = V → BISSEXTO" },
      { values: { ano: 1900 }, result: "NÃO BISSEXTO", stepByStep: "1900 % 4 = 0 (V); 1900 % 100 = 0 (F); V && F = F; 1900 % 400 ≠ 0 (F) → FALSO" },
      { values: { ano: 2000 }, result: "BISSEXTO", stepByStep: "2000 % 400 = 0 (V) → BISSEXTO" }
    ],
    explanation: "A condição para ano bissexto é composta: (divisível por 4 E não divisível por 100) OU divisível por 400. Usamos operadores lógicos '&&' e '||' para combinar as condições."
  },
  {
    id: 6,
    title: "Classificação por Idade",
    statement: "Classifique uma pessoa por faixa etária: Criança (0-12), Adolescente (13-17), Adulto (18-59), Idoso (60+).",
    input: "idade = 25",
    output: "Adulto",
    code: `// Classificação por Idade
let idade

console.log("Informe a idade: ")
idade = parseInt(prompt("Informe a idade: "))

if (idade < 0) {
  console.log("Idade inválida!")
} else if (idade <= 12) {
  console.log("CRIANÇA")
} else if (idade <= 17) {
  console.log("ADOLESCENTE")
} else if (idade <= 59) {
  console.log("ADULTO")
} else {
  console.log("IDOSO")
}`,
    testCases: [
      { values: { idade: 8 }, result: "CRIANÇA", stepByStep: "8 ≤ 12 → CRIANÇA" },
      { values: { idade: 15 }, result: "ADOLESCENTE", stepByStep: "15 > 12 e ≤ 17 → ADOLESCENTE" },
      { values: { idade: 30 }, result: "ADULTO", stepByStep: "30 > 17 e ≤ 59 → ADULTO" },
      { values: { idade: 70 }, result: "IDOSO", stepByStep: "70 > 59 → IDOSO" }
    ],
    explanation: "Utilizamos múltiplas condições em sequência para classificar a idade. A ordem é importante: começamos com a menor faixa e vamos subindo. O 'else' final captura todas as idades acima de 59."
  },
  {
    id: 7,
    title: "Operações Matemáticas com Escolha",
    statement: "Receba dois números e um código de operação: 1=soma, 2=subtração, 3=multiplicação, 4=divisão. Mostre o resultado.",
    input: "num1 = 10, num2 = 5, op = 3",
    output: "Resultado: 50",
    code: `// Operações Matemáticas com Escolha
let num1, num2, op
let resultado

console.log("Informe o primeiro número: ")
num1 = parseInt(prompt("Informe o primeiro número: "))
console.log("Informe o segundo número: ")
num2 = parseInt(prompt("Informe o segundo número: "))
console.log("Escolha a operação (1-soma, 2-subtração, 3-multiplicação, 4-divisão): ")
op = parseInt(prompt("Escolha a operação (1-soma, 2-subtração, 3-multiplicação, 4-divisão): "))

switch (op) {
  case 1:
    resultado = num1 + num2
    console.log("Soma: " + resultado)
    break
  case 2:
    resultado = num1 - num2
    console.log("Subtração: " + resultado)
    break
  case 3:
    resultado = num1 * num2
    console.log("Multiplicação: " + resultado)
    break
  case 4:
    if (num2 != 0) {
      resultado = num1 / num2
      console.log("Divisão: " + resultado)
    } else {
      console.log("Erro: divisão por zero!")
    }
    break
  default:
    console.log("Operação inválida!")
}`,
    testCases: [
      { values: { num1: 10, num2: 5, op: 3 }, result: 50, stepByStep: "op = 3 → multiplicação → 10 × 5 = 50" },
      { values: { num1: 10, num2: 5, op: 1 }, result: 15, stepByStep: "op = 1 → soma → 10 + 5 = 15" },
      { values: { num1: 10, num2: 5, op: 4 }, result: 2, stepByStep: "op = 4 → divisão → 10 ÷ 5 = 2" }
    ],
    explanation: "Utilizamos a estrutura 'switch-case' que é mais organizada quando temos várias opções baseadas no valor de uma variável. Cada caso executa a operação correspondente e usa 'break' para sair da estrutura."
  },
  {
    id: 8,
    title: "Verificação de Usuário e Senha",
    statement: "Verifique se o nome de usuário e senha estão corretos. Usuário: 'aluno', Senha: '123456'.",
    input: "nome = 'aluno', senha = '123456'",
    output: "Acesso Permitido",
    code: `// Verificação de Usuário e Senha
let nome, senha

console.log("Informe o nome de usuário: ")
nome = prompt("Informe o nome de usuário: ")
console.log("Informe a senha: ")
senha = prompt("Informe a senha: ")

if (nome == "aluno" && senha == "123456") {
  console.log("ACESSO PERMITIDO")
} else {
  console.log("ACESSO NEGADO")
}`,
    testCases: [
      { values: { nome: "aluno", senha: "123456" }, result: "PERMITIDO", stepByStep: "nome == 'aluno' (V) e senha == '123456' (V) → V → PERMITIDO" },
      { values: { nome: "aluno", senha: "senha123" }, result: "NEGADO", stepByStep: "nome == 'aluno' (V) e senha == '123456' (F) → F → NEGADO" },
      { values: { nome: "professor", senha: "123456" }, result: "NEGADO", stepByStep: "nome == 'aluno' (F) → F → NEGADO" }
    ],
    explanation: "Usamos o operador lógico '&&' (AND) para verificar se ambas as condições são verdadeiras. Apenas se nome e senha estiverem corretos o acesso é permitido."
  },
  {
    id: 9,
    title: "Cálculo de IMC e Classificação",
    statement: "Calcule o IMC (peso / altura²) e classifique: Abaixo do peso (<18.5), Normal (18.5-24.9), Sobrepeso (25-29.9), Obesidade (≥30).",
    input: "peso = 70, altura = 1.75",
    output: "IMC = 22.86. Peso normal",
    code: `// Cálculo de IMC e Classificação
let peso, altura, imc

console.log("Informe o peso (kg): ")
peso = parseFloat(prompt("Informe o peso (kg): "))
console.log("Informe a altura (m): ")
altura = parseFloat(prompt("Informe a altura (m): "))

imc = peso / (altura * altura)

console.log("IMC: " + imc)

if (imc < 18.5) {
  console.log("Abaixo do peso")
} else if (imc < 25) {
  console.log("Peso normal")
} else if (imc < 30) {
  console.log("Sobrepeso")
} else {
  console.log("Obesidade")
}`,
    testCases: [
      { values: { peso: 70, altura: 1.75 }, result: "Peso normal", stepByStep: "imc = 70/(1.75²) = 70/3.0625 = 22.86 → 18.5 ≤ 22.86 < 25 → Peso normal" },
      { values: { peso: 50, altura: 1.70 }, result: "Abaixo do peso", stepByStep: "imc = 50/2.89 = 17.30 → <18.5 → Abaixo do peso" },
      { values: { peso: 85, altura: 1.75 }, result: "Sobrepeso", stepByStep: "imc = 85/3.0625 = 27.76 → 25 ≤ 27.76 < 30 → Sobrepeso" }
    ],
    explanation: "Calculamos o IMC e usamos condições sequenciais para classificar. A ordem é importante: começamos com o menor valor e subimos. O 'else' final captura valores acima de 30."
  },
  {
    id: 10,
    title: "Simulador de Calculadora de Produtos",
    statement: "Leia o código do produto e a quantidade vendida, e calcule o valor a pagar conforme a tabela de preços.",
    input: "código = 102, quantidade = 2",
    output: "Total a Pagar: R$ 20,00",
    code: `// Simulador de Calculadora de Produtos
let codigo, quantidade
let valorUnitario = 0, total

console.log("Informe o código do produto: ")
codigo = parseInt(prompt("Informe o código do produto: "))
console.log("Informe a quantidade: ")
quantidade = parseInt(prompt("Informe a quantidade: "))

switch (codigo) {
  case 100:
    valorUnitario = 10.00
    break
  case 101:
    valorUnitario = 12.00
    break
  case 102:
    valorUnitario = 10.00
    break
  case 103:
    valorUnitario = 12.00
    break
  case 104:
    valorUnitario = 15.00
    break
  case 105:
    valorUnitario = 25.00
    break
  case 106:
    valorUnitario = 6.00
    break
  default:
    console.log("Código inválido!")
    break
}

if (valorUnitario > 0) {
  total = valorUnitario * quantidade
  console.log("Total a pagar: R$ " + total)
}`,
    testCases: [
      { values: { codigo: 102, quantidade: 2 }, result: 20, stepByStep: "código 102 → valor = R$10,00; total = 10 × 2 = R$20,00" },
      { values: { codigo: 100, quantidade: 3 }, result: 30, stepByStep: "código 100 → valor = R$10,00; total = 10 × 3 = R$30,00" },
      { values: { codigo: 105, quantidade: 1 }, result: 25, stepByStep: "código 105 → valor = R$25,00; total = 25 × 1 = R$25,00" }
    ],
    explanation: "Utilizamos a estrutura 'switch-case' para selecionar o valor unitário baseado no código do produto. Depois, calculamos o total multiplicando pela quantidade. A tabela completa: Cachorro-Quente (100) R$10,00; Bauru (101) R$12,00; Hambúrguer (102) R$10,00; Cheeseburguer (103) R$12,00; X-Bacon (104) R$15,00; Gourmet (105) R$25,00; Refrigerante Lata (106) R$6,00."
  },
  {
    id: 11,
    title: "Acesso à Casa Noturna",
    statement: "Sistema de controle de acesso: acesso permitido se idade ≥ 18 ou possuir autorização dos responsáveis.",
    input: "idade = 17, autorizacao = verdadeiro",
    output: "ACESSO PERMITIDO",
    code: `// Acesso à Casa Noturna
let idade
let autorizacao

console.log("Informe a idade: ")
idade = parseInt(prompt("Informe a idade: "))
console.log("Possui autorização dos responsáveis? (1-sim/0-nao): ")
autorizacao = parseInt(prompt("Possui autorização dos responsáveis? (1-sim/0-nao): "))

if (idade >= 18 || autorizacao == 1) {
  console.log("ACESSO PERMITIDO")
} else {
  console.log("ACESSO NEGADO")
}`,
    testCases: [
      { values: { idade: 20, autorizacao: 0 }, result: "PERMITIDO", stepByStep: "20 ≥ 18 (V) → PERMITIDO" },
      { values: { idade: 17, autorizacao: 1 }, result: "PERMITIDO", stepByStep: "17 ≥ 18? F; autorizacao = V → V → PERMITIDO" },
      { values: { idade: 16, autorizacao: 0 }, result: "NEGADO", stepByStep: "16 ≥ 18? F; autorizacao = F → F → NEGADO" }
    ],
    explanation: "Usamos o operador lógico '||' (OR) para verificar se pelo menos uma das condições é verdadeira. Acesso é permitido se a pessoa tem idade mínima OU autorização dos responsáveis."
  },
  {
    id: 12,
    title: "Frete Grátis",
    statement: "Frete grátis se valor da compra ≥ R$200 ou cliente for membro do programa de fidelidade.",
    input: "valor = 150, membro = verdadeiro",
    output: "FRETE GRATIS",
    code: `// Frete Grátis
let valor
let membro

console.log("Informe o valor da compra: R$ ")
valor = parseFloat(prompt("Informe o valor da compra: R$ "))
console.log("Cliente é membro? (1-sim/0-nao): ")
membro = parseInt(prompt("Cliente é membro? (1-sim/0-nao): "))

if (valor >= 200 || membro == 1) {
  console.log("FRETE GRATIS")
} else {
  console.log("FRETE PAGO")
}`,
    testCases: [
      { values: { valor: 250, membro: 0 }, result: "FRETE GRATIS", stepByStep: "250 ≥ 200 (V) → FRETE GRATIS" },
      { values: { valor: 150, membro: 1 }, result: "FRETE GRATIS", stepByStep: "150 ≥ 200? F; membro = V → V → FRETE GRATIS" },
      { values: { valor: 100, membro: 0 }, result: "FRETE PAGO", stepByStep: "100 ≥ 200? F; membro = F → F → FRETE PAGO" }
    ],
    explanation: "O frete é gratuito quando pelo menos uma das condições é atendida: valor mínimo de compra OU cliente membro do programa de fidelidade."
  },
  {
    id: 13,
    title: "Senha Forte",
    statement: "Verifique se a senha é forte: tamanho ≥ 8 e diferente de '12345678'.",
    input: "senha = 'minhasenha'",
    output: "SENHA ACEITA",
    code: `// Senha Forte
let senha
let tamanho

console.log("Informe a senha: ")
senha = prompt("Informe a senha: ")

tamanho = senha.length

if (tamanho >= 8 && senha != "12345678") {
  console.log("SENHA ACEITA")
} else {
  console.log("SENHA FRACA")
}`,
    testCases: [
      { values: { senha: "minhasenha123" }, result: "ACEITA", stepByStep: "tamanho = 13 ≥ 8 (V) e senha ≠ '12345678' (V) → ACEITA" },
      { values: { senha: "12345678" }, result: "FRACA", stepByStep: "tamanho = 8 ≥ 8 (V) mas senha == '12345678' → F → FRACA" },
      { values: { senha: "abc" }, result: "FRACA", stepByStep: "tamanho = 3 ≥ 8? F → FRACA" }
    ],
    explanation: "A senha é considerada forte se atende a dois requisitos: ter tamanho mínimo de 8 caracteres E não ser a senha padrão '12345678'."
  },
  {
    id: 14,
    title: "Triagem de Risco",
    statement: "Classifique risco do paciente: RISCO ALTO se temperatura ≥ 39°C OU falta de ar OU idade ≥ 65.",
    input: "temperatura = 38.5, faltaAr = falso, idade = 70",
    output: "RISCO ALTO",
    code: `// Triagem de Risco
let temperatura
let faltaAr
let idade

console.log("Informe a temperatura: ")
temperatura = parseFloat(prompt("Informe a temperatura: "))
console.log("Tem falta de ar? (1-sim/0-nao): ")
faltaAr = parseInt(prompt("Tem falta de ar? (1-sim/0-nao): "))
console.log("Informe a idade: ")
idade = parseInt(prompt("Informe a idade: "))

if (temperatura >= 39 || faltaAr == 1 || idade >= 65) {
  console.log("RISCO ALTO")
} else {
  console.log("RISCO BAIXO")
}`,
    testCases: [
      { values: { temperatura: 39, faltaAr: 0, idade: 30 }, result: "RISCO ALTO", stepByStep: "39 ≥ 39 (V) → RISCO ALTO" },
      { values: { temperatura: 37, faltaAr: 1, idade: 30 }, result: "RISCO ALTO", stepByStep: "faltaAr = V → RISCO ALTO" },
      { values: { temperatura: 37, faltaAr: 0, idade: 70 }, result: "RISCO ALTO", stepByStep: "idade = 70 ≥ 65 (V) → RISCO ALTO" },
      { values: { temperatura: 37, faltaAr: 0, idade: 30 }, result: "RISCO BAIXO", stepByStep: "nenhuma condição verdadeira → RISCO BAIXO" }
    ],
    explanation: "Utilizamos o operador lógico '||' (OR) para combinar três condições. Se qualquer uma for verdadeira, o paciente é classificado como RISCO ALTO."
  },
  {
    id: 15,
    title: "Prioridade de Atendimento",
    statement: "Classifique prioridade: PRIORITÁRIO se for gestante, idoso ou tiver deficiência.",
    input: "ehGestante = falso, ehIdoso = verdadeiro, temDeficiencia = falso",
    output: "PRIORITARIO",
    code: `// Prioridade de Atendimento
let ehGestante, ehIdoso, temDeficiencia

console.log("É gestante? (1-sim/0-nao): ")
ehGestante = parseInt(prompt("É gestante? (1-sim/0-nao): "))
console.log("É idoso? (1-sim/0-nao): ")
ehIdoso = parseInt(prompt("É idoso? (1-sim/0-nao): "))
console.log("Tem deficiência? (1-sim/0-nao): ")
temDeficiencia = parseInt(prompt("Tem deficiência? (1-sim/0-nao): "))

if (ehGestante == 1 || ehIdoso == 1 || temDeficiencia == 1) {
  console.log("PRIORITARIO")
} else {
  console.log("COMUM")
}`,
    testCases: [
      { values: { ehGestante: 1, ehIdoso: 0, temDeficiencia: 0 }, result: "PRIORITARIO", stepByStep: "ehGestante = V → PRIORITARIO" },
      { values: { ehGestante: 0, ehIdoso: 1, temDeficiencia: 0 }, result: "PRIORITARIO", stepByStep: "ehIdoso = V → PRIORITARIO" },
      { values: { ehGestante: 0, ehIdoso: 0, temDeficiencia: 1 }, result: "PRIORITARIO", stepByStep: "temDeficiencia = V → PRIORITARIO" },
      { values: { ehGestante: 0, ehIdoso: 0, temDeficiencia: 0 }, result: "COMUM", stepByStep: "todas falsas → COMUM" }
    ],
    explanation: "Usamos o operador '||' (OR) para verificar se a pessoa possui pelo menos uma das condições que garantem prioridade no atendimento."
  },
  {
    id: 16,
    title: "Bônus para Vendedores",
    statement: "Conceder bônus se vendas ≥ R$5000 OU (for novato E vendas ≥ R$2000).",
    input: "vendas = 2500, novato = verdadeiro",
    output: "BONUS",
    code: `// Bônus para Vendedores
let vendas
let novato

console.log("Informe o total de vendas: R$ ")
vendas = parseFloat(prompt("Informe o total de vendas: R$ "))
console.log("É novato? (1-sim/0-nao): ")
novato = parseInt(prompt("É novato? (1-sim/0-nao): "))

if (vendas >= 5000 || (novato == 1 && vendas >= 2000)) {
  console.log("BONUS")
} else {
  console.log("SEM BONUS")
}`,
    testCases: [
      { values: { vendas: 6000, novato: 0 }, result: "BONUS", stepByStep: "6000 ≥ 5000 (V) → BONUS" },
      { values: { vendas: 2500, novato: 1 }, result: "BONUS", stepByStep: "novato (V) e 2500 ≥ 2000 (V) → V → BONUS" },
      { values: { vendas: 2500, novato: 0 }, result: "SEM BONUS", stepByStep: "2500 ≥ 5000? F; novato = F → F → SEM BONUS" }
    ],
    explanation: "A condição combina operadores '||' (OR) e '&&' (AND). O bônus é concedido se o vendedor atinge a meta de R$5000, OU se é novato e atinge a meta reduzida de R$2000."
  },
  {
    id: 17,
    title: "Controle de Acesso por Credenciais",
    statement: "Entrada permitida se (tem crachá OU está na lista) E horário entre 8 e 20.",
    input: "temCracha = verdadeiro, estaNaLista = falso, horario = 14",
    output: "ENTRA",
    code: `// Controle de Acesso por Credenciais
let temCracha, estaNaLista
let horario

console.log("Tem crachá? (1-sim/0-nao): ")
temCracha = parseInt(prompt("Tem crachá? (1-sim/0-nao): "))
console.log("Está na lista autorizada? (1-sim/0-nao): ")
estaNaLista = parseInt(prompt("Está na lista autorizada? (1-sim/0-nao): "))
console.log("Informe o horário (0-23): ")
horario = parseInt(prompt("Informe o horário (0-23): "))

if ((temCracha == 1 || estaNaLista == 1) && (horario >= 8 && horario <= 20)) {
  console.log("ENTRA")
} else {
  console.log("NAO ENTRA")
}`,
    testCases: [
      { values: { temCracha: 1, estaNaLista: 0, horario: 14 }, result: "ENTRA", stepByStep: "temCracha = V → (V ou F) = V; horário 14 entre 8-20 (V); V && V = V → ENTRA" },
      { values: { temCracha: 0, estaNaLista: 0, horario: 14 }, result: "NAO ENTRA", stepByStep: "(F ou F) = F → F && V = F → NAO ENTRA" },
      { values: { temCracha: 1, estaNaLista: 0, horario: 22 }, result: "NAO ENTRA", stepByStep: "temCracha = V; horário 22 entre 8-20? F → V && F = F → NAO ENTRA" }
    ],
    explanation: "A condição combina operadores '||' (OR) e '&&' (AND). Primeiro verificamos se a pessoa tem crachá OU está na lista (autorização). Depois verificamos se o horário está dentro do permitido. Ambas as condições devem ser verdadeiras para o acesso ser permitido."
  }
];

// Renderiza a seção de conceitos de condicionais
function renderConceitosCondicionais() {
  return `
    <div class="content-card">
      <h2 class="card-title">🎮 Estruturas de Controle em JavaScript</h2>
      <p>Em alguns casos, precisamos que o programa <strong>tome decisões</strong> ou repita ações com base nos dados recebidos.</p>
      <p>Sem estruturas de controle, o programa executa os comandos na ordem em que aparecem, de cima para baixo. As estruturas de controle permitem mudar a ordem de execução ou repetir instruções, tornando possível resolver problemas mais complexos, o que por sua vez, torna o programa mais <strong>inteligente e flexível</strong>.</p>
      
      <div class="info-callout">
        <span class="info-icon-callout">⚡</span>
        <div><strong>Tipos de Estruturas de Controle:</strong><br>
        • <strong>Desvios Condicionais</strong> (if, if-else, switch) - tomam decisões<br>
        • <strong>Laços de Repetição</strong> (for, while, do-while) - repetem ações</div>
      </div>
    </div>
    
    <div class="content-card">
      <h2 class="card-title">✅ Desvio Condicional - if</h2>
      <p>Usado quando queremos que algo aconteça <strong>apenas se uma condição for verdadeira</strong>. Uma condição é um teste que pode dar true ou false. Se for true, o código dentro do if é executado. Se for false, o programa pula esse bloco e continua normalmente.</p>
      
      <div class="code-example">
        <div class="code-example-header">
          <span class="code-icon">📝</span>
          <span>Sintaxe do if</span>
        </div>
        <pre><code>if (condicao) {
  // Instruções executadas se a condição for verdadeira
}</code></pre>
      </div>
      
      <div class="code-example">
        <div class="code-example-header">
          <span class="code-icon">📝</span>
          <span>Exemplo prático</span>
        </div>
        <pre><code>let num
console.log("Digite um número: ")
num = parseInt(prompt("Digite um número: "))

if (num == 0) {
  console.log("O número digitado é 0")
}</code></pre>
      </div>
    </div>
    
    <div class="content-card">
      <h2 class="card-title">✅ Desvio Condicional - if-else</h2>
      <p>Usado quando precisamos <strong>executar um código se a condição for verdadeira e outro se for falsa</strong>.</p>
      
      <div class="code-example">
        <div class="code-example-header">
          <span class="code-icon">📝</span>
          <span>Sintaxe do if-else</span>
        </div>
        <pre><code>if (condicao) {
  // Executa se verdadeiro
} else {
  // Executa se falso
}</code></pre>
      </div>
      
      <div class="code-example">
        <div class="code-example-header">
          <span class="code-icon">📝</span>
          <span>Exemplo prático</span>
        </div>
        <pre><code>let num
console.log("Digite um número: ")
num = parseInt(prompt("Digite um número: "))

if (num == 0) {
  console.log("Impossível dividir por zero!")
} else {
  console.log("20 dividido por " + num + " = " + (20/num))
}</code></pre>
      </div>
    </div>
    
    <div class="content-card">
      <h2 class="card-title">✅ Desvio Condicional - else if</h2>
      <p>Usado quando temos <strong>mais de duas possibilidades</strong>. O programa testa a primeira condição: se for verdadeira, executa o bloco e para. Se for falsa, testa a próxima condição (else if). Se nenhuma condição for verdadeira, executa o bloco final (else).</p>
      
      <div class="code-example">
        <div class="code-example-header">
          <span class="code-icon">📝</span>
          <span>Sintaxe do else if</span>
        </div>
        <pre><code>if (condicao1) {
  // Executa se condicao1 for verdadeira
} else if (condicao2) {
  // Executa se condicao1 for falsa e condicao2 verdadeira
} else {
  // Executa se todas as condições forem falsas
}</code></pre>
      </div>
      
      <div class="code-example">
        <div class="code-example-header">
          <span class="code-icon">📝</span>
          <span>Exemplo prático - Classificação de notas</span>
        </div>
        <pre><code>if (nota >= 7) {
  console.log("Aluno aprovado")
} else if (nota >= 4) {
  console.log("Aluno em recuperação")
} else {
  console.log("Aluno reprovado")
}</code></pre>
      </div>
    </div>
    
    <div class="content-card">
      <h2 class="card-title">✅ Desvio Condicional - switch-case</h2>
      <p>Usado para <strong>verificar o valor de uma variável</strong> e executar um código diferente para cada valor. É mais organizado que usar vários if-else if. Funciona apenas com valores exatos (não aceita operadores lógicos). Cada opção é um case, e normalmente termina com o comando <code>break</code> para evitar que outros cases sejam executados.</p>
      
      <div class="code-example">
        <div class="code-example-header">
          <span class="code-icon">📝</span>
          <span>Sintaxe do switch-case</span>
        </div>
        <pre><code>switch (variavel) {
  case valor1:
    // Instruções para valor1
    break
  case valor2:
    // Instruções para valor2
    break
  default:
    // Instruções para valores não previstos
}</code></pre>
      </div>
      
      <div class="code-example">
        <div class="code-example-header">
          <span class="code-icon">📝</span>
          <span>Exemplo prático - Menu de opções</span>
        </div>
        <pre><code>switch (opcao) {
  case 1:
    console.log("Você escolheu a opção 1")
    break
  case 2:
    console.log("Você escolheu a opção 2")
    break
  default:
    console.log("Opção inválida")
}</code></pre>
      </div>
    </div>
    
    <div class="content-card">
      <h2 class="card-title">📋 Resumo das Estruturas Condicionais</h2>
      <div class="operators-table">
        <div class="operator-row header">
          <div>Estrutura</div>
          <div>Quando usar</div>
          <div>Exemplo</div>
        </div>
        <div class="operator-row">
          <div><code>if</code></div>
          <div>Uma única condição, ação opcional</div>
          <div>Verificar se número é zero</div>
        </div>
        <div class="operator-row">
          <div><code>if-else</code></div>
          <div>Duas possibilidades (true/false)</div>
          <div>Verificar maioridade</div>
        </div>
        <div class="operator-row">
          <div><code>else if</code></div>
          <div>Múltiplas condições com intervalos</div>
          <div>Classificar faixas de idade</div>
        </div>
        <div class="operator-row">
          <div><code>switch-case</code></div>
          <div>Múltiplos valores exatos</div>
          <div>Menu de opções numéricas</div>
        </div>
      </div>
      
      <div class="info-callout" style="margin-top: 1rem;">
        <span class="info-icon-callout">💡</span>
        <div><strong>Dica do Professor:</strong> Use else if quando as condições envolvem intervalos ou operadores lógicos. Use switch-case quando você tem valores específicos para testar. O código fica mais limpo e organizado!</div>
      </div>
    </div>
  `;
}

// Renderiza a seção de exercícios de condicionais
function renderExerciciosCondicionais() {
  const currentEx = condicionaisExercises.find(e => e.id === currentCondicionalExercise) || condicionaisExercises[0];
  
  return `
    <!-- Filtro de exercícios -->
    <div class="exercises-filter">
      <div class="filter-header">
        <span>📋 Exercícios de Condicionais (JavaScript)</span>
        <span class="filter-count">${condicionaisExercises.length} exercícios disponíveis</span>
      </div>
      <div class="filter-buttons">
        ${condicionaisExercises.map(ex => `
          <button class="filter-btn ${ex.id === currentCondicionalExercise ? 'active' : ''}" data-ex-id="${ex.id}">
            ${ex.id.toString().padStart(2, '0')}
          </button>
        `).join('')}
      </div>
    </div>
    
    <!-- Exercício atual -->
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
          <span>💻 Código de Resolução (JavaScript)</span>
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
  return `
    <div class="page-header">
      <h1 class="page-title"><span>🔀</span> Estruturas Condicionais em JavaScript</h1>
      <p class="page-subtitle">Aprenda a criar decisões inteligentes nos seus programas com if, else, switch</p>
    </div>
    
    <div class="sub-nav">
      <button class="sub-nav-btn ${currentCondicionalSubpage === 'conceitos' ? 'active' : ''}" data-subpage="conceitos">
        📘 Conceitos
      </button>
      <button class="sub-nav-btn ${currentCondicionalSubpage === 'exercicios' ? 'active' : ''}" data-subpage="exercicios">
        ✏️ Exercícios
      </button>
    </div>
    
    <div id="condicionais-content">
      ${currentCondicionalSubpage === 'conceitos' ? renderConceitosCondicionais() : renderExerciciosCondicionais()}
    </div>
  `;
}