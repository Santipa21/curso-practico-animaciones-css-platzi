const hulk = document.querySelector('#hulk');
const blackWidow = document.querySelector('#blackWidow');
const thor = document.querySelector('#thor');
const modalHulk = document.querySelector('.modal__hulkContainer');
const modalBlackWidow = document.querySelector('.modal__blackWidowContainer');
const modalThor = document.querySelector('.modal__thorContainer');
const closeHulk = document.querySelector('.modal__hulk--close');
const closeBlackWidow = document.querySelector('.modal__blackWidow--close');
const closeThor = document.querySelector('.modal__thor--close');

hulk.addEventListener('click', () => {
  modalHulk.classList.remove('hidden');
  modalHulk.classList.add('visible');
});

closeHulk.addEventListener('click', () => {
  modalHulk.classList.remove('visible');
  modalHulk.classList.add('hidden');
});
blackWidow.addEventListener('click', () => {
  modalBlackWidow.classList.remove('hidden');
  modalBlackWidow.classList.add('visible');
});

closeBlackWidow.addEventListener('click', () => {
  modalBlackWidow.classList.remove('visible');
  modalBlackWidow.classList.add('hidden');
});
thor.addEventListener('click', () => {
  modalThor.classList.remove('hidden');
  modalThor.classList.add('visible');
});

closeThor.addEventListener('click', () => {
  modalThor.classList.remove('visible');
  modalThor.classList.add('hidden');
});

const swiper = new Swiper('.swiper', {
  direction: 'horizontal',
  loop: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});
