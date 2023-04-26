const email = document.querySelector('#email');
const password = document.querySelector('#password');

const validationInput =() => {
    if(email.value === 'tryber@teste.com' && password.value === '123456') {
        alert ('Olá, Tryber!');
    } else {
        alert ('Email ou senha inválidos');
    }
}

window.onload = () => {
    const btnEntrar = document.querySelector('#btn');
    btnEntrar.addEventListener('click',validationInput);
}