const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.links-container');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navMenu.classList.toggle('active');
});

document.querySelectorAll('.links').forEach((i) =>
  i.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
  })
);
