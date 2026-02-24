/* =========================================
   1. INICIALIZACIÓN DE LIBRERÍAS (AOS)
   ========================================= */
document.addEventListener('DOMContentLoaded', () => {
    AOS.init({
        duration: 800,
        once: true,
    });

    // BONUS: Recuperar el idioma guardado al cargar la página
    const savedLang = localStorage.getItem('selectedLang');
    if (savedLang === 'en') {
        currentLang = 'es'; 
        toggleLanguage();
    }
});

/* =========================================
   2. MENÚ HAMBURGUESA
   ========================================= */
function toggleMenu() {
    const navLinks = document.getElementById('navLinks');
    const hamburger = document.querySelector('.hamburger'); 
    
    navLinks.classList.toggle('active');
    hamburger.classList.toggle('active');
    
    if (navLinks.classList.contains('active')) {
        document.body.style.overflow = 'hidden';
    } else {
        document.body.style.overflow = 'auto';
    }
}

/* =========================================
   3. SISTEMA DE TRADUCCIÓN COMPLETO (ALL PAGES)
   ========================================= */

const translations = {
    es: {
        btn: "EN",
        
        // NAVBAR
        navHome: "INICIO",
        navDestacados: "DESTACADOS",
        navAbout: "SOBRE MÍ",

        // HOME (INDEX)
        heroTitle: '<span class="gradient-text">Diseño,</span><br><span class="highlight">Desarrollo</span><br><span class="gradient-text">& Gestiono.</span>',
        pitch: "Diseñador de Producto End-to-End con enfoque en la creación de soluciones integrales durante todo su ciclo de vida.",
        
        // DESTACADOS
        destTitle: "Selección de Trabajo",
        destSubtitle: "Explora mi portfolio dividido por su naturaleza.",
        catIndustrial: "DISEÑO INDUSTRIAL",
        catDigital: "DISEÑO UX/UI y DIGITAL",

        // ABOUT ME
        aboutTitle: '<span class="gradient-text">Innovación con</span><br><span class="highlight">Propósito.</span>',
        aboutDesc: "Soy Emanuel, un Diseñador de Producto que vive en Buenos Aires. Actúo como un mediador, no solo entre la función, la estética y la experiencia de usuario, sino también entre los distintos equipos de trabajo. Traduzco necesidades en soluciones claras para crear productos que aporten valor tanto a las personas como al negocio.",
        
        // About - Bento Grid Labels
        lblInterests: "Intereses",
        valInterests: "Desarrollo de Productos y Servicios",
        lblFocus: "Foco",
        valFocus: "Diseño End to End",
        lblLocation: "Ubicación",
        valLocation: "CABA, Argentina",
        
        // About - Methodologies
        lblMethodologies: "Mis Metodologías",
        titleReq: "Diseño basado en Requisitos", // <--- AGREGADO
        descDt: "Investigo y empatizo profundamente para entender la raíz del problema antes de proponer cualquier solución visual.",
        descHcd: "Pongo a las personas en el centro de la ecuación. Mi prioridad es validar que el producto resuelva necesidades reales del usuario, minimizando la fricción.",
        descDs: "Rapidez estratégica. Facilito la validación de ideas en etapas tempranas mediante prototipado rápido y testeo, reduciendo el riesgo de invertir en el camino equivocado.",
        descLean: "Diseño iterativo y eficiente. Me integro en flujos de trabajo ágiles, priorizando la entrega de valor constante y la colaboración fluida con equipos de desarrollo.",
        descReq: "Traduzco objetivos de negocio y limitaciones técnicas en especificaciones claras, asegurando que el producto sea viable, factible y deseable.",

        // FOOTER & EXTRAS
        footer: "¿Hablamos de diseño?", 
        viewProject: "VER PROYECTO",

        // --- AGREGAR ESTO EN ES ---
        // PÁGINA INDUSTRIAL
        indTitle: "Diseño Industrial &<br>Desarrollo de Producto.",
        backLink: "← Volver a Destacados",

        // PROYECTOS INDUSTRIAL
        p1t: "Bobina de Ignición Profesional", p1d: "Diseño y gestión de producto completo para vehículos.",
        p2t: "Andamio Interior", p2d: "Diseño de estructura metálica con gráfica y packaging.",
        p3t: "Balde Hormigonero", p3d: "Diseño de balde para hormigón.",
        p4t: "Tablón para Andamio", p4d: "Diseño de tablón para andamio de construcción.",
        p5t: "Trípode para puntales", p5d: "Diseño de trípode para puntales de construcción.",
        p6t: "Masterpack Ferrazzi", p6d: "Diseño de masterpack para productos de Ferrazzi.",
        p7t: "Packaging de producto Bosch", p7d: "Diseño de packaging para producto de Bosch.",
        p8t: "Puntal PEP15", p8d: "Diseño de puntal para estructuras de construcción.",
        p9t: "Mesa de Corte y Doblado", p9d: "Diseño de mesa para corte y doblado de fierros de construcción.",
        p10t: "Carpa Suspendida en el Aire", p10d: "Diseño de carpa suspendida en el aire para camping.",
        p11t: "Mochila Antirrobo", p11d: "Diseño de mochila antirrobo para protección de pertenencias.",
        p12t: "Sofá Modular", p12d: "Diseño de sofá modular para Interiour Forma.",
        p13t: "Accesorios Frame Miyake", p13d: "Diseño de accesorios familia de producto Miyake.",
        p14t: "Drone Vehículo Unipersonal", p14d: "Diseño de drone vehículo unipersonal para evento.",

        // PÁGINA DIGITAL
        digTitle: "Diseño Digital &<br>Sistemas UX/UI.",
        
        // PROYECTOS DIGITAL
        d1t: "Worki", d1d: "Aplicación para contratar servicios.",
        d2t: "Rebarmax", d2d: "Plataforma de gestión para producir barras de fibra de vidrio Barton.",
        d3t: "Seeker", d3d: "Aplicación de búsqueda de monopatines en tu ciudad.",
        d4t: "Appa", d4d: "Aplicación de los shoppings.",
        d5t: "Netvibe", d5d: "Página web para evento.",
        d6t: "Ecoser", d6d: "Aplicación de gestión de residuos para MacDonalds.",
        d7t: "Ferrazzi Social Media", d7d: "Contenido para redes sociales de @Ferrazzicompeticion.",
        // FOOTER CREDITS
        copyright: "© 2026. Diseñado y Codificado por Emanuel Morano Solé."
    },
    en: {
        btn: "ES",
        
        // NAVBAR
        navHome: "HOME",
        navDestacados: "WORK",
        navAbout: "ABOUT ME",

        // HOME (INDEX)
        heroTitle: '<span class="gradient-text">Designing,</span><br><span class="highlight">Developing</span><br><span class="gradient-text">& Managing.</span>',
        pitch: "End-to-End Product Designer focused on creating comprehensive solutions throughout their entire lifecycle.",
        
        // DESTACADOS
        destTitle: "Selected Work",
        destSubtitle: "Explore my portfolio divided by discipline.",
        catIndustrial: "INDUSTRIAL DESIGN",
        catDigital: "UX/UI & DIGITAL DESIGN",

        // ABOUT ME
        aboutTitle: '<span class="gradient-text">Innovation with</span><br><span class="highlight">Purpose.</span>',
        aboutDesc: "I am Emanuel, a Product Designer based in Buenos Aires. I act as a mediator, not only between function, aesthetics, and user experience, but also between different work teams. I translate needs into clear solutions to create products that provide value to both people and the business.",
        
        // About - Bento Grid Labels
        lblInterests: "Interests",
        valInterests: "Product & Service Development",
        lblFocus: "Focus",
        valFocus: "End-to-End Design",
        lblLocation: "Location",
        valLocation: "Buenos Aires, Argentina",

        // About - Methodologies
        lblMethodologies: "My Methodologies",
        titleReq: "Requirements-Based Design", // <--- AGREGADO
        descDt: "I research and empathize deeply to understand the root of the problem before proposing any visual solution.",
        descHcd: "I put people at the center of the equation. My priority is to validate that the product solves real user needs, minimizing friction.",
        descDs: "Strategic speed. I facilitate the validation of ideas in early stages through rapid prototyping and testing, reducing the risk of investing in the wrong path.",
        descLean: "Iterative and efficient design. I integrate into agile workflows, prioritizing constant value delivery and fluid collaboration with development teams.",
        descReq: "I translate business goals and technical limitations into clear specifications, ensuring the product is viable, feasible, and desirable.",

        // FOOTER & EXTRAS
        footer: "Let's talk design?",
        viewProject: "VIEW PROJECT",
        // --- AGREGAR ESTO EN EN ---
        // INDUSTRIAL PAGE
        indTitle: "Industrial Design &<br>Product Development.",
        backLink: "← Back to Work",

        // INDUSTRIAL PROJECTS
        p1t: "Professional Ignition Coil", p1d: "Complete product design and management for vehicles.",
        p2t: "Interior Scaffolding", p2d: "Metal structure design with graphics and packaging.",
        p3t: "Concrete Bucket", p3d: "Design of a bucket for concrete pouring.",
        p4t: "Scaffolding Plank", p4d: "Design of a plank for construction scaffolding.",
        p5t: "Prop Tripod", p5d: "Design of a tripod for construction props.",
        p6t: "Ferrazzi Masterpack", p6d: "Masterpack design for Ferrazzi products.",
        p7t: "Bosch Product Packaging", p7d: "Packaging design for Bosch products.",
        p8t: "PEP15 Prop", p8d: "Prop design for construction structures.",
        p9t: "Cutting & Bending Table", p9d: "Table design for cutting and bending construction iron.",
        p10t: "Suspended Air Tent", p10d: "Design of a suspended tent for camping or leisure.",
        p11t: "Anti-theft Backpack", p11d: "Anti-theft backpack design for belongings protection.",
        p12t: "Modular Sofa", p12d: "Modular sofa design for Interiour Forma.",
        p13t: "Frame Miyake Accessories", p13d: "Design of accessories for the Miyake product family.",
        p14t: "Personal Drone Vehicle", p14d: "Personal drone vehicle design for airfield events.",

        // DIGITAL PAGE
        digTitle: "Digital Design &<br>UX/UI Systems.",
        
        // DIGITAL PROJECTS
        d1t: "Worki", d1d: "Service hiring application.",
        d2t: "Rebarmax", d2d: "Management platform for producing Barton fiberglass bars.",
        d3t: "Seeker", d3d: "Scooter search application in your city.",
        d4t: "Appa", d4d: "Shopping mall application.",
        d5t: "Netvibe", d5d: "Event website.",
        d6t: "Ecoser", d6d: "Waste management application for McDonald's.",
        d7t: "Ferrazzi Social Media", d7d: "Social media content for @Ferrazzicompeticion.",
        // FOOTER CREDITS
        copyright: "© 2026. Designed & Coded by Emanuel Morano Solé."
    }
};

let currentLang = 'es'; 

window.toggleLanguage = function() {
    currentLang = currentLang === 'es' ? 'en' : 'es';
    localStorage.setItem('selectedLang', currentLang);
    const t = translations[currentLang];

    // 1. HEADER / NAVBAR
    const langBtn = document.getElementById('lang-toggle');
    if(langBtn) langBtn.textContent = t.btn;
    if(document.getElementById('nav-home')) document.getElementById('nav-home').textContent = t.navHome;
    if(document.getElementById('nav-destacados')) document.getElementById('nav-destacados').textContent = t.navDestacados;
    if(document.getElementById('nav-about')) document.getElementById('nav-about').textContent = t.navAbout;

    // 2. HOME ELEMENTS
    if(document.getElementById('hero-title')) document.getElementById('hero-title').innerHTML = t.heroTitle;
    if(document.getElementById('pitch-text')) document.getElementById('pitch-text').textContent = t.pitch;
    
    // 3. DESTACADOS ELEMENTS
    if(document.getElementById('destacados-title')) document.getElementById('destacados-title').textContent = t.destTitle;
    if(document.getElementById('destacados-subtitle')) document.getElementById('destacados-subtitle').textContent = t.destSubtitle;
    if(document.getElementById('cat-industrial')) document.getElementById('cat-industrial').textContent = t.catIndustrial;
    if(document.getElementById('cat-digital')) document.getElementById('cat-digital').textContent = t.catDigital;

    // 4. ABOUT ELEMENTS
    if(document.getElementById('about-title')) document.getElementById('about-title').innerHTML = t.aboutTitle;
    if(document.getElementById('about-desc')) document.getElementById('about-desc').textContent = t.aboutDesc;
    
    // About Bento
    if(document.getElementById('lbl-interests')) document.getElementById('lbl-interests').textContent = t.lblInterests;
    if(document.getElementById('val-interests')) document.getElementById('val-interests').textContent = t.valInterests;
    if(document.getElementById('lbl-focus')) document.getElementById('lbl-focus').textContent = t.lblFocus;
    if(document.getElementById('val-focus')) document.getElementById('val-focus').textContent = t.valFocus;
    if(document.getElementById('lbl-location')) document.getElementById('lbl-location').textContent = t.lblLocation;
    if(document.getElementById('val-location')) document.getElementById('val-location').textContent = t.valLocation;

    // About Methodologies
    if(document.getElementById('lbl-methodologies')) document.getElementById('lbl-methodologies').textContent = t.lblMethodologies;
    if(document.getElementById('title-req')) document.getElementById('title-req').textContent = t.titleReq; // <--- AGREGADO
    if(document.getElementById('desc-dt')) document.getElementById('desc-dt').textContent = t.descDt;
    if(document.getElementById('desc-hcd')) document.getElementById('desc-hcd').textContent = t.descHcd;
    if(document.getElementById('desc-ds')) document.getElementById('desc-ds').textContent = t.descDs;
    if(document.getElementById('desc-lean')) document.getElementById('desc-lean').textContent = t.descLean;
    if(document.getElementById('desc-req')) document.getElementById('desc-req').textContent = t.descReq;

    // 5. FOOTER & COMMON
    if(document.getElementById('footer-title')) document.getElementById('footer-title').textContent = t.footer;
    const overlays = document.querySelectorAll('.item-overlay');
    overlays.forEach(item => item.textContent = t.viewProject);

    // --- PEGAR ESTO AL FINAL DE LA FUNCIÓN toggleLanguage ---

    // 1. TÍTULO PRINCIPAL DE INDUSTRIAL
    const indTitle = document.getElementById('ind-title');
    if (indTitle) indTitle.innerHTML = t.indTitle;

    // 2. LINK DEL FOOTER (VOLVER)
    const footerBack = document.getElementById('footer-back');
    if (footerBack) footerBack.textContent = t.backLink;

    // 3. ACTUALIZAR LOS 14 PROYECTOS (Bucle automático)
    for (let i = 1; i <= 14; i++) {
        // Busca el título (ej: p1-title)
        const pTitle = document.getElementById(`p${i}-title`);
        if (pTitle) pTitle.textContent = t[`p${i}t`];

        // Busca la descripción (ej: p1-desc)
        const pDesc = document.getElementById(`p${i}-desc`);
        if (pDesc) pDesc.textContent = t[`p${i}d`];
    }

    // --- ACTUALIZACIÓN PÁGINA DIGITAL ---
    const digTitle = document.getElementById('dig-title');
    if (digTitle) digTitle.innerHTML = t.digTitle;

    // Bucle para los 7 proyectos digitales
    for (let i = 1; i <= 7; i++) {
        const dTitle = document.getElementById(`d${i}-title`);
        if (dTitle) dTitle.textContent = t[`d${i}t`];

        const dDesc = document.getElementById(`d${i}-desc`);
        if (dDesc) dDesc.textContent = t[`d${i}d`];
    }
    // ACTUALIZAR COPYRIGHT
    const copyText = document.getElementById('copyright-text');
    if (copyText) copyText.textContent = t.copyright;
}