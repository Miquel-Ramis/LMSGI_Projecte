const btnmenu = document.querySelector('#btn-menu');
const closeIcon = document.querySelector('#close-icon');
const navHeader = document.querySelector('#nav-header');

btnmenu.addEventListener('click', () => {
    navHeader.classList.add('nav-visible');
    navHeader.classList.remove('nav-hidden');
    closeIcon.style.display = 'block';
    btnmenu.style.display = 'none';   
});

closeIcon.addEventListener('click', () => {
    navHeader.classList.add('nav-hidden');
    navHeader.classList.remove('nav-visible');
    closeIcon.style.display = 'none';  
    btnmenu.style.display = 'inline-block';
});

const basePath = (window.location.hostname === '127.0.0.1' || window.location.hostname === 'localhost') 
    ? window.location.origin + '/' 
    : window.location.origin + '/LMSGI_Projecte/';

document.addEventListener('click', (e) => {
    const id = e.target.id;
    if (!id) return;

    e.preventDefault();

    if (id === 'index') {
        location.href = basePath + 'index.html';
    } else if (id === 'about') {
        location.href = basePath + 'views/about.html';
    } else if (id === 'contact') {
        location.href = basePath + 'contact.html';
    } else if (id === 'iniciar') {
        location.href = basePath + 'views/services.html';
    }
});
