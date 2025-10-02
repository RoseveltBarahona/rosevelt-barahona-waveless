import { DOMElements } from './constants.js';
const { filtersMenu } = DOMElements;

export function initializeFilters() {
    const checkBoxes = Array.from(document.querySelectorAll(".to-filter"));
    const totalCards = Array.from(document.querySelectorAll(".card"));

    if (checkBoxes.length === 0 || totalCards.length === 0) return;

    function applyFilters() {
        const activeFilters = checkBoxes
            .filter(checkbox => checkbox.checked)
            .map(checkbox => checkbox.value);

        if (activeFilters.length === 0) {
            totalCards.forEach(card => card.classList.remove("u-filters-hide-item"));
            return;
        }

        totalCards.forEach(card => {
            const cardFilters = card.dataset.filter || '';
            const shouldShow = activeFilters.some(filter => cardFilters.includes(filter));

            shouldShow
                ? card.classList.remove("u-filters-hide-item")
                : card.classList.add("u-filters-hide-item")
        })
    }

    filtersMenu.addEventListener("change", (e) => {
        if (e.target.matches(".to-filter")) {
            applyFilters();
        }
    })

    applyFilters();
}