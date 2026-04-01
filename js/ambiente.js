// ========== PÁGINA AMBIENTE ==========

// Dados de instalação por linguagem
const ambienteData = {
    portugol: {
        nome: "Portugol Studio",
        icone: "🇵🇹",
        descricao: "Ambiente ideal para iniciantes, com sintaxe em português. Perfeito para aprender lógica de programação sem se preocupar com detalhes de sintaxe complexa.",
        sistemas: ["Windows", "macOS", "Linux"],
        downloadLink: "https://univali-lite.github.io/Portugol-Studio/",
        documentacao: "https://portugol.dev/",
        compiladorOnline: "https://portugol.dev/",
        instalacao: [
            "É possível usar a versão WEBStudio no link da  documentação",
            "Para uso local, clique no link de Download acima",
            "Na página clique no botão 'Download'",
            "Execute o arquivo baixado e siga as instruções do instalador",
            "Após a instalação, abra o programa e clique em 'Novo Programa' para começar"
        ],
        dicas: [
            "Use F9 para executar seu programa rapidamente",
            "O Portugol Studio já vem com exemplos prontos na pasta 'Amostras'",
            "A sintaxe é muito similar ao português, facilitando o aprendizado",
            "Você pode usar o depurador (F8) para acompanhar a execução passo a passo"
        ],
        exemplo: `programa {
  funcao inicio() {
    escreva("Olá, mundo! Bem-vindo ao Portugol Studio!")
  }
}`
    },
    javascript: {
        nome: "JavaScript",
        icone: "🟨",
        descricao: "Linguagem da web, essencial para front-end e back-end (Node.js). Perfeita para quem quer criar aplicações interativas.",
        sistemas: ["Windows", "macOS", "Linux"],
        downloadLink: "https://nodejs.org/",
        documentacao: "https://developer.mozilla.org/pt-BR/docs/Web/JavaScript",
        compiladorOnline: "https://onecompiler.com/javascript",
        instalacao: [
            "Para front-end: apenas um navegador (Chrome, Firefox) e um editor de código",
            "Para back-end com Node.js: acesse https://nodejs.org/",
            "Baixe a versão LTS (Long Term Support) recomendada",
            "Execute o instalador e siga as instruções padrão",
            "Após instalar, abra o terminal e digite 'node --version' para confirmar"
        ],
        dicas: [
            "Use o VS Code com extensões como 'JavaScript (ES6)' e 'Node.js Exec'",
            "Para testar rapidamente, use o console do navegador (F12)",
            "Com Node.js, execute arquivos .js com 'node arquivo.js'",
            "Instale bibliotecas usando 'npm install nome-da-biblioteca'"
        ],
        exemplo: `// Meu primeiro programa em JavaScript
console.log("Olá, mundo! Bem-vindo ao JavaScript!");

// Declarando variáveis
const nome = "Aluno";
console.log(\`Olá, \${nome}!\`);`
    },
    csharp: {
        nome: "C#",
        icone: "🔷",
        descricao: "Linguagem moderna da Microsoft, amplamente usada em desenvolvimento de jogos (Unity), aplicações desktop e web.",
        sistemas: ["Windows", "macOS", "Linux"],
        downloadLink: "https://dotnet.microsoft.com/download",
        documentacao: "https://learn.microsoft.com/pt-br/dotnet/csharp/",
        compiladorOnline: "https://dotnetfiddle.net",
        instalacao: [
            "Acesse https://dotnet.microsoft.com/download",
            "Baixe o SDK .NET mais recente (versão LTS recomendada)",
            "Execute o instalador e siga as instruções",
            "Após a instalação, abra o terminal e digite 'dotnet --version' para confirmar",
            "Para criar um novo projeto: 'dotnet new console -n MeuProjeto'"
        ],
        dicas: [
            "Use Visual Studio Community (Windows) ou VS Code com extensões C#",
            "Para compilar: 'dotnet build' e executar: 'dotnet run'",
            "O C# é uma linguagem fortemente tipada e orientada a objetos",
            "A Unity (desenvolvimento de jogos) usa C# como linguagem principal"
        ],
        exemplo: `// Meu primeiro programa em C#
using System;

class Program
{
    static void Main()
    {
        Console.WriteLine("Olá, mundo! Bem-vindo ao C#!");
        
        string nome = "Aluno";
        Console.WriteLine($"Olá, {nome}!");
    }
}`
    },
    python: {
        nome: "Python",
        icone: "🐍",
        descricao: "Linguagem versátil e fácil de aprender, com sintaxe limpa. Ideal para ciência de dados, automação e web.",
        sistemas: ["Windows", "macOS", "Linux"],
        downloadLink: "https://www.python.org/downloads/",
        documentacao: "https://docs.python.org/pt-br/3/",
        compiladorOnline: "https://onecompiler.com/python",
        instalacao: [
            "Acesse https://www.python.org/downloads/",
            "Baixe a versão mais recente (recomendado: Python 3.x)",
            "Durante a instalação, MARQUE a opção 'Add Python to PATH'",
            "Conclua a instalação seguindo as instruções",
            "Após instalar, abra o terminal e digite 'python --version' para confirmar"
        ],
        dicas: [
            "Use VS Code ou PyCharm como editor principal",
            "Para instalar bibliotecas, use 'pip install nome_da_biblioteca'",
            "Execute arquivos .py com 'python arquivo.py'",
            "Python é ótimo para prototipagem rápida e automação"
        ],
        exemplo: `# Meu primeiro programa em Python
print("Olá, mundo! Bem-vindo ao Python!")

# Declarando variáveis
nome = "Aluno"
print(f"Olá, {nome}!")`
    },
    java: {
        nome: "Java",
        icone: "☕",
        descricao: "Linguagem robusta, orientada a objetos, amplamente usada em empresas, aplicações desktop, web e Android.",
        sistemas: ["Windows", "macOS", "Linux"],
        downloadLink: "https://www.java.com/pt-BR/download/",
        documentacao: "https://docs.oracle.com/en/java/",
        compiladorOnline: "https://www.online-java.com/",
        instalacao: [
            "Acesse https://www.java.com/pt-BR/download/",
            "Baixe o JDK (Java Development Kit) mais recente",
            "Execute o instalador e siga as instruções padrão",
            "Configure a variável de ambiente JAVA_HOME (veja a documentação para seu SO)",
            "Após instalar, abra o terminal e digite 'java -version' para confirmar"
        ],
        dicas: [
            "Use IntelliJ IDEA, Eclipse ou VS Code com extensões Java",
            "O código Java precisa ser compilado: 'javac Arquivo.java' e executado: 'java Arquivo'",
            "O nome da classe deve ser igual ao nome do arquivo",
            "Java é multiplataforma: escreva uma vez, execute em qualquer lugar!"
        ],
        exemplo: `// Meu primeiro programa em Java
public class Main {
    public static void main(String[] args) {
        System.out.println("Olá, mundo! Bem-vindo ao Java!");
        
        String nome = "Aluno";
        System.out.println("Olá, " + nome + "!");
    }
}`
    },
    go: {
        nome: "Go",
        icone: "🐹",
        descricao: "Linguagem de programação criada pela Google, conhecida por sua simplicidade, concorrência nativa e excelente desempenho.",
        sistemas: ["Windows", "macOS", "Linux"],
        downloadLink: "https://go.dev/dl/",
        documentacao: "https://go.dev/doc/",
        compiladorOnline: "https://go.dev/play/",
        instalacao: [
            "Acesse https://go.dev/dl/",
            "Baixe o instalador para o seu sistema operacional",
            "Execute o instalador e siga as instruções padrão",
            "Após instalar, abra o terminal e digite 'go version' para confirmar"
        ],
        dicas: [
            "Use o VS Code com a extensão oficial Go",
            "Execute programas com 'go run arquivo.go'",
            "Compile com 'go build arquivo.go'",
            "Formate automaticamente seu código com 'go fmt'"
        ],
        exemplo: `package main

import "fmt"

func main() {
    fmt.Println("Olá, mundo! Bem-vindo ao Go!")
    nome := "Aluno"
    fmt.Printf("Olá, %s!\\n", nome)
}`
    },
    rust: {
        nome: "Rust",
        icone: "🦀",
        descricao: "Linguagem de programação de sistemas focada em segurança, velocidade e concorrência. Possui gerenciamento de memória sem garbage collector, garantindo segurança e performance.",
        sistemas: ["Windows", "macOS", "Linux"],
        downloadLink: "https://www.rust-lang.org/tools/install",
        documentacao: "https://doc.rust-lang.org/book/",
        compiladorOnline: "https://play.rust-lang.org/",
        instalacao: [
            "Acesse https://www.rust-lang.org/tools/install",
            "Siga as instruções para seu sistema operacional (geralmente via rustup)",
            "Para Linux/macOS: execute 'curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh'",
            "Para Windows: baixe e execute o instalador rustup-init.exe",
            "Após instalar, abra o terminal e digite 'rustc --version' para confirmar"
        ],
        dicas: [
            "Use VS Code com a extensão 'rust-analyzer' para melhor suporte",
            "Compile com 'rustc arquivo.rs' ou use 'cargo run' para projetos",
            "Cargo é o gerenciador de pacotes e build system do Rust",
            "A linguagem enfatiza segurança de memória sem penalidade de performance"
        ],
        exemplo: `// Meu primeiro programa em Rust
fn main() {
    println!("Olá, mundo! Bem-vindo ao Rust!");
    
    let nome = "Aluno";
    println!("Olá, {}!", nome);
}`
    },
    ruby: {
        nome: "Ruby",
        icone: "💎",
        descricao: "Linguagem dinâmica, elegante e produtiva, famosa pelo framework Ruby on Rails. Ideal para desenvolvimento web e automação.",
        sistemas: ["Windows", "macOS", "Linux"],
        downloadLink: "https://www.ruby-lang.org/pt/downloads/",
        documentacao: "https://www.ruby-lang.org/pt/documentation/",
        compiladorOnline: "https://www.mycompiler.io/pt/new/ruby",
        instalacao: [
            "Acesse https://www.ruby-lang.org/pt/downloads/",
            "Escolha o instalador para seu sistema operacional (Windows: RubyInstaller; macOS: já vem instalado ou use Homebrew; Linux: use o gerenciador de pacotes)",
            "Execute o instalador e siga as instruções",
            "Após instalar, abra o terminal e digite 'ruby -v' para confirmar a versão"
        ],
        dicas: [
            "Use o IRB (Interactive Ruby) para testar comandos rapidamente: 'irb' no terminal",
            "Execute programas com 'ruby arquivo.rb'",
            "Instale gems (bibliotecas) com 'gem install nome_da_gem'",
            "O Ruby on Rails é um framework web poderoso para construir aplicações rapidamente"
        ],
        exemplo: `# Meu primeiro programa em Ruby
puts "Olá, mundo! Bem-vindo ao Ruby!"

nome = "Aluno"
puts "Olá, #{nome}!"`
    },
    // No objeto ambienteData, adicione:
    php: {
        nome: "PHP",
        icone: "🐘",
        descricao: "Linguagem de script amplamente utilizada para desenvolvimento web, com foco em simplicidade e integração com servidores.",
        sistemas: ["Windows", "macOS", "Linux"],
        downloadLink: "https://www.php.net/downloads",
        documentacao: "https://www.php.net/docs.php",
        compiladorOnline: "https://www.programiz.com/php/online-compiler/",
        instalacao: [
            "Para ambiente completo, instale um servidor local como XAMPP, WAMP ou MAMP.",
            "Ou baixe o PHP diretamente de https://www.php.net/downloads",
            "Após instalar, verifique no terminal com 'php -v'",
            "Crie arquivos .php e execute com 'php arquivo.php' no terminal ou via servidor web"
        ],
        dicas: [
            "Use um servidor local como XAMPP para testes rápidos.",
            "A sintaxe é semelhante a C e muito utilizada em conjunto com HTML.",
            "Execute scripts no terminal com 'php script.php'.",
            "Para iniciar um servidor embutido: 'php -S localhost:8000'"
        ],
        exemplo: `<?php
// Meu primeiro programa em PHP
$nome = "Aluno";
echo "Olá, mundo! Bem-vindo ao PHP!\\n";
echo "Olá, $nome!";
?>`
    },
    r: {
        nome: "R",
        icone: "📊",
        descricao: "Linguagem de programação voltada para análise estatística, ciência de dados e visualização.",
        sistemas: ["Windows", "macOS", "Linux"],
        downloadLink: "https://cran.r-project.org/",
        documentacao: "https://cran.r-project.org/manuals.html",
        compiladorOnline: "https://rdrr.io/snippets/",
        instalacao: [
            "Acesse https://cran.r-project.org/",
            "Baixe o instalador para seu sistema operacional",
            "Execute o instalador e siga as instruções",
            "Após instalar, abra o terminal e digite `R` para iniciar o console"
        ],
        dicas: [
            "Use o RStudio como IDE para maior produtividade.",
            "No terminal, execute scripts com `Rscript script.r`.",
            "Para ajuda, use `?funcao` no console.",
            "R trabalha nativamente com vetores, listas e data frames."
        ],
        exemplo: `# Meu primeiro programa em R
nome <- "Aluno"
cat("Olá, mundo! Bem-vindo ao R!\\n")
cat("Olá,", nome, "!\\n")`
    },
    c_cpp: {
        nome: "C/C++",
        icone: "⚙️",
        descricao: "Linguagens poderosas e de alto desempenho, usadas em sistemas operacionais, jogos, embarcados e aplicações críticas. C é procedural, C++ adiciona orientação a objetos e templates.",
        sistemas: ["Windows", "macOS", "Linux"],
        downloadLink: "https://gcc.gnu.org/",
        documentacao: "https://en.cppreference.com/w/",
        compiladorOnline: "https://www.onlinegdb.com/",
        instalacao: [
            "Para Windows: instale MinGW ou use o compilador do Visual Studio (MSVC).",
            "Para macOS: instale as ferramentas de linha de comando do Xcode: `xcode-select --install`.",
            "Para Linux: instale o GCC com `sudo apt install gcc g++` (Ubuntu/Debian).",
            "Verifique a instalação com `gcc --version` e `g++ --version`."
        ],
        dicas: [
            "Use um editor como VS Code com extensões C/C++.",
            "Para compilar programas C: `gcc arquivo.c -o programa`.",
            "Para compilar programas C++: `g++ arquivo.cpp -o programa`.",
            "Execute com `./programa` (Linux/macOS) ou `programa.exe` (Windows).",
            "Para depuração, use `gdb` ou a ferramenta de depuração do seu IDE."
        ],
        exemplo: `#include <stdio.h>

int main() {
    printf("Olá, mundo! Bem-vindo ao C/C++!\\n");
    char nome[50];
    printf("Digite seu nome: ");
    scanf("%s", nome);
    printf("Olá, %s!\\n", nome);
    return 0;
}`
    }
};

// Estado da página ambiente
let currentAmbienteLanguage = 'portugol';

// Renderiza a página completa de ambiente
function renderAmbientePage() {
    const langData = ambienteData[currentLanguage] || ambienteData.portugol;

    return `
        <div class="page-header">
            <h1 class="page-title">🖥️ Ambiente de Desenvolvimento</h1>
            <p class="page-subtitle">Configure seu computador para começar a programar em ${getLanguageDisplayName()}</p>
        </div>
        
        <div class="ambiente-content">
            <div class="ambiente-header">
                <div class="ambiente-title">
                    <span class="ambiente-icon-large">${langData.icone}</span>
                    <h2>${langData.nome}</h2>
                </div>
                <div class="ambiente-links">
                    <a href="${langData.downloadLink}" target="_blank" class="btn-download-ambiente">
                        ⬇️ Download
                    </a>
                    <a href="${langData.compiladorOnline}" target="_blank" class="btn-download-ambiente">
                        🌐 Compilador Online
                    </a>
                    <a href="${langData.documentacao}" target="_blank" class="btn-docs-ambiente">
                        📚 Documentação
                    </a>
                </div>
            </div>
            
            <p class="ambiente-desc">${langData.descricao}</p>
            
            <div class="ambiente-grid">
                <div class="ambiente-card">
                    <h3>💻 Sistemas Operacionais</h3>
                    <div class="os-list">
                        ${langData.sistemas.map(os => {
        let icon = os === "Windows" ? "🪟" : os === "macOS" ? "🍎" : "🐧";
        return `<span class="os-item">${icon} ${os}</span>`;
    }).join('')}
                    </div>
                </div>
                
                <div class="ambiente-card">
                    <h3>📦 Passo a Passo</h3>
                    <ol class="install-steps">
                        ${langData.instalacao.map(step => `<li>${step}</li>`).join('')}
                    </ol>
                </div>
                
                <div class="ambiente-card">
                    <h3>💡 Dicas Rápidas</h3>
                    <ul class="tips-list">
                        ${langData.dicas.map(dica => `<li>${dica}</li>`).join('')}
                    </ul>
                </div>
            </div>
            
            <div class="code-example-ambiente">
                <div class="code-header-ambiente">
                    <span class="code-icon">${langData.icone}</span>
                    <span>Exemplo de código em ${langData.nome}</span>
                    <button class="copy-ambiente-btn" data-code="${langData.exemplo.replace(/"/g, '&quot;')}">📋 Copiar</button>
                </div>
                <pre><code>${escapeHtml(langData.exemplo)}</code></pre>
            </div>
            
            <div class="info-callout" style="margin: 1.5rem">
                <span class="info-icon-callout">🚀</span>
                <div>
                    <strong>Próximos passos:</strong> Após instalar o ambiente, comece praticando com os exercícios disponíveis nos módulos de 
                    <strong>Operadores</strong>, <strong>Condicionais</strong> e <strong>Repetição</strong>.
                    <br>Qualquer dúvida, consulte a documentação oficial ou a comunidade da linguagem!
                </div>
            </div>
        </div>
    `;
}

function getLanguageColorByKey(lang) {
    const colors = {
        portugol: "#10b981",
        javascript: "#f7df1e",
        csharp: "#9b4d96",
        python: "#3776ab"
    };
    return colors[lang] || "#10b981";
}