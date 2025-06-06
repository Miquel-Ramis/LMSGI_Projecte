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

document.addEventListener("DOMContentLoaded", function () {
    const togglePassword = document.getElementById('toggle-password');
    const passwordInput = document.getElementById('password');

    const toggleConfirm = document.getElementById('toggle-confirm-password');
    const confirmInput = document.getElementById('confirm-password');

    togglePassword.addEventListener('click', () => {
        const isHidden = passwordInput.type === 'password';
        passwordInput.type = isHidden ? 'text' : 'password';
        togglePassword.textContent = isHidden ? '🙉' : '🙈';
    });

    toggleConfirm.addEventListener('click', () => {
        const isHidden = confirmInput.type === 'password';
        confirmInput.type = isHidden ? 'text' : 'password';
        toggleConfirm.textContent = isHidden ? '🙉' : '🙈';
    });
});

