const ham = document.querySelector('.ham');
const ul = document.querySelector('ul');
const overlay = document.querySelector('.overlay');

ham.addEventListener('click', () => {
    ham.classList.toggle('active');
    ul.classList.toggle('active');
    overlay.classList.toggle('active');
    window.document.querySelector('body').classList.toggle('active');});