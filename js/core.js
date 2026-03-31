// ========== FUNCIONALIDADE DE TEMA CLARO/ESCURO ==========
function initTheme() {
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'dark') {
    document.body.classList.add('dark-theme');
    updateThemeButton('dark');
  } else {
    document.body.classList.remove('dark-theme');
    updateThemeButton('light');
  }
}

function updateThemeButton(theme) {
  const themeBtn = document.getElementById('themeToggle');
  if (!themeBtn) return;

  if (theme === 'dark') {
    themeBtn.innerHTML = '<span class="icon">☀️</span><span>Modo Claro</span>';
  } else {
    themeBtn.innerHTML = '<span class="icon">🌙</span><span>Modo Escuro</span>';
  }
}

function toggleTheme() {
  if (document.body.classList.contains('dark-theme')) {
    document.body.classList.remove('dark-theme');
    localStorage.setItem('theme', 'light');
    updateThemeButton('light');
  } else {
    document.body.classList.add('dark-theme');
    localStorage.setItem('theme', 'dark');
    updateThemeButton('dark');
  }
}

// ========== FUNCIONALIDADE DE SELEÇÃO DE LINGUAGEM ==========
let currentLanguage = 'portugol';

// Função para salvar o estado completo da página atual
function saveCurrentPageState() {
  // Salva a página atual (vinda do main.js)
  const currentPageId = window.currentPage || 'home';
  localStorage.setItem('lastPage', currentPageId);
  
  // Salva os estados específicos de cada página
  localStorage.setItem('operators_subpage', window.currentOperadorSubpage || 'conceitos');
  localStorage.setItem('operators_exercise', window.currentOperadorExercise || 1);
  localStorage.setItem('conditionals_subpage', window.currentCondicionalSubpage || 'conceitos');
  localStorage.setItem('conditionals_exercise', window.currentCondicionalExercise || 1);
  localStorage.setItem('loops_subpage', window.currentRepeticaoSubpage || 'conceitos');
  localStorage.setItem('loops_exercise', window.currentRepeticaoExercise || 1);
}

// Função para restaurar o estado da página
function restorePageState() {
  const lastPage = localStorage.getItem('lastPage') || 'home';
  
  // Restaura os estados específicos
  window.currentOperadorSubpage = localStorage.getItem('operators_subpage') || 'conceitos';
  window.currentOperadorExercise = parseInt(localStorage.getItem('operators_exercise')) || 1;
  window.currentCondicionalSubpage = localStorage.getItem('conditionals_subpage') || 'conceitos';
  window.currentCondicionalExercise = parseInt(localStorage.getItem('conditionals_exercise')) || 1;
  window.currentRepeticaoSubpage = localStorage.getItem('loops_subpage') || 'conceitos';
  window.currentRepeticaoExercise = parseInt(localStorage.getItem('loops_exercise')) || 1;
  
  return lastPage;
}

function initLanguageSelector() {
  const languageSelect = document.getElementById('language-select');
  if (!languageSelect) return;
  
  const savedLanguage = localStorage.getItem('language');
  if (savedLanguage) {
    currentLanguage = savedLanguage;
    languageSelect.value = savedLanguage;
  }
  
  // Remove listener antigo se existir
  if (languageSelect._changeListener) {
    languageSelect.removeEventListener('change', languageSelect._changeListener);
  }
  
  const changeListener = (e) => {
    const selectedLanguage = e.target.value;
    if (selectedLanguage === currentLanguage) return;
    
    // SALVA O ESTADO ANTES DE TROCAR A LINGUAGEM
    saveCurrentPageState();
    
    currentLanguage = selectedLanguage;
    localStorage.setItem('language', selectedLanguage);
    
    // Limpa o estado das páginas
    clearLanguageState();
    
    // Recarrega a página
    window.location.reload();
  };
  
  languageSelect.addEventListener('change', changeListener);
  languageSelect._changeListener = changeListener;
}

// Função para limpar o estado das páginas antes de trocar de linguagem
function clearLanguageState() {
  // Remove as funções específicas da linguagem do escopo global
  delete window.renderIntroPage;
  delete window.renderConceitosOperadores;
  delete window.renderExerciciosOperadores;
  delete window.renderOperatorsPage;
  delete window.renderConceitosCondicionais;
  delete window.renderExerciciosCondicionais;
  delete window.renderConditionalsPage;
  delete window.renderConceitosRepeticao;
  delete window.renderExerciciosRepeticao;
  delete window.renderLoopsPage;
  
  // Remove os scripts antigos
  const oldScripts = document.querySelectorAll('script[data-lang]');
  oldScripts.forEach(script => script.remove());
}

function loadLanguageScripts(language) {
  // Remove scripts antigos
  const oldScripts = document.querySelectorAll('script[data-lang]');
  oldScripts.forEach(script => script.remove());
  
  const scripts = [];
  
  if (language === 'portugol') {
    scripts.push('./js/portugol/operators.js');
    scripts.push('./js/portugol/conditions.js');
    scripts.push('./js/portugol/loops.js');
    scripts.push('./js/portugol/intro.js');
  } else if (language === 'javascript') {
    scripts.push('./js/javascript/operators.js');
    scripts.push('./js/javascript/conditions.js');
    scripts.push('./js/javascript/loops.js');
    scripts.push('./js/javascript/intro.js');
  } else if (language === 'csharp') {
    scripts.push('./js/csharp/operators.js');
    scripts.push('./js/csharp/conditions.js');
    scripts.push('./js/csharp/loops.js');
    scripts.push('./js/csharp/intro.js');
  } else if (language === 'python') {
    scripts.push('./js/python/operators.js');
    scripts.push('./js/python/conditions.js');
    scripts.push('./js/python/loops.js');
    scripts.push('./js/python/intro.js');
  }
  scripts.push('./js/ambiente.js');

  return scripts;
}

// ========== CONFIGURAÇÕES DE CORES POR LINGUAGEM ==========
const languageColors = {
  portugol: {
    primary: "#10b981",
    secondary: "#047857",
    gradient: "linear-gradient(135deg, #10b981, #047857)",
    light: "#d1fae5",
    dark: "#065f46"
  },
  javascript: {
    primary: "#f7df1e",
    secondary: "#e6c300",
    gradient: "linear-gradient(135deg, #f7df1e, #e6c300)",
    light: "#fef9c3",
    dark: "#ca8a04"
  },
  csharp: {
    primary: "#9b4d96",
    secondary: "#7a2e73",
    gradient: "linear-gradient(135deg, #9b4d96, #7a2e73)",
    light: "#f3e8ff",
    dark: "#6b21a5"
  },
  python: {
    primary: "#3776ab",
    secondary: "#ffd43b",
    gradient: "linear-gradient(135deg, #3776ab, #ffd43b)",
    light: "#e6f4ff",
    dark: "#1e40af"
  }
};

function getLanguageColor() {
  return languageColors[currentLanguage] || languageColors.portugol;
}

function applyLanguageTheme() {
  const colors = getLanguageColor();
  
  // Aplica variáveis CSS para temas dinâmicos
  document.documentElement.style.setProperty('--lang-primary', colors.primary);
  document.documentElement.style.setProperty('--lang-secondary', colors.secondary);
  document.documentElement.style.setProperty('--lang-gradient', colors.gradient);
  document.documentElement.style.setProperty('--lang-light', colors.light);
  document.documentElement.style.setProperty('--lang-dark', colors.dark);
  
  // Adiciona data attribute no body para CSS
  document.body.setAttribute('data-language', currentLanguage);
  
  // Atualiza o favicon
  updateFavicon(colors.primary);
}

function updateFavicon(color) {
  const canvas = document.createElement('canvas');
  canvas.width = 32;
  canvas.height = 32;
  const ctx = canvas.getContext('2d');
  
  ctx.fillStyle = color;
  ctx.fillRect(0, 0, 32, 32);
  ctx.fillStyle = 'white';
  ctx.font = 'bold 16px monospace';
  ctx.fillText(getLanguageShortName(), 6, 24);
  
  let favicon = document.querySelector('link[rel="icon"]');
  if (!favicon) {
    favicon = document.createElement('link');
    favicon.rel = 'icon';
    document.head.appendChild(favicon);
  }
  favicon.href = canvas.toDataURL();
}

function getLanguageShortName() {
  switch(currentLanguage) {
    case 'portugol': return 'P';
    case 'javascript': return 'JS';
    case 'csharp': return 'C#';
    case 'python': return 'Py';
    default: return 'P';
  }
}

// ========== FUNÇÕES DE RENDERIZAÇÃO COMUNS ==========

// Função para obter o nome da linguagem para exibição
function getLanguageDisplayName() {
  switch(currentLanguage) {
    case 'portugol':
      return 'Portugol Studio';
    case 'javascript':
      return 'JavaScript';
    case 'csharp':
      return 'C#';
    case 'python':
      return 'Python';
    default:
      return currentLanguage;
  }
}

function getLanguageDescription() {
  switch(currentLanguage) {
    case 'portugol': return 'estruturada em português';
    case 'javascript': return 'JavaScript, a mais popular do mundo';
    case 'csharp': return 'C#, a linguagem moderna da Microsoft';
    case 'python': return 'Python, a linguagem mais versátil e amigável';
    default: return currentLanguage;
  }
}

function getArraysText() {
  switch(currentLanguage) {
    case 'portugol': return 'Vetores e Matrizes';
    case 'javascript': return 'Arrays e Objetos';
    case 'csharp': return 'Arrays e Listas';
    case 'python': return 'Listas, Tuplas e Dicionários';
    default: return 'Arrays';
  }
}

// Página Home (principal)
function renderHomePage() {
  const langText = getLanguageDisplayName();
  return `
    <div class="hero-section">
      <h1 class="hero-title">Aprenda Lógica de Programação</h1>
      <p class="hero-subtitle">Domine os fundamentos da programação com uma abordagem prática e didática. Aqui você aprende na prática com ${langText}!</p>
      <div class="stats-grid">
        <div class="stat-card">
          <div class="stat-number">20+</div>
          <div class="stat-label">Exercícios Prontos</div>
        </div>
        <div class="stat-card">
          <div class="stat-number">6</div>
          <div class="stat-label">Módulos</div>
        </div>
        <div class="stat-card">
          <div class="stat-number">100%</div>
          <div class="stat-label">Gratuito</div>
        </div>
      </div>
    </div>

    <div class="info-section">
      <div class="info-card">
        <div class="info-icon">🎯</div>
        <h3>Metodologia Ativa</h3>
        <p>Aprenda fazendo! Cada conceito é acompanhado de exemplos práticos e exercícios para fixação.</p>
      </div>
      <div class="info-card">
        <div class="info-icon">📝</div>
        <h3>${langText}</h3>
        <p>Utilizamos a linguagem ${getLanguageDescription()}, ideal para quem está começando.</p>
      </div>
      <div class="info-card">
        <div class="info-icon">🏆</div>
        <h3>Do Zero ao Avançado</h3>
        <p>Trilha completa: desde variáveis e operadores até funções e estruturas de dados complexas.</p>
      </div>
    </div>

    <div class="topics-list">
      <h3>📌 O que você vai aprender:</h3>
      <div class="topics-grid">
        <div class="topic-item"><span class="topic-badge"></span> Lógica e Algoritmos</div>
        <div class="topic-item"><span class="topic-badge"></span> Variáveis e Constantes</div>
        <div class="topic-item"><span class="topic-badge"></span> Operadores Aritméticos/Lógicos</div>
        <div class="topic-item"><span class="topic-badge"></span> Estruturas Condicionais</div>
        <div class="topic-item"><span class="topic-badge"></span> Laços de Repetição</div>
        <div class="topic-item"><span class="topic-badge"></span> ${getArraysText()}</div>
        <div class="topic-item"><span class="topic-badge"></span> Funções</div>
        <div class="topic-item"><span class="topic-badge"></span> Manipulação de Strings</div>
      </div>
    </div>

    <div class="callout">
      <p>💡 <strong>Dica do Professor:</strong> A melhor forma de aprender programação é praticando! Cada exercício resolvido é um passo mais perto da maestria.</p>
      <button class="btn-demo" id="goToRepetitionBtn">🎮 Ver exemplo prático →</button>
    </div>

    <div class="info-section" style="margin-top: 0;">
      <div class="info-card">
        <div class="info-icon">🧠</div>
        <h3>Pensamento Computacional</h3>
        <p>Desenvolva habilidades de resolver problemas de forma lógica.</p>
      </div>
      <div class="info-card">
        <div class="info-icon">🚀</div>
        <h3>Preparação para o Mercado</h3>
        <p>Os fundamentos da lógica são essenciais para qualquer linguagem de programação.</p>
      </div>
    </div>
  `;
}

function renderArraysPage() {
  const langText = getArraysText();
  return `
    <div class="content-placeholder">
      <h2>📊 ${langText}</h2>
      <p>Aprenda a trabalhar com conjuntos de dados. Conteúdo completo em preparação.</p>
      <div class="callout" style="display: inline-block; margin-top: 1rem;">
        <p>🔜 Disponível em breve.</p>
      </div>
    </div>
  `;
}

function renderFunctionsPage() {
  return `
    <div class="content-placeholder">
      <h2>⚙️ Funções</h2>
      <p>Modularização, reuso de código, passagem de parâmetros e retorno de valores. Conteúdo em breve!</p>
      <div class="callout" style="display: inline-block; margin-top: 1rem;">
        <p>🔜 Disponível em breve.</p>
      </div>
    </div>
  `;
}

// Função auxiliar para escapar HTML
function escapeHtml(str) {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

// Adicionar botão de tema no header
function addThemeButton() {
  const navLinks = document.querySelector('.nav-links');
  if (navLinks && !document.getElementById('themeToggle')) {
    const themeBtn = document.createElement('button');
    themeBtn.id = 'themeToggle';
    themeBtn.className = 'theme-toggle';
    themeBtn.addEventListener('click', toggleTheme);
    navLinks.appendChild(themeBtn);
    updateThemeButton(document.body.classList.contains('dark-theme') ? 'dark' : 'light');
  }
}

// Inicializar navegação da sidebar
function initNavigation() {
  const navItems = document.querySelectorAll('.sidebar-nav li');
  navItems.forEach(item => {
    const pageId = item.getAttribute('data-page');
    const isInactive = item.querySelector('.coming-soon') !== null;

    item.addEventListener('click', (e) => {
      if (isInactive && pageId !== 'home') {
        alert('📌 Este módulo estará disponível em breve! Acompanhe as atualizações.');
        return;
      }
      if (typeof loadPage === 'function') {
        loadPage(pageId);
      }
    });
  });
}

// Link do header "Início"
function initHeaderLinks() {
  const homeLink = document.getElementById('link-home');
  if (homeLink) {
    homeLink.addEventListener('click', (e) => {
      e.preventDefault();
      if (typeof loadPage === 'function') {
        loadPage('home');
      }
    });
  }
}

// Atualizar o footer conforme a linguagem
function updateFooter() {
  const footer = document.querySelector('.footer-note');
  if (footer) {
    const langText = getLanguageDisplayName();
    footer.innerHTML = `🔁 Aprenda lógica de programação com exercícios práticos e exemplos em ${langText} | Prof. Me Gallo Junior`;
  }
}