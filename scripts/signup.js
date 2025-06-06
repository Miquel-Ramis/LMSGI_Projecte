document.addEventListener('DOMContentLoaded', function () {

    // Obtener usuario logueado solo una vez
    const loggedUser = JSON.parse(localStorage.getItem("loggedInUser"));

    // ---------------------------
    // 1. VALIDACIÓN DE REGISTRO
    // ---------------------------
    const form = document.getElementById("register-form");

    if (form) {
        form.addEventListener("submit", function (e) {
            if (!validateRegisterForm()) {
                e.preventDefault();
            } else {
                e.preventDefault(); // para evitar doble redirección, la hacemos manual
                saveToLocalStorage();
                // Redirigimos según el tipo de usuario
                const user = JSON.parse(localStorage.getItem("loggedInUser"));
                if (user.role === "editor") {
                    window.location.href = "admin.html";
                } else {
                    window.location.href = "../index.html";
                }
            }
        });
    }

    function validateRegisterForm() {
        let valid = true;
        const fields = [
            { id: "name", error: "Falta el nombre" },
            { id: "email", error: "Falta el correo electrónico" },
            { id: "password", error: "Falta la contraseña" },
            { id: "confirm-password", error: "Falta confirmar la contraseña" }
        ];

        clearErrors();

        fields.forEach(({ id, error }) => {
            const input = document.getElementById(id);
            if (input && input.value.trim() === "") {
                showError(input, error);
                valid = false;
            }
        });

        const password = document.getElementById("password").value;
        const confirmPassword = document.getElementById("confirm-password").value;

        if (confirmPassword.trim() !== "" && password !== confirmPassword) {
            showError(document.getElementById("confirm-password"), "Las contraseñas no coinciden");
            valid = false;
        }

        return valid;
    }

    function showError(input, message) {
        clearError(input);
        const errorDiv = document.createElement("div");
        errorDiv.className = "error-message";
        errorDiv.innerText = message;
        input.parentElement.appendChild(errorDiv);
        input.classList.add("shake");
        setTimeout(() => input.classList.remove("shake"), 500);
    }

    function clearErrors() {
        document.querySelectorAll(".error-message").forEach(el => el.remove());
    }

    function clearError(input) {
        const errorDiv = input.parentElement.querySelector(".error-message");
        if (errorDiv) errorDiv.remove();
    }

    function saveToLocalStorage() {
        const user = {
            name: document.getElementById("name").value.trim(),
            email: document.getElementById("email").value.trim(),
            password: document.getElementById("password").value.trim(),
            role: document.getElementById("editor")?.checked ? "editor" : "lector"
        };

        let users = JSON.parse(localStorage.getItem("registeredUsers")) || [];

        const emailExists = users.some(u => u.email === user.email);
        if (emailExists) {
            alert("Este correo electrónico ya está registrado.");
            return;
        }

        users.push(user);
        localStorage.setItem("registeredUsers", JSON.stringify(users));
        localStorage.setItem("loggedInUser", JSON.stringify(user));

        alert("¡Registro exitoso! Bienvenido " + user.name + "!");
    }

    // ---------------------------
    // 2. NAVBAR RESPONSIVE
    // ---------------------------
    const btnmenu = document.querySelector('#btn-menu');
    const closeIcon = document.querySelector('#close-icon');
    const navHeader = document.querySelector('#nav-header');

    if (btnmenu && closeIcon && navHeader) {
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
    }

    // ---------------------------
    // 3. TOGGLE CONTRASEÑA
    // ---------------------------
    const togglePassword = document.getElementById('toggle-password');
    const passwordInput = document.getElementById('password');
    const toggleConfirm = document.getElementById('toggle-confirm-password');
    const confirmInput = document.getElementById('confirm-password');

    if (togglePassword && passwordInput) {
        togglePassword.addEventListener('click', () => {
            const isHidden = passwordInput.type === 'password';
            passwordInput.type = isHidden ? 'text' : 'password';
            togglePassword.textContent = isHidden ? '🙉' : '🙈';
        });
    }

    if (toggleConfirm && confirmInput) {
        toggleConfirm.addEventListener('click', () => {
            const isHidden = confirmInput.type === 'password';
            confirmInput.type = isHidden ? 'text' : 'password';
            toggleConfirm.textContent = isHidden ? '🙉' : '🙈';
        });
    }

    // ---------------------------
    // 4. FUERZA DE CONTRASEÑA
    // ---------------------------
    const strengthBar = document.getElementById("strength-bar");

    function validatePasswordStrength(password) {
        if (password.length < 6) return "weak";
        if (!/[A-Z]/.test(password)) return "medium";
        if (!/\d/.test(password)) return "medium";
        if (!/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(password)) return "medium";
        return "strong";
    }

    function updateStrengthBar(strength) {
        if (!strengthBar) return;
        strengthBar.style.height = "5px";
        strengthBar.style.marginTop = "5px";

        switch (strength) {
            case "weak":
                strengthBar.style.backgroundColor = "red";
                break;
            case "medium":
                strengthBar.style.backgroundColor = "orange";
                break;
            case "strong":
                strengthBar.style.backgroundColor = "green";
                break;
        }
    }

    if (passwordInput && strengthBar) {
        passwordInput.addEventListener("input", () => {
            const pwd = passwordInput.value;
            clearError(passwordInput);
            const strength = validatePasswordStrength(pwd);
            updateStrengthBar(strength);
            if (pwd && strength === "weak") {
                showError(passwordInput, "La contraseña es muy débil");
            }
        });
    }

    // ---------------------------
    // 5. BOTÓN DE LIKE (solo logueado)
    // ---------------------------
    const likeContainer = document.getElementById('likeContainer');
    const likeButton = document.getElementById('like-button');

    if (likeContainer) {
        likeContainer.style.display = loggedUser ? 'block' : 'none';
    }

    if (loggedUser && likeButton) {
        let liked = false;

        likeButton.addEventListener('click', function () {
            liked = !liked;
            if (liked) {
                likeButton.src = '../img/like-icon.png';
            } else {
                likeButton.src = '../img/default-like.png';
            }
        });
    }

    // ---------------------------
    // 6. CAMBIAR NAV SI ESTÁ LOGUEADO
    // ---------------------------
    const iniciarItem = document.getElementById("iniciar");

    if (iniciarItem && loggedUser) {
        iniciarItem.innerHTML = `
            ${loggedUser.name} 
            <span id="logout-icon" style="cursor:pointer; margin-left:10px;">🚪</span>
        `;

        const logoutIcon = document.getElementById("logout-icon");
        if (logoutIcon) {
            logoutIcon.addEventListener("click", () => {
                localStorage.removeItem("loggedInUser");
                location.href = "../index.html";
            });
        }
    }

    // ---------------------------
    // 7. LOGIN FORM 
    // ---------------------------
    const loginForm = document.getElementById("login-form");

    if (loginForm) {
        loginForm.addEventListener("submit", function (e) {
            e.preventDefault();

            const email = document.getElementById("email").value.trim();
            const password = document.getElementById("password").value.trim();

            const users = JSON.parse(localStorage.getItem("registeredUsers")) || [];

            const userFound = users.find(user => user.email === email && user.password === password);

            if (userFound) {
                localStorage.setItem("loggedInUser", JSON.stringify(userFound));

                alert(`¡Bienvenido/a ${userFound.name}!`);

                if (userFound.role === "editor") {
                    window.location.href = "../views/admin.html";
                } else {
                    window.location.href = "../index.html";
                }
            } else {
                alert("Correo o contraseña incorrectos. Por favor, inténtalo de nuevo.");
            }
        });
    }

});
