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


function includeHTML() {
    var z, i, elmnt, file, xhttp;
    /* Loop through a collection of all HTML elements: */
    z = document.getElementsByTagName("*");
    for (i = 0; i < z.length; i++) {
      elmnt = z[i];
      /*search for elements with a certain attribute:*/
      file = elmnt.getAttribute("w3-include-html");
      if (file) {
        /* Make an HTTP request using the attribute value as the file name: */
        xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
          if (this.readyState == 4) {
            if (this.status == 200) {elmnt.innerHTML = this.responseText;}
            if (this.status == 404) {elmnt.innerHTML = "Page not found.";}
            /* Remove the attribute, and call this function once more: */
            elmnt.removeAttribute("w3-include-html");
            includeHTML();
          }
        }
        xhttp.open("GET", file, true);
        xhttp.send();
        /* Exit the function: */
        return;
      }
    }
  }
