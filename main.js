// =========================
// MENÚ HAMBURGUESA
// =========================

const menuBtn = document.getElementById("menuBtn");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});

// Cerrar menú al seleccionar una opción
document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("active");
    });
});


// =========================
// MENÚ POR CATEGORÍAS
// =========================

function mostrarMenu(categoria) {

    // Ocultar todas las categorías
    const menus = document.querySelectorAll(".menu-content");

    menus.forEach(menu => {
        menu.classList.remove("active-menu");
    });

    // Mostrar la categoría seleccionada
    const menuSeleccionado = document.getElementById(categoria);

    if (menuSeleccionado) {
        menuSeleccionado.classList.add("active-menu");
    }
    const seccionMenu = document.getElementById(categoria);

    if (seccionMenu) {
        seccionMenu.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });
    }

    // Cambiar botón activo
    document.querySelectorAll(".categoria-btn").forEach(btn => {
        btn.classList.remove("active");
    });

    // Buscar el botón presionado
    botones.forEach(btn => {
        const texto = btn.textContent.toLowerCase();

        if (
            (categoria === "sopas" && texto.includes("sopas")) ||
            (categoria === "birria" && texto.includes("birria")) ||
            (categoria === "rapidas" && texto.includes("rápidas")) ||
            (categoria === "batidos" && texto.includes("batidos")) ||
            (categoria === "calientes" && texto.includes("calientes")) ||
            (categoria === "carnes" && texto.includes("carnes")) ||
            (categoria === "pastas" && texto.includes("pastas")) ||
            (categoria === "desayunos" && texto.includes("desayunos")) ||
            (categoria === "platos-fuertes" && texto.includes("platos fuertes")) ||
            (categoria === "arroces" && texto.includes("arroces"))
        ) {
            btn.classList.add("active");
        }
    });
}


// =========================
// CARGA INICIAL
// =========================

document.addEventListener("DOMContentLoaded", () => {

    // Ocultar todos los menús
    document.querySelectorAll(".menu-content").forEach(menu => {
        menu.classList.remove("active-menu");
    });

    // Mostrar Sopas por defecto
    const menuInicial = document.getElementById("sopas");

    if (menuInicial) {
        menuInicial.classList.add("active-menu");
    }

    // Activar primer botón
    const primerBoton = document.querySelector(".categoria-btn");

    if (primerBoton) {
        primerBoton.classList.add("active");
    }

    // =========================
    // ACCORDION (SUBMENÚS)
    // =========================

    const accordionBtns = document.querySelectorAll(".accordion-btn");

    accordionBtns.forEach(btn => {
        btn.addEventListener("click", () => {

            const panel = btn.nextElementSibling;

            // cerrar otros paneles (opcional pero recomendado)
            document.querySelectorAll(".accordion-panel").forEach(p => {
                if (p !== panel) {
                    p.classList.remove("active");
                    p.style.maxHeight = null;
                }
            });

            // toggle del actual
            btn.classList.toggle("active");
            panel.classList.toggle("active");

            if (panel.classList.contains("active")) {
                panel.style.maxHeight = panel.scrollHeight + "px";
            } else {
                panel.style.maxHeight = null;
            }

        });
    });

    const themeBtn = document.getElementById("themeBtn");

    themeBtn.addEventListener("click", () => {

        document.body.classList.toggle("dark-mode");

        if (document.body.classList.contains("dark-mode")) {
            themeBtn.textContent = "☀️";
        } else {
            themeBtn.textContent = "🌙";
        }

    });

    let fontSize = 16;

    const fontPlus = document.getElementById("fontPlus");
    const fontMinus = document.getElementById("fontMinus");

    fontPlus.addEventListener("click", () => {

        if (fontSize < 24) {
            fontSize += 2;
            document.documentElement.style.setProperty(
                "--font-size-base",
                fontSize + "px"
            );
        }

    });

    fontMinus.addEventListener("click", () => {

        if (fontSize > 12) {
            fontSize -= 2;
            document.documentElement.style.setProperty(
                "--font-size-base",
                fontSize + "px"
            );
        }

    });

});