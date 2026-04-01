const condicionaisExercises = [
  {
    id: 1,
    title: "Verificação de Positivo/Negativo/Zero",
    statement: "Escreva um programa em C/C++ que receba um número e determine se ele é positivo, negativo ou zero.",
    input: "num = -5",
    output: "O número é negativo.",
    code: `#include <stdio.h>

int main() {
    int num;
    printf("Informe um número: ");
    scanf("%d", &num);

    if (num > 0) {
        printf("O número %d é POSITIVO\n", num);
    } else if (num < 0) {
        printf("O número %d é NEGATIVO\n", num);
    } else {
        printf("O número é ZERO\n");
    }

    return 0;
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
    code: `#include <stdio.h>

int main() {
    double n1, n2, n3, media;
    printf("Informe a primeira nota: ");
    scanf("%lf", &n1);
    printf("Informe a segunda nota: ");
    scanf("%lf", &n2);
    printf("Informe a terceira nota: ");
    scanf("%lf", &n3);

    media = (n1 + n2 + n3) / 3;
    printf("Média: %.1f\n", media);

    if (media >= 7) {
        printf("APROVADO!\n");
    } else if (media >= 5) {
        printf("RECUPERAÇÃO\n");
    } else {
        printf("REPROVADO\n");
    }

    return 0;
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
    code: `#include <stdio.h>

int main() {
    double a, b, c;
    printf("Informe o primeiro lado: ");
    scanf("%lf", &a);
    printf("Informe o segundo lado: ");
    scanf("%lf", &b);
    printf("Informe o terceiro lado: ");
    scanf("%lf", &c);

    int triangulo_valido = (a + b > c) && (a + c > b) && (b + c > a);

    if (triangulo_valido) {
        if (a == b && b == c) {
            printf("Triângulo EQUILÁTERO\n");
        } else if (a == b || a == c || b == c) {
            printf("Triângulo ISÓSCELES\n");
        } else {
            printf("Triângulo ESCALENO\n");
        }
    } else {
        printf("Os lados NÃO formam um triângulo válido\n");
    }

    return 0;
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
    code: `#include <stdio.h>

int main() {
    double valor, valor_final;
    printf("Informe o valor total da compra: R$ ");
    scanf("%lf", &valor);

    if (valor >= 500) {
        valor_final = valor * 0.90;
        printf("Valor com desconto de 10%%: R$ %.2f\n", valor_final);
    } else if (valor >= 300) {
        valor_final = valor * 0.95;
        printf("Valor com desconto de 5%%: R$ %.2f\n", valor_final);
    } else {
        printf("Nenhum desconto aplicado. Valor: R$ %.2f\n", valor);
    }

    return 0;
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
    code: `#include <stdio.h>

int main() {
    int ano;
    printf("Informe o ano: ");
    scanf("%d", &ano);

    int bissexto = (ano % 4 == 0 && ano % 100 != 0) || (ano % 400 == 0);

    if (bissexto) {
        printf("%d é BISSEXTO\n", ano);
    } else {
        printf("%d NÃO é bissexto\n", ano);
    }

    return 0;
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
    code: `#include <stdio.h>

int main() {
    int idade;
    printf("Informe a idade: ");
    scanf("%d", &idade);

    if (idade < 0) {
        printf("Idade inválida!\n");
    } else if (idade <= 12) {
        printf("CRIANÇA\n");
    } else if (idade <= 17) {
        printf("ADOLESCENTE\n");
    } else if (idade <= 59) {
        printf("ADULTO\n");
    } else {
        printf("IDOSO\n");
    }

    return 0;
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
    code: `#include <stdio.h>

int main() {
    double num1, num2, resultado;
    int op;

    printf("Informe o primeiro número: ");
    scanf("%lf", &num1);
    printf("Informe o segundo número: ");
    scanf("%lf", &num2);
    printf("1 - Soma\n2 - Subtração\n3 - Multiplicação\n4 - Divisão\n");
    printf("Escolha a operação: ");
    scanf("%d", &op);

    switch (op) {
        case 1:
            resultado = num1 + num2;
            printf("Resultado: %.2f\n", resultado);
            break;
        case 2:
            resultado = num1 - num2;
            printf("Resultado: %.2f\n", resultado);
            break;
        case 3:
            resultado = num1 * num2;
            printf("Resultado: %.2f\n", resultado);
            break;
        case 4:
            if (num2 != 0) {
                resultado = num1 / num2;
                printf("Resultado: %.2f\n", resultado);
            } else {
                printf("Erro: divisão por zero!\n");
            }
            break;
        default:
            printf("Operação inválida!\n");
    }

    return 0;
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
    code: `#include <stdio.h>
#include <string.h>

int main() {
    char nome[50], senha[20];

    printf("Informe o nome de usuário: ");
    scanf("%s", nome);
    printf("Informe a senha: ");
    scanf("%s", senha);

    if (strcmp(nome, "aluno") == 0 && strcmp(senha, "123456") == 0) {
        printf("ACESSO PERMITIDO\n");
    } else {
        printf("ACESSO NEGADO\n");
    }

    return 0;
}`,
    testCases: [
      { values: { nome: "aluno", senha: "123456" }, result: "PERMITIDO", stepByStep: "ambos corretos → PERMITIDO" },
      { values: { nome: "aluno", senha: "senha123" }, result: "NEGADO", stepByStep: "senha incorreta → NEGADO" }
    ],
    explanation: "Usamos `strcmp` para comparar strings. Operador lógico && para verificar ambas condições."
  },
  {
    id: 9,
    title: "Cálculo de IMC e Classificação",
    statement: "Calcule o IMC (peso / altura²) e classifique: Abaixo do peso (<18.5), Normal (18.5-24.9), Sobrepeso (25-29.9), Obesidade (≥30).",
    input: "peso = 70, altura = 1.75",
    output: "IMC = 22.86. Peso normal",
    code: `#include <stdio.h>

int main() {
    double peso, altura, imc;
    printf("Informe o peso (kg): ");
    scanf("%lf", &peso);
    printf("Informe a altura (m): ");
    scanf("%lf", &altura);

    imc = peso / (altura * altura);
    printf("IMC: %.2f\n", imc);

    if (imc < 18.5) {
        printf("Abaixo do peso\n");
    } else if (imc < 25) {
        printf("Peso normal\n");
    } else if (imc < 30) {
        printf("Sobrepeso\n");
    } else {
        printf("Obesidade\n");
    }

    return 0;
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
    code: `#include <stdio.h>

int main() {
    int codigo, quantidade;
    double valor_unitario = 0, total;

    printf("Informe o código do produto: ");
    scanf("%d", &codigo);
    printf("Informe a quantidade: ");
    scanf("%d", &quantidade);

    switch (codigo) {
        case 100:
            valor_unitario = 10.00;
            break;
        case 101:
            valor_unitario = 12.00;
            break;
        case 102:
            valor_unitario = 10.00;
            break;
        case 103:
            valor_unitario = 12.00;
            break;
        case 104:
            valor_unitario = 15.00;
            break;
        case 105:
            valor_unitario = 25.00;
            break;
        case 106:
            valor_unitario = 6.00;
            break;
        default:
            printf("Código inválido!\n");
            return 1;
    }

    total = valor_unitario * quantidade;
    printf("Total a pagar: R$ %.2f\n", total);

    return 0;
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
    code: `#include <stdio.h>

int main() {
    int idade, autorizacao;

    printf("Informe a idade: ");
    scanf("%d", &idade);
    printf("Possui autorização dos responsáveis? (1-sim/0-nao): ");
    scanf("%d", &autorizacao);

    if (idade >= 18 || autorizacao == 1) {
        printf("ACESSO PERMITIDO\n");
    } else {
        printf("ACESSO NEGADO\n");
    }

    return 0;
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
    code: `#include <stdio.h>

int main() {
    double valor;
    int membro;

    printf("Informe o valor da compra: R$ ");
    scanf("%lf", &valor);
    printf("Cliente é membro? (1-sim/0-nao): ");
    scanf("%d", &membro);

    if (valor >= 200 || membro == 1) {
        printf("FRETE GRATIS\n");
    } else {
        printf("FRETE PAGO\n");
    }

    return 0;
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
    code: `#include <stdio.h>
#include <string.h>

int main() {
    char senha[50];

    printf("Informe a senha: ");
    scanf("%s", senha);

    if (strlen(senha) >= 8 && strcmp(senha, "12345678") != 0) {
        printf("SENHA ACEITA\n");
    } else {
        printf("SENHA FRACA\n");
    }

    return 0;
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
    code: `#include <stdio.h>

int main() {
    double temp;
    int falta_ar, idade;

    printf("Informe a temperatura: ");
    scanf("%lf", &temp);
    printf("Tem falta de ar? (1-sim/0-nao): ");
    scanf("%d", &falta_ar);
    printf("Informe a idade: ");
    scanf("%d", &idade);

    if (temp >= 39 || falta_ar == 1 || idade >= 65) {
        printf("RISCO ALTO\n");
    } else {
        printf("RISCO BAIXO\n");
    }

    return 0;
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
    code: `#include <stdio.h>

int main() {
    int gestante, idoso, deficiencia;

    printf("É gestante? (1-sim/0-nao): ");
    scanf("%d", &gestante);
    printf("É idoso? (1-sim/0-nao): ");
    scanf("%d", &idoso);
    printf("Tem deficiência? (1-sim/0-nao): ");
    scanf("%d", &deficiencia);

    if (gestante == 1 || idoso == 1 || deficiencia == 1) {
        printf("PRIORITARIO\n");
    } else {
        printf("COMUM\n");
    }

    return 0;
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
    code: `#include <stdio.h>

int main() {
    double vendas;
    int novato;

    printf("Informe o total de vendas: R$ ");
    scanf("%lf", &vendas);
    printf("É novato? (1-sim/0-nao): ");
    scanf("%d", &novato);

    if (vendas >= 5000 || (novato == 1 && vendas >= 2000)) {
        printf("BONUS\n");
    } else {
        printf("SEM BONUS\n");
    }

    return 0;
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
    code: `#include <stdio.h>

int main() {
    int cracha, lista, horario;

    printf("Tem crachá? (1-sim/0-nao): ");
    scanf("%d", &cracha);
    printf("Está na lista autorizada? (1-sim/0-nao): ");
    scanf("%d", &lista);
    printf("Informe o horário (0-23): ");
    scanf("%d", &horario);

    if ((cracha == 1 || lista == 1) && (horario >= 8 && horario <= 20)) {
        printf("ENTRA\n");
    } else {
        printf("NAO ENTRA\n");
    }

    return 0;
}`,
    testCases: [
      { values: { cracha: 1, lista: 0, horario: 14 }, result: "ENTRA", stepByStep: "tem crachá e horário OK → ENTRA" },
      { values: { cracha: 0, lista: 0, horario: 14 }, result: "NAO ENTRA", stepByStep: "sem autorização → NÃO ENTRA" },
      { values: { cracha: 1, lista: 0, horario: 22 }, result: "NAO ENTRA", stepByStep: "horário inválido → NÃO ENTRA" }
    ],
    explanation: "Combinação de operadores: autorização (||) e horário (&&)."
  }
];

// Renderiza a seção de conceitos de condicionais em C/C++
function renderConceitosCondicionais() {
  return `
    <div class="content-card">
      <h2 class="card-title">🎮 Estruturas de Controle em C/C++</h2>
      <p>Em C/C++, as estruturas condicionais permitem que o programa tome decisões baseadas em condições.</p>

      <div class="info-callout">
        <span class="info-icon-callout">⚡</span>
        <div><strong>Estruturas Condicionais em C/C++:</strong><br>
        • <strong>if</strong> – execução condicional simples<br>
        • <strong>if-else</strong> – dois caminhos possíveis<br>
        • <strong>if-else if-else</strong> – múltiplas condições<br>
        • <strong>switch-case</strong> – múltiplas opções baseadas em valor</div>
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
    // Executa se condição for verdadeira (diferente de 0)
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
        <pre><code>if (condicao1) {
    // ...
} else if (condicao2) {
    // ...
} else {
    // ...
}</code></pre>
      </div>
    </div>

    <div class="content-card">
      <h2 class="card-title">✅ switch-case - Múltiplas Opções</h2>
      <div class="code-example">
        <div class="code-example-header">
          <span class="code-icon">📝</span>
          <span>Sintaxe do switch</span>
        </div>
        <pre><code>switch (variavel) {
    case valor1:
        // ...
        break;
    case valor2:
        // ...
        break;
    default:
        // ...
}</code></pre>
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
        <span>📋 Exercícios de Condicionais (C/C++)</span>
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
          <span>💻 Código de Resolução (C/C++)</span>
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
      <h1 class="page-title"><span>🔀</span> Estruturas Condicionais em C/C++</h1>
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