const hamburgerBtn = document.querySelector('.menu-hamburgare img');
const linkList = document.querySelector('.link-list');

hamburgerBtn.addEventListener('click', () => {
    linkList.classList.toggle('show');
})