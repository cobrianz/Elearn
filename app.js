const spin = document.getElementById('spin');
const tick = document.getElementById('tick');

setTimeout(function() {
    spin.style.display = 'none';
    tick.style.display = 'block';

    setTimeout(function() {
      window.location.href = 'index.html';
    }, 2500);
  }, 2000);

  /* form */

  const signup = document.querySelector('.form__signup');
  const signin = document.querySelector('.form__login');
  const signupBtn = document.querySelectorAll('.button__light');
  const signinBtn = document.querySelectorAll('.button__light');


function toggleForm() {
  signup.style.right = "0%";
  signin.style.left = "-100%";
}
function toggleform() {
  signin.style.left = "50%";
  signup.style.right = "-100%";
}
