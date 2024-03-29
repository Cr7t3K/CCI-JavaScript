// -------------------------------------------------------------------------------------- //
// ------------------------------------- Exercice 1 ------------------------------------- //
// -------------------------------------------------------------------------------------- //
let saveButton = document.getElementById("saveButton");
let inputText = document.getElementById("inputText");

saveButton.addEventListener("click", function () {
    let value = input.value;

    localStorage.setItem("todo", value)
});

let getButton = document.getElementById("getButton");

getButton.addEventListener("click", () => {
    let todo = localStorage.getItem("todo")

    let div = document.createElement("div");
    div.textContent = todo;

    let container = document.getElementById("container");
    container.appendChild(div)
})






// -------------------------------------------------------------------------------------- //
// ------------------------------------- Exercice 2 ------------------------------------- //
// -------------------------------------------------------------------------------------- //
let countContainer = document.getElementById("count");

document.addEventListener("DOMContentLoaded", () => {
    // let count = 0;
    // if (localStorage.getItem("count")) {
    //     count = localStorage.getItem("count")
    // }

    let count = localStorage.getItem("count") ?? 0

    count++
    // count = count + 1;
    localStorage.setItem("count", count)
    countContainer.textContent = count;
})




// -------------------------------------------------------------------------------------- //
// ------------------------------------- Exercice 3 ------------------------------------- //
// -------------------------------------------------------------------------------------- //
// Récupération de l'élément bouton "Enregistrer" à partir de l'ID
let saveTodoButton = document.getElementById("saveTodo");
// Récupération de l'élément champ de saisie pour une nouvelle tâche à faire
let input = document.getElementById("newTodo");
// Récupération du conteneur qui va afficher la liste des tâches à faire
let todoContainer = document.getElementById("todo-container");

// Ajout d'un écouteur d'événement sur le bouton "Enregistrer" pour capter les clics
saveTodoButton.addEventListener("click", () => {
    // Récupération de la valeur entrée dans le champ de saisie
    let value = input.value;

    // Récupération de la liste existante des tâches à faire depuis le localStorage,
    // ou initialisation d'un tableau vide si rien n'est trouvé
    let todoList = JSON.parse(localStorage.getItem("todoList")) ?? [];
    // Ajout de la nouvelle tâche à la liste
    todoList.push(value);

    // Mise à jour du localStorage avec la nouvelle liste des tâches à faire
    localStorage.setItem("todoList", JSON.stringify(todoList));

    // Création d'un nouvel élément représentant la tâche à faire et ajout à l'affichage
    let newTodo = createTodo(value);
    todoContainer.appendChild(newTodo);
})

// Fonction pour créer la liste complète des tâches à faire à partir du localStorage
function createTodoList() {
    // Récupération de la liste des tâches à faire depuis le localStorage
    let todoList = JSON.parse(localStorage.getItem("todoList"));

    // Itération sur chaque tâche à faire pour la créer et l'ajouter au conteneur
    todoList.forEach(function(todo) {
        let div = createTodo(todo);

        todoContainer.appendChild(div);
    });
}

// Fonction pour créer un élément HTML représentant une tâche à faire
function createTodo(todo) {
    // Création d'un nouvel élément div
    let div = document.createElement("div");
    // Ajout du texte de la tâche à faire dans l'élément div
    div.textContent = todo;

    // Retour de l'élément div pour être ajouté à l'interface utilisateur
    return div;
}

// Écouteur d'événement pour exécuter la création de la liste des tâches à faire
// une fois que le contenu de la page est complètement chargé
document.addEventListener("DOMContentLoaded", () => {
    createTodoList();
})
