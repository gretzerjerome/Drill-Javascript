let nom =""; 

let caractere = { 
    name : "Minato", 
    age : 32, 
    items: ["épée","armure","cheval","ecuyer"]}; 
    
    for (let affiche in caractere){ 
        nom = nom + caractere[affiche]; 
    
    }     
        let items = ["épée","armure","cheval","ecuyer"]; 
        
        function giveltem(tableau) { 
            return tableau[Math.floor(Math.random() * tableau.length)]; } 
            
            
            console.log(nom); 
            console.log(giveltem(items));



//shop


arme1 =
{
    titre: "Épée",
    physique: 150,
    magique: 30,
    niveaurequis: 30,
    available: true
}
arme2 =
{
    titre: "Hache",
    physique: 300,
    magique: 2,
    niveaurequis: 20,
    available: false
}
arme3 =
{
    titre: "Sceptre",
    physique: 10,
    magic: 200,
    niveaurequis: 17,
    available: true
}


let arme = [{arme1}, {arme2}, {arme3}]

let display = () => {

    for(let key in arme){
        console.log("Arme disponible", arme[key])
    }
}
display()


let i
let display2 = () => {

    while(arme.niveaurequis >= 10 & i < arme.available, i++)
    {
        console.log(arme[key])
    }
}
display2()


// personnage  

let personnage = 
{
    name: "Minato",
    level: 100,
    life: 42000,
    weapon : "épée"
}
let arme = 
{
    damage: 500,

}
    attack () 
        {
            console.log(personnage.name, "attaque avec l'arme", personnage.weapon,". les dégâts sont de", 
        }


let damageAtk = (personnage.level * arme.damage);

}