// Ajoute un gestionnaire d'événements pour l'envoi du formulaire
document.getElementById('form').addEventListener('submit', (e) => {
    e.preventDefault();  // Empêche l'envoi classique du formulaire pour permettre un traitement en JavaScript

    // Récupère les valeurs des champs du formulaire
    const message = document.getElementById('messageInput').value; // Le texte du message à afficher
    const textColor = document.getElementById('textColorInput').value; // La couleur du texte
    const textSize = document.getElementById('fontSizeSelect').value; // La taille du texte
    const bgColor = document.getElementById('bgColorInput').value; // La couleur d'arrière-plan
    const imageUrl = document.getElementById('imageUrlInput').value; // L'URL de l'image de fond

    // Vérifie si l'URL de l'image commence bien par 'http://' ou 'https://'
    if (!imageUrl.startsWith('http://') && !imageUrl.startsWith('https://')) {
        alert("L'URL de l'image doit commencer par 'http://' ou 'https://'"); // Affiche un message d'alerte
        return; // Arrête l'exécution de la fonction si l'URL n'est pas valide
    }

    // Récupère les éléments de la page pour l'aperçu
    const cardText = document.getElementById('cardText'); // L'élément pour le texte de la carte
    const cardPreview = document.getElementById('cardPreview'); // L'élément représentant la prévisualisation de la carte
    const imgContainer = document.getElementById('img'); // L'élément de l'image de fond

    // Applique les paramètres récupérés au formulaire pour personnaliser l'aperçu de la carte
    imgContainer.src = imageUrl; // Définit la source de l'image
    imgContainer.style.backgroundSize = 'cover'; // Ajuste la taille de l'arrière-plan pour couvrir entièrement l'espace

    cardText.innerText = message; // Affiche le message dans l'élément prévu
    cardText.style.color = textColor; // Applique la couleur du texte
    cardText.classList.add(textSize); // Ajoute la classe correspondant à la taille du texte

    cardPreview.style.backgroundColor = bgColor; // Change la couleur d'arrière-plan de l'aperçu de la carte
});
