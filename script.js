//   Votre mission est de coder un générateur de dégradés.
//   Vous allez manipuler des inputs de couleurs afin de créer des "linear-gradient" à la volée !

// A. Coder une interface basique
// Codez d'abord une interface très simple, contenant les éléments importants : boutons, inputs, liens, etc...
// Rajoutez un peu de style si besoin est. 

// Puis codez les fonctionnalités JavaScript.

// B. Fonctionnalités JavaScript à coder pour ce projet

// 1. Gérez l'implémentation de base des couleurs, il faut qu'il y est un dégradé lorsqu'on arrive sur le site (input, orientation, body...).
// 2. Gérez le changement de couleur, on doit pouvoir manipuler les inputs et provoquer le changement de couleur du site.
// 3. Occupez-vous de l'inclinaison avec l'input type "range".
// 4. Mettez en place la copie du dégradé en cliquant su le bouton "Copier le gradient".
// 5. Faites-en sorte de créer des dégradés au hasard en cliquant sur le bouton "random".
// 6. Bonne chance ! 

// C. Ajoutez du style à l'interface afin de terminer le projet.


let inputCol1 = document.querySelector('#inputCol1');
let inputCol2 = document.querySelector('#inputCol2');
let inputRang = document.querySelector('#inputRang');
let copy = document.querySelector('#copy');
let random = document.querySelector('#random');
let orien = document.querySelector('orientation');
let orient1 = document.querySelector('#orient1');
let span1 = document.querySelector('#span1');
let span2 = document.querySelector('#span2');
let angle = document.querySelector('#angle');

let objet ={
    angle : 90,
    colors: ['#ab180e','#1f17bf']
};

function init(){   
    // j'ajoute la couleur dans les deux inputs
    inputCol1.value = objet.colors[0];
    inputCol2.value = objet.colors[1];
    span1.innerHTML = objet.colors[0]
    span2.innerHTML = objet.colors[1]
    angle.innerHTML = objet.angle + '°'
    //  je donne du style a mon Body(header...)
    document.body.style.background =`linear-gradient(${objet.angle}deg,${objet.colors[0]},${objet.colors[1]})`;    
};

init();

let inCols = [...document.querySelectorAll("input[type='color']")]
inCols.forEach(element => {
    element.addEventListener("input",modihexa)
});

function modihexa(e){   
    let index = inCols.indexOf(e.target)
    objet.colors[index]=e.target.value
    init();
};

//sers a modifier l'ange de mon input
inputRang.addEventListener("input", changeAngle);
function changeAngle(e){  
    objet.angle=inputRang.value
    init();
};

random.addEventListener('click', function(){
    // il va chercher ma couleur en hexa et garde les 16 prmiers
    let color1 = (Math.random()*16777215).toString(16);
    // je donne la valeur à inputcolor de (0 à 6)
    objet.colors[0] = "#" + color1.slice(0, 6);
    let color2 = (Math.random()*16777215).toString(16);
    objet.colors[1] = "#" + color2.slice(0, 6);
    //Arrondir a la decimal avec Floor en parametre (random)
    objet.angle=(Math.floor(Math.random()*360))
    init()
});

copy.addEventListener('click', function(){
    navigator.clipboard.writeText(document.body.style.background)   
})








