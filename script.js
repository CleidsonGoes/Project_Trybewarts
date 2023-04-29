const email = document.querySelector('#email');
const password = document.querySelector('#password');
const textArea = document.querySelector('#textarea');
const btnEnviar = document.querySelector('#submit-btn');

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

// const labels = (formNext, name, sobrenome, Email, house, family, material, avaliator, observation) => {
//   formNext.innerHTML = `<label>Nome: ${name} ${sobrenome}</label>`;
//   formNext.innerHTML = `<label>Email: ${Email}</label>`;
//   formNext.innerHTML = `<label>Casa: ${house}</label>`;
//   formNext.innerHTML = `<label>Família: ${family}</label>`;
//   formNext.innerHTML = `<label>Matérias: ${material}</label>`;
//   formNext.innerHTML = `<label>Avaliação: ${avaliator}</label>`;
//   formNext.innerHTML = `<label>Observações: ${observation}</label>`;
//   console.log(name);
// };

// const send = (event) => {
//   const mainForm = document.querySelector('#evaluation-form');
//   mainForm.style.display = 'none';
//   event.preventDefault();
//   const formNext = document.querySelector('#form-data');
//   const name = document.querySelector('#input-name').value;
//   const sobrenome = document.querySelector('#input-lastname').value;
//   const Email = document.querySelector('#input-email').value;
//   const house = document.querySelector('#house').value;
//   const family = document.querySelector('input[name = "family"]:checked').value;
//   const material = document.querySelector('#label-content').value;
//   const avaliator = document.querySelector('input[name = "rate"]:checked').value;
//   const observation = document.querySelector('#textarea').value;
//   labels(formNext, name, sobrenome, Email, house, family, material, avaliator, observation);
// };

window.onload = () => {
  const btnEntrar = document.querySelector('#btn');
  btnEntrar.addEventListener('click', validationInput);

  document.getElementById('submit-btn').disabled = true;

  const checkbox = document.querySelector('#agreement');
  checkbox.addEventListener('click', btnSubmit);

  textArea.addEventListener('input', () => {
    const areaText = document.form.text.value;
    document.getElementById('counter').innerText = 500 - areaText.length;
  });

  btnEnviar.addEventListener('click', send);
};
