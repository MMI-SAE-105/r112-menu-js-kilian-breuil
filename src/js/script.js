// On cible les éléments à modifier
const toggle = document.querySelector('.menu-btn'); ;
const nav = document.querySelector('.menu');

// Ajoute un écouteur d'événements à l'élément 'toggle' qui écoute les événements 'click'.
toggle.addEventListener("click", () => {
    const expanded = toggle.getAttribute("aria-expanded") === "true" || false;
    toggle.setAttribute("aria-expanded", !expanded);
    nav.hidden = expanded;
    document.body.classList.add('no-scroll');
    const ariaHidden = nav.getAttribute("aria-hidden") === "true" || false;
    nav.setAttribute("aria-hidden", !ariaHidden);
    document.body.classList.remove('no-scroll');
  // Mise à jour des attributs ARIA pour accessibilité
  nav__________________;
  toggle__________________;
});