// ==========================================================================
// EVENTO DE CARREGAMENTO DA PÁGINA (SAUDAÇÃO NA HOMEPAGE)
// ==========================================================================
window.onload = function() {
  // Verifica se o usuário está na página inicial (index.html ou na raiz)
  var paginaAtual = window.location.pathname;
  if (paginaAtual.endsWith("index.html") || paginaAtual.endsWith("/")) {
    
    // 1. Dados Pessoais
    var nomeCompletoAlert = "Olá, sou o Gustavo";
    var cursoFaculdade = "São Paulo/ADS - Mackenzie";
    
    // 2. Lógica de Data e Hora
    var data = new Date();
    var hora = data.getHours();
    var diaSemanaNum = data.getDay(); // Retorna um número de 0 (Domingo) a 6 (Sábado)
    
    // Convertendo o número do dia para o nome
    var diasDaSemana = ["Domingo", "Segunda-feira", "Terça-feira", "Quarta-feira", "Quinta-feira", "Sexta-feira", "Sábado"];
    var nomeDia = diasDaSemana[diaSemanaNum];
    
    // Lógica da Saudação baseada na hora
    var saudacao = "";
    if (hora >= 0 && hora < 12) {
      saudacao = "Bom Dia!";
    } else if (hora >= 12 && hora < 18) {
      saudacao = "Boa Tarde!";
    } else {
      saudacao = "Boa Noite!";
    }
    
    // 3. Montando a mensagem final com quebra de linha (\n)
    var mensagemFinal = nomeCompletoAlert + "\n" + 
                        cursoFaculdade + "\n" + 
                        saudacao + " Hoje é " + nomeDia + ".";
    
    // Disparando a caixa de diálogo
    alert(mensagemFinal);
  }
};

// Armazenamento das informações em variáveis
var nomeCompleto = "Gustavo";
var anoCorrente = 2026;
var X = "@não_tenho_X";
var facebook = "@não_tenho_facebook";
var instagram = "@gustalluis";
var linkedin = "gustavoluis2106";
var sexo = "Masculino";
var localizacaoPolo = "Polo Anália Franco";

// Criando a caixa principal que vai segurar as duas colunas
document.write('<div class="footer-dados-grid">');

// COLUNA 1: Dados Pessoais (2 primeiros e 2 últimos)
document.write('<div class="dados-coluna">');
document.write("<strong>" + nomeCompleto + "</strong><br>");
document.write("Ano - " + anoCorrente + "<br>");
document.write("Sexo: " + sexo + "<br>");
document.write("Localização: " + localizacaoPolo);
document.write('</div>');

// COLUNA 2: Redes Sociais
document.write('<div class="dados-coluna">');
document.write("X: " + X + "<br>");
document.write("facebook: " + facebook + "<br>");
document.write("instagram: " + instagram + "<br>");
document.write("LinkedIn: " + linkedin + "<br>");
document.write('</div>');

// Fechando a caixa principal
document.write('</div>');