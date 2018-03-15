var issueType;
var description;
var textButton;

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

var clickOnTextView = function () {
  textButton = document.getElementById("aui-uid-1");
  textButton.click();
}

var setDescription = function () {
  clickOnTextView();
  description = document.getElementById("description");
  description.textContent  = bug;
};

if (document.location.href.includes("CreateIssue.jspa")) {
  window.onload = function () {
    "use strict";
    issueType = document.getElementById("issue-create-issue-type");
    
    if (issueType.textContent === "Bug") {
      setDescription();
    }
  };
} else {
 document.getElementById("create_link").addEventListener("click", function () {
  setTimeout(function() {
    "use strict";
    issueType = document.querySelector('#issuetype-single-select img');
    
    if (issueType.getAttribute('src').includes('10303')) {
      setDescription();
    }
  }, 1500);
 }); 
};