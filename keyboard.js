// Exercice 1 

let div = document.querySelector('div');
document.onkeydown = function(e) {
 switch (e.keyCode) { //Keycode = "code pavé numerique"
     case 96: //"0"
     div.style.color = "red";
     break;
     case 97: //"1"
     div.style.color = "blue";
     break;
     case 98: //"2"
     div.style.color = "yellow";
     break;
     case 99: //"3"
     div.style.color = "grey";
     break;
     case 100: //"4"
     div.style.color = "green";
     break;
     case 101: //"5"
     div.style.color = "orange";
     break;
     case 102: //"6"
     div.style.color = " #FFFF00";
     break;
     case 103: //"7"
     div.style.color = "purple";
     break;
     case 104: //"8"
     div.style.color = "    #00FFFF";
     break;
     case 105: //"9"
     div.style.color = " #610B5E";
     break;
 }
};
//Exercice 2

 let left = document.getElementById('left');
 let up = document.getElementById('up');
 let right = document.getElementById('right');
 let down = document.getElementById('down');

document.addEventListener("keydown", function(e) {
 switch (e.keyCode) { // Keycode = "code des fleches du pavé numerique"
 case 37 : //fleche du gauche
 left.classList.add("highlight"); 
 break;
 case 38: //fleche du haut
 up.classList.add("highlight");
 break;
 case 39 : //fleche de droite
 right.classList.add("highlight");
 break;
 case 40 : //fleche du bas
 down.classList.add("highlight");
 break;
}
})
document.addEventListener("keyup", function(e) {
 switch (e.keyCode) {
 case 37 :
 left.classList.remove("highlight");
 break;
 case 38:
 up.classList.remove("highlight");
 break;
 case 39 :
 right.classList.remove("highlight");
 break;
 case 40 :
 down.classList.remove("highlight");
 break;
}
})
console.log(div);

</script>
</body>
</html>
//Exercice 2

 let left = document.getElementById('left');
 let up = document.getElementById('up');
 let right = document.getElementById('right');
 let down = document.getElementById('down');

document.addEventListener("keydown", function(evenement) { //Keydown = "enfoncer, pousser la touche"
 switch (evenement.keyCode) { // Keycode = "code des fleches du pavé numerique"
 case 37 : //fleche du gauche
 left.classList.add("highlight"); 
 break;
 case 38: //fleche du haut
 up.classList.add("highlight");
 break;
 case 39 : //fleche de droite
 right.classList.add("highlight");
 break;
 case 40 : //fleche du bas
 down.classList.add("highlight");
 break;
}
})
document.addEventListener("keyup", function(evenement) { //Keyup = "relacher la touche"
 switch (evenement.keyCode) {
 case 37 :
 left.classList.remove("highlight");
 break;
 case 38:
 up.classList.remove("highlight");
 break;
 case 39 :
 right.classList.remove("highlight");
 break;
 case 40 :
 down.classList.remove("highlight");
 break;
}
})
console.log(div);

</script>
</body>
</html>
<script>