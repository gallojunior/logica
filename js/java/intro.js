// js/java/intro.js

function renderIntroPage() {
  return `
    <div class="page-header">
      <h1 class="page-title"><span>☕</span> Introdução à Lógica de Programação com Java</h1>
      <p class="page-subtitle">Fundamentos essenciais para começar sua jornada no mundo da programação com Java</p>
    </div>

    <!-- Seção: O que é Java -->
    <div class="content-card">
      <h2 class="card-title">☕ O que é Java?</h2>
      <p>Java é uma linguagem de programação <strong>orientada a objetos, robusta e multiplataforma</strong>, desenvolvida pela Sun Microsystems (atualmente Oracle). É conhecida pelo lema <strong>"Write Once, Run Anywhere"</strong> (Escreva uma vez, execute em qualquer lugar), pois os programas Java compilados geram bytecode que roda na <strong>Java Virtual Machine (JVM)</strong>, presente em praticamente todos os sistemas operacionais.</p>
      <p>É amplamente utilizada em aplicações empresariais, sistemas web, aplicativos Android, e muito mais.</p>
      
      <div class="code-example">
        <div class="code-example-header">
          <span class="code-icon">📝</span>
          <span>Exemplo de programa em Java</span>
        </div>
        <pre><code>public class Main {
    public static void main(String[] args) {
        // Declaração de variáveis
        String nome = "João";
        int idade = 25;
        double altura = 1.75;
        
        // Saída no console
        System.out.println("Olá, meu nome é " + nome);
        System.out.println("Tenho " + idade + " anos e " + altura + "m de altura");
    }
}</code></pre>
      </div>
    </div>

    <!-- Seção: Estrutura de um programa Java -->
    <div class="content-card">
      <h2 class="card-title">🏗️ Estrutura de um Programa Java</h2>
      <p>Um programa Java básico possui a seguinte estrutura:</p>
      <ul style="margin-left: 1.5rem; color: var(--text-secondary);">
        <li><strong>public class NomeDaClasse</strong> – define a classe, que deve ter o mesmo nome do arquivo (.java).</li>
        <li><strong>public static void main(String[] args)</strong> – ponto de entrada do programa.</li>
        <li><strong>System.out.println()</strong> – imprime texto no console.</li>
      </ul>
      <div class="code-example">
        <div class="code-example-header">
          <span class="code-icon">📝</span>
          <span>Estrutura básica</span>
        </div>
        <pre><code>public class MeuPrograma {
    public static void main(String[] args) {
        // Código executado
    }
}</code></pre>
      </div>
    </div>

    <!-- Seção: Variáveis em Java -->
    <div class="content-card">
      <h2 class="card-title">📦 Variáveis em Java</h2>
      <p>Em Java, as variáveis precisam ser declaradas com um tipo específico. Java é uma linguagem <strong>fortemente tipada</strong>.</p>
      <div class="info-callout">
        <span class="info-icon-callout">💡</span>
        <div>
          <strong>Convenções de nomenclatura:</strong>
          <br>• Nomes de variáveis em <strong>camelCase</strong> (primeira letra minúscula)
          <br>• Constantes em <strong>UPPER_SNAKE_CASE</strong>
          <br>• Classes em <strong>PascalCase</strong> (primeira letra maiúscula)
        </div>
      </div>
      
      <div class="code-example">
        <div class="code-example-header">
          <span class="code-icon">📝</span>
          <span>Declaração de variáveis em Java</span>
        </div>
        <pre><code>// Tipos primitivos
int idade = 25;
double altura = 1.75;
char letra = 'A';
boolean aprovado = true;

// Strings (objetos)
String nome = "Maria";

// Constantes
final double PI = 3.14159;</code></pre>
      </div>
    </div>

    <!-- Seção: Tipos de Dados -->
    <div class="content-card">
      <h2 class="card-title">📊 Tipos de Dados em Java</h2>
      <p>Java possui <strong>tipos primitivos</strong> e <strong>tipos por referência</strong> (objetos). Os mais comuns são:</p>
      <div class="types-table">
        <div class="type-row">
          <div class="type-name">int</div>
          <div class="type-desc">Números inteiros (32 bits)</div>
          <div class="type-example"><code>int numero = 42;</code></div>
        </div>
        <div class="type-row">
          <div class="type-name">double</div>
          <div class="type-desc">Números decimais (64 bits)</div>
          <div class="type-example"><code>double preco = 19.99;</code></div>
        </div>
        <div class="type-row">
          <div class="type-name">String</div>
          <div class="type-desc">Cadeia de caracteres (objeto)</div>
          <div class="type-example"><code>String nome = "Java";</code></div>
        </div>
        <div class="type-row">
          <div class="type-name">boolean</div>
          <div class="type-desc">Verdadeiro ou falso</div>
          <div class="type-example"><code>boolean ativo = true;</code></div>
        </div>
        <div class="type-row">
          <div class="type-name">char</div>
          <div class="type-desc">Um único caractere</div>
          <div class="type-example"><code>char letra = 'J';</code></div>
        </div>
        <div class="type-row">
          <div class="type-name">float</div>
          <div class="type-desc">Números decimais (32 bits)</div>
          <div class="type-example"><code>float peso = 70.5f;</code></div>
        </div>
      </div>
    </div>

    <!-- Seção: Entrada e Saída -->
    <div class="content-card">
      <h2 class="card-title">📥📤 Entrada e Saída em Java</h2>
      <div class="io-section">
        <div class="io-card">
          <h3>📤 Saída - System.out</h3>
          <div class="code-mini">
            <pre><code>// Imprime com quebra de linha
System.out.println("Olá mundo!");

// Imprime sem quebra de linha
System.out.print("Olá ");

// Imprime com formatação
System.out.printf("Valor: %.2f", 10.5);</code></pre>
          </div>
        </div>
        
        <div class="io-card">
          <h3>📥 Entrada - Scanner</h3>
          <div class="code-mini">
            <pre><code>import java.util.Scanner;

Scanner scanner = new Scanner(System.in);

System.out.print("Digite sua idade: ");
int idade = scanner.nextInt();

System.out.print("Digite seu nome: ");
String nome = scanner.nextLine();

scanner.close();</code></pre>
          </div>
          <p><small>O Scanner é uma classe que facilita a leitura de dados do teclado.</small></p>
        </div>
      </div>
    </div>

    <!-- Seção: Exemplo Completo -->
    <div class="content-card">
      <h2 class="card-title">🎯 Exemplo Completo</h2>
      <div class="code-example">
        <div class="code-example-header">
          <span class="code-icon">📝</span>
          <span>Programa completo em Java</span>
        </div>
        <pre><code>import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        // Declaração das variáveis
        String nome;
        int idade;
        double altura;
        
        // Criando o Scanner para entrada de dados
        Scanner scanner = new Scanner(System.in);
        
        // Entrada de dados
        System.out.print("Informe seu nome: ");
        nome = scanner.nextLine();
        
        System.out.print("Informe sua idade: ");
        idade = scanner.nextInt();
        
        System.out.print("Informe sua altura: ");
        altura = scanner.nextDouble();
        
        // Limpeza do buffer (após ler número, necessário para evitar problemas)
        scanner.close();
        
        // Saída de dados
        System.out.println("=== DADOS DO USUÁRIO ===");
        System.out.println("Nome: " + nome);
        System.out.println("Idade: " + idade + " anos");
        System.out.println("Altura: " + altura + "m");
    }
}</code></pre>
      </div>
    </div>

    <!-- Call to action -->
    <div class="callout" style="margin-top: 1rem; text-align: center;">
      <p>🚀 <strong>Vamos praticar!</strong> Nos próximos módulos você encontrará exercícios para fixar todos esses conceitos em Java.</p>
      <button class="btn-demo" id="goToHomeBtn">🏠 Voltar para Home</button>
    </div>
  `;
}