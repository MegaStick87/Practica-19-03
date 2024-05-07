// Voltea las cartas .flipped!
var cards = document.querySelectorAll('.card');
cards.forEach(function(card) {
    card.addEventListener('click', function() {
        card.classList.toggle('flipped');
    });
});
/* Selecciona todas las tarjetas y agrega un evento de clic a cada una para alternar la 
clase 'flipped', que activa el efecto de volteo */
