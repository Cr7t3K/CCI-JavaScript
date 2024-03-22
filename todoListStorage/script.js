// Importe les fonctions createList et createTask depuis le fichier taskService.js
import { createList, createTask } from "./taskService.js"

// Récupérer les éléments nécessaires du DOM
const addTaskBtnLocal = document.getElementById('addTaskBtnLocal');
const addTaskBtnSession = document.getElementById('addTaskBtnSession');


// Écouter l'événement de clic sur le bouton d'ajout de tâche pour le stockage local et de session
addTaskBtnLocal.addEventListener("click", createTask);
addTaskBtnSession.addEventListener("click", createTask);


// Fonction d'initialisation pour charger les tâches stockées et les afficher
function init() {
    const taskList = document.querySelector('#taskList');

    // Récupère les tâches stockées localement et en session, puis les convertit de JSON à des objets JavaScript
    const todoLocal = JSON.parse(localStorage.getItem('todo'));
    const todoSession = JSON.parse(sessionStorage.getItem('todo'));

    // Ajoute chaque tâche récupérée à la liste des tâches dans le DOM
    // Le troisième argument indique le type de stockage pour distinguer les tâches locales des tâches de session
    todoLocal?.forEach(task => createList(task, taskList, "local"))
    todoSession?.forEach(task => createList(task, taskList, "session"))
}

// Appelle la fonction d'initialisation pour charger les tâches au démarrage de l'application (rechargement F5 aussi)
init();