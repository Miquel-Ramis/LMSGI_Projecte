document.addEventListener("DOMContentLoaded", () => {
  const BASE_URL = (window.location.hostname === '127.0.0.1' || window.location.hostname === 'localhost')
    ? `${window.location.origin}/`
    : `${window.location.origin}/LMSGI_Projecte/`;

  const article_1 = document.querySelector("#article_1");
  const article_2 = document.querySelector("#article_2");
  const article_3 = document.querySelector("#article_3");
  const article_4 = document.querySelector("#article_4");
  const article_5 = document.querySelector("#article_5");
  const article_6 = document.querySelector("#article_6");

  if (article_1)
    article_1.addEventListener("click", (e) => {
      e.preventDefault();
      location.href = "/views/article1.html";
    });

  if (article_2)
    article_2.addEventListener("click", (e) => {
      e.preventDefault();
      location.href = "/views/article2.html";
    });

  if (article_3)
    article_3.addEventListener("click", (e) => {
      e.preventDefault();
      location.href = "/views/article3.html";
    });

  if (article_4)
    article_4.addEventListener("click", (e) => {
      e.preventDefault();
      location.href = "/views/article4.html";
    });

  if (article_5)
    article_5.addEventListener("click", (e) => {
      e.preventDefault();
      location.href = "/views/article5.html";
    });

  if (article_6)
    article_6.addEventListener("click", (e) => {
      e.preventDefault();
      location.href = "/views/article6.html";
    });

  const index = document.getElementById("index");
  const about = document.getElementById("about");
  const contact = document.getElementById("contact");
  const iniciar = document.getElementById("iniciar");

  if (index)
    index.addEventListener("click", () => {
      console.log(`${BASE_URL}index.html`);
      location.href = `${BASE_URL}index.html`;
    });

  if (about) {
    about.addEventListener("click", () => {
      location.href = `${BASE_URL}views/about.html`;
    });
  }
  if (contact) {
    contact.addEventListener("click", () => {
      location.href = `${BASE_URL}views/contact.html`;
    });
  }
  if (iniciar) {
    iniciar.addEventListener("click", () => {
      location.href = `${BASE_URL}views/services.html`;
    });
  }

  // Añadir cursor pointer a todos los elementos clicables
  const clickableElements = [
    article_1, article_2, article_3, article_4, article_5, article_6,
    index, about, contact, iniciar
  ];

  clickableElements.forEach(el => {
    if (el) {
      el.style.cursor = "pointer";
    }
  });
});
