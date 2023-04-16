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
    // else if ((document.querySelector("body").offsetHeight-5) <= (window.innerHeight + window.scrollY) ){
    //     const element = document.querySelector(".navbar-nav").lastElementChild.firstElementChild;
    //     if (element.classList.contains("active")){
    //         return;
    //     }
    //     else {
    //         navbarLink.forEach((x)=> {
    //             x.className = "nav-link";
    //         });
    //         element.classList.add("active");
    //     }
    // }
});

// Función que deja activo en el navbar el item seleccionado
const navbarLink = document.querySelectorAll(".nav-link");
navbarLink.forEach((elemento) => {
    elemento.addEventListener("click", (e)=> {

        navbarLink.forEach((x)=> {
            x.className = "nav-link";
        });
        e.target.classList.add("active");
    })
});

document.querySelectorAll(".fa-brands").forEach((elemento) => {
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
    });
});

