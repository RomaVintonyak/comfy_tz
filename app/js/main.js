/*modal window*/
const btnModal = document.querySelector('._modalBtn');
const modalWindow = document.querySelector('._modalWindow');
const modalClose = document.querySelector('._closeModal');
btnModal.addEventListener('click', function () {
  modalWindow.classList.add('modal__open');
});
modalClose.addEventListener('click', function () {
  modalWindow.classList.remove('modal__open');
});
document.querySelector('.modal__mask').addEventListener('click', function () {
  modalWindow.classList.remove('modal__open');
});
document.querySelector('.modal__mask--body').addEventListener('click', function (event) {
  event.stopPropagation();
});
/*swiper slider*/
new Swiper('.swiper', {
  breakpoints: {
    576: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    991: {
      slidesPerView: 3,
    },
    1366: {
      slidesPerView: 4,
    },
  },
  speed: 600,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});

