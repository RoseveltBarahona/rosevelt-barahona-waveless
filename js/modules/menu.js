
function toggleMenuState(menu, hamburgerButton) {
    document.body.classList.toggle("u-no-scroll-open-menu");
    hamburgerButton.classList.toggle("header__hamburger-menu--open");
    menu.classList.toggle("navbar--open");
}

export function initMenu() {
    const menu = document.querySelector("#menu");
    const hamburgerButton = document.querySelector("#menu-hamburger-button");
    const closeMenuMobile = document.querySelector("#navbar-menu-close");

    if (!menu || !hamburgerButton) return;
    hamburgerButton.addEventListener("click", () => {
        toggleMenuState(menu, hamburgerButton);
    })

    closeMenuMobile.addEventListener("click", () => {
        toggleMenuState(menu, hamburgerButton);
    })
}