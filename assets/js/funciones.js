// AL CARGAR LA PÁGINA REGULA EL TAMAÑO DEL NAVBAR A LA VARIABLE CSS
window.addEventListener("load", () => {
    const NavPx = document.querySelector(".navbar").offsetHeight
    const ElementoUlNav = document.querySelector(".navbar-nav")
    const pixelesTotales = ElementoUlNav.childElementCount * 40 + NavPx
    document.documentElement.style.setProperty('--heightLarge', `${NavPx}px`)
    document.documentElement.style.setProperty('--heightSmall', `${pixelesTotales}px`)
});

// Función que empuja el contenido en el menú de hamburguesa
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

document.querySelectorAll(".fa-brands").forEach((elemento) => {
    elemento.addEventListener("mouseenter",(e)=>{
        e.target.classList.add("fa-bounce");
    });
    elemento.addEventListener("mouseleave", (e)=>{
        e.target.classList.remove("fa-bounce")
    });
});

document.querySelectorAll(".link-ver-mas-experiencia").forEach((elemento) => {
    elemento.addEventListener("click", (e) => {
        e.target.innerHTML = e.target.innerHTML === 'Ver más' ? 'Ver menos' : 'Ver más';
    });
});