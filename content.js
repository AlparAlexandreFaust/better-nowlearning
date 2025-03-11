// Configuração de debug - defina como true para ver logs, false para ocultar
const DEBUG = false;

// Função para log condicional
function debugLog(...args) {
  if (DEBUG) {
    console.log("[BETTER-NOWLEARNING]", ...args);
  }
}

// Log inicial
debugLog("Script de conteúdo carregado");

// Função para tentar aplicar as alterações periodicamente
function tentarAplicarAlteracoes() {
  debugLog("Tentando aplicar alterações...");
  
  try {
    // Seleciona os itens e define a altura como 85vh
    const iframe = document.querySelector("body > div.modal.fade.ng-isolate-scope.rustici-modal-window.in > div > div > div > iframe");
    if (iframe) {
      debugLog("iframe encontrado, aplicando estilo");
      iframe.style.height = "85vh";
    } else {
      debugLog("iframe não encontrado ainda");
    }

    // Cria um elemento style
    const style = document.createElement('style');
    style.textContent = `
      .scorm-iframe {
        height: 85vh !important;
      }
    `;
    // Adiciona ao head do documento se ainda não foi adicionado
    if (!document.head.querySelector('style[data-better-nowlearning]')) {
      style.setAttribute('data-better-nowlearning', 'true');
      document.head.appendChild(style);
      debugLog("Estilo adicionado ao head");
    }
  } catch (error) {
    // Erros sempre são exibidos, mesmo com debug desativado
    console.error("[BETTER-NOWLEARNING] Erro ao executar script:", error);
  }
}

// Executa imediatamente
tentarAplicarAlteracoes();

// Configura para tentar novamente a cada 2 segundos
const intervalo = setInterval(tentarAplicarAlteracoes, 2000);

// Para de tentar após 30 segundos para não consumir recursos desnecessariamente
setTimeout(() => {
  clearInterval(intervalo);
  debugLog("Parando tentativas automáticas após 30 segundos");
}, 30000);

// Adiciona um evento para quando o DOM mudar
const observer = new MutationObserver(function(mutations) {
  debugLog("DOM modificado, tentando aplicar alterações");
  tentarAplicarAlteracoes();
});

// Inicia a observação do DOM
observer.observe(document.body, { childList: true, subtree: true });

debugLog("Configuração completa");
