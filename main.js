// Adicionando um evento de clique a um botão para mostrar/ocultar as estatísticas de desmatamento
document.addEventListener("DOMContentLoaded", function() {
    var desmatamentoSection = document.getElementById("desmatamento");
    var desmatamentoButton = document.getElementById("desmatamento-toggle");
  
    desmatamentoButton.addEventListener("click", function() {
      if (desmatamentoSection.style.display === "none") {
        desmatamentoSection.style.display = "block";
      } else {
        desmatamentoSection.style.display = "none";
      }
    });
  });
  