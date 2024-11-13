// On cible les éléments à modifier
const toggle = document.querySelector('.menu-btn'); ;
const nav = document.querySelector('.menu');

// Ajoute un écouteur d'événements à l'élément 'toggle' qui écoute les événements 'click'.
toggle.addEventListener("click", () => {
    const expanded = toggle.getAttribute("aria-expanded") === "true" || false;
    toggle.setAttribute("aria-expanded", !expanded);
    nav.hidden = expanded;
    const ariaHidden = nav.getAttribute("aria-hidden") === "true" || false;
    nav.setAttribute("aria-hidden", !ariaHidden);
  // Mise à jour des attributs ARIA pour accessibilité
  nav__________________;
  toggle__________________;
});