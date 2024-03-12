const btn = document.getElementById("applyColorButton");
const inputColor = document.getElementById("colorInput");
const errorText = document.getElementById("errorText");

btn.addEventListener("click", function() {
    let color = inputColor.value.trim();

    if (isValidColor(color)) {
        document.body.style.backgroundColor = color;
        errorText.classList.add("hidden");
    } else {
        errorText.classList.remove("hidden");
    }
})


// Hack pour vérifier si la couleur existe vraiment
function isValidColor(color) {
    const div = document.createElement("div");

    div.style.color = color;

    return div.style.color !== '';
}