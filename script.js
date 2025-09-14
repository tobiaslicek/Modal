'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const closeModal = document.querySelector('.close-modal');
const showModals = document.querySelectorAll('.show-modal');

for (let i = 0; i < showModals.length; i++) {
  showModals[i].addEventListener('click', function () {
    console.log('Button clicked');
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
    // Same as
    // overlay.style.display = 'block';
  });
}

closeModal.addEventListener('click', function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
});
