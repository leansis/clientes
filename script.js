const GOZEN_APP = {
    screens: [
        {
            title: "Panel de Administración",
            description: "Gestión centralizada de empresas y usuarios con acceso maestro.",
            image: "imagenes/gozen-paneladmin.png"
        },
        {
            title: "Matriz de Polivalencia",
            description: "Visualización técnica de equipos, procesos y autoevaluaciones en tiempo real.",
            image: "imagenes/gozen-matriz.png"
        }
    ]
};

const JUMOSOL_APP = {
    screens: [
        {
            title: "Dashboard OEE",
            description: "Cuadro de mando del área que muestra en tiempo real los tres indicadores OEE.",
            image: "imagenes/jumosol-top5-dash.png"
        },
        {
            title: "Gestión TOP 60",
            description: "Módulo de dirección que agrupa las herramientas de análisis y reporte.",
            image: "imagenes/jumosol-top60.png"
        }
    ]
};

const SGAP_APP = {
    screens: [
        {
            title: "Mapa de navegacion",
            description: "La siguiente imagen muestra el mapa de navegación completo de la aplicación.",
            image: "imagenes/sgaP-mapa.png"
        }
    ]
};

const ENRUTADOR_APP = {
    screens: [
        {
            title: "Plantillas de excel",
            description: "A continuacion se pueden descargar plantillas de excel para la aplicacion.",
            image1: "imagenes/enrutador-necesidades.png",
            image2: "imagenes/enrutador-flota.png",
            image3: "imagenes/enrutador-restricciones.png"
        }
    ]
};


function renderApps() {
    const gozenGrid = document.getElementById('grid-gozen');
    const jumosolGrid = document.getElementById('grid-jumosol');
    const sgaPGrid = document.getElementById('grid-sgaP');
    const enrutadorGrid = document.getElementById('grid-enrutador');


    if (gozenGrid) {
        gozenGrid.innerHTML = GOZEN_APP.screens.map((screen) => `
            <div class="screenshot-container">
                <div class="screenshot-info">
                    <h3>${screen.title}</h3>
                    <p>${screen.description}</p>
                </div>
                <img src="${screen.image}" alt="${screen.title}" class="screenshot-img" onerror="this.src='https://placehold.co/1200x800/f8f9fa/333333?text=${encodeURIComponent(screen.title)}'">
            </div>
        `).join('');
    }

    if (jumosolGrid) {
        jumosolGrid.innerHTML = JUMOSOL_APP.screens.map((screen) => `
            <div class="screenshot-container">
                <div class="screenshot-info">
                    <h3>${screen.title}</h3>
                    <p>${screen.description}</p>
                </div>
                <img src="${screen.image}" alt="${screen.title}" class="screenshot-img" onerror="this.src='https://placehold.co/1200x800/f8f9fa/333333?text=${encodeURIComponent(screen.title)}'">
            </div>
        `).join('');
    }

    if (sgaPGrid) {
        sgaPGrid.innerHTML = SGAP_APP.screens.map((screen) => `
            <div class="screenshot-container">
                <div class="screenshot-info">
                    <h3>${screen.title}</h3>
                    <p>${screen.description}</p>
                </div>
                <img src="${screen.image}" alt="${screen.title}" class="screenshot-img" onerror="this.src='https://placehold.co/1200x800/f8f9fa/333333?text=${encodeURIComponent(screen.title)}'">
            </div>
        `).join('');
    }

    if (enrutadorGrid) {
        enrutadorGrid.innerHTML = ENRUTADOR_APP.screens.map((screen) => `
            <div class="screenshot-container">
                <div class="screenshot-info">
                    <h3>${screen.title}</h3>
                    <p>${screen.description}</p>
                </div>
                <div style="display:flex; flex-direction:row; background:white;">
                    <img src="${screen.image1}" class="img-enlace" alt="${screen.title}" class="screenshot-img" onerror="this.src='https://placehold.co/1200x800/f8f9fa/333333?text=${encodeURIComponent(screen.title)}'">
                    <img src="${screen.image2}" class="img-enlace" style="width:34%;" alt="${screen.title}" class="screenshot-img" onerror="this.src='https://placehold.co/1200x800/f8f9fa/333333?text=${encodeURIComponent(screen.title)}'">
                    <img src="${screen.image3}" class="img-enlace" alt="${screen.title}" class="screenshot-img" onerror="this.src='https://placehold.co/1200x800/f8f9fa/333333?text=${encodeURIComponent(screen.title)}'">
                </div>
            </div>
        `).join('');
    }
    
    initScrollReveal();
}

function initScrollReveal() {
    const observerOptions = {
        threshold: 0.15,
        rootMargin: "0px 0px -50px 0px"
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('reveal');
            }
        });
    }, observerOptions);

    const targetElements = document.querySelectorAll('.screenshot-container, .video-container, .feature-row');
    targetElements.forEach(el => observer.observe(el));
}

function setYear() {
    const yearEl = document.getElementById('year');
    if (yearEl) {
        yearEl.textContent = new Date().getFullYear();
    }
}

document.addEventListener('DOMContentLoaded', () => {
    renderApps();
    setYear();
});
