const hamburgerBtn = document.querySelector('.menu-hamburgare img');
const linkList = document.querySelector('.link-list');
const contactUsContainer = document.querySelector('.contact-us');
const header = document.querySelector('.header');



hamburgerBtn.addEventListener('click', () => {
    linkList.classList.toggle('show');
    contactUsContainer.classList.toggle('show');
    header.classList.toggle('show');

})