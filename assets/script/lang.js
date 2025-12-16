document.addEventListener("DOMContentLoaded", function () {
    const langSelector = document.querySelector(".square__laguages a");
    const elementsToTranslate = document.querySelectorAll("[data-lang-key]");

    // Cargar idioma guardado en localStorage
    let currentLang = localStorage.getItem("lang") || "es";
    loadLanguage(currentLang);

    langSelector.addEventListener("click", function (event) {
        event.preventDefault();
        currentLang = currentLang === "es" ? "en" : "es";
        localStorage.setItem("lang", currentLang);
        loadLanguage(currentLang);
    });

    function loadLanguage(lang) {
        fetch("../assets/lang/lang.json")
            .then(response => response.json())
            .then(data => {
                elementsToTranslate.forEach(element => {
                    const key = element.getAttribute("data-lang-key");
                    element.textContent = data[lang][key];
                });
            })
            .catch(error => console.error("Error cargando idioma:", error));

        // Actualizar el botón de idioma
        langSelector.textContent = lang.toUpperCase();
    }
});
