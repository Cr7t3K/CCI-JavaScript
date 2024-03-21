// Récupérer l'élément bouton pour le texte depuis le document HTML
const btnText = document.getElementById('btnText');
// Récupérer l'élément bouton pour la couleur depuis le document HTML
const btnColor = document.getElementById('btnColor');

// Récupérer l'élément de champ de saisie pour le texte depuis le document HTML
const inputText = document.getElementById('text');
// Récupérer l'élément de champ de saisie pour la couleur depuis le document HTML
const inputColor = document.getElementById('color');

// Récupérer l'élément du titre depuis le document HTML
const title = document.getElementById('title');

// Ajouter un écouteur d'événement sur le bouton de texte
btnText.addEventListener("click", function (){
    // Mettre à jour le contenu HTML de l'élément titre avec le texte saisi,
    // en supprimant les espaces au début et à la fin (trimming)
    title.innerHTML = inputText.value.trim();
})

// Ajouter un écouteur d'événement sur le bouton de couleur
btnColor.addEventListener("click", function (){
    // Modifier la couleur de fond du corps du document HTML 
    // avec la valeur choisie dans le champ de couleur
    document.body.style.backgroundColor = inputColor.value;
})
