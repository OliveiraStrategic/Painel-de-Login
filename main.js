/* ====================== *
 *  Nome do Aluno:       *
 *  Gabriel De Oliveira Matoso 
 *  R.A: 48629            *
 *  Instituição: Unifatecie*
 *  Disciplina: DESENVOLVIMENTO FRONT-END *
 * ====================== */

/* ====================== *
 *  Toggle Between        *
 *  Sign Up / Login       *
 * ====================== */
$(document).ready(function() {
  // Evento para alternar para a seção de login
  $('#goRight').on('click', function() {
      $('#slideBox').animate({
          'marginLeft': '0' // Move o slideBox para a esquerda
      });
      $('.topLayer').animate({
          'marginLeft': '100%' // Move a camada superior para a direita
      });
  });

  // Evento para alternar para a seção de cadastro
  $('#goLeft').on('click', function() {
      if (window.innerWidth > 769) {
          $('#slideBox').animate({
              'marginLeft': '50%' // Move o slideBox para o centro
          });
      } else {
          $('#slideBox').animate({
              'marginLeft': '20%' // Move o slideBox para uma posição diferente em telas menores
          });
      }
      $('.topLayer').animate({
          'marginLeft': '0' // Move a camada superior para a esquerda
      });
  });

  // Validação do formulário de cadastro
  $('#form-signup').on('submit', function() {
      $('.error-message').hide(); // Limpa mensagens de erro
      
      const email = $('#email').val();
      const username = $('#username-signup').val();
      const password = $('#password-signup').val();
      let valid = true;

      if (!email) {
          $('#email-error').text('Por favor, preencha o email.').show();
          valid = false;
      }

      if (!username) {
          $('#username-error').text('Por favor, preencha o username.').show();
          valid = false;
      }

      if (!password) {
          $('#password-error').text('Por favor, preencha a senha.').show();
          valid = false;
      }

      if (valid) {
          // Lógica para cadastro (enviar dados ao servidor)
          alert('Cadastro realizado com sucesso!'); // Exemplo de ação
      }
  });

  // Validação do formulário de login
  $('#form-login').on('submit', function() {
      $('.error-message').hide(); // Limpa mensagens de erro
      
      const username = $('#username-login').val();
      const password = $('#password-login').val();
      let valid = true;

      if (!username) {
          $('#login-username-error').text('Por favor, preencha o username.').show();
          valid = false;
      }

      if (!password) {
          $('#login-password-error').text('Por favor, preencha a senha.').show();
          valid = false;
      }

      if (valid) {
          // Lógica para login (enviar dados ao servidor)
          alert('Login realizado com sucesso!'); // Exemplo de ação
      }
  });
});

/* ====================== *
*  Initiate Canvas       *
* ====================== */
paper.install(window); // Instala a biblioteca Paper.js
paper.setup(document.getElementById("canvas")); // Configura o canvas

// Variáveis do Paper.js
var canvasWidth, 
canvasHeight,
canvasMiddleX,
canvasMiddleY;

var shapeGroup = new Group(); // Grupo para armazenar formas
var positionArray = []; // Array para armazenar posições das formas

function getCanvasBounds() {
// Obtém o tamanho atual do canvas
canvasWidth = view.size.width;
canvasHeight = view.size.height;
canvasMiddleX = canvasWidth / 2;
canvasMiddleY = canvasHeight / 2;

// Define posições para as formas
var position1 = { x: (canvasMiddleX / 2) + 100, y: 100 };
var position2 = { x: 200, y: canvasMiddleY };
var position3 = { x: (canvasMiddleX - 50) + (canvasMiddleX / 2), y: 150 };
var position4 = { x: 0, y: canvasMiddleY + 100 };
var position5 = { x: canvasWidth - 130, y: canvasHeight - 75 };
var position6 = { x: canvasMiddleX + 80, y: canvasHeight - 50 };
var position7 = { x: canvasWidth + 60, y: canvasMiddleY - 50 };
var position8 = { x: canvasMiddleX + 100, y: canvasMiddleY + 100 };

positionArray = [position3, position2, position5, position4, position1, position6, position7, position8];
}

/* ====================== *
* Create Shapes          *
* ====================== */
function initializeShapes() {
// Obtém os limites do canvas
getCanvasBounds();

// Dados dos caminhos das formas
var shapePathData = [
    'M231,352l445-156L600,0L452,54L331,3L0,48L231,352', 
    'M0,0l64,219L29,343l535,30L478,37l-133,4L0,0z', 
    'M0,65l16,138l96,107l270-2L470,0L337,4L0,65z',
    'M333,0L0,94l64,219L29,437l570-151l-196-42L333,0',
    'M331.9,3.6l-331,45l18.8,113l270-3L500,0L331.9,3.6z',
    'M0,0v150l85,75L0,0z',
    'M0,0v650h1000V0H0z',
    'M0,0h500L0,0z'
];

// Cria formas usando as rotas especificadas
for (var i = 0; i < shapePathData.length; i++) {
    var path = new Path(shapePathData[i]);
    path.fillColor = new Color(Math.random(), Math.random(), Math.random());
    path.strokeColor = new Color(0, 0, 0);
    path.strokeWidth = 2;

    // Adiciona a forma ao grupo
    shapeGroup.addChild(path);
    path.position = positionArray[i]; // Define a posição
}
}

// Inicia a criação de formas
initializeShapes();
