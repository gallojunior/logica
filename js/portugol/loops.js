const repeticaoExercises = [
    // NÍVEL 1 - BÁSICO (exercícios 1-5)
    {
        id: 1,
        nivel: 1,
        title: "Contador Simples",
        statement: "Elabore um algoritmo que exiba os números de 1 a 10, um em cada linha, utilizando uma estrutura de repetição.",
        input: "Nenhuma entrada",
        output: "1, 2, 3, 4, 5, 6, 7, 8, 9, 10 (cada um em uma linha)",
        code: `programa {
  funcao inicio() {
    para (inteiro i = 1; i <= 10; i++) {
      escreva(i, "\\n")
    }
  }
}`,
        testCases: [
            { values: {}, result: "1 2 3 4 5 6 7 8 9 10", stepByStep: "i = 1 → escreve 1; i = 2 → escreve 2; ... até i = 10 → escreve 10" }
        ],
        explanation: "Utilizamos o laço 'para' que possui três partes: inicialização (i=1), condição (i<=10) e incremento (i++). A cada repetição, o valor de i é exibido."
    },
    {
        id: 2,
        nivel: 1,
        title: "Contagem Regressiva",
        statement: "Crie um programa que mostre uma contagem regressiva de 10 até 0, exibindo 'FOGO!' ao final.",
        input: "Nenhuma entrada",
        output: "10, 9, 8, ..., 0, FOGO!",
        code: `programa {
  funcao inicio() {
    para (inteiro i = 10; i >= 0; i--) {
      escreva(i)
      se (i > 0) {
        escreva(", ")
      }
    }
    escreva("\\nFOGO!")
  }
}`,
        testCases: [
            { values: {}, result: "10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0, FOGO!", stepByStep: "i começa em 10 e decrementa até 0, exibindo cada valor" }
        ],
        explanation: "Usamos o laço 'para' com decremento (i--). A condição i >= 0 mantém o laço até chegar a zero. Após o laço, exibimos 'FOGO!'."
    },
    {
        id: 3,
        nivel: 1,
        title: "Tabuada de um Número",
        statement: "Desenvolva um algoritmo que leia um número inteiro fornecido pelo usuário e exiba a tabuada desse número de 1 a 10.",
        input: "numero = 5",
        output: "5 x 1 = 5, 5 x 2 = 10, ..., 5 x 10 = 50",
        code: `programa {
  funcao inicio() {
    inteiro num
    
    escreva("Informe um número: ")
    leia(num)
    
    para (inteiro i = 1; i <= 10; i++) {
      escreva(num, " x ", i, " = ", num * i, "\\n")
    }
  }
}`,
        testCases: [
            { values: { num: 5 }, result: "5x1=5, 5x2=10, 5x3=15, 5x4=20, 5x5=25, 5x6=30, 5x7=35, 5x8=40, 5x9=45, 5x10=50", stepByStep: "Para i=1 a 10, calcula e exibe num × i" }
        ],
        explanation: "O laço 'para' percorre os valores de 1 a 10. A cada iteração, calcula e exibe o produto do número fornecido pelo contador i."
    },
    {
        id: 4,
        nivel: 1,
        title: "Números Pares",
        statement: "Escreva um algoritmo que exiba todos os números pares entre 1 e 20.",
        input: "Nenhuma entrada",
        output: "2, 4, 6, 8, 10, 12, 14, 16, 18, 20",
        code: `programa {
  funcao inicio() {
    para (inteiro i = 2; i <= 20; i = i + 2) {
      escreva(i)
      se (i < 20) {
        escreva(", ")
      }
    }
  }
}`,
        testCases: [
            { values: {}, result: "2, 4, 6, 8, 10, 12, 14, 16, 18, 20", stepByStep: "i começa em 2 e incrementa de 2 em 2 até 20" }
        ],
        explanation: "Podemos usar o laço 'para' com incremento de 2 (i = i + 2) para gerar apenas números pares, ou usar o operador % para filtrar dentro do laço."
    },
    {
        id: 5,
        nivel: 1,
        title: "Números Ímpares Regressivos",
        statement: "Desenvolva um programa que exiba todos os números ímpares de 15 até 1, em ordem decrescente.",
        input: "Nenhuma entrada",
        output: "15, 13, 11, 9, 7, 5, 3, 1",
        code: `programa {
  funcao inicio() {
    para (inteiro i = 15; i >= 1; i--) {
      se (i % 2 != 0) {
        escreva(i)
        se (i > 1) {
          escreva(", ")
        }
      }
    }
  }
}`,
        testCases: [
            { values: {}, result: "15, 13, 11, 9, 7, 5, 3, 1", stepByStep: "i de 15 até 1, verifica se é ímpar (i%2!=0) e exibe" }
        ],
        explanation: "Combinamos o laço 'para' decrescente com uma condição para verificar se o número é ímpar usando o operador resto da divisão (%)."
    },

    // NÍVEL 2 - ACUMULADORES (exercícios 6-10)
    {
        id: 6,
        nivel: 2,
        title: "Somador de Números",
        statement: "Faça um programa que leia 5 números fornecidos pelo usuário e calcule a soma total deles, exibindo o resultado ao final.",
        input: "5 números: 2, 4, 6, 8, 10",
        output: "Soma = 30",
        code: `programa {
  funcao inicio() {
    inteiro num, soma = 0
    
    para (inteiro i = 1; i <= 5; i++) {
      escreva("Informe o ", i, "º número: ")
      leia(num)
      soma = soma + num
    }
    
    escreva("A soma é: ", soma)
  }
}`,
        testCases: [
            { values: { numeros: [2, 4, 6, 8, 10] }, result: 30, stepByStep: "soma = 0+2=2; +4=6; +6=12; +8=20; +10=30" }
        ],
        explanation: "Utilizamos uma variável acumuladora (soma) que recebe seu próprio valor somado ao novo número a cada repetição. O laço 'para' controla exatamente 5 iterações."
    },
    {
        id: 7,
        nivel: 2,
        title: "Média de uma Turma",
        statement: "Um professor quer calcular a média das notas de uma turma com 8 alunos. Crie um algoritmo que leia as 8 notas e exiba a média final.",
        input: "8 notas: 7.5, 8.0, 6.5, 9.0, 7.0, 8.5, 6.0, 9.5",
        output: "Média = 7.75",
        code: `programa {
  funcao inicio() {
    const inteiro NUM_ALUNOS = 8
    real nota, media = 0
    
    para (inteiro i = 1; i <= NUM_ALUNOS; i++) {
      escreva("Informe a nota do ", i, "º aluno: ")
      leia(nota)
      media = media + nota
    }
    
    media = media / NUM_ALUNOS
    escreva("A média da turma é: ", media)
  }
}`,
        testCases: [
            { values: { notas: [7.5, 8.0, 6.5, 9.0, 7.0, 8.5, 6.0, 9.5] }, result: 7.75, stepByStep: "soma = 62; média = 62/8 = 7.75" }
        ],
        explanation: "Acumulamos todas as notas em uma variável e depois dividimos pela quantidade de alunos. Usamos constante para facilitar manutenção do código."
    },
    {
        id: 8,
        nivel: 2,
        title: "Fatorial",
        statement: "Crie um programa que leia um número inteiro N e calcule o fatorial desse número (N!). Considere N positivo.",
        input: "N = 5",
        output: "5! = 120",
        code: `programa {
  funcao inicio() {
    inteiro num, fat = 1
    
    escreva("Informe um número: ")
    leia(num)
    
    para (inteiro i = num; i >= 2; i--) {
      fat = fat * i
    }
    
    escreva(num, "! = ", fat)
  }
}`,
        testCases: [
            { values: { num: 5 }, result: 120, stepByStep: "fat = 1×5=5; ×4=20; ×3=60; ×2=120" },
            { values: { num: 4 }, result: 24, stepByStep: "fat = 1×4=4; ×3=12; ×2=24" }
        ],
        explanation: "O fatorial é calculado multiplicando N por todos os números anteriores até 1. Usamos um acumulador multiplicativo iniciado em 1."
    },
    {
        id: 9,
        nivel: 2,
        title: "Soma de Pares e Ímpares",
        statement: "Leia 15 números inteiros e exiba: soma dos pares, soma dos ímpares, quantidade de pares e quantidade de ímpares.",
        input: "15 números: 1 a 15",
        output: "Soma pares: 56, Soma ímpares: 64, Quantidade pares: 7, Quantidade ímpares: 8",
        code: `programa {
  funcao inicio() {
    const inteiro LIMITE = 15
    inteiro num, sp = 0, si = 0, qp = 0, qi = 0
    
    para (inteiro i = 1; i <= LIMITE; i++) {
      escreva("Informe o ", i, "º número: ")
      leia(num)
      
      se (num % 2 == 0) {
        qp++
        sp += num
      } senao {
        qi++
        si += num
      }
    }
    
    escreva("Soma dos pares: ", sp, "\\n")
    escreva("Soma dos ímpares: ", si, "\\n")
    escreva("Quantidade de pares: ", qp, "\\n")
    escreva("Quantidade de ímpares: ", qi, "\\n")
  }
}`,
        testCases: [
            { values: { numeros: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15] }, result: "sp=56, si=64, qp=7, qi=8", stepByStep: "Classifica cada número como par ou ímpar e acumula" }
        ],
        explanation: "Utilizamos quatro acumuladores: dois para somas e dois para contagens. Dentro do laço, verificamos se o número é par ou ímpar e atualizamos os acumuladores correspondentes."
    },
    {
        id: 10,
        nivel: 2,
        title: "Análise de Números",
        statement: "Leia 10 números inteiros e informe: maior, menor, soma e média.",
        input: "10 números: 5, 8, 3, 12, 7, 9, 4, 6, 11, 10",
        output: "Maior: 12, Menor: 3, Soma: 75, Média: 7.5",
        code: `programa {
  funcao inicio() {
    const inteiro LIMITE = 10
    inteiro num, maior, menor, soma = 0
    real media
    
    para (inteiro i = 1; i <= LIMITE; i++) {
      escreva("Informe o ", i, "º número: ")
      leia(num)
      
      se (i == 1) {
        maior = num
        menor = num
      }
      
      se (num > maior) maior = num
      se (num < menor) menor = num
      soma = soma + num
    }
    
    media = soma / LIMITE
    escreva("Maior: ", maior, "\\nMenor: ", menor, "\\nSoma: ", soma, "\\nMédia: ", media)
  }
}`,
        testCases: [
            { values: { numeros: [5, 8, 3, 12, 7, 9, 4, 6, 11, 10] }, result: "maior=12, menor=3, soma=75, media=7.5", stepByStep: "Atualiza maior/menor a cada número; acumula soma" }
        ],
        explanation: "Inicializamos maior e menor com o primeiro número. A cada novo número, comparamos e atualizamos se necessário. Acumulamos a soma para depois calcular a média."
    },

    // NÍVEL 3 - VALIDAÇÃO E CONDIÇÕES DE PARADA (exercícios 11-14)
    {
        id: 11,
        nivel: 3,
        title: "Validação de Senha",
        statement: "Solicite uma senha ao usuário. Enquanto não digitar a senha correta '123456', continue pedindo. Ao acertar, exiba 'ACESSO PERMITIDO'.",
        input: "Tentativas: '000000', '111111', '123456'",
        output: "ACESSO PERMITIDO",
        code: `programa {
  funcao inicio() {
    cadeia senha
    
    faca {
      escreva("Informe a senha: ")
      leia(senha)
      
      se (senha != "123456") {
        escreva("Senha incorreta! Tente novamente.\\n")
      }
    } enquanto (senha != "123456")
    
    escreva("ACESSO PERMITIDO")
  }
}`,
        testCases: [
            { values: { tentativas: ["000000", "111111", "123456"] }, result: "ACESSO PERMITIDO", stepByStep: "Tenta 000000 → errado; 111111 → errado; 123456 → correto, encerra" }
        ],
        explanation: "Usamos o laço 'faça-enquanto' (pós-testado) que garante pelo menos uma execução. A condição é testada no final, repetindo enquanto a senha estiver incorreta."
    },
    {
        id: 12,
        nivel: 3,
        title: "Validação de Notas",
        statement: "Leia as notas de 15 alunos. Cada nota deve estar entre 0 e 10. Caso seja digitada uma nota inválida, exiba erro e solicite novamente. Ao final, exiba a média.",
        input: "Notas com validação",
        output: "Média final",
        code: `programa {
  funcao inicio() {
    const inteiro NUM_ALUNOS = 15
    real nota, media = 0
    
    para (inteiro i = 1; i <= NUM_ALUNOS; i++) {
      faca {
        escreva("Informe a nota do ", i, "º aluno (0-10): ")
        leia(nota)
        
        se (nota < 0 ou nota > 10) {
          escreva("Nota inválida! Digite um valor entre 0 e 10.\\n")
        }
      } enquanto (nota < 0 ou nota > 10)
      
      media = media + nota
    }
    
    media = media / NUM_ALUNOS
    escreva("Média final: ", media)
  }
}`,
        testCases: [
            { values: { notas: [-1, 11, 7.5] }, result: "após validação, aceita apenas 7.5", stepByStep: "Nota inválida -1 → repete; inválida 11 → repete; válida 7.5 → acumula" }
        ],
        explanation: "Aninhamos um laço 'faça-enquanto' dentro do laço 'para' para validar cada nota individualmente. O laço interno repete até que o usuário digite uma nota válida."
    },
    {
        id: 13,
        nivel: 3,
        title: "Leitura com Condição de Parada",
        statement: "Leia números inteiros e pare quando o número digitado for 0. Ao final, exiba quantos números foram digitados (excluindo o 0).",
        input: "Números: 5, 8, 3, 0",
        output: "Foram digitados 3 números",
        code: `programa {
  funcao inicio() {
    inteiro num = 1, contador = 0
    
    enquanto (num != 0) {
      escreva("Informe um número (0 para parar): ")
      leia(num)
      
      se (num != 0) {
        contador++
      }
    }
    
    escreva("Foram digitados ", contador, " números")
  }
}`,
        testCases: [
            { values: { numeros: [5, 8, 3, 0] }, result: "3 números", stepByStep: "5→cont=1; 8→cont=2; 3→cont=3; 0→encerra" }
        ],
        explanation: "Usamos o laço 'enquanto' (pré-testado) que verifica a condição antes de executar. O laço continua enquanto o número for diferente de zero."
    },
    {
        id: 14,
        nivel: 3,
        title: "Acumulador Condicional (Vendas)",
        statement: "Leia o valor de cada venda até digitar 0. Exiba: total de vendas, quantidade de vendas acima de R$1000 e média das vendas.",
        input: "Vendas: 1500, 800, 2000, 0",
        output: "Total: 4300, Acima de 1000: 2, Média: 1433.33",
        code: `programa {
  funcao inicio() {
    real valorVenda, totalVendas = 0, mediaVendas
    inteiro qtdeVendas = 0, qtdeVendas1000 = 0
    
    faca {
      escreva("Informe o valor da venda (0 para encerrar): R$ ")
      leia(valorVenda)
      
      se (valorVenda != 0) {
        qtdeVendas++
        totalVendas += valorVenda
        
        se (valorVenda > 1000) {
          qtdeVendas1000++
        }
      }
    } enquanto (valorVenda != 0)
    
    mediaVendas = totalVendas / qtdeVendas
    
    escreva("Total de vendas: R$ ", totalVendas, "\\n")
    escreva("Vendas acima de R$1000: ", qtdeVendas1000, "\\n")
    escreva("Média das vendas: R$ ", mediaVendas, "\\n")
  }
}`,
        testCases: [
            { values: { vendas: [1500, 800, 2000, 0] }, result: "total=4300, acima=2, media=1433.33", stepByStep: "Acumula total e conta; verifica condição >1000" }
        ],
        explanation: "Usamos múltiplos acumuladores: total das vendas, contador total e contador condicional (vendas > 1000). O laço 'faça-enquanto' garante pelo menos uma execução."
    },

    // NÍVEL 4 - SEQUÊNCIAS MATEMÁTICAS (exercícios 15-17)
    {
        id: 15,
        nivel: 4,
        title: "Sequência de Fibonacci",
        statement: "Exiba os primeiros 12 termos da sequência de Fibonacci (0, 1, 1, 2, 3, 5, 8, ...).",
        input: "Nenhuma entrada",
        output: "0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89",
        code: `programa {
  funcao inicio() {
    inteiro t1 = 0, t2 = 1, proximo
    
    escreva(t1, ", ", t2)
    
    para (inteiro i = 3; i <= 12; i++) {
      proximo = t1 + t2
      escreva(", ", proximo)
      t1 = t2
      t2 = proximo
    }
  }
}`,
        testCases: [
            { values: {}, result: "0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89", stepByStep: "t1=0,t2=1; prox=1; t1=1,t2=1; prox=2; t1=1,t2=2; prox=3..." }
        ],
        explanation: "Cada termo é a soma dos dois anteriores. Mantemos duas variáveis para os últimos termos e as atualizamos a cada iteração."
    },
    {
        id: 16,
        nivel: 4,
        title: "Números Primos",
        statement: "Verifique se um número N é primo ou não.",
        input: "N = 13",
        output: "13 é PRIMO",
        code: `programa {
  funcao inicio() {
    inteiro num
    logico ehPrimo = verdadeiro
    
    escreva("Informe um número: ")
    leia(num)
    
    se (num <= 1) {
      ehPrimo = falso
    } senao {
      para (inteiro i = 2; i < num; i++) {
        se (num % i == 0) {
          ehPrimo = falso
          pare
        }
      }
    }
    
    se (ehPrimo) {
      escreva(num, " é PRIMO")
    } senao {
      escreva(num, " NÃO é primo")
    }
  }
}`,
        testCases: [
            { values: { num: 13 }, result: "PRIMO", stepByStep: "Testa divisão por 2 a 12; nenhum divide 13 → PRIMO" },
            { values: { num: 12 }, result: "NÃO PRIMO", stepByStep: "12 % 2 == 0 → NÃO PRIMO" }
        ],
        explanation: "Um número é primo se for divisível apenas por 1 e por ele mesmo. Testamos divisores de 2 até N-1. Se encontrar algum divisor, interrompemos o laço com 'pare'."
    },
    {
        id: 17,
        nivel: 4,
        title: "Números Perfeitos",
        statement: "Encontre e exiba todos os números perfeitos entre 1 e 1000 (soma dos divisores próprios igual ao número).",
        input: "Nenhuma entrada",
        output: "6, 28, 496",
        code: `programa {
  funcao inicio() {
    const inteiro LIMITE = 1000
    
    para (inteiro i = 2; i <= LIMITE; i++) {
      inteiro soma = 0
      
      para (inteiro j = 1; j < i; j++) {
        se (i % j == 0) {
          soma += j
        }
      }
      
      se (soma == i) {
        escreva(i)
        se (i < 496) {
          escreva(", ")
        }
      }
    }
  }
}`,
        testCases: [
            { values: {}, result: "6, 28, 496", stepByStep: "6: divisores 1+2+3=6; 28: 1+2+4+7+14=28; 496: 1+2+4+8+16+31+62+124+248=496" }
        ],
        explanation: "Usamos laços aninhados: o laço externo percorre os números candidatos; o laço interno soma os divisores próprios. Se a soma for igual ao número, ele é perfeito."
    },

    // NÍVEL 5 - LAÇOS ANINHADOS E PADRÕES (exercícios 18-20)
    {
        id: 18,
        nivel: 5,
        title: "Triângulo de Números",
        statement: "Leia um número N (máximo 9) e exiba um triângulo numérico onde na linha i, o número i se repete i vezes.",
        input: "N = 4",
        output: "1\n2 2\n3 3 3\n4 4 4 4",
        code: `programa {
  funcao inicio() {
    inteiro n
    
    escreva("Informe um número (1-9): ")
    leia(n)
    
    para (inteiro i = 1; i <= n; i++) {
      para (inteiro j = 1; j <= i; j++) {
        escreva(i, " ")
      }
      escreva("\\n")
    }
  }
}`,
        testCases: [
            { values: { n: 4 }, result: "1\n2 2\n3 3 3\n4 4 4 4", stepByStep: "i=1: j=1 → '1'; i=2: j=1,2 → '2 2'; ..." }
        ],
        explanation: "Usamos laços aninhados: o laço externo controla as linhas (i), o laço interno controla as colunas (j) e repete o número i, i vezes."
    },
    {
        id: 19,
        nivel: 5,
        title: "Jogo de Adivinhação",
        statement: "Jogo onde o computador sorteia um número entre 1 e 100. O usuário tenta adivinhar. A cada palpite, informa se é maior, menor ou igual. Ao acertar, exibe número de tentativas.",
        input: "Palpites: 50, 75, 62, 70",
        output: "Acertou! Tentativas: 4",
        code: `programa {
  funcao inicio() {
    inclua biblioteca Util
    
    const inteiro NS = Util.sorteia(1, 100)
    inteiro palpite, tentativas = 0
    
    escreva("Tente adivinhar o número secreto (1-100)!\\n")
    
    faca {
      escreva("Digite seu palpite: ")
      leia(palpite)
      tentativas++
      
      se (palpite > NS) {
        escreva("MUITO ALTO! Tente um número menor.\\n")
      } senao se (palpite < NS) {
        escreva("MUITO BAIXO! Tente um número maior.\\n")
      }
    } enquanto (palpite != NS)
    
    escreva("\\nPARABÉNS! Você acertou em ", tentativas, " tentativas!")
  }
}`,
        testCases: [
            { values: { NS: 70, palpites: [50, 75, 62, 70] }, result: "Acertou em 4 tentativas", stepByStep: "50→baixo; 75→alto; 62→baixo; 70→certo" }
        ],
        explanation: "O laço 'faça-enquanto' continua até o usuário acertar. A cada tentativa, comparamos o palpite com o número secreto e damos uma dica."
    },
    {
        id: 20,
        nivel: 5,
        title: "Menu Interativo",
        statement: "Exiba um menu com opções: 1-Somar, 2-Subtrair, 3-Sair. Enquanto não escolher 3, execute a operação e volte ao menu.",
        input: "Opções: 1 (10,5), 2 (20,8), 3",
        output: "Soma: 15, Subtração: 12, Encerrando...",
        code: `programa {
  funcao inicio() {
    inteiro op, num1, num2
    cadeia aguardar
    
    faca {
      limpa()
      escreva("===== MENU DE OPÇÕES =====\\n")
      escreva("1 - Somar dois números\\n")
      escreva("2 - Subtrair dois números\\n")
      escreva("3 - Sair\\n")
      escreva("Escolha uma opção: ")
      leia(op)
      
      escolha (op) {
        caso 1:
          limpa()
          escreva("OPÇÃO 1 - SOMAR\\n")
          escreva("Informe o primeiro número: ")
          leia(num1)
          escreva("Informe o segundo número: ")
          leia(num2)
          escreva("Resultado: ", num1 + num2, "\\n")
          pare
        caso 2:
          limpa()
          escreva("OPÇÃO 2 - SUBTRAIR\\n")
          escreva("Informe o primeiro número: ")
          leia(num1)
          escreva("Informe o segundo número: ")
          leia(num2)
          escreva("Resultado: ", num1 - num2, "\\n")
          pare
        caso 3:
          escreva("Encerrando o programa...\\n")
          pare
        caso contrario:
          escreva("Opção inválida!\\n")
      }
      
      se (op != 3) {
        escreva("\\nPressione ENTER para continuar...")
        leia(aguardar)
      }
    } enquanto (op != 3)
  }
}`,
        testCases: [
            { values: { opcoes: [1, 10, 5, 2, 20, 8, 3] }, result: "soma=15, subtração=12, encerra", stepByStep: "op1→soma; op2→subtrai; op3→sai" }
        ],
        explanation: "Combinamos o laço 'faça-enquanto' com a estrutura 'escolha-caso' para criar um menu interativo. O laço continua até que a opção 3 (sair) seja escolhida."
    }
];

// Renderiza a seção de conceitos de repetição
function renderConceitosRepeticao() {
    return `
    <div class="content-card">
      <h2 class="card-title">🔄 Laços de Repetição</h2>
      <p>Existem problemas que precisam <strong>repetir ações várias vezes</strong>. Por exemplo: calcular a média de um aluno é simples. Mas se quisermos calcular a média de toda a turma? Uma solução seria repetir o mesmo cálculo para cada aluno, mas isso daria muito trabalho. Para esse tipo de situação usamos os <strong>laços de repetição</strong>.</p>
      
      <div class="info-callout">
        <span class="info-icon-callout">⚡</span>
        <div><strong>O que é um laço de repetição?</strong><br>
        Um laço de repetição faz o programa executar um conjunto de comandos várias vezes, até que uma condição seja atendida.</div>
      </div>
      
      <p>No Portugol existem três tipos de laços de repetição:</p>
      <ul style="margin-left: 1.5rem; color: var(--text-secondary);">
        <li><strong>Pré-testado (ENQUANTO)</strong> – verifica a condição antes de executar</li>
        <li><strong>Pós-testado (FAÇA-ENQUANTO)</strong> – executa primeiro e verifica a condição depois</li>
        <li><strong>Com variável de controle (PARA)</strong> – repete um número conhecido de vezes</li>
      </ul>
    </div>
    
    <div class="content-card">
      <h2 class="card-title">🔄 Laço ENQUANTO (Pré-testado)</h2>
      <p>O laço <strong>ENQUANTO</strong> executa um conjunto de comandos enquanto uma condição for verdadeira. A condição é testada <strong>antes</strong> da execução, podendo o bloco nunca ser executado se a condição já for falsa no início.</p>
      
      <div class="code-example">
        <div class="code-example-header">
          <span class="code-icon">📝</span>
          <span>Sintaxe do ENQUANTO</span>
        </div>
        <pre><code>enquanto (condicao) {
  // Instruções executadas enquanto a condição for verdadeira
}</code></pre>
      </div>
      
      <div class="code-example">
        <div class="code-example-header">
          <span class="code-icon">📝</span>
          <span>Exemplo prático</span>
        </div>
        <pre><code>cadeia parar = "N"
enquanto (parar != "S") {
  escreva("Oi Mundo!\\n")
  escreva("Deseja parar o laço? (S/N): ")
  leia(parar)
}</code></pre>
      </div>
      
      <div class="info-callout">
        <span class="info-icon-callout">⚠️</span>
        <div><strong>Cuidado com o loop infinito!</strong> Sempre garanta que a condição eventualmente se torne falsa, senão o programa nunca terminará.</div>
      </div>
    </div>
    
    <div class="content-card">
      <h2 class="card-title">🔄 Laço FAÇA-ENQUANTO (Pós-testado)</h2>
      <p>O laço <strong>FAÇA-ENQUANTO</strong> executa um conjunto de comandos e depois verifica a condição. A condição é testada <strong>após</strong> a execução, garantindo que o bloco seja executado <strong>pelo menos uma vez</strong>.</p>
      
      <div class="code-example">
        <div class="code-example-header">
          <span class="code-icon">📝</span>
          <span>Sintaxe do FAÇA-ENQUANTO</span>
        </div>
        <pre><code>faca {
  // Instruções executadas pelo menos uma vez
} enquanto (condicao)</code></pre>
      </div>
      
      <div class="code-example">
        <div class="code-example-header">
          <span class="code-icon">📝</span>
          <span>Exemplo prático - Validação de entrada</span>
        </div>
        <pre><code>real lado
faca {
  escreva("Informe o valor do lado do quadrado: ")
  leia(lado)
} enquanto (lado <= 0)

escreva("A área do quadrado é ", lado * lado)</code></pre>
      </div>
    </div>
    
    <div class="content-card">
      <h2 class="card-title">🔄 Laço PARA (Com variável de controle)</h2>
      <p>O laço <strong>PARA</strong> é usado quando sabemos exatamente quantas vezes queremos repetir um comando. Ele possui três partes: inicialização da variável de controle, condição final e incremento.</p>
      
      <div class="code-example">
        <div class="code-example-header">
          <span class="code-icon">📝</span>
          <span>Sintaxe do PARA</span>
        </div>
        <pre><code>para (inicialização; condição; incremento) {
  // Instruções executadas enquanto a condição for verdadeira
}</code></pre>
      </div>
      
      <div class="code-example">
        <div class="code-example-header">
          <span class="code-icon">📝</span>
          <span>Exemplo prático - Tabuada</span>
        </div>
        <pre><code>inteiro num
escreva("Digite um número: ")
leia(num)

para (inteiro i = 1; i <= 10; i++) {
  escreva(num, " x ", i, " = ", num * i, "\\n")
}</code></pre>
      </div>
    </div>
    
    <div class="content-card">
      <h2 class="card-title">📋 Comparação entre os Laços</h2>
      <div class="operators-table">
        <div class="operator-row header">
          <div>Laço</div>
          <div>Tipo</div>
          <div>Quando usar</div>
          <div>Garantia de execução</div>
        </div>
        <div class="operator-row">
          <div><code>PARA</code></div>
          <div>Com variável de controle</div>
          <div>Número exato de repetições conhecido</div>
          <div>Zero ou mais vezes</div>
        </div>
        <div class="operator-row">
          <div><code>ENQUANTO</code></div>
          <div>Pré-testado</div>
          <div>Condição de parada baseada em entrada</div>
          <div>Zero ou mais vezes</div>
        </div>
        <div class="operator-row">
          <div><code>FAÇA-ENQUANTO</code></div>
          <div>Pós-testado</div>
          <div>Necessita executar pelo menos uma vez</div>
          <div>Pelo menos uma vez</div>
        </div>
      </div>
      
      <div class="info-callout" style="margin-top: 1rem;">
        <span class="info-icon-callout">💡</span>
        <div><strong>Dica do Professor:</strong> 
        <br>• Use <strong>PARA</strong> quando souber o número exato de repetições.
        <br>• Use <strong>ENQUANTO</strong> quando a repetição depende de uma condição e pode não ocorrer.
        <br>• Use <strong>FAÇA-ENQUANTO</strong> quando o bloco precisa ser executado pelo menos uma vez.</div>
      </div>
    </div>
  `;
}

// Renderiza a seção de exercícios de repetição
function renderExerciciosRepeticao() {
    const currentEx = repeticaoExercises.find(e => e.id === currentRepeticaoExercise) || repeticaoExercises[0];

    // Agrupar exercícios por nível para mostrar indicadores
    const niveis = {
        1: { nome: "⭐ Básico", cor: "#10b981" },
        2: { nome: "⭐⭐ Acumuladores", cor: "#f59e0b" },
        3: { nome: "⭐⭐⭐ Validação", cor: "#3b82f6" },
        4: { nome: "⭐⭐⭐⭐ Sequências Matemáticas", cor: "#8b5cf6" },
        5: { nome: "⭐⭐⭐⭐⭐ Laços Aninhados", cor: "#ef4444" }
    };

    return `
    <!-- Filtro de exercícios -->
    <div class="exercises-filter">
      <div class="filter-header">
        <span>📋 Exercícios de Repetição</span>
        <span class="filter-count">${repeticaoExercises.length} exercícios disponíveis</span>
      </div>
      <div class="filter-buttons">
        ${repeticaoExercises.map(ex => `
          <button class="filter-btn ${ex.id === currentRepeticaoExercise ? 'active' : ''}" data-ex-id="${ex.id}" title="Nível ${ex.nivel}: ${niveis[ex.nivel].nome}">
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
    
    <!-- Exercício atual -->
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
  return `
    <div class="page-header">
      <h1 class="page-title"><span>🔄</span> Estruturas de Repetição</h1>
      <p class="page-subtitle">Aprenda a criar loops com PARA, ENQUANTO e REPITA para automatizar tarefas repetitivas</p>
    </div>
    
    <div class="sub-nav">
      <button class="sub-nav-btn ${currentRepeticaoSubpage === 'conceitos' ? 'active' : ''}" data-subpage="conceitos">
        📘 Conceitos
      </button>
      <button class="sub-nav-btn ${currentRepeticaoSubpage === 'exercicios' ? 'active' : ''}" data-subpage="exercicios">
        ✏️ Exercícios
      </button>
    </div>
    
    <div id="repeticao-content">
      ${currentRepeticaoSubpage === 'conceitos' ? renderConceitosRepeticao() : renderExerciciosRepeticao()}
    </div>
  `;
}