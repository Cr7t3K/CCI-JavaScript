// Récupérer les éléments nécessaires du DOM
const addTaskBtn = document.getElementById('addTaskBtn'); // Bouton pour ajouter une nouvelle tâche
const newTaskInput = document.getElementById('newTaskInput'); // Zone de texte pour entrer la nouvelle tâche
const taskList = document.querySelector('#taskList'); // Liste où les tâches seront ajoutées

// Écouter l'événement de clic sur le bouton d'ajout de tâche
addTaskBtn.addEventListener("click", function () {
    const taskText = newTaskInput.value.trim(); // Récupérer et nettoyer le texte de l'input

    // Vérifier si le texte de la tâche n'est pas vide
    if (taskText) {
        // Supprimer les styles d'erreur du champ de saisie
        newTaskInput.classList.remove('outline', 'outline-red-400', 'outline-1');
        newTaskInput.parentElement.querySelector('span').classList.add('hidden');

        // Créer un nouvel élément de liste pour la nouvelle tâche
        const li = document.createElement("li");
        li.className = "flex justify-between items-center bg-white px-4 py-2 shadow-sm mb-2"; // Ajouter des classes pour le style
        li.innerHTML = `
            <span>${taskText}</span> <!-- Afficher le texte de la tâche -->
            <div>
                <button class="favoriteBtn p-2"> <!-- Bouton pour marquer la tâche comme favorite ou terminée -->
                    <i class="fa-regular fa-circle-check fa-lg"></i>
                </button>
                <button class="deleteBtn p-2">❌</button> <!-- Bouton pour supprimer la tâche -->
            </div>
        `;
        taskList.appendChild(li); // Ajouter la nouvelle tâche à la liste
        newTaskInput.value = ''; // Effacer le champ de saisie

        // Ajouter une écoute d'événement sur le bouton de suppression de la tâche
        const deleteBtn = li.querySelector('.deleteBtn');
        deleteBtn.addEventListener("click", function () {
            li.remove(); // Supprimer l'élément de la liste
        });

        // Ajouter une écoute d'événement sur le bouton de marque comme terminée
        const taskDoneBtn = li.querySelector('.favoriteBtn');
        taskDoneBtn.addEventListener("click", function () {
            const icon = li.querySelector('i'); // Trouver l'icône à l'intérieur du bouton
            icon.classList.toggle('fa-solid'); // Basculer le style de l'icône
            icon.classList.toggle('text-green-500'); // Changer la couleur de l'icône pour indiquer la complétion
        });
    } else {
        // Ajouter des styles d'erreur au champ de saisie si le champ est vide
        newTaskInput.classList.add('outline', 'outline-red-400', 'outline-1');
        newTaskInput.parentElement.querySelector('span').classList.remove('hidden');
    }
});
