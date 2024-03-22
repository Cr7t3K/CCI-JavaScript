// Définir une fonction pour gérer le stockage de données dans le localStorage ou sessionStorage
export function storage(storageType, value) {

    // Déterminer si le stockage doit être effectué dans le localStorage ou le sessionStorage
    let storage = storageType === "local" ? localStorage : sessionStorage;

    // Récupérer l'ancien contenu stocké sous la clé 'todo', ou initialiser à un tableau vide si rien n'est trouvé
    const oldStorage = JSON.parse(storage.getItem("todo") || "[]");

    // Ajouter la nouvelle valeur au tableau récupéré
    oldStorage.push(value);

    // Enregistrer le nouveau tableau mis à jour dans le stockage sous la même clé 'todo'
    storage.setItem('todo', JSON.stringify(oldStorage));

    // Ancien code commenté, remplacé par une implémentation plus dynamique ci-dessus
    // if(storageType === "local") {
    //     const oldStorage = JSON.parse(localStorage.getItem("todoList") || "[]");
    //     oldStorage.push(value)
    //     localStorage.setItem('todoList', JSON.stringify(oldStorage));
    // } else {
    //     const oldStorage = JSON.parse(sessionStorage.getItem("todoList") || "[]");
    //     oldStorage.push(value)
    //     sessionStorage.setItem('todoList', JSON.stringify(oldStorage));
    // }
}

// Définir une fonction pour retirer une valeur spécifique du stockage
export function remove(storageType, value) {
    // Déterminer si la suppression doit être effectué dans le localStorage ou le sessionStorage
    let storage = storageType === "local" ? localStorage : sessionStorage;

    // Récupérer la liste actuelle des tâches sous la clé 'todo'
    const tasks = JSON.parse(storage.getItem('todo'));

    // Créer un nouveau tableau en filtrant la valeur à retirer
    const updatedTasks = tasks.filter(task => task !== value);

    // Enregistrer le nouveau tableau de tâches, sans la valeur retirée, dans le stockage
    storage.setItem("todo", JSON.stringify(updatedTasks));
}