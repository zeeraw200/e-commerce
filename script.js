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

const productContainers = [...document.querySelectorAll('.product-container')];
const nextBtn = [...document.querySelectorAll('.next-btn')];
const preBtn = [...document.querySelectorAll('.pre-btn')];

productContainers.forEach((item, i) => {
  let containerDimenstions = item.getBoundingClientRect();
  let containerWidth = containerDimenstions.width;

  nextBtn[i].addEventListener('click', () => {
    item.scrollLeft += containerWidth;
  });

  preBtn[i].addEventListener('click', () => {
    item.scrollLeft -= containerWidth;
  });
});
