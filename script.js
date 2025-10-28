// Password toggle
const passwordInputs = document.querySelectorAll('input[type="password"]');

passwordInputs.forEach(input => {
  const toggle = document.createElement('span');
  toggle.classList.add('toggle-password');
//   toggle.innerHTML = '👁️';
  input.parentNode.style.position = 'relative';
  input.parentNode.appendChild(toggle);

  toggle.style.position = 'absolute';
  toggle.style.right = '10px';
  toggle.style.top = '50%';
  toggle.style.transform = 'translateY(-50%)';
  toggle.style.cursor = 'pointer';

  toggle.addEventListener('click', () => {
    input.type = input.type === 'password' ? 'text' : 'password';
  });
});

// Simple validation example
document.querySelector('#loginForm')?.addEventListener('submit', e => {
  e.preventDefault();
  alert('Login successful (demo)');
});
