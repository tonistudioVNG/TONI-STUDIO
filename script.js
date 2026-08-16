/* =========================================
   VISOR DE IMÁGENES
========================================= */


function openImage(src, alt) {

    const modal = document.getElementById("image-modal");
    const modalImage = document.getElementById("modal-image");

    modalImage.src = src;
    modalImage.alt = alt;

    modal.style.display = "flex";

}



function closeImage() {

    const modal = document.getElementById("image-modal");

    modal.style.display = "none";

}



/* =========================================
   SISTEMA DE IDIOMAS
========================================= */


function changeLanguage(language) {


    fetch(`lang/${language}.json`)

        .then(response => response.json())

        .then(data => {


            document.querySelectorAll("[data-key]").forEach(element => {


                const key = element.getAttribute("data-key");


                if (data[key]) {


                    element.textContent = data[key];


                }


            });


        })


        .catch(error => {


            console.error("Error cargando idioma:", error);


        });


}