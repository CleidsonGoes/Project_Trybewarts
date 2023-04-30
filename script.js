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

const checkMateria = () => {
  const nameCheck = document.getElementsByClassName('subject');
  const materiaChecked = [];
  for (let index = 0; index < nameCheck.length; index += 1) {
    if (nameCheck[index].checked === true) {
      materiaChecked.push(nameCheck[index].value);
    }
  }
  return materiaChecked.join(', ');
};

const makeObject = () => {
  const sobreNome = document.querySelector('#input-lastname').value;
  const objectLabels = {
    Nome: `${document.querySelector('#input-name').value} ${sobreNome}`,
    Email: document.querySelector('#input-email').value,
    Casa: document.querySelector('#house').value,
    Família: document.querySelector('input[name = "family"]:checked').value,
    Matérias: checkMateria(),
    Avaliação: document.querySelector('input[name = "rate"]:checked').value,
    Observações: document.querySelector('#textarea').value,
  };
  return objectLabels;
};

const labels = (obj) => {
  const frmN = document.querySelector('#form-data');
  for (let index = 0; index < Object.keys(obj).length; index += 1) {
    frmN.innerHTML += `<label>${Object.keys(obj)[index]}: ${Object.values(obj)[index]}</label><br>`;
  }
};

const send = (event) => {
  const mainForm = document.querySelector('#evaluation-form');
  mainForm.style.display = 'none';
  event.preventDefault();
  const object = makeObject();
  labels(object);
};

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
