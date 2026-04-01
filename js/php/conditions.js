const condicionaisExercises = [
  {
    id: 1,
    title: "Verificação de Positivo/Negativo/Zero",
    statement: "Escreva um programa em PHP que receba um número e determine se ele é positivo, negativo ou zero.",
    input: "num = -5",
    output: "O número é negativo.",
    code: `<?php
echo "Informe um número: ";
$num = (int) trim(fgets(STDIN));

if ($num > 0) {
    echo "O número $num é POSITIVO\n";
} elseif ($num < 0) {
    echo "O número $num é NEGATIVO\n";
} else {
    echo "O número é ZERO\n";
}
?>`,
    testCases: [
      { values: { num: 5 }, result: "POSITIVO", stepByStep: "5 > 0 → POSITIVO" },
      { values: { num: -3 }, result: "NEGATIVO", stepByStep: "-3 < 0 → NEGATIVO" },
      { values: { num: 0 }, result: "ZERO", stepByStep: "0 → ZERO" }
    ],
    explanation: "Utilizamos a estrutura if-elseif-else para verificar três possibilidades."
  },
  {
    id: 2,
    title: "Aprovação por Média",
    statement: "Receba três notas, calcule a média e determine se o aluno foi aprovado (média ≥ 7), em recuperação (5 ≤ média < 7) ou reprovado (média < 5).",
    input: "nota1 = 6, nota2 = 7, nota3 = 8",
    output: "Média = 7.0. Aprovado!",
    code: `<?php
echo "Informe a primeira nota: ";
$n1 = (float) trim(fgets(STDIN));
echo "Informe a segunda nota: ";
$n2 = (float) trim(fgets(STDIN));
echo "Informe a terceira nota: ";
$n3 = (float) trim(fgets(STDIN));

$media = ($n1 + $n2 + $n3) / 3;
printf("Média: %.1f\n", $media);

if ($media >= 7) {
    echo "APROVADO!\n";
} elseif ($media >= 5) {
    echo "RECUPERAÇÃO\n";
} else {
    echo "REPROVADO\n";
}
?>`,
    testCases: [
      { values: { n1: 7, n2: 8, n3: 9 }, result: "APROVADO", stepByStep: "média = 8.0 → APROVADO" },
      { values: { n1: 5, n2: 6, n3: 7 }, result: "RECUPERAÇÃO", stepByStep: "média = 6.0 → RECUPERAÇÃO" },
      { values: { n1: 4, n2: 5, n3: 3 }, result: "REPROVADO", stepByStep: "média = 4.0 → REPROVADO" }
    ],
    explanation: "Calculamos a média e usamos if-elseif-else para classificar."
  },
  {
    id: 3,
    title: "Classificação de Triângulos",
    statement: "Receba três lados e classifique o triângulo em Equilátero, Isósceles ou Escaleno. Se não formar um triângulo válido, informe.",
    input: "a = 5, b = 5, c = 5",
    output: "Triângulo Equilátero",
    code: `<?php
echo "Informe o primeiro lado: ";
$a = (float) trim(fgets(STDIN));
echo "Informe o segundo lado: ";
$b = (float) trim(fgets(STDIN));
echo "Informe o terceiro lado: ";
$c = (float) trim(fgets(STDIN));

$trianguloValido = ($a + $b > $c) && ($a + $c > $b) && ($b + $c > $a);

if ($trianguloValido) {
    if ($a == $b && $b == $c) {
        echo "Triângulo EQUILÁTERO\n";
    } elseif ($a == $b || $a == $c || $b == $c) {
        echo "Triângulo ISÓSCELES\n";
    } else {
        echo "Triângulo ESCALENO\n";
    }
} else {
    echo "Os lados NÃO formam um triângulo válido\n";
}
?>`,
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
    code: `<?php
echo "Informe o valor total da compra: R$ ";
$valor = (float) trim(fgets(STDIN));

if ($valor >= 500) {
    $valorFinal = $valor * 0.90;
    echo "Valor com desconto de 10%: R$ $valorFinal\n";
} elseif ($valor >= 300) {
    $valorFinal = $valor * 0.95;
    echo "Valor com desconto de 5%: R$ $valorFinal\n";
} else {
    echo "Nenhum desconto aplicado. Valor: R$ $valor\n";
}
?>`,
    testCases: [
      { values: { valor: 600 }, result: 540, stepByStep: "≥500 → 10% → 540" },
      { values: { valor: 400 }, result: 380, stepByStep: "≥300 → 5% → 380" },
      { values: { valor: 200 }, result: 200, stepByStep: "sem desconto → 200" }
    ],
    explanation: "Faixas de desconto com if-elseif."
  },
  {
    id: 5,
    title: "Verificação de Ano Bissexto",
    statement: "Determine se um ano é bissexto. Regras: divisível por 4 e não divisível por 100, ou divisível por 400.",
    input: "ano = 2024",
    output: "2024 é bissexto",
    code: `<?php
echo "Informe o ano: ";
$ano = (int) trim(fgets(STDIN));

$bissexto = ($ano % 4 == 0 && $ano % 100 != 0) || ($ano % 400 == 0);

if ($bissexto) {
    echo "$ano é BISSEXTO\n";
} else {
    echo "$ano NÃO é bissexto\n";
}
?>`,
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
    code: `<?php
echo "Informe a idade: ";
$idade = (int) trim(fgets(STDIN));

if ($idade < 0) {
    echo "Idade inválida!\n";
} elseif ($idade <= 12) {
    echo "CRIANÇA\n";
} elseif ($idade <= 17) {
    echo "ADOLESCENTE\n";
} elseif ($idade <= 59) {
    echo "ADULTO\n";
} else {
    echo "IDOSO\n";
}
?>`,
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
    code: `<?php
echo "Informe o primeiro número: ";
$num1 = (float) trim(fgets(STDIN));
echo "Informe o segundo número: ";
$num2 = (float) trim(fgets(STDIN));
echo "1 - Soma\n2 - Subtração\n3 - Multiplicação\n4 - Divisão\n";
echo "Escolha a operação: ";
$op = (int) trim(fgets(STDIN));

switch ($op) {
    case 1:
        echo "Resultado: " . ($num1 + $num2) . "\n";
        break;
    case 2:
        echo "Resultado: " . ($num1 - $num2) . "\n";
        break;
    case 3:
        echo "Resultado: " . ($num1 * $num2) . "\n";
        break;
    case 4:
        if ($num2 != 0) {
            echo "Resultado: " . ($num1 / $num2) . "\n";
        } else {
            echo "Erro: divisão por zero!\n";
        }
        break;
    default:
        echo "Operação inválida!\n";
}
?>`,
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
    code: `<?php
echo "Informe o nome de usuário: ";
$nome = trim(fgets(STDIN));
echo "Informe a senha: ";
$senha = trim(fgets(STDIN));

if ($nome == "aluno" && $senha == "123456") {
    echo "ACESSO PERMITIDO\n";
} else {
    echo "ACESSO NEGADO\n";
}
?>`,
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
    code: `<?php
echo "Informe o peso (kg): ";
$peso = (float) trim(fgets(STDIN));
echo "Informe a altura (m): ";
$altura = (float) trim(fgets(STDIN));

$imc = $peso / ($altura * $altura);
printf("IMC: %.2f\n", $imc);

if ($imc < 18.5) {
    echo "Abaixo do peso\n";
} elseif ($imc < 25) {
    echo "Peso normal\n";
} elseif ($imc < 30) {
    echo "Sobrepeso\n";
} else {
    echo "Obesidade\n";
}
?>`,
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
    code: `<?php
echo "Informe o código do produto: ";
$codigo = (int) trim(fgets(STDIN));
echo "Informe a quantidade: ";
$quantidade = (int) trim(fgets(STDIN));

switch ($codigo) {
    case 100:
        $valorUnitario = 10.00;
        break;
    case 101:
        $valorUnitario = 12.00;
        break;
    case 102:
        $valorUnitario = 10.00;
        break;
    case 103:
        $valorUnitario = 12.00;
        break;
    case 104:
        $valorUnitario = 15.00;
        break;
    case 105:
        $valorUnitario = 25.00;
        break;
    case 106:
        $valorUnitario = 6.00;
        break;
    default:
        echo "Código inválido!\n";
        exit;
}

$total = $valorUnitario * $quantidade;
printf("Total a pagar: R$ %.2f\n", $total);
?>`,
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
    code: `<?php
echo "Informe a idade: ";
$idade = (int) trim(fgets(STDIN));
echo "Possui autorização dos responsáveis? (1-sim/0-nao): ";
$autorizacao = (int) trim(fgets(STDIN));

if ($idade >= 18 || $autorizacao == 1) {
    echo "ACESSO PERMITIDO\n";
} else {
    echo "ACESSO NEGADO\n";
}
?>`,
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
    code: `<?php
echo "Informe o valor da compra: R$ ";
$valor = (float) trim(fgets(STDIN));
echo "Cliente é membro? (1-sim/0-nao): ";
$membro = (int) trim(fgets(STDIN));

if ($valor >= 200 || $membro == 1) {
    echo "FRETE GRATIS\n";
} else {
    echo "FRETE PAGO\n";
}
?>`,
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
    code: `<?php
echo "Informe a senha: ";
$senha = trim(fgets(STDIN));

if (strlen($senha) >= 8 && $senha != "12345678") {
    echo "SENHA ACEITA\n";
} else {
    echo "SENHA FRACA\n";
}
?>`,
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
    code: `<?php
echo "Informe a temperatura: ";
$temp = (float) trim(fgets(STDIN));
echo "Tem falta de ar? (1-sim/0-nao): ";
$faltaAr = (int) trim(fgets(STDIN));
echo "Informe a idade: ";
$idade = (int) trim(fgets(STDIN));

if ($temp >= 39 || $faltaAr == 1 || $idade >= 65) {
    echo "RISCO ALTO\n";
} else {
    echo "RISCO BAIXO\n";
}
?>`,
    testCases: [
      { values: { temp: 39, faltaAr: 0, idade: 30 }, result: "RISCO ALTO", stepByStep: "temperatura alta → ALTO" },
      { values: { temp: 37, faltaAr: 1, idade: 30 }, result: "RISCO ALTO", stepByStep: "falta de ar → ALTO" },
      { values: { temp: 37, faltaAr: 0, idade: 70 }, result: "RISCO ALTO", stepByStep: "idade ≥ 65 → ALTO" }
    ],
    explanation: "Três condições combinadas com ||."
  },
  {
    id: 15,
    title: "Prioridade de Atendimento",
    statement: "Classifique prioridade: PRIORITÁRIO se for gestante, idoso ou tiver deficiência.",
    input: "ehGestante = falso, ehIdoso = verdadeiro, temDeficiencia = falso",
    output: "PRIORITARIO",
    code: `<?php
echo "É gestante? (1-sim/0-nao): ";
$gestante = (int) trim(fgets(STDIN));
echo "É idoso? (1-sim/0-nao): ";
$idoso = (int) trim(fgets(STDIN));
echo "Tem deficiência? (1-sim/0-nao): ";
$deficiencia = (int) trim(fgets(STDIN));

if ($gestante == 1 || $idoso == 1 || $deficiencia == 1) {
    echo "PRIORITARIO\n";
} else {
    echo "COMUM\n";
}
?>`,
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
    code: `<?php
echo "Informe o total de vendas: R$ ";
$vendas = (float) trim(fgets(STDIN));
echo "É novato? (1-sim/0-nao): ";
$novato = (int) trim(fgets(STDIN));

if ($vendas >= 5000 || ($novato == 1 && $vendas >= 2000)) {
    echo "BONUS\n";
} else {
    echo "SEM BONUS\n";
}
?>`,
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
    code: `<?php
echo "Tem crachá? (1-sim/0-nao): ";
$cracha = (int) trim(fgets(STDIN));
echo "Está na lista autorizada? (1-sim/0-nao): ";
$lista = (int) trim(fgets(STDIN));
echo "Informe o horário (0-23): ";
$horario = (int) trim(fgets(STDIN));

if (($cracha == 1 || $lista == 1) && ($horario >= 8 && $horario <= 20)) {
    echo "ENTRA\n";
} else {
    echo "NAO ENTRA\n";
}
?>`,
    testCases: [
      { values: { cracha: 1, lista: 0, horario: 14 }, result: "ENTRA", stepByStep: "tem crachá e horário OK → ENTRA" },
      { values: { cracha: 0, lista: 0, horario: 14 }, result: "NAO ENTRA", stepByStep: "sem autorização → NÃO ENTRA" },
      { values: { cracha: 1, lista: 0, horario: 22 }, result: "NAO ENTRA", stepByStep: "horário inválido → NÃO ENTRA" }
    ],
    explanation: "Combinação de operadores: autorização (||) e horário (&&)."
  }
];

// Renderiza a seção de conceitos de condicionais em PHP
function renderConceitosCondicionais() {
  return `
    <div class="content-card">
      <h2 class="card-title">🎮 Estruturas de Controle em PHP</h2>
      <p>Em PHP, as estruturas condicionais permitem que o programa tome decisões baseadas em condições.</p>

      <div class="info-callout">
        <span class="info-icon-callout">⚡</span>
        <div><strong>Estruturas Condicionais em PHP:</strong><br>
        • <strong>if</strong> – execução condicional simples<br>
        • <strong>if-else</strong> – dois caminhos possíveis<br>
        • <strong>if-elseif-else</strong> – múltiplas condições<br>
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
      <h2 class="card-title">✅ if-elseif-else - Múltiplas Condições</h2>
      <div class="code-example">
        <div class="code-example-header">
          <span class="code-icon">📝</span>
          <span>Sintaxe</span>
        </div>
        <pre><code>if (condicao1) {
    // ...
} elseif (condicao2) {
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
        <span>📋 Exercícios de Condicionais (PHP)</span>
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
          <span>💻 Código de Resolução (PHP)</span>
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
      <h1 class="page-title"><span>🔀</span> Estruturas Condicionais em PHP</h1>
      <p class="page-subtitle">Aprenda a criar decisões inteligentes com if, else, elseif e switch</p>
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