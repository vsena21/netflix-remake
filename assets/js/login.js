var botaoLogin = document.querySelector('.form__botao');
botaoLogin.addEventListener('click', function(event){
    event.preventDefault();

    var form = document.querySelector('.form__login');
    var login = document.querySelector('#txtLogin');
    var pass = document.querySelector('#txtSenha');

    mistake = getLoginForm(login, pass)

    if(mistake == true){return;}

    form.reset();
    document.querySelector('.erro').textContent = '';
});

function getLoginForm(login, password){
    var acess = login.value;
    var pass = password.value;

    var erro = document.querySelector('.erro');

    if(acess.length == 0 || pass.length == 0){
        erro.textContent = 'E-mail ou senha inválida';

        return true;
    }
}
