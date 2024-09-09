// Função para mostrar/ocultar senha
let btn = document.querySelector('.fa-eye');

if (btn) {
  btn.addEventListener('click', () => {
    let inputSenha = document.querySelector('#senha');
    if (inputSenha) {
      if (inputSenha.getAttribute('type') === 'password') {
        inputSenha.setAttribute('type', 'text');
      } else {
        inputSenha.setAttribute('type', 'password');
      }
    }
  });
}

function entrar() {
  let usuario = document.querySelector('#usuario').value;
  let senha = document.querySelector('#senha').value;
  let msgError = document.querySelector('#msgError');

  // Verificar se há usuários registrados
  let listaUser = JSON.parse(localStorage.getItem('listaUser')) || [];

  let userValid = listaUser.find(item => item.userCad === usuario && item.senhaCad === senha);

  if (userValid) {
    // Gerar um token e salvar no localStorage
    let mathRandom = Math.random().toString(16).substr(2);
    let token = mathRandom + mathRandom;

    localStorage.setItem('token', token);
    localStorage.setItem('userLogado', JSON.stringify({
      nome: userValid.nomeCad,
      user: userValid.userCad,
      senha: userValid.senhaCad
    }));

    // Log do token para verificar se está sendo armazenado corretamente
    console.log('Token armazenado:', localStorage.getItem('token'));

    // Redirecionar para a página index.html
    window.location.href = 'index.html';
  } else {
    // Exibir mensagens de erro
    msgError.style.display = 'block';
    msgError.innerHTML = 'Usuário ou senha incorretos';
  }
}

