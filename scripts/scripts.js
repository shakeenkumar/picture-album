// Toggle Menu for Mobile View
const menuToggle = document.getElementById('menu-toggle');
const menu = document.querySelector('.menu ul');

menuToggle.addEventListener('click', () => {
  menu.classList.toggle('show');
});

// Last Modified Date
document.getElementById('last-modified').textContent = document.lastModified;
