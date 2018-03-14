var issueType;
var description = document.getElementById("description");

const bug = '\
h2.Sumário \n\
O preço mencionado na tela de preços está incorreto\
\n\n\
h2.Passo-a-passo para reprodução \n\
1. Vá até a página de preços \n\
2. Consulte\
\n\n\
h2.Resultado esperado \n\
O preço para o plano básico deveria ser USD 29,00\
\n\n\
h2.Resultado obtido\n\
O preço para o plano é USD 25,00\
\n\n\
h2.Observações\n\
Erro ocorre apenas em ambiente linux, não apresentou problemas com Oracle';

document.getElementById("create_link").addEventListener("click", function (event) {
  "use strict";
  if (document.querySelector('#issuetype-single-select img') === null) {
    if (document.getElementById("issue-create-issue-type").textContent === "Bug") {
      description.textContent  = bug;
    }
  } else {
    if (document.querySelector('#issuetype-single-select img').getAttribute('src').includes('10303')) {
      description.textContent  = bug;
    }
  }
});