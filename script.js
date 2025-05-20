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


document.addEventListener('click', (e) => {
    const id = e.target.id;
    e.preventDefault();
    if (id === 'index') {
        location.href = '/../index.html';
    } else if (id === 'about') {
        location.href = '/views/about.html';
    } else if (id === '/views/contact') {
        location.href = '/contact.html';
    } else if (id === 'iniciar') { 
        location.href = '/views/services.html';
    }
});
