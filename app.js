// Click de los enlaces de navbar para seleccionar seccion
let menu = document.getElementById('navbarS');
let links = document.querySelectorAll('navbarS a');
for (let i = 0; i < links.length; i++) {
    links[i].onclick = () => {
        menu.style.display = 'none'
    }
}