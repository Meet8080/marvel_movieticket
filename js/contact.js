const form = document.getElementById('form');
const fullName = document.getElementById('fullName');
const email = document.getElementById('email');
const subject = document.getElementById('subject');
const message = document.getElementById('message');
const submit = document.getElementById('submit');

function showError(input, message) {
  const formGroup = input.parentElement;
  formGroup.className = 'form-group error';
  const small = formGroup.querySelector('small');
  small.innerText = message;
}

function getFieldName(input) {
  return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

// Check required fields
function checkRequired(inputArr) {
  let isRequired = false;
  inputArr.forEach(function (input) {
    if (input.value.trim() === '') {
      showError(input, `${getFieldName(input)} is required`);
      isRequired = true;
    }
    fullName.focus();
  });
  return isRequired;
}

// Event listeners
document.addEventListener('DOMContentLoaded', () => {
  form.addEventListener('submit', function (e) {
    e.preventDefault();

    if (!checkRequired([fullName, email, subject, message])) {
      swal({
        text: 'Thank you for contacting us...',
        icon: 'success',
      }).then((result) => {
        if (result) {
          window.location.replace('contactus.html');
        }
      });
    }
  });
  fullName.focus();
});
