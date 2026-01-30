/* =========================================
   1. INICIALIZACIÓN DE LIBRERÍAS (AOS)
   ========================================= */
// Esperamos a que el DOM cargue
document.addEventListener('DOMContentLoaded', () => {
    AOS.init({
        duration: 800, // Duración de la animación
        once: true,    // Animar solo una vez
    });
});

/* =========================================
   2. MENÚ HAMBURGUESA
   ========================================= */
function toggleMenu() {
    const navLinks = document.getElementById('navLinks');
    const bars = document.querySelectorAll('.bar');
    
    // Toggle clase active
    navLinks.classList.toggle('active');
    
    // Animación de las barras (convertirse en X)
    if(navLinks.classList.contains('active')){
        bars[0].style.transform = "rotate(-45deg) translate(-5px, 6px)";
        bars[1].style.opacity = "0";
        bars[2].style.transform = "rotate(45deg) translate(-5px, -6px)";
    } else {
        bars[0].style.transform = "none";
        bars[1].style.opacity = "1";
        bars[2].style.transform = "none";
    }
}

/* =========================================
   3. TRADUCCIONES (Solo para Index)
   ========================================= */
// Verifica si estamos en la home para cargar traducciones
if (document.getElementById('lang-toggle')) {
    const translations = {
        es: {
            pitch: "Unificando el diseño industrial tangible con la experiencia digital intangible. Creando productos completos.",
            btn: "EN",
            footer: "¿Creamos algo nuevo?"
        },
        en: {
            pitch: "Bridging tangible industrial design with intangible digital experiences. Building complete products.",
            btn: "ES",
            footer: "Let's create something new?"
        }
    };

    let currentLang = 'es';

    window.toggleLanguage = function() {
        currentLang = currentLang === 'es' ? 'en' : 'es';
        const t = translations[currentLang];

        document.getElementById('lang-toggle').textContent = t.btn;
        // Usamos verificaciones por si algún elemento no existe
        if(document.getElementById('pitch-text')) document.getElementById('pitch-text').textContent = t.pitch;
        if(document.getElementById('footer-title')) document.getElementById('footer-title').textContent = t.footer;
    }
}