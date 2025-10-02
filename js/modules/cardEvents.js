
export function initCardCloseEvents() {
    const cardsContainer = document.querySelector("#cards-container");

    if (!cardsContainer) return;

    cardsContainer.addEventListener('click', function (e) {
        if (e.target.classList.contains("price-details__close")) {
            let element = e.target.closest(".price-details");            
            element.removeAttribute('open') 
        }
    })
}

