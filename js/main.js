// ========== PONTO DE ENTRADA PRINCIPAL ==========

// Estado das páginas
let currentPage = 'home';
let currentOperadorSubpage = 'conceitos';
let currentOperadorExercise = 1;
let currentCondicionalSubpage = 'conceitos';
let currentCondicionalExercise = 1;
let currentRepeticaoSubpage = 'conceitos';
let currentRepeticaoExercise = 1;
let currentArraysSubpage = 'conceitos';
let currentArraysExercise = 1;

// EXPORTA AS VARIÁVEIS PARA O ESCOPO GLOBAL (para o core.js acessar)
window.currentPage = currentPage;
window.currentOperadorSubpage = currentOperadorSubpage;
window.currentOperadorExercise = currentOperadorExercise;
window.currentCondicionalSubpage = currentCondicionalSubpage;
window.currentCondicionalExercise = currentCondicionalExercise;
window.currentRepeticaoSubpage = currentRepeticaoSubpage;
window.currentRepeticaoExercise = currentRepeticaoExercise;
window.currentArraysSubpage = currentArraysSubpage;
window.currentArraysExercise = currentArraysExercise;

// Função para sincronizar as variáveis globais com as locais
function syncGlobalState() {
  window.currentPage = currentPage;
  window.currentOperadorSubpage = currentOperadorSubpage;
  window.currentOperadorExercise = currentOperadorExercise;
  window.currentCondicionalSubpage = currentCondicionalSubpage;
  window.currentCondicionalExercise = currentCondicionalExercise;
  window.currentRepeticaoSubpage = currentRepeticaoSubpage;
  window.currentRepeticaoExercise = currentRepeticaoExercise;
  window.currentArraysSubpage = currentArraysSubpage; 
  window.currentArraysExercise = currentArraysExercise;
}

// Função para restaurar o estado salvo
function restoreSavedState() {
  const lastPage = localStorage.getItem('lastPage');
  if (lastPage) {
    currentPage = lastPage;
    window.currentPage = lastPage;
  }
  
  // Restaura os estados específicos
  const opsSubpage = localStorage.getItem('operators_subpage');
  if (opsSubpage) {
    currentOperadorSubpage = opsSubpage;
    window.currentOperadorSubpage = opsSubpage;
  }
  
  const opsExercise = localStorage.getItem('operators_exercise');
  if (opsExercise) {
    currentOperadorExercise = parseInt(opsExercise);
    window.currentOperadorExercise = currentOperadorExercise;
  }
  
  const condSubpage = localStorage.getItem('conditionals_subpage');
  if (condSubpage) {
    currentCondicionalSubpage = condSubpage;
    window.currentCondicionalSubpage = condSubpage;
  }
  
  const condExercise = localStorage.getItem('conditionals_exercise');
  if (condExercise) {
    currentCondicionalExercise = parseInt(condExercise);
    window.currentCondicionalExercise = currentCondicionalExercise;
  }
  
  const loopsSubpage = localStorage.getItem('loops_subpage');
  if (loopsSubpage) {
    currentRepeticaoSubpage = loopsSubpage;
    window.currentRepeticaoSubpage = loopsSubpage;
  }
  
  const loopsExercise = localStorage.getItem('loops_exercise');
  if (loopsExercise) {
    currentRepeticaoExercise = parseInt(loopsExercise);
    window.currentRepeticaoExercise = currentRepeticaoExercise;
  }

  const arraysSubpage = localStorage.getItem('arrays_subpage');
  if (arraysSubpage) {
    currentArraysSubpage = arraysSubpage;
    window.currentArraysSubpage = arraysSubpage;
  }
  
  const arraysExercise = localStorage.getItem('arrays_exercise');
  if (arraysExercise) {
    currentArraysExercise = parseInt(arraysExercise);
    window.currentArraysExercise = currentArraysExercise;
  }
}

// Mapeamento de páginas
let pages = {
  home: renderHomePage,
  ambiente: null,
  intro: null,
  operators: null,
  conditionals: null,
  loops: null,
  arrays: null,
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
  window.currentPage = pageId; // Sincroniza com global
  syncGlobalState();
  
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
  if (pageId === 'arrays') { 
    setupArraysEvents();
  }
}

function setupAmbienteEvents() {
  const langBtns = document.querySelectorAll('.ambiente-lang-btn');
  langBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      const lang = btn.getAttribute('data-lang');
      if (lang && lang !== currentLanguage) {
        // SALVA O ESTADO ANTES DE TROCAR
        if (typeof saveCurrentPageState === 'function') {
          saveCurrentPageState();
        }
        
        const languageSelect = document.getElementById('language-select');
        if (languageSelect) {
          languageSelect.value = lang;
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
        window.currentOperadorSubpage = subpage;
        syncGlobalState();
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
        window.currentOperadorExercise = exId;
        syncGlobalState();
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
        window.currentCondicionalSubpage = subpage;
        syncGlobalState();
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
        window.currentCondicionalExercise = exId;
        syncGlobalState();
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
        window.currentRepeticaoSubpage = subpage;
        syncGlobalState();
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
        window.currentRepeticaoExercise = exId;
        syncGlobalState();
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

function setupArraysEvents() {
  const subNavBtns = document.querySelectorAll('.sub-nav-btn');
  subNavBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      const subpage = btn.getAttribute('data-subpage');
      if (subpage) {
        currentArraysSubpage = subpage;
        window.currentArraysSubpage = subpage;
        syncGlobalState();
        loadPage('arrays');
      }
    });
  });

  const filterBtns = document.querySelectorAll('.filter-btn');
  filterBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      const exId = parseInt(btn.getAttribute('data-ex-id'));
      if (exId) {
        currentArraysExercise = exId;
        window.currentArraysExercise = exId;
        syncGlobalState();
        loadPage('arrays');
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
         typeof renderLoopsPage !== 'undefined' &&
         typeof renderArraysPage !== 'undefined'; 
}

// Função para configurar as páginas após carregar os scripts
function setupPagesAfterLoad() {
  console.log('Setting up pages with language:', currentLanguage);
  
  pages.ambiente = renderAmbientePage;
  pages.intro = renderIntroPage;
  pages.operators = renderOperatorsPage;
  pages.conditionals = renderConditionalsPage;
  pages.loops = renderLoopsPage;
  pages.arrays = renderArraysPage;
  
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
  
  // Restaura o estado salvo ANTES de qualquer outra coisa
  restoreSavedState();
  
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
    
    setTimeout(() => {
      if (checkFunctionsReady()) {
        console.log('All functions ready');
        
        setupPagesAfterLoad();
        updateFooter();
        
        // Carrega a página que estava salva
        const pageToLoad = currentPage;
        console.log('Restoring page:', pageToLoad);
        loadPage(pageToLoad);
      } else {
        console.error('Functions not ready after loading scripts');
        
        setTimeout(() => {
          if (checkFunctionsReady()) {
            setupPagesAfterLoad();
            updateFooter();
            loadPage(currentPage);
          } else {
            const langDisplay = getLanguageDisplayName();
            document.getElementById('main-content').innerHTML = `
              <div class="content-placeholder">
                <h2>⚠️ Erro ao carregar conteúdo</h2>
                <p>Não foi possível carregar os scripts necessários para ${langDisplay}.</p>
                <p>Verifique se os arquivos existem na pasta /js/${currentLanguage}/</p>
                <button onclick="location.reload()" class="btn-demo">Recarregar</button>
              </div>
            `;
          }
        }, 1000);
      }
    }, 100);
  });
});