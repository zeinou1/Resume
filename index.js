// Créer un événement au click sur le hamburger menu pour sortir la sidebar, ranger la sidebar si on reclick dessus

// Ranger la sidebar si on click sur le contenu principal


// Aide
// Priorités en CSS :important > id > classe > baliseHtml


// })
const sidebar = document.querySelector("#side-bar");


btn.addEventListener("click", () => { 
    
    sidebar.classList.toggle("active");
    
});

// fermer si on touche le contenu
const content = document.querySelector('.content')
content.addEventListener("click", () => { 
    sidebar.classList.remove("active"); 
})

// BONUS
// Créer en css l'hamburger menu qui se transforme en croix

//cursor
const cursor = document.querySelector('.cursor-perso');
window.addEventListener("mousemove", HandleCursorMove)
function HandleCursorMove (e) {
    cursor.style.transform  = `translate(calc(${e.clientX}px - 50%), calc(${e.clientY}px - 50%))`
}
// anime Nom

const title = document.querySelector('h1')
const subtitle = document.querySelector('.hero_title')
const apropos = document.querySelector('.hero_btn-push')
const arrow = document.querySelector('.hero_btn-push')
const txt = "Mohamed zeinoudini"

function textAnime (text,index) {
    if(index > 3) subtitle.classList.add('active')
    if(index > 6) arrow.classList.add('active')

    if(index < text.length) {

        setTimeout(() => { 
            title.innerHTML += `${text[index]}`;
           setTimeout(() => { 
            
            textAnime(text,index +1)
           },190)
        },15)
       

    }
}
setTimeout(() => {
    textAnime(txt,0)
},300)

//anime langues
const target = document.getElementById("CiBle");
let langues = ["Html", "Css", "Javascript","React","Sass"];
let IndexMots = 0;
let IndexLetter = 0;

const createLetter = () => {
  const letter = document.createElement("span");
  target.appendChild(letter);


  letter.textContent = langues[IndexMots][IndexLetter];

  setTimeout(() => {
    letter.remove();
  }, 2800);
};

const recurSiveFunction = () => {
  setTimeout(() => {
    if (IndexMots >= langues.length) {
      IndexMots = 0;
      IndexLetter = 0;
      recurSiveFunction();
    } else if (IndexLetter < langues[IndexMots].length) {
      createLetter();
      IndexLetter++;
      recurSiveFunction();
    } else {
      IndexMots++;
      IndexLetter = 0;
      setTimeout(() => {
        recurSiveFunction();
      }, 2800);
    }
  }, 60);
};
recurSiveFunction();
