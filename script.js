
const menu = document.getElementById('menu-mobile');

function handleOpenMenu() {
    menu.classList.remove("disabled")
}

function handleCloseMenu() {
    menu.classList.add("disabled")
}