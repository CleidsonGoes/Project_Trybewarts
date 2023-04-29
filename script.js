const email = document.querySelector('#email');
const password = document.querySelector('#password');

const btnSubmit = () => {
  const ckbox = document.querySelector('#agreement');
  const submitBtn = document.querySelector('#submit-btn');
  if (ckbox.checked) {
    submitBtn.disabled = false;
  } else {
    submitBtn.disabled = true;
  }
};

const validationInput = () => {
  if (email.value === 'tryber@teste.com' && password.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
};

window.onload = () => {
  const btnEntrar = document.querySelector('#btn');
  btnEntrar.addEventListener('click', validationInput);

  document.getElementById('submit-btn').disabled = true;
  const checkbox = document.querySelector('#agreement');
  checkbox.addEventListener('click', btnSubmit);
};
