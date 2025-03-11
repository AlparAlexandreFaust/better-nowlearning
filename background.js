console.log("[BETTER-NOWLEARNING] Background script iniciado");

// Escuta mensagens do content script
chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    console.log("[BETTER-NOWLEARNING] Mensagem recebida:", request);
    sendResponse({status: "recebido"});
  }
);

// Quando a extensão é instalada ou atualizada
chrome.runtime.onInstalled.addListener(function() {
  console.log("[BETTER-NOWLEARNING] Extensão instalada/atualizada");
}); 