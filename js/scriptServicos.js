window.addEventListener('load', function() {
    var width = window.screen.width;
    var height = window.screen.height;
    console.log('Resolução da tela: ' + width + 'x' + height + ' - scriptContatos.js OK');
});

document.addEventListener("DOMContentLoaded", function () {
    const links = document.querySelectorAll(".nav-link");
    const indicador = document.querySelector(".indicador");

    function moveIndicador(link) {
        indicador.style.left = link.offsetLeft + "px"; 
        indicador.style.width = link.offsetWidth + "px"; 
    }

    function setActivePage() {
        const currentPage = window.location.pathname.split("/").pop(); 
        links.forEach(link => {
            if (link.getAttribute("href") === currentPage) {
                moveIndicador(link);
                localStorage.setItem("activePage", currentPage);
            }
        });
    }

    setActivePage();

    links.forEach(link => {
        link.addEventListener("click", function () {
            moveIndicador(this);
            localStorage.setItem("activePage", this.getAttribute("href"));
        });
    });

    window.addEventListener("load", function () {
        const savedPage = localStorage.getItem("activePage");
        if (savedPage) {
            links.forEach(link => {
                if (link.getAttribute("href") === savedPage) {
                    moveIndicador(link);
                }
            });
        }
    });
});