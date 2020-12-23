//# Exo-100-JS-Heritage-et-prototypes
//Pour cet exo, vous utiliserez exclusivement les **objets à prototypes**.
// Choississez vous même le type de données que vous mettrez dans les propriétés.

//1. Créez un Objet **Vehicule**, cet objet dispose des propriétés
//
//     - couleur
//     - roues
//     - marque
//     - demarrer: function ( affichez du texte en console)
//     - arreter: function ( affichez du texte en console )

function Vehicule(couleur, roues, marque,){
    this.couleur = couleur;
    this.roues = roues;
    this.marque = marque;
    function demarrer(){
        console.log("Le vehicule a demarrer !!");
    }
    function arreter(){
        console.log("Le vehicule est arreter !!");
    }
}

//2. Créez un objet **Velo** qui hérite de l'objet **véhicule**, les propriétés seront héritées,
//    mais cet objet dispose aussi des propriétés suivantes:
//
//     - rayonRoues
//     - typePeinture
//     - monter: function ( affichez du texte en console, p.ex: Je monte sur mon vélo )

let Velo = function (rayonRoues, typePeinture){
    this.rayonRoues = rayonRoues;
    this.typePeinture = typePeinture;
    Vehicule.call(this ,couleur, roues, marque);
    function monter(){
        console.log("Monter sur le velo !!");
    }
}
Velo.prototype = object.create(Vehicule.prototype);
Velo.prototype.constructor = Vehicule;


//3. Créez un objet **Voiture** qui hérite de l'objet **Véhicule**, les propriétés seront héritées,
//    mais propriétés suivantes en plus:
//
//     - assurance
//     - proprietaire
//     - passerAuCarWash : function ( blablabla ;-)
//
// Adaptez le constructeur pour qu'il prenne les paramètres ( faites comme d'hab quoi ).

let Voiture = function (assurance, proprietaire){
    this.assurance = assurance;
    this.proprietaire = proprietaire;
    Vehicule.call(this,couleur, roues, marque);
    function carWash(){
        console.log("La voiture passe au carWash !!");
    }
}
Voiture.prototype = object.create(Vehicule.prototype);
Voiture.prototype.constructor = Vehicule;