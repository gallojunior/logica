// js/java/conditions.js

const condicionaisExercises = [
  {
    id: 1,
    title: "Verificação de Positivo/Negativo/Zero",
    statement: "Escreva um programa em Java que receba um número e determine se ele é positivo, negativo ou zero.",
    input: "num = -5",
    output: "O número é negativo.",
    code: `import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        System.out.print("Informe um número: ");
        int num = scanner.nextInt();

        if (num > 0) {
            System.out.println("O número " + num + " é POSITIVO");
        } else if (num < 0) {
            System.out.println("O número " + num + " é NEGATIVO");
        } else {
            System.out.println("O número é ZERO");
        }

        scanner.close();
    }
}`,
    testCases: [
      { values: { num: 5 }, result: "POSITIVO", stepByStep: "5 > 0 → verdadeiro → POSITIVO" },
      { values: { num: -3 }, result: "NEGATIVO", stepByStep: "-3 > 0? falso; -3 < 0? verdadeiro → NEGATIVO" },
      { values: { num: 0 }, result: "ZERO", stepByStep: "0 > 0? falso; 0 < 0? falso → ZERO" }
    ],
    explanation: "Utilizamos a estrutura condicional if-else if-else para verificar três possibilidades."
  },
  {
    id: 2,
    title: "Aprovação por Média",
    statement: "Receba três notas, calcule a média e determine se o aluno foi aprovado (média ≥ 7), em recuperação (5 ≤ média < 7) ou reprovado (média < 5).",
    input: "nota1 = 6, nota2 = 7, nota3 = 8",
    output: "Média = 7.0. Aprovado!",
    code: `import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        System.out.print("Informe a primeira nota: ");
        double nota1 = scanner.nextDouble();

        System.out.print("Informe a segunda nota: ");
        double nota2 = scanner.nextDouble();

        System.out.print("Informe a terceira nota: ");
        double nota3 = scanner.nextDouble();

        double media = (nota1 + nota2 + nota3) / 3;

        System.out.printf("Média: %.1f%n", media);

        if (media >= 7) {
            System.out.println("APROVADO!");
        } else if (media >= 5) {
            System.out.println("RECUPERAÇÃO");
        } else {
            System.out.println("REPROVADO");
        }

        scanner.close();
    }
}`,
    testCases: [
      { values: { nota1: 7, nota2: 8, nota3: 9 }, result: "APROVADO", stepByStep: "média = (7+8+9)/3 = 8.0 → APROVADO" },
      { values: { nota1: 5, nota2: 6, nota3: 7 }, result: "RECUPERAÇÃO", stepByStep: "média = 6.0 → RECUPERAÇÃO" },
      { values: { nota1: 4, nota2: 5, nota3: 3 }, result: "REPROVADO", stepByStep: "média = 4.0 → REPROVADO" }
    ],
    explanation: "Primeiro calculamos a média, depois usamos if-else if-else para classificar."
  },
  {
    id: 3,
    title: "Classificação de Triângulos",
    statement: "Receba três lados e classifique o triângulo em Equilátero, Isósceles ou Escaleno. Se não formar um triângulo válido, informe.",
    input: "a = 5, b = 5, c = 5",
    output: "Triângulo Equilátero",
    code: `import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        System.out.print("Informe o primeiro lado: ");
        int a = scanner.nextInt();

        System.out.print("Informe o segundo lado: ");
        int b = scanner.nextInt();

        System.out.print("Informe o terceiro lado: ");
        int c = scanner.nextInt();

        boolean trianguloValido = (a + b > c) && (a + c > b) && (b + c > a);

        if (trianguloValido) {
            if (a == b && b == c) {
                System.out.println("Triângulo EQUILÁTERO");
            } else if (a == b || a == c || b == c) {
                System.out.println("Triângulo ISÓSCELES");
            } else {
                System.out.println("Triângulo ESCALENO");
            }
        } else {
            System.out.println("Os lados NÃO formam um triângulo válido");
        }

        scanner.close();
    }
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
    code: `import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        System.out.print("Informe o valor total da compra: R$ ");
        double valor = scanner.nextDouble();

        if (valor >= 500) {
            double valorFinal = valor * 0.90;
            System.out.printf("Valor com desconto de 10%%: R$ %.2f%n", valorFinal);
        } else if (valor >= 300) {
            double valorFinal = valor * 0.95;
            System.out.printf("Valor com desconto de 5%%: R$ %.2f%n", valorFinal);
        } else {
            System.out.printf("Nenhum desconto aplicado. Valor: R$ %.2f%n", valor);
        }

        scanner.close();
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
    code: `import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        System.out.print("Informe o ano: ");
        int ano = scanner.nextInt();

        boolean bissexto = (ano % 4 == 0 && ano % 100 != 0) || (ano % 400 == 0);

        if (bissexto) {
            System.out.println(ano + " é BISSEXTO");
        } else {
            System.out.println(ano + " NÃO é bissexto");
        }

        scanner.close();
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
    code: `import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        System.out.print("Informe a idade: ");
        int idade = scanner.nextInt();

        if (idade < 0) {
            System.out.println("Idade inválida!");
        } else if (idade <= 12) {
            System.out.println("CRIANÇA");
        } else if (idade <= 17) {
            System.out.println("ADOLESCENTE");
        } else if (idade <= 59) {
            System.out.println("ADULTO");
        } else {
            System.out.println("IDOSO");
        }

        scanner.close();
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
    code: `import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        System.out.print("Informe o primeiro número: ");
        double num1 = scanner.nextDouble();

        System.out.print("Informe o segundo número: ");
        double num2 = scanner.nextDouble();

        System.out.print("Escolha a operação (1-soma, 2-subtração, 3-multiplicação, 4-divisão): ");
        int op = scanner.nextInt();

        double resultado = 0;

        switch (op) {
            case 1:
                resultado = num1 + num2;
                System.out.println("Soma: " + resultado);
                break;
            case 2:
                resultado = num1 - num2;
                System.out.println("Subtração: " + resultado);
                break;
            case 3:
                resultado = num1 * num2;
                System.out.println("Multiplicação: " + resultado);
                break;
            case 4:
                if (num2 != 0) {
                    resultado = num1 / num2;
                    System.out.println("Divisão: " + resultado);
                } else {
                    System.out.println("Erro: divisão por zero!");
                }
                break;
            default:
                System.out.println("Operação inválida!");
                break;
        }

        scanner.close();
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
    code: `import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        System.out.print("Informe o nome de usuário: ");
        String nome = scanner.nextLine();

        System.out.print("Informe a senha: ");
        String senha = scanner.nextLine();

        if (nome.equals("aluno") && senha.equals("123456")) {
            System.out.println("ACESSO PERMITIDO");
        } else {
            System.out.println("ACESSO NEGADO");
        }

        scanner.close();
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
    code: `import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        System.out.print("Informe o peso (kg): ");
        double peso = scanner.nextDouble();

        System.out.print("Informe a altura (m): ");
        double altura = scanner.nextDouble();

        double imc = peso / (altura * altura);

        System.out.printf("IMC: %.2f%n", imc);

        if (imc < 18.5) {
            System.out.println("Abaixo do peso");
        } else if (imc < 25) {
            System.out.println("Peso normal");
        } else if (imc < 30) {
            System.out.println("Sobrepeso");
        } else {
            System.out.println("Obesidade");
        }

        scanner.close();
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
    code: `import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        System.out.print("Informe o código do produto: ");
        int codigo = scanner.nextInt();

        System.out.print("Informe a quantidade: ");
        int quantidade = scanner.nextInt();

        double valorUnitario = 0;

        switch (codigo) {
            case 100: valorUnitario = 10.00; break;
            case 101: valorUnitario = 12.00; break;
            case 102: valorUnitario = 10.00; break;
            case 103: valorUnitario = 12.00; break;
            case 104: valorUnitario = 15.00; break;
            case 105: valorUnitario = 25.00; break;
            case 106: valorUnitario = 6.00; break;
            default:
                System.out.println("Código inválido!");
                scanner.close();
                return;
        }

        double total = valorUnitario * quantidade;
        System.out.printf("Total a pagar: R$ %.2f%n", total);

        scanner.close();
    }
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
    code: `import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        System.out.print("Informe a idade: ");
        int idade = scanner.nextInt();

        System.out.print("Possui autorização dos responsáveis? (1-sim/0-nao): ");
        int autorizacao = scanner.nextInt();

        if (idade >= 18 || autorizacao == 1) {
            System.out.println("ACESSO PERMITIDO");
        } else {
            System.out.println("ACESSO NEGADO");
        }

        scanner.close();
    }
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
    code: `import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        System.out.print("Informe o valor da compra: R$ ");
        double valor = scanner.nextDouble();

        System.out.print("Cliente é membro? (1-sim/0-nao): ");
        int membro = scanner.nextInt();

        if (valor >= 200 || membro == 1) {
            System.out.println("FRETE GRATIS");
        } else {
            System.out.println("FRETE PAGO");
        }

        scanner.close();
    }
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
    code: `import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        System.out.print("Informe a senha: ");
        String senha = scanner.nextLine();

        int tamanho = senha.length();

        if (tamanho >= 8 && !senha.equals("12345678")) {
            System.out.println("SENHA ACEITA");
        } else {
            System.out.println("SENHA FRACA");
        }

        scanner.close();
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
    code: `import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        System.out.print("Informe a temperatura: ");
        double temperatura = scanner.nextDouble();

        System.out.print("Tem falta de ar? (1-sim/0-nao): ");
        int faltaAr = scanner.nextInt();

        System.out.print("Informe a idade: ");
        int idade = scanner.nextInt();

        if (temperatura >= 39 || faltaAr == 1 || idade >= 65) {
            System.out.println("RISCO ALTO");
        } else {
            System.out.println("RISCO BAIXO");
        }

        scanner.close();
    }
}`,
    testCases: [
      { values: { temperatura: 39, faltaAr: 0, idade: 30 }, result: "RISCO ALTO", stepByStep: "temperatura alta → ALTO" },
      { values: { temperatura: 37, faltaAr: 1, idade: 30 }, result: "RISCO ALTO", stepByStep: "falta de ar → ALTO" },
      { values: { temperatura: 37, faltaAr: 0, idade: 70 }, result: "RISCO ALTO", stepByStep: "idade ≥ 65 → ALTO" }
    ],
    explanation: "Três condições combinadas com ||."
  },
  {
    id: 15,
    title: "Prioridade de Atendimento",
    statement: "Classifique prioridade: PRIORITÁRIO se for gestante, idoso ou tiver deficiência.",
    input: "ehGestante = falso, ehIdoso = verdadeiro, temDeficiencia = falso",
    output: "PRIORITARIO",
    code: `import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        System.out.print("É gestante? (1-sim/0-nao): ");
        int ehGestante = scanner.nextInt();

        System.out.print("É idoso? (1-sim/0-nao): ");
        int ehIdoso = scanner.nextInt();

        System.out.print("Tem deficiência? (1-sim/0-nao): ");
        int temDeficiencia = scanner.nextInt();

        if (ehGestante == 1 || ehIdoso == 1 || temDeficiencia == 1) {
            System.out.println("PRIORITARIO");
        } else {
            System.out.println("COMUM");
        }

        scanner.close();
    }
}`,
    testCases: [
      { values: { ehGestante: 1, ehIdoso: 0, temDeficiencia: 0 }, result: "PRIORITARIO", stepByStep: "gestante → PRIORITÁRIO" },
      { values: { ehGestante: 0, ehIdoso: 1, temDeficiencia: 0 }, result: "PRIORITARIO", stepByStep: "idoso → PRIORITÁRIO" },
      { values: { ehGestante: 0, ehIdoso: 0, temDeficiencia: 1 }, result: "PRIORITARIO", stepByStep: "deficiência → PRIORITÁRIO" }
    ],
    explanation: "Operador || para verificar se há pelo menos uma condição."
  },
  {
    id: 16,
    title: "Bônus para Vendedores",
    statement: "Conceder bônus se vendas ≥ R$5000 OU (for novato E vendas ≥ R$2000).",
    input: "vendas = 2500, novato = verdadeiro",
    output: "BONUS",
    code: `import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        System.out.print("Informe o total de vendas: R$ ");
        double vendas = scanner.nextDouble();

        System.out.print("É novato? (1-sim/0-nao): ");
        int novato = scanner.nextInt();

        if (vendas >= 5000 || (novato == 1 && vendas >= 2000)) {
            System.out.println("BONUS");
        } else {
            System.out.println("SEM BONUS");
        }

        scanner.close();
    }
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
    code: `import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        System.out.print("Tem crachá? (1-sim/0-nao): ");
        int temCracha = scanner.nextInt();

        System.out.print("Está na lista autorizada? (1-sim/0-nao): ");
        int estaNaLista = scanner.nextInt();

        System.out.print("Informe o horário (0-23): ");
        int horario = scanner.nextInt();

        if ((temCracha == 1 || estaNaLista == 1) && (horario >= 8 && horario <= 20)) {
            System.out.println("ENTRA");
        } else {
            System.out.println("NAO ENTRA");
        }

        scanner.close();
    }
}`,
    testCases: [
      { values: { temCracha: 1, estaNaLista: 0, horario: 14 }, result: "ENTRA", stepByStep: "tem crachá e horário OK → ENTRA" },
      { values: { temCracha: 0, estaNaLista: 0, horario: 14 }, result: "NAO ENTRA", stepByStep: "sem autorização → NÃO ENTRA" },
      { values: { temCracha: 1, estaNaLista: 0, horario: 22 }, result: "NAO ENTRA", stepByStep: "horário inválido → NÃO ENTRA" }
    ],
    explanation: "Combinação de operadores: autorização (||) e horário (&&)."
  }
];

// Renderiza a seção de conceitos de condicionais em Java
function renderConceitosCondicionais() {
  return `
    <div class="content-card">
      <h2 class="card-title">🎮 Estruturas de Controle em Java</h2>
      <p>Em alguns casos, precisamos que o programa <strong>tome decisões</strong> ou repita ações com base nos dados recebidos.</p>
      
      <div class="info-callout">
        <span class="info-icon-callout">⚡</span>
        <div><strong>Tipos de Estruturas de Controle:</strong><br>
        • <strong>Desvios Condicionais</strong> (if, if-else, switch) - tomam decisões<br>
        • <strong>Laços de Repetição</strong> (for, while, do-while) - repetem ações</div>
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
        <pre><code>if (condicao) {
    // Executa se true
} else {
    // Executa se false
}</code></pre>
      </div>
    </div>
    
    <div class="content-card">
      <h2 class="card-title">✅ else if - Múltiplas Condições</h2>
      <div class="code-example">
        <div class="code-example-header">
          <span class="code-icon">📝</span>
          <span>Sintaxe do else if</span>
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
      <h2 class="card-title">✅ switch-case - Múltiplos Valores</h2>
      <div class="code-example">
        <div class="code-example-header">
          <span class="code-icon">📝</span>
          <span>Sintaxe do switch</span>
        </div>
        <pre><code>switch (variavel) {
    case valor1:
        // Instruções
        break;
    case valor2:
        // Instruções
        break;
    default:
        // Instruções padrão
        break;
}</code></pre>
      </div>
    </div>
    
    <div class="content-card">
      <h2 class="card-title">✅ Operador Ternário</h2>
      <div class="code-example">
        <div class="code-example-header">
          <span class="code-icon">📝</span>
          <span>Sintaxe do operador ternário</span>
        </div>
        <pre><code>condicao ? valorSeVerdadeiro : valorSeFalso;</code></pre>
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
        <span>📋 Exercícios de Condicionais (Java)</span>
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
          <span>💻 Código de Resolução (Java)</span>
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
      <h1 class="page-title"><span>🔀</span> Estruturas Condicionais em Java</h1>
      <p class="page-subtitle">Aprenda a criar decisões inteligentes com if, else, switch e operador ternário</p>
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