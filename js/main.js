// ========== PONTO DE ENTRADA PRINCIPAL ==========

// Estado das páginas
let currentPage = 'home';
let currentOperadorSubpage = 'conceitos';
let currentOperadorExercise = 1;
let currentCondicionalSubpage = 'conceitos';
let currentCondicionalExercise = 1;
let currentRepeticaoSubpage = 'conceitos';
let currentRepeticaoExercise = 1;

// Mapeamento de páginas
let pages = {
  home: renderHomePage,
  ambiente: null,
  intro: null,
  operators: null,
  conditionals: null,
  loops: null,
  arrays: renderArraysPage,
  functions: renderFunctionsPage
};

function setActiveNavItem(pageId) {
  const navItems = document.querySelectorAll('.sidebar-nav li');
  navItems.forEach(item => {
    const itemPage = item.getAttribute('data-page');
    if (itemPage === pageId) {
      item.classList.add('active');
    } else {
      item.classList.remove('active');
    }
  });
}

function loadPage(pageId) {
  console.log('Loading page:', pageId);
  console.log('Current language:', currentLanguage);
  console.log('Pages available:', Object.keys(pages));
  
  if (!pages[pageId]) {
    console.warn('Page not found:', pageId);
    pageId = 'home';
  }
  
  currentPage = pageId;
  const contentContainer = document.getElementById('main-content');
  
  if (contentContainer && pages[pageId]) {
    contentContainer.innerHTML = pages[pageId]();
    setupPageEvents(pageId);
  } else {
    console.error('Content container not found or page function missing');
  }
  
  setActiveNavItem(pageId);
}

function setupPageEvents(pageId) {
  if (pageId === 'home') {
    const demoBtn = document.getElementById('goToRepetitionBtn');
    if (demoBtn) {
      demoBtn.addEventListener('click', (e) => {
        e.preventDefault();
        loadPage('loops');
      });
    }
  }
  if (pageId === 'ambiente') {
    setupAmbienteEvents();
  }
  if (pageId === 'intro') {
    const homeBtn = document.getElementById('goToHomeBtn');
    if (homeBtn) {
      homeBtn.addEventListener('click', (e) => {
        e.preventDefault();
        loadPage('home');
      });
    }
  }
  if (pageId === 'operators') {
    setupOperatorsEvents();
  }
  if (pageId === 'conditionals') {
    setupConditionalsEvents();
  }
  if (pageId === 'loops') {
    setupLoopsEvents();
  }
}

function setupAmbienteEvents() {
  const langBtns = document.querySelectorAll('.ambiente-lang-btn');
  langBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      const lang = btn.getAttribute('data-lang');
      if (lang && lang !== currentLanguage) {
        // Troca a linguagem no seletor
        const languageSelect = document.getElementById('language-select');
        if (languageSelect) {
          languageSelect.value = lang;
          // Dispara o evento de mudança
          languageSelect.dispatchEvent(new Event('change'));
        }
      }
    });
  });
  
  const copyBtn = document.querySelector('.copy-ambiente-btn');
  if (copyBtn) {
    copyBtn.addEventListener('click', () => {
      const code = copyBtn.getAttribute('data-code');
      if (code) {
        navigator.clipboard.writeText(code.replace(/&quot;/g, '"')).then(() => {
          const originalText = copyBtn.innerText;
          copyBtn.innerText = '✓ Copiado!';
          setTimeout(() => {
            copyBtn.innerText = originalText;
          }, 1800);
        });
      }
    });
  }
}

function setupOperatorsEvents() {
  const subNavBtns = document.querySelectorAll('.sub-nav-btn');
  subNavBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      const subpage = btn.getAttribute('data-subpage');
      if (subpage) {
        currentOperadorSubpage = subpage;
        loadPage('operators');
      }
    });
  });

  const filterBtns = document.querySelectorAll('.filter-btn');
  filterBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      const exId = parseInt(btn.getAttribute('data-ex-id'));
      if (exId) {
        currentOperadorExercise = exId;
        loadPage('operators');
      }
    });
  });

  const copyBtn = document.querySelector('.copy-code-btn');
  if (copyBtn) {
    copyBtn.addEventListener('click', () => {
      const code = copyBtn.getAttribute('data-code');
      if (code) {
        navigator.clipboard.writeText(code.replace(/&quot;/g, '"')).then(() => {
          const originalText = copyBtn.innerText;
          copyBtn.innerText = '✓ Copiado!';
          setTimeout(() => {
            copyBtn.innerText = originalText;
          }, 1800);
        });
      }
    });
  }
}

function setupConditionalsEvents() {
  const subNavBtns = document.querySelectorAll('.sub-nav-btn');
  subNavBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      const subpage = btn.getAttribute('data-subpage');
      if (subpage) {
        currentCondicionalSubpage = subpage;
        loadPage('conditionals');
      }
    });
  });

  const filterBtns = document.querySelectorAll('.filter-btn');
  filterBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      const exId = parseInt(btn.getAttribute('data-ex-id'));
      if (exId) {
        currentCondicionalExercise = exId;
        loadPage('conditionals');
      }
    });
  });

  const copyBtn = document.querySelector('.copy-code-btn');
  if (copyBtn) {
    copyBtn.addEventListener('click', () => {
      const code = copyBtn.getAttribute('data-code');
      if (code) {
        navigator.clipboard.writeText(code.replace(/&quot;/g, '"')).then(() => {
          const originalText = copyBtn.innerText;
          copyBtn.innerText = '✓ Copiado!';
          setTimeout(() => {
            copyBtn.innerText = originalText;
          }, 1800);
        });
      }
    });
  }
}

function setupLoopsEvents() {
  const subNavBtns = document.querySelectorAll('.sub-nav-btn');
  subNavBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      const subpage = btn.getAttribute('data-subpage');
      if (subpage) {
        currentRepeticaoSubpage = subpage;
        loadPage('loops');
      }
    });
  });

  const filterBtns = document.querySelectorAll('.filter-btn');
  filterBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      const exId = parseInt(btn.getAttribute('data-ex-id'));
      if (exId) {
        currentRepeticaoExercise = exId;
        loadPage('loops');
      }
    });
  });

  const copyBtn = document.querySelector('.copy-code-btn');
  if (copyBtn) {
    copyBtn.addEventListener('click', () => {
      const code = copyBtn.getAttribute('data-code');
      if (code) {
        navigator.clipboard.writeText(code.replace(/&quot;/g, '"')).then(() => {
          const originalText = copyBtn.innerText;
          copyBtn.innerText = '✓ Copiado!';
          setTimeout(() => {
            copyBtn.innerText = originalText;
          }, 1800);
        });
      }
    });
  }
}

// Função para carregar scripts dinamicamente
function loadScripts(scripts, callback) {
  let loaded = 0;
  const total = scripts.length;
  
  if (total === 0) {
    callback();
    return;
  }
  
  scripts.forEach(src => {
    const script = document.createElement('script');
    script.src = src;
    script.setAttribute('data-lang', currentLanguage);
    script.onload = () => {
      loaded++;
      if (loaded === total) {
        callback();
      }
    };
    script.onerror = () => {
      console.error('Failed to load script:', src);
      loaded++;
      if (loaded === total) {
        callback();
      }
    };
    document.body.appendChild(script);
  });
}

// Função para verificar se todas as funções necessárias estão disponíveis
function checkFunctionsReady() {
  return typeof renderIntroPage !== 'undefined' &&
         typeof renderConceitosOperadores !== 'undefined' &&
         typeof renderExerciciosOperadores !== 'undefined' &&
         typeof renderOperatorsPage !== 'undefined' &&
         typeof renderConceitosCondicionais !== 'undefined' &&
         typeof renderExerciciosCondicionais !== 'undefined' &&
         typeof renderConditionalsPage !== 'undefined' &&
         typeof renderConceitosRepeticao !== 'undefined' &&
         typeof renderExerciciosRepeticao !== 'undefined' &&
         typeof renderLoopsPage !== 'undefined';
}

// Função para configurar as páginas após carregar os scripts
function setupPagesAfterLoad() {
  console.log('Setting up pages with language:', currentLanguage);
  
  pages.ambiente = renderAmbientePage;
  pages.intro = renderIntroPage;
  pages.operators = renderOperatorsPage;
  pages.conditionals = renderConditionalsPage;
  pages.loops = renderLoopsPage;
  
  // Aplica o tema da linguagem (função do core.js)
  if (typeof applyLanguageTheme === 'function') {
    applyLanguageTheme();
  }
  
  console.log('Pages configured:', {
    ambiente: typeof pages.ambiente,
    intro: typeof pages.intro,
    operators: typeof pages.operators,
    conditionals: typeof pages.conditionals,
    loops: typeof pages.loops
  });
}

// Inicialização
document.addEventListener('DOMContentLoaded', () => {
  console.log('DOM loaded, current language:', currentLanguage);
  
  // Adiciona botão de tema e outros componentes
  addThemeButton();
  initTheme();
  initLanguageSelector();
  initNavigation();
  initHeaderLinks();
  
  // Carrega os scripts da linguagem atual
  const scriptsToLoad = loadLanguageScripts(currentLanguage);
  
  loadScripts(scriptsToLoad, () => {
    console.log('All scripts loaded');
    
    // Aguarda um pequeno delay para garantir que as funções estejam disponíveis
    setTimeout(() => {
      if (checkFunctionsReady()) {
        console.log('All functions ready');
        
        // Configura as páginas
        setupPagesAfterLoad();
        
        // Atualiza o footer
        updateFooter();
        
        // Carrega a página inicial
        loadPage('home');
      } else {
        console.error('Functions not ready after loading scripts');
        console.log('Available functions:', {
          renderIntroPage: typeof renderIntroPage,
          renderConceitosOperadores: typeof renderConceitosOperadores,
          renderExerciciosOperadores: typeof renderExerciciosOperadores,
          renderOperatorsPage: typeof renderOperatorsPage,
          renderConceitosCondicionais: typeof renderConceitosCondicionais,
          renderExerciciosCondicionais: typeof renderExerciciosCondicionais,
          renderConditionalsPage: typeof renderConditionalsPage,
          renderConceitosRepeticao: typeof renderConceitosRepeticao,
          renderExerciciosRepeticao: typeof renderExerciciosRepeticao,
          renderLoopsPage: typeof renderLoopsPage
        });
        
        // Tenta novamente após 1 segundo
        setTimeout(() => {
          if (checkFunctionsReady()) {
            setupPagesAfterLoad();
            updateFooter();
            loadPage('home');
          } else {
            const langDisplay = getLanguageDisplayName();
            document.getElementById('main-content').innerHTML = `
              <div class="content-placeholder">
                <h2>⚠️ Erro ao carregar conteúdo</h2>
                <p>Não foi possível carregar os scripts necessários para ${langDisplay}.</p>
                <p>Verifique se os arquivos existem na pasta /js/${currentLanguage}/</p>
                <p>Arquivos esperados:</p>
                <ul style="text-align: left; display: inline-block;">
                  <li>/js/${currentLanguage}/intro.js</li>
                  <li>/js/${currentLanguage}/operators.js</li>
                  <li>/js/${currentLanguage}/conditions.js</li>
                  <li>/js/${currentLanguage}/loops.js</li>
                </ul>
                <br><br>
                <button onclick="location.reload()" class="btn-demo">Recarregar</button>
              </div>
            `;
          }
        }, 1000);
      }
    }, 100);
  });
});
