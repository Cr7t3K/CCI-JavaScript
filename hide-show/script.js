const div = document.getElementById("div");
const btn = document.getElementById("toggleDiv");

// Méthode avec la modification avec l'ajout ou la suppression d'une class css
btn.addEventListener("click", function() {
    div.classList.toggle("hidden")
})

// Méthode avec la modification directement dans le style css inline
btn.addEventListener("click", function() {
    if (div.style.display === "block" || div.style.display === "") {
        div.style.display = "none";
    } else {
        div.style.display = "block";
    }
})

// Méthode avec l'attribut d'événement HTML onclick (voir le HHTML)
function toggleDiv() {
    if (div.style.display === "block" || div.style.display === "") {
        div.style.display = "none";
    } else {
        div.style.display = "block";
    }
}


// Méthode avec l'attribut d'événement HTML onclick (voir le HHTML)
// Syntaxe ES6
const toggleDiv = () => {
    if (div.style.display === "block" || div.style.display === "") {
        div.style.display = "none";
    } else {
        div.style.display = "block";
    }
}