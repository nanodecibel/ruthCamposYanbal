

function openLightbox(image) {
    const lightbox = document.querySelector('.lightbox');
    const lightboxImg = lightbox.querySelector('img');
    lightboxImg.src = image.src;
    lightbox.style.display = 'block';
}

function closeLightbox() {
    const lightbox = document.querySelector('.lightbox');
    lightbox.style.display = 'none';
}
function showInfoAndScroll(divNumber) {
    // Ocultar todos los divs con id que empiece con "infoDiv"
    const allInfoDivs = document.querySelectorAll('[id^="infoDiv"]');
    allInfoDivs.forEach(div => {
        div.style.display = 'none';
    });

    // Mostrar el div específico
    const infoDiv = document.getElementById(`infoDiv${divNumber}`);
    infoDiv.style.display = 'block';

    // Hacer scroll hacia el div
    infoDiv.scrollIntoView({ behavior: 'smooth' });
}

document.addEventListener("DOMContentLoaded", function() {
    // Tu código JavaScript aquí
    
    // Escuchar el evento de cambio de pestaña "¿Por qué adquirir un kit de bienvenida?"
    const tabKitDeBienvenida = document.getElementById('kitDeBienvenida');
    tabKitDeBienvenida.addEventListener('click', () => {
        // Ocultar todos los divs con id que empiece con "infoDiv"
        const allInfoDivs = document.querySelectorAll('[id^="infoDiv"]');
        allInfoDivs.forEach(div => {
            div.style.display = 'none';
        });
    });

    // Escuchar el evento de cambio de pestaña "Opciones kits de bienvenida"
    const tabElInicioPerfecto = document.getElementById('elInicioPerfecto');
    tabElInicioPerfecto.addEventListener('click', () => {
        // Ocultar todos los divs con id que empiece con "infoDiv"
        const allInfoDivs = document.querySelectorAll('[id^="infoDiv"]');
        allInfoDivs.forEach(div => {
            div.style.display = 'none';
        });
    });
});

