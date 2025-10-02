import { DOMElements } from './constants.js'; 
const {filtersMenu} = DOMElements

function toggleFiltersMenu() {
    document.body.classList.toggle("u-no-scroll");
    filtersMenu.classList.toggle("filters--open");
}

function collapseViewMore(e) {
    let elem = e.target.closest(".filter__view-more");
    elem && elem.removeAttribute('open');
}

export function initFilterMenuEvents() {
    if (!filtersMenu) return;

    document.addEventListener('click', function (e) {
        // Open/close filter menu - mobile or tablet
        if (e.target.matches("#view-filters-btn, #filters__close-options")) {
            toggleFiltersMenu();
        }

        //view more/less options in filters
        if (e.target.classList.contains("filter__link-view-less")) {
            collapseViewMore(e);
        }
    })
}

