const DOMInputForm = (() => {
  const inputContainer = document.createElement('div');
  inputContainer.classList.add('inputContainer');

  const formContainer = document.createElement('form');
  formContainer.classList.add('formContainer');

  const searchbar = document.createElement('input');
  searchbar.classList.add('searchbar');
  searchbar.setAttribute('name', 'location');
  searchbar.setAttribute('placeholder', 'Zipcode');
  formContainer.appendChild(searchbar);

  const fahrLabel = document.createElement('label');
  fahrLabel.setAttribute('for', 'fahrUnit');
  fahrLabel.textContent = 'F';
  formContainer.appendChild(fahrLabel);

  const fahrUnit = document.createElement('input');
  fahrUnit.setAttribute('type', 'radio');
  fahrUnit.setAttribute('id', 'fahrUnit');
  fahrUnit.setAttribute('name', 'units');
  fahrUnit.setAttribute('value', 'imperial');
  fahrUnit.checked = true;
  formContainer.appendChild(fahrUnit);

  const celLabel = document.createElement('label');
  celLabel.setAttribute('for', 'celUnit');
  celLabel.textContent = 'C';
  formContainer.appendChild(celLabel);

  const celUnit = document.createElement('input');
  celUnit.setAttribute('type', 'radio');
  celUnit.setAttribute('id', 'celUnit');
  celUnit.setAttribute('name', 'units');
  celUnit.setAttribute('value', 'metric');
  formContainer.appendChild(celUnit);

  inputContainer.appendChild(formContainer);

  const submitBtn = document.createElement('button');
  submitBtn.classList.add('submitBtn');
  submitBtn.textContent = 'Get Weather';
  inputContainer.appendChild(submitBtn);

  document.querySelector('#content').appendChild(inputContainer);
});
export default DOMInputForm;
