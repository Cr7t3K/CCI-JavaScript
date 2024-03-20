// Initialisation d'un tableau représentant les articles dans le panier d'achat
const cart = [
    { id: 1, name: "Ordinateur", quantity: 1, price: 899.99 },
    { id: 2, name: "Téléphone", quantity: 2, price: 1500 },
    { id: 3, name: "BMW", quantity: 1, price: 5000 },
    { id: 4, name: "Souris", quantity: 10, price: 39.99 },
    { id: 5, name: "Casque", quantity: 5, price: 299 },
    { id: 5, name: "Crayon", quantity: 5, price: 5 },
];

// Création d'un nouveau tableau contenant uniquement les noms des articles
const articlesName = cart.map(article => article.name);
console.log(articlesName); // Affiche la liste des noms des articles

// Affiche le nom et le prix de chaque article du panier
cart.forEach(article => console.log(`${article.name}: ${article.price}€`));

// Filtre et retourne un nouveau tableau contenant uniquement les articles dont le prix est supérieur à 50
const over50 = cart.filter(article => article.price > 50)
console.log(over50); // Affiche les articles dont le prix est supérieur à 50€

// Calcule le coût total du panier en additionnant le prix de chaque article multiplié par sa quantité
const total = cart.reduce((total, article) => total + (article.price * article.quantity), 0)
console.log(`Coût total: ${total}€`); // Affiche le coût total du panier
