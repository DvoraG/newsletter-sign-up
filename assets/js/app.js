const submitBtn = document.getElementById('submit-btn');
const emailInput = document.getElementById('email');
const emailError = document.querySelector('.form__label-error');
const emailSignedUp = document.querySelector('.success__email');
const signupForm = document.querySelector('main');
// const signupForm = document.querySelector('.form');
// const signupImage = document.querySelector('.form__image-wrapper');
const successMessage = document.querySelector('.success');
const dismissBtn = document.querySelector('#dismiss-btn');

function checkValidEmail(email) {
  const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  return emailPattern.test(email);
}

function showError() {
  emailError.setAttribute('aria-hidden', false);
  emailError.classList.remove('form__label-error');
  emailError.classList.add('form__label-error-show');
  emailInput.classList.add('form__input-error');
  emailInput.focus();
}
function resetForm() {
  emailError.setAttribute('aria-hidden', true);
  emailError.classList.remove('form__label-error-show');
  emailError.classList.add('form__label-error');
  emailInput.classList.remove('form__input-error');
  emailSignedUp.textContent = emailInput.value;
  emailInput.value = '';
  // hide picture & form
  // signupForm.style.display = 'none';
  signupForm.classList.add('hidden');
  // signupImage.style.display = 'none';
  successMessage.classList.add('success-show');
}

submitBtn.addEventListener('click', (e) => {
  e.preventDefault();
  const check = checkValidEmail(emailInput.value);

  if (!check) {
    showError();
  } else {
    resetForm();
  }
});

dismissBtn.addEventListener('click', () => {
  signupForm.classList.remove('hidden');
  successMessage.classList.remove('success-show');
});
