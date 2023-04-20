// AL CARGAR LA PÁGINA REGULA EL TAMAÑO DEL NAVBAR A LA VARIABLE CSS
window.addEventListener("load", () => {
    const navbarHeight = document.querySelector(".navbar").offsetHeight
    document.documentElement.style.setProperty('--heightNavbar', `${navbarHeight}px`)
});

// Función cambia el estado del contenedor principal en función del navbar
document.querySelector("#nav-hamburguer-button").addEventListener("click", () => {
    // Obtiene el div principal
    const divPush = document.querySelector("#contenedor-pagina");

    // Según la clase realiza el cambio
    divPush.className === 'normal-size' ? divPush.className = "minimal-size" : divPush.className = "normal-size";
});

// Función Cambio tamaño por si el menú hamburguesa se queda abierto se reestablece
window.addEventListener("resize", () => {
    if (window.innerWidth >= 576) {
        const buttonHamburguer = document.querySelector("#nav-hamburguer-button");
    
        if (document.querySelector("#contenedor-pagina").className === 'minimal-size'){
            buttonHamburguer.click()
        }
    } 
});

// Función de apoyo por el padding existente del navbar para que el primer item se marque activo
window.addEventListener("scroll", () => {
    if (window.scrollY <= 40){
        const element = document.querySelector(".navbar-nav").firstElementChild.firstElementChild;

        if (element.classList.contains("active")){
            return;
        }
        else{
            element.classList.add("active");
        }
    }
});

// Función que mueve los links de las páginas
document.querySelectorAll(".footer-datos-personales .fa-brands").forEach((elemento) => {
    elemento.addEventListener("mouseenter",(e)=>{
        e.target.classList.add("fa-bounce");
    });
    elemento.addEventListener("mouseleave", (e)=>{
        e.target.classList.remove("fa-bounce")
    });
});

// Función de apoyo para link ver más
document.querySelectorAll(".link-ver-mas").forEach((elemento) => {
    elemento.addEventListener("click", (e) => {
        // Genera el link a remover efecto
        const linkID = e.target.innerHTML === 'Ver más' ? `#link-ver-menos-${e.target.id.slice(-1)}` : `#link-ver-mas-${e.target.getAttribute("data-value").slice(-1)}`;

        // Oculta el seleccionado
        e.target.innerHTML === 'Ver más' ? e.target.classList.add("d-none") :  document.querySelector(`#${e.target.getAttribute("data-value")}`).classList.add("d-none");

        // Muestra el contrario
        document.querySelector(linkID).classList.remove("d-none");
        // Retorna al inicio de la card
        document.querySelector(linkID).focus();
    });
});


//Activación tooltip
document.querySelectorAll('[data-bs-toggle="tooltip"]').forEach((tooltipTriggerEl)=> {
    return new bootstrap.Tooltip(tooltipTriggerEl)
});
// var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
// var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
//     return new bootstrap.Tooltip(tooltipTriggerEl)
// })

const certificados = {
    "certificado-basico": {"ruta": "assets/img/DiplomaPowerBasico.jpg", "titulo": "Certificación Básica Power BI"},
    "certificado-intermedio": {"ruta": "assets/img/DiplomaPowerBiIntermedio.jpg", "titulo": "Certificación Intermedia Power BI"},
}

// Función que muestra certificados
document.querySelectorAll(".boton-descargar").forEach((elemento)=>{
    elemento.addEventListener("click", (e) => {

        if (certificados.hasOwnProperty(e.target.id)){
            Swal.fire({
                html:`<div class="container-fluid">
                        <div class="row pt-4 text-center">
                            <h1 class="titulo-bloque text-white">${certificados[e.target.id]["titulo"]}</h1>
                        </div>
                        <hr class="separador-purple">
                        <div class="row">
                            <img src="${certificados[e.target.id]["ruta"]}" class="img-fluid">
                        </div>
                    </div>`,
                width: 1000,
                showCloseButton: true,
                allowOutsideClick: true,
                showCancelButton: false,
                showConfirmButton: false
            })
        }
    })
});

//Función que descarga CV en PDF
document.querySelector("#boton-descargar-cv").addEventListener("click", ()=>{

    const bodyIframe = document.querySelector("#cv-base64").contentWindow.document.body;
    const base64 = bodyIframe.querySelector("pre").innerHTML;

    const url = convertirBase64aURL(base64);
    descargarPDF(url);
    //para abrir en nueva página
    // window.open(url, "_blank");
    Swal.fire({
        position: 'center',
        icon: 'success',
        html: `<div class="row pt-4 text-center">
                    <h1 class="titulo-bloque text-white">Descargado con éxito!!</h1>
                </div>`,
        showConfirmButton: false,
        timer: 2000
    })
});

//Función que descarga una url en un PDF
const descargarPDF = (url) => {
    const link = document.createElement("a");
    link.style.display = "none";
    link.href = url;
    link.download = "cv-gerardo-moraga.pdf";
    link.click();
    link.remove();
};

// Función que convierte un base64 en una URL
const convertirBase64aURL = (base64) => {
    const caracteresBytes = atob(base64);
    const numeroBytes = new Array(caracteresBytes.length);

    for (let x = 0; x < caracteresBytes.length; x++){
        numeroBytes[x] = caracteresBytes.charCodeAt(x);
    }

    const arrayBytes = new Uint8Array(numeroBytes);

    const blob = new Blob([arrayBytes], {
        type: 'application/pdf'
    });

    return URL.createObjectURL(blob);
};

//Función que mostraba mensaje de portafolio en construcción
// document.querySelector("#link-portafolio").addEventListener("click", ()=>{
//     Swal.fire({
//         icon: 'info',
//         html: `<div class="row pt-4 text-center">
//                     <h1 class="titulo-bloque text-white">'Oops...'</h1>
//                     <h4 class="text-muted">Sitio en construcción</h4>
//                 </div>`,
//         showCloseButton: true,
//         allowOutsideClick: true,
//         showCancelButton: false,
//         showConfirmButton: true,
//         confirmButtonText: "Aceptar",
//         confirmButtonColor: "#7952B3"
//     })
// });