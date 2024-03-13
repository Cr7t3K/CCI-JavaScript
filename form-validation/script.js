// Définit une fonction pour valider les adresses e-mail
function emailValidation(input) {
    // Récupère l'élément HTML qui affiche le message d'erreur pour l'email
    const errorMessage = document.getElementById("emailError");

    // Vérifie si l'entrée contient un "@"
    if (input.value.includes("@")) {
        // Si l'adresse e-mail est valide (contient "@"), cache le message d'erreur
        errorMessage.classList.add("hidden");
        // Et retire les styles d'erreur de l'entrée de l'e-mail
        input.classList.remove("outline", "outline-1", "outline-red-400");
    } else {
        // Si l'adresse e-mail n'est pas valide, affiche le message d'erreur
        errorMessage.classList.remove("hidden");
        // Et ajoute des styles d'erreur à l'entrée de l'e-mail
        input.classList.add("outline", "outline-1", "outline-red-400");
    }
}

// Définit une fonction pour valider les noms d'utilisateur
function usernameValidation(input) {
    // Récupère l'élément HTML qui affiche le message d'erreur pour le nom d'utilisateur
    const errorMessage = document.getElementById("usernameError");

    // Vérifie si la longueur de l'entrée est supérieure à 5 caractères
    if (input.value.length > 5) {
        // Si le nom d'utilisateur est assez long, cache le message d'erreur
        errorMessage.classList.add("hidden");
        // Et retire les styles d'erreur de l'entrée du nom d'utilisateur
        input.classList.remove("outline", "outline-1", "outline-red-400");
    } else {
        // Si le nom d'utilisateur est trop court, affiche le message d'erreur
        errorMessage.classList.remove("hidden");
        // Et ajoute des styles d'erreur à l'entrée du nom d'utilisateur
        input.classList.add("outline", "outline-1", "outline-red-400");
    }
}

// Récupère les éléments d'entrée de l'e-mail et du nom d'utilisateur du document HTML
const emailInput = document.getElementById("email");
const usernameInput = document.getElementById("username");

// Ajoute un gestionnaire d'événements qui valide l'adresse e-mail à chaque fois que l'utilisateur tape
emailInput.addEventListener("input", function () {
    emailValidation(emailInput);
})

// Ajoute un gestionnaire d'événements qui valide le nom d'utilisateur à chaque fois que l'utilisateur tape
usernameInput.addEventListener("input", function () {
    usernameValidation(usernameInput);
})
