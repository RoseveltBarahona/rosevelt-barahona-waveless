
import { initMenu } from "./modules/menu.js";
import { initSlider } from "./modules/slider.js";
import { initCardCloseEvents } from './modules/cardEvents.js'; 
import { initFilterMenuEvents } from './modules/filterMenuEvents.js'; 
import { initializeFilters } from './modules/filter.js'; 

document.addEventListener("DOMContentLoaded", () => {
  initMenu()
  initSlider()
  initCardCloseEvents()
  initFilterMenuEvents()
  initializeFilters()
})




