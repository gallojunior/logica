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