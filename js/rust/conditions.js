const condicionaisExercises = [
  {
    id: 1,
    title: "Verificação de Positivo/Negativo/Zero",
    statement: "Escreva um programa em Rust que receba um número e determine se ele é positivo, negativo ou zero.",
    input: "num = -5",
    output: "O número é negativo.",
    code: `use std::io;

fn main() {
    let mut input = String::new();
    println!("Informe um número:");
    io::stdin().read_line(&mut input).expect("Erro ao ler");
    let num: i32 = input.trim().parse().expect("Digite um número válido");

    if num > 0 {
        println!("O número {} é POSITIVO", num);
    } else if num < 0 {
        println!("O número {} é NEGATIVO", num);
    } else {
        println!("O número é ZERO");
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
    code: `use std::io;

fn main() {
    let mut input = String::new();
    println!("Informe a primeira nota:");
    io::stdin().read_line(&mut input).expect("Erro");
    let n1: f64 = input.trim().parse().expect("Número inválido");

    input.clear();
    println!("Informe a segunda nota:");
    io::stdin().read_line(&mut input).expect("Erro");
    let n2: f64 = input.trim().parse().expect("Número inválido");

    input.clear();
    println!("Informe a terceira nota:");
    io::stdin().read_line(&mut input).expect("Erro");
    let n3: f64 = input.trim().parse().expect("Número inválido");

    let media = (n1 + n2 + n3) / 3.0;
    println!("Média: {:.1}", media);

    if media >= 7.0 {
        println!("APROVADO!");
    } else if media >= 5.0 {
        println!("RECUPERAÇÃO");
    } else {
        println!("REPROVADO");
    }
}`,
    testCases: [
      { values: { n1: 7.0, n2: 8.0, n3: 9.0 }, result: "APROVADO", stepByStep: "média = 8.0 → APROVADO" },
      { values: { n1: 5.0, n2: 6.0, n3: 7.0 }, result: "RECUPERAÇÃO", stepByStep: "média = 6.0 → RECUPERAÇÃO" },
      { values: { n1: 4.0, n2: 5.0, n3: 3.0 }, result: "REPROVADO", stepByStep: "média = 4.0 → REPROVADO" }
    ],
    explanation: "Calculamos a média e usamos if-else if-else para classificar."
  },
  {
    id: 3,
    title: "Classificação de Triângulos",
    statement: "Receba três lados e classifique o triângulo em Equilátero, Isósceles ou Escaleno. Se não formar um triângulo válido, informe.",
    input: "a = 5, b = 5, c = 5",
    output: "Triângulo Equilátero",
    code: `use std::io;

fn main() {
    let mut input = String::new();
    println!("Informe o primeiro lado:");
    io::stdin().read_line(&mut input).expect("Erro");
    let a: f64 = input.trim().parse().expect("Número inválido");

    input.clear();
    println!("Informe o segundo lado:");
    io::stdin().read_line(&mut input).expect("Erro");
    let b: f64 = input.trim().parse().expect("Número inválido");

    input.clear();
    println!("Informe o terceiro lado:");
    io::stdin().read_line(&mut input).expect("Erro");
    let c: f64 = input.trim().parse().expect("Número inválido");

    let valido = (a + b > c) && (a + c > b) && (b + c > a);

    if valido {
        if a == b && b == c {
            println!("Triângulo EQUILÁTERO");
        } else if a == b || a == c || b == c {
            println!("Triângulo ISÓSCELES");
        } else {
            println!("Triângulo ESCALENO");
        }
    } else {
        println!("Os lados NÃO formam um triângulo válido");
    }
}`,
    testCases: [
      { values: { a: 5.0, b: 5.0, c: 5.0 }, result: "EQUILÁTERO", stepByStep: "todos iguais → EQUILÁTERO" },
      { values: { a: 5.0, b: 5.0, c: 8.0 }, result: "ISÓSCELES", stepByStep: "dois iguais → ISÓSCELES" },
      { values: { a: 3.0, b: 4.0, c: 5.0 }, result: "ESCALENO", stepByStep: "todos diferentes → ESCALENO" }
    ],
    explanation: "Primeiro verificamos se forma um triângulo, depois classificamos."
  },
  {
    id: 4,
    title: "Cálculo de Descontos em Compras",
    statement: "Aplique descontos conforme o valor total: 10% se valor ≥ 500, 5% se 300 ≤ valor < 500, sem desconto caso contrário.",
    input: "valor = 600",
    output: "Valor com desconto: 540",
    code: `use std::io;

fn main() {
    let mut input = String::new();
    println!("Informe o valor total da compra: R$ ");
    io::stdin().read_line(&mut input).expect("Erro");
    let valor: f64 = input.trim().parse().expect("Número inválido");

    if valor >= 500.0 {
        let valor_final = valor * 0.90;
        println!("Valor com desconto de 10%: R$ {:.2}", valor_final);
    } else if valor >= 300.0 {
        let valor_final = valor * 0.95;
        println!("Valor com desconto de 5%: R$ {:.2}", valor_final);
    } else {
        println!("Nenhum desconto aplicado. Valor: R$ {:.2}", valor);
    }
}`,
    testCases: [
      { values: { valor: 600.0 }, result: 540.0, stepByStep: "≥500 → 10% → 540" },
      { values: { valor: 400.0 }, result: 380.0, stepByStep: "≥300 → 5% → 380" },
      { values: { valor: 200.0 }, result: 200.0, stepByStep: "sem desconto → 200" }
    ],
    explanation: "Faixas de desconto com if-else if."
  },
  {
    id: 5,
    title: "Verificação de Ano Bissexto",
    statement: "Determine se um ano é bissexto. Regras: divisível por 4 e não divisível por 100, ou divisível por 400.",
    input: "ano = 2024",
    output: "2024 é bissexto",
    code: `use std::io;

fn main() {
    let mut input = String::new();
    println!("Informe o ano:");
    io::stdin().read_line(&mut input).expect("Erro");
    let ano: i32 = input.trim().parse().expect("Número inválido");

    let bissexto = (ano % 4 == 0 && ano % 100 != 0) || (ano % 400 == 0);

    if bissexto {
        println!("{} é BISSEXTO", ano);
    } else {
        println!("{} NÃO é bissexto", ano);
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
    code: `use std::io;

fn main() {
    let mut input = String::new();
    println!("Informe a idade:");
    io::stdin().read_line(&mut input).expect("Erro");
    let idade: i32 = input.trim().parse().expect("Número inválido");

    if idade < 0 {
        println!("Idade inválida!");
    } else if idade <= 12 {
        println!("CRIANÇA");
    } else if idade <= 17 {
        println!("ADOLESCENTE");
    } else if idade <= 59 {
        println!("ADULTO");
    } else {
        println!("IDOSO");
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
    code: `use std::io;

fn main() {
    let mut input = String::new();
    println!("Informe o primeiro número:");
    io::stdin().read_line(&mut input).expect("Erro");
    let num1: f64 = input.trim().parse().expect("Número inválido");

    input.clear();
    println!("Informe o segundo número:");
    io::stdin().read_line(&mut input).expect("Erro");
    let num2: f64 = input.trim().parse().expect("Número inválido");

    input.clear();
    println!("Escolha a operação:");
    println!("1 - Soma");
    println!("2 - Subtração");
    println!("3 - Multiplicação");
    println!("4 - Divisão");
    io::stdin().read_line(&mut input).expect("Erro");
    let op: i32 = input.trim().parse().expect("Opção inválida");

    match op {
        1 => println!("Resultado: {:.2}", num1 + num2),
        2 => println!("Resultado: {:.2}", num1 - num2),
        3 => println!("Resultado: {:.2}", num1 * num2),
        4 => {
            if num2 != 0.0 {
                println!("Resultado: {:.2}", num1 / num2);
            } else {
                println!("Erro: divisão por zero!");
            }
        }
        _ => println!("Operação inválida!"),
    }
}`,
    testCases: [
      { values: { num1: 10.0, num2: 5.0, op: 3 }, result: 50.0, stepByStep: "op=3 → multiplicação → 50" },
      { values: { num1: 10.0, num2: 5.0, op: 1 }, result: 15.0, stepByStep: "op=1 → soma → 15" },
      { values: { num1: 10.0, num2: 5.0, op: 4 }, result: 2.0, stepByStep: "op=4 → divisão → 2" }
    ],
    explanation: "Estrutura match (switch-case) para múltiplas opções."
  },
  {
    id: 8,
    title: "Verificação de Usuário e Senha",
    statement: "Verifique se o nome de usuário e senha estão corretos. Usuário: 'aluno', Senha: '123456'.",
    input: "nome = 'aluno', senha = '123456'",
    output: "Acesso Permitido",
    code: `use std::io;

fn main() {
    let mut input = String::new();
    println!("Informe o nome de usuário:");
    io::stdin().read_line(&mut input).expect("Erro");
    let nome = input.trim().to_string();

    input.clear();
    println!("Informe a senha:");
    io::stdin().read_line(&mut input).expect("Erro");
    let senha = input.trim().to_string();

    if nome == "aluno" && senha == "123456" {
        println!("ACESSO PERMITIDO");
    } else {
        println!("ACESSO NEGADO");
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
    code: `use std::io;

fn main() {
    let mut input = String::new();
    println!("Informe o peso (kg):");
    io::stdin().read_line(&mut input).expect("Erro");
    let peso: f64 = input.trim().parse().expect("Número inválido");

    input.clear();
    println!("Informe a altura (m):");
    io::stdin().read_line(&mut input).expect("Erro");
    let altura: f64 = input.trim().parse().expect("Número inválido");

    let imc = peso / (altura * altura);
    println!("IMC: {:.2}", imc);

    if imc < 18.5 {
        println!("Abaixo do peso");
    } else if imc < 25.0 {
        println!("Peso normal");
    } else if imc < 30.0 {
        println!("Sobrepeso");
    } else {
        println!("Obesidade");
    }
}`,
    testCases: [
      { values: { peso: 70.0, altura: 1.75 }, result: "Peso normal", stepByStep: "IMC=22.86 → Normal" },
      { values: { peso: 50.0, altura: 1.70 }, result: "Abaixo do peso", stepByStep: "IMC=17.30 → Abaixo" },
      { values: { peso: 85.0, altura: 1.75 }, result: "Sobrepeso", stepByStep: "IMC=27.76 → Sobrepeso" }
    ],
    explanation: "Condições sequenciais para classificar IMC."
  },
  {
    id: 10,
    title: "Simulador de Calculadora de Produtos",
    statement: "Leia o código do produto e a quantidade vendida, e calcule o valor a pagar conforme a tabela de preços.",
    input: "código = 102, quantidade = 2",
    output: "Total a Pagar: R$ 20,00",
    code: `use std::io;

fn main() {
    let mut input = String::new();
    println!("Informe o código do produto:");
    io::stdin().read_line(&mut input).expect("Erro");
    let codigo: i32 = input.trim().parse().expect("Código inválido");

    input.clear();
    println!("Informe a quantidade:");
    io::stdin().read_line(&mut input).expect("Erro");
    let qtd: i32 = input.trim().parse().expect("Quantidade inválida");

    let valor_unitario = match codigo {
        100 => 10.00,
        101 => 12.00,
        102 => 10.00,
        103 => 12.00,
        104 => 15.00,
        105 => 25.00,
        106 => 6.00,
        _ => {
            println!("Código inválido!");
            return;
        }
    };

    let total = valor_unitario * qtd as f64;
    println!("Total a pagar: R$ {:.2}", total);
}`,
    testCases: [
      { values: { codigo: 102, quantidade: 2 }, result: 20.0, stepByStep: "código 102 → R$10 × 2 = R$20" },
      { values: { codigo: 100, quantidade: 3 }, result: 30.0, stepByStep: "código 100 → R$10 × 3 = R$30" }
    ],
    explanation: "Match para selecionar valor unitário, depois multiplica."
  },
  {
    id: 11,
    title: "Acesso à Casa Noturna",
    statement: "Sistema de controle de acesso: acesso permitido se idade ≥ 18 ou possuir autorização dos responsáveis.",
    input: "idade = 17, autorizacao = verdadeiro",
    output: "ACESSO PERMITIDO",
    code: `use std::io;

fn main() {
    let mut input = String::new();
    println!("Informe a idade:");
    io::stdin().read_line(&mut input).expect("Erro");
    let idade: i32 = input.trim().parse().expect("Número inválido");

    input.clear();
    println!("Possui autorização? (1-sim/0-nao):");
    io::stdin().read_line(&mut input).expect("Erro");
    let autorizacao: i32 = input.trim().parse().expect("Opção inválida");

    if idade >= 18 || autorizacao == 1 {
        println!("ACESSO PERMITIDO");
    } else {
        println!("ACESSO NEGADO");
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
    code: `use std::io;

fn main() {
    let mut input = String::new();
    println!("Informe o valor da compra: R$ ");
    io::stdin().read_line(&mut input).expect("Erro");
    let valor: f64 = input.trim().parse().expect("Número inválido");

    input.clear();
    println!("Cliente é membro? (1-sim/0-nao):");
    io::stdin().read_line(&mut input).expect("Erro");
    let membro: i32 = input.trim().parse().expect("Opção inválida");

    if valor >= 200.0 || membro == 1 {
        println!("FRETE GRATIS");
    } else {
        println!("FRETE PAGO");
    }
}`,
    testCases: [
      { values: { valor: 250.0, membro: 0 }, result: "FRETE GRATIS", stepByStep: "valor ≥ 200 → GRÁTIS" },
      { values: { valor: 150.0, membro: 1 }, result: "FRETE GRATIS", stepByStep: "membro → GRÁTIS" },
      { values: { valor: 100.0, membro: 0 }, result: "FRETE PAGO", stepByStep: "nenhuma → PAGO" }
    ],
    explanation: "Frete grátis quando pelo menos uma condição é atendida."
  },
  {
    id: 13,
    title: "Senha Forte",
    statement: "Verifique se a senha é forte: tamanho ≥ 8 e diferente de '12345678'.",
    input: "senha = 'minhasenha'",
    output: "SENHA ACEITA",
    code: `use std::io;

fn main() {
    let mut input = String::new();
    println!("Informe a senha:");
    io::stdin().read_line(&mut input).expect("Erro");
    let senha = input.trim();

    if senha.len() >= 8 && senha != "12345678" {
        println!("SENHA ACEITA");
    } else {
        println!("SENHA FRACA");
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
    code: `use std::io;

fn main() {
    let mut input = String::new();
    println!("Informe a temperatura:");
    io::stdin().read_line(&mut input).expect("Erro");
    let temp: f64 = input.trim().parse().expect("Número inválido");

    input.clear();
    println!("Tem falta de ar? (1-sim/0-nao):");
    io::stdin().read_line(&mut input).expect("Erro");
    let falta_ar: i32 = input.trim().parse().expect("Opção inválida");

    input.clear();
    println!("Informe a idade:");
    io::stdin().read_line(&mut input).expect("Erro");
    let idade: i32 = input.trim().parse().expect("Número inválido");

    if temp >= 39.0 || falta_ar == 1 || idade >= 65 {
        println!("RISCO ALTO");
    } else {
        println!("RISCO BAIXO");
    }
}`,
    testCases: [
      { values: { temp: 39.0, falta_ar: 0, idade: 30 }, result: "RISCO ALTO", stepByStep: "temperatura alta → ALTO" },
      { values: { temp: 37.0, falta_ar: 1, idade: 30 }, result: "RISCO ALTO", stepByStep: "falta de ar → ALTO" },
      { values: { temp: 37.0, falta_ar: 0, idade: 70 }, result: "RISCO ALTO", stepByStep: "idade ≥ 65 → ALTO" }
    ],
    explanation: "Três condições combinadas com ||."
  },
  {
    id: 15,
    title: "Prioridade de Atendimento",
    statement: "Classifique prioridade: PRIORITÁRIO se for gestante, idoso ou tiver deficiência.",
    input: "ehGestante = falso, ehIdoso = verdadeiro, temDeficiencia = falso",
    output: "PRIORITARIO",
    code: `use std::io;

fn main() {
    let mut input = String::new();
    println!("É gestante? (1-sim/0-nao):");
    io::stdin().read_line(&mut input).expect("Erro");
    let gestante: i32 = input.trim().parse().expect("Opção inválida");

    input.clear();
    println!("É idoso? (1-sim/0-nao):");
    io::stdin().read_line(&mut input).expect("Erro");
    let idoso: i32 = input.trim().parse().expect("Opção inválida");

    input.clear();
    println!("Tem deficiência? (1-sim/0-nao):");
    io::stdin().read_line(&mut input).expect("Erro");
    let deficiencia: i32 = input.trim().parse().expect("Opção inválida");

    if gestante == 1 || idoso == 1 || deficiencia == 1 {
        println!("PRIORITARIO");
    } else {
        println!("COMUM");
    }
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
    code: `use std::io;

fn main() {
    let mut input = String::new();
    println!("Informe o total de vendas: R$ ");
    io::stdin().read_line(&mut input).expect("Erro");
    let vendas: f64 = input.trim().parse().expect("Número inválido");

    input.clear();
    println!("É novato? (1-sim/0-nao):");
    io::stdin().read_line(&mut input).expect("Erro");
    let novato: i32 = input.trim().parse().expect("Opção inválida");

    if vendas >= 5000.0 || (novato == 1 && vendas >= 2000.0) {
        println!("BONUS");
    } else {
        println!("SEM BONUS");
    }
}`,
    testCases: [
      { values: { vendas: 6000.0, novato: 0 }, result: "BONUS", stepByStep: "≥5000 → BÔNUS" },
      { values: { vendas: 2500.0, novato: 1 }, result: "BONUS", stepByStep: "novato e ≥2000 → BÔNUS" },
      { values: { vendas: 2500.0, novato: 0 }, result: "SEM BONUS", stepByStep: "nenhuma condição → SEM BÔNUS" }
    ],
    explanation: "Combinação de || e &&."
  },
  {
    id: 17,
    title: "Controle de Acesso por Credenciais",
    statement: "Entrada permitida se (tem crachá OU está na lista) E horário entre 8 e 20.",
    input: "temCracha = verdadeiro, estaNaLista = falso, horario = 14",
    output: "ENTRA",
    code: `use std::io;

fn main() {
    let mut input = String::new();
    println!("Tem crachá? (1-sim/0-nao):");
    io::stdin().read_line(&mut input).expect("Erro");
    let cracha: i32 = input.trim().parse().expect("Opção inválida");

    input.clear();
    println!("Está na lista autorizada? (1-sim/0-nao):");
    io::stdin().read_line(&mut input).expect("Erro");
    let lista: i32 = input.trim().parse().expect("Opção inválida");

    input.clear();
    println!("Informe o horário (0-23):");
    io::stdin().read_line(&mut input).expect("Erro");
    let horario: i32 = input.trim().parse().expect("Número inválido");

    if (cracha == 1 || lista == 1) && (horario >= 8 && horario <= 20) {
        println!("ENTRA");
    } else {
        println!("NAO ENTRA");
    }
}`,
    testCases: [
      { values: { cracha: 1, lista: 0, horario: 14 }, result: "ENTRA", stepByStep: "tem crachá e horário OK → ENTRA" },
      { values: { cracha: 0, lista: 0, horario: 14 }, result: "NAO ENTRA", stepByStep: "sem autorização → NÃO ENTRA" },
      { values: { cracha: 1, lista: 0, horario: 22 }, result: "NAO ENTRA", stepByStep: "horário inválido → NÃO ENTRA" }
    ],
    explanation: "Combinação de operadores: autorização (||) e horário (&&)."
  }
];

// Renderiza a seção de conceitos de condicionais em Rust
function renderConceitosCondicionais() {
  return `
    <div class="content-card">
      <h2 class="card-title">🎮 Estruturas de Controle em Rust</h2>
      <p>Em Rust, as estruturas condicionais são fundamentais para criar programas que tomam decisões.</p>

      <div class="info-callout">
        <span class="info-icon-callout">⚡</span>
        <div><strong>Estruturas Condicionais em Rust:</strong><br>
        • <strong>if</strong> – execução condicional simples<br>
        • <strong>if-else</strong> – dois caminhos possíveis<br>
        • <strong>if-else if-else</strong> – múltiplas condições<br>
        • <strong>match</strong> – padrão de correspondência (similar a switch-case)</div>
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
      <h2 class="card-title">✅ match - Padrão de Correspondência</h2>
      <div class="code-example">
        <div class="code-example-header">
          <span class="code-icon">📝</span>
          <span>Sintaxe do match</span>
        </div>
        <pre><code>match valor {
    padrão1 => {
        // ação para padrão1
    }
    padrão2 => {
        // ação para padrão2
    }
    _ => {
        // ação padrão (coringa)
    }
}</code></pre>
      </div>
      <p>O match em Rust é exaustivo (deve cobrir todas as possibilidades) e é muito poderoso, permitindo desestruturação de tipos complexos.</p>
    </div>
  `;
}

// Renderiza a seção de exercícios de condicionais
function renderExerciciosCondicionais() {
  const currentEx = condicionaisExercises.find(e => e.id === window.currentCondicionalExercise) || condicionaisExercises[0];

  return `
    <div class="exercises-filter">
      <div class="filter-header">
        <span>📋 Exercícios de Condicionais (Rust)</span>
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
      <h1 class="page-title"><span>🔀</span> Estruturas Condicionais em Rust</h1>
      <p class="page-subtitle">Aprenda a criar decisões inteligentes com if, else, match</p>
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