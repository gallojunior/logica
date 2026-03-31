const condicionaisExercises = [
  {
    id: 1,
    title: "Verificação de Positivo/Negativo/Zero",
    statement: "Escreva um algoritmo que receba um número e determine se ele é positivo, negativo ou zero.",
    input: "num = -5",
    output: "O número é negativo.",
    code: `programa {
  funcao inicio() {
    inteiro num
    
    escreva("Informe um número: ")
    leia(num)
    
    se (num > 0) {
      escreva("O número ", num, " é POSITIVO")
    } senao se (num < 0) {
      escreva("O número ", num, " é NEGATIVO")
    } senao {
      escreva("O número é ZERO")
    }
  }
}`,
    testCases: [
      { values: { num: 5 }, result: "POSITIVO", stepByStep: "5 > 0 → verdadeiro → POSITIVO" },
      { values: { num: -3 }, result: "NEGATIVO", stepByStep: "-3 > 0? falso; -3 < 0? verdadeiro → NEGATIVO" },
      { values: { num: 0 }, result: "ZERO", stepByStep: "0 > 0? falso; 0 < 0? falso → ZERO" }
    ],
    explanation: "Utilizamos a estrutura condicional se-senao-se para verificar três possibilidades. Primeiro testamos se é positivo (num > 0), depois se é negativo (num < 0), e por fim, se nenhuma das condições for verdadeira, o número é zero."
  },
  {
    id: 2,
    title: "Aprovação por Média",
    statement: "Receba três notas, calcule a média e determine se o aluno foi aprovado (média ≥ 7), em recuperação (5 ≤ média < 7) ou reprovado (média < 5).",
    input: "nota1 = 6, nota2 = 7, nota3 = 8",
    output: "Média = 7.0. Aprovado!",
    code: `programa {
  funcao inicio() {
    real nota1, nota2, nota3, media
    
    escreva("Informe a primeira nota: ")
    leia(nota1)
    escreva("Informe a segunda nota: ")
    leia(nota2)
    escreva("Informe a terceira nota: ")
    leia(nota3)
    
    media = (nota1 + nota2 + nota3) / 3
    
    escreva("Média: ", media, "\\n")
    
    se (media >= 7) {
      escreva("APROVADO!")
    } senao se (media >= 5) {
      escreva("RECUPERAÇÃO")
    } senao {
      escreva("REPROVADO")
    }
  }
}`,
    testCases: [
      { values: { nota1: 7, nota2: 8, nota3: 9 }, result: "APROVADO", stepByStep: "média = (7+8+9)/3 = 8.0 → 8.0 ≥ 7 → APROVADO" },
      { values: { nota1: 5, nota2: 6, nota3: 7 }, result: "RECUPERAÇÃO", stepByStep: "média = (5+6+7)/3 = 6.0 → 6.0 ≥ 7? falso; 6.0 ≥ 5? verdadeiro → RECUPERAÇÃO" },
      { values: { nota1: 4, nota2: 5, nota3: 3 }, result: "REPROVADO", stepByStep: "média = (4+5+3)/3 = 4.0 → 4.0 ≥ 7? falso; 4.0 ≥ 5? falso → REPROVADO" }
    ],
    explanation: "Primeiro calculamos a média das três notas. Depois usamos a estrutura se-senao-se: se média ≥ 7 → aprovado; senão se média ≥ 5 → recuperação; senão → reprovado."
  },
  {
    id: 3,
    title: "Classificação de Triângulos",
    statement: "Receba três lados e classifique o triângulo em Equilátero (todos iguais), Isósceles (dois iguais) ou Escaleno (todos diferentes). Se não formar um triângulo válido, informe.",
    input: "a = 5, b = 5, c = 5",
    output: "Triângulo Equilátero",
    code: `programa {
  funcao inicio() {
    inteiro a, b, c
    logico trianguloValido
    
    escreva("Informe o primeiro lado: ")
    leia(a)
    escreva("Informe o segundo lado: ")
    leia(b)
    escreva("Informe o terceiro lado: ")
    leia(c)
    
    trianguloValido = (a + b > c) e (a + c > b) e (b + c > a)
    
    se (trianguloValido) {
      se (a == b e b == c) {
        escreva("Triângulo EQUILÁTERO")
      } senao se (a == b ou a == c ou b == c) {
        escreva("Triângulo ISÓSCELES")
      } senao {
        escreva("Triângulo ESCALENO")
      }
    } senao {
      escreva("Os lados NÃO formam um triângulo válido")
    }
  }
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
    code: `programa {
  funcao inicio() {
    real valor, valorFinal
    
    escreva("Informe o valor total da compra: R$ ")
    leia(valor)
    
    se (valor >= 500) {
      valorFinal = valor * 0.90
      escreva("Valor com desconto de 10%: R$ ", valorFinal)
    } senao se (valor >= 300) {
      valorFinal = valor * 0.95
      escreva("Valor com desconto de 5%: R$ ", valorFinal)
    } senao {
      escreva("Nenhum desconto aplicado. Valor: R$ ", valor)
    }
  }
}`,
    testCases: [
      { values: { valor: 600 }, result: 540, stepByStep: "600 ≥ 500 → 10% desconto → 600 × 0.90 = 540" },
      { values: { valor: 400 }, result: 380, stepByStep: "400 ≥ 500? falso; 400 ≥ 300? verdadeiro → 5% desconto → 400 × 0.95 = 380" },
      { values: { valor: 200 }, result: 200, stepByStep: "200 ≥ 500? falso; 200 ≥ 300? falso → sem desconto → 200" }
    ],
    explanation: "Utilizamos a estrutura se-senao-se para aplicar diferentes faixas de desconto. A ordem das condições é importante: primeiro verificamos o maior valor (≥ 500), depois o intermediário (≥ 300)."
  },
  {
    id: 5,
    title: "Verificação de Ano Bissexto",
    statement: "Determine se um ano é bissexto. Regras: divisível por 4 e não divisível por 100, ou divisível por 400.",
    input: "ano = 2024",
    output: "2024 é bissexto",
    code: `programa {
  funcao inicio() {
    inteiro ano
    logico bissexto
    
    escreva("Informe o ano: ")
    leia(ano)
    
    bissexto = (ano % 4 == 0 e ano % 100 != 0) ou (ano % 400 == 0)
    
    se (bissexto) {
      escreva(ano, " é BISSEXTO")
    } senao {
      escreva(ano, " NÃO é bissexto")
    }
  }
}`,
    testCases: [
      { values: { ano: 2024 }, result: "BISSEXTO", stepByStep: "2024 % 4 = 0 (V); 2024 % 100 = 24 ≠ 0 (V); V e V = V → BISSEXTO" },
      { values: { ano: 1900 }, result: "NÃO BISSEXTO", stepByStep: "1900 % 4 = 0 (V); 1900 % 100 = 0 (F); V e F = F; 1900 % 400 ≠ 0 (F) → FALSO" },
      { values: { ano: 2000 }, result: "BISSEXTO", stepByStep: "2000 % 400 = 0 (V) → BISSEXTO" }
    ],
    explanation: "A condição para ano bissexto é composta: (divisível por 4 E não divisível por 100) OU divisível por 400. Usamos operadores lógicos 'e' e 'ou' para combinar as condições."
  },
  {
    id: 6,
    title: "Classificação por Idade",
    statement: "Classifique uma pessoa por faixa etária: Criança (0-12), Adolescente (13-17), Adulto (18-59), Idoso (60+).",
    input: "idade = 25",
    output: "Adulto",
    code: `programa {
  funcao inicio() {
    inteiro idade
    
    escreva("Informe a idade: ")
    leia(idade)
    
    se (idade < 0) {
      escreva("Idade inválida!")
    } senao se (idade <= 12) {
      escreva("CRIANÇA")
    } senao se (idade <= 17) {
      escreva("ADOLESCENTE")
    } senao se (idade <= 59) {
      escreva("ADULTO")
    } senao {
      escreva("IDOSO")
    }
  }
}`,
    testCases: [
      { values: { idade: 8 }, result: "CRIANÇA", stepByStep: "8 ≤ 12 → CRIANÇA" },
      { values: { idade: 15 }, result: "ADOLESCENTE", stepByStep: "15 > 12 e ≤ 17 → ADOLESCENTE" },
      { values: { idade: 30 }, result: "ADULTO", stepByStep: "30 > 17 e ≤ 59 → ADULTO" },
      { values: { idade: 70 }, result: "IDOSO", stepByStep: "70 > 59 → IDOSO" }
    ],
    explanation: "Utilizamos múltiplas condições em sequência para classificar a idade. A ordem é importante: começamos com a menor faixa e vamos subindo. A condição 'senão' final captura todas as idades acima de 59."
  },
  {
    id: 7,
    title: "Operações Matemáticas com Escolha",
    statement: "Receba dois números e um código de operação: 1=soma, 2=subtração, 3=multiplicação, 4=divisão. Mostre o resultado.",
    input: "num1 = 10, num2 = 5, op = 3",
    output: "Resultado: 50",
    code: `programa {
  funcao inicio() {
    inteiro num1, num2, op
    real resultado
    
    escreva("Informe o primeiro número: ")
    leia(num1)
    escreva("Informe o segundo número: ")
    leia(num2)
    escreva("Escolha a operação (1-soma, 2-subtração, 3-multiplicação, 4-divisão): ")
    leia(op)
    
    escolha (op) {
      caso 1:
        resultado = num1 + num2
        escreva("Soma: ", resultado)
        pare
      caso 2:
        resultado = num1 - num2
        escreva("Subtração: ", resultado)
        pare
      caso 3:
        resultado = num1 * num2
        escreva("Multiplicação: ", resultado)
        pare
      caso 4:
        se (num2 != 0) {
          resultado = num1 / num2
          escreva("Divisão: ", resultado)
        } senao {
          escreva("Erro: divisão por zero!")
        }
        pare
      caso contrario:
        escreva("Operação inválida!")
    }
  }
}`,
    testCases: [
      { values: { num1: 10, num2: 5, op: 3 }, result: 50, stepByStep: "op = 3 → multiplicação → 10 × 5 = 50" },
      { values: { num1: 10, num2: 5, op: 1 }, result: 15, stepByStep: "op = 1 → soma → 10 + 5 = 15" },
      { values: { num1: 10, num2: 5, op: 4 }, result: 2, stepByStep: "op = 4 → divisão → 10 ÷ 5 = 2" }
    ],
    explanation: "Utilizamos a estrutura 'escolha-caso' que é mais organizada quando temos várias opções baseadas no valor de uma variável. Cada caso executa a operação correspondente e usa 'pare' para sair da estrutura."
  },
  {
    id: 8,
    title: "Verificação de Usuário e Senha",
    statement: "Verifique se o nome de usuário e senha estão corretos. Usuário: 'aluno', Senha: '123456'.",
    input: "nome = 'aluno', senha = '123456'",
    output: "Acesso Permitido",
    code: `programa {
  funcao inicio() {
    cadeia nome, senha
    
    escreva("Informe o nome de usuário: ")
    leia(nome)
    escreva("Informe a senha: ")
    leia(senha)
    
    se (nome == "aluno" e senha == "123456") {
      escreva("ACESSO PERMITIDO")
    } senao {
      escreva("ACESSO NEGADO")
    }
  }
}`,
    testCases: [
      { values: { nome: "aluno", senha: "123456" }, result: "PERMITIDO", stepByStep: "nome == 'aluno' (V) e senha == '123456' (V) → V → PERMITIDO" },
      { values: { nome: "aluno", senha: "senha123" }, result: "NEGADO", stepByStep: "nome == 'aluno' (V) e senha == '123456' (F) → F → NEGADO" },
      { values: { nome: "professor", senha: "123456" }, result: "NEGADO", stepByStep: "nome == 'aluno' (F) → F → NEGADO" }
    ],
    explanation: "Usamos o operador lógico 'e' para verificar se ambas as condições são verdadeiras. Apenas se nome e senha estiverem corretos o acesso é permitido."
  },
  {
    id: 9,
    title: "Cálculo de IMC e Classificação",
    statement: "Calcule o IMC (peso / altura²) e classifique: Abaixo do peso (<18.5), Normal (18.5-24.9), Sobrepeso (25-29.9), Obesidade (≥30).",
    input: "peso = 70, altura = 1.75",
    output: "IMC = 22.86. Peso normal",
    code: `programa {
  funcao inicio() {
    real peso, altura, imc
    
    escreva("Informe o peso (kg): ")
    leia(peso)
    escreva("Informe a altura (m): ")
    leia(altura)
    
    imc = peso / (altura * altura)
    
    escreva("IMC: ", imc, "\\n")
    
    se (imc < 18.5) {
      escreva("Abaixo do peso")
    } senao se (imc < 25) {
      escreva("Peso normal")
    } senao se (imc < 30) {
      escreva("Sobrepeso")
    } senao {
      escreva("Obesidade")
    }
  }
}`,
    testCases: [
      { values: { peso: 70, altura: 1.75 }, result: "Peso normal", stepByStep: "imc = 70/(1.75²) = 70/3.0625 = 22.86 → 18.5 ≤ 22.86 < 25 → Peso normal" },
      { values: { peso: 50, altura: 1.70 }, result: "Abaixo do peso", stepByStep: "imc = 50/2.89 = 17.30 → <18.5 → Abaixo do peso" },
      { values: { peso: 85, altura: 1.75 }, result: "Sobrepeso", stepByStep: "imc = 85/3.0625 = 27.76 → 25 ≤ 27.76 < 30 → Sobrepeso" }
    ],
    explanation: "Calculamos o IMC e usamos condições sequenciais para classificar. A ordem é importante: começamos com o menor valor e subimos. O 'senão' final captura valores acima de 30."
  },
  {
    id: 10,
    title: "Simulador de Calculadora de Produtos",
    statement: "Leia o código do produto e a quantidade vendida, e calcule o valor a pagar conforme a tabela de preços.",
    input: "código = 102, quantidade = 2",
    output: "Total a Pagar: R$ 20,00",
    code: `programa {
  funcao inicio() {
    inteiro codigo, quantidade
    real valorUnitario = 0, total
    
    escreva("Informe o código do produto: ")
    leia(codigo)
    escreva("Informe a quantidade: ")
    leia(quantidade)
    
    escolha (codigo) {
      caso 100:
        valorUnitario = 10.00
        pare
      caso 101:
        valorUnitario = 12.00
        pare
      caso 102:
        valorUnitario = 10.00
        pare
      caso 103:
        valorUnitario = 12.00
        pare
      caso 104:
        valorUnitario = 15.00
        pare
      caso 105:
        valorUnitario = 25.00
        pare
      caso 106:
        valorUnitario = 6.00
        pare
      caso contrario:
        escreva("Código inválido!")
        pare
    }
    
    se (valorUnitario > 0) {
      total = valorUnitario * quantidade
      escreva("Total a pagar: R$ ", total)
    }
  }
}`,
    testCases: [
      { values: { codigo: 102, quantidade: 2 }, result: 20, stepByStep: "código 102 → valor = R$10,00; total = 10 × 2 = R$20,00" },
      { values: { codigo: 100, quantidade: 3 }, result: 30, stepByStep: "código 100 → valor = R$10,00; total = 10 × 3 = R$30,00" },
      { values: { codigo: 105, quantidade: 1 }, result: 25, stepByStep: "código 105 → valor = R$25,00; total = 25 × 1 = R$25,00" }
    ],
    explanation: "Utilizamos a estrutura 'escolha-caso' para selecionar o valor unitário baseado no código do produto. Depois, calculamos o total multiplicando pela quantidade. A tabela completa: Cachorro-Quente (100) R$10,00; Bauru (101) R$12,00; Hambúrguer (102) R$10,00; Cheeseburguer (103) R$12,00; X-Bacon (104) R$15,00; Gourmet (105) R$25,00; Refrigerante Lata (106) R$6,00."
  },
  {
    id: 11,
    title: "Acesso à Casa Noturna",
    statement: "Sistema de controle de acesso: acesso permitido se idade ≥ 18 ou possuir autorização dos responsáveis.",
    input: "idade = 17, autorizacao = verdadeiro",
    output: "ACESSO PERMITIDO",
    code: `programa {
  funcao inicio() {
    inteiro idade
    logico autorizacao
    
    escreva("Informe a idade: ")
    leia(idade)
    escreva("Possui autorização dos responsáveis? (1-sim/0-nao): ")
    leia(autorizacao)
    
    se (idade >= 18 ou autorizacao == verdadeiro) {
      escreva("ACESSO PERMITIDO")
    } senao {
      escreva("ACESSO NEGADO")
    }
  }
}`,
    testCases: [
      { values: { idade: 20, autorizacao: false }, result: "PERMITIDO", stepByStep: "20 ≥ 18 (V) → PERMITIDO" },
      { values: { idade: 17, autorizacao: true }, result: "PERMITIDO", stepByStep: "17 ≥ 18? F; autorizacao = V → V → PERMITIDO" },
      { values: { idade: 16, autorizacao: false }, result: "NEGADO", stepByStep: "16 ≥ 18? F; autorizacao = F → F → NEGADO" }
    ],
    explanation: "Usamos o operador lógico 'ou' para verificar se pelo menos uma das condições é verdadeira. Acesso é permitido se a pessoa tem idade mínima OU autorização dos responsáveis."
  },
  {
    id: 12,
    title: "Frete Grátis",
    statement: "Frete grátis se valor da compra ≥ R$200 ou cliente for membro do programa de fidelidade.",
    input: "valor = 150, membro = verdadeiro",
    output: "FRETE GRATIS",
    code: `programa {
  funcao inicio() {
    real valor
    logico membro
    
    escreva("Informe o valor da compra: R$ ")
    leia(valor)
    escreva("Cliente é membro? (1-sim/0-nao): ")
    leia(membro)
    
    se (valor >= 200 ou membro == verdadeiro) {
      escreva("FRETE GRATIS")
    } senao {
      escreva("FRETE PAGO")
    }
  }
}`,
    testCases: [
      { values: { valor: 250, membro: false }, result: "FRETE GRATIS", stepByStep: "250 ≥ 200 (V) → FRETE GRATIS" },
      { values: { valor: 150, membro: true }, result: "FRETE GRATIS", stepByStep: "150 ≥ 200? F; membro = V → V → FRETE GRATIS" },
      { values: { valor: 100, membro: false }, result: "FRETE PAGO", stepByStep: "100 ≥ 200? F; membro = F → F → FRETE PAGO" }
    ],
    explanation: "O frete é gratuito quando pelo menos uma das condições é atendida: valor mínimo de compra OU cliente membro do programa de fidelidade."
  },
  {
    id: 13,
    title: "Senha Forte",
    statement: "Verifique se a senha é forte: tamanho ≥ 8 e diferente de '12345678'.",
    input: "senha = 'minhasenha'",
    output: "SENHA ACEITA",
    code: `programa {
  funcao inicio() {
    cadeia senha
    inteiro tamanho
    
    escreva("Informe a senha: ")
    leia(senha)
    
    tamanho = compr(senha)
    
    se (tamanho >= 8 e senha != "12345678") {
      escreva("SENHA ACEITA")
    } senao {
      escreva("SENHA FRACA")
    }
  }
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
    code: `programa {
  funcao inicio() {
    real temperatura
    logico faltaAr
    inteiro idade
    
    escreva("Informe a temperatura: ")
    leia(temperatura)
    escreva("Tem falta de ar? (1-sim/0-nao): ")
    leia(faltaAr)
    escreva("Informe a idade: ")
    leia(idade)
    
    se (temperatura >= 39 ou faltaAr == verdadeiro ou idade >= 65) {
      escreva("RISCO ALTO")
    } senao {
      escreva("RISCO BAIXO")
    }
  }
}`,
    testCases: [
      { values: { temperatura: 39, faltaAr: false, idade: 30 }, result: "RISCO ALTO", stepByStep: "39 ≥ 39 (V) → RISCO ALTO" },
      { values: { temperatura: 37, faltaAr: true, idade: 30 }, result: "RISCO ALTO", stepByStep: "faltaAr = V → RISCO ALTO" },
      { values: { temperatura: 37, faltaAr: false, idade: 70 }, result: "RISCO ALTO", stepByStep: "idade = 70 ≥ 65 (V) → RISCO ALTO" },
      { values: { temperatura: 37, faltaAr: false, idade: 30 }, result: "RISCO BAIXO", stepByStep: "nenhuma condição verdadeira → RISCO BAIXO" }
    ],
    explanation: "Utilizamos o operador lógico 'ou' para combinar três condições. Se qualquer uma for verdadeira, o paciente é classificado como RISCO ALTO."
  },
  {
    id: 15,
    title: "Prioridade de Atendimento",
    statement: "Classifique prioridade: PRIORITÁRIO se for gestante, idoso ou tiver deficiência.",
    input: "ehGestante = falso, ehIdoso = verdadeiro, temDeficiencia = falso",
    output: "PRIORITARIO",
    code: `programa {
  funcao inicio() {
    logico ehGestante, ehIdoso, temDeficiencia
    
    escreva("É gestante? (1-sim/0-nao): ")
    leia(ehGestante)
    escreva("É idoso? (1-sim/0-nao): ")
    leia(ehIdoso)
    escreva("Tem deficiência? (1-sim/0-nao): ")
    leia(temDeficiencia)
    
    se (ehGestante ou ehIdoso ou temDeficiencia) {
      escreva("PRIORITARIO")
    } senao {
      escreva("COMUM")
    }
  }
}`,
    testCases: [
      { values: { ehGestante: true, ehIdoso: false, temDeficiencia: false }, result: "PRIORITARIO", stepByStep: "ehGestante = V → PRIORITARIO" },
      { values: { ehGestante: false, ehIdoso: true, temDeficiencia: false }, result: "PRIORITARIO", stepByStep: "ehIdoso = V → PRIORITARIO" },
      { values: { ehGestante: false, ehIdoso: false, temDeficiencia: true }, result: "PRIORITARIO", stepByStep: "temDeficiencia = V → PRIORITARIO" },
      { values: { ehGestante: false, ehIdoso: false, temDeficiencia: false }, result: "COMUM", stepByStep: "todas falsas → COMUM" }
    ],
    explanation: "Usamos o operador 'ou' para verificar se a pessoa possui pelo menos uma das condições que garantem prioridade no atendimento."
  },
  {
    id: 16,
    title: "Bônus para Vendedores",
    statement: "Conceder bônus se vendas ≥ R$5000 OU (for novato E vendas ≥ R$2000).",
    input: "vendas = 2500, novato = verdadeiro",
    output: "BONUS",
    code: `programa {
  funcao inicio() {
    real vendas
    logico novato
    
    escreva("Informe o total de vendas: R$ ")
    leia(vendas)
    escreva("É novato? (1-sim/0-nao): ")
    leia(novato)
    
    se (vendas >= 5000 ou (novato == verdadeiro e vendas >= 2000)) {
      escreva("BONUS")
    } senao {
      escreva("SEM BONUS")
    }
  }
}`,
    testCases: [
      { values: { vendas: 6000, novato: false }, result: "BONUS", stepByStep: "6000 ≥ 5000 (V) → BONUS" },
      { values: { vendas: 2500, novato: true }, result: "BONUS", stepByStep: "novato (V) e 2500 ≥ 2000 (V) → V → BONUS" },
      { values: { vendas: 2500, novato: false }, result: "SEM BONUS", stepByStep: "2500 ≥ 5000? F; novato = F → F → SEM BONUS" }
    ],
    explanation: "A condição combina operadores 'ou' e 'e'. O bônus é concedido se o vendedor atinge a meta de R$5000, OU se é novato e atinge a meta reduzida de R$2000."
  },
  {
    id: 17,
    title: "Controle de Acesso por Credenciais",
    statement: "Entrada permitida se (tem crachá OU está na lista) E horário entre 8 e 20.",
    input: "temCracha = verdadeiro, estaNaLista = falso, horario = 14",
    output: "ENTRA",
    code: `programa {
  funcao inicio() {
    logico temCracha, estaNaLista
    inteiro horario
    
    escreva("Tem crachá? (1-sim/0-nao): ")
    leia(temCracha)
    escreva("Está na lista autorizada? (1-sim/0-nao): ")
    leia(estaNaLista)
    escreva("Informe o horário (0-23): ")
    leia(horario)
    
    se ((temCracha ou estaNaLista) e (horario >= 8 e horario <= 20)) {
      escreva("ENTRA")
    } senao {
      escreva("NAO ENTRA")
    }
  }
}`,
    testCases: [
      { values: { temCracha: true, estaNaLista: false, horario: 14 }, result: "ENTRA", stepByStep: "temCracha = V → (V ou F) = V; horário 14 entre 8-20 (V); V e V = V → ENTRA" },
      { values: { temCracha: false, estaNaLista: false, horario: 14 }, result: "NAO ENTRA", stepByStep: "(F ou F) = F → F e V = F → NAO ENTRA" },
      { values: { temCracha: true, estaNaLista: false, horario: 22 }, result: "NAO ENTRA", stepByStep: "temCracha = V; horário 22 entre 8-20? F → V e F = F → NAO ENTRA" }
    ],
    explanation: "A condição combina operadores 'ou' e 'e'. Primeiro verificamos se a pessoa tem crachá OU está na lista (autorização). Depois verificamos se o horário está dentro do permitido. Ambas as condições devem ser verdadeiras para o acesso ser permitido."
  }
];

// Renderiza a seção de conceitos de condicionais
function renderConceitosCondicionais() {
  return `
    <div class="content-card">
      <h2 class="card-title">🎮 Estruturas de Controle</h2>
      <p>Em alguns casos, precisamos que o programa <strong>tome decisões</strong> ou repita ações com base nos dados recebidos.</p>
      <p>Sem estruturas de controle, o programa executa os comandos na ordem em que aparecem, de cima para baixo. As estruturas de controle permitem mudar a ordem de execução ou repetir instruções, tornando possível resolver problemas mais complexos, o que por sua vez, torna o programa mais <strong>inteligente e flexível</strong>.</p>
      
      <div class="info-callout">
        <span class="info-icon-callout">⚡</span>
        <div><strong>Tipos de Estruturas de Controle:</strong><br>
        • <strong>Desvios Condicionais</strong> (se, se-senao, escolha-caso) - tomam decisões<br>
        • <strong>Laços de Repetição</strong> (para, enquanto, repita) - repetem ações</div>
      </div>
    </div>
    
    <div class="content-card">
      <h2 class="card-title">✅ Desvio Condicional - SE</h2>
      <p>Usado quando queremos que algo aconteça <strong>apenas se uma condição for verdadeira</strong>. Uma condição é um teste que pode dar verdadeiro ou falso. Se for verdadeiro, o código dentro do SE é executado. Se for falso, o programa pula esse bloco e continua normalmente.</p>
      
      <div class="code-example">
        <div class="code-example-header">
          <span class="code-icon">📝</span>
          <span>Sintaxe do SE</span>
        </div>
        <pre><code>se (condicao) {
  // Instruções executadas se a condição for verdadeira
}</code></pre>
      </div>
      
      <div class="code-example">
        <div class="code-example-header">
          <span class="code-icon">📝</span>
          <span>Exemplo prático</span>
        </div>
        <pre><code>inteiro num
escreva("Digite um número: ")
leia(num)

se (num == 0) {
  escreva("O número digitado é 0")
}</code></pre>
      </div>
    </div>
    
    <div class="content-card">
      <h2 class="card-title">✅ Desvio Condicional - SE-SENÃO</h2>
      <p>Usado quando precisamos <strong>executar um código se a condição for verdadeira e outro se for falsa</strong>. Sua sintaxe é simples: após o bloco do SE, coloca-se o comando SENÃO e entre chaves as instruções a serem executadas caso a condição seja falsa.</p>
      
      <div class="code-example">
        <div class="code-example-header">
          <span class="code-icon">📝</span>
          <span>Sintaxe do SE-SENÃO</span>
        </div>
        <pre><code>se (condicao) {
  // Executa se verdadeiro
} senao {
  // Executa se falso
}</code></pre>
      </div>
      
      <div class="code-example">
        <div class="code-example-header">
          <span class="code-icon">📝</span>
          <span>Exemplo prático</span>
        </div>
        <pre><code>inteiro num
escreva("Digite um número: ")
leia(num)

se (num == 0) {
  escreva("Impossível dividir por zero!")
} senao {
  escreva("20 dividido por ", num, " = ", 20/num)
}</code></pre>
      </div>
    </div>
    
    <div class="content-card">
      <h2 class="card-title">✅ Desvio Condicional - SE-SENÃO-SE</h2>
      <p>Usado quando temos <strong>mais de duas possibilidades</strong>. O programa testa a primeira condição: se for verdadeira, executa o bloco e para. Se for falsa, testa a próxima condição (senão se). Se nenhuma condição for verdadeira, executa o bloco final (senão).</p>
      
      <div class="code-example">
        <div class="code-example-header">
          <span class="code-icon">📝</span>
          <span>Sintaxe do SE-SENÃO-SE</span>
        </div>
        <pre><code>se (condicao1) {
  // Executa se condicao1 for verdadeira
} senao se (condicao2) {
  // Executa se condicao1 for falsa e condicao2 verdadeira
} senao {
  // Executa se todas as condições forem falsas
}</code></pre>
      </div>
      
      <div class="code-example">
        <div class="code-example-header">
          <span class="code-icon">📝</span>
          <span>Exemplo prático - Classificação de notas</span>
        </div>
        <pre><code>se (nota >= 7) {
  escreva("Aluno aprovado")
} senao se (nota >= 4) {
  escreva("Aluno em recuperação")
} senao {
  escreva("Aluno reprovado")
}</code></pre>
      </div>
    </div>
    
    <div class="content-card">
      <h2 class="card-title">✅ Desvio Condicional - ESCOLHA-CASO</h2>
      <p>Usado para <strong>verificar o valor de uma variável</strong> e executar um código diferente para cada valor. É mais organizado que usar vários SE-SENÃO-SE. Funciona apenas com valores exatos (não aceita operadores lógicos). Cada opção é um caso, e normalmente termina com o comando <code>pare</code> para evitar que outros casos sejam executados.</p>
      
      <div class="code-example">
        <div class="code-example-header">
          <span class="code-icon">📝</span>
          <span>Sintaxe do ESCOLHA-CASO</span>
        </div>
        <pre><code>escolha (variavel) {
  caso valor1:
    // Instruções para valor1
    pare
  caso valor2:
    // Instruções para valor2
    pare
  caso contrario:
    // Instruções para valores não previstos
}</code></pre>
      </div>
      
      <div class="code-example">
        <div class="code-example-header">
          <span class="code-icon">📝</span>
          <span>Exemplo prático - Menu de opções</span>
        </div>
        <pre><code>escolha (opcao) {
  caso 1:
    escreva("Você escolheu a opção 1")
    pare
  caso 2:
    escreva("Você escolheu a opção 2")
    pare
  caso contrario:
    escreva("Opção inválida")
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
          <div><code>se</code></div>
          <div>Uma única condição, ação opcional</div>
          <div>Verificar se número é zero</div>
        </div>
        <div class="operator-row">
          <div><code>se-senao</code></div>
          <div>Duas possibilidades (verdadeiro/falso)</div>
          <div>Verificar maioridade</div>
        </div>
        <div class="operator-row">
          <div><code>se-senao-se</code></div>
          <div>Múltiplas condições com intervalos</div>
          <div>Classificar faixas de idade</div>
        </div>
        <div class="operator-row">
          <div><code>escolha-caso</code></div>
          <div>Múltiplos valores exatos</div>
          <div>Menu de opções numéricas</div>
        </div>
      </div>
      
      <div class="info-callout" style="margin-top: 1rem;">
        <span class="info-icon-callout">💡</span>
        <div><strong>Dica do Professor:</strong> Use SE-SENÃO-SE quando as condições envolvem intervalos ou operadores lógicos. Use ESCOLHA-CASO quando você tem valores específicos para testar. O código fica mais limpo e organizado!</div>
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
        <span>📋 Exercícios de Condicionais</span>
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
          <span>💻 Código de Resolução (Portugol)</span>
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
      <h1 class="page-title"><span>🔀</span> Estruturas Condicionais</h1>
      <p class="page-subtitle">Aprenda a criar decisões inteligentes nos seus programas com Se, Senão, Escolha Caso</p>
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