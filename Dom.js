//Exercice 1


//A

let contenu = document.body;
    function charge() {
        document.body.classList.remove("bg-aqua");
        document.body.classList.add("bg-olive");
    }

console.log(contenu);
charge(contenu);

//B

function paragraphe() {
    document.getElementById('first-paragraph').className += "aqua";
}
paragraphe();

//C


document.querySelectorAll('.bg-silver').className += '.bg-teal';

//D

let classe = document.querySelectorAll ('.bg-silver');
document.querySelector('.bg-silver').className = '.bg-teal';

//E

let block = document.getElementsByTagName("blockquote").className += "bg-white";
//Exercice 2

let table = document.querySelector('#my-table');
table.className += ".bg-purple";
console.log(table);

let container = document.querySelectorAll('.container p');
for (let A = 0; A < container.length; A++) {

container[A].className += '.shadow';}

console.log(container)


//EXERCICE 2

let table = document.querySelector('#my-table');
table.className += ".bg-purple";
console.log(table);

let cont = document.querySelectorAll('.container p');
for (let i = 0; i < cont.length; i++) {
    
cont[i].className += '.shadow';}

console.log(cont)

//Exercice 3

//A 

let pre = document.querySelectorAll("pre");
for (let A = 0; A < pre.length; A++) {

pre[0].style.color = "white";
pre[0].style.backgroundColor = "yellow";
pre[0].style.borderTop = "3px solid red";
pre[0].style.borderBottom = "3px solid red";
}

console.log(pre);

//B 

let titre3 = document.querySelector('h3');
let titre = titre3.innerHTML = "<em>Itelic title ! yeah !</em>";

console.log(titre3);

//C

let titre2 = document.querySelector('h2');
let titreA = titre2.innerHTML = "<strong>HTML doesn't work !</strong>";

console.log(titre2);

//Exercice 4 

//A 

let elementP = document.querySelector('ul'); 
let firstChild = elementP.firstChild; 

let Li = document.createElement('li'); 
Li.id = 'nouveau'; 

let texte = document.createTextNode("Mon meilleur ami est <a href='http://www.google.com/%27%3EGoogle</a>'"); 

Li.appendChild(texte); elementP.insertBefore(Li, firstChild); 

//B 

let lien = document.querySelectorAll('li'); lien[3].style.color = "white"; console.log(lien);