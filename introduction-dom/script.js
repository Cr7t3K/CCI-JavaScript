const button = document.querySelector('#button');
const title = document.getElementById('title');

button.addEventListener('click', function (){
    title.innerHTML = 'Changement du <span style="font-style: italic">texte</span>';
});



// ----------------------------------------------------------------- //
// ----------------------------- Bonus ----------------------------- //
// ----------------------------------------------------------------- //

title.addEventListener('mouseover', function (){
    title.classList.add('red')
});

title.addEventListener('mouseout', function (){
    title.classList.add('red')
});

document.addEventListener('keypress', function (){
    console.log("J'ai appuyer sur une touche de mon clavier");
});