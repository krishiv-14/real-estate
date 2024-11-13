const form = document.querySelector('form');
const nameInput = document.querySelector('input[type="text"]');
const emailInput = document.querySelector('input[type="email"]');
const passwordInput = document.querySelector('input[type="password"]');
const errorMessages = document.querySelectorAll('.error-txt');

form.addEventListener('submit', function(event) {
  event.preventDefault();

  if (nameInput.value.trim() === '') {
    errorMessages[0].style.display = 'block';
  } else {
    errorMessages[0].style.display = 'none';
  }

  if (emailInput.value.trim() === '') {
    errorMessages[1].style.display = 'block';
  } else {
    errorMessages[1].style.display = 'none';
  }

  if (passwordInput.value.trim() === '') {
    errorMessages[2].style.display = 'block';
  } else {
    errorMessages[2].style.display = 'none';
  }
});