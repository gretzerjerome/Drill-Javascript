   
   // exercice 1
   // -------------
   
    let fr = "Bonjour tout le monde"
    let en = "Hello world"
    let es = "Hola, Mundo"   
    
    
    let langue = prompt("Veuillez entrer votre langue");
    console.log(langue)

    if(langue=="fr")
        console.log(fr)
    else if(langue=="en")
        console.log(en)

    else if(langue=="es")
        console.log(es)


//exercice 2 
//----------

let score = prompt("veuillez entrez votre score");
   console.log(score)

let resultat=score

if(resultat >= 90){
   console.log ("vous avez atteint le rang A, bravo")
}
else if (resultat >50 & resultat <90){
   console.log ("vous avez atteint le rang B, pas mal")
}
else if (resultat <= 50){
   console.log ("vous avez atteint le rang C, recommencez")

}


//exercice 3
//----------

let mot = prompt("veuillez entrer un mot")
    console.log(mot)
let nombre = prompt("veuillez entrer un nombre")
    console.log(nombre)

    if(nombre >1)
        console.log(mot+"s")
    
    else if(nombre=1)
        console.log(mot)