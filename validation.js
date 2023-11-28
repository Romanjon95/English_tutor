
function validation(form) {

  function removeError(input) {
    const parent = input.parentNode;
    if (input.classList.contains('error')) {
      parent.querySelector('.error-label').remove()
      input.classList.remove('error')
    }
  }

  function createError(input, text) {
    const parent = input.parentNode;
    const errorText = document.createElement('label');
    errorText.classList.add('error-label');
    errorText.textContent = text
    input.classList.add('error')
    console.log(parent);
    parent.append(errorText);
  }
  let result = true;

  const allInputs = document.querySelectorAll('.form__input');

  console.log(allInputs);
  for (const input of allInputs) {
    removeError(input)

    if (input.dataset.required === 'true') {
      if (input.value === '') {
        console.log('Error');
        createError(input, 'The field is empty');
        result = false
      }
    }
  }

  return result
}

const form = document.querySelector('.form');
form.addEventListener('submit', e => {
  e.preventDefault()
  if (validation(this) === true) {
    alert('Form is completed');
  }
})