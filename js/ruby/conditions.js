const condicionaisExercises = [
  {
    id: 1,
    title: "Verificação de Positivo/Negativo/Zero",
    statement: "Escreva um programa em Ruby que receba um número e determine se ele é positivo, negativo ou zero.",
    input: "num = -5",
    output: "O número é negativo.",
    code: `print "Informe um número: "
num = gets.chomp.to_i

if num > 0
  puts "O número #{num} é POSITIVO"
elsif num < 0
  puts "O número #{num} é NEGATIVO"
else
  puts "O número é ZERO"
end`,
    testCases: [
      { values: { num: 5 }, result: "POSITIVO", stepByStep: "5 > 0 → POSITIVO" },
      { values: { num: -3 }, result: "NEGATIVO", stepByStep: "-3 < 0 → NEGATIVO" },
      { values: { num: 0 }, result: "ZERO", stepByStep: "0 → ZERO" }
    ],
    explanation: "Utilizamos a estrutura if-elsif-else para verificar três possibilidades."
  },
  {
    id: 2,
    title: "Aprovação por Média",
    statement: "Receba três notas, calcule a média e determine se o aluno foi aprovado (média ≥ 7), em recuperação (5 ≤ média < 7) ou reprovado (média < 5).",
    input: "nota1 = 6, nota2 = 7, nota3 = 8",
    output: "Média = 7.0. Aprovado!",
    code: `print "Informe a primeira nota: "
n1 = gets.chomp.to_f
print "Informe a segunda nota: "
n2 = gets.chomp.to_f
print "Informe a terceira nota: "
n3 = gets.chomp.to_f

media = (n1 + n2 + n3) / 3
puts "Média: #{media.round(1)}"

if media >= 7
  puts "APROVADO!"
elsif media >= 5
  puts "RECUPERAÇÃO"
else
  puts "REPROVADO"
end`,
    testCases: [
      { values: { n1: 7, n2: 8, n3: 9 }, result: "APROVADO", stepByStep: "média = 8.0 → APROVADO" },
      { values: { n1: 5, n2: 6, n3: 7 }, result: "RECUPERAÇÃO", stepByStep: "média = 6.0 → RECUPERAÇÃO" },
      { values: { n1: 4, n2: 5, n3: 3 }, result: "REPROVADO", stepByStep: "média = 4.0 → REPROVADO" }
    ],
    explanation: "Calculamos a média e usamos if-elsif-else para classificar."
  },
  {
    id: 3,
    title: "Classificação de Triângulos",
    statement: "Receba três lados e classifique o triângulo em Equilátero, Isósceles ou Escaleno. Se não formar um triângulo válido, informe.",
    input: "a = 5, b = 5, c = 5",
    output: "Triângulo Equilátero",
    code: `print "Informe o primeiro lado: "
a = gets.chomp.to_f
print "Informe o segundo lado: "
b = gets.chomp.to_f
print "Informe o terceiro lado: "
c = gets.chomp.to_f

triangulo_valido = (a + b > c) && (a + c > b) && (b + c > a)

if triangulo_valido
  if a == b && b == c
    puts "Triângulo EQUILÁTERO"
  elsif a == b || a == c || b == c
    puts "Triângulo ISÓSCELES"
  else
    puts "Triângulo ESCALENO"
  end
else
  puts "Os lados NÃO formam um triângulo válido"
end`,
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
    code: `print "Informe o valor total da compra: R$ "
valor = gets.chomp.to_f

if valor >= 500
  valor_final = valor * 0.90
  puts "Valor com desconto de 10%: R$ #{valor_final}"
elsif valor >= 300
  valor_final = valor * 0.95
  puts "Valor com desconto de 5%: R$ #{valor_final}"
else
  puts "Nenhum desconto aplicado. Valor: R$ #{valor}"
end`,
    testCases: [
      { values: { valor: 600 }, result: 540, stepByStep: "≥500 → 10% → 540" },
      { values: { valor: 400 }, result: 380, stepByStep: "≥300 → 5% → 380" },
      { values: { valor: 200 }, result: 200, stepByStep: "sem desconto → 200" }
    ],
    explanation: "Faixas de desconto com if-elsif-else."
  },
  {
    id: 5,
    title: "Verificação de Ano Bissexto",
    statement: "Determine se um ano é bissexto. Regras: divisível por 4 e não divisível por 100, ou divisível por 400.",
    input: "ano = 2024",
    output: "2024 é bissexto",
    code: `print "Informe o ano: "
ano = gets.chomp.to_i

bissexto = (ano % 4 == 0 && ano % 100 != 0) || (ano % 400 == 0)

if bissexto
  puts "#{ano} é BISSEXTO"
else
  puts "#{ano} NÃO é bissexto"
end`,
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
    code: `print "Informe a idade: "
idade = gets.chomp.to_i

if idade < 0
  puts "Idade inválida!"
elsif idade <= 12
  puts "CRIANÇA"
elsif idade <= 17
  puts "ADOLESCENTE"
elsif idade <= 59
  puts "ADULTO"
else
  puts "IDOSO"
end`,
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
    code: `print "Informe o primeiro número: "
num1 = gets.chomp.to_f
print "Informe o segundo número: "
num2 = gets.chomp.to_f
puts "1 - Soma\n2 - Subtração\n3 - Multiplicação\n4 - Divisão"
print "Escolha a operação: "
op = gets.chomp.to_i

case op
when 1
  puts "Resultado: #{num1 + num2}"
when 2
  puts "Resultado: #{num1 - num2}"
when 3
  puts "Resultado: #{num1 * num2}"
when 4
  if num2 != 0
    puts "Resultado: #{num1 / num2}"
  else
    puts "Erro: divisão por zero!"
  end
else
  puts "Operação inválida!"
end`,
    testCases: [
      { values: { num1: 10, num2: 5, op: 3 }, result: 50, stepByStep: "op=3 → multiplicação → 50" },
      { values: { num1: 10, num2: 5, op: 1 }, result: 15, stepByStep: "op=1 → soma → 15" },
      { values: { num1: 10, num2: 5, op: 4 }, result: 2, stepByStep: "op=4 → divisão → 2" }
    ],
    explanation: "Estrutura case-when para múltiplas opções."
  },
  {
    id: 8,
    title: "Verificação de Usuário e Senha",
    statement: "Verifique se o nome de usuário e senha estão corretos. Usuário: 'aluno', Senha: '123456'.",
    input: "nome = 'aluno', senha = '123456'",
    output: "Acesso Permitido",
    code: `print "Informe o nome de usuário: "
nome = gets.chomp
print "Informe a senha: "
senha = gets.chomp

if nome == "aluno" && senha == "123456"
  puts "ACESSO PERMITIDO"
else
  puts "ACESSO NEGADO"
end`,
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
    code: `print "Informe o peso (kg): "
peso = gets.chomp.to_f
print "Informe a altura (m): "
altura = gets.chomp.to_f

imc = peso / (altura ** 2)
puts "IMC: #{imc.round(2)}"

if imc < 18.5
  puts "Abaixo do peso"
elsif imc < 25
  puts "Peso normal"
elsif imc < 30
  puts "Sobrepeso"
else
  puts "Obesidade"
end`,
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
    code: `print "Informe o código do produto: "
codigo = gets.chomp.to_i
print "Informe a quantidade: "
quantidade = gets.chomp.to_i

valor_unitario = case codigo
                when 100 then 10.00
                when 101 then 12.00
                when 102 then 10.00
                when 103 then 12.00
                when 104 then 15.00
                when 105 then 25.00
                when 106 then 6.00
                else
                  puts "Código inválido!"
                  exit
                end

total = valor_unitario * quantidade
puts "Total a pagar: R$ #{total}"`,
    testCases: [
      { values: { codigo: 102, quantidade: 2 }, result: 20, stepByStep: "código 102 → R$10 × 2 = R$20" },
      { values: { codigo: 100, quantidade: 3 }, result: 30, stepByStep: "código 100 → R$10 × 3 = R$30" }
    ],
    explanation: "Estrutura case-when para selecionar valor unitário."
  },
  {
    id: 11,
    title: "Acesso à Casa Noturna",
    statement: "Sistema de controle de acesso: acesso permitido se idade ≥ 18 ou possuir autorização dos responsáveis.",
    input: "idade = 17, autorizacao = verdadeiro",
    output: "ACESSO PERMITIDO",
    code: `print "Informe a idade: "
idade = gets.chomp.to_i
print "Possui autorização dos responsáveis? (S/N): "
autorizacao = gets.chomp.upcase == "S"

if idade >= 18 || autorizacao
  puts "ACESSO PERMITIDO"
else
  puts "ACESSO NEGADO"
end`,
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
    code: `print "Informe o valor da compra: R$ "
valor = gets.chomp.to_f
print "Cliente é membro? (S/N): "
membro = gets.chomp.upcase == "S"

if valor >= 200 || membro
  puts "FRETE GRATIS"
else
  puts "FRETE PAGO"
end`,
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
    code: `print "Informe a senha: "
senha = gets.chomp

if senha.length >= 8 && senha != "12345678"
  puts "SENHA ACEITA"
else
  puts "SENHA FRACA"
end`,
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
    code: `print "Informe a temperatura: "
temp = gets.chomp.to_f
print "Tem falta de ar? (S/N): "
falta_ar = gets.chomp.upcase == "S"
print "Informe a idade: "
idade = gets.chomp.to_i

if temp >= 39 || falta_ar || idade >= 65
  puts "RISCO ALTO"
else
  puts "RISCO BAIXO"
end`,
    testCases: [
      { values: { temp: 39, falta_ar: false, idade: 30 }, result: "RISCO ALTO", stepByStep: "temperatura alta → ALTO" },
      { values: { temp: 37, falta_ar: true, idade: 30 }, result: "RISCO ALTO", stepByStep: "falta de ar → ALTO" },
      { values: { temp: 37, falta_ar: false, idade: 70 }, result: "RISCO ALTO", stepByStep: "idade ≥ 65 → ALTO" }
    ],
    explanation: "Três condições combinadas com ||."
  },
  {
    id: 15,
    title: "Prioridade de Atendimento",
    statement: "Classifique prioridade: PRIORITÁRIO se for gestante, idoso ou tiver deficiência.",
    input: "ehGestante = falso, ehIdoso = verdadeiro, temDeficiencia = falso",
    output: "PRIORITARIO",
    code: `print "É gestante? (S/N): "
gestante = gets.chomp.upcase == "S"
print "É idoso? (S/N): "
idoso = gets.chomp.upcase == "S"
print "Tem deficiência? (S/N): "
deficiencia = gets.chomp.upcase == "S"

if gestante || idoso || deficiencia
  puts "PRIORITARIO"
else
  puts "COMUM"
end`,
    testCases: [
      { values: { gestante: true, idoso: false, deficiencia: false }, result: "PRIORITARIO", stepByStep: "gestante → PRIORITÁRIO" },
      { values: { gestante: false, idoso: true, deficiencia: false }, result: "PRIORITARIO", stepByStep: "idoso → PRIORITÁRIO" },
      { values: { gestante: false, idoso: false, deficiencia: true }, result: "PRIORITARIO", stepByStep: "deficiência → PRIORITÁRIO" }
    ],
    explanation: "Operador || para verificar se há pelo menos uma condição."
  },
  {
    id: 16,
    title: "Bônus para Vendedores",
    statement: "Conceder bônus se vendas ≥ R$5000 OU (for novato E vendas ≥ R$2000).",
    input: "vendas = 2500, novato = verdadeiro",
    output: "BONUS",
    code: `print "Informe o total de vendas: R$ "
vendas = gets.chomp.to_f
print "É novato? (S/N): "
novato = gets.chomp.upcase == "S"

if vendas >= 5000 || (novato && vendas >= 2000)
  puts "BONUS"
else
  puts "SEM BONUS"
end`,
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
    code: `print "Tem crachá? (S/N): "
cracha = gets.chomp.upcase == "S"
print "Está na lista autorizada? (S/N): "
lista = gets.chomp.upcase == "S"
print "Informe o horário (0-23): "
horario = gets.chomp.to_i

if (cracha || lista) && (horario >= 8 && horario <= 20)
  puts "ENTRA"
else
  puts "NAO ENTRA"
end`,
    testCases: [
      { values: { cracha: true, lista: false, horario: 14 }, result: "ENTRA", stepByStep: "tem crachá e horário OK → ENTRA" },
      { values: { cracha: false, lista: false, horario: 14 }, result: "NAO ENTRA", stepByStep: "sem autorização → NÃO ENTRA" },
      { values: { cracha: true, lista: false, horario: 22 }, result: "NAO ENTRA", stepByStep: "horário inválido → NÃO ENTRA" }
    ],
    explanation: "Combinação de operadores: autorização (||) e horário (&&)."
  }
];

// Renderiza a seção de conceitos de condicionais em Ruby
function renderConceitosCondicionais() {
  return `
    <div class="content-card">
      <h2 class="card-title">🎮 Estruturas de Controle em Ruby</h2>
      <p>Em Ruby, as estruturas condicionais são fundamentais para criar programas que tomam decisões.</p>

      <div class="info-callout">
        <span class="info-icon-callout">⚡</span>
        <div><strong>Estruturas Condicionais em Ruby:</strong><br>
        • <strong>if</strong> – execução condicional simples<br>
        • <strong>if-else</strong> – dois caminhos possíveis<br>
        • <strong>if-elsif-else</strong> – múltiplas condições<br>
        • <strong>unless</strong> – executa se condição for falsa<br>
        • <strong>case-when</strong> – múltiplas opções baseadas em valor</div>
      </div>
    </div>

    <div class="content-card">
      <h2 class="card-title">✅ if - Execução Condicional</h2>
      <div class="code-example">
        <div class="code-example-header">
          <span class="code-icon">📝</span>
          <span>Sintaxe do if</span>
        </div>
        <pre><code>if condicao
  # Executa se condição for true
end</code></pre>
      </div>
    </div>

    <div class="content-card">
      <h2 class="card-title">✅ if-else - Dois Caminhos</h2>
      <div class="code-example">
        <div class="code-example-header">
          <span class="code-icon">📝</span>
          <span>Sintaxe do if-else</span>
        </div>
        <pre><code>if condicao
  # Executa se true
else
  # Executa se false
end</code></pre>
      </div>
    </div>

    <div class="content-card">
      <h2 class="card-title">✅ if-elsif-else - Múltiplas Condições</h2>
      <div class="code-example">
        <div class="code-example-header">
          <span class="code-icon">📝</span>
          <span>Sintaxe</span>
        </div>
        <pre><code>if condicao1
  # ...
elsif condicao2
  # ...
else
  # ...
end</code></pre>
      </div>
    </div>

    <div class="content-card">
      <h2 class="card-title">✅ unless - Condição Negativa</h2>
      <div class="code-example">
        <div class="code-example-header">
          <span class="code-icon">📝</span>
          <span>Sintaxe do unless</span>
        </div>
        <pre><code>unless condicao
  # Executa se condição for false
end</code></pre>
      </div>
    </div>

    <div class="content-card">
      <h2 class="card-title">✅ case-when - Múltiplas Opções</h2>
      <div class="code-example">
        <div class="code-example-header">
          <span class="code-icon">📝</span>
          <span>Sintaxe do case</span>
        </div>
        <pre><code>case variavel
when valor1
  # ...
when valor2
  # ...
else
  # ...
end</code></pre>
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
        <span>📋 Exercícios de Condicionais (Ruby)</span>
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
          <span>💻 Código de Resolução (Ruby)</span>
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
      <h1 class="page-title"><span>🔀</span> Estruturas Condicionais em Ruby</h1>
      <p class="page-subtitle">Aprenda a criar decisões inteligentes com if, else, unless e case</p>
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