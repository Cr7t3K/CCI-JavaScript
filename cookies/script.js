// Obtention des références aux boutons par leurs identifiants.
const blueButton = document.getElementById('blueBtn');
const whiteButton = document.getElementById('whiteBtn');
const redButton = document.getElementById('redBtn');

// Essaie de récupérer la couleur de fond depuis les cookies du navigateur.
const bgColor = getCookie("bgColor");
// Si une couleur de fond est stockée, l'applique au fond du document.
if (bgColor) {
    document.body.style.backgroundColor = bgColor;
}

// Ajout d'écouteurs d'événements sur chaque bouton pour changer la couleur de fond quand ils sont cliqués.
blueButton.addEventListener("click", () => changeBackground('blue'));
whiteButton.addEventListener("click", () => changeBackground('white'));
redButton.addEventListener("click", () => changeBackground('red'));

// Définition de la fonction setCookie pour créer un cookie.
function setCookie(name, value, days) {
    const date = new Date();
    // Définit la date d'expiration du cookie.
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));

    // Création du cookie avec son nom, sa valeur et sa date d'expiration.
    document.cookie = `${name}=${value}; expires=${date.toUTCString()}`;
}

// Définition de la fonction changeBackground pour changer la couleur de fond et sauvegarder cette préférence dans un cookie.
function changeBackground(color) {
    // Change la couleur de fond du corps de la page.
    document.body.style.backgroundColor = color;
    // Sauvegarde la couleur de fond dans les cookies pour une utilisation future.
    setCookie('bgColor', color, 365);
}

function getCookie(name) {
    const cookies = document.cookie.split('; ');

    const value = cookies.find(cookie => cookie.startsWith(name + "="))?.split("=")[1];

    if (value === undefined) {
        return null;
    }

    return value;
}
