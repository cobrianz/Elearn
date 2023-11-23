const spin = document.getElementById('spin');
const tick = document.getElementById('tick');

setTimeout(function() {
    spin.style.display = 'none';
    tick.style.display = 'block';

    setTimeout(function() {
      window.location.href = 'index.html';
    }, 2500);
  }, 2000);

  