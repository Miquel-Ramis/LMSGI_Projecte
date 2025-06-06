document.addEventListener("DOMContentLoaded", () => {
  // Establecer la URL base según si estamos en local o en GitHub Pages
  const BASE_URL = (window.location.hostname === '127.0.0.1' || window.location.hostname === 'localhost')
    ? `${window.location.origin}/`
    : `${window.location.origin}/LMSGI_Projecte/`;

  // Obtener elementos por su ID
  const article_1 = document.querySelector("#article_1");
  const article_2 = document.querySelector("#article_2");
  const article_3 = document.querySelector("#article_3");
  const article_4 = document.querySelector("#article_4");
  const article_5 = document.querySelector("#article_5");
  const article_6 = document.querySelector("#article_6");

  const index = document.getElementById("index");
  const about = document.getElementById("about");
  const contact = document.getElementById("contact");
  const iniciar = document.getElementById("iniciar");

  // Función para asignar redirección y cursor pointer
  function setRedirectOnClick(element, path) {
    if (element) {
      element.style.cursor = "pointer";
      element.addEventListener("click", (e) => {
        e.preventDefault();
        location.href = `${BASE_URL}${path}`;
      });
    }
  }

  // Asignar eventos a los artículos
  setRedirectOnClick(article_1, "views/article1.html");
  setRedirectOnClick(article_2, "views/article2.html");
  setRedirectOnClick(article_3, "views/article3.html");
  setRedirectOnClick(article_4, "views/article4.html");
  setRedirectOnClick(article_5, "views/article5.html");
  setRedirectOnClick(article_6, "views/article6.html");

  // Asignar eventos al menú
  setRedirectOnClick(index, "index.html");
  setRedirectOnClick(about, "views/about.html");
  setRedirectOnClick(contact, "views/contact.html");
  setRedirectOnClick(iniciar, "views/services.html");
});